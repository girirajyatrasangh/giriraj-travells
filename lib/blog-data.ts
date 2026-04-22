export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: 'Local' | 'Gujarat' | 'National'
  date: string
  readTime: string
  slug: string
  paragraphs: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 7 Pilgrimage Destinations Near Jamnagar for 2025',
    excerpt: 'Dwarka, Somnath, Nageshwar, Bet Dwarka — explore the sacred sites of Saurashtra with comfort and confidence.',
    category: 'Gujarat',
    date: 'Apr 10, 2025',
    readTime: '5 min read',
    slug: 'pilgrimage-destinations-jamnagar-2025',
    paragraphs: [
      'Jamnagar sits at the heart of Saurashtra — one of India\'s richest spiritual landscapes. Within a 300 km radius lie some of the holiest sites in the Hindu tradition, accessible comfortably in a day trip or a two-day yatra. Whether you are planning a family pilgrimage or a solo spiritual journey, here are seven destinations worth visiting in 2025.',
      'Dwarka — the legendary city of Lord Krishna — tops every pilgrim\'s list. Just 130 km from Jamnagar via NH-27, the Dwarkadhish Temple draws hundreds of thousands of devotees each year. The best time to visit is early morning during the aarti. Our drivers arrive the previous evening so you are never rushed.',
      'Nageshwar Jyotirlinga, located 16 km from Dwarka, is one of the twelve sacred jyotirlingas of Lord Shiva. The 25-metre Shiva statue at the entrance is a stunning sight. Combine this with a visit to Bet Dwarka — accessible by a short boat ride — for a complete Dwarka circuit.',
      'Somnath is a two-hour drive south of Jamnagar along the coastal highway. The rebuilt temple complex, standing majestically on the Arabian Sea shore, is especially beautiful at sunset. The evening sound-and-light show narrates its history across five centuries.',
      'Palitana, home to 900 Jain temples atop Shatrunjaya Hill, is a sacred site of national importance. The 3,500-step climb is demanding but deeply rewarding. Giriraj Yatra Sangh recommends starting the ascent at 6 AM to avoid the midday heat. We can arrange an early morning departure from Jamnagar and return by evening.',
      'Giriraj Yatra Sangh has been facilitating pilgrimages across these routes since 1974. Our drivers are familiar with every temple protocol, parking point, and resting stop. Book a dedicated pilgrimage vehicle with us and travel in dignity, comfort, and safety.',
    ],
  },
  {
    id: '2',
    title: 'Why Innova Crysta Is the Best Family Road-Trip Car in India',
    excerpt: 'From passenger comfort to luggage space and fuel efficiency — here is why the Innova Crysta remains the undisputed king of Indian family travel.',
    category: 'National',
    date: 'Mar 22, 2025',
    readTime: '4 min read',
    slug: 'innova-crysta-best-family-car',
    paragraphs: [
      'Ask any family who has done a long road trip across India, and nine times out of ten they will tell you the same thing: the Toyota Innova Crysta is in a class of its own. After fifteen years of dominating the Indian MUV market, it remains the most requested vehicle in our fleet — and for good reason.',
      'Space is the Innova\'s greatest virtue. Seven adults can sit without the shoulder-to-shoulder cramming of a sedan. The third-row seat, unlike most MUVs, is genuinely usable for adults on long journeys. Boot space (300 litres with all seats up) swallows a family\'s luggage with room to spare.',
      'The 2.4-litre diesel engine produces enough torque to handle mountain climbs, potholed state highways, and sustained 100 km/h cruising with equal composure. Fuel efficiency of 13-15 km/l at highway speeds makes the per-person cost competitive even against budget alternatives.',
      'Ground clearance of 178 mm means rough rural roads — the reality on any pilgrimage or rural sightseeing route in Gujarat — are handled confidently. Monsoon floods, speed bumps, and village lanes are all navigable without the anxiety you feel in a low-slung sedan.',
      'At Giriraj Yatra Sangh, the Innova Crysta is our "Best Seller" for a reason. Our fleet is maintained to manufacturer standards, interiors are deep-cleaned between trips, and every Innova in our garage carries a verified, experienced driver. If you are planning a family trip anywhere in Gujarat, this is the vehicle we recommend first.',
    ],
  },
  {
    id: '3',
    title: 'Jamnagar to Rann of Kutch: The Ultimate Road-Trip Guide',
    excerpt: 'Planning a drive from Jamnagar to the Rann of Kutch? Here is your complete itinerary including stops, roads, and best times to travel.',
    category: 'Local',
    date: 'Mar 5, 2025',
    readTime: '6 min read',
    slug: 'jamnagar-to-rann-of-kutch-guide',
    paragraphs: [
      'The drive from Jamnagar to Dhordo — the main entry point for the Rann of Kutch — covers approximately 270 km and takes around 4.5 to 5 hours on a clear day. The route is almost entirely on NH-27 and then NH-341, which are in excellent condition for most of the year.',
      'The best time for this road trip is October through February, during the Rann Utsav festival period. The white salt desert under a full moon is one of the most otherworldly experiences in India. Book your accommodation at the Tent City early — it fills up weeks in advance during festival season.',
      'Recommended stops on the way: Morbi (famous for its tile industry and the suspension bridge), Bhachau (a small but historically significant town), and Bhuj (the cultural capital of Kutch with its Aina Mahal palace and vibrant craft market). Bhuj is worth at least a half-day detour if time permits.',
      'Return route tip: take the southern return via Mandvi to see the Ship Building Yard, one of the few traditional dhow-building workshops still active in India. End your day at Mandvi Beach for a spectacular Arabian Sea sunset before the 150 km drive back to Jamnagar.',
      'Giriraj Yatra Sangh recommends a Tempo Traveller or Innova Crysta for groups of 5 or more on this route. Our drivers know the Kutch region roads well and can suggest local stops and food spots that most tourists miss. Contact us for a custom itinerary and vehicle package.',
    ],
  },
  {
    id: '4',
    title: 'How to Plan a Group Tour from Gujarat: A Step-by-Step Guide',
    excerpt: 'Organising travel for 20+ people can be stressful. Our guide covers everything from vehicle selection to route planning and budgeting.',
    category: 'Gujarat',
    date: 'Feb 18, 2025',
    readTime: '7 min read',
    slug: 'group-tour-planning-gujarat',
    paragraphs: [
      'Group travel in India is both a logistical challenge and a deeply rewarding experience. Whether you are coordinating a family reunion pilgrimage, a corporate offsite, or a college cultural trip, the first decision you make — your transport arrangement — sets the tone for everything that follows.',
      'Step 1: Count your group accurately. This seems obvious but is consistently under-done. Account for every person, including children, drivers, and any local guides. For 20–27 people, a Mini Bus is your ideal vehicle. For 28–50, a full-size coach is the right choice. Splitting a large group across multiple smaller vehicles adds cost and coordination complexity.',
      'Step 2: Fix the itinerary before the vehicle. Route, daily distances, and stop durations determine whether you need an AC vehicle, how many nights you need the vehicle on-call, and what per-km or daily rate structure makes financial sense. Share the full itinerary with your transport provider — it helps them assign the right driver.',
      'Step 3: Budget correctly. Group travel per-person cost is dramatically lower than individual travel, but only if the vehicle is appropriately sized. The biggest budgeting mistake is booking a larger vehicle than needed "for comfort" — the extra daily cost erases the per-person savings. A Mini Bus at ₹12,000/day for 25 people is ₹480 per person. Budget smart.',
      'Step 4: Confirm in writing. Confirm the vehicle, driver, start date and time, route, included kilometres, and price in writing before paying any advance. At Giriraj Yatra Sangh, we provide GST-compliant booking confirmations for all group tours. This is especially important for corporate and institutional travel.',
      'Step 5: Plan for flexibility. Traffic delays, weather changes, and group consensus shifts happen on every multi-day tour. A good transport partner — one who has done these routes many times — is an asset, not just a driver. Our group-tour drivers are experienced in keeping large groups on time and comfortable even when plans change.',
    ],
  },
  {
    id: '5',
    title: '5 Tips for Safe Night Driving on Gujarat Highways',
    excerpt: 'Night travel is unavoidable for many long-distance trips. Follow these five expert tips to stay safe on the road after dark.',
    category: 'National',
    date: 'Jan 30, 2025',
    readTime: '4 min read',
    slug: 'safe-night-driving-gujarat',
    paragraphs: [
      'Night driving accounts for a disproportionate share of road accidents in India despite carrying a fraction of daytime traffic. Reduced visibility, driver fatigue, and unpredictable obstacles — livestock, pedestrians, and unlit vehicles — make after-dark travel a genuine risk. Here are five practices that make a measurable difference.',
      'Tip 1: Use high beams strategically. On open highways with no oncoming traffic, high beams significantly extend your reaction distance. But switch to low beam well before oncoming headlights reach you — at least 200 metres — to avoid blinding other drivers. Many serious highway accidents occur because of incorrect beam use.',
      'Tip 2: Stick to the left lane unless overtaking. At night, the lane discipline that Indian drivers sometimes ignore during the day becomes critical. Unexpected swerving or lane changes at 80+ km/h in low visibility is one of the most common causes of fatal highway accidents.',
      'Tip 3: Take a 20-minute rest every 2 hours. Microsleep — a 2 to 3 second involuntary sleep episode — happens without warning after prolonged driving and accounts for a significant number of fatal single-vehicle accidents. At 100 km/h, 3 seconds means 83 metres of uncontrolled travel. No deadline is worth that risk.',
      'Tip 4: Watch for cattle and stray dogs. Gujarat\'s highways cross numerous villages, and livestock on the road at night are nearly invisible until headlights are within 30 metres. Slow to 60 km/h when approaching villages or when road-crossing cattle warnings are visible.',
      'Tip 5: Hire a professional driver for long-distance night travel. At Giriraj Yatra Sangh, our drivers are trained specifically in night-driving safety and are familiar with Gujarat\'s highway network. For trips over 300 km, we assign rested, experienced drivers — never a driver who has already completed a day journey. Your safety is not negotiable.',
    ],
  },
  {
    id: '6',
    title: 'Monsoon Road Trip in Saurashtra: What You Need to Know',
    excerpt: 'The rains transform Saurashtra into a lush green paradise. But monsoon driving requires extra precautions. Here is what you should know.',
    category: 'Local',
    date: 'Jan 12, 2025',
    readTime: '5 min read',
    slug: 'monsoon-road-trip-saurashtra',
    paragraphs: [
      'Between July and September, Saurashtra transforms from its dry, sun-baked self into a rolling green landscape that looks almost unreal. Waterfalls appear on hills that are bone-dry in winter, the Gir forest turns lush, and the coastline takes on a dramatic, storm-swept character. It is genuinely beautiful — and genuinely more challenging to drive through.',
      'Road conditions vary dramatically by region and date. National highways in Gujarat are generally well-maintained and handle monsoon conditions well. State highways and district roads, however, can deteriorate quickly: potholes deepen, shoulders erode, and low-lying crossings flood without warning. Check NH or state PWD updates before any non-highway journey.',
      'Vehicle choice matters more in monsoon. A high-clearance SUV or Tempo Traveller handles water crossings and rough roads far better than a low-slung sedan. At Giriraj Yatra Sangh, we recommend the Innova Crysta or Ertiga for monsoon family travel — both have the ground clearance and driver visibility needed for rain conditions.',
      'Never cross flooded roads unless you can clearly see the road surface and estimate the depth. Even 15 cm of moving water can cause a car to lose traction. The rule our drivers follow: if in doubt, wait it out. The road will drain. A stuck or flooded vehicle is the worst outcome, especially in an area with limited rescue options.',
      'The reward for the extra caution is significant. Monsoon Saurashtra — with the Barda Wildlife Sanctuary turning emerald, the Marine National Park\'s mangroves dripping with rain, and the rural landscape at its most alive — is one of western India\'s hidden travel experiences. Plan well, choose the right vehicle, and this is a trip you will remember for years.',
    ],
  },
]
