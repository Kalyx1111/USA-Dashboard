"""RSS aggregator - free, no key. English-language feeds only.

Feed URLs are either confirmed from a publisher's own feed (SpaceNews returned
live items during verification), or listed in a feed directory (FeedSpot)
pending the connector's own live check. Each feed reports its own status and
fails independently. World-wide feeds keep only region-relevant headlines.
"""
from __future__ import annotations
import re
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "rss"

FEEDS = [
    {"url": "https://news.usni.org/feed", "source": "USNI News (naval, fleet tracking)"},
    {"url": "https://blog.usni.org/feed", "source": "USNI Blog (naval analysis)"},
    {"url": "https://breakingdefense.com/feed", "source": "Breaking Defense"},
    {"url": "https://spacenews.com/feed/", "source": "SpaceNews"},
    {"url": "https://www.space.com/feeds.xml", "source": "Space.com"},
    {"url": "https://therecord.media/feed", "source": "The Record (cyber)"},
    {"url": "https://www.aljazeera.com/xml/rss/all.xml", "source": "Al Jazeera"},
    {"url": "https://news.google.com/rss/search?q=US+NORAD+Arctic+defence&hl=en-US&gl=US&ceid=US:en", "source": "Google News: NORAD and Arctic defence"},
    {"url": "https://news.google.com/rss/search?q=Greenland+Denmark+United+States&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Greenland"},
    {"url": "https://news.google.com/rss/search?q=Minuteman+Sentinel+ICBM&hl=en-US&gl=US&ceid=US:en", "source": "Google News: ICBM programmes"},
    {"url": "https://news.google.com/rss/search?q=Trident+submarine+Navy&hl=en-US&gl=US&ceid=US:en", "source": "Google News: US Navy submarines"},
    {"url": "https://news.google.com/rss/search?q=Cape+Canaveral+Kennedy+launch&hl=en-US&gl=US&ceid=US:en", "source": "Google News: US launches"},
    {"url": "https://news.google.com/rss/search?q=Panama+Canal+shipping&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Panama Canal"},
    {"url": "https://news.google.com/rss/search?q=Canada+defence+NORAD&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Canada defence"},
    {"url": "https://news.google.com/rss/search?q=Brazil+Argentina+Chile+navy&hl=en-US&gl=US&ceid=US:en", "source": "Google News: South America navies"},
    {"url": "https://news.google.com/rss/search?q=Mexico+cartel+border&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Mexico"},
    {"url": "https://news.google.com/rss/search?q=Venezuela+Colombia+military&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Venezuela and Colombia"},
    {"url": "https://news.google.com/rss/search?q=Enbridge+Trans+Mountain+pipeline&hl=en-US&gl=US&ceid=US:en", "source": "Google News: pipelines"},
    {"url": "https://news.google.com/rss/search?q=ransomware+Canada+United+States&hl=en-US&gl=US&ceid=US:en", "source": "Google News: US and Canadian cyber"},
]

WORLD_WIDE_SOURCES = ('USNI News (naval, fleet tracking)', 'USNI Blog (naval analysis)', 'Breaking Defense', 'SpaceNews', 'Space.com', 'The Record (cyber)', 'Al Jazeera')
REGION_TERMS = ["united states", "u.s.", "us navy", "us army", "us air force", "us military", "america", "american", "pentagon", "norad", "northcom", "stratcom", "cyber command", "nsa", "minuteman", "sentinel", "icbm", "trident", "kings bay", "bangor", "vandenberg", "cape canaveral", "kennedy space", "pituffik", "greenland", "canada", "canadian", "ottawa", "alaska", "hawaii", "pearl harbor", "mexico", "mexican", "cuba", "guantanamo", "panama", "puerto rico", "brazil", "brazilian", "alcantara", "argentina", "argentine", "chile", "chilean", "peru", "colombia", "venezuela", "ecuador", "bolivia", "paraguay", "uruguay", "guyana", "suriname", "falklands", "malvinas", "iceland", "kourou", "french guiana", "enbridge", "trans mountain", "pipeline", "magellan", "latin america", "south america", "arctic"]


def configured() -> bool:
    return True


def _looks_english(text: str) -> bool:
    if not text:
        return False
    latin = sum(1 for c in text if c.isascii() and c.isalpha())
    letters = sum(1 for c in text if c.isalpha())
    if letters == 0:
        return True
    return (latin / letters) > 0.6


def _relevant(title: str, source: str) -> bool:
    if not source.startswith(WORLD_WIDE_SOURCES):
        return True
    t = title.lower()
    return any(re.search(r'\b' + re.escape(term) + r'\b', t) for term in REGION_TERMS)


def fetch(per_feed_limit: int = 15) -> ConnectorResult:
    from .. import safe_http
    import feedparser
    all_items, errors, ok_feeds = [], [], 0
    for feed in FEEDS:
        try:
            r = safe_http.safe_get(feed["url"])
            if r.status_code != 200:
                errors.append(f"{feed['source']}: HTTP {r.status_code}")
                continue
            parsed = feedparser.parse(r.content)
            if parsed.bozo and not parsed.entries:
                errors.append(f"{feed['source']}: not a readable feed")
                continue
            ok_feeds += 1
            count = 0
            for entry in parsed.entries:
                title = getattr(entry, "title", "").strip()
                if not title or not _looks_english(title) or not _relevant(title, feed["source"]):
                    continue
                all_items.append(Item(
                    category=classify(title), label=title[:90] if len(title) > 90 else title,
                    text=title, source=feed["source"],
                    date=getattr(entry, "published", "") or getattr(entry, "updated", ""),
                    url=getattr(entry, "link", None), connector=NAME,
                ).to_dict())
                count += 1
                if count >= per_feed_limit:
                    break
        except safe_http.FetchError as e:
            errors.append(f"{feed['source']}: blocked ({e})")
        except Exception as e:
            errors.append(f"{feed['source']}: {type(e).__name__}")
    if not all_items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(all_items)} items from {ok_feeds} of {len(FEEDS)} feeds"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, all_items)
