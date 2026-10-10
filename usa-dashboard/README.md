# USA DASHBOARD - v1

Covers North America (the United States, including Alaska, Hawaii and Puerto Rico; Canada; Mexico), Central America, the
Caribbean, South America, Greenland, Iceland and the Falklands, with the Atlantic, Pacific and Arctic approaches. It uses the
China Dashboard v6 architecture: Flask with waitress, a supervisor with automatic restart, AES-256-GCM key storage, the same
15 headings (the maritime heading is retitled "Maritime Chokepoints & Sea Lanes" for the Americas), layer toggles and live
connectors.

**India is outside this frame and nothing about India is plotted.** Its towns, airports, ports and rivers are not in the data.
The two US nuclear plants named "Indian Point" are in Buchanan, New York.

## Start

Windows: double-click `start.bat`. The dashboard runs at **http://127.0.0.1:8820/** (the port is set in `run.py` and
`start.bat`). The first pass of the news connectors takes a few minutes, because GDELT is paced at six seconds per query.
The page is large (about 6 MB) because it carries 2,558 points, each with its source.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program - Naval & Maritime
Security - Maritime Chokepoints & Sea Lanes - Air Force & Aviation - Space Tech & Aerospace - Critical Tech & AI Governance -
Cyber Espionage & APTs - Darkweb & Threat Intel - Economic & Trade - Internal Security & Intelligence Operations - Social Pulse
& Public Sentiment - Happiness & Wellbeing Indices - Natural Hazards & Environmental Risks.

Routing is rule-based (`app/classify.py`). A maritime chokepoint story (for example a Panama Canal drought story) is routed
to the chokepoint heading before the hazards rule, so it is not filed as weather.

## The map

- **Projection:** Lambert conformal conic (standard parallels 20 and 60 degrees north; central meridian 91 degrees west).
  The frame runs from 170 degrees west to 10 degrees west and from 56 degrees south to 84 degrees north.
- **Shaded:** the United States. **Outlined:** the other countries of the Americas, Greenland, Iceland and the Falklands.
- **State and province lines:** the United States, Canada, Mexico, Brazil, Argentina, Colombia, Venezuela, Peru and Chile.
- **Rivers:** 523 segments from Natural Earth, Americas only.
- **Towns and capitals:** 484 places from Natural Earth (200,000 or more people, and capitals).
- **Civil airports:** 1,755 large and medium airports from OurAirports (public domain, CC0).
- **Military-named airfields:** 291, chosen by name ("air base", "air force", "naval station" and similar). A name is a
  clue, not a confirmation of use, and the perimeter is not published.
- **Seaports:** 334 Natural Earth port points (public domain).
- **Sea labels:** the Gulf of Mexico, Caribbean Sea, Atlantic, Pacific, Gulf of Alaska, Beaufort Sea, Baffin Bay, Labrador Sea,
  Hudson Bay, Denmark Strait and Scotia Sea.

## What is plotted: 178 points, each with its status, date and source

Each tooltip gives the source. "Not verified in this build" marks public knowledge that this build's searches did not confirm
(29 of the points carry that flag). Positions are approximate unless the note says otherwise. The categories are:

- **Command and air defence (6 command and station sites, 4 US installations):** NORAD and
  US Northern Command at Peterson Space Force Base; NORAD's alternate centre at Cheyenne Mountain; Strategic Command at Offutt
  (with its Global Operations Center); Army Forces Strategic Command at Redstone Arsenal; NORAD's regional headquarters at
  Elmendorf, Tyndall and Winnipeg; Air Force Global Strike Command at Barksdale; and Pituffik Space Base in Greenland.
- **Cyber and signals:** Fort George G. Meade (the NSA and US Cyber Command, which share their headquarters). The NSA Utah data
  centre and the Communications Security Establishment in Ottawa are flagged (location approximate).
- **Strategic missiles (5 sites):** the three ICBM wings (Minot, Malmstrom and F.E. Warren), with the
  Sentinel replacement planned at all three; and Vandenberg, where unarmed Minuteman III test launches were made on 3 March and
  20 May 2026. Fort Greely's interceptors are flagged.
- **Nuclear weapons complex and waste (public status only):** Pantex (assembly, dismantlement and maintenance), Y-12 (uranium
  storage), Savannah River (tritium), WIPP (defence waste repository), the Kirtland storage complex (described by an advocacy
  group as the largest in the US; holdings are not published), and the Los Alamos, Sandia, Livermore and Nevada sites. Hanford
  and Idaho National Laboratory are flagged.
- **Nuclear power plants (70 plants from the WRI database, 2018 data):** the US, Canada, Mexico, Brazil and Argentina. Several
  US plants in the list have since closed (Indian Point, Pilgrim, Oyster Creek, Vermont Yankee and others); their notes say so.
- **Submarine and naval bases:** the Trident bases at Kings Bay (Georgia, Atlantic) and Bangor (Washington, Pacific, with the
  warhead store); Pearl Harbor-Hickam; Canada's Victoria-class submarines at CFB Esquimalt and CFB Halifax; Brazil's submarine
  base at Itaguaí (the Riachuelo-class boats and the nuclear submarine under construction); and Argentina's Mar del Plata base.
  Chile's Talcahuano base is flagged. Naval Station Norfolk (the largest), Naval Base San Diego, Mayport, Pensacola, Everett,
  Great Lakes and Guantánamo Bay are listed from the Navy's directory and public sources.
- **Air bases:** Kangerlussuaq (Greenland; the first F-35 landing in September 2026), Keflavík (Iceland; NATO's Arctic Sentry
  staging), CFB Goose Bay, Bagotville, Cold Lake and Trenton, RAF Mount Pleasant (Falklands), plus the 291 military-named
  airfields from OurAirports.
- **Space (10 sites):** Cape Canaveral Space Force Station, Kennedy Space Center Launch Complex 39 (Artemis II, 1
  April 2026), Vandenberg's launch complexes, Kaena Point and New Boston (Space Base Delta 1), the Guiana Space Centre at Kourou,
  and the Alcântara launch centre in Brazil. Wallops, Kodiak and Starbase are flagged.
- **Defence industry (4 sites):** the Kansas City campus (non-nuclear components) is verified; Electric Boat,
  Newport News and Halifax Shipyard are flagged.
- **Chokepoints (11):** the Panama Canal (drought-driven slot cuts from 4 September 2026) and the Strait of
  Magellan (traffic up more than 70% in August and September 2026). The Beagle Channel, Bering Strait, Davis Strait, Denmark
  Strait, Nares Strait, Strait of Juan de Fuca, Florida Straits, Windward Passage and Yucatán Channel are public information,
  flagged as not verified. The Drake Passage lies south of the frame.
- **Pipelines and terminals (5):** the Trans Mountain system to Burnaby (expanded since May 2024), Enbridge Line 5
  through the Straits of Mackinac (a Bad River reroute was under construction in March 2026), Line 61 (Southern Access), and two
  Gulf Coast export terminals whose exact locations are flagged.
- **Flashpoints (2):** the Falklands / Malvinas (sovereignty dispute; UK base at Mount Pleasant) and the US-Denmark security talks
  over Greenland (reported in September 2026; not confirmed).
- **South American navies:** Itaguaí, Mar del Plata, and Talcahuano (flagged). The Argentine and Brazilian submarine plans and
  Chile's two Scorpènes are in the reference items.

## Gaps (not verified in this build or not plotted)

- **US Army and Air Force installations:** most posts, divisions and corps are not plotted. The 291 military-named airfields
  from OurAirports are reference points only.
- **Other US strategic bases** (for example Whiteman and Ellsworth, Langley, MacDill, Eglin, Edwards, Eielson, Oceana) are not
  plotted, and neither are the Pacific Missile Range or the missile-defence sites beyond Fort Greely.
- **Nuclear:** the WRI list is from 2018, so operating status is not current; the nuclear power plants are not re-verified; Angra 3
  is not separately checked.
- **Space:** Spaceport America, Mojave, Oklahoma and the Starship site are not plotted.
- **Pipelines and reserves:** the Trans-Alaska, Colonial, Keystone and Dakota Access systems are not plotted. The Strategic
  Petroleum Reserve's site list is not verified; its total is in the reference items.
- **Latin America:** the navies of Peru and Colombia are flagged, and Venezuela, Ecuador, Uruguay, Paraguay, Bolivia, Guyana and
  Suriname are not plotted. Mexico's military sites and Pemex facilities are not plotted, and nor are Puerto Rico's installations.
- **Canada and Greenland:** CFB Comox, Shearwater, Gander and Greenwood are not plotted; Station Nord and Daneborg are not plotted.
- **News:** only seven verified global feeds are included. The regional press is reached through Google News search feeds, which
  are aggregators, so the outlets are not named by the feed.

## News, social and dark-web sources

- **Verified feeds (7):** USNI News and the USNI Blog, Breaking Defense, SpaceNews, Space.com, The Record and Al Jazeera.
- **Google News search feeds (12):** NORAD and Arctic defence, Greenland, ICBM programmes, US Navy submarines, US launches,
  the Panama Canal, Canadian defence, South American navies, Mexico, Venezuela and Colombia, pipelines, and US and Canadian cyber.
- **GDELT:** 30 English-language queries across the commands, the missiles, the submarines, the launches, the chokepoints, the
  South American navies and the energy infrastructure.
- **USGS earthquakes:** events inside the frame (Alaska, the Caribbean and the Andes are all in it).
- **Ransomware.live:** claims filtered to the Americas' country codes. Group claims are labelled unverified.
- **X (Twitter):** official API v2 recent search with 10 queries. Set `X_BEARER_TOKEN`. Recent search needs a paid tier.
- **Facebook and Instagram:** official Graph and Business Discovery APIs. Set your tokens and list your own pages or accounts.
- **Telegram:** `data/telegram_channels.json` carries the 16-channel public list from the earlier build. It has not been verified
  for the Americas, so add the channels you verify.
- **Dark web (Tor):** none configured. Add onion sources you have verified on the outlet's own site.

## Reference items

Each is dated and carries its source: the reported Greenland security agreement (September 2026; not confirmed); the NORAD
deployment to Pituffik (January 2026); the Danish F-35s at Kangerlussuaq (16 September 2026); the Minuteman III test launches (3
March and 20 May 2026); the Sentinel schedule (first test in 2027; initial operating capability in the early 2030s); the GAO view
that Minuteman III could stay in service to 2050; the Trident bases; the weapons complex; the Kirtland storage complex; the
command headquarters; the Victoria-class submarines; the Canadian air bases; Norfolk; Artemis II; the Cape Canaveral and Alcântara
launch history; the Guiana Space Centre; the Panama Canal and Magellan traffic; the Trans Mountain, Line 5 and the Strategic
Petroleum Reserve; the Brazilian, Argentine and Chilean submarine programmes; the Falklands; and the Treaty of Tlatelolco.

## Tests

36 Python tests (`python -m pytest tests/`) and three browser suites (`npm test`), which load the shipped page into a real DOM.
The layer test fails the build if any toggle has no data behind it.

## Security

- Keys and tokens are encrypted with AES-256-GCM and never appear in error messages.
- The server listens on 127.0.0.1 only.
- Strict Content-Security-Policy: no third-party scripts, fonts or trackers.
- Headlines and labels are escaped before display; only http and https links become clickable.
- Telegram handles, Instagram usernames and Facebook Page IDs are validated before any URL is built.
- Requests can go through a proxy you choose (`PROXY_URL`).

A dashboard cannot secure your whole PC or phone, and it cannot hide your IP address from the sites it fetches from unless you
route traffic through a VPN, which can still see your traffic.

## Honest limitations

- **Most positions are approximate.** Bases and industrial sites sit at their town or area centre; open sources do not publish
  perimeters. Each tooltip says so.
- **Some points are not verified in this build.** They are flagged in their tooltips and listed under Gaps.
- **Nuclear and weapons information is public status only.** No holdings, warhead numbers, security arrangements or targeting
  information are given or implied; advocacy-group descriptions are attributed to the group.
- **Events change daily.** The sources are current to reports up to 10 October 2026. Check them before you rely on any event.
- **No live news was fetched in the build sandbox,** which has no internet access. The status panel on your machine shows the real
  results.
- **The map is not a targeting product.** It maps publicly reported locations and events for analysis.
- **Single-user and local.** It runs on your machine while it is open.

## What changed in v1.1

- **The map outlines were offset in v1.** The browser projection re-centred the outlines, so the shaded United States, Canada and Mexico sat away from their towns, airports and sites. v1.1 projects every outline with the same formula as the points, so they agree. Check: the Washington, D.C. marker now sits inside the shaded United States.
- No other code or data changed.
