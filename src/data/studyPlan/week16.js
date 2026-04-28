// Week 16 — Aug 17 (Mon) to Aug 23 (Sun) — Phase 5: Final Acceleration | Days 104-110
const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'Mock Analysis + DEST (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-08-17',dayNumber:104,date:'2026-08-17',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 104 — RC Advanced: Tone & Inference + Economy 1991 Reforms + Speed-Distance-Time',
    promptBlock:`OPERATIVE BRIEFING — DAY 104

Week 16. The last full week of Phase 5. After this week, the plan shifts to terminal revision and mock-intensive mode. Every topic you touch this week must arrive at exam-ready accuracy. No new learning after Week 16 — only reinforcement.

ENGLISH — RC ADVANCED: TONE AND INFERENCE:
Two RC skill levels: literal (what the passage states directly) and inferential (what must be true given what the passage states). Tone questions test: does the author approve, disapprove, analyse neutrally, or satirise? Tone clues: adjectives (words like "deplorable, alarming" = critical; "commendable, remarkable" = approving), adverbs ("clearly, obviously" = assertive; "perhaps, seemingly" = cautious), rhetorical questions (always signal an opinion, not neutrality).

ECONOMY — 1991 REFORMS + LIBERALISATION:
India's 1991 economic crisis: foreign exchange reserves depleted (2 weeks of imports), balance of payments crisis. PV Narasimha Rao (PM) + Dr Manmohan Singh (FM) introduced LPG — Liberalisation (remove license raj), Privatisation (reduce govt role in industry), Globalisation (open to foreign trade/investment). Dismantling of Licence Raj (Rajiv Gandhi started, 1991 completed). WTO: India a founding member (1995). Key reforms: industrial delicensing, foreign investment allowed, rupee made partially convertible.

QUANT — SPEED, DISTANCE, TIME ADVANCED:
Distance = Speed × Time. Relative speed: same direction = difference of speeds; opposite direction = sum of speeds. Trains: (1) crossing a pole/person → distance = train length. (2) crossing each other → distance = sum of lengths. (3) crossing platform → distance = train length + platform length. Boats and streams: downstream speed = boat speed + stream speed; upstream = boat speed - stream speed. Average speed for equal distances: 2uv/(u+v).`,
    tasks:[
      WD_ENG('d104','2026-08-17',[
        s('d104-e1','RC Advanced — Tone + Inference Drill (3 Passages)','3 passages specifically designed to test tone and inference: one critical-analytical, one narrative-approving, one neutral-informative. For each: (1) Read and label the author\'s tone before answering. (2) For inference questions — find the specific line that supports the inference, eliminate options that go beyond it. (3) For tone questions — count charged words (positive vs negative adjectives). The side with more charged words determines tone. Target: 14/15.','Inference trap: the option that sounds like a reasonable conclusion from common sense but is NOT directly supported by the text. SSC rewards conservative, text-anchored inferences. If you cannot point to a specific line, eliminate it.',30),
        s('d104-e2','CKT Daily — Internet Protocols and Security (10 min)','HTTP (Hypertext Transfer Protocol): transfers web pages. HTTPS: secure version (SSL/TLS encrypted). FTP: File Transfer Protocol (file uploads/downloads). SMTP: email sending. POP3/IMAP: email receiving. URL: Uniform Resource Locator (web address). IP: Internet Protocol. TCP/IP: foundational internet communication protocol. Firewall: blocks unauthorised traffic. SSL/TLS: encryption for secure connections. Cookies: small data stored by browser (session tracking). Cache: temporary storage for faster loading.',10),
      ]),
      WD_GA('d104','2026-08-17',[
        s('d104-ga1','1991 Economic Reforms + LPG + WTO','Pre-1991: Licence Raj (every business needed government licence), high import tariffs, PSU dominance, closed economy. Crisis 1991: foreign exchange = $1.2 billion (2 weeks of imports), gold pledged to Bank of England. Reform package: (1) Liberalisation — remove licences, deregulate industry, allow foreign investment. (2) Privatisation — disinvestment in PSUs, reduce government monopoly. (3) Globalisation — open trade, reduce import tariffs, join WTO. New Economic Policy 1991 = PV Narasimha Rao + Dr Manmohan Singh. SEBI given statutory status 1992. Rupee convertible on current account 1994. India GDP growth: 5-6% pre-1991 → averaged 7-8% post-2000.','Most tested 1991 reform fact: Dr Manmohan Singh was Finance Minister (not PM) in 1991. He became PM in 2004. PV Narasimha Rao was PM in 1991. This confusion appears in options. Also: "Who is called the Father of Indian Economic Reforms?" = Dr Manmohan Singh.',25),
        s('d104-ga2','Current Affairs Scan + Economy Headlines (20 min)','15 min: current affairs (appointments, economic news, India-world). 5 min: any recent RBI rate decision, budget highlights, or economic indicator changes (GDP, inflation). CA economy questions appear in clusters in Tier 2.',20),
      ]),
      WD_QR('d104','2026-08-17',[
        s('d104-qr1','Speed Distance Time Advanced — 20 PYQs (40 min)','Train problems: (1) Crosses a stationary object (pole/person): time = train length / train speed. (2) Two trains opposite direction: time = (L1+L2)/(S1+S2). (3) Same direction: time = (L1+L2)/(S1-S2). (4) Crosses platform: time = (train length + platform length) / speed. Boats: if boat speed = b, stream = s; downstream = b+s, upstream = b-s; speed in still water = (downstream+upstream)/2; stream speed = (downstream-upstream)/2. Average speed (equal distances at u and v): 2uv/(u+v). Solve 20 PYQs: 8 trains, 6 boats, 4 average speed, 2 relative speed word problems.','Average speed trap: "A travels from X to Y at 40 kmph and returns at 60 kmph, find average speed." Wrong answer: (40+60)/2 = 50. Right answer: 2×40×60/(40+60) = 4800/100 = 48 kmph. The arithmetic mean of speeds is NEVER the correct average speed for equal distances. Always use the harmonic mean formula.',40),
        s('d104-qr2','CKT Recall — Internet Protocols (5 min)','State: what HTTP does, what HTTPS adds, what FTP does, what SMTP does. Difference between POP3 and IMAP. What does SSL stand for? No notes.',5),
      ]),
    ],
  },
  {
    id:'2026-08-18',dayNumber:105,date:'2026-08-18',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 105 — Word in Context + Environment & Ecology + Partnership Problems',
    promptBlock:`OPERATIVE BRIEFING — DAY 105

Tuesday. Word in Context is the Tier 2 question type that appears inside RC passages — the question asks for the meaning of a highlighted word AS USED IN THE PASSAGE, not its general dictionary meaning. The trap is always the most common meaning of the word, which is never the correct answer when used in an unusual context.

ENGLISH — WORD IN CONTEXT:
Strategy: (1) Read the sentence containing the highlighted word. (2) Read one sentence before and one after for context. (3) Substitute each option into the sentence and ask: does the meaning of the sentence stay intact? (4) The correct answer is the one that preserves the sentence meaning best. The wrong answer is almost always the most common dictionary definition of the word.

ENVIRONMENT — ECOLOGY AND BIODIVERSITY:
Biodiversity hotspots in India: Western Ghats + Sri Lanka (hotspot), Indo-Burma (northeast India), Himalaya (includes northeast). India has 4 of the 36 global biodiversity hotspots. Tiger reserves: Project Tiger 1973 (Indira Gandhi), currently 53 tiger reserves. Biosphere reserves: 18 in India (UNESCO recognised: Nilgiri, Sundarbans, Gulf of Mannar, Nanda Devi, Nokrek, Pachmarhi, Simlipal, Achanakmar-Amarkantak, Great Nicobar, Agasthyamalai, Khangchendzonga, Manas, Dibru-Saikhowa, Dehang-Debang, Seshachalam, Panna, Cold Desert, Kachchh).

QUANT — PARTNERSHIP:
Partnership: profit/loss split in ratio of capital × time. If A invests P1 for t1 months and B invests P2 for t2 months: ratio of profit = P1×t1 : P2×t2. Sleeping partner (investor only) vs active partner (investor + manager — may get additional salary from profit before splitting). Simple partnership: capital same duration, split = capital ratio. Compound partnership: different durations, split = capital×time ratio.`,
    tasks:[
      WD_ENG('d105','2026-08-18',[
        s('d105-e1','Word in Context — 20 Questions from RC Passages','20 word-in-context questions from actual RC passage extracts. For each: read the sentence + one sentence before + one after. Substitute each option. Eliminate options that change the meaning or sound grammatically wrong in context. Target: 17/20. Common word types tested: polysemous words (multiple meanings), words used metaphorically, technical words used in general contexts.','Most common word-in-context trap: the word "temper" in a sentence about steel manufacturing. Students choose "anger" (most common meaning) when the passage means "hardness" or "treatment". Always read the context before deciding the meaning.',30),
        s('d105-e2','CKT Daily — Computer Memory and Storage (10 min)','RAM (Random Access Memory): volatile (loses data when power off), fast, expensive. ROM (Read Only Memory): non-volatile, stores BIOS/firmware. Cache memory: fastest, smallest, between CPU and RAM. Primary storage: RAM + ROM (directly accessed by CPU). Secondary storage: HDD (magnetic, mechanical, slow), SSD (flash memory, no moving parts, faster), CD/DVD (optical), USB flash drive. Cloud storage: Google Drive, Dropbox (remote servers). Difference: primary storage = current working data; secondary = permanent storage.',10),
      ]),
      WD_GA('d105','2026-08-18',[
        s('d105-ga1','Environment — Biodiversity, National Parks, Pollution','Biodiversity hotspots India: Western Ghats (endemic species: lion-tailed macaque, Malabar giant squirrel), Eastern Himalayas/Indo-Burma (red panda, snow leopard), Sundaland (Andaman & Nicobar region). Wildlife Protection Act: 1972 (most important wildlife law in India). Project Tiger: 1973 (first reserve: Jim Corbett, Uttarakhand). Project Elephant: 1992. Project Snow Leopard: 2009. Ramsar sites (wetlands): India has 75+ Ramsar sites (as of 2023). Key: Chilika Lake (Odisha, largest coastal lagoon in India, first Ramsar site 1981). Pollution: point source (identifiable, e.g., factory) vs non-point source (diffuse, e.g., agricultural runoff). BOD (Biochemical Oxygen Demand): measure of water pollution (high BOD = more pollution). Ozone layer: depleted by CFCs (chlorofluorocarbons). Montreal Protocol: 1987 (CFC phase-out). Kyoto Protocol: 1997 (CO2 reduction). Paris Agreement: 2015 (1.5°C target).','Most tested environment fact cluster: (1) First Ramsar site in India = Chilika Lake (1981). (2) First national park = Jim Corbett (1936, originally Hailey National Park). (3) First Project Tiger reserve = Jim Corbett. Jim Corbett = answer to three different "first" questions.',25),
        s('d105-ga2','Current Affairs + Environment Headlines (20 min)','15 min: current affairs scan. 5 min: any recent IPCC reports, India climate pledges, new Ramsar sites declared, or wildlife numbers (tiger census, elephant census). Environment CA is highly testable in Tier 2.',20),
      ]),
      WD_QR('d105','2026-08-18',[
        s('d105-qr1','Partnership — Capital×Time Method + 20 PYQs (40 min)','Simple partnership (same time): A invests 3000, B invests 5000 → profit ratio = 3:5. Compound partnership (different time): A invests 5000 for 8 months, B invests 6000 for 5 months → ratio = 5000×8 : 6000×5 = 40000:30000 = 4:3. Active partner salary: deduct from total profit first, then split remaining in capital ratio. Solving: "A, B, C invest in ratio 2:3:5 for 6, 4, 3 months respectively. Total profit 5220. Find A\'s share." → ratio = 2×6:3×4:5×3 = 12:12:15. A\'s share = 12/39 × 5220 = 1600. Solve 20 PYQs.','Partnership calculation order: (1) Compute capital×time for each partner. (2) Reduce to simplest ratio. (3) Apply ratio to total profit. Never skip step 2 — working with large numbers in step 3 causes arithmetic errors.',40),
        s('d105-qr2','CKT Recall — Memory Types (5 min)','Difference between RAM and ROM. Difference between HDD and SSD. What is cache memory? Where is primary vs secondary storage? No notes.',5),
      ]),
    ],
  },
  {
    id:'2026-08-19',dayNumber:106,date:'2026-08-19',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 106 — Spelling & Word Formation + Indian Minerals & Energy + Permutation & Combination',
    promptBlock:`OPERATIVE BRIEFING — DAY 106

Wednesday. Spelling and Word Formation questions in Tier 2 test whether you know the correct spelling of high-frequency English words and whether you can identify root words, prefixes, and suffixes. These are rote memory tasks — no strategy substitutes for knowing the correct spelling. The good news: SSC tests the same 200 words repeatedly.

ENGLISH — SPELLING AND WORD FORMATION:
Common misspelling categories: (1) Double letters (accomodate → accommodate, occurance → occurrence, reccommend → recommend). (2) Silent letters (knack, pneumonia, psychology, rhyme). (3) -ance vs -ence (relevance, excellence, perseverance). (4) ie vs ei (believe, receive, achieve, perceive — "I before E except after C"). (5) Word formation: noun from verb (describe → description, apply → application, maintain → maintenance), adjective from noun (beauty → beautiful, danger → dangerous).

GEOGRAPHY — MINERALS AND ENERGY RESOURCES:
Coal: India 4th largest reserve. Types: anthracite (highest carbon, hardest), bituminous (most used for coking), lignite (lowest quality, brown coal). Major coalfields: Jharia (Jharkhand, largest), Raniganj (West Bengal, oldest). Iron ore: Odisha (largest reserve), Jharkhand, Chhattisgarh, Karnataka. Largest iron ore deposit: Bailadila (Chhattisgarh). Petroleum: Mumbai High (offshore, largest), Assam (oldest fields). Nuclear power: uranium from Jaduguda (Jharkhand). Thorium (from monazite sand): Kerala coast — India has world's largest thorium reserves.

QUANT — PERMUTATION AND COMBINATION:
Fundamental counting principle: if event A can occur in m ways and B in n ways, both occur in m×n ways. Permutation (order matters): nPr = n!/(n-r)!. Combination (order doesn't matter): nCr = n!/[r!(n-r)!]. Key: nCr = nC(n-r). nC0 = nCn = 1. nC1 = n. Circular permutation of n objects: (n-1)!. Permutation with repetition: n^r (n things taken r at a time with repetition).`,
    tasks:[
      WD_ENG('d106','2026-08-19',[
        s('d106-e1','Spelling + Word Formation — 30 Questions (30 min)','15 spelling questions: identify correctly spelled word from 4 options. Common SSC words: accommodate, conscience, privilege, occurrence, rhythm, committee, exaggerate, necessary, perseverance, bureaucracy, liaison, millennium, parallel, publicly, pronunciation. 15 word formation: form noun from verb (maintain→maintenance, pronounce→pronunciation, acquire→acquisition), adjective from noun (commerce→commercial, industry→industrial, nation→national, culture→cultural), verb from noun (emphasis→emphasise, analysis→analyse).','Spelling memory trick: the words "necessary" and "accommodate" cover the two most-tested double-letter patterns. Necessary: 1 collar (1 C) and 2 socks (2 S) = one C, two S. Accommodate: 2 C\'s and 2 M\'s. Write them out 10 times each — they will not trouble you again.',30),
        s('d106-e2','CKT Daily — Database Concepts Review (10 min)','Review from Week 14: Relational database, primary key, foreign key, SQL commands (DDL, DML, DQL). Today add: Normalization (eliminate data redundancy), 1NF/2NF/3NF. Query: SELECT name FROM students WHERE grade > 80. Joins: INNER JOIN (matching rows only), LEFT JOIN (all from left + matching from right). Index: speeds up data retrieval. Backup: protecting data from loss.',10),
      ]),
      WD_GA('d106','2026-08-19',[
        s('d106-ga1','Indian Minerals + Energy Resources — Key States and Deposits','COAL: Jharkhand (Jharia — largest coalfield), West Bengal (Raniganj — oldest), Odisha, Madhya Pradesh. IRON ORE: Odisha (largest reserves — Keonjhar, Sundargarh), Jharkhand (Singhbhum), Karnataka (Bellary-Hospet), Chhattisgarh (Bailadila — largest single deposit). BAUXITE (aluminium ore): Odisha, Jharkhand, Gujarat. MANGANESE: Odisha, Karnataka. MICA: Jharkhand (Koderma — largest mica-producing district in world). COPPER: Rajasthan (Khetri — largest copper mine). PETROLEUM: Mumbai High (offshore, largest), Assam (Digboi — first oil well in Asia, 1889). THORIUM: Kerala coast (monazite sand, world\'s largest reserves). NUCLEAR POWER PLANTS: Tarapur (Maharashtra, oldest), Kudankulam (Tamil Nadu, largest, Russian-aided).','Jharkhand is the answer to multiple mineral questions: largest coal (Jharia), mica (Koderma), uranium (Jaduguda), copper (partial), iron ore (Singhbhum). This state has the highest concentration of multiple minerals. Learn Jharkhand as the mineral hub of India.',25),
        s('d106-ga2','Science — Chemistry: Metals and Non-Metals (20 min)','Metals: lustrous, malleable, ductile, good conductor. Non-metals: dull, brittle, poor conductor (exception: graphite conducts). Metalloids: silicon, germanium, arsenic (between metals and non-metals). Most abundant metal in earth\'s crust: Aluminium. Most abundant element: Oxygen. Hardest natural substance: Diamond (form of carbon). Alloys: brass (Cu+Zn), bronze (Cu+Sn), steel (Fe+C), stainless steel (Fe+Cr+Ni), solder (Pb+Sn). Rusting: iron + oxygen + water → iron oxide (Fe2O3). Galvanisation: coating iron with zinc to prevent rusting.',20),
      ]),
      WD_QR('d106','2026-08-19',[
        s('d106-qr1','Permutation & Combination — All Types + 20 PYQs (40 min)','nPr = n!/(n-r)!. nCr = n!/r!(n-r)!. Practice types: (1) Arrangements of letters in a word: "APPLE" has repeated P → 5!/2! = 60. (2) Selecting a committee: "5 men, 4 women, choose 3 men 2 women" → 5C3 × 4C2 = 10×6 = 60. (3) Circular: 6 people around a round table → (6-1)! = 120. (4) With restriction: "A and B must sit together" → treat as 1 unit → (n-1)! × 2! for internal arrangement. Solve 20 PYQs: 5 permutation, 5 combination, 5 committee-type, 5 circular/restriction.','P&C time-saver: nCr = nC(n-r). So 20C17 = 20C3 = (20×19×18)/(3×2×1) = 1140. Never calculate the larger factorial — always convert to the smaller complement. Saves 60 seconds per question.',40),
        s('d106-qr2','CKT Recall — SQL Basics (5 min)','What does SELECT do? Name 2 DDL commands. Name 2 DML commands. What is a primary key? What is normalization? No notes.',5),
      ]),
    ],
  },
  {
    id:'2026-08-20',dayNumber:107,date:'2026-08-20',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 107 — Confusing Words + Space & ISRO + Probability',
    promptBlock:`OPERATIVE BRIEFING — DAY 107

Thursday. Confusing words — commonly confused pairs like affect/effect, principal/principle, complement/compliment, stationary/stationery — are tested directly in Error Spotting and FIB. A candidate who has memorized these pairs eliminates 3-4 questions effortlessly. A candidate who guesses loses 0.25 on each wrong answer.

ENGLISH — CONFUSING WORDS:
These are pairs that sound similar (homophones) or look similar (near-homophones) but have different meanings. They appear in Error Spotting (wrong word used), Sentence Improvement (swap the correct word in), and FIB (choose the correct word). The list is fixed and repeatable — same pairs appear year after year.

SCIENCE — SPACE AND ISRO:
ISRO: Indian Space Research Organisation, founded 1969, HQ Bengaluru. Chairman. Key missions: Chandrayaan-1 (2008, discovered water on moon), Chandrayaan-2 (2019, Vikram lander crash), Chandrayaan-3 (2023, Vikram lander success, first to land near south pole — India first country). Mangalyaan/Mars Orbiter Mission (2014, first Asian country to reach Mars, first attempt success). Aditya L1 (2023, India\'s first solar observatory). PSLV: Polar Satellite Launch Vehicle. GSLV: Geosynchronous Satellite Launch Vehicle. One Earth, One Family, One Future = G20 India theme (2023).

QUANT — PROBABILITY:
Probability = favourable outcomes / total outcomes. Range: 0 ≤ P ≤ 1. P(A) + P(A') = 1. For two independent events: P(A and B) = P(A) × P(B). P(A or B) = P(A) + P(B) - P(A and B). Conditional probability: P(A|B) = P(A and B) / P(B). Standard problems: cards (52 card deck — 4 suits × 13 cards each), dice (1-6 each), coins (heads/tails), coloured balls.`,
    tasks:[
      WD_ENG('d107','2026-08-20',[
        s('d107-e1','Confusing Words — 30 Pairs Drill (30 min)','Master these 30 commonly confused pairs: affect (verb, to influence) vs effect (noun, result). Principal (main/head) vs principle (rule/belief). Complement (to complete) vs compliment (to praise). Stationary (not moving) vs stationery (paper/pens). Eminent (famous) vs imminent (about to happen). Discreet (careful/tactful) vs discrete (separate). Advice (noun) vs advise (verb). Practice (noun) vs practise (verb, British). Accept (to receive) vs except (excluding). Assure (to promise) vs ensure (to make certain) vs insure (financial protection). Lie (to recline) vs lay (to place). Rise (intransitive) vs raise (transitive). Fewer (countable) vs less (uncountable). Among (3+) vs between (2). Beside (next to) vs besides (in addition to).','The most tested confusing pair in SSC: "stationary" (not moving) vs "stationery" (pens, paper). Memory trick: stationery contains "er" — think of "pen" ending in "n" which is in "stationery". A bus is stationary. A pen is stationery.',30),
        s('d107-e2','CKT Daily — Artificial Intelligence Basics (10 min)','AI: machines that simulate human intelligence. ML (Machine Learning): AI learns from data without explicit programming. Deep Learning: ML using neural networks with many layers. NLP (Natural Language Processing): AI understands human language (Siri, Google Assistant). Computer Vision: AI interprets images (facial recognition, self-driving cars). Chatbots: AI conversation systems. ChatGPT: large language model by OpenAI. Generative AI: creates text/images/audio. Robotics: AI + physical machines. Big Data: extremely large datasets processed by AI.',10),
      ]),
      WD_GA('d107','2026-08-20',[
        s('d107-ga1','Space Science + ISRO Missions','ISRO milestones: first satellite = Aryabhata (1975). First Indian in space = Rakesh Sharma (1984, Soviet Soyuz). PSLV first flight: 1993. Chandrayaan-1: Oct 2008, found water ice on moon. Mangalyaan: Nov 2013 launched, Sept 2014 reached Mars. India = first country to succeed in Mars mission on first attempt; cheapest Mars mission ($74 million). Chandrayaan-3: July 14 2023 launched, Aug 23 2023 landed near lunar south pole. India = 4th country to soft-land on moon. First to land near south pole. Aditya L1: Sept 2023 launched, Jan 2024 reached L1 (Lagrange Point 1 between Earth and Sun). Gaganyaan: India\'s human spaceflight mission (planned). GSAT series: communication satellites. INSAT: Indian National Satellite System. Vikram Sarabhai: father of Indian space programme.','Chandrayaan-3 key facts for exam: Lander = Vikram, Rover = Pragyan. Landing site named "Shiv Shakti Point" by PM Modi. Pragyan means wisdom in Sanskrit. India landed near south pole (68° south latitude) — a region of suspected water ice. No other country has successfully landed near the lunar south pole.',25),
        s('d107-ga2','Current Affairs + Space News (20 min)','15 min: current affairs. 5 min: any new ISRO launches, international space missions (NASA Artemis, SpaceX), satellite launches, or space-related records. Space CA appears in nearly every Tier 2 paper.',20),
      ]),
      WD_QR('d107','2026-08-20',[
        s('d107-qr1','Probability — All Scenario Types + 20 PYQs (40 min)','Card problems: P(red card) = 26/52 = 1/2. P(king) = 4/52 = 1/13. P(queen of hearts) = 1/52. P(face card) = 12/52 = 3/13. Dice: P(sum=7 with two dice) = 6/36 = 1/6. Coin: P(2 heads in 3 tosses) = 3C2 × (1/2)³ = 3/8. Balls: bag has 3 red, 4 blue, 5 green. P(2 red from 3 drawn without replacement) = (3C2 × 9C1) / 12C3. Solve 20 PYQs: 6 cards, 4 dice, 4 coins, 4 balls, 2 mixed.','Probability with replacement vs without replacement: with replacement — events are independent, multiply probabilities. Without replacement — second draw depends on first, multiply conditional probabilities. The question always specifies — read carefully.',40),
        s('d107-qr2','CKT Recall — AI Concepts (5 min)','Define: Machine Learning, NLP, Deep Learning. What is Chandrayaan-3\'s lander name? What is Pragyan? 5 minutes, no notes.',5),
      ]),
    ],
  },
  {
    id:'2026-08-21',dayNumber:108,date:'2026-08-21',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 108 — Mixed English Sprint + National Symbols & Awards + Mixed Arithmetic + Week Audit',
    promptBlock:`OPERATIVE BRIEFING — DAY 108

Friday. Week 16\'s audit day. This is the last Friday audit before the terminal revision phase begins. After today\'s session, you will have a complete map of your strengths and weaknesses across the entire Phase 5 (Weeks 13-16). This map drives the terminal revision phase — what to revise, in what order, for how long.

ENGLISH — MIXED SPRINT:
Today\'s English block consolidates this week\'s topics: Word in Context, Spelling, Confusing Words, plus RC vocabulary. This is a diagnostic — run it as a mini mock, timed, no notes. The score tells you which topics need weekend deep study.

GA — NATIONAL SYMBOLS AND HONOURS:
National symbols are the highest-frequency static GA topic — they appear in 2-3 questions in nearly every Tier 2 paper. This is pure memory: correct recall beats any logic. National honours (Bharat Ratna, Padma awards) appear as 1-2 questions.

QUANT — MIXED ARITHMETIC SPRINT:
All arithmetic topics in one sprint: Percentage, Profit/Loss, SI/CI, Ratio/Proportion, Partnership, Speed/Distance/Time, Time/Work. 20 questions, 20 minutes. One of each type at minimum. The speed test reveals which arithmetic topics are now automatic and which still require slow calculation.`,
    tasks:[
      WD_ENG('d108','2026-08-21',[
        s('d108-e1','Mixed English Mini-Mock — 30 Questions (30 min)','30 questions covering Week 16 topics: Word in Context (5), Spelling (5), Confusing Words (5), Error Spotting (5), Cloze Blank (5), Idioms (5). Strict 25-minute limit. No notes, no second-guessing beyond 30 seconds. Score it. Any topic below 70% accuracy = add to Saturday deep study list.','Mixed drill advantage: you no longer know which question type is coming, forcing you to switch analytical modes quickly. This is exactly how the exam works — Paper II jumps between question types without warning. The cognitive switching must be automatic by exam day.',30),
        s('d108-e2','Week 16 English Audit (10 min)','Accuracy check: rate yourself 1-5 on each topic: RC Tone/Inference, Word in Context, Spelling, Confusing Words, Cloze, Error Spotting, Parajumbles, Idioms, Syn/Ant, OWS. Topics rated 1-2: write them down. These get 10 minutes each during Sunday\'s deep study.',10),
      ]),
      WD_GA('d108','2026-08-21',[
        s('d108-ga1','National Symbols, Awards, Honours','NATIONAL SYMBOLS: Animal = Bengal Tiger. Bird = Indian Peacock. Flower = Lotus. Fruit = Mango. Tree = Banyan. River = Ganga. Aquatic animal = River Dolphin. Heritage animal = Elephant. Currency symbol = ₹ (designed by D Udaya Kumar, adopted 2010). Emblem = Lion Capital of Ashoka (4 lions, adopted Jan 26 1950). Motto: Satyameva Jayate (from Mundaka Upanishad). Anthem: Jana Gana Mana (Rabindranath Tagore, adopted Jan 24 1950). Song: Vande Mataram (Bankim Chandra Chattopadhyay). Calendar: Saka Calendar (national calendar, Chaitra = 1st month). HIGHEST HONOURS: Bharat Ratna (highest civilian), Padma Vibhushan (2nd highest), Padma Bhushan (3rd), Padma Shri (4th). Military: Param Vir Chakra (highest wartime gallantry), Ashok Chakra (highest peacetime gallantry).','National symbol trap questions: (1) "What is India\'s national river?" = Ganga (formally declared 2008). (2) "What is the national aquatic animal?" = River Dolphin (Gangetic Dolphin). (3) "What is the national heritage animal?" = Elephant (separate from national animal Tiger). Three different animals — know all three.',25),
        s('d108-ga2','Week 16 GA Full Audit + Current Affairs (20 min)','10 min: self-test the week\'s GA topics (economy 1991, ecology, minerals, space, national symbols). 10 min: current affairs scan. Identify your weakest GA topic for Sunday deep study.',20),
      ]),
      WD_QR('d108','2026-08-21',[
        s('d108-qr1','Mixed Arithmetic Sprint — 20 Questions in 20 Minutes','One question each from: Percentage, Profit/Loss, SI, CI, Ratio, Partnership, Speed-Time-Distance, Trains, Boats, Time-Work, Pipes, Average, Mixture/Alligation, Number System, HCF/LCM, P&C, Probability, Statistics, Mensuration 2D, Mensuration 3D. Strict 20-minute timer. This is speed calibration — how many can you complete correctly under time pressure? Any topic where you slow below 1 min = add to Saturday drill.','Mixed arithmetic reveals your true exam speed, not your ideal-conditions speed. In the exam, you will not choose your preferred topics first — the question order is fixed. Building speed across all types is the only solution.',40),
        s('d108-qr2','Week 16 Quant Audit — Full Topic Rating (10 min)','Rate confidence 1-5 across all Phase 5 quant topics: Quadratic, SI/CI, Mensuration 3D, P&L, Number System, Trig H&D, Circles, Coordinate Geometry, Statistics, T&W, Partnership, Speed-Time, P&C, Probability. Write your 3 weakest. These get Sunday deep study priority.',10),
      ]),
    ],
  },
  {
    id:'2026-08-22',dayNumber:109,date:'2026-08-22',phase:5,tier:2,weekNumber:16,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 109 — Full Paper I Mock + Deep Study: Speed-Distance-Time + Partnership + P&C',
    promptBlock:`OPERATIVE BRIEFING — DAY 109

Saturday of Week 16. This is the second-to-last Saturday mock of Phase 5. Your mock score today should reflect the full compound effect of four weeks of Phase 5 acceleration. If the score is not tracking upward, this is not a failure — it is a data point. The data tells you where to focus for the final 3 weeks.

PAPER I EXECUTION:
Week 16 deep study covered SDT, Partnership, P&C, and Probability. These four topics appear 8-10 times in Paper I. Your attack order should maximise these gains while protecting time for DI (fixed 25-minute cap regardless of how many you get right).

DEEP STUDY PRIORITY:
The audit from Friday identified your top 3 weak Quant topics. The first deep study block targets those specifically. The remaining blocks cover SDT, Partnership, and P&C at exam depth — 15 questions each, timed, with full error review.`,
    tasks:[
      WE_MT('d109',[
        s('d109-mt1','Full Paper I Mock — 100 Questions in 135 Minutes','Full exam simulation. Pre-mock: write target score on rough sheet. During mock: note the time at the start of each section. After mock: record section completion times alongside section scores. This gives you a time vs accuracy map for Paper I.','If you finish with more than 10 minutes remaining — you went too fast. The ideal Paper I uses 130+ of the 135 minutes. Unused time = unmarked questions or unchecked answers. Use every minute.',135),
        s('d109-mt2','Score Analysis — Total + Section + Time Map','Record: total score, Arithmetic score, Algebra score, Geometry score, Trig score, DI score, Statistics score, and the time spent on each. Low score + slow time = knowledge gap. Low score + fast time = carelessness. High score + slow time = efficiency problem. Each combination requires a different fix.',20),
      ]),
      WE_DS('d109',[
        s('d109-ds1','Weak Topic Drill — Top 3 from Friday Audit (60 min)','From the audit: your 3 weakest Quant topics. 20 questions each? No — 15 questions on each weak topic, 5 minutes each × 3 topics = 45 minutes, plus 15 minutes of error review. This is surgical: you are fixing specific gaps, not doing general revision.',60),
        s('d109-ds2','Speed-Distance-Time — 25 Exam-Level PYQs (60 min)','Advanced SDT: (1) Average speed for different distances at different speeds: total distance / total time. (2) Train overtaking: two trains in same direction, faster overtakes slower — time = (L1+L2)/(S1-S2). (3) Boat crossing river at angle: resultant velocity. (4) Relative speed application: walking towards/away from each other. (5) Meeting problems: two people leave simultaneously from opposite ends — meet at time = total distance / (S1+S2). Solve 25 PYQs with strict time (2 minutes per question maximum).',60),
        s('d109-ds3','Partnership + P&C Integration — 20 Mixed Questions (45 min)','10 partnership questions (compound partnership with active/sleeping partner distinction). 10 P&C questions (committee selection with restrictions, circular arrangements). Mixed because the exam will present them in random order. Solve without knowing in advance which type is next — read and identify before calculating.',45),
        s('d109-ds4','Mock Error Dive — All Concept Gap Questions (60 min)','Every question marked as concept gap (G) in today\'s mock. For each: find the rule, write it, solve correctly, solve one more similar question to confirm understanding. This 60 minutes prevents the same errors from recurring in the final mock.',60),
      ]),
      WE_REV('d109',[
        s('d109-rev1','DEST Session — Full 15-Minute Typing (20 min)','Full DEST simulation: 15 minutes typing + 5 minutes analysis. WPM and error%. If below 35 WPM: analyse which keys are slowest (likely number row or symbol keys). Practice those specifically.','DEST is not just typing speed — it is typing accuracy under time pressure. Maintain 35 WPM at ≤5% error for 15 minutes continuously. That is the exam requirement.',20),
        s('d109-rev2','GA Quick Revision — National Symbols + ISRO + 1991 Reforms (20 min)','15-minute oral rapid-fire: national animal/bird/flower/fruit/tree/river/aquatic animal, Chandrayaan-3 facts, 1991 reform architects, LPG full forms, SEBI function. 5-minute current affairs review.',20),
      ]),
    ],
  },
  {
    id:'2026-08-23',dayNumber:110,date:'2026-08-23',phase:5,tier:2,weekNumber:16,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 110 — Full Paper II Mock + Deep Study: RC Advanced + Word in Context + Vocabulary Final',
    promptBlock:`OPERATIVE BRIEFING — DAY 110

Sunday. Day 110. The final day of Week 16 and the final day of Phase 5. After today, the plan shifts into the terminal phase — no new topics, only refinement, consolidation, and mock-based acceleration. This Paper II mock is therefore a baseline measurement: your current Paper II score, obtained after four complete weeks of Phase 5, is the floor you will build from in the final 3 weeks.

PHASE 5 CLOSE-OUT:
Four weeks. 28 days. You covered: Algebra advanced, Mensuration 3D, SI/CI advanced, P&L advanced, Quadratic equations, Trig identities, Height & Distance, Circles, Coordinate Geometry, Statistics, Number System, Time & Work, Partnership, Speed-Distance-Time, Permutation & Combination, Probability. On the English side: Sentence Improvement, OWS, Active/Passive, Direct/Indirect, RC advanced, Parajumbles, Cloze, Error Spotting, Idioms, Synonyms/Antonyms, Word in Context, Spelling, Confusing Words. The syllabus is now covered. Phase 6 is about speed, accuracy, and exam-day execution.`,
    tasks:[
      WE_MT('d110',[
        s('d110-mt1','Full Paper II Mock — 200 Questions in 135 Minutes','Final Phase 5 Paper II mock. Treat this as the real exam. Full 135 minutes, strict conditions, complete all 200 questions. Your score today is your Phase 5 exit score — the number to beat in Phase 6.','Phase 5 exit target: Paper II score should be 155+ out of 200. If below 140: English fundamentals need emergency review in Phase 6. If 140-155: consistent but needs speed improvement. If 155+: Phase 6 focus is mock simulation and CA.',135),
        s('d110-mt2','Phase 5 Exit Analysis — Section-wise Accuracy Map','Score every section. Create a table: Section | Score | Total | Accuracy%. Any section below 70% accuracy = Phase 6 priority. Write the list. This is your Phase 6 study agenda.',20),
      ]),
      WE_DS('d110',[
        s('d110-ds1','RC Advanced — Tone + Inference + Word in Context Integration (60 min)','3 long RC passages (800+ words each). For each: (1) Identify tone before answering. (2) Answer all 5 questions. (3) For every word-in-context question: underline the word, read surrounding context, eliminate options. These three passages represent full exam-level RC difficulty. Target: 14+/15.','Week 16 RC goal: your RC performance should be consistent regardless of passage topic. Science, economics, literature, philosophy — the method is the same. Consistent method = consistent score.',60),
        s('d110-ds2','Vocabulary Phase 5 Final Consolidation — 120 Words Flash Test','From Weeks 13-16: OWS batch (legal/governance/social — 50 words), Vocabulary advanced (psychology/philosophy/literary — 40 words), Synonyms sprint (30 words). Flash test all 120 without notes. Any word that takes more than 3 seconds: add to the "Final 30" emergency list. Review the Final 30 every morning from tomorrow until exam day.','The Final 30 list is your most valuable study asset in the last 3 weeks. These are the words your memory resists — which means they are also the words most likely to trip you in the exam. Knowing them converts those questions from losses to gains.',60),
        s('d110-ds3','Confusing Words + Spelling — Rapid Consolidation (45 min)','25 confusing word questions and 20 spelling questions back to back, no notes, timed at 30 minutes. For every error: write the correct version 5 times. These questions have 100% pass rate when the words are memorised — there is no logic or strategy that substitutes for memory here.',45),
        s('d110-ds4','Week 16 + Phase 5 Complete English Review (60 min)','40 mixed English questions covering all Phase 5 topics: Error Spotting (5), Sentence Improvement (5), OWS (5), Parajumbles (5), Cloze (5), RC Inference (5), Word in Context (5), Vocabulary Syn/Ant (5). 30-minute strict time limit. This is the Phase 5 English exit exam. Score it honestly.',60),
      ]),
      WE_REV('d110',[
        s('d110-rev1','Phase 5 Complete Review — Strengths and Weakness Register','Write your definitive list: (1) Your 5 strongest topics (these are your exam scoring pillars — protect them with weekly revision). (2) Your 5 weakest topics (these are Phase 6 priorities — daily 15-minute focused drill). (3) Your current mock score estimate for Paper I and Paper II. This register is the input to Phase 6 planning.',25),
        s('d110-rev2','Phase 6 Preview — Days 111-138, Weeks 17-20, Terminal Revision','Phase 6 (Weeks 17-20): no new topics. Daily structure: morning mock drill (1 hour), subject revision (2 hours), evening CA (30 min). Weekend: full Paper I and II mocks each. The goal is to push Paper I score to 170+ and Paper II to 165+. Final exam day protocol will be set in Week 20.',20),
      ]),
    ],
  },
];
