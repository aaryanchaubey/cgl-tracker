// Week 14 — Aug 3 (Mon) to Aug 9 (Sun) — Phase 5: Tier 2 Acceleration | Days 90-96
const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'Mock Analysis + DEST (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-08-03',dayNumber:90,date:'2026-08-03',phase:5,tier:2,weekNumber:14,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 90 — Sentence Improvement T2 + Organic Chemistry + Quadratic Equations',
    promptBlock:`OPERATIVE BRIEFING — DAY 90

Week 14. Two weeks into Phase 5 Acceleration. The syllabus is no longer expanding — it is compressing. Every topic you touch this week is revision at exam depth, not first learning. If something feels unfamiliar, that is a signal — not a surprise. Fix it today.

ENGLISH — SENTENCE IMPROVEMENT:
Tier 2 sentence improvement tests whether the underlined portion can be replaced with a better option. The errors are subtle: misplaced modifiers, faulty parallelism, incorrect idiom usage, and redundant phrases. The correct option is almost always the most concise grammatically correct choice. If two options are both grammatically correct, the shorter one is almost always right. SSC hates verbosity.

ORGANIC CHEMISTRY — GA:
Carbon compounds dominate GA science questions: homologous series (alkanes CnH2n+2, alkenes CnH2n, alkynes CnH2n-2), functional groups (alcohol -OH, aldehyde -CHO, ketone -CO-, carboxylic acid -COOH), IUPAC naming concept, and everyday applications (ethanol in drinks, acetic acid in vinegar, methane as biogas, LPG = butane+propane). Tier 2 does NOT test reaction mechanisms — only identification and properties.

QUANT — QUADRATIC EQUATIONS:
Nature of roots: discriminant D = b²-4ac. D>0: two distinct real roots. D=0: two equal real roots. D<0: no real roots (complex). Sum of roots = -b/a. Product of roots = c/a. Forming equation from roots: x² - (sum)x + (product) = 0. Tier 2 frequently asks: "if α and β are roots of x²+5x+6=0, find α²+β²" — solve using (α+β)²-2αβ.`,
    tasks:[
      WD_ENG('d90','2026-08-03',[
        s('d90-e1','Sentence Improvement — 20 T2 Level Questions','20 sentence improvement MCQs. Focus on: (1) Dangling/misplaced modifier — the subject of the modifier must immediately follow it. (2) Faulty parallelism — all list items must share the same grammatical form. (3) Redundancy — eliminate "completely destroyed", "past history", "end result". (4) Idiom errors — "comply with" not "comply to". Time: 25 minutes. Target: 17+/20.','When the sentence sounds fine on first read, look harder — SSC writes sentence improvement traps that sound natural but have a subtle structural error. The underlined part being "No Improvement" (option D) is correct only about 20% of the time.',25),
        s('d90-e2','CKT Daily — Database Basics (10 min)','DBMS: purpose (store/retrieve data efficiently), types (relational, hierarchical, network, object-oriented). Relational DBMS: data in tables (rows=records, columns=fields). Primary key (unique identifier), foreign key (links tables). SQL commands: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT). Most tested: what is a primary key, what does SELECT do, RDBMS examples (MySQL, Oracle, MS Access).','MS Access is the most commonly tested RDBMS in SSC CKT because it is part of Microsoft Office. Know: it stores data in .accdb format, uses tables+queries+forms+reports as its four main objects.',10),
      ]),
      WD_GA('d90','2026-08-03',[
        s('d90-ga1','Organic Chemistry — Carbon Compounds + Functional Groups','Homologous series: Alkanes (single bonds, -ane suffix: methane, ethane, propane, butane). Alkenes (one double bond, -ene suffix: ethene, propene). Alkynes (one triple bond, -yne suffix: ethyne/acetylene). Functional groups: -OH (alcohol, ethanol=C2H5OH), -COOH (carboxylic acid, acetic acid=CH3COOH), -CHO (aldehyde, formaldehyde=HCHO), -CO- (ketone, acetone). Applications: ethanol (antiseptic, fuel), acetic acid (vinegar, 5% solution), formaldehyde (formalin, preservative), acetone (nail polish remover), LPG (C3+C4 mix).','Most tested organic fact in SSC: "What is the chemical name of vinegar?" = Acetic acid (CH3COOH). "What is the chemical formula of marsh gas/natural gas?" = Methane (CH4). "What is acetylene used for?" = Welding (oxyacetylene torch). Know these three cold.',25),
        s('d90-ga2','Current Affairs Rapid Scan — Last 2 Weeks','Scan last 14 days of current affairs: new appointments (PM/President/Governor level), sports results (major tournaments), science/space news (ISRO launches), important bills/acts, international summits. Use a trusted CA source (Testbook/AffairsCloud daily PDF). 15-20 points only — quality over quantity.','GA current affairs in Tier 2 tests events from the past 6-12 months. Appointment-based questions are the safest bet — they are binary (correct name or not) with no ambiguity.',20),
      ]),
      WD_QR('d90','2026-08-03',[
        s('d90-qr1','Quadratic Equations — Theory + 20 PYQs (40 min)','Discriminant analysis: for ax²+bx+c=0, D=b²-4ac. Sum of roots α+β = -b/a. Product αβ = c/a. Derived expressions: α²+β² = (α+β)²-2αβ. α³+β³ = (α+β)³-3αβ(α+β). α²-β² = (α+β)(α-β). Forming equation: x²-(α+β)x+αβ=0. Solve 20 PYQs — 8 on finding roots, 6 on derived expressions, 6 on nature of roots (D analysis).','Most common Tier 2 trap: "find the value of α²+β²" — students try to find α and β individually (time-consuming). Always use the identity (α+β)²-2αβ. Saves 90 seconds per question.',40),
        s('d90-qr2','CKT Recall — Database Terms (5 min)','Oral recall: define primary key, foreign key, RDBMS, SQL. Name 3 SQL DML commands. What does SELECT do? Name 2 examples of RDBMS. 5 minutes, no notes.','Consistent 5-minute end-of-block recall is the cheapest study technique that exists. Use it every day.',5),
      ]),
    ],
  },
  {
    id:'2026-08-04',dayNumber:91,date:'2026-08-04',phase:5,tier:2,weekNumber:14,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 91 — OWS + Fill-in-Blanks T2 + Supreme Court + SI/CI Advanced',
    promptBlock:`OPERATIVE BRIEFING — DAY 91

Tuesday. One Word Substitution and Fill-in-the-Blanks together make up 20-25 questions in Paper II — that is 10-12% of the paper. Both are memory-based and have the highest effort-to-return ratio in Tier 2 English. Every OWS word you learn today is a guaranteed mark on exam day.

ENGLISH — OWS + FIB:
OWS is pure memory. The SSC draws from a pool of approximately 200 words repeatedly. Today covers the 50 words from the governance, legal, and social science domain — the most underlearned cluster. FIB (Fill in the Blanks) tests collocations and prepositions — both require contextual accuracy, not just grammatical correctness.

POLITY — SUPREME COURT:
The Supreme Court chapter is one of the most-tested Polity topics in Tier 2. Article 124 (establishment), composition (CJI + 33 judges), appointment (President on advice of collegium), jurisdiction (original, appellate, advisory — Art 143), writ jurisdiction (Art 32 — fundamental rights). The collegium system is not in the Constitution but has evolved through three judges cases. Know the difference between Art 32 (SC writs) and Art 226 (HC writs).

QUANT — SI/CI ADVANCED:
Simple Interest = PRT/100. Compound Interest = P[(1+R/100)^T - 1]. When compounded half-yearly: R/2, T×2. Quarterly: R/4, T×4. Difference between CI and SI for 2 years = P(R/100)². For 3 years = P(R/100)²(R/100+3). These two difference formulas eliminate 90% of SI/CI calculation in Tier 2.`,
    tasks:[
      WD_ENG('d91','2026-08-04',[
        s('d91-e1','OWS — 50 Governance, Legal & Social Science Words','Memorize in thematic groups. LEGAL: acquittal (discharge from guilt), plaintiff (one who files suit), defendant (accused in civil case), litigant (party to lawsuit), affidavit (written sworn statement), perjury (lying under oath), jurisdiction (authority to hear cases), extradition (surrender of accused to another country), amnesty (general pardon), reprieve (temporary postponement of punishment). GOVERNANCE: incumbent (current holder of office), electorate (body of voters), manifesto (public declaration of policy), ordinance (executive law when Parliament not in session), referendum (public vote on single issue), plebiscite (vote on political question — usually territorial). SOCIAL: philanthropist (lover of mankind), misanthrope (hater of mankind), altruist (selfless helper), egoist (self-centred), hedonist (pursues pleasure), ascetic (practises severe self-discipline), recluse (lives in isolation), stoic (endures pain without complaint).','High-frequency SSC OWS test: acquittal, plaintiff, affidavit, extradition, referendum, plebiscite, amnesty. These 7 appear in at least 3 of the last 5 Tier 2 papers. Prioritise.',35),
        s('d91-e2','Fill-in-the-Blanks — 15 Collocation + Preposition Questions','15 FIB covering: (1) Verb collocations: "make a decision" not "take a decision" (British vs Indian English trap). (2) Adjective collocations: "strong tea/coffee" not "powerful tea". (3) Prepositions after fixed phrases: "accused OF", "differ FROM", "superior TO", "preferable TO". Time: 10 minutes. Target: 13/15.','Preposition rule for comparatives: always "superior to", "inferior to", "preferable to", "junior to", "senior to" — never "than". "He is superior than me" = wrong. "He is superior to me" = correct.',10),
      ]),
      WD_GA('d91','2026-08-04',[
        s('d91-ga1','Supreme Court — Composition, Jurisdiction, Writs','Art 124: SC established. CJI + max 33 judges (total 34). Appointment: President in consultation with collegium (CJI + 4 senior-most judges). Qualification: HC judge for 5 years OR advocate for 10 years OR distinguished jurist. Jurisdiction: (1) Original — disputes between Centre-State, State-State. (2) Appellate — civil/criminal/constitutional appeals from HCs. (3) Advisory — Art 143, President can seek opinion (not binding). (4) Writ — Art 32 (right itself is fundamental right). 5 writs: Habeas Corpus (produce body), Mandamus (command to perform duty), Prohibition (prevent lower court from exceeding jurisdiction), Certiorari (quash lower court order), Quo Warranto (challenge unlawful occupation of public office).','Difference Art 32 vs Art 226: Art 32 is only for fundamental rights violations, only SC. Art 226 is for any legal right, any HC. Art 32 is itself a fundamental right (Art 20-32 cluster). Dr Ambedkar called Art 32 "the heart and soul of the Constitution".',25),
        s('d91-ga2','CKT Daily — Input/Output Devices + Storage (10 min)','Input: keyboard (QWERTY layout), mouse (pointer device), scanner (converts physical to digital), microphone, webcam, barcode reader, OMR (Optical Mark Recognition — MCQ sheets), OCR (Optical Character Recognition). Output: monitor (LCD/LED/OLED), printer (inkjet vs laser vs dot-matrix), speakers, projector. Storage: primary (RAM — volatile, ROM — non-volatile), secondary (HDD, SSD, CD/DVD, pen drive/USB flash drive). Cloud storage: Google Drive, OneDrive, iCloud.','OMR vs OCR exam question: OMR detects marks/shading (used in competitive exam answer sheets). OCR reads printed/handwritten text (used in digitizing documents). Both use light sensors but for different input types.',10),
      ]),
      WD_QR('d91','2026-08-04',[
        s('d91-qr1','SI/CI Advanced — Difference Formulas + 20 PYQs (40 min)','SI = PRT/100. CI = P(1+R/100)^T - P. CI-SI for 2 years = P(R/100)². CI-SI for 3 years = P(R/100)²×(3+R/100). Population/depreciation: A = P(1±R/100)^T. Effective rate for half-yearly compounding: actual rate > nominal rate. Solve 20 PYQs: 8 basic CI, 6 difference formula, 4 half-yearly, 2 population problems.','The difference formula CI-SI = P(R/100)² for 2 years eliminates all calculation. Example: P=10000, R=10%, 2 years → CI-SI = 10000×(0.1)² = 10000×0.01 = 100. Memorise this — it appears in every Tier 2 paper.',40),
        s('d91-qr2','CKT Recall — I/O Devices (5 min)','Name 4 input devices, 3 output devices, 2 primary storage, 3 secondary storage. No notes. 5 minutes.','Recall locks the morning session. Do not skip.',5),
      ]),
    ],
  },
  {
    id:'2026-08-05',dayNumber:92,date:'2026-08-05',phase:5,tier:2,weekNumber:14,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 92 — Active/Passive + Direct/Indirect T2 + Indian Climate + Mensuration 3D',
    promptBlock:`OPERATIVE BRIEFING — DAY 92

Wednesday. Active/Passive and Direct/Indirect together account for 10-12 questions in Paper II. These are pure rule-application questions — the rules are finite, learnable, and the same rules apply in every question. There is no excuse for dropping marks here after Day 92.

ENGLISH — VOICE AND NARRATION:
Active to Passive: subject becomes object, object becomes subject, verb becomes be+V3. The auxiliary changes by tense: is/are (present), was/were (past), will be (future), is being/are being (present continuous). Direct to Indirect: reporting verb changes, inverted commas removed, pronoun changes (I→he/she, we→they), tense backshifts (says→said: present→past, will→would, can→could), time words change (now→then, today→that day, tomorrow→next day).

GEOGRAPHY — INDIAN CLIMATE AND AGRICULTURE:
Climate types in India: Tropical monsoon dominates. Factors: latitude, altitude, distance from sea, relief. Monsoon: SW monsoon (June-September, Arabian Sea + Bay of Bengal branches), NE monsoon (Oct-Dec, Tamil Nadu coast). Rainfall distribution: Mawsynram/Cherrapunji (highest), Jaisalmer (lowest). Agriculture: Kharif crops (sown June-July, harvested Sept-Oct: rice, cotton, jowar, bajra, groundnut), Rabi crops (sown Oct-Nov, harvested March-April: wheat, mustard, gram, barley), Zaid (summer: watermelon, cucumber).

MENSURATION 3D:
Cube (a³ volume, 6a² surface), Cuboid (lbh, 2(lb+bh+hl)), Cylinder (πr²h, 2πr(r+h)), Cone (⅓πr²h, πrl+πr² where l=slant height), Sphere (4/3πr³, 4πr²), Hemisphere (2/3πr³, 3πr²). Frustum of cone: V=πh/3(R²+r²+Rr). These formulas are the entire topic — every Tier 2 3D mensuration question applies one of these.`,
    tasks:[
      WD_ENG('d92','2026-08-05',[
        s('d92-e1','Active/Passive + Direct/Indirect — 20 Conversion Questions','10 Active↔Passive + 10 Direct↔Indirect conversions. Passive rules by tense: Simple Present → is/are+V3. Simple Past → was/were+V3. Future → will be+V3. Present Continuous → is/are being+V3. Past Continuous → was/were being+V3. Present Perfect → has/have been+V3. Narration: statement (that), question (if/whether for yes-no, wh-word for wh-questions), command (to+V1, not+to+V1 for negative), exclamation (with joy/sorrow that).','Most tested passive trap: "The letter was written by him" — students write "He was written the letter" (wrong — "write" takes direct object only in active, passive must be formed from the direct object). Check whether the verb is transitive before forming passive.',25),
        s('d92-e2','CKT Daily — Internet and Email Basics (10 min)','WWW vs Internet: Internet is the physical network, WWW is a service on it. Browser: Chrome, Firefox, Edge (software to access WWW). Search engine: Google, Bing (finds webpages). Email components: To (recipient), CC (carbon copy — visible to all), BCC (blind carbon copy — hidden), Subject, Body, Attachment. Email protocols: SMTP (sending), POP3/IMAP (receiving). Spam: unsolicited bulk email. Phishing: fraudulent email to steal credentials.','CC vs BCC trap question: In CC, all recipients can see who else received the email. In BCC, the primary recipient (To) cannot see who else received it. This distinction is tested directly.',10),
      ]),
      WD_GA('d92','2026-08-05',[
        s('d92-ga1','Indian Climate + Monsoon + Agriculture — Kharif/Rabi/Zaid','SW Monsoon: enters Kerala around June 1, two branches (Arabian Sea → west coast, Bay of Bengal → northeast then across India). Retreats from NW India by September. NE Monsoon: October-December, affects Coromandel coast (Tamil Nadu). Highest rainfall: Mawsynram, Meghalaya (annual ~11,871mm). Lowest: Jaisalmer, Rajasthan. Rain shadow area: leeward side of Western Ghats (Deccan Plateau gets less rain). Kharif: rice (highest producing: WB), cotton (Maharashtra), groundnut (Gujarat). Rabi: wheat (highest: UP/Punjab), mustard (Rajasthan). India is the largest producer of: milk, pulses, jute (all three testable). India is the 2nd largest: rice, wheat, sugarcane.','Monsoon entry and exit dates are heavily tested: SW Monsoon enters Kerala ~June 1, covers entire India by July 15. Retreats from Rajasthan by September 1. The reverse movement of monsoon (retreat) follows an opposite path.',25),
        s('d92-ga2','Current Affairs — Last 2 Weeks Scan','Sports, appointments, international events. 15-minute focused scan. Record 20 key facts only.','Consistency matters: 15 minutes daily current affairs over 4 weeks = 28 hours of CA preparation. That is the difference between 18/25 and 23/25 in GA.',20),
      ]),
      WD_QR('d92','2026-08-05',[
        s('d92-qr1','Mensuration 3D — All Formulas + 20 PYQs (40 min)','Formula drill (5 min first): write all 3D formulas from memory. Then 20 PYQs: Cube/Cuboid (4), Cylinder (4), Cone (4), Sphere (4), Frustum (2), Mixed (2). Common Tier 2 type: "a cone is melted and recast into a sphere — find radius" → volumes are equal: ⅓πr²h = 4/3πR³. Solve for R. Time: 40 minutes.','Volume conservation problems: whenever a solid is melted/recast, volumes are equal. This is the single most common Tier 2 Mensuration 3D question type. Set up: Volume of original = Volume of new shape. Solve.',40),
        s('d92-qr2','CKT Recall — Internet + Email (5 min)','Define: browser, search engine, SMTP, POP3, phishing, spam, CC, BCC. No notes. 5 minutes.','5-minute end-of-session recall. No exceptions.',5),
      ]),
    ],
  },
  {
    id:'2026-08-06',dayNumber:93,date:'2026-08-06',phase:5,tier:2,weekNumber:14,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 93 — RC Science Passage T2 + Post-1947 India + Profit & Loss Advanced',
    promptBlock:`OPERATIVE BRIEFING — DAY 93

Thursday. Day 4 of Week 14. RC science passages are a high-frequency Tier 2 format that many candidates underperform on — not because the science is hard, but because they lose time re-reading. The fix is discipline: questions first, then targeted reading.

ENGLISH — RC SCIENCE PASSAGE:
Science-based RC passages (physics, biology, space science, environmental topics) test reading comprehension, not science knowledge. The correct answers come exclusively from the passage — outside knowledge is irrelevant and often a trap. The most common wrong answer in science RC: an option that is scientifically true but NOT stated in the passage. Always anchor your answer to a specific line in the text.

HISTORY — POST-1947 INDIA:
The Constitution's enactment (Jan 26, 1950), First General Elections (1951-52), Integration of Princely States (Sardar Patel, Operation Polo for Hyderabad), Five Year Plans (First Plan 1951-56, agriculture focus; Second Plan 1956-61, Mahalanobis — heavy industry), Green Revolution (1960s, Norman Borlaug + MS Swaminathan, wheat revolution in Punjab/Haryana), White Revolution (Operation Flood, Verghese Kurien, milk), Emergency 1975-77 (Art 352, Indira Gandhi, 42nd Amendment). These events appear in clusters in Tier 2 GA.

QUANT — PROFIT & LOSS ADVANCED:
Dishonest dealings: selling at cost price but using false weights → profit% = (excess weight/true weight)×100. Successive discounts: d1 and d2 → effective discount = d1+d2-(d1×d2/100). CP when two items sold at same SP, one at x% profit, one at x% loss → always a loss = (x/10)² percent. Mark price → selling price → cost price chain.`,
    tasks:[
      WD_ENG('d93','2026-08-06',[
        s('d93-e1','RC Science Passage T2 — 2 Passages (5 Qs each)','Attempt 2 science RC passages: one on environmental/climate topic, one on space/physics topic. Protocol: (1) Read all 5 questions first — 1 minute. (2) Mark question type: factual (F), inferential (I), vocabulary-in-context (V). (3) Read passage, pause after each paragraph to mentally link to pending questions. (4) Answer F questions directly. For I questions — eliminate options not supported by text. For V questions — read surrounding 2 sentences.','The most dangerous RC wrong answer: "This is true in real life." Ask instead: "Is this stated or implied in THIS passage?" If the passage doesn\'t say it, eliminate it regardless of real-world accuracy.',30),
        s('d93-e2','CKT Daily — Cybersecurity Basics (10 min)','Virus: self-replicating malicious program. Worm: spreads across network without user action. Trojan: disguised as legitimate software. Ransomware: encrypts files, demands payment. Spyware: secretly monitors user activity. Antivirus software: detects and removes malware. Firewall: monitors and controls incoming/outgoing network traffic. VPN: Virtual Private Network — encrypts internet connection. Two-factor authentication (2FA): additional security layer beyond password.','Most tested cybersecurity question in SSC CKT: difference between virus and worm. Virus needs a host file and user action to spread. Worm spreads independently across networks without attaching to a host file.',10),
      ]),
      WD_GA('d93','2026-08-06',[
        s('d93-ga1','Post-1947 India — Constitution to Emergency','Constitution: drafted by Constituent Assembly (Dec 1946 - Nov 1949), adopted Nov 26 1949 (Constitution Day), enacted Jan 26 1950 (Republic Day). Dr BR Ambedkar = chairman of Drafting Committee. First President: Rajendra Prasad. First PM: Nehru. First General Elections: 1951-52 (INC won). Princely states integration: Sardar Patel + VP Menon. Hyderabad: Operation Polo (police action, Sep 1948). Five Year Plans: 1st (1951-56, agriculture, community development). 2nd (1956-61, Mahalanobis model, steel plants: Bhilai, Durgapur, Rourkela). Green Revolution: 1960s, HYV seeds, wheat in Punjab/Haryana, MS Swaminathan (Father of Green Revolution in India). White Revolution: Operation Flood (1970), Verghese Kurien (Father of White Revolution). Emergency: Jun 25 1975 - Mar 21 1977, proclaimed under Art 352, 42nd Amendment passed during Emergency (Mini Constitution).','Tier 2 tests the sequence: who did what, when, under which article/plan. Sardar Patel = Iron Man of India + integration of states. MS Swaminathan = Green Revolution. Verghese Kurien = White Revolution/Amul. These three identities are the most-tested post-independence history facts.',25),
        s('d93-ga2','Science Revision — Chemistry: Acids, Bases, Salts (20 min)','pH scale: 0-14. Below 7 = acidic (HCl, H2SO4, vinegar pH~3, lemon pH~2). Above 7 = basic (NaOH, bleach, baking soda pH~8). pH 7 = neutral (pure water). Strong acid: fully dissociates (HCl, HNO3, H2SO4). Weak acid: partially dissociates (CH3COOH, H2CO3). Neutralisation: acid + base → salt + water. Common salts: NaCl (common salt), Na2CO3 (washing soda), NaHCO3 (baking soda), CaCO3 (limestone/marble), CaSO4 (plaster of paris when hemihydrate). Baking powder = NaHCO3 + tartaric acid.','"Baking soda vs Baking powder" is a perennial SSC question. Baking soda = NaHCO3 alone. Baking powder = NaHCO3 + acid (tartaric acid/cream of tartar) — it doesn\'t need an external acid to produce CO2 for leavening.',20),
      ]),
      WD_QR('d93','2026-08-06',[
        s('d93-qr1','Profit & Loss Advanced — 20 PYQs Including Dishonest Dealer + Successive Discounts (40 min)','False weight profit: selling at CP but with false 900g weight for 1kg → profit = 100/900 × 100 = 11.11%. Formula: profit% = (error/(true value - error))×100. Successive discounts 20% then 15% → effective = 20+15-(20×15/100) = 35-3 = 32%. Two items same SP one x% profit one x% loss: net loss = (x²/100)%. Mark price problems: MP → after d% discount → SP → profit% on CP. Solve 20 PYQs covering all types.','The "same SP, one profit, one loss" result is ALWAYS a loss regardless of x. The loss% = (x/10)². At x=10: loss=1%. At x=20: loss=4%. Memorise this result — it appears as a "which of the following is true" question.',40),
        s('d93-qr2','CKT Recall — Cybersecurity (5 min)','Define: virus, worm, trojan, ransomware, firewall, VPN. Difference between virus and worm in one sentence. No notes.','5 minutes. Non-negotiable.',5),
      ]),
    ],
  },
  {
    id:'2026-08-07',dayNumber:94,date:'2026-08-07',phase:5,tier:2,weekNumber:14,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 94 — Vocabulary T2 Advanced + Mixed DI Sprint + Week Audit',
    promptBlock:`OPERATIVE BRIEFING — DAY 94

Friday. Week 14's final weekday. Today is the audit day — you know the drill. Before Sunday's deep study, you need to know which of this week's topics is weakest. That becomes Sunday's priority. Friday is also vocabulary day — the last thing you load before a weekend mock is words, not formulas. Words activate during the paper with minimal warm-up. Formulas need calculation practice to stay sharp.

ENGLISH — VOCABULARY ADVANCED:
Today's batch focuses on words from the psychology, philosophy, and literary criticism domains — the exact registers that appear in Tier 2 passages and vocabulary questions. Root word analysis accelerates acquisition: knowing that "anima" = soul/life unlocks animated, animal, inanimate, magnanimous. That "cred" = believe unlocks credulous, incredulous, incredible, credentials.

QUANT — MIXED DI SPRINT:
Three DI sets back to back: one table, one bar chart, one caselet. 15 questions total, 20 minutes. This is pure execution speed — no new learning. If a calculation takes more than 25 seconds, approximate. The goal is to maintain the same speed under 3-set fatigue that you have on set 1 alone.

WEEK 14 AUDIT:
After DI, spend 10 minutes identifying this week's weakest topic: Sentence Improvement, OWS, Voice/Narration, SI/CI, Mensuration 3D, P&L, or any GA topic. Write it down. This becomes Saturday's pre-mock drill and Sunday's deep study focus.`,
    tasks:[
      WD_ENG('d94','2026-08-07',[
        s('d94-e1','Vocabulary T2 — 40 Advanced Words (Psychology + Philosophy + Literary)','PSYCHOLOGY: introvert (inward-focused), extrovert (outward-focused), ambivalent (conflicting feelings), narcissist (excessive self-admiration), paranoid (irrational distrust), apathetic (showing no interest), empathy (understanding others\' feelings), catharsis (emotional release). PHILOSOPHY: empiricism (knowledge from experience), rationalism (knowledge from reason), pragmatic (practical approach), dogma (fixed belief), paradox (contradictory truth), rhetoric (persuasive language), dialectic (debate through opposing arguments). LITERARY: protagonist (main character), antagonist (opponent), soliloquy (character speaks thoughts aloud alone), allegory (story with hidden meaning), satire (ridicule through irony), parody (comic imitation), euphemism (mild word for harsh thing), hyperbole (deliberate exaggeration), oxymoron (contradictory terms together), personification (giving human qualities to non-human).','Literary terms appear in RC poetry/prose questions as "identify the figure of speech" type. Hyperbole ("I\'ve told you a million times") vs Oxymoron ("deafening silence") vs Personification ("the wind whispered") — these three are the most tested.',30),
        s('d94-e2','CKT Daily — MS Office Suite (10 min)','MS Word: .docx, word processing, track changes, mail merge. Ctrl+B (bold), Ctrl+I (italic), Ctrl+U (underline), Ctrl+P (print), Ctrl+S (save), Ctrl+Z (undo). MS Excel: .xlsx, spreadsheet, formulas start with =, SUM/AVERAGE/MAX/MIN/IF/VLOOKUP. MS PowerPoint: .pptx, presentation, slide layouts, master slide. MS Access: .accdb, database management. MS Outlook: email client. Office file format: .docx (Word 2007+), older = .doc.','The most tested MS Office question in SSC CKT: "What is the extension of an MS Word file?" = .docx (or .doc for older versions). "In Excel, what symbol starts a formula?" = equals sign (=). These two appear in almost every CKT paper.',10),
      ]),
      WD_GA('d94','2026-08-07',[
        s('d94-ga1','Week 14 GA Audit + Rapid Revision (25 min)','Self-test without notes: (1) Write the 5 writs and their meanings. (2) Name the two types of monsoon and months. (3) State the CI-SI difference formula for 2 years. (4) Name the Father of Green Revolution, White Revolution. (5) What is the pH of vinegar? (6) Name 3 Kharif and 3 Rabi crops. (7) Difference between virus and worm. Check your answers. Every wrong answer = your weak spot. Spend remaining time reinforcing those specific items.','The purpose of self-testing without notes is to simulate exam conditions. Reading notes creates an illusion of knowledge. Writing from memory reveals the truth.',25),
        s('d94-ga2','Current Affairs + Static GA Mixed Rapid-Fire (20 min)','20 rapid-fire mixed GA questions covering all topics from this week: Polity (SC jurisdiction), History (post-1947), Geography (monsoon), Science (organic chemistry + acids), Economy (from week 13). Aim for 17+/20. Mark anything wrong for Saturday review.','Friday rapid-fire is your pre-weekend calibration. Low score here = revise that topic before Saturday\'s mock, not after.',20),
      ]),
      WD_QR('d94','2026-08-07',[
        s('d94-qr1','Mixed DI Sprint — 3 Sets (Table + Bar Chart + Caselet) 20 Minutes','Set 1: Table DI (5 Qs, 6 min). Set 2: Bar chart DI (5 Qs, 6 min). Set 3: Caselet DI (5 Qs, 8 min — extra 2 min for reading). Strict time. If a set takes longer than allocated: mark remaining questions and move to next set. Return at end. Goal: complete all 15 questions, 12+ correct.','DI endurance tip: the third set always feels harder because of mental fatigue, not difficulty. Keep your rough sheet structured — one table per set, clearly labelled. A messy rough sheet is the primary cause of calculation errors under fatigue.',40),
        s('d94-qr2','Week 14 Quant Audit — Identify Weakest Topic (10 min)','Reflect on this week\'s Quant: Quadratic (Day 90), SI/CI (Day 91), Mensuration 3D (Day 92), P&L Advanced (Day 93), DI Mixed (Day 94). Rate each 1-5 on confidence. Write down your #1 weakness. This becomes Saturday\'s pre-mock drill focus and Sunday\'s deep study topic.','Honest self-rating is the most important 10-minute investment of the week. Overrating your confidence costs marks on Saturday\'s mock. Underrating wastes Sunday\'s deep study time.',10),
      ]),
    ],
  },
  {
    id:'2026-08-08',dayNumber:95,date:'2026-08-08',phase:5,tier:2,weekNumber:14,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 95 — Full Paper I Mock + Deep Study: Algebra Advanced + Mensuration 3D',
    promptBlock:`OPERATIVE BRIEFING — DAY 95

Saturday of Week 14. Paper I mock day. Your score trajectory from Week 13's mock to today tells you whether Phase 5 is working. Target: +5 to +10 marks over last Saturday's score. If you hit that delta, the daily sessions are compounding. If you don't, the analysis window after the mock is your most important study session of the week — not Sunday's deep study.

PAPER I EXECUTION:
Know your attack order before you start. Recommended: Arithmetic (fastest, highest confidence) → Algebra → DI (fixed time: 25 minutes maximum, move on regardless) → Geometry/Mensuration → Trigonometry (most formula-dense, last). If Quant is your strength, reverse this: Algebra first, then DI, then Arithmetic. The order should maximise YOUR scoring rate in the first 45 minutes — early momentum reduces anxiety for the harder questions.

DEEP STUDY — ALGEBRA + MENSURATION 3D:
Algebra advanced covers polynomial division, remainder theorem, factor theorem, and higher-degree equations. Mensuration 3D covers volume conversion problems and frustum applications — the two most-dropped marks in Tier 2 Quant according to previous year topper analysis.`,
    tasks:[
      WE_MT('d95',[
        s('d95-mt1','Full Paper I Mock — 100 Questions in 135 Minutes','Strict exam simulation. No phone, no break, no checking answers mid-way. Set your pre-mock intent: target score, section-wise minimums, order of attack. Execute.','First 10 minutes are critical — solve your highest-confidence question type first. This sets a positive momentum. Entering the second section already at 15-18/25 is psychologically different from entering at 8-10/25.',135),
        s('d95-mt2','Score + Section Analysis + Error Categorisation','Mark the paper. Record: total score, section-wise score (Arithmetic, Algebra, Geometry, Trig, Stats, DI). Categorise errors: formula error (F), calculation error (C), concept gap (G), misread (M). Count each category. Category G = priority for deep study today.',20),
      ]),
      WE_DS('d95',[
        s('d95-ds1','Pre-Mock Drill — Weakest Topic from Friday Audit (30 min)','Before deep study, spend 30 minutes drilling your identified weakest topic from Day 94. 15 targeted questions. This is surgical revision — fix the specific gap, not the whole topic.',30),
        s('d95-ds2','Algebra Advanced — Remainder Theorem + Factor Theorem + Higher Degree','Remainder Theorem: when polynomial P(x) is divided by (x-a), remainder = P(a). Factor Theorem: (x-a) is a factor of P(x) if and only if P(a)=0. Rational Root Theorem: rational roots of anxⁿ+...+a0 are of form ±(factor of a0)/(factor of an). Solve 15 PYQs: 6 remainder theorem, 5 factor theorem, 4 higher-degree equations. Common Tier 2 type: "if (x-2) is a factor of x³-3x²+kx-4, find k" → substitute x=2, set equal to zero, solve for k.',60),
        s('d95-ds3','Mensuration 3D — Volume Conversion + Frustum + Combination Solids','Volume conversion: solid melted → recast. Set volumes equal. Solve for unknown dimension. Frustum V = πh/3(R²+r²+Rr), LSA = πl(R+r) where l = √[h²+(R-r)²]. Combination solids: cone on cylinder, hemisphere on cylinder — find total SA and volume by adding/subtracting component parts. Solve 15 PYQs covering all types.',60),
        s('d95-ds4','Mock Error Deep Dive — Concept Gap Questions Only (60 min)','From the mock: take every question you marked as concept gap (G). Solve each correctly now. Find the rule/formula you were missing. Write it. This is the most valuable hour of the weekend.', 60),
        s('d95-ds5','Algebra + Mensuration Integration — 20 Mixed Questions (45 min)','20 questions combining today\'s deep study topics. Timed: 30 minutes. Target: 16+/20. Treat as a mini-mock — strict time, no looking at notes while solving.',45),
      ]),
      WE_REV('d95',[
        s('d95-rev1','DEST Session — 35 WPM Target (20 min)','Full DEST simulation: 15 minutes typing + 5 minutes analysis. Calculate WPM and error%. Target: 35 WPM, ≤5% error. If below: identify whether the issue is speed (type faster, accept more errors temporarily) or accuracy (slow down 5 WPM, prioritise accuracy). Fix one variable at a time.',20),
        s('d95-rev2','English RC Speed Pass — 1 Passage (15 min)','One RC passage (500 words, 5 questions) in 10 minutes maximum. Maintains English velocity heading into Sunday\'s Paper II mock. Score it — note any inference question you got wrong.',15),
      ]),
    ],
  },
  {
    id:'2026-08-09',dayNumber:96,date:'2026-08-09',phase:5,tier:2,weekNumber:14,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 96 — Full Paper II Mock + Deep Study: RC Inference + Vocabulary Consolidation',
    promptBlock:`OPERATIVE BRIEFING — DAY 96

Sunday. Week 14's final day. Paper II mock — 200 questions, 135 minutes. This is your most complete exam simulation of the week. After the mock, the deep study consolidates this week's English learning: Sentence Improvement, OWS, Voice/Narration, Vocabulary, and RC. The goal by end of today: no English topic from this week feels uncertain.

PAPER II EXECUTION:
Attack order recommendation: Vocabulary section first (Syn/Ant/OWS/Idioms — these are fastest, each under 15 seconds when you know the word). Then grammar (Error Spotting, Sentence Improvement, Voice/Narration — rule application). Then Cloze and FIB (context-based, 30-45 seconds each). Parajumbles (2-3 minutes each — do last if needed). RC passages last (most time but questions are grouped, minimises context-switching).

WEEK 14 CLOSE-OUT:
Seven days. Five weekday sessions. Two full mocks. Every topic in this week's plan contributes directly to Paper II marks. By the end of today, you will have seen all of Week 14's English topics in a test context. The weaknesses revealed in today's Paper II become Week 15's priority queue.`,
    tasks:[
      WE_MT('d96',[
        s('d96-mt1','Full Paper II Mock — 200 Questions in 135 Minutes','Complete Paper II under strict conditions. Track time by section: Vocabulary (30 min), Grammar blocks (35 min), Cloze/FIB (15 min), Parajumbles (12 min), RC (40 min), buffer (3 min). If ahead in vocabulary — bank time for RC. Do not spend more than 90 seconds on any single question.','Most time is lost in Paper II on: (1) re-reading RC passages from scratch for each question — skim the questions first. (2) Over-deliberating vocabulary — you either know it or you don\'t. Mark your best guess and move. Never spend more than 20 seconds on a vocabulary question.',135),
        s('d96-mt2','Score Analysis — Section-wise + Error Type Breakdown','Score each section. Identify: lowest-scoring section, most common error type (knowledge gap vs misread vs time pressure). This analysis feeds into Week 15 planning.',20),
      ]),
      WE_DS('d96',[
        s('d96-ds1','RC Inference Mastery — 3 Inference-Heavy Passages','Work through 3 RC passages where inference questions are the majority. For each inference option: test it against the passage — "where exactly in the text is this supported?" If you cannot point to a line, eliminate the option. The correct inference is always conservative — the minimum logical conclusion from what the text states, not the maximum.','Inference wrong answer pattern: the option that feels "deeper" or "more insightful" than the others is usually wrong — it goes beyond what the text supports. SSC reward conservative, text-supported inferences.',60),
        s('d96-ds2','Vocabulary Week 14 Consolidation — Full Recall Test','From this week: OWS batch (legal/governance/social — 50 words), vocabulary advanced (psychology/philosophy/literary — 40 words). Flash-test all 90 words without notes. Any word that takes more than 3 seconds: add to your "Final 30" emergency review list. This list you review every morning from today until exam day.','Your "Final 30" is not a failure list — it is your highest-priority revision list. The words that resist memory are the ones that differentiate your score from a competitor who studied the same material.',60),
        s('d96-ds3','Grammar Consolidation — Week 14 Rules Drill','Quick test: (1) 10 Sentence Improvement questions (target 9/10). (2) 10 Voice/Narration conversions (target 9/10). (3) 10 FIB prepositions (target 9/10). Any wrong answer: re-study that specific rule before moving on.',60),
        s('d96-ds4','Week 14 Full Integration — 30 Mixed English Questions','30 questions covering all Week 14 English topics: Sentence Improvement (6), OWS (5), FIB (5), Voice/Narration (5), Vocabulary Syn/Ant (6), RC inference (3). Time: 25 minutes. Target: 26+/30.',45),
      ]),
      WE_REV('d96',[
        s('d96-rev1','Week 14 Complete Review — Strongest + Weakest Topics','Write: your 3 strongest topics from this week (these are your scoring pillars in the exam). Your 2 weakest topics (these go into Week 15 as priority revision at the start of each session). Be specific — not "vocabulary" but "OWS legal domain words" or "RC inference questions".',25),
        s('d96-rev2','Week 15 Preview — Aug 10-16 includes Independence Day (Aug 15)','Week 15 schedule: Aug 10-14 (5 weekday sessions), Aug 15 (Independence Day — reduced session recommended), Aug 16 (Sunday mock). Aug 15 GA is high-yield: freedom movement, constitutional history, national symbols — expect 2-3 direct questions in the actual exam referencing Independence Day context. Plan your Aug 15 session accordingly.',20),
      ]),
    ],
  },
];
