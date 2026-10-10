
(function(){
  "use strict";

  const PROJ = {"type": "lcc", "n": 0.6568376641484702, "F": 1.8079592912202147, "rho0": 1.4306314513862932, "lam0": -1.5882496193148399, "scale": 204.113624611574, "translate": [644.3970392183202, 272.14618524377966], "width": 1300, "height": 796};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"geo": [{"category": "geo", "label": "Greenland: reported US-Denmark security agreement (22 September 2026)", "text": "Media reports, citing Reuters on 22 September 2026, say the US will set up a presence at two more sites in Greenland under a security agreement with Denmark and Greenland. Denmark says its sovereignty red lines hold. US presence is now concentrated at Pituffik Space Base, with about 150 personnel. Not confirmed in this build.", "source": "RT (22 Sep 2026, citing Reuters); The Watch (Sep 2026)", "date": "Sep 2026", "url": null, "connector": "reference"}, {"category": "geo", "label": "The Falklands: UK base at Mount Pleasant; Argentina claims sovereignty", "text": "The UK administers the Falkland Islands and operates RAF Mount Pleasant, which replaced RAF Navy Point. Argentina claims the islands, which it calls the Malvinas. Position and claims are reported as contested.", "source": "Wikipedia (RAF Navy Point; Falklands Naval Station)", "date": "2026", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "NORAD aircraft deploy to Pituffik (January 2026)", "text": "NORAD confirmed on 19 January 2026 that aircraft would deploy to Pituffik Space Base for pre-planned operations, coordinated with Denmark and Greenland and with the forces of the United States and Canada.", "source": "Army Recognition (Jan 2026); NORAD statement", "date": "Jan 2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "NORAD and NORTHCOM headquarters at Peterson; NORAD's three regional headquarters", "text": "NORAD and US Northern Command share their headquarters at Peterson Space Force Base, Colorado Springs; Cheyenne Mountain is the alternate command centre. NORAD's regional headquarters are at Elmendorf (Alaska), Winnipeg (Manitoba) and Tyndall (Florida).", "source": "NORAD (norad.mil); Wikipedia (NORAD)", "date": "2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "US Strategic Command: headquarters and Global Operations Center at Offutt", "text": "US Strategic Command is headquartered at Offutt Air Force Base, Nebraska. It is responsible for strategic deterrence, nuclear operations, global strike and missile-threat assessment; its Global Operations Center is the operations hub.", "source": "stratcom.mil (2026)", "date": "2026", "url": null, "connector": "reference"}], "air": [{"category": "air", "label": "Danish F-35As land at Kangerlussuaq: the first F-35 landing on Greenland (16 September 2026)", "text": "Two Royal Danish Air Force F-35As flew from Keflavík in Iceland under NATO's Arctic Sentry activity and landed at Kangerlussuaq on 16 September 2026. US F-16s and Canadian CF-18s flew from Goose Bay in the same operation.", "source": "migflug (Sep 2026)", "date": "Sep 2026", "url": null, "connector": "reference"}, {"category": "air", "label": "Canadian Forces air bases: Goose Bay, Bagotville, Cold Lake and Trenton", "text": "CFB Goose Bay supports NORAD operations and NATO low-level flying. 2 and 3 Wings are at Bagotville, 4 Wing is at Cold Lake and 8 Wing is at Trenton. CFS Alert in Nunavut is the northernmost Canadian Forces station.", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "2026", "url": null, "connector": "reference"}], "arms": [{"category": "arms", "label": "Minuteman III test launches from Vandenberg: 3 March and 20 May 2026", "text": "The Air Force launched unarmed Minuteman III missiles from Vandenberg on 3 March 2026 (GT 255, carrying two test reentry vehicles) and on 20 May 2026 (GT 256). The missile for GT 256 came from Minot's complex; launches rotate among the three ICBM wings.", "source": "Space Force (spaceforce.mil, May 2026); Stripes (Mar 2026); The Electric (Feb 2026)", "date": "Mar-May 2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Sentinel ICBM: first flight test planned for 2027; initial operating capability in the early 2030s", "text": "The Air Force says it will finish restructuring the Sentinel programme by the end of 2026, hold the first test launch by 2027 and reach initial operating capability in the early 2030s. Sentinel is planned at F.E. Warren, Malmstrom and Minot. The Air Force said in September 2026 that an inert missile had been fully assembled.", "source": "Air & Space Forces Magazine (2026); Interesting Engineering (Sep 2026)", "date": "Sep 2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "GAO: Minuteman III may stay in service to 2050", "text": "A Government Accountability Office report found that delays to Sentinel mean the Air Force is evaluating options to keep operating Minuteman III through 2050, and it considers that feasible.", "source": "Air & Space Forces Magazine (citing GAO, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "US weapons complex: Pantex, Y-12, Savannah River and WIPP (public status only)", "text": "Pantex, near Amarillo, is the primary site for weapons assembly and dismantlement; plutonium pits from retired weapons are in interim storage. Y-12 at Oak Ridge handles and stores highly enriched uranium. The Savannah River Site supports tritium production. WIPP near Carlsbad, New Mexico, is the repository for defence transuranic waste.", "source": "CRS R45306 (2019 edition); Pantex (pantex.energy.gov, 2026); Y-12 (DNFSB, 2026)", "date": "2019-2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Kirtland storage complex (KUMMSC): described by an advocacy group as the largest in the US", "text": "The Kirtland Underground Munitions Maintenance and Storage Complex was activated in 1992. The advocacy group Nukewatch describes it as the largest nuclear-weapons storage facility in the country. The government does not publish holdings, and none are stated here.", "source": "Nukewatch (advocacy source, citing the ABQ Journal)", "date": "1992 onward", "url": null, "connector": "reference"}, {"category": "arms", "label": "No declared nuclear weapons in Canada, Mexico or South America; the Treaty of Tlatelolco covers Latin America", "text": "The 1967 Treaty of Tlatelolco makes Latin America and the Caribbean a nuclear-weapon-free zone (public information). Canada hosts no nuclear weapons of its own, and no South American state has declared any.", "source": "Treaty of Tlatelolco (1967; public information)", "date": "1967", "url": null, "connector": "reference"}], "naval": [{"category": "naval", "label": "Trident bases: Kings Bay (Atlantic) and Bangor (Pacific)", "text": "Kings Bay is the Atlantic Trident base, home to the Ohio-class ballistic-missile submarines and the guided-missile submarines Florida and Georgia. Bangor is the Pacific Trident base; the adjacent Strategic Weapons Facility Pacific maintains the Trident II missiles and stores spare warheads.", "source": "Navy base listings (2026); Wikipedia (Naval Submarine Base Bangor); Global Military (Aug 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "Canada: Victoria-class submarines to be operated into the mid-2030s", "text": "Canada's four Victoria-class submarines are being modernised to stay in service into the mid-2030s, with the first modernisation delivery due in 2026. They are supported from CFB Esquimalt (Pacific) and CFB Halifax (Atlantic).", "source": "Canada.ca (Victoria-class submarines); Global Military (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "Naval Station Norfolk: the largest naval base (about 75 ships and 134 aircraft)", "text": "Naval Station Norfolk, Virginia, is the largest naval station in the world by personnel and ships. It hosts the Navy's Fleet Forces Command headquarters.", "source": "Naval Technology (2026); Marine Insight (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "Brazil: nuclear submarine SN10 under construction (keel 2027, launch 2037)", "text": "The Brazilian Navy's nuclear submarine SN10 Álvaro Alberto is under construction at Itaguaí, with keel laying planned for 2027 and launch projected for 2037. A proposal of March 2026 would expand the programme to three nuclear submarines.", "source": "Army Recognition (Mar 2026); Wikipedia (Riachuelo-class submarine)", "date": "Mar 2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "Argentina plans three conventional submarines; Brazil offers three Scorpènes", "text": "Argentina's 2027 draft budget authorises a credit operation of about US$2.3bn for three conventional submarines for Mar del Plata. Brazil has proposed building and maintaining three Scorpènes at Itaguaí; financing is unresolved.", "source": "Defesa em Foco (Oct 2026); Meta-Defense (Oct 2026)", "date": "Oct 2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "Chile operates two Scorpène submarines", "text": "Chile was the Scorpène's first export customer and operates two of the class (Meta-Defense, Oct 2026).", "source": "Meta-Defense (Oct 2026)", "date": "Oct 2026", "url": null, "connector": "reference"}], "cyber": [{"category": "cyber", "label": "US Cyber Command and the NSA share Fort Meade", "text": "US Cyber Command is headquartered at Fort George G. Meade, in the same building as the National Security Agency, and is overseen by the NSA director. It is a unified combatant command.", "source": "EBSCO (2026); CRS Defense Primer (IF13042)", "date": "2026", "url": null, "connector": "reference"}], "space": [{"category": "space", "label": "Artemis II launches from Kennedy's Pad 39B (1 April 2026)", "text": "The Space Launch System launched Artemis II from Launch Complex 39B on 1 April 2026. A Falcon Heavy launched the Roman space telescope from Launch Complex 39 on 30 August 2026.", "source": "Wikipedia (Launch Complex 39; 2026)", "date": "Apr-Aug 2026", "url": null, "connector": "reference"}, {"category": "space", "label": "Cape Canaveral: the Eastern Range's main launch site", "text": "Cape Canaveral Space Force Station is the Space Force's Eastern Range launch site. SLC-40 is used by SpaceX and SLC-20 is leased to Firefly; the Space Force owns the complexes.", "source": "Wikipedia (Cape Canaveral SFS); Spaceflight Now (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "space", "label": "Alcântara: a December 2025 launch failed within a minute; about twenty foreign firms in talks", "text": "Brazil's Alcântara base, 2.3 degrees south of the equator, had a launch in December 2025 fail within about a minute. Brazil reports that about twenty foreign companies are in talks to launch from the base.", "source": "Rio Times (Jul 2026)", "date": "Dec 2025 - Jul 2026", "url": null, "connector": "reference"}, {"category": "space", "label": "Guiana Space Centre: Europe's spaceport at Kourou", "text": "The Guiana Space Centre near Kourou is Europe's spaceport. ESA funds about two-thirds of its budget, and France's CNES operates it.", "source": "Wikipedia (Guiana Space Centre)", "date": "2026", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Panama Canal: drought-driven slot cuts from 4 September 2026", "text": "The Panama Canal Authority ran nine daily Neopanamax and 25 Panamax slots from 4 September 2026, an average of about 34 transits a day. Congestion peaked at 161 ships in mid-August 2026.", "source": "Cyprus Shipping News (Sep 2026); Blooming (2026)", "date": "Aug-Sep 2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "Strait of Magellan traffic up more than 70% (August and September 2026)", "text": "Chilean Navy data requested by Bloomberg show traffic through the Strait of Magellan rose more than 70% in August and September 2026 from a year earlier, as ships diverted from the drought-hit Panama Canal.", "source": "SupplyChainBrain (Bloomberg, 7 Oct 2026)", "date": "Aug-Sep 2026", "url": null, "connector": "reference"}], "econ": [{"category": "econ", "label": "Trans Mountain expansion operating since May 2024", "text": "Statistics Canada reports the expanded Trans Mountain system has operated since May 2024, nearly tripling capacity through the Rocky Mountains. The United States took 93.8% of Canadian crude exports from May 2024 to April 2025.", "source": "Statistics Canada (2025)", "date": "May 2024 onward", "url": null, "connector": "reference"}, {"category": "econ", "label": "Enbridge Line 5: a Bad River reroute under construction (March 2026)", "text": "Line 5 carries about 540,000 barrels a day from Superior, Wisconsin, through Michigan's Upper Peninsula to Sarnia. A reroute around the Bad River reservation was under construction in March 2026.", "source": "MMcGin Investments (2026)", "date": "Mar 2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "Strategic Petroleum Reserve held 415 million barrels (20 March 2026)", "text": "The Strategic Petroleum Reserve held 415.4 million barrels on 20 March 2026, about 57.5% of its 714 million barrel capacity. This figure comes from an industry analysis; check the Department of Energy's figures.", "source": "MMcGin Investments (2026, industry analysis)", "date": "Mar 2026", "url": null, "connector": "reference"}], "darkweb": [{"category": "darkweb", "label": "Ransomware claims for the Americas are unverified group claims", "text": "The Ransomware.live feed filtered to the Americas' country codes lists claims made by groups on their own leak sites. These claims are labelled unverified and are not confirmed victims.", "source": "Ransomware.live (v2 feed)", "date": "live", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: ranks for the Americas not verified in this build", "text": "The annual report ranks countries for wellbeing. The ranks for the countries in this frame were not verified in this build; check the report directly.", "source": "World Happiness Report (annual); not verified in this build", "date": "Mar 2026", "url": null, "connector": "reference"}]}, "markers": [{"id": "cap_washington", "name": "Washington, D.C. (capital, United States)", "lat": 38.9072, "lon": -77.0369, "cat": "capital", "note": "Capital of the United States; the Pentagon and the Department of Defense are in the Washington area.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_ottawa", "name": "Ottawa (capital, Canada)", "lat": 45.4215, "lon": -75.6972, "cat": "capital", "note": "Capital of Canada; National Defence Headquarters is in Ottawa (Canadian Armed Forces listing, 2026).", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "", "linked_items": []}, {"id": "cap_mexico", "name": "Mexico City (capital, Mexico)", "lat": 19.4326, "lon": -99.1332, "cat": "capital", "note": "Capital of Mexico.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_havana", "name": "Havana (capital, Cuba)", "lat": 23.1136, "lon": -82.3666, "cat": "capital", "note": "Capital of Cuba. Guantánamo Bay is in the south-east of the island (see naval station).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_brasilia", "name": "Brasília (capital, Brazil)", "lat": -15.7939, "lon": -47.8828, "cat": "capital", "note": "Capital of Brazil.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_buenos_aires", "name": "Buenos Aires (capital, Argentina)", "lat": -34.6037, "lon": -58.3816, "cat": "capital", "note": "Capital of Argentina.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_santiago", "name": "Santiago (capital, Chile)", "lat": -33.4489, "lon": -70.6693, "cat": "capital", "note": "Capital of Chile.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_lima", "name": "Lima (capital, Peru)", "lat": -12.0464, "lon": -77.0428, "cat": "capital", "note": "Capital of Peru.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_bogota", "name": "Bogotá (capital, Colombia)", "lat": 4.711, "lon": -74.0721, "cat": "capital", "note": "Capital of Colombia.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_caracas", "name": "Caracas (capital, Venezuela)", "lat": 10.4806, "lon": -66.9036, "cat": "capital", "note": "Capital of Venezuela.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_quito", "name": "Quito (capital, Ecuador)", "lat": -0.1807, "lon": -78.4678, "cat": "capital", "note": "Capital of Ecuador.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_la_paz", "name": "La Paz (seat of government, Bolivia)", "lat": -16.5, "lon": -68.15, "cat": "capital", "note": "Seat of government of Bolivia; the constitutional capital is Sucre.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_asuncion", "name": "Asunción (capital, Paraguay)", "lat": -25.2637, "lon": -57.5759, "cat": "capital", "note": "Capital of Paraguay.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_montevideo", "name": "Montevideo (capital, Uruguay)", "lat": -34.9011, "lon": -56.1645, "cat": "capital", "note": "Capital of Uruguay.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_georgetown", "name": "Georgetown (capital, Guyana)", "lat": 6.8013, "lon": -58.1551, "cat": "capital", "note": "Capital of Guyana.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_paramaribo", "name": "Paramaribo (capital, Suriname)", "lat": 5.852, "lon": -55.2038, "cat": "capital", "note": "Capital of Suriname.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_cayenne", "name": "Cayenne (prefecture, French Guiana)", "lat": 4.9224, "lon": -52.3135, "cat": "capital", "note": "Prefecture of French Guiana (France); Europe's spaceport is at Kourou nearby.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_panama", "name": "Panama City (capital, Panama)", "lat": 8.9824, "lon": -79.5199, "cat": "capital", "note": "Capital of Panama.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_nuuk", "name": "Nuuk (capital, Greenland)", "lat": 64.1835, "lon": -51.7214, "cat": "capital", "note": "Capital of Greenland (Denmark). Denmark's Joint Arctic Command is based mainly here (Patriot Post, 2026).", "source": "Patriot Post (2026); public information", "date": "", "linked_items": []}, {"id": "cap_reykjavik", "name": "Reykjavík (capital, Iceland)", "lat": 64.1466, "lon": -21.9426, "cat": "capital", "note": "Capital of Iceland. Iceland has no standing armed forces (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_stanley", "name": "Stanley (capital, Falkland Islands)", "lat": -51.6971, "lon": -57.8517, "cat": "capital", "note": "Capital of the Falkland Islands (UK-administered; Argentina claims sovereignty).", "source": "public information", "date": "", "linked_items": []}, {"id": "peterson", "name": "Peterson Space Force Base (Colorado Springs): NORAD and US Northern Command headquarters", "lat": 38.8226, "lon": -104.7007, "cat": "cantonment", "note": "NORAD and USNORTHCOM share their headquarters here; Space Base Delta 1 is based here. Position approximate.", "source": "NORAD (norad.mil); Wikipedia (NORAD; Peterson SFB)", "date": "", "linked_items": []}, {"id": "cheyenne", "name": "Cheyenne Mountain Space Force Station (Colorado): NORAD alternate command centre", "lat": 38.745, "lon": -104.846, "cat": "cantonment", "note": "Alternate Joint Operations Center for NORAD and USNORTHCOM; a crew-training site (NORAD fact sheet). Position approximate.", "source": "NORAD fact sheet; Wikipedia (Cheyenne Mountain Space Force Station)", "date": "", "linked_items": []}, {"id": "offutt", "name": "Offutt Air Force Base (Nebraska): US Strategic Command headquarters", "lat": 41.1183, "lon": -95.9125, "cat": "cantonment", "note": "STRATCOM headquarters and Global Operations Center. Its alternate missile-warning centre is in the underground command complex (stratcom.mil; Wikipedia). Position approximate.", "source": "stratcom.mil (2026); Wikipedia (United States Strategic Command)", "date": "", "linked_items": []}, {"id": "fort_meade", "name": "Fort George G. Meade (Maryland): NSA and US Cyber Command headquarters", "lat": 39.1072, "lon": -76.749, "cat": "cyber_hub", "note": "The NSA and USCYBERCOM share the headquarters; CYBERCOM is a unified combatant command overseen by the NSA director (EBSCO; CRS Defense Primer IF13042).", "source": "EBSCO (2026); CRS Defense Primer (IF13042)", "date": "", "linked_items": []}, {"id": "barksdale", "name": "Barksdale Air Force Base (Louisiana): Air Force Global Strike Command headquarters", "lat": 32.5018, "lon": -93.6628, "cat": "us_base", "note": "Headquarters of Air Force Global Strike Command, which runs the bombers and the ICBMs (USSTRATCOM subordinate-command listing). Position approximate.", "source": "Wikipedia (USSTRATCOM subordinate commands)", "date": "", "linked_items": []}, {"id": "redstone", "name": "Redstone Arsenal (Alabama): Army Forces Strategic Command headquarters", "lat": 34.68, "lon": -86.67, "cat": "cantonment", "note": "Army Forces Strategic Command headquarters (Wikipedia, USSTRATCOM subordinate units). Position approximate.", "source": "Wikipedia (USSTRATCOM subordinate units)", "date": "", "linked_items": []}, {"id": "elmendorf", "name": "Elmendorf-Richardson (Alaska): NORAD regional headquarters for Alaska", "lat": 61.251, "lon": -149.806, "cat": "us_base", "note": "One of NORAD's three regional headquarters (with Winnipeg and Tyndall); NORAD (norad.mil). Position approximate.", "source": "NORAD (norad.mil)", "date": "", "linked_items": []}, {"id": "tyndall", "name": "Tyndall Air Force Base (Florida): NORAD regional headquarters (continental US east)", "lat": 30.07, "lon": -85.575, "cat": "us_base", "note": "Headquarters of the US air defence region (CONR), one of NORAD's three regional headquarters (NORAD; Wikipedia). Position approximate.", "source": "NORAD (norad.mil); Wikipedia (NORAD)", "date": "", "linked_items": []}, {"id": "winnipeg_norad", "name": "CFB Winnipeg (Manitoba): NORAD regional headquarters for Canada", "lat": 49.91, "lon": -97.24, "cat": "air_base", "note": "NORAD's Canadian region headquarters (norad.mil). Position approximate.", "source": "NORAD (norad.mil); Canadian Armed Forces listing (2026)", "date": "", "linked_items": []}, {"id": "nuuk_arctic", "name": "Joint Arctic Command (Nuuk, Greenland): Danish military HQ for the Arctic", "lat": 64.18, "lon": -51.72, "cat": "cantonment", "note": "Denmark's Joint Arctic Command is primarily located in Nuuk, with presence at Kangerlussuaq, Station Nord and Daneborg (Patriot Post, 2026). Position approximate.", "source": "Patriot Post (2026); Reuters (via RT, Sep 2026)", "date": "", "linked_items": []}, {"id": "pituffik", "name": "Pituffik Space Base (Greenland): US Space Force; missile warning and space surveillance", "lat": 76.5312, "lon": -68.7032, "cat": "us_base", "note": "Renamed in 2023 (formerly Thule). Home of the 821st Space Base Group within Space Base Delta 1; about 150 US personnel (Reuters via RT, Sep 2026). Danish personnel also work on the base (The Watch, Sep 2026). Position approximate.", "source": "Wikipedia (Pituffik Space Base); The Watch (Sep 2026); Reuters (via RT, Sep 2026)", "date": "", "linked_items": []}, {"id": "kangerlussuaq", "name": "Kangerlussuaq Airport (Greenland): Danish Arctic Command hangar; first F-35 landing on the island", "lat": 67.0122, "lon": -50.7116, "cat": "air_base", "note": "Two Royal Danish Air Force F-35As landed here on 16 Sep 2026, the first F-35 landing on Greenland (migflug, Sep 2026). Position approximate.", "source": "migflug (Sep 2026); The Watch (Sep 2026)", "date": "", "linked_items": []}, {"id": "keflavik", "name": "Keflavík (Iceland): NATO staging base for Arctic Sentry; former US Navy base", "lat": 63.985, "lon": -22.6056, "cat": "air_base", "note": "Danish F-35As flew from Keflavík to Greenland in Sep 2026 under NATO's Arctic Sentry activity (migflug). Iceland has no standing armed forces; the former US base is now a civil and NATO-used airfield (public information). Position approximate.", "source": "migflug (Sep 2026); public information", "date": "", "linked_items": []}, {"id": "cfb_alert", "name": "CFS Alert (Nunavut): northernmost Canadian Forces station", "lat": 82.5017, "lon": -62.3481, "cat": "cantonment", "note": "Listed under 8 Wing Trenton; a Canadian Forces station in Nunavut (Canadian Armed Forces listing, 2026). Position approximate.", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "", "linked_items": []}, {"id": "cfb_goose_bay", "name": "CFB Goose Bay (Labrador): NORAD operations and NATO low-level flying", "lat": 53.3192, "lon": -60.4258, "cat": "air_base", "note": "5 Wing; NORAD operations; RAFU Goose Bay provides low-level training for NATO allies (Canadian Armed Forces listing, 2026). Position approximate.", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "", "linked_items": []}, {"id": "cfb_bagotville", "name": "CFB Bagotville (Quebec): fighter wings 2 and 3 Wing", "lat": 48.3306, "lon": -70.9961, "cat": "air_base", "note": "2 Wing and 3 Wing are based here (Canadian Armed Forces listing, 2026). Position approximate.", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "", "linked_items": []}, {"id": "cfb_cold_lake", "name": "CFB Cold Lake (Alberta): 4 Wing; fighter training and the Primrose weapons range", "lat": 54.4081, "lon": -110.2789, "cat": "air_base", "note": "4 Wing; fighter training; the Cold Lake and Primrose air weapons ranges (Canadian Armed Forces listing; Academic Kids, 2026). Position approximate.", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "", "linked_items": []}, {"id": "cfb_trenton", "name": "CFB Trenton (Ontario): 8 Wing; air-to-air refuelling, strategic airlift and search and rescue", "lat": 44.1192, "lon": -77.5281, "cat": "air_base", "note": "8 Wing: aerial refuelling, tactical and strategic airlift, search and rescue, and VIP transport (Canadian Armed Forces listing, 2026). Position approximate.", "source": "Canadian Armed Forces (Wikipedia, 2026)", "date": "", "linked_items": []}, {"id": "falklands_mp", "name": "RAF Mount Pleasant (Falkland Islands): UK air base", "lat": -51.8222, "lon": -58.4472, "cat": "air_base", "note": "Replaced RAF Navy Point as the Falklands air base; the search-and-rescue detachment moved here when it opened (Wikipedia, RAF Navy Point). Position approximate.", "source": "Wikipedia (RAF Navy Point)", "date": "", "linked_items": []}, {"id": "kings_bay", "name": "Naval Submarine Base Kings Bay (Georgia): Atlantic Trident and guided-missile submarine base", "lat": 30.793, "lon": -81.52, "cat": "submarine_base", "note": "Home port of the Ohio-class ballistic-missile submarines and the guided-missile submarines USS Florida and USS Georgia; the only Atlantic base able to support the Trident II D5 (Navy base listings, 2026). Position approximate.", "source": "Navy base listings (2026); Naval Technology; Wikipedia (Naval Submarine Base Kings Bay)", "date": "", "linked_items": []}, {"id": "bangor", "name": "Naval Base Kitsap-Bangor (Washington): Pacific Trident submarine base", "lat": 47.73, "lon": -122.71, "cat": "submarine_base", "note": "The Bangor waterfront is one of the two Trident bases. The adjacent Strategic Weapons Facility Pacific maintains the Trident II missiles and stores spare warheads (Wikipedia; Global Military, Aug 2026). Position approximate.", "source": "Wikipedia (Naval Submarine Base Bangor); Global Military (Aug 2026)", "date": "", "linked_items": []}, {"id": "pearl", "name": "Joint Base Pearl Harbor-Hickam (Hawaii): Pacific Fleet headquarters area and submarine base", "lat": 21.35, "lon": -157.97, "cat": "submarine_base", "note": "Described as the main submarine base for the US Pacific (Marine Insight, 2026). Joint base formed in 2010 from Pearl Harbor and Hickam. Position approximate.", "source": "Marine Insight (2026); Naval Technology", "date": "", "linked_items": []}, {"id": "new_london", "name": "Naval Submarine Base New London (Groton, Connecticut): attack submarines (not verified in this build)", "lat": 41.39, "lon": -72.09, "cat": "submarine_base", "note": "Attack-submarine base on the Thames River (public information). Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "norfolk", "name": "Naval Station Norfolk (Virginia): world's largest naval station; Fleet Forces Command headquarters", "lat": 36.9463, "lon": -76.3144, "cat": "navy_base", "note": "About 75 ships and 134 aircraft; headquarters of the US Navy's Fleet Forces Command (Naval Technology; Marine Insight, 2026). Position approximate.", "source": "Naval Technology (2026); Marine Insight (2026)", "date": "", "linked_items": []}, {"id": "san_diego", "name": "Naval Base San Diego (California): Pacific Fleet homeport", "lat": 32.7, "lon": -117.15, "cat": "navy_base", "note": "Homeport for Pacific Fleet surface ships; about 48,000 military and civilian personnel (Naval Technology; Bolt Flight, 2026). Position approximate.", "source": "Naval Technology (2026); Bolt Flight (2026)", "date": "", "linked_items": []}, {"id": "mayport", "name": "Naval Station Mayport (Jacksonville, Florida)", "lat": 30.395, "lon": -81.4, "cat": "navy_base", "note": "Listed in the Navy's installation directory (NAVYWEEK, 2026). Position approximate.", "source": "NAVYWEEK (2026)", "date": "", "linked_items": []}, {"id": "pensacola", "name": "Naval Air Station Pensacola (Florida): cradle of naval aviation", "lat": 30.35, "lon": -87.3, "cat": "navy_base", "note": "Listed in the Navy's installation directory (NAVYWEEK, 2026). Position approximate.", "source": "NAVYWEEK (2026)", "date": "", "linked_items": []}, {"id": "everett", "name": "Naval Station Everett (Washington)", "lat": 47.98, "lon": -122.22, "cat": "navy_base", "note": "Listed in the Navy's installation directory (NAVYWEEK, 2026). Position approximate.", "source": "NAVYWEEK (2026)", "date": "", "linked_items": []}, {"id": "great_lakes", "name": "Naval Station Great Lakes (Illinois): Navy training command", "lat": 42.3, "lon": -87.82, "cat": "navy_base", "note": "Listed in the Navy's installation directory (NAVYWEEK, 2026). Position approximate.", "source": "NAVYWEEK (2026)", "date": "", "linked_items": []}, {"id": "guantanamo", "name": "Naval Station Guantánamo Bay (Cuba): leased by the US since 1903", "lat": 19.9, "lon": -75.15, "cat": "navy_base", "note": "Coaling station and naval base since 1903; garrison Joint Task Force Guantánamo; Cuba disputes the lease (Wikipedia, 2026). Position approximate.", "source": "Wikipedia (Guantanamo Bay Naval Base)", "date": "", "linked_items": []}, {"id": "esquimalt", "name": "CFB Esquimalt (Victoria, British Columbia): Maritime Forces Pacific; Victoria-class submarines", "lat": 48.45, "lon": -123.43, "cat": "submarine_base", "note": "Pacific fleet headquarters; home port for the Victoria-class submarines (Canada.ca; Global Military, 2026). Position approximate.", "source": "Canada.ca (Victoria-class submarines); Global Military (2026)", "date": "", "linked_items": []}, {"id": "halifax", "name": "CFB Halifax (Nova Scotia): Maritime Forces Atlantic headquarters and dockyard", "lat": 44.66, "lon": -63.56, "cat": "navy_base", "note": "Atlantic fleet headquarters and dockyard; Canada.ca lists the Victoria-class submarines with CFB Halifax (port assignment not confirmed in this build). Position approximate.", "source": "Canada.ca (2026); Wikipedia (List of current ships of the Royal Canadian Navy)", "date": "", "linked_items": []}, {"id": "minot", "name": "Minot Air Force Base (North Dakota): 91st Missile Wing, Minuteman III ICBMs", "lat": 48.4158, "lon": -101.3581, "cat": "missile_base", "note": "One of three ICBM wings. Minuteman III stays in service during the transition to the Sentinel missile (Air & Space Forces; The Electric, 2026). Position approximate.", "source": "Air & Space Forces (2026); The Electric (2026)", "date": "", "linked_items": []}, {"id": "malmstrom", "name": "Malmstrom Air Force Base (Montana): 341st Missile Wing, Minuteman III; Sentinel construction planned", "lat": 47.5044, "lon": -111.1828, "cat": "missile_base", "note": "One of three ICBM wings. First on-base Sentinel construction is planned here (The Electric, 2026). Position approximate.", "source": "The Electric (2026); Air & Space Forces (2026)", "date": "", "linked_items": []}, {"id": "warren", "name": "F.E. Warren Air Force Base (Wyoming): ICBM wing, Minuteman III; Sentinel planned", "lat": 41.1456, "lon": -104.8653, "cat": "missile_base", "note": "One of three ICBM wings; the Sentinel missile is planned here (Interesting Engineering, Sep 2026). Position approximate.", "source": "Interesting Engineering (Sep 2026); Air & Space Forces (2026)", "date": "", "linked_items": []}, {"id": "vandenberg_icbm", "name": "Vandenberg Space Force Base (California): Minuteman III test launches (3 March and 20 May 2026)", "lat": 34.742, "lon": -120.5724, "cat": "missile_base", "note": "Operational test launches of unarmed Minuteman III missiles: GT 255 on 3 Mar 2026 (two test reentry vehicles) and GT 256 on 20 May 2026. The missiles rotate among the three ICBM wings (Space Force; Stripes, 2026). Position approximate.", "source": "spaceforce.mil (May 2026); Stripes (Mar 2026); The Electric (Feb 2026)", "date": "", "linked_items": []}, {"id": "fort_greely", "name": "Fort Greely (Alaska): ground-based midcourse missile-defence interceptors (not verified in this build)", "lat": 63.98, "lon": -145.73, "cat": "missile_base", "note": "Public information; the interceptor count and status were not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "pantex", "name": "Pantex Plant (Carson County, Texas): nuclear weapons assembly, dismantlement and maintenance", "lat": 35.3083, "lon": -101.5617, "cat": "nuclear_site", "note": "The NNSA's primary site for the final assembly, dismantlement and maintenance of nuclear weapons. Plutonium pits from retired weapons are held in interim storage. The last new weapon was completed in 1991 (NNSA; Pantex). Position approximate.", "source": "Pantex (pantex.energy.gov, 2026); NNSA; LASG", "date": "", "linked_items": []}, {"id": "y12", "name": "Y-12 National Security Complex (Oak Ridge, Tennessee): uranium processing, components and storage", "lat": 35.99, "lon": -84.26, "cat": "nuclear_site", "note": "Manages and stores highly enriched uranium and produces weapon components and secondaries (DNFSB; Los Alamos National Laboratory, 2026). Position approximate.", "source": "DNFSB (2026); LANL (2026)", "date": "", "linked_items": []}, {"id": "srs", "name": "Savannah River Site (Aiken, South Carolina): tritium production and nuclear materials", "lat": 33.27, "lon": -81.7, "cat": "nuclear_site", "note": "A 310 sq-mile DOE site near Aiken; supports tritium production and nuclear materials activities (CRS R45306; Arms Control Association). Position approximate.", "source": "CRS R45306 (2019 edition); Arms Control Association (2026)", "date": "", "linked_items": []}, {"id": "wipp", "name": "Waste Isolation Pilot Plant (Carlsbad, New Mexico): geologic repository for defence transuranic waste", "lat": 32.37, "lon": -104.03, "cat": "nuclear_site", "note": "Plutonium-contaminated (transuranic) waste from weapons facilities such as Los Alamos, Savannah River and Pantex (CRS R45306). Position approximate.", "source": "CRS R45306 (2019 edition)", "date": "", "linked_items": []}, {"id": "kirtland", "name": "Kirtland Air Force Base (Albuquerque): Kirtland Underground Munitions Maintenance and Storage Complex", "lat": 35.04, "lon": -106.61, "cat": "nuclear_site", "note": "The complex was activated in 1992. An advocacy group (Nukewatch) describes it as the largest nuclear-weapons storage facility in the US; the government does not publish holdings and none are stated here. Position approximate.", "source": "Nukewatch (advocacy source, citing the ABQ Journal)", "date": "", "linked_items": []}, {"id": "los_alamos", "name": "Los Alamos National Laboratory (New Mexico): nuclear weapons design", "lat": 35.88, "lon": -106.3, "cat": "nuclear_site", "note": "Weapons design laboratory of the nuclear security enterprise (CRS R45306). Position approximate.", "source": "CRS R45306 (2019 edition)", "date": "", "linked_items": []}, {"id": "sandia", "name": "Sandia National Laboratories (Albuquerque): weapons engineering", "lat": 35.05, "lon": -106.54, "cat": "nuclear_site", "note": "Engineering laboratory of the nuclear security enterprise (CRS R45306). Position approximate.", "source": "CRS R45306 (2019 edition)", "date": "", "linked_items": []}, {"id": "livermore", "name": "Lawrence Livermore National Laboratory (California): nuclear weapons design", "lat": 37.69, "lon": -121.7, "cat": "nuclear_site", "note": "Design laboratory of the nuclear security enterprise (CRS R45306). Position approximate.", "source": "CRS R45306 (2019 edition)", "date": "", "linked_items": []}, {"id": "nnss", "name": "Nevada National Security Site (Nye County, Nevada): former underground test site", "lat": 36.9, "lon": -116.05, "cat": "nuclear_site", "note": "Former underground nuclear test site, now a stockpile-stewardship and research site (CRS R45306). Position approximate.", "source": "CRS R45306 (2019 edition)", "date": "", "linked_items": []}, {"id": "hanford", "name": "Hanford Site (Richland, Washington): legacy plutonium production and waste (not verified in this build)", "lat": 46.55, "lon": -119.55, "cat": "nuclear_site", "note": "Public information: former plutonium production site with legacy waste. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "inl", "name": "Idaho National Laboratory (Idaho): reactor research and spent-fuel management (not verified in this build)", "lat": 43.52, "lon": -112.95, "cat": "nuclear_site", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kcnsc", "name": "Kansas City National Security Campus (Missouri): non-nuclear weapons components", "lat": 39.03, "lon": -94.45, "cat": "defense_industry", "note": "Manufactures non-nuclear components for the stockpile (Arms Control Association, 2026). Position approximate.", "source": "Arms Control Association (2026)", "date": "", "linked_items": []}, {"id": "electric_boat", "name": "Electric Boat (Groton, Connecticut): submarine builder (not verified in this build)", "lat": 41.36, "lon": -72.07, "cat": "defense_industry", "note": "Public information: the principal US submarine builder. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "newport_news", "name": "Newport News Shipbuilding (Virginia): aircraft carriers and submarines (not verified in this build)", "lat": 36.98, "lon": -76.43, "cat": "defense_industry", "note": "Public information: aircraft-carrier and submarine yard. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "halifax_yard", "name": "Halifax Shipyard (Nova Scotia): Canadian naval shipbuilding (not verified in this build)", "lat": 44.65, "lon": -63.58, "cat": "defense_industry", "note": "Public information: Canadian naval shipbuilder. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "cape", "name": "Cape Canaveral Space Force Station (Florida): Eastern Range launch complexes", "lat": 28.489, "lon": -80.578, "cat": "space_site", "note": "Primary launch site for the Space Force's Eastern Range; SLC-40, SLC-41 and SLC-46 are active (Wikipedia; Spaceflight Now, 2026). Position approximate.", "source": "Wikipedia (Cape Canaveral SFS); Spaceflight Now (2026)", "date": "", "linked_items": []}, {"id": "ksc", "name": "Kennedy Space Center, Launch Complex 39 (Florida): SLS and Falcon launches", "lat": 28.608, "lon": -80.604, "cat": "space_site", "note": "SLS launched Artemis II from Pad 39B on 1 Apr 2026; a Falcon Heavy launched the Roman space telescope from Launch Complex 39 on 30 Aug 2026 (Wikipedia). Position approximate.", "source": "Wikipedia (Launch Complex 39; 2026)", "date": "", "linked_items": []}, {"id": "vandenberg_space", "name": "Vandenberg Space Force Base (California): West Coast launch complexes", "lat": 34.745, "lon": -120.58, "cat": "space_site", "note": "Falcon 9 launches from SLC-4E and Firefly Alpha from SLC-2 (Spaceflight Now, 2026). Position approximate.", "source": "Spaceflight Now (2026)", "date": "", "linked_items": []}, {"id": "kaena", "name": "Kaena Point Space Force Station (Hawaii)", "lat": 21.57, "lon": -158.27, "cat": "space_site", "note": "Part of Space Base Delta 1 (Wikipedia). Position approximate.", "source": "Wikipedia (Space Base Delta 1)", "date": "", "linked_items": []}, {"id": "new_boston", "name": "New Boston Space Force Station (New Hampshire)", "lat": 42.94, "lon": -71.85, "cat": "space_site", "note": "Part of Space Base Delta 1 (Wikipedia). Position approximate.", "source": "Wikipedia (Space Base Delta 1)", "date": "", "linked_items": []}, {"id": "wallops", "name": "Wallops Flight Facility (Virginia): NASA range and launch site (not verified in this build)", "lat": 37.94, "lon": -75.47, "cat": "space_site", "note": "Public information; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kodiak", "name": "Kodiak Launch Complex (Alaska) (not verified in this build)", "lat": 57.43, "lon": -152.34, "cat": "space_site", "note": "Public information; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "starbase", "name": "Starbase (Boca Chica, Texas): SpaceX launch site (not verified in this build)", "lat": 25.9975, "lon": -97.1545, "cat": "space_site", "note": "Public information; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kourou", "name": "Guiana Space Centre (Kourou, French Guiana): Europe's spaceport", "lat": 5.236, "lon": -52.775, "cat": "space_site", "note": "ESA funds about two-thirds of the budget; France's CNES operates the site; Ariane launches from here (Wikipedia). Position approximate.", "source": "Wikipedia (Guiana Space Centre)", "date": "", "linked_items": []}, {"id": "alcantara", "name": "Alcântara Space Center (Maranhão, Brazil): equatorial launch centre (2.3° south)", "lat": -2.32, "lon": -44.38, "cat": "space_site", "note": "Brazilian Air Force and space agency; about twenty foreign firms reported in talks to launch here (Rio Times, Jul 2026). A December 2025 launch failed within about a minute (Rio Times). Position approximate.", "source": "Rio Times (Jul 2026); Wikipedia (Alcântara Space Center)", "date": "", "linked_items": []}, {"id": "nsa_utah", "name": "NSA Utah Data Center (Bluffdale, Utah) (not verified in this build)", "lat": 40.47, "lon": -111.91, "cat": "cyber_hub", "note": "Public information about the NSA data centre at Camp Williams; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "cse_ottawa", "name": "Communications Security Establishment (Ottawa): Canada's signals-intelligence and cyber agency", "lat": 45.38, "lon": -75.72, "cat": "cyber_hub", "note": "Canada's signals-intelligence and cyber-security agency (CanadaInfo listing). Position approximate (Ottawa area; not verified in this build).", "source": "CanadaInfo (Canadian Armed Forces listing)", "date": "", "linked_items": []}, {"id": "falklands", "name": "Falklands / Malvinas: sovereignty dispute; UK administers the islands and runs RAF Mount Pleasant", "lat": -51.7, "lon": -58.0, "cat": "flashpoint", "note": "Argentina claims the islands; the UK administers them and operates RAF Mount Pleasant (Wikipedia). Position approximate.", "source": "Wikipedia (RAF Navy Point; Falklands Naval Station)", "date": "", "linked_items": []}, {"id": "greenland_talks", "name": "Greenland: US-Denmark security talks (reported, Sep 2026)", "lat": 72.0, "lon": -40.0, "cat": "flashpoint", "note": "Reports in September 2026 describe a security agreement to host a US presence at two more Greenland sites; Denmark and Greenland say sovereignty is not transferred (RT, citing Reuters, 22 Sep 2026). Not confirmed in this build.", "source": "RT (22 Sep 2026, citing Reuters); The Watch (Sep 2026)", "date": "", "linked_items": []}, {"id": "panama", "name": "Panama Canal (Gatún locks): chokepoint between the Atlantic and the Pacific", "lat": 9.26, "lon": -79.92, "cat": "chokepoint", "note": "Drought-driven slot cuts: nine daily Neopanamax and 25 Panamax slots from 4 Sep 2026 (Cyprus Shipping News, Sep 2026); about 34 transits a day (2026 reporting). Position approximate.", "source": "Cyprus Shipping News (Sep 2026); Blooming (2026); Wikipedia (Panama Canal)", "date": "", "linked_items": []}, {"id": "magellan", "name": "Strait of Magellan (Chile): ships rerouting from Panama", "lat": -53.5, "lon": -71.0, "cat": "chokepoint", "note": "Chilean Navy data (via Bloomberg, Oct 2026): traffic rose more than 70% in August and September 2026 from a year earlier. Position approximate.", "source": "SupplyChainBrain (Bloomberg, 7 Oct 2026); Wikipedia (Strait of Magellan)", "date": "", "linked_items": []}, {"id": "beagle", "name": "Beagle Channel (Argentina-Chile) (not verified in this build)", "lat": -55.0, "lon": -67.5, "cat": "chokepoint", "note": "Public information: channel linking the Atlantic and the Pacific south of Tierra del Fuego. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "bering", "name": "Bering Strait (US-Russia) (not verified in this build)", "lat": 65.75, "lon": -169.0, "cat": "chokepoint", "note": "Public information: the strait between Alaska and Russia. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "davis", "name": "Davis Strait (Canada-Greenland) (not verified in this build)", "lat": 66.0, "lon": -56.0, "cat": "chokepoint", "note": "Public information: strait between Baffin Island and Greenland. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "denmark", "name": "Denmark Strait (Iceland-Greenland): part of the GIUK gap (not verified in this build)", "lat": 66.5, "lon": -27.0, "cat": "chokepoint", "note": "Public information: the Iceland-Greenland passage on the Greenland-Iceland-UK gap. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "nares", "name": "Nares Strait (Canada-Greenland) (not verified in this build)", "lat": 80.0, "lon": -70.0, "cat": "chokepoint", "note": "Public information: strait between Ellesmere Island and Greenland. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "juan_de_fuca", "name": "Strait of Juan de Fuca (Canada-US; Esquimalt approaches) (not verified in this build)", "lat": 48.25, "lon": -123.4, "cat": "chokepoint", "note": "Public information: the strait into Puget Sound and the approaches to CFB Esquimalt. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "florida_straits", "name": "Florida Straits (US-Cuba) (not verified in this build)", "lat": 23.5, "lon": -81.0, "cat": "chokepoint", "note": "Public information: strait between Florida and Cuba. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "windward", "name": "Windward Passage (Cuba-Haiti) (not verified in this build)", "lat": 20.0, "lon": -73.9, "cat": "chokepoint", "note": "Public information: passage between Cuba and Haiti. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "yucatan", "name": "Yucatán Channel (Cuba-Mexico) (not verified in this build)", "lat": 21.7, "lon": -86.0, "cat": "chokepoint", "note": "Public information: channel between Cuba and the Yucatán peninsula. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "trans_mountain", "name": "Trans Mountain pipeline (Edmonton to Burnaby, British Columbia): expanded system since May 2024", "lat": 49.24, "lon": -122.93, "cat": "pipeline", "note": "Statistics Canada reports the expanded system has operated since May 2024 and the Westridge Marine Terminal in Burnaby ships crude to new markets. A second open season was planned for July 2026 (Bloomberg, May 2026). Position approximate.", "source": "Statistics Canada; Bloomberg (May 2026); Wikipedia (Trans Mountain pipeline)", "date": "", "linked_items": []}, {"id": "line5", "name": "Enbridge Line 5 (Straits of Mackinac, Michigan): about 540,000 bbl/d", "lat": 45.82, "lon": -84.73, "cat": "pipeline", "note": "From Superior, Wisconsin, through Michigan's Upper Peninsula to Sarnia, Ontario. A Bad River reroute was under construction as of March 2026 (MMcGin Investments, 2026). Position approximate.", "source": "MMcGin Investments (2026)", "date": "", "linked_items": []}, {"id": "line61", "name": "Enbridge Line 61 (Southern Access): Superior, Wisconsin to Flanagan, Illinois", "lat": 46.72, "lon": -92.1, "cat": "pipeline", "note": "1.2 million bbl/d through a 42-inch pipe; the largest crude line in the Enbridge system (MMcGin Investments, 2026). Position approximate.", "source": "MMcGin Investments (2026)", "date": "", "linked_items": []}, {"id": "enterprise_eht", "name": "Enterprise EHT crude export terminal (Texas Gulf Coast): 2.75 million bbl/d throughput (location not verified)", "lat": 29.75, "lon": -95.0, "cat": "pipeline", "note": "Throughput and export role from an industry analysis (MMcGin Investments, 2026). Exact location approximate; not verified in this build.", "source": "MMcGin Investments (2026); not verified in this build", "date": "", "linked_items": []}, {"id": "ingleside", "name": "Enbridge Ingleside crude export terminal (Texas Gulf Coast): 1.6 million bbl/d throughput (location not verified)", "lat": 27.86, "lon": -97.2, "cat": "pipeline", "note": "Throughput and export role from an industry analysis (MMcGin Investments, 2026). Exact location approximate; not verified in this build.", "source": "MMcGin Investments (2026); not verified in this build", "date": "", "linked_items": []}, {"id": "itaguai", "name": "Itaguaí Naval Complex (Rio de Janeiro): Madeira Island Submarine Base and the PROSUB shipyard", "lat": -22.89, "lon": -43.78, "cat": "submarine_base", "note": "Riachuelo-class conventional submarines are built and maintained here. The nuclear submarine SN10 Álvaro Alberto is under construction (keel laying planned for 2027; launch projected for 2037; Army Recognition, Mar 2026; Wikipedia). Position approximate.", "source": "Wikipedia (Madeira Island Submarine Base); Army Recognition (Mar 2026)", "date": "", "linked_items": []}, {"id": "mar_del_plata", "name": "Mar del Plata Naval Base (Argentina): submarine component", "lat": -38.0, "lon": -57.55, "cat": "submarine_base", "note": "Argentina's submarine force is based here; the 2027 draft budget authorises a credit of about US$2.3bn for three conventional submarines (Defesa em Foco, Oct 2026). Brazil has offered three Scorpènes built at Itaguaí (Meta-Defense, Oct 2026). Position approximate.", "source": "Defesa em Foco (Oct 2026); Meta-Defense (Oct 2026)", "date": "", "linked_items": []}, {"id": "talcahuano", "name": "Talcahuano (Chile): Chilean Navy submarine base (not verified in this build)", "lat": -36.72, "lon": -73.12, "cat": "submarine_base", "note": "Chile operates two Scorpène submarines (Meta-Defense, Oct 2026). The base location is public information and was not verified in this build.", "source": "Meta-Defense (Oct 2026); public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "callao", "name": "Callao (Peru): Peruvian Navy base (not verified in this build)", "lat": -12.05, "lon": -77.15, "cat": "navy_base", "note": "Public information: principal Peruvian Navy port. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "cartagena", "name": "Cartagena (Colombia): Colombian Navy base (not verified in this build)", "lat": 10.39, "lon": -75.51, "cat": "navy_base", "note": "Public information: principal Colombian Navy base on the Caribbean coast. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "wri_arg0000029", "name": "ATUCHA I (nuclear power plant, WRI)", "lat": -33.967, "lon": -59.2059, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 370.0 MW, commissioning year 1974.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_arg0000030", "name": "ATUCHA II (nuclear power plant, WRI)", "lat": -33.9674, "lon": -59.2045, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 745.0 MW, commissioning year 2014.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_arg0000112", "name": "EMBALSE (nuclear power plant, WRI)", "lat": -32.2316, "lon": -64.4422, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 648.0 MW, commissioning year 1984.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_bra0000100", "name": "Almirante Álvaro Alberto - Unidade I (Antiga Angra I) (nuclear power plant, WRI)", "lat": -23.0087, "lon": -44.4574, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 640.0 MW, commissioning year 1985. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_bra0000101", "name": "Almirante Álvaro Alberto - Unidade II (Antiga Angra II) (nuclear power plant, WRI)", "lat": -23.0072, "lon": -44.4588, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1350.0 MW, commissioning year 2000. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_can0002030", "name": "Bruce A (nuclear power plant, WRI)", "lat": 44.3391, "lon": -81.5747, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 3220.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_can0002031", "name": "Bruce B (nuclear power plant, WRI)", "lat": 44.319, "lon": -81.6027, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 3390.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_can0002043", "name": "Darlington (nuclear power plant, WRI)", "lat": 43.8697, "lon": -78.7239, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 3740.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_can0002073", "name": "Pickering A (nuclear power plant, WRI)", "lat": 43.8107, "lon": -79.0689, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1084.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_can0002074", "name": "Pickering B (nuclear power plant, WRI)", "lat": 43.8096, "lon": -79.0639, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2160.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_can0002076", "name": "Point Lepreau (nuclear power plant, WRI)", "lat": 45.0686, "lon": -66.4543, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 660.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_mex0001769", "name": "Laguna Verde (nuclear power plant, WRI)", "lat": 19.7208, "lon": -96.4064, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1510.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0008055", "name": "Arkansas Nuclear One (nuclear power plant, WRI)", "lat": 35.311, "lon": -93.2351, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1845.0 MW, commissioning year 1977.5542005420054. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006040", "name": "Beaver Valley (nuclear power plant, WRI)", "lat": 40.6219, "lon": -80.4336, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1846.8 MW, commissioning year 1981.5000000000002. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006022", "name": "Braidwood Generation Station (nuclear power plant, WRI)", "lat": 41.2435, "lon": -88.2286, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2449.8 MW, commissioning year 1988.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000046", "name": "Browns Ferry (nuclear power plant, WRI)", "lat": 34.7042, "lon": -87.1189, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 3494.0 MW, commissioning year 1975.351459645106. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006014", "name": "Brunswick Nuclear (nuclear power plant, WRI)", "lat": 33.9597, "lon": -78.0114, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2003.2 MW, commissioning year 1976.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006023", "name": "Byron Generating Station (nuclear power plant, WRI)", "lat": 42.0742, "lon": -89.2819, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2449.8 MW, commissioning year 1986.0000000000002. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006153", "name": "Callaway (nuclear power plant, WRI)", "lat": 38.7589, "lon": -91.7788, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1235.8 MW, commissioning year 1985.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006011", "name": "Calvert Cliffs Nuclear Power Plant (nuclear power plant, WRI)", "lat": 38.4344, "lon": -76.4417, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1850.4 MW, commissioning year 1976.007782101167. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006036", "name": "Catawba (nuclear power plant, WRI)", "lat": 35.0514, "lon": -81.0694, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2410.2 MW, commissioning year 1985.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000204", "name": "Clinton Power Station (nuclear power plant, WRI)", "lat": 40.1719, "lon": -88.8339, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1138.3 MW, commissioning year 1987.0000000000002. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000371", "name": "Columbia Generating Station (nuclear power plant, WRI)", "lat": 46.4711, "lon": -119.3339, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1200.0 MW, commissioning year 1985.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006145", "name": "Comanche Peak (nuclear power plant, WRI)", "lat": 32.2984, "lon": -97.7855, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2430.0 MW, commissioning year 1991.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0008036", "name": "Cooper Nuclear Station (nuclear power plant, WRI)", "lat": 40.3628, "lon": -95.6408, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 801.0 MW, commissioning year 1974.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006149", "name": "Davis Besse (nuclear power plant, WRI)", "lat": 41.5967, "lon": -83.0861, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 925.2 MW, commissioning year 1977.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006099", "name": "Diablo Canyon (nuclear power plant, WRI)", "lat": 35.2115, "lon": -120.8555, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2323.0 MW, commissioning year 1985.501076194576. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006000", "name": "Donald C Cook (nuclear power plant, WRI)", "lat": 41.9756, "lon": -86.5652, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2285.3 MW, commissioning year 1976.4877259003194. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000869", "name": "Dresden Generating Station (nuclear power plant, WRI)", "lat": 41.39, "lon": -88.27, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2018.6 MW, commissioning year 1970.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0001060", "name": "Duane Arnold Energy Center (nuclear power plant, WRI)", "lat": 42.1011, "lon": -91.7781, "cat": "nuclear_site", "note": "Listed in the WRI database (2018 data). This plant has since closed (public information; not verified in this build).", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006051", "name": "Edwin I Hatch (nuclear power plant, WRI)", "lat": 31.9342, "lon": -82.3447, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1848.0 MW, commissioning year 1977.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0001729", "name": "Fermi (nuclear power plant, WRI)", "lat": 41.9631, "lon": -83.2581, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1281.0 MW, commissioning year 1986.9008587041374. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006072", "name": "Grand Gulf (nuclear power plant, WRI)", "lat": 32.0081, "lon": -91.0478, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1440.0 MW, commissioning year 1985.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0003251", "name": "H B Robinson (nuclear power plant, WRI)", "lat": 34.4017, "lon": -80.1589, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 768.6 MW, commissioning year 1971.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006015", "name": "Harris (nuclear power plant, WRI)", "lat": 35.6334, "lon": -78.9556, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 950.9 MW, commissioning year 1987.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0002497", "name": "Indian Point 2 (nuclear power plant, WRI)", "lat": 41.2706, "lon": -73.9527, "cat": "nuclear_site", "note": "Listed in the WRI database (2018 data). This plant has since closed (public information; not verified in this build). Indian Point is in Buchanan, New York, not in India.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0008907", "name": "Indian Point 3 (nuclear power plant, WRI)", "lat": 41.2706, "lon": -73.9526, "cat": "nuclear_site", "note": "Listed in the WRI database (2018 data). This plant has since closed (public information; not verified in this build). Indian Point is in Buchanan, New York, not in India.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006110", "name": "James A Fitzpatrick (nuclear power plant, WRI)", "lat": 43.5214, "lon": -76.4084, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 883.3 MW, commissioning year 1976.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006001", "name": "Joseph M Farley (nuclear power plant, WRI)", "lat": 31.2231, "lon": -85.1116, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1776.4 MW, commissioning year 1979.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006026", "name": "LaSalle Generating Station (nuclear power plant, WRI)", "lat": 41.2455, "lon": -88.6691, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2340.0 MW, commissioning year 1984.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006105", "name": "Limerick (nuclear power plant, WRI)", "lat": 40.2243, "lon": -75.5874, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2277.0 MW, commissioning year 1988.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006038", "name": "McGuire (nuclear power plant, WRI)", "lat": 35.4331, "lon": -80.9486, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2440.6 MW, commissioning year 1982.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000566", "name": "Millstone (nuclear power plant, WRI)", "lat": 41.3107, "lon": -72.1677, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2162.9 MW, commissioning year 1981.793148088215. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0001922", "name": "Monticello Nuclear Facility (nuclear power plant, WRI)", "lat": 45.3338, "lon": -93.8493, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 685.0 MW, commissioning year 1971.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0002589", "name": "Nine Mile Point Nuclear Station (nuclear power plant, WRI)", "lat": 43.5211, "lon": -76.41, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1901.1 MW, commissioning year 1981.260901583294. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006168", "name": "North Anna (nuclear power plant, WRI)", "lat": 38.06, "lon": -77.7897, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1960.4 MW, commissioning year 1979.5043358498267. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0003265", "name": "Oconee (nuclear power plant, WRI)", "lat": 34.7939, "lon": -82.8986, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2666.7 MW, commissioning year 1974.002474969063. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006118", "name": "PSEG Hope Creek Generating Station (nuclear power plant, WRI)", "lat": 39.4666, "lon": -75.5377, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1290.7 MW, commissioning year 1986.9999999999998. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0002410", "name": "PSEG Salem Generating Station (nuclear power plant, WRI)", "lat": 39.4625, "lon": -75.5358, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2381.8 MW, commissioning year 1978.8596019816944. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0001715", "name": "Palisades (nuclear power plant, WRI)", "lat": 42.323, "lon": -86.3146, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 811.8 MW, commissioning year 1972.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006008", "name": "Palo Verde (nuclear power plant, WRI)", "lat": 33.3881, "lon": -112.8617, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 4209.6 MW, commissioning year 1986.6666666666665. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0003166", "name": "Peach Bottom (nuclear power plant, WRI)", "lat": 39.7589, "lon": -76.2687, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2876.4 MW, commissioning year 1974.478723404255. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006020", "name": "Perry (nuclear power plant, WRI)", "lat": 41.8006, "lon": -81.1439, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1311.6 MW, commissioning year 1987.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0004046", "name": "Point Beach Nuclear Plant (nuclear power plant, WRI)", "lat": 44.2806, "lon": -87.5369, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1311.0 MW, commissioning year 1971.4523264683448. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0001925", "name": "Prairie Island (nuclear power plant, WRI)", "lat": 44.622, "lon": -92.6333, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1186.2 MW, commissioning year 1974.0000000000002. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000880", "name": "Quad Cities Generating Station (nuclear power plant, WRI)", "lat": 41.7261, "lon": -90.3103, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2018.6 MW, commissioning year 1973.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006122", "name": "R E Ginna Nuclear Power Plant (nuclear power plant, WRI)", "lat": 43.2777, "lon": -77.3099, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 614.0 MW, commissioning year 1970.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006462", "name": "River Bend (nuclear power plant, WRI)", "lat": 30.757, "lon": -91.3327, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1035.9 MW, commissioning year 1986.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006115", "name": "Seabrook (nuclear power plant, WRI)", "lat": 42.8992, "lon": -70.8489, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1242.0 MW, commissioning year 1990.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006152", "name": "Sequoyah (nuclear power plant, WRI)", "lat": 35.2267, "lon": -85.0917, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2441.0 MW, commissioning year 1981.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006251", "name": "South Texas Project (nuclear power plant, WRI)", "lat": 28.795, "lon": -96.0481, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2708.6 MW, commissioning year 1988.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006045", "name": "St Lucie (nuclear power plant, WRI)", "lat": 27.3486, "lon": -80.2464, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2160.0 MW, commissioning year 1979.5. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0003806", "name": "Surry (nuclear power plant, WRI)", "lat": 37.1661, "lon": -76.6986, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1695.0 MW, commissioning year 1973.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006103", "name": "TalenEnergy Susquehanna (nuclear power plant, WRI)", "lat": 41.0919, "lon": -76.1462, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2532.0 MW, commissioning year 1984.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000621", "name": "Turkey Point (nuclear power plant, WRI)", "lat": 25.4356, "lon": -80.3308, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2861.2 MW, commissioning year 1987.5449461764294. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0006127", "name": "V C Summer (nuclear power plant, WRI)", "lat": 34.2983, "lon": -81.3153, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1029.6 MW, commissioning year 1984.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000649", "name": "Vogtle (nuclear power plant, WRI)", "lat": 33.1427, "lon": -81.7625, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2430.0 MW, commissioning year 1988.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0004270", "name": "Waterford 3 (nuclear power plant, WRI)", "lat": 29.9953, "lon": -90.4716, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1199.8 MW, commissioning year 1985.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0007722", "name": "Watts Bar Nuclear Plant (nuclear power plant, WRI)", "lat": 35.6021, "lon": -84.7895, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2539.8 MW, commissioning year 2006.0000000000002. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_usa0000210", "name": "Wolf Creek Generating Station (nuclear power plant, WRI)", "lat": 38.2393, "lon": -95.6898, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 1267.7 MW, commissioning year 1985.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 31}], "total_items": 31};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const phi = lat * Math.PI/180, lam = lon * Math.PI/180;
    const rho = PROJ.F / Math.pow(Math.tan(Math.PI/4 + phi/2), PROJ.n);
    const th = PROJ.n * (lam - PROJ.lam0);
    const x = rho*Math.sin(th), y = PROJ.rho0 - rho*Math.cos(th);
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
