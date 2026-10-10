# USA Dashboard

A locally hosted **OSINT and Geospatial Intelligence Platform** for monitoring United States strategic capabilities, military infrastructure, nuclear facilities, aerospace, cyber intelligence, energy security and developments across the Americas.

***

#### 🌎 Geographic Coverage

- **Primary focus:** United States, including Alaska, Hawaii and Puerto Rico.
- **Regional coverage:** Canada, Mexico, Central America, the Caribbean, South America, Greenland, Iceland and the Falkland Islands.
- **Strategic geography:** Atlantic, Pacific and Arctic approaches, maritime chokepoints and regional sea lanes.
- **Map projection:** Lambert Conformal Conic for a readable view spanning Greenland to Tierra del Fuego.
- **Infrastructure:** 484 towns and capitals, 1,755 civil airports, 299 air-base references, 334 ports and 81 nuclear-related map entries, as reported by the build.
- **Strategic sites:** 178 points with status, date and source information.

***

#### 🧭 15 Intelligence Categories

1. Geopolitical & Diplomatic
2. Military Operations & Force Posture
3. Strategic Arms & Nuclear Program
4. Maritime Chokepoints & Sea Lanes
5. Air Force & Aviation
6. Space Tech & Aerospace
7. Critical Tech & AI Governance
8. Cyber Espionage & APTs
9. Darkweb & Threat Intel
10. Economic & Trade
11. Internal Security & Intelligence Operations
12. Social Pulse & Public Sentiment
13. Happiness & Wellbeing Indices
14. Natural Hazards & Environmental Risks
15. Regional Strategic Developments

***

#### 🚀 Strategic Intelligence Layers

- **Strategic missiles:** Minot, Malmstrom and F.E. Warren ICBM wings, planned Sentinel deployments and Vandenberg Minuteman III test-launch references.
- **Command and cyber:** NORAD, NORTHCOM, Cheyenne Mountain, STRATCOM, NSA and US Cyber Command reference locations.
- **Naval and submarine facilities:** Kings Bay, Bangor, Pearl Harbor, Norfolk, San Diego and selected Canadian and South American naval facilities.
- **Nuclear complex:** Pantex, Y-12, Savannah River Site, WIPP, Kirtland and selected national laboratory references.
- **Arctic and space:** Pituffik Space Base, Keflavík, Cape Canaveral, Kennedy Space Center, Vandenberg, Kourou and Alcântara.
- **Energy security:** Strategic Petroleum Reserve, Gulf Coast export terminals, Trans Mountain and Enbridge pipeline references.
- **Maritime chokepoints:** Panama Canal and Strait of Magellan, alongside selected sea-lane and regional infrastructure references.

***

#### 📰 News & Intelligence Sources

- Seven verified global news feeds.
- Regional news discovery through Google News search feeds.
- Configurable intelligence categories and keyword-based news classification.
- External source connectivity depends on internet access and the availability of each provider.

**Verification note:** Live news retrieval was not tested because the build environment had no internet access. Google News search feeds are aggregators rather than direct publisher feeds.

***

#### 🗺️ Map & Infrastructure

- 33 countries and territories represented in the Americas-focused map.
- 523 river segments and 250 state or province border lines.
- Interactive strategic-site markers and geographic layers.
- United States highlighted, with state and provincial boundaries.
- Greenland, Iceland and regional approaches included in the map frame.

***

#### ⚙️ Installation & Launch

**Local dashboard URL:** http://127.0.0.1:8820

1. Extract `usa-dashboard-v1.zip`.
2. Open the extracted project folder.
3. Run the supplied startup script.
4. Open `http://127.0.0.1:8820` in your browser.

Use the startup script and configuration files included with the project.

***

#### 🧪 Testing

- 36 Python tests passed.
- Three browser test suites passed in a clean rebuild.
- Map projection, marker placement, category panels and server startup were checked.
- Connector error handling was checked.
- Live external news retrieval remains unverified in the build environment.

***

#### ⚠️ Known Limitations

- **Site verification:** 29 of the 178 strategic points are marked “not verified in this build.”
- **Military coverage:** Most US Army and Air Force bases are not individually plotted. The 299 air-base references are geographic reference data, not a complete verified inventory of operational bases.
- **Nuclear data:** The 70 nuclear power plants originate from a WRI dataset dating to 2018; current operating status has not been established by that dataset.
- **Regional coverage:** Several South American, Mexican and other regional military facilities are missing or flagged for verification.
- **Unconfirmed entries:** Some spaceport, data-centre and chokepoint references remain unverified.
- **External feeds:** News retrieval depends on internet connectivity and third-party source availability.

***

#### 🔐 Responsible Use

This dashboard organizes publicly sourced information for research, strategic awareness and geospatial analysis. Facility locations, operational status and source dates should be checked independently before drawing conclusions. Inclusion on the map does not guarantee current operational status or exact geographic boundaries.

***
