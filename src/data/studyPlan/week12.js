// Week 12 — Jul 20 (Mon) to Jul 26 (Sun) — Phase 4: Tier 2 Foundation | Days 76-82
// Third week of Tier 2 prep. Parajumbles, P&C, Probability, RC, Statistics, full mock weekend.
const WD_ENG = (id, subtasks) => ({ id:`${id}-eng`, subject:'English T2', icon:'📖', color:'#6366f1', duration:60, title:'English T2 Block (60 min)', subtasks })
const WD_GA  = (id, subtasks) => ({ id:`${id}-ga`,  subject:'GA & CKT', icon:'🌏', color:'#10b981', duration:45, title:'GA + CKT Daily (45 min)', subtasks })
const WD_QR  = (id, subtasks) => ({ id:`${id}-qr`,  subject:'Quant T2', icon:'🔢', color:'#f59e0b', duration:75, title:'Quant T2 Block (75 min)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper Mock (2h 15min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Review', icon:'🔍', color:'#06b6d4', duration:60, title:'DEST + Mock Analysis (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`,  subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:240, title:'Deep Study Block (4 Hours)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-07-20',dayNumber:76,date:'2026-07-20',phase:4,tier:2,weekNumber:12,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 76 — Parajumbles T2 + Permutation & Combination + Indian Geography',
    promptBlock:`OPERATIVE BRIEFING — DAY 76

Week 12. Three weeks into Tier 2 Foundation and the syllabus is narrowing. You are no longer building from zero — you are layering precision on top of foundation. Every session now targets exam-grade accuracy.

ENGLISH — PARAJUMBLES:
Tier 2 parajumbles are significantly harder than Tier 1. Passages are 5–7 sentences, often from academic or journalistic writing. The strategy: find the OPENER (no pronoun reference, introduces a subject), find the CLOSER (conclusion/consequence), then fix the middle by logical flow + pronoun chains. SSC frequently uses the "mandatory pair" method — two sentences that MUST be adjacent because the second uses a pronoun referring to the first sentence's noun.

PERMUTATION & COMBINATION:
The most feared Quant topic — yet it has only 3 core principles: the Fundamental Counting Principle (FCP), Permutation (nPr = n!/(n-r)!) and Combination (nCr = n!/(r!(n-r)!)). The distinction: P if ORDER MATTERS, C if order doesn't. Word arrangement: total arrangements of a word with repeated letters = n! / (repetition1! × repetition2!). Circular permutation: (n-1)! for distinct objects. The entire topic reduces to: identify whether order matters, then apply the correct formula.

INDIAN GEOGRAPHY:
Physical features — the backbone of GA static Geography questions. Tier 2 consistently asks about: Himalayan ranges (Greater, Lesser, Shiwalik), rivers (Indus system, Ganga system, Brahmaputra), coastal plains (Malabar, Konkan, Coromandel), passes (Nathu La, Banihal, Zoji La, Rohtang), and the Deccan Plateau. These are not obscure facts — they appear in every SSC paper cycle.`,
    tasks:[
      WD_ENG('d76',[
        s('d76-e1','Parajumbles — Strategy + 15 Tier 2 Level Sets','Master the 4-step method: (1) Find OPENER: sentence with a proper noun / introduces the topic without any prior reference. (2) Find CLOSER: sentence with "thus", "therefore", "in conclusion", "ultimately", or a consequence. (3) Build pronoun chains: "he/she/it/they" must refer to the noun in the immediately preceding sentence. (4) Use mandatory pairs. Practice 15 sets of 5-sentence parajumbles. Time: 2 minutes per set.','Killer technique: look for "however", "but", "yet", "nevertheless" — these transition words come AFTER a statement they contrast. If sentence X says "A is true" and sentence Y says "however, B is also true" — Y must follow X immediately. This eliminates 60% of wrong options.',40),
        s('d76-e2','Parajumbles MCQ Drill — 10 questions','10 standard MCQ parajumbles (ABCDE reorder format). Target: 9+/10 correct. Apply the 4-step method systematically. Do NOT guess — every arrangement has a logical reason.','Common trap: sentence starting with "This" or "These" — ask: "this what?" The answer is in the immediately preceding sentence. Find that sentence first.',20),
      ]),
      WD_QR('d76',[
        s('d76-qr1','Permutation & Combination — Core Theory + 20 PYQs','Formula bank: nPr = n!/(n-r)!. nCr = n!/(r!(n-r)!). nC0 = nCn = 1. nC1 = n. nCr = nC(n-r). Word arrangements: MISSISSIPPI = 11!/(4!×4!×2!). Circular: (n-1)! for a round table with n people. Solve 20 PYQs. Category breakdown: word arrangements (6), selection problems (6), committee formation (4), circular arrangements (4).','Most common Tier 2 trap: "at least one" problems. Use complement: P(at least one) = 1 - P(none). Example: probability that at least one head appears in 3 tosses = 1 - P(no heads) = 1 - (1/2)³ = 7/8.',50),
        s('d76-qr2','CKT — Internet Protocols & Web Basics (10 min)','HTTP/HTTPS, TCP/IP, DNS (converts domain to IP), IP address structure (IPv4: 4 octets, 0-255), URL structure, HTML basics (not programming — just concept), browser vs server. Bandwidth units: bps, Kbps, Mbps, Gbps. Data transmission: simplex (one way), half-duplex (alternating), full-duplex (simultaneous).','DNS is the "phone book of the internet" — converts human-readable domain names (google.com) to IP addresses (142.250.x.x). This analogy is exactly how SSC phrases the question.',10),
      ]),
      WD_GA('d76',[
        s('d76-ga1','Indian Geography — Physical Features (Himalayas + Rivers + Coastal Plains)','Himalayan ranges North to South: Trans-Himalaya (Karakoram, Ladakh) → Greater Himalaya (Everest, K2, Kanchenjunga, Nanda Devi) → Lesser Himalaya (Mussoorie, Shimla, Darjeeling) → Shiwalik (outermost, youngest). Key passes: Nathu La (Sikkim, India-China), Banihal (J&K, connects Kashmir valley), Zoji La (J&K, NH 1), Shipki La (HP, India-China), Diphu (Arunachal). Rivers: Indus system (Indus, Jhelum, Chenab, Ravi, Beas, Sutlej — 5 tributaries join in Pakistan). Ganga system: Ganga, Yamuna, Ghaghra, Gandak, Son, Chambal.','Trick: The 5 rivers of Punjab (Punjab = "Land of 5 rivers") — Jhelum, Chenab, Ravi, Beas, Sutlej — all flow into the Indus in Pakistan. SSC asks which rivers are tributaries of Indus — these 5 are the answer.',35),
      ]),
    ],
  },
  {
    id:'2026-07-21',dayNumber:77,date:'2026-07-21',phase:4,tier:2,weekNumber:12,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 77 — Cloze Test T2 + Probability + Indian Economy',
    promptBlock:`OPERATIVE BRIEFING — DAY 77

Tuesday. The second weekday of Week 12. Yesterday's P&C work is the foundation for today's Probability — the two topics share the same logical framework and often appear back-to-back in Tier 2 Quant.

ENGLISH — CLOZE TEST (TIER 2):
Tier 2 cloze tests are 150-200 words (longer than Tier 1's 100-word passages). The blanks test collocations, prepositions, and contextual vocabulary — not just grammar. Strategy: read the ENTIRE passage before filling any blank. The paragraph's central theme guides every blank. When two options both seem grammatically correct, choose the one that fits the TONE (formal/informal, positive/negative) of the overall passage.

PROBABILITY:
Built directly on P&C. P(event) = Favourable outcomes / Total outcomes. Complement rule: P(A') = 1 - P(A). Addition rule: P(A∪B) = P(A) + P(B) - P(A∩B). Mutually exclusive events: P(A∩B) = 0. Independent events: P(A∩B) = P(A)×P(B). Conditional: P(A|B) = P(A∩B)/P(B). Tier 2 combines cards, dice, balls, and coins — the formula applies identically to all.

INDIAN ECONOMY:
The economy section in Tier 2 GA covers budget terminology, RBI functions, banking types, and basic macro concepts. Not theory-heavy — mostly terminology and specific facts. The questions are predictable: "Who appoints the RBI Governor?", "What is the full form of NABARD?", "What is repo rate?". Master 40 economy terms and 90% of GA economy questions are answered.`,
    tasks:[
      WD_ENG('d77',[
        s('d77-e1','Cloze Test — 3 Full Tier 2 Passages (150-200 words each)','Practice 3 full cloze passages with 8-10 blanks each. Category distribution: vocabulary-based blanks (choose synonym that fits context) — 40%, preposition/conjunction blanks — 30%, collocation blanks (words that "go together": make a decision NOT do a decision) — 30%. Time: 8 minutes per passage including review.','Collocation trap: "strong tea" is correct, NOT "powerful tea". "Make an effort" is correct, NOT "do an effort". SSC Tier 2 specifically tests collocations because they separate vocabulary knowledge from native-speaker intuition. Know the top 50 collocations.',35),
        s('d77-e2','Preposition & Conjunction Review — 20 Qs','20 fill-in-blank questions focused on prepositions (at/in/on for time and place, by/with/through for instrument/method, for/since with perfect tenses) and conjunctions (although/though/even though, unless/until/till, so that/in order that). These are the most commonly wrong answers in Tier 2 cloze tests.','Preposition rule: "at" for specific times/places (at 3pm, at the door), "in" for periods/enclosed spaces (in July, in the room), "on" for surfaces/specific days (on Monday, on the table). Most errors are at/in/on confusion.',25),
      ]),
      WD_QR('d77',[
        s('d77-qr1','Probability — Core Theory + 20 PYQs (Cards, Dice, Balls)','Cards: standard deck = 52 cards, 4 suits (13 each), 2 colors (26 each), 12 face cards (3 per suit × 4). Dice: 6 faces, sum of opposite faces = 7. Balls from bags: without replacement changes denominator each draw. Solve 20 PYQs — 8 cards, 7 dice, 5 balls from bags. Key pattern: "at least one" always use complement. "Exactly k" use combinations directly.','Conditional probability trick: P(both red | first red without replacement) = P(first red AND second red) / P(first red) = (r/n × (r-1)/(n-1)) / (r/n) = (r-1)/(n-1). This appears as a Tier 2 "bag of balls" question at least twice per exam cycle.',50),
        s('d77-qr2','CKT — Operating Systems (10 min)','OS types: Batch, Time-sharing, Real-time (hard vs soft), Distributed, Embedded. Functions: process management, memory management, file management, device management. Memory hierarchy: Registers → Cache (L1/L2/L3) → RAM → Hard Disk. Virtual memory concept. File systems: FAT32, NTFS (Windows), ext4 (Linux). Booting process: BIOS/UEFI → POST → Boot loader → OS kernel.','RAM is volatile (loses data on power off). ROM is non-volatile (retains data). BIOS is stored in ROM. This three-way relationship (RAM/ROM/BIOS) appears in 80% of CKT "memory" questions.',10),
      ]),
      WD_GA('d77',[
        s('d77-ga1','Indian Economy — 40 Key Terms + RBI + Budget Concepts','RBI: established 1935, nationalized 1949. Governor appointed by Central Government. Functions: monetary policy, banker to government, banker to banks, currency issuer, forex management. Key rates: Repo (rate at which RBI lends to banks), Reverse Repo (rate at which RBI borrows from banks), CRR (cash banks must keep with RBI), SLR (liquid assets banks must maintain), Bank Rate (for long-term). Budget: Revenue receipts (tax + non-tax), Capital receipts (borrowings + disinvestment). Deficits: Fiscal = total expenditure - total receipts excluding borrowings. Revenue deficit = revenue expenditure - revenue receipts. Primary deficit = fiscal deficit - interest payments.','Most tested economy fact: CRR increased → banks have less money to lend → credit supply falls → inflation controlled. This mechanism (RBI rate → bank lending → inflation) is the most common Tier 2 economy MCQ framework.',35),
      ]),
    ],
  },
  {
    id:'2026-07-22',dayNumber:78,date:'2026-07-22',phase:4,tier:2,weekNumber:12,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 78 — Error Spotting T2 + Height & Distance + Constitutional Bodies',
    promptBlock:`OPERATIVE BRIEFING — DAY 78

Wednesday. Mid-week. Error Spotting in Tier 2 is the grammar section where points are most readily gained — IF you know the 12 core grammar rules that SSC recycles across every paper.

ENGLISH — ERROR SPOTTING (TIER 2):
Tier 2 Error Spotting has 20-25 questions. The sentences are longer and the errors are subtler than Tier 1. The 12 must-know error types: (1) Subject-verb agreement with collective nouns, (2) Pronoun case (who vs whom), (3) Double comparative/superlative, (4) Misuse of "fewer" vs "less", (5) Dangling modifier, (6) Parallel structure, (7) Gerund vs infinitive, (8) Article usage (the/a/an with proper nouns, unique things), (9) Tense consistency, (10) Preposition errors, (11) Redundancy (completely finished, return back, etc.), (12) Countable/uncountable noun errors. Learn one per hour today.

HEIGHT & DISTANCE:
Pure trigonometric application. Angle of Elevation (observer looks UP at object) vs Angle of Depression (observer looks DOWN at object). Key: angle of depression from top = angle of elevation from bottom (alternate interior angles). The two most tested scenarios: (1) Two buildings — find height of taller using the given shorter height and angles. (2) Moving observer — as observer moves closer, angle of elevation increases; use the difference of two triangles.

CONSTITUTIONAL BODIES:
Tier 2 Polity focuses on constitutional bodies (those directly created by the Constitution) vs statutory bodies (created by Parliament). CAG, UPSC, Election Commission, Attorney General — constitutional. CBI, NHRC, SEBI — statutory. Know the distinction and specific articles for each.`,
    tasks:[
      WD_ENG('d78',[
        s('d78-e1','Error Spotting — 12 Grammar Rules with Examples','Study all 12 error types with 2 examples each: (1) SVA: "The committee are divided" → "The committee is divided" (collective noun = singular). (2) Who vs Whom: "Who did you meet?" → "Whom did you meet?" (object position = whom). (3) Double comparative: "more better" → "better". (4) Fewer/Less: "less people" → "fewer people" (countable = fewer). (5) Dangling modifier: "Walking down the street, the houses looked beautiful" → subject must walk, not houses. (6) Parallel: "He likes swimming, cycling, and to run" → "swimming, cycling, and running". (7) Gerund/infinitive: "avoid to make" → "avoid making". (8) Article: "He is best student" → "the best student" (superlative needs the). (9) Tense: mixed past and present in same narrative. (10) Preposition: "married with" → "married to". (11) Redundancy: "end result" → "result". (12) Countable: "furnitures" → "furniture" (uncountable).','The exam exploits the gap between what "sounds right" and what IS right. "The committee ARE meeting" sounds natural in British English but SSC follows formal written grammar where collective nouns are singular. Trust the rule, not your ear.',30),
        s('d78-e2','Error Spotting Drill — 20 Tier 2 Level Questions','20 error spotting questions (4 parts each, or underlined section format). Apply the 12-rule checklist to each. Time: 90 seconds per question. If a sentence sounds fine on first read — that is the trap. SSC specifically writes grammatically-sounding-but-wrong sentences.','Time-saving method: for 4-part questions, test Part A first (subject), then Part B (verb) — 70% of errors are in subject-verb relationship. Only examine C and D if A and B check out.',30),
      ]),
      WD_QR('d78',[
        s('d78-qr1','Height & Distance — Core Theory + 20 PYQs','Standard values: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, sin 30° = 1/2, cos 60° = 1/2, sin 60° = √3/2. Elevation scenario: from point A on ground, angle of elevation to top of building = θ, horizontal distance = d, height h = d·tanθ. Two-building scenario: buildings of heights h1 and h2, distance d apart, find angle between tops. Moving observer: from point A (distant), elevation = α; from point B (closer), elevation = β; distance AB = d. Find h: h = d·tanα·tanβ/(tanβ - tanα). Solve 20 PYQs.','Whenever two angles are given and the scenario involves finding height: ALWAYS draw the diagram first. The height-distance formula becomes obvious from the right triangle once drawn. Students who skip the diagram miss 40% more questions.',50),
        s('d78-qr2','CKT — Software Concepts (10 min)','Software types: System software (OS, device drivers, utilities), Application software (word processors, browsers, games), Programming languages (machine, assembly, high-level). Compilers vs Interpreters: compiler translates entire program at once, interpreter translates line by line. Open source vs proprietary. Database concepts: DBMS (database management system), SQL basics (SELECT, INSERT, UPDATE, DELETE), primary key concept.','Compiler vs Interpreter exam question: Python uses interpreter (executes line by line), C/C++ uses compiler (translates all at once, faster execution but compile step needed). Java uses both (compiled to bytecode, then interpreted by JVM).',10),
      ]),
      WD_GA('d78',[
        s('d78-ga1','Constitutional Bodies — Articles, Appointments, Functions','Constitutional bodies (directly from Constitution): CAG (Article 148, Comptroller & Auditor General, audits government accounts), UPSC (Articles 315-323, conducts civil services exams, chairperson appointed by President), Election Commission (Article 324, superintendence of elections, CEC and ECs appointed by President), Attorney General of India (Article 76, first law officer, appointed by President, advises government). Statutory bodies (Act of Parliament): CBI (Delhi Special Police Establishment Act 1946), NHRC (Protection of Human Rights Act 1993), SEBI (SEBI Act 1992), TRAI (TRAI Act 1997), NHB (National Housing Bank Act 1987).','Trick for constitutional vs statutory: if the article number is mentioned in your notes = constitutional. No article number = likely statutory. For Tier 2, know the specific article for UPSC (315-323), CAG (148), Election Commission (324), and AG (76). These four appear in 90% of questions.',35),
      ]),
    ],
  },
  {
    id:'2026-07-23',dayNumber:79,date:'2026-07-23',phase:4,tier:2,weekNumber:12,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 79 — Reading Comprehension T2 + Statistics + Magnetism',
    promptBlock:`OPERATIVE BRIEFING — DAY 79

Thursday. Four sessions in this week already. The compound effect of daily 3-hour sessions over three weeks is measurable — your Tier 2 baseline is forming. Today's focus: Reading Comprehension at Tier 2 intensity, the Statistics topic that carries 8-10 marks in Paper I, and Magnetism for GA.

ENGLISH — READING COMPREHENSION (TIER 2):
Tier 2 RC passages are 400-600 words from economic, scientific, or social science writing. There are 5 passages in Paper II, each with 4-5 questions (20-25 RC questions total). The question types: direct factual (answer explicitly stated), inferential (answer implied but not stated), vocabulary in context (what does the word X mean in this passage), tone/attitude of the author, title/main idea. Strategy: read the questions BEFORE the passage — you're looking for specific information, not general understanding. Skim for structure: opening (thesis), body (evidence), conclusion (implication).

STATISTICS (TIER 2):
8-10 marks in Paper I (Mathematics section). Core topics: Mean (arithmetic mean formula, weighted mean), Median (for odd n: middle term, for even n: average of two middle terms), Mode (most frequent value), Range (max - min), Mean Deviation (MD = Σ|xi - mean| / n), Variance (σ² = Σ(xi - mean)² / n), Standard Deviation (σ = √variance). Coefficient of variation (CV = σ/mean × 100). Normal distribution concept (bell curve, 68-95-99.7 rule). Correlation: positive/negative, perfect correlation (r = ±1), no correlation (r = 0).

MAGNETISM:
Earth's magnetic field, magnetic poles (geographic vs magnetic), declination and dip, types of magnetic materials (diamagnetic, paramagnetic, ferromagnetic), Oersted's discovery (current-carrying wire creates magnetic field), electromagnets, Faraday's law of electromagnetic induction, Lenz's law, Fleming's left-hand rule (motor) and right-hand rule (generator).`,
    tasks:[
      WD_ENG('d79',[
        s('d79-e1','RC Strategy + 2 Full Tier 2 Passages (5 Qs each)','Read 2 full RC passages (450-550 words each) with 5 questions each. Apply the strategy: scan questions first (note the question types — factual, inferential, vocabulary), then read passage with those questions in mind. For vocabulary-in-context: the correct meaning is the one that FITS the specific context, not the dictionary primary definition. For inference: the answer must be SUPPORTED by passage content, not just logical.','The vocabulary-in-context trap: the word "sanction" can mean both "approve" and "penalize". The passage context tells you which. SSC specifically chooses words with dual/multiple meanings. Never answer vocabulary-in-context from memory — go back and re-read the specific sentence.',40),
        s('d79-e2','Tone & Author Attitude — 10 Questions','10 questions on identifying author tone (critical, appreciative, neutral/objective, sardonic, optimistic, pessimistic, analytical) and purpose. Look for: adjectives the author uses (positive/negative/neutral), adverbs, the overall argument direction (defending/attacking/explaining something).','Author tone shortlist for SSC: objective/neutral (no emotional language, presents both sides), critical (points out flaws, uses words like "however", "fails to", "unfortunately"), appreciative (laudatory, uses "remarkable", "significant", "commendable"). Match tone to option.',20),
      ]),
      WD_QR('d79',[
        s('d79-qr1','Statistics — Measures of Central Tendency + Dispersion + 20 PYQs','Formulas to know cold: Arithmetic Mean = Σxi/n. Weighted Mean = Σwi·xi/Σwi. Median: sort data, for n odd = (n+1)/2th term; for n even = average of (n/2)th and (n/2+1)th terms. Mode = most frequent. Mean Deviation from Mean = Σ|xi-x̄|/n. Variance = Σ(xi-x̄)²/n. SD = √Variance. CV = (SD/Mean)×100. Relationship: Mean - Mode = 3(Mean - Median) [empirical formula]. Solve 20 PYQs across all sub-topics.','Most tested Statistics question in Tier 2: "If each observation is multiplied by k, how does SD change?" Answer: SD also multiplies by k. "If each observation increases by k, how does SD change?" Answer: SD does NOT change (it measures spread, not position). These two variations appear every cycle.',50),
        s('d79-qr2','CKT — Spreadsheets & Presentation Tools (10 min)','MS Excel: rows (1-1048576), columns (A-XFD, max 16,384), cell address (B3 = column B, row 3). Functions: SUM, AVERAGE, MAX, MIN, IF, VLOOKUP, COUNTIF. Chart types: bar, pie, line, scatter. MS PowerPoint: slides, transitions, animations, master slide. File formats: .xlsx (Excel), .pptx (PowerPoint), .csv (comma-separated, universal). Google Sheets vs Excel: cloud vs desktop.','Excel shortcut tested in SSC CKT: Ctrl+Home (go to A1), Ctrl+End (go to last used cell), F2 (edit cell), Ctrl+Shift+L (filter toggle). The SUM function: =SUM(A1:A10) adds cells A1 through A10. SSC tests this exact syntax.',10),
      ]),
      WD_GA('d79',[
        s('d79-ga1','Science — Magnetism + Electromagnetic Induction','Earth\'s magnetic field: Earth acts as a giant bar magnet with south pole near geographic north. Magnetic declination = angle between geographic north and magnetic north. Magnetic dip/inclination = angle between Earth\'s surface and the direction of magnetic field. Materials: Diamagnetic (weakly repelled: bismuth, copper, water), Paramagnetic (weakly attracted: aluminium, oxygen, platinum), Ferromagnetic (strongly attracted: iron, nickel, cobalt). Oersted (1820): current in wire creates circular magnetic field around it. Faraday\'s Law: changing magnetic flux induces EMF. Lenz\'s Law: induced current opposes the change causing it. Fleming\'s Left Hand Rule: for motors (force on current-carrying conductor in magnetic field). Right Hand Rule: for generators (direction of induced current).','Memory trick for diamagnetic/paramagnetic/ferromagnetic: "BCA water" — Bismuth, Copper, Aluminium, water = dia and para. Iron/Nickel/Cobalt = ferro. In exam: "which of these is diamagnetic?" → if bismuth is an option, it is always correct.',35),
      ]),
    ],
  },
  {
    id:'2026-07-24',dayNumber:80,date:'2026-07-24',phase:4,tier:2,weekNumber:12,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 80 — Vocabulary T2 + Data Interpretation Mixed + Computer Networks',
    promptBlock:`OPERATIVE BRIEFING — DAY 80

Friday. Week 12's final weekday. This is your audit session — look at the four days behind you and identify where you slipped. Whatever was hardest this week (error spotting? statistics? RC?) gets extra attention in Sunday's deep study.

ENGLISH — VOCABULARY (TIER 2 ADVANCED):
Tier 2 tests vocabulary at a higher register than Tier 1. The synonyms/antonyms are drawn from GRE-equivalent word lists, not basic SSC wordlists. The 3 strategies: (1) Root word analysis — knowing that "ben-" means good (benevolent, beneficent, benign) unlocks 8-10 words. (2) Elimination — even if you don't know the answer, you can eliminate options that are clearly wrong or have opposite connotation. (3) Context — in sentence-based vocabulary questions, the surrounding words reveal the register (positive/negative, formal/informal, extreme/moderate).

DATA INTERPRETATION — MIXED SETS:
Tier 2 DI is the highest-difficulty Quant topic and carries 10-12 marks. Mixed DI means a question set using TWO data sources — a table AND a bar graph, or a pie chart AND a line graph. You must cross-reference between them. The skill: extract the right number from the right source without confusing the two. Common operations: percentage change, ratio, difference, finding the value when a percentage is given.

COMPUTER NETWORKS:
The most consistently tested CKT topic after basic hardware. Network types: LAN (Local Area Network, within a building), MAN (Metropolitan, city-wide), WAN (Wide Area, global — Internet is a WAN). Topologies: Star (central hub, most common), Bus (single cable, all connected), Ring (circular, each device connected to two others), Mesh (every device connected to every other). Network devices: Hub (broadcasts to all), Switch (sends to specific device), Router (connects different networks), Modem (modulates/demodulates for internet). Protocols: HTTP/HTTPS, FTP (file transfer), SMTP (send email), POP3/IMAP (receive email).`,
    tasks:[
      WD_ENG('d80',[
        s('d80-e1','Vocabulary — Root Word Analysis + 60 Advanced Words','Learn 15 Latin/Greek roots with 4 words each: BEN (good): benevolent, beneficent, benign, beneficial. MAL (bad): malevolent, malicious, malign, malignant. OMNI (all): omniscient, omnipotent, omnivore, omnipresent. PHIL (love): philanthropist, philatelist, bibliophile, philosophy. MISO (hate): misanthrope, misogynist, misogamy, misology. PER (through/thoroughly): pervasive, persistent, perennial, perfidious. TRANS (across): transgress, transient, transcend, transparent. BELLI (war): belligerent, bellicose, antebellum, rebel. VER (truth): verify, verity, aver, veracious. LOQUI (speak): eloquent, loquacious, colloquial, soliloquy. SPEC/SPIC (see): spectator, conspicuous, perspicacious, auspicious. VIT/VIV (life): vital, vivid, vivacious, revive. CRED (believe): credulous, incredulous, credentials, credence. TEMP (time): temporal, contemporary, temporary, extemporaneous. MORT (death): mortal, immortal, mortify, mortgage.','The exam\'s most powerful trick: if you know BEN=good and MAL=bad, you can eliminate 50% of synonym/antonym options instantly based on positive/negative connotation alone, even without knowing the exact word.',35),
        s('d80-e2','Vocabulary MCQ — 25 Advanced Synonym/Antonym Questions','25 questions at Tier 2 difficulty. Apply root analysis and elimination. For each wrong answer: note the root and add to your vocabulary bank.','Target: 20+/25. If below 18, your root word knowledge is the gap — spend 10 extra minutes reviewing the roots list.',25),
      ]),
      WD_QR('d80',[
        s('d80-qr1','Data Interpretation — Mixed Sets (Table + Graph) — 2 full sets','Solve 2 complete DI sets, each using two data sources. Set 1: Table (company-wise sales) + Bar chart (quarterly breakdown). 5 questions. Set 2: Pie chart (sector-wise investment) + Line graph (year-wise growth). 5 questions. Time: 15 minutes per set. Key skill: identify which source answers which question BEFORE calculating.','DI time trap: students spend 5 minutes calculating a value from the wrong source and then have to redo it. The fix: read all 5 questions in the set BEFORE opening the data. Then note "Q1 = from table, Q2 = from graph, Q3 = cross-reference". This front-loaded reading saves 4-5 minutes per set.',40),
        s('d80-qr2','CKT — Computer Networks (10 min)','LAN/MAN/WAN definitions. Topologies: Star (most common, central hub/switch, single point of failure is hub), Bus (coaxial cable, obsolete, cheap), Ring (token passing), Mesh (fault-tolerant, expensive). Devices: Hub (Layer 1, broadcasts), Switch (Layer 2, MAC addresses), Router (Layer 3, IP addresses, connects different networks). Protocols tested: SMTP port 25, HTTP port 80, HTTPS port 443, FTP port 21, SSH port 22, DNS port 53.','Port numbers are tested in CKT: HTTP=80, HTTPS=443, FTP=21, SMTP=25, POP3=110, IMAP=143, DNS=53. The question format: "Which port does HTTP use?" Learn the top 7.',10),
      ]),
      WD_GA('d80',[
        s('d80-ga1','Week 12 GA Audit + Weak Topic Revision (35 min)','Review all GA topics covered this week: Indian Geography (physical features), Economy (RBI rates, budget), Constitutional bodies (articles), Magnetism. Re-test yourself: write 5 key facts from each topic WITHOUT looking at notes. Anything you can\'t recall = weak spot. Spend remaining time reinforcing those specific facts.','The goal of this audit: find the 3-4 facts you can\'t recall and fix them before the weekend mock. If you can recall them now, you\'ll answer them correctly under exam pressure.',35),
      ]),
    ],
  },
  {
    id:'2026-07-25',dayNumber:81,date:'2026-07-25',phase:4,tier:2,weekNumber:12,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 81 — Full Paper I Mock (Math) + Deep Study: P&C + Probability + Statistics',
    promptBlock:`OPERATIVE BRIEFING — DAY 81

Saturday. Week 12's mock day — Paper I (Mathematics/Quantitative Abilities). Tier 2 Paper I is 100 questions in 2 hours 15 minutes (135 minutes). That gives you 81 seconds per question — significantly more than Tier 1's 36 seconds. The extra time creates a different trap: over-thinking. Students who solve Tier 1 with speed suddenly slow down in Tier 2 because they have "more time". Do not fall into this trap. Use the extra time to check your work on the questions you answered, not to spend 5 minutes on one difficult question.

PAPER I STRUCTURE:
- Arithmetic: 20-25 questions (P&L, SI/CI, Ratio, Percentage, Average, TW, STD)
- Algebra: 15-20 questions (Equations, Polynomials, Identities)
- Geometry: 15-20 questions (Triangles, Circles, Polygons, Mensuration)
- Trigonometry: 10-12 questions (Identities, H&D)
- Statistics & Probability: 8-10 questions
- DI: 10-12 questions (usually 2 sets of 5-6)

TARGET FOR TODAY:
Score 70+/100 in the mock. Section-wise targets: Arithmetic 20+, Algebra 15+, Geometry 14+, Trigonometry 8+, Stats 7+, DI 8+.

DEEP STUDY FOCUS:
After the mock analysis, the 4-hour deep study block addresses this week's two new topics: P&C/Probability (abstract logic) and Statistics (formula application). These are the topics most students under-prepare for Tier 2 — they are your scoring opportunity if you master them now.`,
    tasks:[
      WE_MT('d81',[
        s('d81-mt1','Full Paper I Mock — 100 Questions in 135 Minutes','Take a complete Tier 2 Paper I mock under strict exam conditions. Time: 2 hours 15 minutes. No phone, no breaks. Strategy: Arithmetic first (fastest), then Algebra, then DI (fixed time 25 min), then Geometry, Trig last. If a question exceeds 2.5 minutes, mark and move — return at end.','In Tier 2, skipping and returning is MORE valuable than Tier 1 because you have more total time. Mark questionable answers clearly. In the last 10 minutes, review your marked questions — don\'t attempt new ones from scratch.',135),
        s('d81-mt2','Score, Section Analysis, Error Categorization','Calculate total score. Section-wise breakdown. For each wrong answer: (a) formula error, (b) calculation error, (c) concept gap, (d) misread question. Category (c) needs today\'s deep study. Categories (a) and (b) need practice. Category (d) needs careful reading practice.',20),
      ]),
      WE_DS('d81',[
        s('d81-ds1','P&C Advanced — Arrangements with Restrictions','Restriction types: (1) Certain elements MUST be together → treat as one unit, arrange the unit internally. Example: 5 people where A and B must sit together = 4! × 2! arrangements. (2) Certain elements must NOT be together → (total arrangements) - (arrangements where they ARE together). (3) Alternating arrangements: boys and girls alternating = 2 × (n/2)! × (n/2)! for equal numbers. (4) Circular with restriction: fix one person, then apply restriction to remaining. Solve 15 advanced PYQs.',50),
        s('d81-ds2','Probability — Advanced Problems + Conditional','Bayes\' Theorem application: P(B|A) = P(A|B)·P(B) / [P(A|B)·P(B) + P(A|B\')·P(B\')]. Geometric probability: favourable length/area / total length/area. Expected value: E(X) = Σxi·P(xi). Binomial distribution concept: P(X=k) = nCk·p^k·(1-p)^(n-k). Solve 10 advanced probability PYQs including 2-3 Bayes-type problems.',50),
        s('d81-ds3','Statistics — Correlation + Regression + Normal Distribution','Correlation coefficient r: ranges from -1 to +1. r = +1 (perfect positive), r = -1 (perfect negative), r = 0 (no correlation). Rank correlation (Spearman): r = 1 - 6Σd²/(n(n²-1)) where d = difference in ranks. Regression lines: Y on X = Y - Ȳ = byx(X - X̄). Regression coefficient byx = r·(σy/σx). Normal distribution: mean = median = mode. 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD. Z-score: Z = (X - μ)/σ. Solve 10 statistics PYQs.',60),
        s('d81-ds4','Week 12 Quant Integration — Mixed 25 Qs','25 questions mixing all Week 12 Quant topics: P&C (6), Probability (6), Statistics (6), H&D (4), Coordinate Geometry (3). Timed: 35 minutes. Target: 20+/25. Treat as a mini-mock.',35),
      ]),
      WE_REV('d81',[
        s('d81-rev1','Paper I Mock Review — Weak Section Deep Drill','For your weakest section from today\'s mock: solve 15 more questions from that topic. Not for new learning — for reinforcing what was shaky under exam pressure.',40),
        s('d81-rev2','English — Reading Comprehension Speed Practice (20 min)','One full RC passage (500 words) with 5 questions. Time: 12 minutes maximum. Goal: maintain comprehension speed and accuracy heading into tomorrow\'s Paper II mock.',20),
      ]),
    ],
  },
  {
    id:'2026-07-26',dayNumber:82,date:'2026-07-26',phase:4,tier:2,weekNumber:12,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 82 — Full Paper II Mock (English) + Deep Study: RC + Error Spotting + Vocabulary',
    promptBlock:`OPERATIVE BRIEFING — DAY 82

Sunday. Week 12's second mock day — Paper II (English Language and Comprehension). Tier 2 Paper II is 200 questions in 2 hours 15 minutes. That is 40 seconds per question — deceptively fast for an English paper. The trap: vocabulary questions that you should answer in 10 seconds are answered in 45 seconds because you over-deliberate. Build automatic recognition.

PAPER II STRUCTURE (200 Questions):
- Error Recognition/Spotting: ~20 questions
- Sentence Improvement/Correction: ~20 questions
- Active/Passive, Direct/Indirect: ~10 questions
- Rearrangement of Sentences: ~10 questions (Parajumbles)
- Cloze Test: ~15 questions
- Comprehension Passages: ~25 questions (5 passages × 5 Qs)
- Vocabulary — Synonyms: ~15 questions
- Vocabulary — Antonyms: ~15 questions
- Idioms & Phrases: ~10 questions
- One Word Substitution: ~10 questions
- Fill in the Blanks: ~15 questions
- Spelling: ~10 questions
- Miscellaneous Grammar: ~15 questions

TARGET: 160+/200. Section minimums: Vocabulary 25+/30, Error Spotting 16+/20, RC 20+/25, Cloze 12+/15.

WEEK 12 CLOSE-OUT:
After today, you have completed three full weeks of Tier 2 Foundation. Your daily English and Quant sessions have covered: Parajumbles, Cloze, Error Spotting, RC (English) + P&C, Probability, Statistics, H&D, Coord Geometry, DI Mixed (Quant). Week 13 begins the Tier 2 Intensification phase — mock frequency increases.`,
    tasks:[
      WE_MT('d82',[
        s('d82-mt1','Full Paper II Mock — 200 Questions in 135 Minutes','Complete Tier 2 Paper II under strict exam conditions. Strategy: do Vocabulary (Syn/Ant/Idiom/OWS) first — fastest section, builds confidence. Then Error Spotting and Sentence Improvement. Then Cloze. Then Parajumbles. Leave RC for last — most time-intensive but questions are grouped (5 per passage).','Time allocation: Vocabulary blocks = 30 min (100 Qs × 18 sec each). Grammar blocks = 35 min. Cloze = 15 min. Parajumbles = 12 min. RC = 40 min (5 passages × 8 min). Leave 3 min buffer. If you finish vocabulary in 22 min, bank that time for RC.',135),
        s('d82-mt2','Score Analysis — Section-wise and Error Category','Score each section separately. For vocabulary wrong answers: note the word — these go into your "final 50" list. For grammar errors: identify which of the 12 rules you violated. For RC errors: direct fact vs inference — know which type trips you.',20),
      ]),
      WE_DS('d82',[
        s('d82-ds1','RC Advanced — Inference Questions + Tone Questions','Inference is the hardest RC question type. The answer is NOT stated in the passage — it is LOGICALLY DERIVABLE from what IS stated. Test each inference option against the passage: "Is this supported by the text?" If the passage doesn\'t support it → eliminate. Common trap: options that are TRUE in general knowledge but NOT supported by this specific passage. The passage is the only source of truth. Practice 3 inference-heavy passages with 5 Qs each.',60),
        s('d82-ds2','Error Spotting — Advanced Practice (Subject-Verb + Pronoun)','20 advanced error spotting questions focusing on: compound subjects joined by "neither/nor", "either/or" (verb agrees with nearest subject), indefinite pronouns (everyone/somebody/nobody = singular), relative pronouns (who/whom/which/that), dangling and misplaced modifiers. These are the subtler errors that distinguish 160/200 from 145/200 in Paper II.',45),
        s('d82-ds3','Vocabulary Integration — Root Words + OWS + Idiom Review','Review all vocabulary coverage from Week 12: 60 root-based words, 50 OWS words, 40 idioms (from Week 11). Flash-test each word — write the meaning WITHOUT looking. Any word you hesitate on for more than 3 seconds goes to your "final 50" review list. Target: know all 150 words cold.',60),
        s('d82-ds4','Week 12 English Integration — Mixed 50 Qs','50-question mixed English practice: Error Spotting (10), Sentence Improvement (8), Syn/Ant (10), OWS (6), Idioms (6), Cloze blanks (5), Fill-in-the-blank (5). Time: 35 minutes. Target: 42+/50.',35),
      ]),
      WE_REV('d82',[
        s('d82-rev1','Week 12 Complete Review — Quant + English','Write down: Top 3 strongest topics from this week. Top 3 weakest topics. For each weak topic: write the exact gap (formula? application? speed?). This list feeds into Week 13 planning.', 30),
        s('d82-rev2','Week 13 Preview — Prepare for Intensification Phase','Week 13 (Jul 27 - Aug 2) marks the start of the intensification phase. Mock frequency increases to 2 full-length mocks per weekend. Weekday sessions begin including sectional mocks in addition to topic study. Review the Week 13 calendar and set score targets for next Saturday\'s Paper I mock.',30),
      ]),
    ],
  },
];
