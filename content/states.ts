// dexent/content/states.ts
// Real, per-state freight data. This is what makes each /dispatch/[equipment]/[state]
// page GENUINELY UNIQUE (not a spun template) — the key to ranking without duplicate
// penalties. Only states with real content are live; add more in batches.
//
// ⚠️ IMPORTANT: Every field here should be TRUE for that state. Do not invent
// rate numbers. The "hubs", "lanes", and "notes" are real geography/industry facts.
// Add your own dispatcher observations to deepen each one over time.

export type StateData = {
  slug: string; // url segment, e.g. "texas"
  name: string; // "Texas"
  abbr: string; // "TX"
  // Major freight/shipping hubs in the state (real cities)
  hubs: string[];
  // Real freight characteristics — what moves here, why carriers run it
  freightNotes: string;
  // Equipment-specific angle: what each equipment type tends to haul in this state
  equipmentAngles: Partial<Record<string, string>>;
  // Neighboring state slugs for internal "nearby" linking
  neighbors: string[];
};

export const STATES: Record<string, StateData> = {
  texas: {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    hubs: ["Dallas–Fort Worth", "Houston", "Laredo", "San Antonio", "El Paso"],
    freightNotes:
      "Texas is one of the busiest freight states in the country, anchored by the Dallas–Fort Worth inland port, the Houston industrial and petrochemical corridor, and the Laredo border crossing — the top U.S.–Mexico trade gateway. Cross-border volume, energy freight, and distribution out of DFW keep trucks moving in every direction.",
    equipmentAngles: {
      "power-only":
        "Heavy drop-and-hook activity around DFW and Houston distribution centers makes Texas strong for power only, with steady trailer repositioning near the Laredo border.",
      "dry-van":
        "DFW is a national distribution hub, so dry van carriers find consistent outbound retail and consumer-goods freight, plus cross-border van loads through Laredo.",
      reefer:
        "Texas moves produce out of the Rio Grande Valley and imports through Pharr/Laredo, plus protein and dairy freight — reefer demand runs strong, especially in the winter produce season.",
      flatbed:
        "The Texas energy sector, construction, and steel drive heavy flatbed demand — oil-field equipment in the Permian, plus building materials around fast-growing metros.",
    },
    neighbors: ["oklahoma", "louisiana"],
  },

  california: {
    slug: "california",
    name: "California",
    abbr: "CA",
    hubs: ["Los Angeles", "Long Beach", "Ontario", "Fresno", "Oakland", "Sacramento"],
    freightNotes:
      "California freight is shaped by the Los Angeles/Long Beach port complex — the largest in the U.S. — and the Central Valley, one of the world's most productive agricultural regions. Import distribution out of the Inland Empire and produce out of the Valley create heavy, year-round volume.",
    equipmentAngles: {
      "power-only":
        "The Inland Empire's massive warehouse cluster around Ontario and the ports drives constant drop-and-hook and trailer-spotting work for power only carriers.",
      "dry-van":
        "Port-driven import distribution out of LA/Long Beach and the Inland Empire gives dry van carriers steady outbound freight to the rest of the country.",
      reefer:
        "California is the reefer capital — Central Valley produce (Fresno, Salinas, Bakersfield) ships nationwide, and rates climb hard through the growing and harvest seasons.",
      flatbed:
        "Construction around major metros and building-material distribution support flatbed demand, though California leans more van and reefer than flatbed overall.",
    },
    neighbors: ["arizona", "nevada"],
  },

  georgia: {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    hubs: ["Atlanta", "Savannah", "Macon", "Columbus"],
    freightNotes:
      "Georgia is the freight hub of the Southeast, built around Atlanta's distribution networks and the fast-growing Port of Savannah — one of the busiest container ports in the country. Its position on the I-75/I-85/I-95 corridors makes it a natural crossroads for regional and long-haul freight.",
    equipmentAngles: {
      "power-only":
        "Savannah's port growth and Atlanta's distribution centers generate strong drop-and-hook and trailer-repositioning demand for power only carriers.",
      "dry-van":
        "Atlanta is a major Southeast distribution point, giving dry van carriers reliable outbound retail and consumer freight, plus import distribution from Savannah.",
      reefer:
        "Georgia moves poultry (a leading state for production), produce like Vidalia onions and peaches in season, and refrigerated distribution across the Southeast.",
      flatbed:
        "Construction growth across metro Atlanta and building-materials freight support steady flatbed demand throughout the state.",
    },
    neighbors: ["florida", "tennessee"],
  },

  ohio: {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    hubs: ["Columbus", "Cincinnati", "Cleveland", "Toledo", "Dayton"],
    freightNotes:
      "Ohio sits within a one-day drive of a large share of the U.S. population, which makes it one of the most important distribution states in the country. Columbus and the Rickenbacker inland port anchor a fast-growing e-commerce and logistics cluster, while Cincinnati, Cleveland, and Toledo add manufacturing, automotive, and cross-border freight toward Michigan and Canada.",
    equipmentAngles: {
      "power-only":
        "The Columbus/Rickenbacker logistics cluster and the state's dense distribution-center network drive steady drop-and-hook and trailer-repositioning work for power only carriers.",
      "dry-van":
        "Columbus is a major e-commerce fulfillment hub, so dry van carriers find consistent outbound retail and consumer freight, with additional volume out of Cincinnati and Cleveland.",
      reefer:
        "Ohio moves refrigerated grocery and food-distribution freight across the dense Midwest/East Coast population it serves, with steady year-round demand rather than sharp seasonal swings.",
      flatbed:
        "Ohio's manufacturing and steel base around Cleveland and the industrial corridors supports steady flatbed demand for metal, machinery, and building materials.",
    },
    neighbors: ["indiana", "pennsylvania", "kentucky", "michigan"],
  },

  illinois: {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    hubs: ["Chicago", "Joliet", "Rockford", "Peoria"],
    freightNotes:
      "Illinois is America's rail and freight crossroads. Chicago is the only point where all major Class I railroads converge, and the Joliet/Elwood inland port complex is the largest in North America. Combined with the intersection of I-80, I-90, I-94, I-55, and I-57 and O'Hare's air cargo, Illinois offers unmatched modal flexibility for carriers.",
    equipmentAngles: {
      "power-only":
        "The Joliet intermodal complex — the largest inland port in North America — generates enormous drop-and-hook and drayage volume, making Illinois a top power only state.",
      "dry-van":
        "Chicago's position as the national intermodal hub gives dry van carriers deep, consistent freight in every direction, reaching the Midwest overnight and the East Coast in two days.",
      reefer:
        "Illinois moves heavy refrigerated grocery and food-processing freight through the Chicago distribution network, with steady demand feeding the dense Midwest population.",
      flatbed:
        "Manufacturing, steel, and heavy-equipment freight around Chicago and Joliet's rail connections support strong flatbed demand.",
    },
    neighbors: ["indiana", "wisconsin", "missouri", "kentucky"],
  },

  pennsylvania: {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    hubs: ["Philadelphia", "Harrisburg", "Pittsburgh", "Allentown", "Scranton"],
    freightNotes:
      "Pennsylvania's position on the I-78/I-81/I-76 corridors makes it a critical East Coast distribution state, within a day's drive of a huge share of the Northeast population. The Lehigh Valley (Allentown) and Harrisburg have become major warehouse and fulfillment clusters, while the Port of Philadelphia adds import freight and Pittsburgh anchors western industrial lanes.",
    equipmentAngles: {
      "power-only":
        "The Lehigh Valley and Harrisburg warehouse clusters drive heavy drop-and-hook and trailer-spotting demand for power only carriers serving Northeast distribution.",
      "dry-van":
        "Pennsylvania's fulfillment corridors give dry van carriers consistent outbound freight to the dense Northeast, plus import distribution from the Port of Philadelphia.",
      reefer:
        "Refrigerated grocery and food distribution to the Northeast metros moves steadily through Pennsylvania's warehouse network, plus produce imports through Philadelphia.",
      flatbed:
        "Pittsburgh's steel heritage and construction across the state's growing distribution corridors support solid flatbed demand.",
    },
    neighbors: ["ohio", "new-jersey", "new-york"],
  },

  florida: {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    hubs: ["Miami", "Orlando", "Jacksonville", "Tampa", "Lakeland"],
    freightNotes:
      "Florida is a large consumption market and a major import gateway, with the ports of Miami and Jacksonville handling international freight and Latin American trade. The I-4 corridor between Tampa and Orlando (anchored by the Lakeland distribution cluster) is one of the fastest-growing logistics regions in the country, though carriers watch for backhaul balance since freight into Florida often outpaces freight out.",
    equipmentAngles: {
      "power-only":
        "The I-4 corridor's booming distribution centers around Lakeland and Orlando drive strong drop-and-hook demand for power only carriers.",
      "dry-van":
        "Florida's large consumer population pulls heavy inbound dry van freight; carriers plan outbound loads carefully to avoid deadhead, and a good dispatcher earns their fee managing that balance.",
      reefer:
        "Florida is a major produce and citrus state, and reefer demand runs strong moving fresh product north, especially in the winter growing season.",
      flatbed:
        "Rapid construction growth across Florida's metros supports steady flatbed demand for building materials and equipment.",
    },
    neighbors: ["georgia"],
  },

  indiana: {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    hubs: ["Indianapolis", "Fort Wayne", "Gary", "Evansville"],
    freightNotes:
      "Indiana calls itself the Crossroads of America for good reason — it has more interstate highway miles per square mile than any other state, sits within a one-day drive of roughly 75% of the U.S. population, and is home to the second-largest FedEx Express hub at Indianapolis. I-65, I-69, I-70, and I-74 converge in Indianapolis and radiate to Chicago, Cincinnati, Louisville, Columbus, and St. Louis.",
    equipmentAngles: {
      "power-only":
        "Indianapolis's central location and dense warehouse network — plus the major FedEx hub — make Indiana strong for power only drop-and-hook and repositioning work.",
      "dry-van":
        "With one-day ground reach to a huge share of the country, Indiana gives dry van carriers excellent outbound freight and reload options in every direction.",
      reefer:
        "Indiana moves refrigerated food and grocery distribution across the Midwest, supported by its central position and fast reach to major population centers.",
      flatbed:
        "Indiana's steel industry around Gary and manufacturing base support consistent flatbed demand for metal and industrial freight.",
    },
    neighbors: ["ohio", "illinois", "kentucky", "michigan"],
  },

  tennessee: {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    hubs: ["Memphis", "Nashville", "Knoxville", "Chattanooga"],
    freightNotes:
      "Tennessee is a logistics powerhouse anchored by Memphis — home to the FedEx SuperHub and one of the busiest cargo airports in the world — plus a fast-growing Nashville distribution market. Its central Southeast position on I-40, I-65, and I-24 puts carriers within a day's reach of most of the eastern U.S.",
    equipmentAngles: {
      "power-only":
        "Memphis's massive freight and distribution ecosystem, built around the FedEx SuperHub, drives heavy drop-and-hook and drayage demand for power only carriers.",
      "dry-van":
        "Memphis and Nashville distribution networks give dry van carriers consistent outbound freight across the Southeast and East, with strong reload availability.",
      reefer:
        "Tennessee moves refrigerated food and grocery distribution through Memphis and Nashville, with steady demand across the region it serves.",
      flatbed:
        "Manufacturing and construction growth around Nashville and Chattanooga supports steady flatbed demand for building materials and equipment.",
    },
    neighbors: ["georgia", "kentucky", "missouri"],
  },

  "north-carolina": {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    hubs: ["Charlotte", "Greensboro", "Raleigh", "Wilmington"],
    freightNotes:
      "North Carolina combines a strong manufacturing base with fast-growing distribution around Charlotte and the Piedmont Triad (Greensboro), plus the Port of Wilmington. Its position on I-85 and I-95 makes it a key link in East Coast freight between the Northeast and the Southeast.",
    equipmentAngles: {
      "power-only":
        "The Charlotte and Greensboro distribution corridors drive steady drop-and-hook and trailer-repositioning demand for power only carriers.",
      "dry-van":
        "North Carolina's manufacturing and distribution give dry van carriers consistent freight along the busy I-85/I-95 East Coast corridors.",
      reefer:
        "The state moves poultry, produce, and refrigerated grocery distribution across the Southeast, supporting steady reefer demand.",
      flatbed:
        "Furniture manufacturing, construction, and building-materials freight across the growing metros support solid flatbed demand.",
    },
    neighbors: ["virginia", "tennessee", "georgia"],
  },

  "new-jersey": {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    hubs: ["Newark", "Elizabeth", "Edison", "Trenton"],
    freightNotes:
      "New Jersey is the heart of the Northeast's freight network, home to the Port of New York and New Jersey — the largest port on the East Coast. Its dense warehouse and distribution corridors along the New Jersey Turnpike serve the enormous New York metro consumer market, making it one of the highest-demand freight regions in the country.",
    equipmentAngles: {
      "power-only":
        "The Port of NY/NJ and the state's dense warehouse corridors generate enormous drayage and drop-and-hook volume, making New Jersey a top power only market.",
      "dry-van":
        "Import distribution from the East Coast's largest port plus the huge NY metro consumer market give dry van carriers deep, consistent freight.",
      reefer:
        "Refrigerated produce and food imports through the port, plus grocery distribution to the dense Northeast population, keep reefer demand strong.",
      flatbed:
        "Construction across the metro region and industrial freight support steady flatbed demand, though New Jersey leans more toward van and drayage.",
    },
    neighbors: ["new-york", "pennsylvania"],
  },

  "new-york": {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    hubs: ["New York City", "Buffalo", "Albany", "Syracuse", "Rochester"],
    freightNotes:
      "New York pairs the massive downstate consumer market of New York City with upstate industrial and cross-border freight toward Canada through Buffalo. Downstate freight is dominated by dense last-mile and distribution demand, while the I-90 corridor upstate carries manufacturing and international trade.",
    equipmentAngles: {
      "power-only":
        "The downstate distribution network and Buffalo's cross-border activity drive drop-and-hook and repositioning demand for power only carriers.",
      "dry-van":
        "The enormous NYC consumer market pulls heavy inbound dry van freight, with distribution and reload opportunities across the metro and upstate corridors.",
      reefer:
        "Refrigerated grocery and food distribution to the dense New York City population keeps reefer demand consistently strong year-round.",
      flatbed:
        "Upstate manufacturing and construction around the metro support flatbed demand for steel, machinery, and building materials.",
    },
    neighbors: ["new-jersey", "pennsylvania"],
  },

  michigan: {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    hubs: ["Detroit", "Grand Rapids", "Lansing", "Flint"],
    freightNotes:
      "Michigan is the center of the U.S. automotive industry, and its freight economy reflects that — Detroit anchors heavy automotive parts and manufacturing freight, with major cross-border trade to Canada through the Detroit–Windsor crossing, one of the busiest commercial borders in North America. Grand Rapids adds furniture and consumer manufacturing.",
    equipmentAngles: {
      "power-only":
        "Automotive plants and the Detroit–Windsor border drive constant drop-and-hook and just-in-time trailer moves, making Michigan strong for power only carriers.",
      "dry-van":
        "Automotive parts, manufacturing, and consumer goods give dry van carriers steady freight, with heavy cross-border van activity through Detroit.",
      reefer:
        "Refrigerated grocery and food distribution serve Michigan's population, with steady regional reefer demand.",
      flatbed:
        "The automotive and manufacturing base drives strong flatbed demand for steel, coils, and machinery — a core Michigan freight type.",
    },
    neighbors: ["ohio", "indiana", "wisconsin"],
  },

  missouri: {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    hubs: ["Kansas City", "St. Louis", "Springfield", "Columbia"],
    freightNotes:
      "Missouri's two major metros — Kansas City and St. Louis — sit at the intersection of key east-west (I-70) and north-south (I-44, I-55) corridors, making the state a central distribution and rail crossroads. Kansas City is one of the largest rail hubs in the country by tonnage, and both metros host major warehouse and food-distribution clusters.",
    equipmentAngles: {
      "power-only":
        "Kansas City's major rail and distribution network drives strong drayage and drop-and-hook demand for power only carriers.",
      "dry-van":
        "Central location on I-70 gives dry van carriers excellent access to freight in all four directions, with consistent reloads out of both metros.",
      reefer:
        "Missouri moves refrigerated food and meat-processing freight (a strong regional industry), supporting steady reefer demand.",
      flatbed:
        "Manufacturing and construction across both metros support solid flatbed demand for building materials and equipment.",
    },
    neighbors: ["illinois", "kansas", "tennessee"],
  },

  arizona: {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    hubs: ["Phoenix", "Tucson", "Nogales", "Mesa"],
    freightNotes:
      "Arizona has become a major Southwest distribution hub, with Phoenix growing rapidly as a warehouse and fulfillment market serving the fast-expanding region and the West Coast. The Nogales border crossing is a key U.S.–Mexico produce gateway, and Arizona's position on I-10 links Southern California to Texas and the East.",
    equipmentAngles: {
      "power-only":
        "Phoenix's booming distribution-center growth drives increasing drop-and-hook and trailer-repositioning demand for power only carriers.",
      "dry-van":
        "Phoenix's expanding fulfillment market and the I-10 corridor give dry van carriers strong and growing freight, plus cross-border van loads through Nogales.",
      reefer:
        "The Nogales crossing is a major winter produce gateway from Mexico, making Arizona strong for reefer, especially in the cooler-season produce months.",
      flatbed:
        "Rapid construction growth across metro Phoenix supports steady flatbed demand for building materials and equipment.",
    },
    neighbors: ["california", "nevada"],
  },

  wisconsin: {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    hubs: ["Milwaukee", "Madison", "Green Bay", "Appleton"],
    freightNotes:
      "Wisconsin combines heavy manufacturing around Milwaukee with a major agricultural and dairy economy statewide. Its position on I-94 links it to the Chicago freight network and the broader Midwest, and the state is a significant origin for food, paper, and machinery freight.",
    equipmentAngles: {
      "power-only":
        "Manufacturing and food-production facilities around Milwaukee and the Fox Valley drive drop-and-hook and trailer-spotting demand for power only carriers.",
      "dry-van":
        "Paper, packaged food, and manufacturing give dry van carriers steady outbound freight, with easy access to the Chicago network via I-94.",
      reefer:
        "As one of the nation's leading dairy states, Wisconsin generates strong reefer demand moving cheese, dairy, and refrigerated food products nationwide.",
      flatbed:
        "Heavy machinery and manufacturing around Milwaukee support consistent flatbed demand for industrial freight.",
    },
    neighbors: ["illinois", "michigan"],
  },

  kansas: {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    hubs: ["Kansas City", "Wichita", "Topeka", "Salina"],
    freightNotes:
      "Kansas sits at the center of the country on I-70 and I-35, making it an important agricultural and cross-country freight state. The Kansas City metro (shared with Missouri) is a major rail and distribution hub, while the state's agriculture drives significant grain, food, and equipment freight.",
    equipmentAngles: {
      "power-only":
        "The Kansas City rail and distribution complex drives drop-and-hook and drayage demand for power only carriers.",
      "dry-van":
        "Central position on the I-70/I-35 crossroads gives dry van carriers strong long-haul freight and reload access across the country.",
      reefer:
        "Kansas is a major beef-processing state, generating steady refrigerated freight moving protein and food products to markets nationwide.",
      flatbed:
        "Agricultural equipment, aviation manufacturing around Wichita, and construction support solid flatbed demand.",
    },
    neighbors: ["missouri", "oklahoma"],
  },

  kentucky: {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    hubs: ["Louisville", "Lexington", "Bowling Green", "Covington"],
    freightNotes:
      "Kentucky is a critical logistics state anchored by Louisville — home to the UPS Worldport, the company's largest global air hub — which drives an enormous express and distribution ecosystem. Its central position on I-65, I-64, and I-75 puts carriers within a day's reach of most of the eastern U.S., and the state hosts significant automotive manufacturing.",
    equipmentAngles: {
      "power-only":
        "The UPS Worldport ecosystem and Louisville's distribution network drive heavy drop-and-hook and drayage demand for power only carriers.",
      "dry-van":
        "Louisville's express-and-distribution hub and central location give dry van carriers deep, consistent freight with strong reload options.",
      reefer:
        "Kentucky moves refrigerated food and grocery distribution across the region it serves, with steady year-round reefer demand.",
      flatbed:
        "Automotive manufacturing and construction support flatbed demand for steel, machinery, and building materials.",
    },
    neighbors: ["ohio", "indiana", "tennessee", "illinois"],
  },

  virginia: {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    hubs: ["Richmond", "Norfolk", "Virginia Beach", "Roanoke"],
    freightNotes:
      "Virginia's freight economy is anchored by the Port of Virginia (Norfolk) — one of the largest and deepest ports on the East Coast — plus the Richmond distribution corridor along I-95. The state is a key link in Mid-Atlantic freight, moving imports inland and connecting the Southeast to the Northeast.",
    equipmentAngles: {
      "power-only":
        "The Port of Virginia drives strong drayage and drop-and-hook demand for power only carriers, plus repositioning along the I-95 corridor.",
      "dry-van":
        "Import distribution from the Port of Virginia and the Richmond corridor give dry van carriers consistent freight along the busy Mid-Atlantic I-95 lanes.",
      reefer:
        "Refrigerated produce imports through Norfolk and grocery distribution to the Mid-Atlantic support steady reefer demand.",
      flatbed:
        "Construction and building-materials freight across Virginia's growing metros support consistent flatbed demand.",
    },
    neighbors: ["north-carolina", "tennessee"],
  },

  washington: {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    hubs: ["Seattle", "Tacoma", "Spokane", "Yakima"],
    freightNotes:
      "Washington's freight is shaped by the Seattle–Tacoma port complex — a major West Coast gateway for trans-Pacific trade — plus a large agricultural economy in the eastern part of the state. The Northwest Seaport Alliance drives heavy import distribution, while the Yakima Valley generates significant produce freight.",
    equipmentAngles: {
      "power-only":
        "The Seattle–Tacoma port complex drives strong drayage and drop-and-hook demand for power only carriers moving import containers inland.",
      "dry-van":
        "Import distribution from the Sea-Tac port gateway gives dry van carriers steady outbound freight to the rest of the country.",
      reefer:
        "The Yakima Valley is a major apple and produce region, and Washington generates strong reefer demand moving fresh product east, especially in harvest season.",
      flatbed:
        "Construction around the Seattle metro and machinery freight support steady flatbed demand.",
    },
    neighbors: [],
  },
};

export const LIVE_STATE_SLUGS = Object.keys(STATES);