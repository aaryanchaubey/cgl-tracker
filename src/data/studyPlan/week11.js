// Week 11 — Jul 13 (Mon) to Jul 19 (Sun) — Phase 4: Tier 2 Foundation | Days 69-75
// Second week of Tier 2 prep. Foundation deepens: RC speed, geometry hardest, stat advanced.
const WD_ENG = (id, subtasks) => ({ id:`${id}-eng`, subject:'English T2', icon:'📖', color:'#6366f1', duration:60, title:'English T2 Block (60 min)', subtasks })
const WD_GA  = (id, subtasks) => ({ id:`${id}-ga`,  subject:'GA & CKT', icon:'🌏', color:'#10b981', duration:45, title:'GA + CKT Daily (45 min)', subtasks })
const WD_QR  = (id, subtasks) => ({ id:`${id}-qr`,  subject:'Quant T2', icon:'🔢', color:'#f59e0b', duration:75, title:'Quant T2 Block (75 min)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper 1 Mock (2h 15min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Review', icon:'🔍', color:'#06b6d4', duration:60, title:'DEST + Mock Analysis (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`,  subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:240, title:'Deep Study Block (4 Hours)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-07-13',dayNumber:69,date:'2026-07-13',phase:4,tier:2,weekNumber:11,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 69 — Idioms & Phrases T2 + Coordinate Geometry + Science: Optics',
    promptBlock:`OPERATIVE BRIEFING — DAY 69

Week 11. You are two weeks into Tier 2 preparation and the gap between candidates is already forming. The ones who win are those who treat every weekday session as non-negotiable. Three hours today. No exceptions.

ENGLISH — IDIOMS & PHRASES:
Tier 2 tests 8-10 idioms per paper, typically in the "meaning of the underlined phrase" format. The trap is that Tier 2 idioms are NOT the common ones from Tier 1 wordlists. They draw from formal literary and journalistic usage. The strategy is not to memorize 500 idioms — it is to memorize 80 high-frequency Tier 2 idioms cold. Today: 40 of those 80.

COORDINATE GEOMETRY:
This is one of the most formula-dense topics in Tier 2 Quant. The entire topic can be cracked with 12 core formulas: distance formula, section formula (internal + external), midpoint, slope from two points, slope-intercept form, point-slope form, angle between two lines, distance from a point to a line, condition for parallel lines, condition for perpendicular lines, equation of a circle (standard + general form), and the area of a triangle given its vertices. All 12 must be memorized and applicable in under 30 seconds each.

SCIENCE — OPTICS:
Light reflection (laws, mirror formula 1/v + 1/u = 1/f, magnification), refraction (Snell's law, refractive index = c/v), lenses (convex = converging, concave = diverging). Total Internal Reflection — condition: angle of incidence > critical angle, denser to rarer medium. Applications: optical fibre, diamond brilliance, mirage. These applications are tested directly in Tier 2 GA.`,
    tasks:[
      WD_ENG('d69',[
        s('d69-e1','Idioms & Phrases — 40 High-Frequency T2 Idioms (Batch 1)','Study and memorize 40 Tier 2 idioms in groups of 8. Group 1 (deception): red herring, pull the wool over eyes, take for a ride, lead up the garden path, cry wolf. Group 2 (difficulty/effort): bite the bullet, burn the midnight oil, go the extra mile, up against the wall, between the devil and the deep blue sea. Group 3 (disclosure): let the cat out of the bag, spill the beans, blow the whistle, lay cards on the table, open a can of worms. Group 4 (avoidance): beat around the bush, sit on the fence, turn a blind eye, drag one\'s feet, bury one\'s head in sand. Group 5 (success/failure): hit the nail on the head, miss the boat, fall flat, steal the show, make the cut.','For each idiom: learn the literal image first, then the figurative meaning. "Red herring" = a smelly fish dragged across a path to mislead hunting dogs → something that misleads from the real issue. The image locks the meaning permanently.',35),
        s('d69-e2','Idiom Application — 20 MCQs (Meaning + Usage in Context)','20 questions alternating between: (a) "What does the phrase X mean?" and (b) "Which sentence uses the idiom correctly?" Both formats appear in Tier 2. For format (b): one option uses the idiom correctly in context, the rest use it grammatically but contextually wrong.','Wrong idiom usage trap: "He burned the midnight oil to watch movies" — grammatically fine, contextually wrong (the idiom implies hard productive effort, not leisure). SSC uses this exact trap format.',25),
      ]),
      WD_QR('d69',[
        s('d69-qr1','Coordinate Geometry — All 12 Core Formulas + 20 PYQs','Memorize all 12 formulas first (5 min). Then 20 PYQs. Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]. Section formula internal: x = (mx₂+nx₁)/(m+n). Slope: m = (y₂-y₁)/(x₂-x₁). Perpendicular condition: m₁×m₂ = -1. Parallel: m₁ = m₂. Distance from point (x₁,y₁) to line ax+by+c=0: |ax₁+by₁+c|/√(a²+b²). Circle standard form: (x-h)²+(y-k)²=r².','Area of triangle with vertices (x₁,y₁),(x₂,y₂),(x₃,y₃) = ½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|. This formula eliminates the need to find base and height — faster in exams by 45 seconds.',45),
        s('d69-qr2','CKT Daily — Number Systems + Data Representation (10 min)','Binary, octal, hexadecimal number systems. Conversions: binary to decimal (positional notation), decimal to binary (repeated division), binary to hexadecimal (group 4 bits). Data representation: ASCII code concept, Unicode. Storage units: 1 byte = 8 bits, 1 KB = 1024 bytes, 1 MB = 1024 KB.','Hexadecimal uses 0-9 and A-F. A=10, B=11, C=12, D=13, E=14, F=15. Binary 1111 = Hex F = Decimal 15. This conversion is the most commonly tested CKT number system question.',10),
      ]),
      WD_GA('d69',[
        s('d69-ga1','Science: Optics — Reflection, Refraction, TIR, Lenses','Mirror formula: 1/v + 1/u = 1/f. Magnification m = -v/u (negative=inverted, positive=erect). Snell\'s law: n₁sinθ₁ = n₂sinθ₂. Refractive index: glass≈1.5, water≈1.33, diamond≈2.42 (highest). Critical angle for glass-air: sin(C)=1/n ≈ 41.8°. Optical fibre: TIR keeps light inside through continuous total internal reflection at glass-air boundary. Mirage: TIR of light from sky in hot air layers near ground — apparent water on roads.','Diamond has the highest refractive index among common substances (2.42). This is why it sparkles — light undergoes TIR multiple times inside before exiting. High refractive index = low critical angle = more TIR. Tier 2 asks this as a "why does diamond sparkle" question.',35),
      ]),
    ],
  },
  {
    id:'2026-07-14',dayNumber:70,date:'2026-07-14',phase:4,tier:2,weekNumber:11,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 70 — One Word Substitution T2 + Sequence & Series + Modern History',
    promptBlock:`OPERATIVE BRIEFING — DAY 70

Tuesday of Week 11. One Word Substitution (OWS) is the most efficiently learnable topic in SSC English — it is 100% memory-based and appears 5-8 times in Tier 2. Two focused sessions give disproportionate return.

ENGLISH — ONE WORD SUBSTITUTION:
SSC draws from a consistent pool of ~200 OWS words. Rare words appear repeatedly across papers: misanthrope (hater of mankind), philatelist (stamp collector), bibliophile (book lover), numismatist (coin collector), ornithologist (bird expert), entomologist (insect expert), pedant (obsessive about rules), iconoclast (challenges established beliefs). Today: 50 OWS words from the high-frequency SSC pool.

SEQUENCE & SERIES:
AP: nth term = a + (n-1)d, sum = n/2[2a+(n-1)d]. GP: nth term = ar^(n-1), sum = a(r^n-1)/(r-1). HP: reciprocals form an AP. AM ≥ GM ≥ HM. Special sums: Σn = n(n+1)/2, Σn² = n(n+1)(2n+1)/6, Σn³ = [n(n+1)/2]². Tier 2 combines these with finding missing terms, inserting means, and word problems on savings using AP.

MODERN HISTORY:
The 1857 Revolt through the freedom movement is consistently the highest-value History cluster in Tier 2 GA. Today: causes and nature of 1857 Revolt, key figures, consequences, formation of INC (1885, A.O. Hume), Partition of Bengal 1905, Swadeshi Movement, Home Rule League.`,
    tasks:[
      WD_ENG('d70',[
        s('d70-e1','One Word Substitution — 50 High-Frequency SSC Words','Learn 50 OWS in thematic clusters. COLLECTORS: philatelist (stamps), numismatist (coins), bibliophile (books), oenologist (wine), ornithologist (birds), entomologist (insects), herpetologist (reptiles), ichthyologist (fish), lepidopterist (butterflies), connoisseur (fine arts). BEHAVIOR: misanthrope (hates humans), misogynist (hates women), philanthropist (loves/helps humans), egotist (self-obsessed), pedant (rules-obsessed), iconoclast (challenges conventions), agnostic (uncertain about God), atheist (denies God). SPEECH: loquacious (talks excessively), taciturn (habitually silent), verbose (uses too many words), laconic (uses very few words), eloquent (speaks fluently), ambiguous (has two meanings), equivocal (deliberately vague). MORALITY: altruistic (selfless), magnanimous (generous), parsimonious (extremely frugal), profligate (recklessly wasteful), hedonist (pursues pleasure). PLACES: sanatorium (recovery from illness), mortuary (dead bodies), apiary (bees), aviary (birds), aquarium (fish).','Best OWS method: use the collector cluster — "Phil" = love: philatelist(stamps), bibliophile(books). "Ologist" = expert: ornithologist, entomologist, herpetologist. One suffix unlocks 5-6 OWS answers instantly.',35),
        s('d70-e2','OWS Practice — 25 MCQs from Previous SSC Papers','25 OWS questions from actual SSC Tier 2 papers. For every wrong answer: look up the word etymology. "Omnivore" = omni(all) + vorare(devour). "Herbivore" = herba(grass) + vorare. Knowing roots prevents blanking on half-remembered words.','SSC recycles OWS answers across years. "A place where bees are kept" = apiary has appeared in SSC papers 11 times in the last 8 years. These are guaranteed marks for anyone who has studied the word.',25),
      ]),
      WD_QR('d70',[
        s('d70-qr1','Sequence & Series — AP, GP, HP + Special Sums (25 PYQs)','25 PYQs: 10 AP (finding nth term, sum to n terms, inserting arithmetic means), 8 GP (finding nth term, sum, infinite GP sum = a/(1-r) for |r|<1), 4 HP (find HP term using AP reciprocal method), 3 Special Sum problems (use Σn, Σn², Σn³ formulas). Time: 45 min = 108 sec per question average.','Infinite GP trap: formula sum = a/(1-r) only works when |r| < 1. If |r| ≥ 1, the series diverges (no finite sum). SSC tests this condition as a direct MCQ: "For which value of r does the infinite GP series converge?"',45),
        s('d70-qr2','CKT Daily — Input/Output Devices (10 min)','Input devices: keyboard, mouse, scanner, microphone, webcam, joystick, barcode reader, biometric scanner. Output devices: monitor, printer (inkjet, laser, dot matrix), speakers, plotter, projector. Both (input+output): touchscreen, modem. Printer speed: PPM (pages per minute). Monitor resolution: 1920×1080 = Full HD, 3840×2160 = 4K.','Dot matrix printer uses impact — creates carbon copies. Only printer type that works with carbon paper. Inkjet = liquid ink sprayed. Laser = toner fused by heat. CKT tests "which printer creates carbon copies" — the answer is always dot matrix.',10),
      ]),
      WD_GA('d70',[
        s('d70-ga1','Modern History — 1857 Revolt + INC Formation + Early Nationalist Movements','1857 Revolt: immediate cause = greased cartridges (Enfield rifle). Mangal Pandey first to rebel (Barrackpore). Rani Lakshmibai of Jhansi, Tantia Tope, Nana Sahib, Bahadur Shah Zafar (last Mughal, nominal leader). Consequences: East India Company rule ended. Government of India Act 1858 — Crown rule began. INC formed 1885 by Allan Octavian Hume (retired British civil servant). First President: Womesh Chandra Bonnerjee. First session: Bombay. Partition of Bengal 1905 by Curzon — triggered Swadeshi Movement. Tilak: "Swaraj is my birthright and I shall have it." Home Rule League: Tilak (1916, Poona) and Annie Besant (1916, Madras) — launched simultaneously.','INC 1885 four-item cluster: A.O. Hume + 1885 + Bombay + Bonnerjee. All four appear as options in different questions across papers. Memorize as a single unit, not four separate facts.',35),
      ]),
    ],
  },
  {
    id:'2026-07-15',dayNumber:71,date:'2026-07-15',phase:4,tier:2,weekNumber:11,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 71 — Sentence Improvement T2 + Probability + Polity: Parliament',
    promptBlock:`OPERATIVE BRIEFING — DAY 71

Wednesday. Midweek. The discipline required on a Wednesday afternoon is qualitatively different from Monday morning motivation. This is where the exam is won — when you study even though you do not feel like it.

ENGLISH — SENTENCE IMPROVEMENT:
Tier 2 Sentence Improvement questions give you a sentence with one underlined part and ask you to choose the grammatically correct replacement. The errors tested at Tier 2 level: (1) "The number of" + plural noun + singular verb. (2) "A number of" + plural noun + plural verb. (3) Double negatives ("can't hardly" is wrong — "can hardly" is correct). (4) "Between you and me" — NOT "between you and I" (prepositions take objective case). (5) Collective nouns in formal written English take singular verb. These require explicit rule knowledge, not intuition.

PROBABILITY:
P = favorable outcomes / total outcomes. Conditional probability: P(A|B) = P(A∩B)/P(B). Addition theorem: P(A∪B) = P(A) + P(B) - P(A∩B). Multiplication theorem for independent events: P(A∩B) = P(A)×P(B). Complementary: P(A') = 1-P(A). Application: cards (52 cards, 4 suits, 13 ranks, 12 face cards), two dice (36 outcomes), bag problems (with/without replacement).

POLITY — PARLIAMENT:
Rajya Sabha: max 250 (238 elected + 12 nominated). Permanent body — never dissolved. Lok Sabha: max 552 (530+20+2 nominated Anglo-Indians, abolished 104th Amendment 2020), 5-year term. Sessions: Budget (Feb), Monsoon (Jul), Winter (Nov). Quorum: 1/10th of total membership. Money Bill (Art 110) — only introduced in Lok Sabha, Rajya Sabha can only delay 14 days. Joint sitting (Art 108) — presided by Lok Sabha Speaker.`,
    tasks:[
      WD_ENG('d71',[
        s('d71-e1','Sentence Improvement — 25 T2 Level Questions (Rules-Based)','25 sentence improvement questions: Subject-verb agreement (5 Qs) — collective nouns, "each/every" + singular, "neither/nor" verb agrees with closer subject. Modifier errors (5 Qs): dangling + misplaced. Comparative/superlative (5 Qs): "elder" (family only) vs "older" (general), "former/latter" (only for two items), "between" (two) vs "among" (three+). Who/whom (5 Qs): substitute "he" — if fits, use "who"; if "him" fits, use "whom." Tense sequence (5 Qs): past perfect for earlier of two past actions.','The number/a number rule: "The number of applicants HAS increased" (singular) vs "A number of applicants HAVE applied" (plural). Tested at least twice per Tier 2 paper. Make this automatic.',35),
        s('d71-e2','Fill in the Blanks — Double Blank Advanced (15 Qs)','15 double-blank questions at Tier 2 level. Strategy: (1) Read full sentence for logic. (2) Identify relationship between blanks (contrasting, reinforcing, causal). (3) Eliminate pairs where either word fails. (4) Tone matching: if blank 1 needs a positive word, eliminate all pairs with negative word in position 1.','The fastest elimination: tone mismatch. If the sentence context is clearly negative/critical, any option with a positive word in the relevant blank is wrong. Reduces 4 options to 2 in under 5 seconds.',25),
      ]),
      WD_QR('d71',[
        s('d71-qr1','Probability — All Theorem Types + 20 PYQs','20 PYQs: Simple probability (4), Conditional probability (4), Addition theorem (4), Multiplication for independent events (4), Bag problems with/without replacement (4). Key values: P(red card) = 26/52 = 1/2. P(ace) = 4/52 = 1/13. P(face card) = 12/52 = 3/13. P(king of hearts) = 1/52. Two dice: P(sum=7) = 6/36 = 1/6 (highest probability sum). P(sum=2 or 12) = 1/36 each (lowest).','Without replacement changes each draw\'s probability. If 3 red and 2 blue balls: P(red draw 1) = 3/5. P(blue draw 2 | red draw 1) = 2/4 = 1/2. P(both) = 3/5 × 1/2 = 3/10. This is multiplication theorem for dependent events.',45),
        s('d71-qr2','CKT Daily — Software Types + Programming Languages (10 min)','System software: OS, device drivers, utilities. Application software: word processors, browsers, games, media players. Utility software: WinZip, VLC, CCleaner. Programming languages: machine language (binary), assembly, high-level (C, Java, Python). Compiler: translates entire program at once (C, C++). Interpreter: translates line by line (Python, JavaScript).','Java is both compiled AND interpreted: source code → bytecode (compiled by javac) → executed by JVM (interpreted). This "write once, run anywhere" feature makes Java platform-independent. CKT frequently asks about Java\'s portability.',10),
      ]),
      WD_GA('d71',[
        s('d71-ga1','Polity — Parliament: Composition, Bills, Motions, Joint Sitting','Rajya Sabha: 238 elected by state legislatures (Single Transferable Vote), 12 nominated by President for arts/science/literature/social service. 1/3 retire every 2 years, 6-year term. Lok Sabha dissolved by President on PM\'s advice. Zero Hour: questions without prior notice, starts at 12 noon. Adjournment Motion: discusses definite matter of urgent public importance (debatable). Censure Motion: against a specific minister (can be passed without government falling). No-confidence Motion: against entire Council of Ministers — only in Lok Sabha — if passed, government MUST resign. Confidence Motion: moved by PM himself to prove majority.','Difference: Censure Motion (against specific minister) vs No-confidence Motion (against entire cabinet). Censure can be passed without bringing down the government. No-confidence passed = government falls. This distinction is a direct Tier 2 question.',35),
      ]),
    ],
  },
  {
    id:'2026-07-16',dayNumber:72,date:'2026-07-16',phase:4,tier:2,weekNumber:11,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 72 — RC Sprint Training + Time Speed Distance T2 + Economy: Budget & GST',
    promptBlock:`OPERATIVE BRIEFING — DAY 72

Thursday. Today has the highest yield combination for Tier 2: RC sprint training (single highest-weight English topic), TSD advanced (appears 8-10 times in every Quant paper), and Economics GA (dense, reliably tested, rewards pattern memorization).

RC SPRINT TECHNIQUE:
Tier 2 RC requires reading 600-800 words and answering 8-10 questions in 15 minutes. Most candidates read too slowly because they read as if studying. Exam RC technique: read first paragraph fully (sets context), skim middle paragraphs noting only the topic of each, read last paragraph fully (conclusion). This gives you the full argument structure in 4-5 minutes. Then answer inference and main idea questions from memory. Re-read only specific lines for detail questions.

TIME SPEED DISTANCE — TIER 2:
Average speed for equal distances = 2xy/(x+y). Relative speed: same direction = |s₁-s₂|, opposite = s₁+s₂. Trains: passing a pole → distance = length of train. Passing a platform → distance = train + platform length. Boats: upstream = B-R, downstream = B+R. Speed in still water = (down+up)/2. Stream speed = (down-up)/2. Circular track: two runners meet every L/(s₁+s₂) seconds (opposite) or L/(s₁-s₂) seconds (same direction).

ECONOMICS — BUDGET & GST:
Union Budget presented Feb 1 (changed from last day of February in 2017). Revenue Budget + Capital Budget. Fiscal Deficit = Total Expenditure - Revenue Receipts - Non-debt Capital Receipts. Revenue Deficit = Revenue Expenditure - Revenue Receipts. Primary Deficit = Fiscal Deficit - Interest Payments. GST implemented July 1, 2017. Four slabs: 5%, 12%, 18%, 28%. GST Council chaired by Finance Minister.`,
    tasks:[
      WD_ENG('d72',[
        s('d72-e1','RC Sprint — 2 Passages (700 words each, 15 min per passage)','Passage 1 (15 min): Apply sprint technique — full first para (90 sec), skim middle paragraphs noting topic only (3 min), full last para (90 sec), answer questions (9 min). Passage 2 (15 min): Same technique. Track: how many correct vs wrong, did you finish in time? RC sprint degrades without practice and improves rapidly with it.','RC sprint enemy #1: going back to re-read for every question. Trust your mental map for inference/tone/main-idea questions. Only re-read for specific line-reference questions. Rereading the full passage wastes 4-5 minutes.',30),
        s('d72-e2','Vocabulary from RC + 15 Synonym/Antonym Questions','Extract the 8 hardest vocabulary words from today\'s RC passages. Find their synonyms and antonyms. Then: 15 additional synonym/antonym questions from SSC Tier 2 PYQs. Focus words: perspicacious, obdurate, loquacious, reticent, sycophant, belligerent, equanimity, vacillate, perfidious, mendacious.','Antonym questions are easier than synonym: if "belligerent" is the word, you know it\'s negative/aggressive — immediately eliminate any option that is also aggressive. Tone-based elimination narrows 4 choices to 2 without knowing the exact word.',25),
      ]),
      WD_QR('d72',[
        s('d72-qr1','TSD T2 — Trains + Boats + Circular Track (20 PYQs)','20 problems: 7 train problems (passing pole, passing platform, two trains meeting/crossing), 7 boat problems (upstream, downstream, finding speed of boat or stream), 6 circular track problems (meeting point, first meeting, number of meetings). Each problem: draw a diagram, label given values, identify the formula before computing.','Boat problem shortcut: downstream speed = d, upstream = u → speed of boat = (d+u)/2, speed of stream = (d-u)/2. Derived once, memorized forever — saves 60 seconds per boat problem in the exam.',45),
        s('d72-qr2','CKT Daily — Internet Protocols + WWW (10 min)','Protocols: HTTP (web pages, port 80), HTTPS (secure, port 443), FTP (file transfer, port 21), SMTP (send email, port 25), POP3 (receive email, port 110), DNS (domain name to IP). WWW invented by Tim Berners-Lee at CERN, 1991. Browsers: Chrome, Firefox, Edge, Safari. URL structure: protocol://domain/path.','Tim Berners-Lee invented WWW (1989-1991 at CERN) — NOT the internet itself (internet existed before). Internet = the global network infrastructure. WWW = the system of interlinked web pages running on top of it.',10),
      ]),
      WD_GA('d72',[
        s('d72-ga1','Economics — Union Budget, Fiscal Deficit Types, GST','Budget types: surplus (receipts > expenditure), deficit (expenditure > receipts), balanced. Fiscal Deficit = most important deficit indicator = total borrowing requirement of the government. Revenue Deficit = most dangerous deficit type — means government is borrowing for current (non-capital) expenses. Primary Deficit = Fiscal Deficit - Interest Payments = shows structural deficit excluding debt servicing burden. FRBM Act 2003: mandated reducing fiscal deficit to 3% of GDP. GST: implemented July 1, 2017, by Constitution (101st Amendment) Act 2016. Council: Finance Minister (chair), state Finance Ministers. GST is a destination-based tax — tax goes to consuming state, not producing state.','GST July 1, 2017 — single most tested date in recent Economic Affairs GA. President addressed special midnight Parliament session on June 30-July 1, 2017 for GST launch. This midnight session detail appears in current affairs questions.',35),
      ]),
    ],
  },
  {
    id:'2026-07-17',dayNumber:73,date:'2026-07-17',phase:4,tier:2,weekNumber:11,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 73 — Error Spotting T2 Advanced + Circles Theorems + India Rivers',
    promptBlock:`OPERATIVE BRIEFING — DAY 73

Friday. Last weekday of Week 11. Tomorrow begins the mock weekend. Today's quality determines tomorrow's readiness. Do not arrive at Saturday's mock underprepared because you coasted on Friday.

ERROR SPOTTING — TIER 2 ADVANCED RULES:
The most productive study approach: learn the rule explicitly, then find examples of its violation. Today's rules: (1) "The number of" + plural noun + singular verb. (2) "A number of" + plural noun + plural verb. (3) Double negatives: "can't hardly" → wrong; "can hardly" is correct. (4) "Between you and me" NOT "between you and I" (prepositions take objective case: me/him/her/us/them). (5) Split infinitives. (6) Pronoun antecedent agreement. These require rule knowledge, not ear.

CIRCLES — ADVANCED THEOREMS:
Angle in a semicircle = 90° (Thales' theorem). Angle subtended at centre = 2 × angle at circumference (same arc). Angles in the same segment are equal. Opposite angles of a cyclic quadrilateral sum to 180°. Tangent-radius angle = 90°. Two tangents from external point are equal in length. Tangent-chord angle = inscribed angle in alternate segment (Alternate Segment Theorem — most tested advanced theorem in SSC Tier 2).

INDIA'S RIVERS:
Himalayan Rivers (perennial, snow-fed): Indus, Ganga, Brahmaputra. Peninsular Rivers (seasonal, rain-fed): Godavari, Krishna, Kaveri, Mahanadi, Narmada, Tapti. Eastward flowing (Bay of Bengal): Ganga, Brahmaputra, Mahanadi, Godavari, Krishna, Kaveri. Westward flowing: Narmada, Tapti, Periyar. Narmada and Tapti are special: Peninsular rivers flowing west through rift valleys.`,
    tasks:[
      WD_ENG('d73',[
        s('d73-e1','Error Spotting T2 — 25 Questions (Rule-Explicit Approach)','25 error spotting questions. For each: before looking at options, name the rule being tested. Do not rely on "sounds wrong." Rules checklist to apply: (a) subject-verb agreement, (b) pronoun case (who/whom, I/me, he/him), (c) double negative, (d) comparative/superlative degree, (e) article usage (a/an/the), (f) preposition correctness, (g) tense sequence, (h) modifier placement. Only after naming the suspected rule look at options.','Between + objective case: "between you and me" is always correct. "Between you and I" is always wrong — "I" is subjective case. Prepositions (between, with, for, of, from) always take objective case. This rule eliminates one distractor in most pronoun questions.',35),
        s('d73-e2','RC — Inference Questions Only (1 Passage, 10 Questions)','Read 1 RC passage (650 words). Answer only the inference questions — "what the author implies," "suggests," "would most likely agree with," "can be inferred." These are the hardest RC question type because the answer is never directly stated — it must be deduced.','Inference answer validation: before selecting, ask "Is this directly supported by specific text in the passage?" If yes → likely correct. If it requires assumptions beyond the passage → likely wrong. Tier 2 traps use options that are true in the real world but not supported by the specific passage.',25),
      ]),
      WD_QR('d73',[
        s('d73-qr1','Circles Advanced — Theorems + 20 PYQs','20 problems: Thales\' theorem (5 Qs — angle in semicircle = 90°), Centre-circumference angle theorem (4 Qs — angle at centre = 2× angle at circumference for same arc), Cyclic quadrilateral (4 Qs — opposite angles sum 180°), Alternate Segment Theorem (5 Qs — tangent-chord angle = inscribed angle in alternate segment), Two tangents from external point equal (2 Qs — find lengths or angles).','Alternate Segment Theorem: if tangent PT touches circle at T and TQ is a chord, then ∠PTQ (between tangent and chord) = ∠TRQ (inscribed angle in the alternate segment, R any point on major arc). Gives the answer in 10 seconds on 4-5 Tier 2 problems.',45),
        s('d73-qr2','CKT Daily — Cybersecurity + Malware Types (10 min)','Malware: virus (attaches to files, needs host), worm (self-replicating, spreads without host), Trojan (disguised as useful software), ransomware (encrypts data, demands payment), spyware (secretly monitors), adware (shows ads). Phishing: fake emails/websites to steal credentials. Firewall: filters network traffic. Encryption: converting data to unreadable form. HTTPS uses SSL/TLS encryption.','Worm vs Virus: virus needs a host file to spread, worm spreads independently over a network. WannaCry ransomware (2017) affected 200,000 computers in 150 countries — largest ransomware attack. Exploited Windows EternalBlue vulnerability.',10),
      ]),
      WD_GA('d73',[
        s('d73-ga1','Geography — Indian River Systems + Drainage Patterns','Ganga: originates Gangotri glacier (Uttarakhand), length 2,525 km (longest in India). Major tributaries: Yamuna (right bank joins at Prayagraj), Ghaghra, Gandak, Kosi from Nepal (flood-prone). Brahmaputra: originates Tibet (Tsangpo), enters India through Arunachal Pradesh. Largest river by volume. Godavari: "Dakshina Ganga," originates Nashik (Maharashtra), 1,465 km — longest Peninsular river. Krishna: originates Mahabaleshwar (Maharashtra). Kaveri: originates Coorg/Brahmagiri hills (Karnataka), dispute between Karnataka and Tamil Nadu over waters. Narmada: westward flowing, originates Amarkantak (MP), flows through rift valley, enters Gulf of Khambhat. Forms estuary (not delta) because of hard rocky bed.','Key distinction: Ganga forms the world\'s largest delta — Sundarbans (shared with Bangladesh). Narmada and Tapti form estuaries (funnel-shaped) — NOT deltas. The reason: they flow through hard rocky rift valleys with less sediment deposition.',35),
      ]),
    ],
  },
  {
    id:'2026-07-18',dayNumber:74,date:'2026-07-18',phase:4,tier:2,weekNumber:11,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 74 — Weekend: Full Mock + Weak Area Deep Study + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 74 (SATURDAY — WEEK 11 MOCK)

This is your third mock weekend in Tier 2 preparation. By now you should notice a score trajectory. The scoring trend matters more than any single mock score. If Week 9's mock was 120/390 and Week 11's is 160/390, that is a strong trajectory. If scores are flat, your mock analysis process needs to change.

MOCK ANALYSIS PROTOCOL — REFINED:
Step 1 (immediately after, 5 min): Record section-wise — questions attempted, questions correct, accuracy%. Step 2 (30 min): For EVERY wrong answer — write the topic, your answer, correct answer, and the rule/formula you should have applied. Step 3 (2 hours): Deep study on the 2 topics with the most wrong answers. Step 4 (1 hour): Re-attempt the wrong questions without looking at answers. This re-attempt step is skipped by 90% of candidates — it accounts for 80% of the improvement gap.

DEST TARGET WEEK 11: 30+ WPM. If below 30 — type for 20 minutes and measure. If at 30-34 — push to 35. If at 35+ — focus on reducing error rate below 5%.`,
    tasks:[
      WE_MT('d74',[
        s('d74-m1','Full Tier 2 Paper 1 Mock (2h 15min — Strict Exam Conditions)','Full mock: 90 Quant + 90 English. Section timing: English 45 min (aim 70+ attempts), Quant+Reasoning 90 min (aim 65+ attempts). GA if included: 25 min. Rules: no pausing, no phone, no reference. Skip any question taking more than 75 seconds — mark for return. Track your score honestly.','Mock strategy update Week 11: your skip reflex should be automatic now. At 60 seconds on a question with no progress: mark and move. Time recovered on skipped questions is always more productive than grinding a hard question.',135),
        s('d74-m2','DEST Practice — 20 Minutes (Accuracy + Speed Sessions)','Two 10-minute DEST sessions. Session 1: accuracy focus — type at comfortable speed, no backspacing to simulate exam. Session 2: speed focus — push 3-4 WPM above session 1 speed. Measure and record both WPM and error% for each session.','DEST principle: your exam WPM will be 10-15% lower than practice WPM due to stress. So if your target is 35 WPM in the exam, practice until you consistently hit 40 WPM in sessions.',20),
      ]),
      WE_DS('d74',[
        s('d74-d1','Mock Analysis — Full Paper Error Categorization (1 hour)','For every wrong answer: (1) write the topic (e.g., "Idioms," "Probability," "Circles"). (2) Write your answer vs correct answer. (3) Write the rule you should have applied. After all questions: count errors per topic. Top 2 topics by error count = today\'s deep study targets.','Analysis insight: 60-70% of errors cluster in just 3-4 topics. Fixing those 3-4 topics gives disproportionate score improvement. Spreading study across all topics equally is inefficient.',60),
        s('d74-d2','Deep Study — Top 2 Weak Topics from Mock (2 hours)','1 hour per weak topic. For each: (a) re-read core theory/rules, (b) solve 15 PYQs with full method for each, (c) write key formulas/rules in your own words. If weak topic is English grammar — re-study specific rules with examples. If Quant — re-study formulas with 2-3 application examples each.','Deep study is not passive re-reading. It is solving problems, getting them wrong, understanding why, then solving again. Active retrieval beats passive review by a factor of 3 in retention.',120),
        s('d74-d3','Re-attempt Mock Wrong Questions — Without Answers (1 hour)','Re-attempt every question you got wrong in the mock — without looking at correct answers first. This tests whether deep study actually fixed the gaps. Any question you get wrong again → add to "critical weak" list for Week 12 priority.','Re-attempting wrong questions closes the learning loop. Without this step, deep study is theoretical. Re-attempting makes it applied — the closest simulation to actually fixing the knowledge gap before the real exam.',60),
      ]),
    ],
  },
  {
    id:'2026-07-19',dayNumber:75,date:'2026-07-19',phase:4,tier:2,weekNumber:11,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 75 — Weekend: Comprehensive Review + Second Mock + Week 11 Assessment',
    promptBlock:`OPERATIVE BRIEFING — DAY 75 (SUNDAY — WEEK 11 CLOSE)

Sunday of Week 11. One week remains in Phase 4. After Week 12, Phase 5 begins — the acceleration phase where mock frequency doubles and time available per day drops to 2.5 hours. Use today to shore up every gap from this week so you enter Phase 5 from strength.

ENGLISH REVIEW TARGET — WEEK 11:
By end of Week 11, you should have solid control over: RC sprint technique (both passage types), Error Spotting (all 8 rule categories), One Word Substitution (top 50), Idioms (40 from Monday), Sentence Improvement (5 rule categories). Any topic below 75% accuracy = must be on Week 12 priority list.

QUANT REVIEW TARGET — WEEK 11:
Coordinate Geometry, Probability, Sequence & Series, TSD Advanced, Circles Advanced — all covered this week. Self-test: can you recall the key formulas for each topic from memory without looking? If any formula requires a lookup, it is not ready for exam conditions.

PHASE 4 → PHASE 5 TRANSITION:
Week 12 is the final week of Phase 4. The objective: consolidate all Phase 4 topics so that entering Phase 5, your foundation is unshakeable. Week 12 will include the Phase 4 comprehensive mock and the transition briefing for Phase 5.`,
    tasks:[
      WE_DS('d75',[
        s('d75-d1','English Comprehensive Review — Week 11 Topics (2 hours)','Rotating review: 30 min — 20 mixed questions from Idioms + OWS (memory check, no notes). 30 min — 15 error spotting questions (rule-explicit method, note which rules you are still guessing on). 30 min — 1 RC passage (sprint technique, full analysis after). 30 min — 10 sentence improvement + 10 double-blank questions.','Weight your review time toward the topics where you had lowest accuracy in Saturday\'s mock. Do not spread time equally — proportional investment to weakest areas gives fastest score improvement.',120),
        s('d75-d2','Quant Comprehensive Review — Week 11 Topics (2 hours)','30 min: 10 coordinate geometry problems (mix all formula types). 30 min: 10 probability problems (include conditional + bag problems). 30 min: 10 TSD problems (trains + boats). 30 min: 10 circle theorem problems (focus on Alternate Segment Theorem).','Formula memory test: before each 30-min block, spend 2 minutes writing all formulas for that topic from memory with no reference. Any formula you cannot write = the formula you will blank on in the exam. Identifying this now gives you a week to fix it.',120),
      ]),
      WE_MT('d75',[
        s('d75-m1','Second Mock or Targeted Practice (90 min)','If energy permits: full 2h15min mock. If fatigued from Saturday: targeted 90-minute mock covering only your 3 weakest topics from Week 11 (30 questions per topic, timed at 75 seconds per question). The goal is additional practice reps on weak areas, not endurance for its own sake.','Targeted mock insight: 30 questions on your weakest topic is more valuable than 90 random questions spread across all topics. It compresses your practice into the highest-leverage area.',90),
        s('d75-m2','Week 11 Assessment + Week 12 Planning (30 min)','Write Week 11 assessment: (a) List all topics covered this week. (b) Rate each: Strong / Needs Practice / Weak. (c) List the 3 topics still rated "Weak" — these become Week 12 priority items. (d) Mock score trend: Week 9 → Week 10 → Week 11. Is the trajectory positive? If not, what changed in the analysis process must change.','Weekly self-assessment is the steering mechanism of your preparation. Without it, effort is random. With it, effort is directed at highest-yield gaps. Candidates who do weekly assessments improve 2× faster than those who do not.',30),
      ]),
    ],
  },
]
