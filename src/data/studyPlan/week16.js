// Week 16 — Aug 17 (Mon) to Aug 23 (Sun) — Phase 5: Tier 2 Final Acceleration | Days 104-110
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
    title:'Day 104 — RC Advanced: Inference + Tone T2 + Science: Light & Optics + Statistics',
    promptBlock:`OPERATIVE BRIEFING — DAY 104

Week 16. Monday. The final acceleration week of Phase 5. After this week, the plan shifts to terminal revision. Every day from now carries double weight — what you fix in Week 16, you carry into the exam as a weapon. What you leave unfixed, you carry as a liability.

ENGLISH — RC ADVANCED: INFERENCE AND TONE QUESTIONS:
Inference questions and tone questions are the two highest-difficulty RC question types. Inference: what can logically be concluded from the passage — not stated explicitly but must be true given what IS stated. The correct inference is always the most conservative conclusion. Tone: the author's attitude toward the subject. Tone descriptors: objective, ironic, sarcastic, laudatory, critical, ambivalent, nostalgic, satirical, didactic. Identify tone from word choices: "claimed" vs "demonstrated" vs "proved" signals the author's scepticism or confidence.

SCIENCE — LIGHT AND OPTICS:
Reflection: angle of incidence = angle of reflection. Plane mirror: virtual, erect, laterally inverted, same size. Concave mirror: converging, focal point in front. Convex mirror: diverging, always virtual+erect+diminished. Refraction: light bends when passing between media. Snell's Law: n1 sinθ1 = n2 sinθ2. Total internal reflection: when angle of incidence > critical angle (used in optical fibre). Prism: disperses white light into spectrum (VIBGYOR). Lens: convex = converging, concave = diverging. Power of lens P = 1/f (dioptres).

QUANT — STATISTICS:
Mean: sum of values / count. Median: middle value (sorted). Mode: most frequent value. For grouped data: Mean by step deviation, Median = L + [(N/2 - cf)/f]×h, Mode = L + [(f1-f0)/(2f1-f0-f2)]×h. Standard deviation measures spread. Variance = (SD)². Range = max - min. These formulas cover the entire Statistics syllabus in Tier 2.`,
    tasks:[
      WD_ENG('d104','2026-08-17',[
        s('d104-e1','RC Inference + Tone — 2 Advanced Passages (5 Qs each)','Passage 1: 4 factual + 1 inference. Passage 2: 3 factual + 1 inference + 1 tone. Method for INFERENCE: for each option, ask "must this be true if the passage is true?" — not "could this be true" or "is this true in real life". Must = logically entailed. Method for TONE: make a list of the 5 most emotionally loaded words in the passage. What do they collectively signal? Time: 30 minutes. Target: 8/10.','Tone question wrong answer pattern: the option that describes an extreme emotion ("furious", "ecstatic", "devastated") is almost never correct — academic and journalistic passages use measured tones. The correct tone is usually from the moderate register: critical, analytical, nostalgic, appreciative.',30),
        s('d104-e2','CKT Daily — Internet Protocols and Security (10 min)','HTTP: HyperText Transfer Protocol (web pages). HTTPS: HTTP Secure (encrypted — SSL/TLS). FTP: File Transfer Protocol. SMTP: Simple Mail Transfer Protocol (email sending). POP3/IMAP: email receiving. SSH: Secure Shell (remote server access). URL: Uniform Resource Locator. IP: Internet Protocol. TCP: Transmission Control Protocol — reliable, ordered delivery. UDP: User Datagram Protocol — fast, no delivery guarantee. SSL/TLS: encryption protocols for HTTPS. Firewall: blocks unauthorized access.',10),
      ]),
      WD_GA('d104','2026-08-17',[
        s('d104-ga1','Light and Optics — Mirrors, Lenses, Dispersion','Mirror formula: 1/v + 1/u = 1/f. Magnification m = -v/u. Sign convention: distances measured from pole, incident light direction = positive. Concave mirror: f negative (real focus). Convex mirror: f positive (virtual focus — used in rear-view mirrors because gives wider field of view). Lens formula: 1/v - 1/u = 1/f. Power P = 1/f (metres) = dioptres. Concave lens: diverging, negative power, treats myopia. Convex lens: converging, positive power, treats hypermetropia. Dispersion: prism separates white light → VIBGYOR (violet bends most — highest frequency, red bends least). Rainbow = natural dispersion by water droplets.','Most-tested optics fact: "Why is convex mirror used as a rear-view mirror?" = gives erect, diminished, virtual image — wider field of view. "Which mirror is used as shaving mirror?" = concave (gives magnified image when object inside focal length). These two are permanent exam staples.',25),
        s('d104-ga2','Current Affairs + Science Rapid-Fire (20 min)','15 min current affairs scan. 5 min: rapid-fire science recap — name the mirror for rear-view, shaving, solar furnace. Which lens treats myopia? Formula for power of lens. Refraction law name. What is total internal reflection used for? This micro-recall locks yesterday\'s content before it fades.',20),
      ]),
      WD_QR('d104','2026-08-17',[
        s('d104-qr1','Statistics — All Measures + 20 PYQs (40 min)','Formula revision (5 min): write AM, Median, Mode formulas for both ungrouped and grouped data. Then 20 PYQs: Mean (5), Median (4), Mode (4), Grouped data (4), SD/Variance concept (3). Common Tier 2 type: "the mean of 5 numbers is 10. If one number is excluded, the mean becomes 8. Find the excluded number" → 5×10 - 4×8 = 50 - 32 = 18.','Statistics arithmetic shortcut: ALWAYS use the formula (new total = new mean × new count) to find a removed/added value. Do not list all numbers. This shortcut saves 45 seconds per statistics problem.',40),
        s('d104-qr2','CKT Recall — HTTP vs HTTPS + TCP vs UDP (5 min)','Difference between HTTP and HTTPS. Difference between TCP and UDP. What does SSL do? What is an IP address? No notes.','5-minute end-of-session recall.',5),
      ]),
    ],
  },
  {
    id:'2026-08-18',dayNumber:105,date:'2026-08-18',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 105 — Sentence Completion + Word in Context T2 + Indian Rivers + Time & Work Advanced',
    promptBlock:`OPERATIVE BRIEFING — DAY 105

Tuesday. Sentence Completion and Word-in-Context are the two question types that most heavily reward contextual vocabulary. Unlike OWS (where the definition is given), these require fitting the right word into a semantic context. The trap is always the word that is grammatically correct but semantically off.

ENGLISH — SENTENCE COMPLETION + WORD IN CONTEXT:
Sentence Completion: a sentence with one or two blanks. The correct answer completes the meaning coherently AND maintains the grammatical structure. When two blanks are present — the words must relate logically (contrast: "although X, Y" → X and Y are opposite in sentiment; consequence: "because X, Y" → Y follows from X). Word-in-Context: the underlined word in a passage, asked for its meaning AS USED IN THAT CONTEXT. The word often has a primary meaning (dictionary) and a contextual meaning — the question tests the contextual one.

GEOGRAPHY — INDIAN RIVERS:
Himalayan rivers (perennial — snow-fed): Indus, Ganga, Brahmaputra and their tributaries. Peninsular rivers (seasonal — rain-fed): Godavari, Krishna, Mahanadi, Kaveri, Narmada, Tapi. West-flowing rivers: Narmada, Tapi (flow into Arabian Sea — unusual as most peninsular rivers flow east). Longest river: Ganga (2525 km). Largest river by volume: Brahmaputra. Ganga originates: Gangotri glacier. Brahmaputra origin: Manasarovar, Tibet (called Tsangpo in Tibet, Brahmaputra in India, Jamuna in Bangladesh).

QUANT — TIME & WORK ADVANCED:
Work = Rate × Time. If A does a job in n days, A's rate = 1/n per day. Together: rates add. Pipes: filling rate positive, draining rate negative. Worker efficiency ratio: if A is x times as efficient as B, A takes 1/x of B's time. Work and wages: wages proportional to work done. If A, B, C together finish in T days and A, B alone finish in Tab days, then C alone = 1/(1/T - 1/Tab).`,
    tasks:[
      WD_ENG('d105','2026-08-18',[
        s('d105-e1','Sentence Completion + Word-in-Context — 20 Questions','10 Sentence Completion (mix of single-blank and double-blank) + 10 Word-in-Context. For double-blank: use the logic connector to determine the relationship (contrast/consequence/addition) between the two blanks, then match. For WiC: read the sentence 2 lines before and 2 lines after the underlined word — what role does it play in the immediate argument? Time: 25 minutes. Target: 17/20.','Double-blank elimination strategy: for each option pair, check if BOTH words fit — if either word fails, eliminate the whole option. This converts a 4-option question into a 1-2 option question by killing incorrect pairs early.',25),
        s('d105-e2','CKT Daily — Artificial Intelligence Basics (10 min)','AI: machines simulating human intelligence. ML (Machine Learning): AI learns from data without explicit programming. Deep Learning: ML using neural networks with many layers. NLP (Natural Language Processing): AI understanding human language. Computer Vision: AI interpreting images. Chatbot: AI for conversation. Key applications: recommendation systems (Netflix, YouTube), facial recognition, self-driving cars, medical diagnosis. ChatGPT: Large Language Model (LLM). Most tested: what is Machine Learning, what is AI, difference between AI and ML.',10),
      ]),
      WD_GA('d105','2026-08-18',[
        s('d105-ga1','Indian Rivers — Himalayan vs Peninsular + Key Facts','HIMALAYAN RIVERS — Indus system: Indus (origin: Mansarovar, Tibet), tributaries Jhelum, Chenab, Ravi, Beas, Sutlej (all in Pakistan after partition except upper courses). Ganga system: Ganga (Gangotri → Rishikesh → Haridwar → Allahabad/Prayagraj → Varanasi → Patna → Kolkata → Bay of Bengal). Major Ganga tributaries from north: Yamuna (joins at Prayagraj), Ghaghra, Gandak, Kosi. From south: Chambal, Son, Damodar. Brahmaputra: Tsangpo (Tibet) → Dihang (Arunachal) → Brahmaputra (Assam) → Jamuna (Bangladesh) → Bay of Bengal. PENINSULAR RIVERS — West-flowing (Arabian Sea): Narmada (Amarkantak, MP), Tapi (Satpura). East-flowing (Bay of Bengal): Mahanadi (Chhattisgarh), Godavari (Nashik, longest peninsular = 1465km), Krishna (Mahabaleswar), Kaveri (Brahmagiri, Karnataka).','River origin + direction is the most-tested river geography fact. "Narmada and Tapi are unusual because they flow west" — both flow in rift valleys (grabens) which is why they flow against the typical east-ward peninsular drainage. This explanation makes the fact memorable and un-forgettable.',25),
        s('d105-ga2','Polity Revision — Directive Principles + Fundamental Duties (20 min)','DPSP (Art 36-51): Part IV. Non-justiciable (cannot be enforced by courts) but fundamental to governance. Inspired by: Irish Constitution. Key DPSPs: Art 39A (free legal aid), Art 40 (gram panchayats), Art 44 (uniform civil code), Art 45 (early childhood care), Art 48 (protection of cows). FUNDAMENTAL DUTIES (Art 51A, Part IVA): Added by 42nd Amendment 1976 (originally 10, 11th added by 86th Amendment 2002). Duties include: respect Constitution, national anthem, flag; protect sovereignty; promote harmony; protect environment; develop scientific temper; safeguard public property; strive for excellence; parents to provide education (6-14 years).','DPSPs vs FRs distinction: FRs are justiciable (court-enforceable), DPSPs are non-justiciable. However, courts have increasingly read DPSPs into the interpretation of FRs (especially Art 21). The 42nd Amendment tried to give DPSPs primacy over FRs — but SC struck this down in Minerva Mills case (1980).',20),
      ]),
      WD_QR('d105','2026-08-18',[
        s('d105-qr1','Time & Work Advanced — Pipes & Cisterns + Wages + 20 PYQs (40 min)','Formulas: A alone in a days, B alone in b days → together = ab/(a+b) days. Pipe A fills in p hours, Pipe B drains in q hours → net fill time = pq/(q-p) if q>p. Wages ∝ work done: if A:B work ratio = 3:2, their wages split = 3:2. Solve 20 PYQs: basic T&W (5), pipes (5), efficiency ratio (4), wages (3), negative work (3). Common Tier 2 type: "A can do a job in 12 days, B in 15 days. They work together for 4 days. B leaves. How long does A take to finish?" → work done in 4 days = 4(1/12+1/15) = 4×(9/60) = 3/5. Remaining 2/5 done by A alone = (2/5)×12 = 24/5 days.','T&W combined work shortcut: always convert individual rates to per day fractions and add. Never work with the days directly. Adding 12 and 15 to get "together time = 27 days" is the most common student error. The correct formula gives ab/(a+b) = 180/27 ≈ 6.67 days.',40),
        s('d105-qr2','CKT Recall — AI/ML Basics (5 min)','What is ML? Difference between ML and AI? What is NLP? Name one real-world ML application. What is a Large Language Model? No notes.','5-minute recall.',5),
      ]),
    ],
  },
  {
    id:'2026-08-19',dayNumber:106,date:'2026-08-19',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 106 — Spotting Errors Advanced T2 + Indian Constitution: Amendments + Ratio & Proportion',
    promptBlock:`OPERATIVE BRIEFING — DAY 106

Wednesday. Advanced error spotting in Tier 2 goes beyond basic SVA — it tests misuse of conjunctions ("neither/nor" vs "either/or"), dangling modifiers, sequence of tenses in complex sentences, and the correct use of relative pronouns. Today covers all four of these advanced patterns.

ENGLISH — ADVANCED ERROR SPOTTING:
Four advanced patterns: (1) Neither/Nor, Either/Or: verb agrees with the subject closer to it. "Neither the teacher nor the students ARE..." (plural closer). (2) Dangling modifier: "Walking down the street, the trees were beautiful" — who was walking? Should be "...I saw beautiful trees." (3) Sequence of tenses: "He said he WAS going" not "He said he IS going." (4) Relative pronouns: "who" for persons, "which" for things, "that" for both (restrictive clauses only), "whose" for possession of both.

POLITY — CONSTITUTIONAL AMENDMENTS:
Key amendments that appear in every Tier 2: 1st (restrictions on FR 19), 7th (reorganisation of states), 42nd (Emergency, added socialist+secular+integrity to Preamble, DPSPs over FRs — struck down in Minerva Mills), 44th (restored FR 19, deleted right to property as FR), 52nd (anti-defection law, Tenth Schedule), 61st (voting age 21→18), 73rd/74th (Panchayati Raj/Urban local bodies), 86th (Art 21A — Right to Education), 101st (GST — inserted Art 246A), 103rd (EWS reservation — 10% for economically weaker sections).

QUANT — RATIO & PROPORTION:
Ratio a:b = a/b. Equivalent ratio: multiply/divide both terms by same number. Proportion: a:b = c:d → ad = bc. Compound ratio: (a:b)×(c:d) = ac:bd. Componendo-dividendo: if a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d). Mixture: two solutions mixed — weighted average rule. Alligation: |price1 - mean| : |price2 - mean| = quantity2 : quantity1.`,
    tasks:[
      WD_ENG('d106','2026-08-19',[
        s('d106-e1','Advanced Error Spotting — 20 Questions (4 Advanced Patterns)','5 questions each on: (1) Neither/nor+either/or verb agreement. (2) Dangling/misplaced modifier. (3) Sequence of tenses in reported speech and conditional clauses. (4) Relative pronoun usage (who/which/that/whose). Time: 25 minutes. Target: 17/20. Every wrong answer: identify which pattern it was and re-read the rule.','Dangling modifier test: cover the main clause, read only the opening phrase. Ask "what is performing this action?" If the answer is not the subject of the main clause — it is dangling. Fix: rewrite so the subject of the modifier = subject of the main clause.',25),
        s('d106-e2','CKT Daily — Cloud Computing (10 min)','Cloud computing: delivering computing services (servers, storage, databases, networking, software) over the internet. Types: IaaS (Infrastructure as a Service: virtual machines, storage — AWS EC2), PaaS (Platform as a Service: development platform — Google App Engine), SaaS (Software as a Service: software via browser — Gmail, MS Office 365). Deployment: Public cloud, Private cloud, Hybrid cloud. Benefits: scalability, cost efficiency, accessibility. Key providers: AWS (Amazon), Azure (Microsoft), GCP (Google). Most tested: SaaS vs IaaS vs PaaS definitions.',10),
      ]),
      WD_GA('d106','2026-08-19',[
        s('d106-ga1','Constitutional Amendments — Top 15 Most-Tested','1st Amendment (1951): Art 15(4) — special provisions for backward classes; reasonable restrictions on Art 19. 7th (1956): State reorganisation (linguistic basis). 24th (1971): Parliament can amend any part including FRs. 42nd (1976): Added socialist+secular+integrity to Preamble; 10 Fundamental Duties; extended emergency provisions. 44th (1978): Right to Property removed as FR (now Art 300A — legal right); restored Art 19 freedoms curtailed by 42nd; restricted proclamation of emergency. 52nd (1985): Anti-defection law (Tenth Schedule). 61st (1988): Voting age 21→18. 69th (1991): Delhi got NCT status. 73rd (1992): Panchayati Raj (11th Schedule, 29 subjects). 74th (1992): Urban Local Bodies (12th Schedule, 18 subjects). 86th (2002): Art 21A — Right to Education (6-14 yrs). 91st (2003): Cap on Council of Ministers (15% of House). 97th (2011): Cooperative societies added as FR. 99th (2014): National Judicial Appointments Commission (struck down by SC). 101st (2016): GST — Art 246A. 103rd (2019): 10% EWS reservation.','42nd Amendment is called "Mini Constitution" — it made the most wide-ranging changes. 44th Amendment undid many of the 42nd. This pair is tested together: "Which amendment removed the right to property from Fundamental Rights?" = 44th. "Which amendment added the word secular to the Preamble?" = 42nd.',25),
        s('d106-ga2','Geography — Natural Resources + Energy (20 min)','Coal: Jharkhand (Jharia = largest coalfield), West Bengal (Raniganj), Chhattisgarh, Odisha. Oil: Gujarat (Ankleshwar), Assam (Digboi — oldest oil well, 1889), Rajasthan (Barmer), offshore Mumbai High. Natural Gas: associated with oil fields. Nuclear: Kudankulam (Tamil Nadu), Tarapur (Maharashtra — first), Narora (UP), Rawatbhata (Rajasthan). Solar: Rajasthan (Bhadla Solar Park — largest in India), Gujarat. Wind: Tamil Nadu (Muppandal), Gujarat, Rajasthan, Andhra Pradesh. Tidal: Kutch (experimental). Geothermal: Manikaran (HP, experimental).','Digboi oil well question: "Where is India\'s oldest oil refinery/well?" = Digboi, Assam (1889). "What is Jharia known for?" = Largest coalfield in India. "Where is India\'s largest solar park?" = Bhadla, Rajasthan. These three location-based resource questions are perennial.',20),
      ]),
      WD_QR('d106','2026-08-19',[
        s('d106-qr1','Ratio & Proportion + Alligation — 20 PYQs (40 min)','Solve 20: Basic ratio (3), Proportion (3), Compound ratio (2), Componendo-dividendo (3), Mixture problems (4), Alligation rule (5). Alligation setup: create a cross — mean price in centre, two prices at top corners, differences in bottom corners. The diagonal differences give the ratio of quantities.','Alligation for percentage mixture: if 40% solution mixed with 80% solution to get 60% solution → alligation cross: |40-60|=20 (quantity of 80%), |80-60|=20 (quantity of 40%). Ratio = 20:20 = 1:1. Equal quantities of each. This trick works for profit%, concentration%, speed — any "average" problem.',40),
        s('d106-qr2','CKT Recall — IaaS vs PaaS vs SaaS (5 min)','Define: IaaS, PaaS, SaaS. Give one example of each. What is the main difference between public and private cloud? No notes.','5-minute recall.',5),
      ]),
    ],
  },
  {
    id:'2026-08-20',dayNumber:107,date:'2026-08-20',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 107 — Comprehension Passage Strategy T2 + Indian Economy Advanced + Speed Distance Time',
    promptBlock:`OPERATIVE BRIEFING — DAY 107

Thursday. One week before the Phase 5 conclusion. RC strategy at Tier 2 level is about one thing: extracting maximum marks in minimum time. The passages are 500-700 words. The questions are 5-7 per passage. By this stage, your passage reading should be active — annotating as you read, linking to questions.

ENGLISH — RC STRATEGY: ANNOTATED ACTIVE READING:
Active reading protocol: (1) Before reading: scan all questions, categorise each (F=factual, I=inference, T=tone, V=vocabulary-in-context, M=main idea). (2) While reading: mentally or physically mark the paragraph that answers each F question. (3) After reading: answer F questions first (direct), then M (now you have context), then I, then T/V (require re-reading). This sequence minimises time spent re-reading the entire passage.

ECONOMY ADVANCED — BANKING AND FISCAL POLICY:
Budget: Union Budget presented by Finance Minister (Feb 1 since 2017, earlier Feb 28). Revenue vs Capital Budget: Revenue (taxes, fees → operational expenses) vs Capital (loans, investment assets). Fiscal Deficit: total government expenditure - total revenue receipts (including non-debt capital receipts) = how much government borrows. FRBM Act 2003: Fiscal Responsibility and Budget Management — mandates reducing fiscal deficit. Direct taxes: income tax, corporate tax (CBDT). Indirect taxes: GST (CBEC → CBIC). National income = GDP at Factor Cost.

QUANT — SPEED, DISTANCE, TIME ADVANCED:
Distance = Speed × Time. Relative speed (same direction): |S1-S2|. Opposite direction: S1+S2. Train crossing: (length of train + length of platform)/speed = time. Train crossing another train: (L1+L2)/(S1+S2 if opposite, |S1-S2| if same direction). Boat and stream: downstream = b+r, upstream = b-r. Speed of boat = (downstream+upstream)/2. Speed of stream = (downstream-upstream)/2.`,
    tasks:[
      WD_ENG('d107','2026-08-20',[
        s('d107-e1','RC Active Reading Protocol — 2 Full Passages (6 Qs each)','Apply the full annotated protocol on 2 passages. Before reading: classify all 6 questions by type. While reading: mark which paragraph answers each factual question. After: answer in order F→M→I→T/V. Log time per passage: target 10 minutes per passage. If over: identify which question type is slow (inference? vocabulary-in-context?) — that is your drill focus. Total time: 30 minutes.','The number-one RC time loss: answering questions in the order they appear on the paper. The first question in a set is often the hardest (inference or main idea). If you answer in paper order, you waste 90 seconds on Q1, then Q2 is factual and takes 10 seconds. Reorder by type — factual first.',30),
        s('d107-e2','CKT Daily — Data Science and Big Data (10 min)','Data Science: extracting insights from large datasets using statistics and ML. Big Data: datasets too large for traditional software. 3 Vs of Big Data: Volume (amount), Velocity (speed), Variety (types: structured/unstructured). Tools: Hadoop, Spark (distributed processing). Database types: SQL (structured, relational — MySQL, PostgreSQL), NoSQL (flexible — MongoDB, Cassandra). Data Warehouse: central repository for analysis. BI (Business Intelligence): tools for data visualization and reporting (Tableau, Power BI). Most tested: 3 Vs of Big Data.',10),
      ]),
      WD_GA('d107','2026-08-20',[
        s('d107-ga1','Indian Economy Advanced — Banking, Budget, Fiscal Policy','Reserve Bank of India: established 1935 (nationalized 1949). Functions: monetary authority, currency issuer (notes, not coins — coins issued by Ministry of Finance), banker to banks, lender of last resort, regulates foreign exchange. Scheduled commercial banks: public sector (SBI, PNB, Bank of Baroda), private sector (HDFC, ICICI, Axis), foreign banks (Citi, HSBC). NABARD: agriculture/rural credit. SIDBI: small industries. NHB: housing finance. EXIM Bank: export-import finance. Budget: Revenue account (Revenue receipts: tax+non-tax; Revenue expenditure: salaries, subsidies, interest). Capital account (capital receipts: borrowings, disinvestment; capital expenditure: assets, loans to states). Fiscal deficit = total expenditure - revenue receipts - non-debt capital receipts. Revenue deficit = revenue expenditure - revenue receipts. Primary deficit = fiscal deficit - interest payments.','Most-tested RBI fact: "Who issues coins in India?" = Ministry of Finance (NOT RBI). "Who issues currency notes?" = RBI. This reversal of the expected answer (students assume RBI issues everything) is a classic SSC trap. Memorise: RBI = notes, Ministry of Finance = coins.',25),
        s('d107-ga2','Current Affairs + Environment & Ecology (20 min)','10 min CA scan. 10 min Ecology: Biodiversity hotspots in India (4 of 36 global hotspots): Himalaya, Indo-Burma, Western Ghats + Sri Lanka, Sundaland. Project Tiger: 1973, 54 tiger reserves. Project Elephant: 1992. Wetlands (Ramsar sites): Chilika (Odisha — largest), Wular Lake (J&K), Loktak (Manipur). National parks vs Wildlife Sanctuaries: NP — no human activity allowed; WS — limited human activity permitted. Biosphere Reserves: 18 in India, 12 recognized by UNESCO.',20),
      ]),
      WD_QR('d107','2026-08-20',[
        s('d107-qr1','Speed-Distance-Time Advanced — Trains + Boats + 20 PYQs (40 min)','Solve 20: Basic SDT (3), Relative speed (3), Train problems (5), Boat & stream (5), Average speed (4). Average speed when equal distance: 2ab/(a+b). Average speed when equal time: (a+b)/2. Boat upstream/downstream: always write two equations, solve simultaneously for boat speed and stream speed.','Train crossing problem setup: always DRAW what is crossing what. Train (length L1) crossing a man (0 length) → time = L1/speed. Train crossing platform (L2) → time = (L1+L2)/speed. Train crossing another train (same direction) → time = (L1+L2)/|S1-S2|. Label before you calculate.',40),
        s('d107-qr2','CKT Recall — Big Data 3 Vs + SQL vs NoSQL (5 min)','Name the 3 Vs of Big Data. Difference between SQL and NoSQL databases. What is a data warehouse? Name one BI tool. No notes.','5 minutes. End of session.',5),
      ]),
    ],
  },
  {
    id:'2026-08-21',dayNumber:108,date:'2026-08-21',phase:5,tier:2,weekNumber:16,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 108 — Phase 5 Final Audit: English + GA + Full Mixed Quant Sprint + Week Audit',
    promptBlock:`OPERATIVE BRIEFING — DAY 108

Friday. Week 16's final weekday. Day 108. This is your last full audit Friday before the terminal revision phase begins in Week 17. Today's session is diagnostic — you are not learning new content. You are mapping every remaining gap with precision. After today's audit, you will know exactly what to target in the Saturday and Sunday sessions, and what to carry into Week 17 as first-priority revision.

ENGLISH AUDIT:
By Day 108, you should be able to name your accuracy rate for each Paper II English type from memory: RC (factual), RC (inference), Error Spotting, Sentence Improvement, Voice/Narration, Cloze, FIB, OWS, Idioms, Syn/Ant, Parajumbles. Any type below 75% accuracy = immediate priority for this weekend and Week 17.

GA AUDIT:
By Day 108, your weakest GA section should be identifiable from 4 weeks of mock analysis. Use that data — not intuition. The section where your mock performance is most inconsistent (high variance) is the one needing most attention.

QUANT FULL MIXED SPRINT:
A 50-question mixed sprint covering every Quant topic from Phase 5. This is the most realistic simulation of what the actual Tier 2 Paper I will look like — random topic order, mixed difficulty, strict time.`,
    tasks:[
      WD_ENG('d108','2026-08-21',[
        s('d108-e1','Phase 5 English Diagnostic — Rate All 11 Question Types (35 min)','Go through one question of each type: RC-factual, RC-inference, RC-tone, Error Spotting, Sentence Improvement, Active/Passive, Direct/Indirect, Cloze, FIB, OWS, Idioms, Syn/Ant, Parajumbles. Score each. Estimate your accuracy rate per type based on all practice this phase. Any type ≤75% → write it as a priority for Saturday deep study and Week 17 sessions. Any type ≥90% → this is your exam anchor — do not neglect it either, but do not panic-revise it.','Accuracy estimation method: recall your last 5 mocks. For each English question type, approximately how many did you get right out of the questions attempted? That proportion is your accuracy estimate. Self-reported accuracy is acceptable — but be brutally honest. Over-estimating costs marks.',35),
        s('d108-e2','English Weak-Type Targeted Drill (10 min)','Based on the diagnostic: pick your single weakest type and do 5-10 focused questions on ONLY that type. No variety. If Parajumbles is weakest — 5 parajumble sets. If RC inference — 3 inference questions. Depth over breadth for the last 10 minutes.',10),
      ]),
      WD_GA('d108','2026-08-21',[
        s('d108-ga1','Phase 5 GA Audit — Topic-by-Topic Self-Assessment (25 min)','Self-test without notes. Rate 1-5 on confidence: Polity (FRs, DPSPs, Amendments, SC), Modern History (1857 to independence), Indian Geography (physical, human, rivers, resources), Economy (GDP, RBI, budget terms), Science (Physics: motion+optics; Chemistry: organic+acids; Biology: none this phase), Environment/Ecology. For any topic rated 1-2: mark it as "Week 17 Day 1 priority". For any topic rated 3: review quickly Sunday. For 4-5: trust your preparation.','The purpose of this audit is not to make you anxious — it is to convert vague worry ("I don\'t know GA") into a specific action list. A specific action list is manageable. Vague anxiety is paralysing.',25),
        s('d108-ga2','Current Affairs Final Phase 5 Scan (20 min)','Last current affairs scan of Phase 5. Record your final 30 most-important current affairs facts for the exam. These are the ones to review every morning from Week 17 onward. Quality over quantity: 30 high-probability facts, not 100 medium-probability ones.',20),
      ]),
      WD_QR('d108','2026-08-21',[
        s('d108-qr1','Phase 5 Full Mixed Quant Sprint — 50 Questions, 45 Minutes','50 mixed questions covering all Phase 5 Quant topics: Quadratic (3), SI/CI (3), Mensuration 3D (4), P&L (3), DI (2 sets = 10), Geometry Circles (3), Height & Distance (3), Coordinate Geometry (3), Trig Identities (4), Algebra (3), Statistics (3), T&W (3), SDT (3), Ratio (3). Strict 45-minute limit. This is harder than the actual exam time pressure — intentionally. Score at end.','Mixed sprint benefit: the actual exam presents topics in random order. Your brain must switch contexts 20-25 times in 135 minutes. This sprint simulates that switching cost and reduces the cognitive overhead of context-switching on exam day.',45),
        s('d108-qr2','Week 16 Quant Audit — Final Gap Identification (10 min)','From the sprint: which topics had the most errors? Rank top 3 weakest. These are Saturday\'s pre-mock drill targets. Also identify your 3 strongest topics — these are your exam scoring pillars. Name them and commit to executing them perfectly on both mock days.',10),
      ]),
    ],
  },
  {
    id:'2026-08-22',dayNumber:109,date:'2026-08-22',phase:5,tier:2,weekNumber:16,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 109 — Full Paper I Mock + Deep Study: Phase 5 Weakest Quant Topics + GA Gaps',
    promptBlock:`OPERATIVE BRIEFING — DAY 109

Saturday. Week 16. This is the penultimate Saturday mock of Phase 5. Your mock score delta from Week 14 to today should tell the full story of Phase 5's impact. If you have been consistent, you should see 10-15 mark improvement over 4 weeks. If the improvement is less, today's deep study session is surgery — identify the exact weakest topic from Friday's audit and operate on it for 3 hours.

PAPER I EXECUTION:
This mock is a preview of what the actual Paper I will feel like in the terminal revision phase. The difference between a Phase 5 mock and a terminal revision mock: in terminal revision, you should be approaching your ceiling score — your genuine personal best. Today: honest performance, no sandbagging, no skipping sections. Whatever your score is today becomes the baseline for Week 17.

DEEP STUDY — TARGETED WEAKNESS SURGERY:
Friday's audit gave you the data. Today's deep study is not "revision" — it is focused problem-solving on exactly the topics where your accuracy is below 75%. If Statistics and Circles were your two weakest: 2 hours on Statistics, 2 hours on Circles. No generalised revision.`,
    tasks:[
      WE_MT('d109',[
        s('d109-mt1','Full Paper I Mock — 100 Questions, 135 Minutes','Execute under strict exam conditions. All 5 sections. Use your established attack order. No pause, no breaks. Mark uncertain answers with a small dot (for post-exam review). Your goal: personal best score.','If you hit a question where you know the concept but are making calculation errors — do not linger. Note the question number, mark your best guess, move on. Return if time permits. The cognitive cost of lingering on a hard question destroys accuracy on the next 3 questions.',135),
        s('d109-mt2','Score + Detailed Error Analysis (25 min)','Score by section and topic. For each wrong answer: label as F (formula), C (calculation), G (concept gap), M (misread). Count each category. Category G errors from this mock + Friday\'s sprint = your definitive deep study target list for today.',25),
      ]),
      WE_DS('d109',[
        s('d109-ds1','Pre-Mock Weak-Topic Drill — Top 2 From Friday Audit (30 min)','Before the deep study block: 15 focused questions on your #1 weakest topic from Friday. This surgical drill before deep study activates the topic in memory, making the subsequent deep study more effective.',30),
        s('d109-ds2','Deep Study Block A — Weakest Quant Topic (90 min)','Full 90-minute deep study on your #1 Phase 5 weakest Quant topic. Go through: theory review (15 min), 20 standard questions (30 min), 20 PYQs (40 min), final self-test of 5 questions without notes (5 min). This is the most intensive single-topic session of Phase 5.',90),
        s('d109-ds3','Deep Study Block B — Second Weakest Topic + GA Gaps (90 min)','45 min on your #2 weakest Quant topic (15-min theory + 20 PYQs). 45 min on your weakest GA category from Friday: review the key facts, do 20 MCQs, then recall 10 key points from memory.',90),
        s('d109-ds4','Mock Error Dive — Concept Gaps Only (45 min)','From today\'s mock: take every G-category error. Solve correctly. Write the missing rule or formula. For GA G-category: find the correct fact and write it. This converts every concept gap into a closed loop.',45),
      ]),
      WE_REV('d109',[
        s('d109-rev1','DEST — 20 Minutes','15 min typing session + 5 min analysis. Record WPM and accuracy. Target: ≥36 WPM. Pushing the target by 1 WPM each week from here.',20),
        s('d109-rev2','English RC — 1 Complex Inference Passage (15 min)','One RC passage with minimum 3 inference-type questions. Apply the annotated reading protocol. This maintains English momentum after a Quant-heavy deep study day.',15),
      ]),
    ],
  },
  {
    id:'2026-08-23',dayNumber:110,date:'2026-08-23',phase:5,tier:2,weekNumber:16,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 110 — Full Paper II Mock + Deep Study: RC Advanced + English Weak Type + Phase 5 Close-Out',
    promptBlock:`OPERATIVE BRIEFING — DAY 110

Sunday. Week 16. Day 110. The last day of Phase 5. After today, the plan transitions to Phase 6: Terminal Revision. Phase 5 has given you seven weeks of systematic Tier 2 preparation. Every topic in both papers has been covered at least twice. Today's Paper II mock should reflect that.

PAPER II EXECUTION:
Attack today's Paper II with the same discipline as the first mock you ever took — but with four times the knowledge. Your attack order is automatic. Your vocabulary recall is deeper. Your grammar rules are internalised. The score today should be your Phase 5 personal best in Paper II.

PHASE 5 CLOSE-OUT:
After today, write a 5-minute Phase 5 summary: what you covered, where you stand, what to carry into terminal revision. This document is your handoff from Phase 5 to Phase 6. The weaknesses identified today become Week 17's first-day priorities.

WHAT PHASE 6 BRINGS:
Terminal revision is not new content — it is deepening and consolidating everything from Phases 1-5. The cadence shifts: more mocks, less new theory, more timed practice. The exam is approximately 4-5 weeks away from today.`,
    tasks:[
      WE_MT('d110',[
        s('d110-mt1','Full Paper II Mock — 200 Questions, 135 Minutes','Phase 5 final Paper II mock. Execute with full discipline. Vocabulary → Grammar → Cloze/FIB → Parajumbles → RC. Track time at each section boundary. At the 90-minute mark: you should have completed Vocabulary + Grammar + Cloze/FIB. If not, skip one Parajumble set (go back only if time allows).','Last 5 minutes of Paper II: review only the questions you left blank or marked as uncertain. Do not re-read or second-guess attempted questions. Changing a first-instinct answer in the last 5 minutes is net negative — studies consistently show first instincts are more accurate than reconsiderations.',135),
        s('d110-mt2','Full Score + Phase 5 Mock Comparison (25 min)','Score today\'s Paper II. Compare to Week 13\'s first Phase 5 Paper II. Delta = Phase 5 impact. Calculate section-wise improvement. Write your estimated current score for both papers combined (Paper I + Paper II). This is your competitive baseline entering terminal revision.',25),
      ]),
      WE_DS('d110',[
        s('d110-ds1','RC Advanced Deep Drill — 4 Passages, All Inference (60 min)','4 RC passages, each with minimum 3 inference questions. For each inference question you get wrong: identify (a) was it a bad inference (went beyond passage), (b) a missed inference (too conservative), or (c) a misread (read into the passage something not there). This classification tells you where your inference skill is failing.',60),
        s('d110-ds2','English Weakest Type — Full 30-Question Drill (60 min)','From Friday\'s diagnostic: your single weakest English type gets 30 questions today. If Parajumbles: 10 sets (30 min) then 10 more (30 min). If Syn/Ant: 30 vocabulary questions in 20 min, 10 min final recall. If RC inference: 6 inference-heavy passages in 60 min. This is the deepest single-topic English session of Phase 5.',60),
        s('d110-ds3','Phase 5 GA Consolidation — All GA Weak Topics (60 min)','From Friday\'s GA audit: all topics rated 1-3. Spend time proportional to severity: rated 1 → 20 min, rated 2 → 15 min, rated 3 → 10 min. For each: read key facts, do 10 MCQs, recall 5 facts without notes. At end: write the 30 highest-priority GA facts to carry into terminal revision (your Final 30 GA list).',60),
        s('d110-ds4','Paper II Mock Error Dive — All Concept Gaps (45 min)','From today\'s mock: all G-category errors. Resolve every one. Add all unresolved vocabulary words to your Final 30 English vocabulary list. This list + Final 30 GA list = your daily morning review from today until exam day.',45),
      ]),
      WE_REV('d110',[
        s('d110-rev1','DEST — Final Phase 5 Typing Session (20 min)','15 min typing + 5 min analysis. This is your Phase 5 DEST benchmark. Record final WPM. If ≥35: on track. If 33-35: one focused session per day in terminal revision. If <33: increase to two sessions per day in Week 17.','DEST benchmark today matters: entering terminal revision with sub-35 WPM means DEST is a risk on exam day. Know your number. Fix accordingly.',20),
        s('d110-rev2','Phase 5 Close-Out + Phase 6 Planning (25 min)','Write your Phase 5 summary: (1) Topics covered — Tier 2 English (all types), Quant (Mensuration 3D, Trig, Circles, Coordinate Geometry, Algebra, Statistics, T&W, SDT), GA (Polity, History, Geography, Economy, Science). (2) Current mock scores (Paper I, Paper II). (3) Top 5 weaknesses to carry into Week 17. (4) DEST WPM. This document is your Phase 6 starting point. 25 minutes — no rushing, no cutting corners. This is planning, not revision.',25),
      ]),
    ],
  },
];
