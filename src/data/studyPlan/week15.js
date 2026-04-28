// Week 15 — Aug 10 (Mon) to Aug 16 (Sun) — Phase 5: Tier 2 Acceleration | Days 97-103
const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'Mock Analysis + DEST (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-08-10',dayNumber:97,date:'2026-08-10',phase:5,tier:2,weekNumber:15,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 97 — Parajumbles T2 + Human Geography + Geometry Circles',
    promptBlock:`OPERATIVE BRIEFING — DAY 97

Week 15. Monday. The machine keeps running. Parajumbles are the most logic-intensive English task in Tier 2 — they reward methodical approach over speed. Today we crack the framework.

ENGLISH — PARAJUMBLES:
Six sentences to arrange. Strategy: (1) Find the opening sentence — it introduces a concept without pronouns referring to nothing (no "he/she/it/they" opening). (2) Find mandatory pairs — consecutive sentences linked by a pronoun or a conjunction ("however", "therefore", "moreover"). (3) Find the closer — conclusion, summary, or consequence. Most Tier 2 parajumbles have one definite opener and one definite closer — locking two positions gives you a 2-sentence chain to build from.

GEOGRAPHY — HUMAN GEOGRAPHY:
Population density, distribution, migration, urbanisation. India's census basics: conducted every 10 years. Last census 2011 (2021 census postponed). 2011: population 1.21 billion, density 382/sq km, sex ratio 943, literacy 74.04%. Most populous state: UP. Highest density: Bihar. Highest literacy: Kerala. Most urbanised: Goa. Sex ratio leader: Kerala (1084).

QUANT — GEOMETRY: CIRCLES:
Chord properties: perpendicular from centre bisects chord. Angle in semicircle = 90°. Angles in same segment are equal. Angle at centre = 2 × angle at circumference (same arc). Cyclic quadrilateral: opposite angles sum to 180°. Tangent: perpendicular to radius at point of contact. Two tangents from external point are equal in length. Tangent-chord angle = angle in alternate segment (alternate segment theorem).`,
    tasks:[
      WD_ENG('d97','2026-08-10',[
        s('d97-e1','Parajumbles — Framework Drill + 10 T2 Level Sets','Framework: Step 1 — identify the topic sentence (no backward reference). Step 2 — find pronoun chains (he/she/it must follow the noun they refer to). Step 3 — find discourse connectors and pair them ("however" follows a contrasting idea, "therefore" follows a cause). Step 4 — eliminate options that violate these links. Attempt 10 parajumble sets (6 sentences each), 3 minutes per set. Target: 8/10.','Parajumble speed tip: read only the first and last sentences of each option. The opener and closer are locked. If option A starts with "Therefore" or "However" — eliminate it. This alone removes 1-2 wrong options without reading the full sequence.',35),
        s('d97-e2','CKT Daily — Number Systems (Binary/Decimal/Hex) 10 min','Binary: base 2 (digits 0,1). Decimal: base 10. Hexadecimal: base 16 (0-9,A-F). Conversions: Decimal to binary (divide by 2, remainders upward). Binary to decimal (powers of 2 from right). 1 byte = 8 bits. 1 KB = 1024 bytes. 1 MB = 1024 KB. 1 GB = 1024 MB. 1 TB = 1024 GB. ASCII: American Standard Code for Information Interchange — assigns numeric codes to characters. Most tested: 1 byte = 8 bits, 1 KB = 1024 bytes.','Most SSC CKT number system question: "How many bits in a byte?" = 8. "What is 1 KB?" = 1024 bytes (NOT 1000 — computers use powers of 2). These two facts appear in almost every exam.',10),
      ]),
      WD_GA('d97','2026-08-10',[
        s('d97-ga1','Indian Census 2011 + Population Geography','Census 2011 key facts: Population = 121.09 crore (1.21 billion). Decadal growth rate = 17.7%. Sex ratio = 943 females per 1000 males (improved from 933 in 2001). Literacy = 74.04% (Male: 82.14%, Female: 65.46%). Population density = 382/sq km. STATES: Most populous = UP. Least populous = Sikkim. Highest density = Bihar (1106/sq km). Lowest density = Arunachal Pradesh. Highest literacy = Kerala (93.91%). Lowest literacy = Bihar. Best sex ratio = Kerala (1084). Worst sex ratio = Haryana (879). Most urbanised = Goa. Largest area = Rajasthan. India = 2nd most populous country (China 1st, India may have overtaken by 2023).','The two most-tested census pairs: (1) Highest literacy = Kerala vs Lowest = Bihar. (2) Highest density = Bihar vs Lowest = Arunachal Pradesh. Note the contrast: Bihar is simultaneously lowest literacy AND highest density — a recurring SSC trick question.',25),
        s('d97-ga2','Current Affairs — Last 2 Weeks Scan','15-minute focused scan. Key categories: PM/President actions, India-world diplomacy, sports results (cricket, Olympics-related), space (ISRO), economic indicators (RBI rate decisions, inflation). Record 20 facts max.',15),
      ]),
      WD_QR('d97','2026-08-10',[
        s('d97-qr1','Geometry Circles — Properties + 20 PYQs (40 min)','Theorems to know cold: (1) Angle in semicircle = 90°. (2) Angles in same segment are equal. (3) Angle at centre = 2× angle at circumference. (4) Opposite angles of cyclic quadrilateral = 180°. (5) Two tangents from external point are equal. (6) Tangent ⊥ radius. (7) Perpendicular from centre to chord bisects the chord. Solve 20 PYQs: 4 angle-in-segment, 4 cyclic quadrilateral, 4 tangent problems, 4 chord-distance problems, 4 mixed.','Circle theorem order of attack in exam: first identify what type of angle/line is given. If tangent is involved → look for 90° angle or equal tangent lengths first. If chord is involved → perpendicular bisector or equal chords. Label what you know before calculating anything.',40),
        s('d97-qr2','CKT Recall — Number Systems (5 min)','How many bits in a byte? What is 1 KB in bytes? What is ASCII? Convert 10 (decimal) to binary. No notes.','5-minute end-of-session recall. Non-negotiable.',5),
      ]),
    ],
  },
  {
    id:'2026-08-11',dayNumber:98,date:'2026-08-11',phase:5,tier:2,weekNumber:15,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 98 — Cloze Test T2 + Fundamental Rights + Trigonometry Height & Distance',
    promptBlock:`OPERATIVE BRIEFING — DAY 98

Tuesday. Cloze test is one of the highest-return English tasks in Paper II — 5-10 blanks, all from one passage, which means reading the passage once gives you all the answers. The key skill: understanding the passage's tone and register, then matching the vocabulary to it.

ENGLISH — CLOZE TEST:
A cloze test is a passage with blanks. Each blank has 4 options. The correct answer: (1) grammatically fits the sentence. (2) semantically fits the surrounding context. (3) matches the passage's register (formal/informal/academic/narrative). Strategy: read the full passage first (30 seconds), identify the tone, then fill blanks. Two options will be grammatically correct — the passage's register eliminates one.

POLITY — FUNDAMENTAL RIGHTS:
Articles 12-35. Part III. Six Fundamental Rights: (1) Right to Equality (Art 14-18). (2) Right to Freedom (Art 19-22). (3) Right Against Exploitation (Art 23-24). (4) Right to Freedom of Religion (Art 25-28). (5) Cultural & Educational Rights (Art 29-30). (6) Right to Constitutional Remedies (Art 32). Note: Right to Property was removed (44th Amendment, 1978) — now a legal right under Art 300A. Art 32 = Dr Ambedkar called it "heart and soul of the Constitution."

QUANT — TRIGONOMETRY: HEIGHT & DISTANCE:
tan θ = opposite/adjacent = height/base. Angle of elevation: looking UP (observer → top of object). Angle of depression: looking DOWN (observer above → base of object). For angle of depression from height h at angle θ: horizontal distance = h/tan θ. Most common setup: two objects, two angles — set up simultaneous equations.`,
    tasks:[
      WD_ENG('d98','2026-08-11',[
        s('d98-e1','Cloze Test T2 — 3 Full Passages (5 Blanks Each)','3 cloze passages of 150-200 words, 5 blanks each. Time: 25 minutes (8 min per passage). Process: (1) Read through once — note key topic and tone (academic, narrative, opinion). (2) Fill the easy blanks first (grammatically restricted). (3) For the 2-3 hard blanks — read the sentences immediately before and after, eliminate options that clash with the tone. Target: 13/15.','Cloze test trap: the "technically correct" word that breaks the register. Example: passage about diplomacy uses "remarked" — options include "screamed", "noted", "remarked", "bellowed". Screamed and bellowed are tonally wrong regardless of grammar. This eliminates 2 options instantly.',25),
        s('d98-e2','CKT Daily — Programming Basics (10 min)','Programming languages: low-level (machine code/assembly — hardware specific), high-level (C, Java, Python — human readable). Compiler: translates entire program at once (C, C++). Interpreter: translates line by line (Python, JavaScript). Algorithm: step-by-step procedure. Flowchart: visual algorithm representation. Variables: named storage. Loop: repeat block (for, while). Condition: if/else. Function: reusable code block. Most tested: compiler vs interpreter difference.',10),
      ]),
      WD_GA('d98','2026-08-11',[
        s('d98-ga1','Fundamental Rights — All 6 + Key Articles','Art 14: Equality before law + equal protection. Art 15: No discrimination (sex, religion, race, caste, place of birth). Art 16: Equality in public employment. Art 17: Abolition of untouchability. Art 18: Abolition of titles (military/academic titles allowed). Art 19: 6 freedoms (speech+expression, assemble peacefully, form associations, move freely, reside anywhere, practise any profession). Art 20: Protection in conviction (no ex post facto, no double jeopardy, no self-incrimination). Art 21: Right to life and personal liberty (most expanded FR through judicial interpretation). Art 21A: Right to Education (added by 86th Amendment 2002, 6-14 years). Art 22: Protection against arrest. Art 23: Prohibition of traffic in human beings. Art 24: No child labour (under 14, hazardous employment). Art 25-28: Freedom of religion. Art 29-30: Cultural/educational rights (minorities). Art 32: Right to move SC for FR enforcement.','Art 21 is the most judicially expanded fundamental right. The SC has read into it: right to livelihood, right to privacy (Puttaswamy case 2017), right to health, right to clean environment, right to speedy trial. Any exam question about "right to privacy" — it is a fundamental right under Art 21 post-2017.',25),
        s('d98-ga2','Science Revision — Physics: Motion and Laws (20 min)','Newton\'s Laws: 1st (inertia — object at rest stays at rest unless acted on), 2nd (F=ma), 3rd (every action has equal+opposite reaction). Motion equations: v=u+at, s=ut+½at², v²=u²+2as. Momentum: p=mv. Conservation of momentum: total momentum before = total momentum after (in isolated system). Velocity vs speed: velocity has direction (vector), speed does not (scalar). Acceleration due to gravity: g=9.8 m/s². Weightlessness: in free fall (astronaut in space — still has mass, no weight because no normal force).','Newton\'s 3rd Law applications tested in SSC: rocket propulsion (gas expelled backward → rocket moves forward), walking (foot pushes ground backward → ground pushes foot forward), swimming (hand pushes water backward → body moves forward). Know all three applications.',20),
      ]),
      WD_QR('d98','2026-08-11',[
        s('d98-qr1','Height & Distance — Setup Method + 20 PYQs (40 min)','Standard setups: (1) Single object: tan(angle of elevation) = height/distance. Find what is asked. (2) Two objects same side: two equations, subtract. (3) Object from two positions: angle changes → two equations. (4) Angle of depression = alternate interior angle (angle of elevation from base). Key values: tan30°=1/√3, tan45°=1, tan60°=√3, sin30°=½, cos60°=½. Solve 20 PYQs: 8 single-object, 6 two-position, 6 mixed.','Height & Distance time saver: for the most common question type (tower at 30°, 60° from two points on same line), the distance between points = height×(√3-1/√3) = height×(2/√3). Draw the diagram before writing any equation — 90% of errors are from misidentifying which angle belongs to which triangle.',40),
        s('d98-qr2','CKT Recall — Compiler vs Interpreter (5 min)','Difference between compiler and interpreter in one sentence. Name one compiled language and one interpreted language. What is an algorithm? No notes.','5-minute recall. End of every session.',5),
      ]),
    ],
  },
  {
    id:'2026-08-12',dayNumber:99,date:'2026-08-12',phase:5,tier:2,weekNumber:15,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 99 — Error Spotting T2 + Economic Concepts + Coordinate Geometry',
    promptBlock:`OPERATIVE BRIEFING — DAY 99

Wednesday. Day 99 — one day from the triple-digit milestone. Error Spotting in Tier 2 is phrase-level: the error is rarely at the word level alone. It's a clause, a phrase, or a subject-verb agreement failure hidden inside a long sentence. Today's approach: clause-by-clause dissection.

ENGLISH — ERROR SPOTTING:
Tier 2 error spotting tests: (1) Subject-verb agreement with collective nouns and indefinite pronouns ("everyone is" not "everyone are", "the committee has" not "the committee have"). (2) Incorrect tense in conditional sentences ("If I were" not "If I was"). (3) Preposition errors ("discuss the matter" not "discuss about the matter"). (4) Article errors ("a historical" not "an historical" — 'h' is pronounced). (5) Comparative errors ("more preferable" is wrong — "preferable" already is comparative).

ECONOMY — BASIC CONCEPTS:
GDP (Gross Domestic Product): total value of all goods and services produced within a country's borders in a year. GDP vs GNP: GNP = GDP + income from abroad - income paid to foreigners. Inflation: sustained rise in price level. CPI (Consumer Price Index) vs WPI (Wholesale Price Index). RBI: central bank, controls monetary policy, repo rate (rate at which banks borrow from RBI), reverse repo (rate at which banks park with RBI). SEBI: stock market regulator.

QUANT — COORDINATE GEOMETRY:
Distance formula: d = √[(x2-x1)²+(y2-y1)²]. Midpoint: ((x1+x2)/2, (y1+y2)/2). Section formula (internal): ((mx2+nx1)/(m+n), (my2+ny1)/(m+n)). Slope: m = (y2-y1)/(x2-x1). Line: y=mx+c. Parallel lines: same slope. Perpendicular lines: product of slopes = -1. Area of triangle with vertices: ½|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|.`,
    tasks:[
      WD_ENG('d99','2026-08-12',[
        s('d99-e1','Error Spotting T2 — 20 Questions Clause-by-Clause','20 error spotting questions. Method: split each sentence at conjunctions and commas into clauses. Test each clause independently: (a) subject-verb agreement correct? (b) tense consistent with context? (c) preposition used after verb correct? (d) article before vowel sound or consonant sound? (e) comparative/superlative formed correctly? Mark the part (A/B/C/D/No Error). Target: 17/20 — this should be your most reliable Tier 2 section.','Error spotting shortcut for SVA: the actual subject is never the noun immediately before the verb if there is a prepositional phrase between them. "The quality of the goods IS poor" — subject is "quality" (singular), not "goods". Prepositional phrase (of the goods) does not change the verb.',30),
        s('d99-e2','CKT Daily — Operating Systems (10 min)','OS functions: manages hardware+software resources, provides interface between user and hardware. Types: Single-user/Single-tasking (MS-DOS), Single-user/Multi-tasking (Windows), Multi-user (Unix, Linux). Process: program in execution. Multitasking: multiple processes seemingly simultaneously. Kernel: core of OS. Shell: interface between user and kernel. File systems: FAT32 (Windows old), NTFS (Windows new), ext4 (Linux). Boot: loading OS from disk into RAM. BIOS: Basic I/O System — first software to run at startup.',10),
      ]),
      WD_GA('d99','2026-08-12',[
        s('d99-ga1','Indian Economy — GDP, Inflation, RBI, SEBI','GDP = sum of (C + I + G + NX): Consumption + Investment + Government spending + Net exports. India GDP calculation: both market prices and factor cost. GDP at Factor Cost = GDP at Market Price - Net Indirect Taxes. GVA (Gross Value Added) replaced GDP at factor cost since 2015 in India\'s new base year (2011-12). Inflation: WPI (wholesale, RBI used to target) vs CPI (consumer, RBI now targets — 4% ±2% band). Repo rate: rate at which commercial banks borrow from RBI (lowering = cheap money = growth stimulus). Reverse repo: rate at which banks park excess funds with RBI. CRR (Cash Reserve Ratio): % of deposits banks must keep with RBI (no interest). SLR (Statutory Liquidity Ratio): % banks must keep in liquid assets.','Most-tested RBI rate question: "What is the bank rate?" — The bank rate is the rate at which RBI lends to banks for long-term borrowing (unlike repo which is short-term). In practice, repo rate is the main policy rate. Know: repo > reverse repo always (otherwise banks would arbitrage).',25),
        s('d99-ga2','Current Affairs Rapid-Fire + Independence Day Preview','15 min: current affairs scan. Plus 10 min: Independence Day preparation for Aug 15 — key facts: 1st Independence Day Aug 15, 1947. Lord Mountbatten (last Viceroy) transferred power. Nehru gave "Tryst with Destiny" speech. National Flag adopted July 22, 1947. Jan Gan Man adopted Jan 24, 1950. Vande Mataram: national song (not anthem). First President Dr Rajendra Prasad (elected Jan 26, 1950, took charge Jan 26, 1950).',20),
      ]),
      WD_QR('d99','2026-08-12',[
        s('d99-qr1','Coordinate Geometry — All Formulas + 20 PYQs (40 min)','Practice in sequence: Distance formula (5 Qs), Midpoint (3 Qs), Section formula (4 Qs), Slope and line equation (4 Qs), Area of triangle (4 Qs). Common Tier 2 type: "find the point that divides the line joining A(1,3) and B(5,7) in ratio 3:1 internally" → section formula. Time: 40 minutes. Target: 16/20.','Coordinate geometry sign error trap: in the section formula ((mx2+nx1)/(m+n)), make sure you substitute x2 with the second point and x1 with the first. Switching them gives the wrong division point. Always label your points A(x1,y1) and B(x2,y2) before substituting.',40),
        s('d99-qr2','CKT Recall — OS Types + Functions (5 min)','What does an OS do? Name 2 multi-user OS. Difference between kernel and shell. What is BIOS? No notes.','5-minute end-of-session recall.',5),
      ]),
    ],
  },
  {
    id:'2026-08-13',dayNumber:100,date:'2026-08-13',phase:5,tier:2,weekNumber:15,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 100 — Day 100! Idioms & Phrases + Modern History + Trigonometry Identities',
    promptBlock:`OPERATIVE BRIEFING — DAY 100

DAY 100. One hundred days of consistent preparation. This is not a rest day — this is a proof-of-concept day. The SSC CGL 2026 exam will be written by the candidate who showed up on Day 100 the same way they showed up on Day 1. You are that candidate.

ENGLISH — IDIOMS AND PHRASES:
Idioms are the most predictable English question type in Tier 2 — the SSC draws from the same pool of approximately 150 idioms repeatedly. Today covers the 40 highest-frequency idioms from the last 5 years of Tier 2 papers. Learning strategy: group by theme (animal idioms, body idioms, colour idioms, weather idioms) — thematic clusters are easier to retain than random lists.

HISTORY — MODERN INDIA: REVOLT OF 1857 TO PARTITION:
1857 Revolt: first war of independence or sepoy mutiny? Officially called First War of Independence by VD Savarkar, sepoy mutiny by British. Mangal Pandey: first soldier to rebel (Barrackpore). Centres: Meerut (first outbreak), Delhi, Kanpur (Nana Sahib), Jhansi (Rani Lakshmibai), Lucknow (Begum Hazrat Mahal). Result: end of East India Company rule, direct Crown control (1858).

QUANT — TRIGONOMETRY IDENTITIES:
sin²θ + cos²θ = 1. 1 + tan²θ = sec²θ. 1 + cot²θ = cosec²θ. Derived: sin²θ = 1 - cos²θ, tan²θ = sec²θ - 1, cot²θ = cosec²θ - 1. These three identities and their six derivatives are the entire algebraic trigonometry syllabus. All Tier 2 identity questions are solved by substituting these.`,
    tasks:[
      WD_ENG('d100','2026-08-13',[
        s('d100-e1','Idioms & Phrases — 40 High-Frequency T2 Idioms','ANIMAL: let the cat out of the bag (reveal secret), beat around the bush (avoid topic), a wolf in sheep\'s clothing (dangerous disguised as harmless), barking up the wrong tree (wrong approach), the last straw (final provocation). BODY: bite the bullet (endure pain), cost an arm and a leg (very expensive), keep an eye on (watch carefully), put your foot in your mouth (say something embarrassing), turn a blind eye (ignore deliberately). COLOUR: out of the blue (unexpectedly), green with envy (jealous), once in a blue moon (rarely), red tape (bureaucratic delay), grey area (uncertain situation). WEATHER/NATURE: a drop in the ocean (tiny contribution), burn bridges (destroy relationships), come rain or shine (regardless of circumstances), on thin ice (in risky situation), under the weather (unwell). MONEY/TIME: burn the midnight oil (work late), bite off more than you can chew (take on too much), a blessing in disguise (hidden advantage), the ball is in your court (your decision now), time is money.','Idiom exam strategy: eliminate options based on what the IDIOM means as a WHOLE, not individual words. "Bite the bullet" has nothing to do with teeth or bullets — it means endure pain stoically. Never translate idioms word-by-word.',30),
        s('d100-e2','CKT Daily — Networking Concepts (10 min)','LAN (Local Area Network): limited area (office, home). WAN (Wide Area Network): large area (country, internet). MAN (Metropolitan Area Network): city-scale. Network devices: router (connects networks, directs traffic), switch (connects devices within network), hub (broadcasts to all — old), modem (modulates/demodulates signal for internet). IP address: unique numeric address for each device. IPv4: 32-bit (e.g. 192.168.1.1). IPv6: 128-bit. MAC address: hardware address of network card (permanent). DNS: Domain Name System — translates domain names to IP addresses.',10),
      ]),
      WD_GA('d100','2026-08-13',[
        s('d100-ga1','Modern History — 1857 to Independence (Key Events Only)','1857 Revolt: Company → Crown rule (1858, Queen Victoria\'s Proclamation). Indian National Congress founded: 1885 (AO Hume, Dadabhai Naoroji, DinshawWacha). Partition of Bengal: 1905 (Curzon), annulled 1911. Home Rule Movement: 1916 (Tilak + Besant). Lucknow Pact: 1916 (INC + Muslim League). Rowlatt Act: 1919 (no appeal, no lawyer). Jallianwala Bagh: Apr 13 1919 (Dyer ordered firing). Non-Cooperation Movement: 1920-22 (Gandhi). Chauri Chaura: Feb 1922 (Gandhi withdrew movement). Simon Commission: 1927 (no Indian member, boycotted — "Simon Go Back"). Civil Disobedience: 1930 (Dandi March, Mar 12 - Apr 5). Round Table Conferences: 1930, 1931, 1932. Quit India: Aug 8 1942 ("Do or Die"). INA: Subhas Chandra Bose, Azad Hind Fauj. Independence: Aug 15 1947. Partition: India + Pakistan.','The most-tested sequence: 1919 (Rowlatt Act + Jallianwala Bagh) → 1920 (Non-Cooperation) → 1922 (Chauri Chaura withdrawal) → 1930 (Civil Disobedience + Dandi March) → 1942 (Quit India). This five-point sequence covers 60% of modern history MCQs in Tier 2.',25),
        s('d100-ga2','Day 100 GA Mega Rapid-Fire — All Subjects (20 min)','Self-test: 40 questions across all topics covered in Weeks 13-15. Cover Polity (FRs, SC), History (1857, post-47), Geography (census, monsoon, agriculture), Science (organic chem, Newton, acids/bases), Economy (GDP, RBI rates). No notes. Mark wrong answers for revision. This is your Phase 5 mid-point diagnostic.',20),
      ]),
      WD_QR('d100','2026-08-13',[
        s('d100-qr1','Trigonometry Identities — Deep Practice + 20 PYQs (40 min)','Identity mastery drill: Write all 3 base identities + 6 derived forms from memory (5 min). Then 20 PYQs: 8 simplification (substitute identity to reduce expression), 6 proving (LHS = RHS using identities), 6 value-finding (given sinθ, find cos/tan/sec etc). Common Tier 2 type: "if sinθ + cosθ = √2, find sinθ·cosθ" → square both sides → 1 + 2sinθcosθ = 2 → sinθcosθ = ½.','Identity simplification secret: whenever you see sin²θ + cos²θ anywhere in the expression — it equals 1. Replace immediately. This single substitution solves 40% of identity questions without any other work.',40),
        s('d100-qr2','Day 100 Milestone Reflection — 5 Minutes','Write 3 things: (1) Your strongest subject today vs Day 1. (2) Your biggest improvement area. (3) One specific thing you will do differently in the last 20 days. This is not journaling — it is calibration. 5 minutes maximum.','100 days in. The exam is on the horizon. The candidates who make it are not the ones who started strongest — they are the ones who kept showing up.',5),
      ]),
    ],
  },
  {
    id:'2026-08-14',dayNumber:101,date:'2026-08-14',phase:5,tier:2,weekNumber:15,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 101 — Synonyms/Antonyms Sprint + Freedom Movement GA + Algebra Mixed + Week Audit',
    promptBlock:`OPERATIVE BRIEFING — DAY 101

Friday. Independence Day eve. Tomorrow (Aug 15) is India's Independence Day — your study session will be shortened but the GA content is high-yield. Today: maximize vocabulary and GA readiness so that Aug 15's reduced session reinforces rather than introduces.

ENGLISH — SYNONYMS AND ANTONYMS:
Syn/Ant is the most mechanical Tier 2 English task — it is pure vocabulary recall with zero reading required. 20-24 questions in Paper II are Syn/Ant. At 30 seconds each, this section takes 10-12 minutes and should yield 18+/24 marks for any prepared candidate. Today's sprint: 60 words (30 pairs).

FREEDOM MOVEMENT — INDEPENDENCE DAY SPECIAL GA:
Tomorrow is Aug 15. Every SSC exam conducted after Independence Day has at least 1-2 questions directly referencing the date, the event, or key figures. The Constituent Assembly, the Tryst with Destiny speech, Lord Mountbatten, Nehru's first speech — these are exam fodder whenever the exam is near Independence Day.

QUANT — ALGEBRA MIXED REVISION:
Week 15's quant audit day. Cover: linear equations, quadratic equations, polynomials, algebraic identities, and coordinate geometry in a 40-minute mixed sprint. This consolidates all algebra from Phase 5 before the weekend mocks.`,
    tasks:[
      WD_ENG('d101','2026-08-14',[
        s('d101-e1','Synonyms + Antonyms — 60 Words Sprint (35 min)','30 synonym pairs + 30 antonym pairs. Focus on high-frequency Tier 2 words: SYNONYMS: Aberrant=deviant, Acrimony=bitterness, Adroit=skilful, Ambiguous=unclear, Ameliorate=improve, Audacious=bold, Benevolent=kind, Brazen=shameless, Brevity=conciseness, Capricious=unpredictable, Cogent=convincing, Convoluted=complicated, Cryptic=mysterious, Daunt=discourage, Debilitate=weaken, Enervate=drain energy, Ephemeral=short-lived, Exacerbate=worsen, Fastidious=fussy, Garrulous=talkative, Impetuous=rash, Insolent=rude, Lethargic=sluggish, Lucid=clear, Magnanimous=generous, Mendacious=lying, Mollify=calm, Nefarious=wicked, Obscure=unclear, Pedantic=overly academic. ANTONYMS of same words.','Speed test yourself: cover the answer column, read the word, say the synonym/antonym aloud. Any word that takes more than 3 seconds goes on your "Final 30" emergency list. At this stage, you should be building that final list, not starting fresh.',35),
        s('d101-e2','Week 15 English Audit (10 min)','Self-test without notes: Parajumbles — what is the first thing you identify? Cloze — what is your reading strategy? Error Spotting — what is the SVA trap with prepositional phrases? Idioms — name 5 animal idioms. This audit confirms your English framework is internalised, not just known.',10),
      ]),
      WD_GA('d101','2026-08-14',[
        s('d101-ga1','Independence Day Special — Freedom Movement Consolidation','Key Viceroy sequence: Dalhousie (Doctrine of Lapse, railways, telegraphs), Curzon (partition of Bengal 1905), Minto (Morley-Minto Reforms 1909 — communal representation), Chelmsford (Rowlatt Act 1919, Montagu-Chelmsford Reforms), Reading (Chauri Chaura, non-cooperation withdrawal), Irwin (Dandi March — Gandhi-Irwin Pact 1931), Linlithgow (Quit India 1942), Wavell (Simla Conference 1945, Cabinet Mission 1946), Mountbatten (last Viceroy, Independence 1947, Partition). Independence Day facts: India became independent Aug 15 1947. India declared Republic Jan 26 1950. Jawaharlal Nehru = first PM. "Tryst with Destiny" speech delivered in Constituent Assembly, night of Aug 14-15 1947. Lord Mountbatten presided over the transfer of power ceremony at Red Fort.','Viceroy test trick: match the reform/event to the Viceroy, not just the year. "Who was Viceroy during the Quit India Movement?" = Lord Linlithgow (not Wavell — common confusion because Wavell came after). "Who was the last Viceroy of India?" = Mountbatten. "Who was the first Governor-General of free India?" = Mountbatten (he stayed on briefly).',25),
        s('d101-ga2','Mixed GA Rapid-Fire + Week 15 Audit (20 min)','20 questions: 5 Polity, 5 History, 5 Geography/Economy, 5 Science. Mark wrong answers. Identify your weakest GA category this week. That category gets priority in Sunday\'s deep study. Write it down before you close the session.',20),
      ]),
      WD_QR('d101','2026-08-14',[
        s('d101-qr1','Algebra Mixed Sprint — 20 Questions All Types (35 min)','20 questions covering: Linear equations (3), Quadratic (4), Polynomial Remainder/Factor (3), Algebraic identities (4), Coordinate Geometry (4), Word-based algebra (2). Time: 30 minutes. Target: 16+/20. Any question taking more than 90 seconds — skip and return.','Algebra word problem setup: always write the equation first, then solve. Students who calculate in their head lose signs and make arithmetic errors. One written equation takes 10 seconds. It saves 2 minutes of recalculation.',35),
        s('d101-qr2','Week 15 Quant Audit — Identify Weakest for Sunday (10 min)','Rate confidence (1-5): Circles, Height & Distance, Coordinate Geometry, Trig Identities, Algebra Mixed. Your lowest-rated topic becomes Sunday\'s deep study priority. If two are tied, choose the one with higher exam mark weightage (Height & Distance: 2-3 Qs in Tier 2; Trig Identities: 3-4 Qs).',10),
      ]),
    ],
  },
  {
    id:'2026-08-15',dayNumber:102,date:'2026-08-15',phase:5,tier:2,weekNumber:15,
    weekType:'weekend',totalHours:4,hasQuiz:false,
    title:'Day 102 — Independence Day: Reduced Session — Freedom Movement Deep GA + Paper I Half-Mock',
    promptBlock:`OPERATIVE BRIEFING — DAY 102 — INDEPENDENCE DAY

August 15, 2026. India's 79th Independence Day. Today's session is reduced to 4 hours out of respect for the national holiday — but it is not a rest day. The freedom movement that brought this day is one of the most-tested GA topics in SSC CGL. You will study it today with the intensity it deserves.

"At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom." — Jawaharlal Nehru, August 14-15, 1947.

Today is not just history. It is context. Every question the SSC asks about India's independence movement, you are answering as a citizen of the country that was won.

REDUCED SCHEDULE (4 Hours):
1. Freedom Movement Deep Revision: 90 minutes — comprehensive coverage of all major events, organizations, leaders, and reforms.
2. Paper I Half-Mock: 90 minutes — 50 questions (half paper), strict time.
3. Mock Analysis: 30 minutes.
4. DEST + English RC: 30 minutes.`,
    tasks:[
      WE_MT('d102',[
        s('d102-mt1','Paper I Half-Mock — 50 Questions, 67 Minutes','50 questions from Paper I. Cover: Arithmetic (12-15), Algebra (8-10), Geometry (6-8), Trigonometry (4-5), DI (2 sets = 10), Statistics (2-3). Strict time. No checking during the attempt.','Half-mock maintains exam rhythm without the full 2-hour commitment. The 67-minute limit is proportional to the full 135-minute paper. Maintain the same urgency.',67),
        s('d102-mt2','Quick Score + Priority Error Analysis (20 min)','Score and identify category errors. Focus on: concept gap errors only — note the formula/rule missed. Flag for Sunday\'s deep study review.',20),
      ]),
      WE_DS('d102',[
        s('d102-ds1','Freedom Movement — Comprehensive Deep Revision (90 min)','Timeline: 1885 (INC founded) → 1905 (Bengal Partition) → 1906 (Muslim League founded) → 1907 (Surat Split — moderates vs extremists: Gopal Krishna Gokhale=moderate, Bal Gangadhar Tilak=extremist) → 1909 (Morley-Minto Reforms — separate electorate) → 1919 (Rowlatt Act + Jallianwala Bagh + Montagu-Chelmsford Reforms / Dyarchy) → 1920-22 (Non-Cooperation Movement) → 1922 (Chauri Chaura withdrawal) → 1923 (Swaraj Party formed — CR Das + Motilal Nehru) → 1927 (Simon Commission, all British, boycotted) → 1929 (Lahore Session, Purna Swaraj declared, Dec 31) → 1930 (Civil Disobedience + Dandi March Mar 12, Salt Law broken Apr 6) → 1931 (Gandhi-Irwin Pact, Gandhi attends 2nd RTC) → 1932 (Communal Award + Poona Pact — Ambedkar + Gandhi) → 1935 (GOI Act — provincial autonomy, federal structure) → 1942 (Quit India — Aug 8, "Do or Die") → 1943-45 (INA — Subhas Chandra Bose, Singapore) → 1946 (Cabinet Mission Plan — 3-tier federation) → Aug 15 1947 (Independence + Partition into India + Pakistan). Key organisations: INC (1885), Muslim League (1906), Hindu Mahasabha (1915), RSS (1925). Important women: Sarojini Naidu (Nightingale of India), Kasturba Gandhi, Rani Lakshmibai, Begum Hazrat Mahal, Annie Besant.','The Poona Pact (1932) is a high-frequency question: Gandhi was on fast unto death against MacDonald\'s Communal Award which gave separate electorates to Depressed Classes. Ambedkar and Gandhi negotiated — separate electorate dropped, but reserved seats in general electorate increased (from 71 to 148). Ambedkar accepted, Gandhi ended fast.',90),
      ]),
      WE_REV('d102',[
        s('d102-rev1','DEST Session — 20 Minutes','Full DEST simulation: 15 minutes typing, 5 minutes analysis. Record WPM and accuracy. Target: ≥35 WPM, ≤5% error.','Independence Day DEST motivation: you are typing your way into a government job in the country whose independence you just studied. Keep that in mind.',20),
        s('d102-rev2','English RC — 1 Passage (Patriotism/History Theme)','One RC passage on a historical/political theme (find one from old Tier 2 papers on Indian independence or nationalism). This maintains English engagement on a reduced day while being topically appropriate.',15),
      ]),
    ],
  },
  {
    id:'2026-08-16',dayNumber:103,date:'2026-08-16',phase:5,tier:2,weekNumber:15,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 103 — Full Paper II Mock + Deep Study: Trigonometry + Circles + Freedom Movement GA',
    promptBlock:`OPERATIVE BRIEFING — DAY 103

Sunday. Week 15's final day. Paper II mock — 200 questions, 135 minutes. The deep study priorities come from two days of audit data: your weakest Quant topic from Friday's audit and your weakest GA area from this week. The freedom movement deep dive from yesterday supplements today's GA confidence.

PAPER II EXECUTION:
By Week 15, your Paper II attack order should be automatic. Execute without deliberating the sequence. The exam is eight weeks away. The candidates who score 175+ in Paper II are not smarter — they have automated their approach to the point where no question surprises them. Today is one more repetition of that automation.

WEEK 15 CLOSE-OUT:
Week 15 covered: Parajumbles, Cloze, Error Spotting, Idioms, Syn/Ant — all five major English grammar/vocab categories in one week. Geometry Circles, Height & Distance, Coordinate Geometry, Trig Identities — four Quant topics. Independence Day GA coverage: freedom movement comprehensive. This week is the widest-coverage week of Phase 5.`,
    tasks:[
      WE_MT('d103',[
        s('d103-mt1','Full Paper II Mock — 200 Questions, 135 Minutes','Complete Paper II under strict exam conditions. Attack order: Vocabulary (Syn/Ant/OWS/Idioms) → Grammar (Error Spotting, Sentence Improvement, Voice/Narration) → Cloze/FIB → Parajumbles → RC. Bank time from vocabulary for RC.','If you do not know a vocabulary word — spend maximum 10 seconds, mark your best guess, move on. Never stare at a word hoping it comes to you. It will not. Your time is worth more on the next question.',135),
        s('d103-mt2','Full Score + Section Analysis + Error Categorisation','Score by section. Compare to last week\'s Paper II score. Which section improved? Which regressed? What is your current estimated Paper II score? Write it down. This number should be going up each week.',20),
      ]),
      WE_DS('d103',[
        s('d103-ds1','Trigonometry Identities Deep Drill — 30 Questions (60 min)','Focus on the identity types you missed in this week\'s sessions and the Friday audit. 30 questions: 10 simplification, 10 value-finding (given one trig ratio, find others), 10 proving. If the audit showed Height & Distance as weakness instead — swap these 30 questions to H&D problems. Follow the audit data, not the pre-set plan.',60),
        s('d103-ds2','Geometry Circles + Coordinate Geometry Integration (60 min)','30 mixed questions: 15 Circle theorems (prioritise cyclic quadrilateral and alternate segment theorem — these are the most-dropped marks), 15 Coordinate Geometry (prioritise section formula and area of triangle). These two topics together appear 5-6 times in a Tier 2 paper.',60),
        s('d103-ds3','Freedom Movement Rapid Recall + MCQ Drill (60 min)','From yesterday\'s deep revision: 30 MCQs on freedom movement. Cover: Acts and reforms (who, what, when), organisations (founded by whom, when), key figures (which movement they led), key years and events. Any question answered incorrectly → review that fact immediately before moving to next question.',60),
        s('d103-ds4','Paper II Mock Error Dive — English Concept Gaps (45 min)','From today\'s Paper II mock: take all concept-gap (G) errors in English. Re-attempt each. For every idiom or vocabulary question wrong — add the word/phrase to your Final 30 emergency list. For every grammar rule wrong — write the rule and one example.',45),
      ]),
      WE_REV('d103',[
        s('d103-rev1','DEST Session — Full 15-Minute Typing Test','Full DEST: 15 min typing, 5 min analysis. Calculate WPM. If ≥35 WPM: hold and push for 38. If <35: focus session next week on slow passages, build up.','DEST target: 35 WPM at ≤5% error by exam week. Consistent daily 15-minute sessions are more effective than occasional long sessions.',20),
        s('d103-rev2','Week 15 Review + Week 16 Preview','Week 15 done. Write: strongest topic, weakest topic, one habit to carry into Week 16. Week 16 (Aug 17-23) is the final pre-exam acceleration week before the terminal revision phase starts in Week 17. It covers: Reading Comprehension advanced, Sentence Completion, Word in Context — all high-weight Paper II topics.',25),
      ]),
    ],
  },
];
