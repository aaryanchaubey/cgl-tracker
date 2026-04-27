// Week 17 — Aug 24 (Mon) to Aug 30 (Sun) — Phase 6: Tier 2 Final Sprint | Days 111-117
// Weekday: 2.5 hrs | Weekend: 8 hrs | hasQuiz: false

const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper 1 Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'DEST Drill + Mock Analysis (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-08-24', dayNumber:111, date:'2026-08-24', phase:6, tier:2, weekNumber:17,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 111 — RC Elite + CA/Polity Final + Quant Elite PYQs',
    promptBlock:`OPERATIVE BRIEFING — DAY 111 | PHASE 6 BEGINS

Phase 6 is live. This is the Final Sprint. The exam is approximately 26 days away.

Everything changes now. The mindset shifts from "learning" to "executing." From "practicing" to "performing." You are not adding new knowledge — you are sharpening every edge you already have until it cuts cleanly every single time.

TARGET: 335-340+ out of 390. That means you can afford roughly 8-10 wrong answers across the entire Quant+Reasoning section. Every wrong answer matters. Every skipped question you could have answered matters. Discipline is now your primary weapon.

RC ELITE PROTOCOL:
Two of the hardest Tier 2 reading comprehension passages — abstract or philosophical topics (not simple editorial prose). 6 questions each, 7-minute strict timer per passage. The clock stops for no one. If you cannot answer a question in the time window, you mark your best guess and move. Train the exam reflex now.

POLITY FINAL:
Every constitutional article is fair game. Every amendment has a number and a context. By this week, you should be able to state: what was amended, in which year, and under which government. This is not revision — this is verification of locked knowledge.

QUANT ELITE:
40 hardest mixed PYQs from Tier 2 papers. The constraint is 30 seconds per question average. That means some questions at 15 seconds (freeing budget), and no question beyond 60 seconds (hard cut-off). Strategic skip drill is mandatory — practice choosing which questions to defer.

CKT is now a core subject. 10 minutes minimum daily on computer fundamentals. DBMS, SQL basics, memory units — these are easy marks that most candidates underestimate.

COMMUTE TASK: Listen to a 20-minute current affairs podcast. Zero note-taking — this is retention reinforcement only.`,
    tasks: [
      WD_ENG('d111','2026-08-24',[
        s('d111-e1','RC Elite — 2 Abstract/Philosophical Passages (35 min)','Select the two hardest Tier 2 RC passages available in your material — look for abstract, philosophical, or academic topics (not news editorials). Each passage: 6 questions. Strict 7-minute timer per passage. Attempt all 6 questions within the window regardless. After both passages, review errors and classify: inference failure, vocabulary gap, or time pressure error.','Abstract RC strategy: In the first 90 seconds, identify the author\'s central thesis and their stance (agree/disagree/neutral). Every question will trace back to this core argument. Peripheral details are traps.',35),
        s('d111-e2','RC Error Analysis (10 min)','Review every wrong answer from the two RC passages. Write the exact reason for each error in one sentence. Categorize: wrong inference, missed detail, vocabulary, or rushed read.','If more than 2 errors per passage: the 7-minute window is too tight. Practice 6-minute windows to build buffer.',10),
      ]),
      WD_GA('d111','2026-08-24',[
        s('d111-ga1','Current Affairs — Rapid Fire (25 min)','Cover current affairs from the last 30 days: international summits, appointments, India-bilateral deals, economic indicators. 30-second recall per item — no reading, only recalling what you already know, then filling gaps.','CA at this stage should be mostly revision, not new learning. If you encounter something entirely new: write it, do not spend more than 60 seconds on it.',25),
        s('d111-ga2','Polity Final — Constitutional Articles and Amendments by Heart (20 min)','Rapid verbal recall test: Cover your notes and state aloud what each key Article covers. Focus: Articles 12-35 (Fundamental Rights), 36-51 (DPSP), 51A (Fundamental Duties), 52-78 (Union Executive), 79-122 (Parliament), 123-151 (President Ordinances + CAG). Then all major amendments: 42nd, 44th, 52nd, 61st, 73rd, 74th, 86th, 91st, 101st, 103rd — state year, content, government.','Mnemonic for 42nd Amendment: "Mini Constitution" — added Fundamental Duties, changed Preamble (Socialist, Secular, Integrity), weakened judiciary. 44th reversed many 42nd provisions.',20),
      ]),
      WD_QR('d111','2026-08-24',[
        s('d111-qr1','Quant Elite — 40 Hardest Mixed PYQs (40 min)','Pull the 40 hardest Tier 2 Quant PYQs from your collection — mixed topics, no filtering. Apply strict 30-second average constraint. Before each question: read, identify the type, choose method in 5 seconds, execute. Strategic skip protocol: if a question is not yielding in 40 seconds, mark it and continue. After all 40, return to marked questions only if time allows.','The 30-second average is an average — not a per-question rule. Easy arithmetic at 10 seconds, complex geometry at 50 seconds. Budget intelligently, not uniformly.',40),
        s('d111-qr2','CKT — Database Basics (10 min)','Database fundamentals: What is a DBMS vs a DBMS application. Relational databases: tables, rows (tuples), columns (attributes). SQL basics: SELECT, INSERT, UPDATE, DELETE commands. DDL vs DML distinction. Keys: primary key, foreign key, candidate key. Memory units: bit → byte → KB → MB → GB → TB → PB. Exact multiplier: 1 KB = 1024 bytes (binary), 1000 bytes (decimal context).','CKT questions are often recall-based. If you know the definition cold, the question takes 10 seconds. Treat CKT as a daily 10-minute investment for guaranteed marks.',10),
      ]),
    ],
  },
  {
    id:'2026-08-25', dayNumber:112, date:'2026-08-25', phase:6, tier:2, weekNumber:17,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 112 — Grammar Final Precision + Economy Final + DI Elite + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 112

Grammar precision at this stage means zero careless errors. Not 19/20 — it means understanding why every single wrong choice is wrong, not just knowing the right answer.

THE ECONOMY FINAL:
Every key institution: RBI, SEBI, IRDAI, PFRDA, NaBFID — their functions, constituted under which act, and current heads. All key rates: repo rate, reverse repo, CRR, SLR, MSF, bank rate — what they mean and their current values. Latest Union Budget key points: major allocations, new schemes, revised fiscal deficit target.

DI ELITE:
The hardest Tier 2 DI questions combine caselet (paragraph-based data) with dual-axis charts. Today: 30 of these combined-format questions. The mental shift required: parse the caselet for hidden data, then cross-reference with the chart. Most candidates fail here due to data extraction errors, not calculation errors.

DEST is not optional. 15 minutes, sub-4% error target today. By exam week this must be sub-3%. Measure your error rate: words typed ÷ errors made × 100. Log it.`,
    tasks: [
      WD_ENG('d112','2026-08-25',[
        s('d112-e1','Grammar Final Precision — 20 Elite Error Detection (35 min)','20 elite error detection questions — one from each major error category: Subject-Verb Agreement, Tense Sequence, Voice errors, Narration shifts, Preposition misuse, Article errors, Pronoun agreement, Modifier placement, Parallel structure, Comparison errors, Double negatives, Redundancy, Conjunction logic, Conditional tense, Relative clauses, Gerund/Infinitive, Collective nouns, Indefinite pronoun agreement, Number (singular/plural noun confusion), Word order. After each answer: write the specific rule violated in one line.','Elite error detection rule: Never guess. If you cannot name the rule, do not trust your instinct. Work through elimination of each option systematically.',35),
        s('d112-e2','Grammar Rule Audit (10 min)','Review your answers from the 20 questions. For any wrong answer: write the specific rule from your grammar notes. If the rule is not in your notes — add it now. Your grammar rule sheet should be complete after today.','A grammar rule not in your notes is a rule you will forget under exam pressure. Document everything.',10),
      ]),
      WD_GA('d112','2026-08-25',[
        s('d112-ga1','Economy Final — Institutions, Rates, Bodies (25 min)','Rapid recall: RBI functions + current repo rate. SEBI — regulates securities market, constituted under SEBI Act 1992. IRDAI — insurance regulator, Hyderabad. PFRDA — pension regulator. NaBFID — Development Finance Institution, 2021. Key rates: repo, reverse repo, CRR, SLR, MSF, bank rate. Fiscal deficit target from latest Union Budget. GST council composition. Finance Commission — current one and its mandate.','Rates and institutions change. Verify all figures from a recent CA source (August 2026 data). Write a single A4 sheet with all current figures — this is your Economy Quick Reference.',25),
        s('d112-ga2','Latest Union Budget Key Points (20 min)','Cover: Top 5 allocations by ministry, new schemes announced, tax slab changes (if any), revised fiscal deficit percentage, infrastructure spending headline number, any PM scheme renamed or restructured, CAPEX target for the year.','Budget questions in SSC often focus on: the largest allocation, the new scheme names, and the fiscal deficit number. These three areas are the most tested.',20),
      ]),
      WD_QR('d112','2026-08-25',[
        s('d112-qr1','DI Elite — 30 Caselet + Dual-Axis Combined (35 min)','30 hardest DI questions from caselet + dual-axis combined format. Protocol: (1) Read the caselet completely before looking at any question — 90 seconds. (2) Scan the chart axes and legend — 30 seconds. (3) Only then open the questions. Answer in order of increasing complexity: direct reading → single calculation → multi-step calculation. Skip multi-step if time is tight and return.','Dual-axis chart trap: The left and right Y-axes measure different quantities (e.g., absolute value vs percentage). Read both axis labels before computing anything.',35),
        s('d112-qr2','DEST — 15 Minutes (Sub-4% Error Target)','Open your DEST practice platform. Type a full passage for 15 minutes at maximum comfortable speed. Count your total errors after each paragraph. Calculate error rate: (total errors / total words) × 100. Log today\'s rate. Target today: below 4%. Next week\'s target: below 3%. Exam week target: below 3% consistently.','DEST error reduction: Slow down by 5 WPM from your maximum speed. This alone typically cuts error rate in half. Accuracy > speed for DEST.',15),
      ]),
    ],
  },
  {
    id:'2026-08-26', dayNumber:113, date:'2026-08-26', phase:6, tier:2, weekNumber:17,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 113 — Vocabulary Elite + Science Final + Geometry+Algebra Elite + CKT OS',
    promptBlock:`OPERATIVE BRIEFING — DAY 113

Vocabulary at this level is not about adding new words — it is about owning the hardest words that appear in formal, legal, and medical domains. These are the domains SSC Tier 2 uses to test vocabulary beyond common knowledge.

SCIENCE FINAL:
All three sciences in one session. Physics key facts — speed of light, sound in different media, laws of motion, simple circuits. Chemistry — pH scale extremes, alloys and their compositions, chemical names of common substances, reactions. Biology — cell organelles and functions, photosynthesis equation, blood groups and their antigens, human organ systems, vitamins and deficiency diseases. This is recall verification, not re-learning.

GEOMETRY + ALGEBRA ELITE:
30 combined hardest Tier 2 PYQs. Geometry and Algebra questions at Tier 2 difficulty are multi-step — they require chaining multiple theorems or identities. The key is recognizing which chain to apply, not executing the chain (execution is straightforward for an engineer).

CKT — Operating Systems today: BIOS, boot process, file systems. These appear directly in the CKT paper.`,
    tasks: [
      WD_ENG('d113','2026-08-26',[
        s('d113-e1','Vocabulary Elite — 50 Hardest OWS + Idioms (Formal/Legal/Medical Domain) (35 min)','50 words exclusively from formal, legal, and medical domains. Legal: Habeas Corpus (produce the body — writ against illegal detention), Certiorari (higher court quashes lower court order), Mandamus (court orders a public authority to perform its duty), Sub Judice (matter under judicial consideration), Amicus Curiae (friend of the court). Medical: Iatrogenic (caused by medical treatment itself), Triage (prioritizing patients by urgency), Idiopathic (disease of unknown cause), Palliative (relieving without curing), Prognosis (predicted outcome of disease). Formal: Plenary (full/complete authority), Ipso facto (by the fact itself), Prima facie (at first glance), De facto (in practice), De jure (by law).','Legal OWS appear in Tier 2 with high frequency because the English section is designed for future government officers. Habeas Corpus and Certiorari are the most frequently tested writs.',35),
        s('d113-e2','OWS Recall Test — 10 min','Without notes: write the meanings of 20 words from today\'s batch from memory. Score yourself. Any below 70% recall: re-read those words twice aloud.','Spaced repetition within a session: learn → test after 30 minutes. This single technique doubles retention.',10),
      ]),
      WD_GA('d113','2026-08-26',[
        s('d113-ga1','Science Final — Physics + Chemistry Key Facts (25 min)','Physics: Speed of light = 3×10⁸ m/s. Speed of sound in air = 343 m/s, in water = 1480 m/s, in steel = 5960 m/s (fastest in solids). Laws of Motion: state all three. Ohm\'s Law: V=IR. Series circuit: R_total = R1+R2. Parallel: 1/R_total = 1/R1 + 1/R2. Chemistry: pH of pure water = 7. Strong acid pH < 3, strong base pH > 11. Alloys: Steel (Fe+C), Stainless Steel (Fe+Cr+Ni), Brass (Cu+Zn), Bronze (Cu+Sn), Solder (Pb+Sn), Duralumin (Al+Cu+Mg+Mn). Chemical names: NaCl (common salt), NaOH (caustic soda), Ca(OH)₂ (slaked lime), CaO (quicklime), H₂SO₄ (oil of vitriol).','Alloys are one of the most frequently tested Chemistry topics in SSC. The composition pairings must be exact — examiners test wrong combinations as distractors.',25),
        s('d113-ga2','Science Final — Biology Key Facts (20 min)','Cell: Powerhouse = mitochondria. Protein synthesis = ribosome. Genetic material = nucleus (DNA). Energy currency = ATP. Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Blood groups: A (antigen A, antibody B), B (antigen B, antibody A), AB (both antigens, no antibodies — universal recipient), O (no antigens, both antibodies — universal donor). Vitamins: A (Retinol, night blindness), B1 (Thiamine, Beriberi), B3 (Niacin, Pellagra), B9 (Folic acid, neural tube defects), C (Ascorbic acid, Scurvy), D (Rickets), E (Tocopherol, sterility).','Universal donor (O-) and universal recipient (AB+) are the two most tested blood group facts. State them exactly.',20),
      ]),
      WD_QR('d113','2026-08-26',[
        s('d113-qr1','Geometry + Algebra Elite — 30 Hardest Combined PYQs (40 min)','30 questions combining the hardest Tier 2 Geometry and Algebra problems. Geometry: circle tangent + triangle combined, angle in alternate segment, cyclic quadrilateral properties, external angle bisector theorem. Algebra: expressions with surds requiring rationalization, quadratic whose roots satisfy conditions, algebraic fraction simplification requiring identity recognition. Apply value-putting strategy for all algebraic expressions before expanding.','Tier 2 Geometry trap: Problems that look like pure calculation are actually solved by a single theorem application. Identify the theorem first — calculation second.',40),
        s('d113-qr2','CKT — Operating System, BIOS, Boot Process, File Systems (10 min)','Operating System: Resource manager for CPU, memory, I/O, storage. Types: Single-user (Windows), Multi-user (Linux/UNIX), Real-time (RTOS), Distributed. BIOS: Basic Input Output System — firmware stored in ROM, runs Power-On Self-Test (POST), loads bootloader. Boot process sequence: Power on → POST → BIOS loads MBR → Bootloader → OS kernel loads. File Systems: FAT32 (Windows, max 4GB file), NTFS (Windows, supports large files + permissions), ext4 (Linux), APFS (macOS). File allocation: contiguous, linked, indexed.','BIOS vs UEFI: BIOS is older firmware (16-bit), UEFI is modern (64-bit, faster boot, supports GPT partition). CKT papers have begun testing UEFI.',10),
      ]),
    ],
  },
  {
    id:'2026-08-27', dayNumber:114, date:'2026-08-27', phase:6, tier:2, weekNumber:17,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 114 — Para Jumbles Elite + Geography+History Combined + Trig+Mensuration Elite + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 114

Para Jumbles at Tier 2 difficulty use 6-7 sentences on abstract academic topics — linguistic philosophy, economics, environmental science. These are designed to test whether you can follow an argument's logical progression, not just grammatical flow.

GEOGRAPHY + HISTORY COMBINED:
This is the integrated test format. No separate revision — treat it as a mock GA paper where you must switch between History and Geography questions rapidly. This tests your actual retrieval speed across topics.

TRIGONOMETRY + MENSURATION ELITE:
Multi-step problems at Tier 2 difficulty chain concepts: a height and distance problem that requires an intermediate mensuration calculation, or a solid geometry problem requiring trigonometric ratios. These are the 3-mark equivalent questions at Tier 2.

DEST: 15 minutes. Sub-4% error target. You should be tracking your daily DEST error rate — is it trending down from Day 112?`,
    tasks: [
      WD_ENG('d114','2026-08-27',[
        s('d114-e1','Para Jumbles Elite — 10 Hardest Tier 2 PYQs (35 min)','10 para jumble questions with 6-7 sentences each, on abstract academic topics (language, economics, philosophy, environment). Strict protocol: (1) Read all sentences rapidly — 60 seconds. (2) Identify the opener: general/introductory statement, no pronoun reference at the start, introduces the theme. (3) Find mandatory pairs: pronoun → antecedent, "this/that/these" → previous sentence reference. (4) Use discourse markers: "However" (contrast follows), "Therefore" (conclusion follows), "Moreover" (addition follows), "Nevertheless" (concession + continuation). (5) Build from opener, not from any random sentence.','Abstract topic trap: The opener may sound like a conclusion because it states something definitively. Check — does any other sentence introduce the concept this sentence presupposes? If yes, that sentence is actually the opener.',35),
        s('d114-e2','Para Jumbles Self-Audit (10 min)','Review every wrong Para Jumbles answer. Trace exactly where your sequence broke. Was it a wrong opener identification? A missed mandatory pair? Write the specific failure point for each wrong answer.','Para Jumbles errors are almost always one of three types: wrong opener, missed pronoun reference, or ignored discourse marker. Identify your personal error pattern.',10),
      ]),
      WD_GA('d114','2026-08-27',[
        s('d114-ga1','Geography Elite — Physical + Political + Economic (25 min)','Physical Geography: Major rivers and their tributaries, river-origin state linkages, passes in Himalayas (Nathu La, Rohtang, Banihal, Zoji La, Shipki La — state they connect). Highest peaks by range. Major lakes: Wular, Dal, Chilika, Sambhar, Loktak, Vembanad — state which state and which type (freshwater/saline). Economic Geography: Major mineral belts, coal fields (Jharia, Raniganj, Singrauli), iron ore mines, petroleum sites. Political Geography: States sharing borders with maximum other states, states with no international border, union territories that share no land border.','River-tributary linkages are heavily tested. For Ganga: major tributaries from right (Yamuna, Son, Ghaghra) and left (Ramganga, Kosi, Gandak, Gomti). Know both banks.',25),
        s('d114-ga2','History Elite Combined Test (20 min)','Ancient: Indus Valley Civilization key sites (Harappa — Punjab Pakistan, Mohenjo-daro — Sindh Pakistan, Lothal — Gujarat, Dholavira — Gujarat, Kalibangan — Rajasthan). Vedic period: Early vs Later Vedic distinction. Mauryan: Ashoka\'s dhamma, his edicts and their locations. Medieval: Battle sequence (Panipat 1, 2, 3), Delhi Sultanate dynasties in order (Slave, Khilji, Tughlaq, Sayyid, Lodi), Mughal emperors and their contributions. Modern: 1857 revolt centers and leaders, Indian National Congress founding (1885, Bombay, A.O. Hume), key Gandhi movements and their years.','Battle of Panipat: 1st (1526, Babur vs Ibrahim Lodi), 2nd (1556, Akbar vs Hemu), 3rd (1761, Ahmad Shah Durrani vs Marathas). All three are heavily tested with the combatants, not just the dates.',20),
      ]),
      WD_QR('d114','2026-08-27',[
        s('d114-qr1','Trigonometry + Mensuration Elite — 30 Combined Multi-Step PYQs (40 min)','30 hardest Tier 2 combined problems. Trigonometry multi-step: Two observation points, find height using tan of different angles, requires solving a system. Mensuration multi-step: Sphere melted into N cones — equate volumes, find radius. Cylinder inside cone — find dimensions. Frustum problems requiring slant height calculation. For each problem: (1) Draw a diagram if geometric, (2) Write what is given and what is needed, (3) Identify which formula connects them, (4) Execute. Never skip the diagram for height-distance problems.','Height and Distance shortcut: If angle of elevation from two points distance d apart gives angles α and β, then height h = d × tanα × tanβ / (tanβ - tanα) when the two points are on the same side.',40),
        s('d114-qr2','DEST — 15 Minutes (Sub-4% Error Target) (15 min)','15 minutes of DEST practice. Measure error rate as on Day 112. Compare with Day 112 rate — is it improving? If the rate has not improved: reduce typing speed by another 5 WPM and prioritize accuracy over speed. Log today\'s rate. Target trajectory: Day 112 → Day 114 → Day 116 must show a downward trend.','Common DEST errors: adjacent key transpositions (e/r, i/o), missed spacebar after comma/period, capitalization errors at sentence start. Identify your personal error pattern from the log.',15),
      ]),
    ],
  },
  {
    id:'2026-08-28', dayNumber:115, date:'2026-08-28', phase:6, tier:2, weekNumber:17,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 115 — Full English Sectional Mock + CA Final Sweep + Full Quant+Reasoning Mock + DEST + CKT',
    promptBlock:`OPERATIVE BRIEFING — DAY 115

Friday. The week's final weekday — and the most important. Today you run two full sectional mocks at actual Tier 2 conditions.

ENGLISH SECTIONAL MOCK (45 questions, 60 minutes):
This is the exact format of the Tier 2 English section. Start the timer and do not stop. Section order: Error Detection (fastest, most rule-based first) → Fill-in-the-Blanks → OWS → Idioms → Para Jumbles → Cloze Test → RC (last, most time-intensive). Mark your accuracy after. Target: 41+/45.

QUANT + REASONING SECTIONAL MOCK (60 questions, 75 minutes):
Tier 2 Quant+Reasoning combined. Average: 75 seconds per question. Fastest questions (non-verbal reasoning, direct arithmetic) at 20-30 seconds to build time budget. Hardest questions (multi-step geometry, complex DI) to be attempted after all easier questions are done. DEST and CKT are integrated into today's schedule — they are not optional.

FRIDAY MINDSET:
Tomorrow begins the weekend block. Two full Paper 1 mocks. Rest well tonight. The weekend requires full cognitive energy.`,
    tasks: [
      WD_ENG('d115','2026-08-28',[
        s('d115-e1','Full English Sectional Mock — 45 Qs in 60 Minutes (45 min)','Simulate the Tier 2 English section exactly. 45 questions, 60-minute strict timer, exam conditions (silence, no phone, pen and paper for rough work only). Recommended order: Error Detection (10 Qs, 8 min) → Sentence Improvement (5 Qs, 4 min) → Fill-in-the-Blanks (5 Qs, 3 min) → OWS (5 Qs, 3 min) → Idioms (5 Qs, 3 min) → Para Jumbles (5 Qs, 7 min) → Cloze Test (5 Qs, 5 min) → RC (5 Qs per passage × 2 = 10 Qs, 15 min). Mark raw score and accuracy percentage.','Accuracy threshold: If below 38/45 (84%), your English section is a score leak. Identify which sub-type cost the most marks and target it this weekend.',45),
      ]),
      WD_GA('d115','2026-08-28',[
        s('d115-ga1','CA Final Comprehensive Sweep (25 min)','Complete sweep of current affairs from the last 45 days: Major summits and their venues, India\'s international agreements signed, RBI policy decisions, SEBI regulations, Supreme Court major verdicts, new scheme launches, sports championships (latest results), state government major policy announcements, defense acquisitions, space missions (ISRO), and technology (major product/platform launches relevant to governance).','CA sweep strategy: Go through your CA notes/bookmarks in order of date. For each item, test recall before re-reading. If you remember it: 10 seconds confirmation and move on. If you have forgotten: re-read once, write a single trigger word, and move.', 25),
        s('d115-ga2','Static GA Speed Drill (20 min)','20-minute rapid-fire static GK: 5 questions each from Polity, Economy, History, Geography, Science — without referring to notes. Score yourself. Any topic below 3/5: note it for weekend review.','Static GK should be at near-perfect recall at this stage. Gaps here are more recoverable than CA gaps in the final sprint.',20),
      ]),
      WD_QR('d115','2026-08-28',[
        s('d115-qr1','Full Quant+Reasoning Sectional Mock — 60 Qs in 75 Minutes (45 min)','Simulate the Tier 2 Quant+Reasoning section. 60 questions, 75-minute strict timer. Question priority order: Direct arithmetic → Short algebra → Reasoning (non-verbal first, verbal second) → DI (attempt all of one set before moving) → Geometry + Trigonometry (only if time remains). Mark your score. Record: total attempted, correct, wrong, skipped.','75-minute budget: If you have 10 minutes remaining with 15 questions unattempted, do a rapid-fire pass through all 15 — mark the definite answers and skip the rest. Never leave the last 5 minutes idle.',45),
        s('d115-qr2','DEST (15 min) + CKT — Number Systems + Input/Output (15 min)','DEST: 15 minutes, log error rate. CKT — Number Systems: Binary (base 2), Octal (base 8), Hexadecimal (base 16). Decimal to Binary conversion: repeated division by 2. Binary to Decimal: positional values (2⁰, 2¹, 2², ...). Binary addition rules: 0+0=0, 0+1=1, 1+1=10 (carry 1). Input devices: keyboard, mouse, scanner, microphone, webcam, barcode reader, OMR, OCR. Output devices: monitor, printer (impact: dot-matrix, inkjet; non-impact: laser), speakers, projector. I/O devices: touchscreen, modem.','Binary conversion shortcut: 1010 in binary = 8+0+2+0 = 10 in decimal. 255 in decimal = 11111111 in binary (8 ones). Memorize these boundary values.',30),
      ]),
    ],
  },
  {
    id:'2026-08-29', dayNumber:116, date:'2026-08-29', phase:6, tier:2, weekNumber:17,
    weekType:'weekend', totalHours:8, hasQuiz:false,
    title:'Day 116 — Double Full Mock Day (330+ Target) + DEST Precision + CKT Test + Mock Analysis',
    promptBlock:`OPERATIVE BRIEFING — DAY 116 | WEEKEND FORGE — DOUBLE MOCK PROTOCOL

Two full Paper 1 mocks today. Both at 2 hours 15 minutes each. This is Tier 2 simulation at full fidelity.

TARGET: 330+ on both mocks. Not average — both mocks above 330. If the second mock drops significantly from the first, you have a cognitive endurance issue that must be addressed this week.

MOCK PROTOCOL:
Mock 1: Treat as the real exam. Section strategy: Maths (40 min) → Reasoning (40 min) → English (50 min) → GA (15 min — rapid fire at the end). Note your finish time in each section. Do not exceed section time budgets.
10-minute break between mocks. During break: stand up, eat something light, look outside. Do not review Mock 1 yet.
Mock 2: Same protocol. Now test whether pressure from Mock 1 results affects Mock 2 concentration.

POST-MOCK ANALYSIS (most important part of today):
Deep analysis of BOTH mocks. For each mock: (1) Which 5 questions should you have skipped? (2) Which questions did you attempt but get wrong that were avoidable? (3) What was your accuracy on questions you did attempt? (4) What was your effective score vs potential score?

DEST PRECISION: Sub-3% error target today. Measure three separate times and take the average. This is your Week 17 DEST baseline.

CKT 25-question test: Self-administered. Cover your notes and answer 25 CKT questions from memory. Score yourself honestly.`,
    tasks: [
      WE_DS('d116',[
        s('d116-ds1','Full Paper 1 Mock 1 — 2 Hours 15 Minutes (Target 330+) (135 min)','Full Tier 2 Paper 1 mock on your platform. Strict timer, exam conditions. Section allocation: Maths (40 min, 30 Qs) → Reasoning (40 min, 30 Qs) → English (50 min, 45 Qs) → GA (15 min, 25 Qs). No bathroom breaks during the 2hr 15min window. Log your section-wise time usage and raw score for each section immediately after.','If you finish any section early: Do NOT move to the next — use remaining time to review within that section. Switching sections early creates a false sense of available time.',135),
        s('d116-ds2','10-Minute Break Between Mocks (10 min)','Stand up. Light snack. Hydrate. Do not check your Mock 1 score. Do not think about Mock 1 questions. Mental reset completely. The purpose is cognitive recovery, not analysis.','The 10-minute reset is as important as the mock itself. Mock 2 performance depends on how well you reset from Mock 1.',10),
        s('d116-ds3','Full Paper 1 Mock 2 — 2 Hours 15 Minutes (Target 330+) (135 min)','Same protocol as Mock 1. Identical section allocation. Track: Does your Maths score drop in Mock 2? Does your English accuracy fall? Does GA suffer? These patterns reveal cognitive endurance weaknesses.','Common Mock 2 syndrome: Quant accuracy drops in Mock 2 due to mental fatigue. If this happens: in the actual exam, do Quant first when your mind is sharpest.',135),
        s('d116-ds4','Weak Area Deep Drill — 60 Minutes (60 min)','After both mocks: identify the single topic that cost you the most marks across both mocks. Spend 60 minutes in intensive practice on only that topic. Solve 20-30 questions, understand every error, and apply correction.','Weak area protocol: Do not practice the topics you are already strong in. Every minute spent strengthening a weak area is worth more than reinforcing strength.',60),
      ]),
      WE_MT('d116',[
        s('d116-mt1','Mock Score Review — Both Mocks (15 min)','Note final scores for Mock 1 and Mock 2. Calculate section-wise accuracy. Identify: Did you hit 330+ on both? If yes: what sections pulled the score up? If no: which section was the primary drag?','Honest accounting only. The number you write here is your diagnostic, not a judgment. Use it surgically.',15),
      ]),
      WE_REV('d116',[
        s('d116-rev1','DEST Precision Drill — Sub-3% Error (Measure 3 Times) (25 min)','Three separate DEST sessions of 5 minutes each. Calculate error rate for each session separately. Log all three rates and compute average. Today\'s target: average below 3%. If any individual session is above 4%: identify what went wrong (typing speed too high? distraction? fatigue?).','DEST measurement formula: (Total errors in session / Total words typed in session) × 100 = Error rate%. A 5-minute session at 35 WPM = 175 words. If 7 errors = 4% error rate.',25),
        s('d116-rev2','CKT 25-Question Test (15 min)','Without any reference: answer 25 CKT questions from memory. Cover all topics so far: hardware, software, DBMS, OS, boot process, file systems, number systems, input/output devices, memory units. Score yourself. Any topic below 70%: spend 5 minutes reviewing that specific area.','CKT test pattern: Questions are typically factual/definitional (What is RAM? What does CPU stand for? What is the function of ROM?). Know exact definitions, not paraphrases.',15),
        s('d116-rev3','Mock Analysis — Which 5 Questions Should You Have Skipped? (per mock) (20 min)','For both Mock 1 and Mock 2: identify exactly 5 questions each that you attempted but (a) were wrong, AND (b) took more than 90 seconds. These are the questions you should have skipped. Calculate the opportunity cost: time spent on wrong answers × potential easy questions you could have answered instead.','Skip discipline is the highest-leverage exam skill. A wrong answer costs 1 mark (penalty) + wasted time. Correct identification of skip-worthy questions can swing your score by 10-15 marks.',20),
      ]),
    ],
  },
  {
    id:'2026-08-30', dayNumber:117, date:'2026-08-30', phase:6, tier:2, weekNumber:17,
    weekType:'weekend', totalHours:8, hasQuiz:false,
    title:'Day 117 — Targeted Weak Area + Post Preference Research + RC+Vocab Elite + Double Mock (335+ Target)',
    promptBlock:`OPERATIVE BRIEFING — DAY 117 | WEEK 17 FINAL DAY

Today has four missions. All four are mandatory.

MISSION 1 — TARGETED WEAK AREA INTENSIVE (2 hours):
Based on yesterday's two mocks, you know exactly what your weakest topic is. Today: go deep into it. Not surface practice — surgical correction. Understand the concept from a different angle. Solve 30+ questions. Get it from weak to acceptable.

MISSION 2 — POST PREFERENCE RESEARCH (1 hour):
This is not optional. The final sprint is also the time to understand what you are sprinting toward. Research ASO (Assistant Section Officer), MEA (Ministry of External Affairs), IT Inspector, and CBI Sub-Inspector. For each post: post code, basic pay + grade pay, city/state of posting, transfer policy (whether it's All India or regional), promotion timeline, nature of work. This decision affects the next decade of your life — give it one hour of serious thought.

MISSION 3 — RC + VOCAB ELITE (2 hours):
Advanced RC and high-frequency vocabulary combined. By exam day, RC must be automatic — passage type identification in 30 seconds, question type identification before reading the passage, answer in under 6 minutes per passage.

MISSION 4 — DOUBLE MOCK (335+ target):
Two more full Paper 1 mocks. Target raised to 335+ today. Log scores. Compare with yesterday's. Are you trending up?

WEEK 17 CLOSE — WEEKLY ACCURACY STATS:
Before sleeping tonight, compile: Total mocks this week (4), average score, DEST error rate trend, CKT test scores, weakest topic identified and time invested in correction.`,
    tasks: [
      WE_DS('d117',[
        s('d117-ds1','Targeted Weak Area Intensive — 2 Hours (120 min)','Identify the single topic from yesterday\'s 4 mocks that cost the most marks. Spend exactly 2 hours: 30 minutes understanding the concept from a fresh source (video or textbook), then 90 minutes solving 30+ questions from easy to hard, reviewing every error immediately. Goal: convert this topic from a weakness to an acceptable performer.','Weak area intensive protocol: Do not skip difficult questions within the topic just because they are hard. The difficult questions are precisely what the examiner will use. Face them directly.',120),
        s('d117-ds2','Post Preference Research — ASO / MEA / IT Inspector / CBI SI (60 min)','Research all four posts systematically. For each post: (1) Post code in SSC CGL 2026 notification. (2) Basic pay + grade pay (Pay Level in 7th CPC). (3) Headquarters location and typical posting cities. (4) Transfer policy: All India Service Transfer (AIST) or Non-AIST. (5) Promotion timeline: first promotion expected in how many years. (6) Nature of work: desk/field/investigation/diplomatic. (7) Additional allowances: HRA, TA, DA specifics. Write a simple comparison table with all four posts side by side.','ASO MEA note: Ministry of External Affairs postings include international postings (embassies, consulates). This means passport facilitation and potential foreign service — dramatically different lifestyle from domestic postings. CBI SI involves criminal investigation. IT Inspector is tax enforcement. Know what you are choosing.',60),
        s('d117-ds3','RC Elite — 3 Advanced Passages (60 min)','Three RC passages at maximum difficulty. Time allocation: 18 minutes per passage (passage read: 4 min, 6 questions: 14 min = ~2 min each). Topics: one abstract philosophical, one technical/scientific, one socio-political. After each passage: note the author\'s main argument in one sentence before answering questions. Every question type appears at least once: main idea, inference, tone, vocabulary in context, detail, title selection.','RC time discipline: Never spend more than 2.5 minutes on a single RC question. If an inference question is taking too long, eliminate obviously wrong options and choose the most defensible remaining answer.',60),
        s('d117-ds4','Vocabulary Elite — 2 Hours: Review + New Words (60 min)','Review all vocabulary batches studied this week: legal OWS, formal domain words, medical terms. Self-test: cover meanings and recall from word only. Then: add 20 new words from the most-frequently-missed SSC vocabulary lists. Focus on antonyms of common words — these are heavily tested in Tier 2 (antonym of "Obsequious", antonym of "Propitious", etc.).','Vocabulary review method: Write the word → say the meaning aloud → make a one-sentence example. Three-step process doubles retention vs just reading.',60),
      ]),
      WE_MT('d117',[
        s('d117-mt1','Full Paper 1 Mock 3 — 2 Hours 15 Minutes (Target 335+) (135 min)','Third full mock of the week. Target raised: 335+. Apply any corrections from yesterday\'s analysis — particularly the skip discipline on identified weak-area questions. Section allocation same as yesterday. Note: Did yesterday\'s weak area intensive actually improve your score in that section today?','If Mock 3 score drops below Mock 1 and 2 from yesterday: cognitive fatigue is likely. Increase sleep tonight.',135),
        s('d117-mt2','Full Paper 1 Mock 4 — 2 Hours 15 Minutes (Target 335+) (135 min)','Fourth full mock. By now, four mocks this weekend. This tests maximum cognitive endurance — four Tier 2 mocks in two days. Log score and section-wise accuracy.','Four mocks in two days is intentional overload. The actual exam is one mock. After this week, the actual exam will feel lighter.',135),
      ]),
      WE_REV('d117',[
        s('d117-rev1','DEST + CKT Final Check (20 min)','DEST: One 10-minute session. Log error rate. CKT: 10-question rapid recall test — any topic. Score yourself. Both should be trending in the right direction vs Day 116.','Week 17 DEST target: sub-4% average. Week 18 target: sub-3%. Week 19: sub-3% consistently. Week 20 (exam week): locked.',20),
        s('d117-rev2','Weekly Accuracy Stats Compilation (25 min)','Write in your study log: (1) Total mocks this week: 4. (2) Mock scores in order: ?, ?, ?, ?. (3) Average mock score: ?. (4) DEST error rate — Day 112, 114, 116, 117 trend. (5) CKT test score from Day 116. (6) Weakest topic this week. (7) Hours invested in weak area correction. (8) Post preference research: decision leaning toward which post and why. This compilation takes 25 minutes but is the most important reflection of the week.','Weekly stats are your map. Without the map, you are training blind. The compilation must be honest — inflated numbers help no one.',25),
      ]),
    ],
  },
]
