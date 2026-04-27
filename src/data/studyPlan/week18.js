// Week 18 — Aug 31 (Mon) to Sep 6 (Sun) — Phase 6: Tier 2 Final Sprint | Days 118-124
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
    id:'2026-08-31', dayNumber:118, date:'2026-08-31', phase:6, tier:2, weekNumber:18,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 118 — Grammar Zero-Error Drill + Mixed GA Rapid-Fire + Quant Zero-Error + CKT',
    promptBlock:`OPERATIVE BRIEFING — DAY 118 | WEEK 18 BEGINS

Week 18. The exam is 19 days away.

This week introduces a new psychological frame: zero-error drilling. Not "target 90%" — target ZERO errors in every drill you attempt today. The reason is mathematical.

THE MATHEMATICS OF 335:
To score 335 out of 390, with the Quant+Reasoning section at 195 marks (130 Qs × 1.5 marks each, with -0.5 per wrong): If you attempt 120 questions and need to score 150 from them, you need approximately 112 correct and 8 wrong. That gives you: (112 × 1.5) - (8 × 0.5) = 168 - 4 = 164 from Quant+Reasoning. But this math only works if you are CHOOSING the right questions to attempt. Random wrong answers — careless errors on easy questions — destroy this calculation.

Therefore: Zero careless errors tolerated from this week forward. Not as an aspiration. As a discipline.

GRAMMAR ZERO-ERROR:
30 elite PYQs. Target: 29/30. The one you miss should be a genuinely hard question, not a careless rule application.

GA RAPID-FIRE:
50 questions in 30 minutes. This is GA at exam speed. 36 seconds per question. No hesitation allowed.

CKT is core. 10 minutes daily. Non-negotiable.`,
    tasks: [
      WD_ENG('d118','2026-08-31',[
        s('d118-e1','Grammar Zero-Error Drill — 30 Elite PYQs (Target 29/30) (35 min)','30 elite grammar PYQs across all error types. Enforce the zero-error mindset: before marking any answer, state the rule in your head that justifies it. If you cannot state the rule — do NOT mark that answer yet. Work through elimination. Time: 35 minutes for 30 questions (~70 seconds each). After completing: review every answer, not just wrong ones. Even correct answers should be justified by a named rule.','Zero-error grammar discipline: The most dangerous grammar errors are the ones you get right for the wrong reason. Force yourself to name the rule for every correct answer as well — this is what separates 29/30 from 25/30.',35),
        s('d118-e2','Grammar Error Analysis (10 min)','Review all 30 answers. For any wrong answer: write the rule name, the error you made, and the correct reasoning in two sentences. If your score was 29/30: identify what made that one question hard — was it a genuinely ambiguous construction, or an overlooked rule?','If score below 27/30: you have grammar precision gaps that must be closed in the next 5 days. Identify the failing rule categories specifically.',10),
      ]),
      WD_GA('d118','2026-08-31',[
        s('d118-ga1','All Topics Mixed Rapid-Fire — 50 Qs in 30 Minutes (25 min)','50 GA questions drawn from all topics (Polity, Economy, History, Geography, Science, CA) in random order. Strict 30-minute timer. 36 seconds per question. Do not pause to think for more than 20 seconds — if not recalled, mark your best guess and move. After 30 minutes: score and identify which topic had the most misses.','Rapid-fire GA reveals your weak topics faster than any diagnostic. The topic where you hesitate the most is the topic that needs the most attention this week.',25),
        s('d118-ga2','Weak Topic Rapid Review (20 min)','Based on the rapid-fire test: take the 2 topics with the most misses and do a 10-minute rapid review of each. Do not re-study comprehensively — just re-read your summary notes for those topics.','At this stage, focused re-exposure to weak topics is more valuable than comprehensive revision of topics you already know.',20),
      ]),
      WD_QR('d118','2026-08-31',[
        s('d118-qr1','Quant Zero-Error Drill — 30 Hardest PYQs (Target 27/30) (40 min)','30 hardest Tier 2 Quant PYQs. Zero-error discipline: Do NOT rush. For each question, execute the full solution path before marking. If a calculation seems off — recheck once before marking. Target: 27/30 minimum. The 3 you miss should be genuinely hard questions, not careless errors. Time budget: 40 minutes (80 seconds average per question, which is slower than exam pace — this is an accuracy drill, not a speed drill).','The danger zone: Questions where you are "pretty sure" about an answer without fully computing it. At this preparation stage, "pretty sure" is not good enough. Full computation on every question.',40),
        s('d118-qr2','CKT — Networking Basics (10 min)','Computer Networks: LAN (Local Area Network — limited geographic area), WAN (Wide Area Network — larger geographic area, e.g., internet), MAN (Metropolitan Area Network — city-level). Network topologies: Bus (single cable, all connected to it), Star (all connected to central hub/switch), Ring (circular connection), Mesh (every node connected to every other node), Tree (hierarchical). IP address: IPv4 = 32-bit (e.g., 192.168.1.1), IPv6 = 128-bit. DNS: Domain Name System — translates domain names to IP addresses. HTTP: HyperText Transfer Protocol — application layer. HTTPS: secure version using SSL/TLS. FTP: File Transfer Protocol. SMTP: Simple Mail Transfer Protocol (email sending). POP3/IMAP: email receiving protocols.','The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. Remember with mnemonic: "Please Do Not Throw Sausage Pizza Away." This appears in CKT papers.',10),
      ]),
    ],
  },
  {
    id:'2026-09-01', dayNumber:119, date:'2026-09-01', phase:6, tier:2, weekNumber:18,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 119 — RC Final Calibration + CA+Static Combo + DI Zero-Error + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 119

RC FINAL CALIBRATION:
Three passages, three different text types. Editorial (opinion-based — author has a clear stance), Scientific (data-heavy — accuracy of detail is critical), Narrative (story-based — inference about character/mood/intent). Each text type requires a slightly different approach. By calibrating across all three today, you train your brain to adapt instantly to whatever passage appears in the exam.

CA + STATIC COMBO:
The Tier 2 GA section tests both current affairs and static GK in the same 25-question paper. Training them separately means you haven't trained the cognitive switching. Today's combo test: questions from CA and static mixed randomly, at exam speed.

DI ZERO-ERROR:
20 DI questions at Tier 2 difficulty. Target: 18+ correct. The two you miss should be genuinely hard multi-step calculations, not data extraction errors or calculation mistakes on simple operations.

DEST sub-3% error today. This should now be achievable consistently.`,
    tasks: [
      WD_ENG('d119','2026-09-01',[
        s('d119-e1','RC Final Calibration — 3 Passages (Editorial + Scientific + Narrative) (35 min)','Three passages, three text types. Editorial passage (8 min, 5 Qs): identify the author\'s position first — for or against? Every inference question traces back to this. Scientific passage (8 min, 5 Qs): accuracy of detail is paramount — do not infer beyond what is stated in a science passage. Narrative passage (8 min, 5 Qs): questions will be about the mood, tone, implied meaning — inference is valid here. Review all wrong answers after completing all three.','Critical calibration insight: Applying narrative inference skills to a scientific passage causes wrong answers. Applying scientific literalism to a narrative passage causes wrong answers. The text type determines the answering strategy.',35),
        s('d119-e2','RC Text Type Calibration Notes (10 min)','Write a 3-line strategy for each text type based on today\'s performance. Where did you make errors in each type? What adjustment do you need for each?','These three lines are your exam-day RC protocol. Read them the morning of the exam.',10),
      ]),
      WD_GA('d119','2026-09-01',[
        s('d119-ga1','CA + Static Combo Test — Mixed Questions (25 min)','30 questions alternating between CA and static GK in random order. Do not group them — answer in the order they appear to train cognitive switching. 30 minutes, strict timer. After scoring: note how many were from CA vs static, and which category had more errors.','CA-static switching is the key skill for GA in Tier 2. Most candidates practice them separately and then freeze when questions switch mid-section. Train the switch today.',25),
        s('d119-ga2','CA Gap Fill — Last 15 Days (20 min)','Specifically cover any CA from the last 15 days that you may have missed: new appointments, technology events, sports results, foreign policy developments. Write 3 trigger words per event.','15-day recency is the highest-probability CA zone for the exam. Events from the last 3 weeks before an exam are heavily tested.',20),
      ]),
      WD_QR('d119','2026-09-01',[
        s('d119-qr1','DI Zero-Error Practice — 20 Tier 2 DI Questions (Target 18+) (40 min)','20 DI questions at Tier 2 difficulty: caselet, dual-axis, table+graph combined. Zero-error discipline: Before answering any question, extract and write all relevant data from the chart/table. Do not compute from memory — always re-verify data. Target: 18+ correct. Time: 40 minutes (2 minutes per question average). For multi-step questions: write intermediate calculations, not just final answers — this catches arithmetic errors.','DI error categories: (1) Data extraction error — reading the wrong row/column. (2) Calculation error — arithmetic mistake in otherwise correct approach. (3) Method error — wrong formula/concept. Category 1 and 2 are purely preventable with discipline. Category 3 is the only "real" error.',40),
        s('d119-qr2','DEST — 15 Minutes (Sub-3% Error Target) (15 min)','15-minute DEST session. Today\'s target: sub-3% error rate. This should now be achievable if your Week 17 trajectory was correct. Measure and log. Compare with Day 117 rate. If still above 3%: identify the single most common error type in your sessions (transposition? capitalization? punctuation?) and focus on eliminating it specifically.','Single error type elimination: If your most common error is key transposition (e.g., "teh" for "the"), then practicing slowly for the specific letter sequences that cause it eliminates 30-40% of your total errors.',15),
      ]),
    ],
  },
  {
    id:'2026-09-02', dayNumber:120, date:'2026-09-02', phase:6, tier:2, weekNumber:18,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 120 — Vocabulary Final Test + Polity+Economy+Science Rapid + Quant Elite Sprint + CKT',
    promptBlock:`OPERATIVE BRIEFING — DAY 120

VOCABULARY FINAL TEST:
This is a cold test — write synonyms and antonyms from memory for 30 words without any reference. This is the closest simulation to exam conditions. Any word you cannot recall under cold-test conditions: you do not own that word yet.

POLITY + ECONOMY + SCIENCE COMBINED RAPID TEST:
Three subjects in one rapid-fire session. This trains the same cognitive flexibility required in the actual GA section. The questions do not announce their topic — you must retrieve from the correct mental category instantly.

QUANT ELITE SPRINT:
35 questions in 30 minutes. That is 51 seconds per question — slightly faster than exam pace. This builds the time buffer you need for difficult questions in the actual exam.

CKT: 10 minutes. Cybersecurity and malware types today.`,
    tasks: [
      WD_ENG('d120','2026-09-02',[
        s('d120-e1','Vocabulary Final Cold Test — 30 Words (Write Synonyms + Antonyms from Memory) (35 min)','30 words from your complete vocabulary bank — not self-selected. Use a randomizer or ask someone to pick them. For each word: write one synonym and one antonym from memory without any reference. Score: 1 point per correct synonym + 1 point per correct antonym = 60 total points. Target: 50+/60. After scoring: review every missed word immediately with a mnemonic.','Cold test reality check: Words you can recall correctly in a cold test are the words that will serve you in the exam. Words that fail this test need a different mnemonic approach.',35),
        s('d120-e2','Vocabulary Mnemonic Repair (10 min)','For every word missed in the cold test: create a new, stronger mnemonic. The previous mnemonic did not work — replace it. Use imagery, rhyme, or personal association — whatever makes the word stick for YOU.','Mnemonic repair: Sometimes the problem is not that you forgot the word — it is that your original mnemonic was weak. A strong mnemonic for a word you know is better than a weak mnemonic for a word you studied 10 times.',10),
      ]),
      WD_GA('d120','2026-09-02',[
        s('d120-ga1','Polity + Economy + Science Combined Rapid Test (25 min)','25 questions randomly mixing Polity, Economy, and Science. No pre-announced topic. Timer: 25 minutes. For each question: answer immediately (under 30 seconds) or skip — no lingering. After scoring: note which subject had the most errors today.','Combined rapid test insight: If you consistently do well in individual topic tests but poorly in combined tests, you have a cognitive switching problem, not a knowledge problem. The fix is more combined tests, not more topic revision.',25),
        s('d120-ga2','Weak Subject from Combined Test — Focused 20-Minute Review (20 min)','Take the subject with the most errors from the combined test. Spend 20 minutes on rapid review of that subject only — not comprehensive, just the specific subtopics that caused errors.','Targeted micro-correction at this stage is more effective than broad revision. Focus means progress.',20),
      ]),
      WD_QR('d120','2026-09-02',[
        s('d120-qr1','Quant Elite Sprint — 35 Qs in 30 Minutes (40 min)','35 questions in 30 minutes = 51 seconds per question average. This is slightly faster than exam pace (75 min for 60 Qs = 75 seconds average). The extra speed builds your actual exam buffer. Mixed topics: arithmetic (12), algebra (5), geometry (5), trigonometry (4), mensuration (4), statistics (2), DI (3). After completing: score and note time used. If you could not finish in 30 minutes: which topic type slowed you down?','Speed elite sprint purpose: Under time pressure, you discover which topics you have truly automated (no conscious thinking needed) vs which topics still require deliberate effort. The deliberate-effort topics need more automatization practice.',40),
        s('d120-qr2','CKT — Cybersecurity, Malware, Internet Safety (10 min)','Cybersecurity concepts: Virus (self-replicating program that attaches to files), Worm (self-replicating, spreads without attachment), Trojan Horse (disguised as legitimate software), Spyware (collects user data without consent), Ransomware (encrypts files, demands payment), Adware (unwanted advertisements), Phishing (fraudulent attempt to steal credentials via fake websites/emails), Keylogger (records keystrokes). Antivirus vs Firewall: Antivirus detects/removes malware from files. Firewall monitors and controls incoming/outgoing network traffic. Encryption: converting data into coded form. SSL/TLS: encryption protocols for web security. VPN: Virtual Private Network — creates encrypted tunnel for secure communication.','Ransomware is the most commonly tested modern malware type in competitive exams. WannaCry (2017) is the most famous ransomware attack — know it by name.',10),
      ]),
    ],
  },
  {
    id:'2026-09-03', dayNumber:121, date:'2026-09-03', phase:6, tier:2, weekNumber:18,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 121 — Para Jumbles+Cloze Combined + History+Geography Final + Number Theory+Algebra Elite + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 121

PARA JUMBLES + CLOZE TEST COMBINED:
Both in one 20-minute session. The combined session tests your ability to handle two different cognitive modes: Para Jumbles requires logical sequencing of ideas across sentences, while Cloze Tests require filling blanks based on contextual grammar and vocabulary. Switching between these two modes within the same session is exactly what the exam requires.

HISTORY + GEOGRAPHY FINAL:
The last dedicated session for these two subjects before the exam. Not new learning — this is the final verification that everything you know is accessible under recall pressure.

NUMBER THEORY + ALGEBRA ELITE:
25 of the hardest questions from Number Theory (divisibility, HCF/LCM, remainders, unit digits, factors) and Algebra combined. These are the questions most candidates skip — which is precisely why mastering them gives you a competitive edge.

DEST: 15 minutes. Sub-3% error target. You should be hitting this consistently by now.`,
    tasks: [
      WD_ENG('d121','2026-09-03',[
        s('d121-e1','Para Jumbles + Cloze Test Combined Session — 20 Minutes (35 min)','Para Jumbles: 5 questions (6-7 sentences each), 10 minutes total — 2 minutes per question maximum. Cloze Test: 2 passages (10 blanks each = 20 blanks total), 10 minutes. Total: 20 minutes of intense combined practice. After completing: note how many you finished vs had to guess. Spending more than 2 minutes on any Para Jumble is a warning sign.','Combined session cognitive protocol: After finishing the Para Jumbles section, take 10 seconds to mentally shift mode before starting the Cloze Test. The brain needs a micro-reset between logical sequencing and contextual fill-in.',35),
        s('d121-e2','Remaining Time — Sentence Improvement PYQs (10 min)','10 minutes: 8-10 sentence improvement PYQs. Each question: identify what is wrong in the given sentence before looking at the options. This "diagnosis before options" method builds independent judgment.','Sentence improvement trap: The options often create cognitive anchoring — you evaluate sentences against the options rather than evaluating them independently. Diagnose first, then confirm with options.',10),
      ]),
      WD_GA('d121','2026-09-03',[
        s('d121-ga1','History Final — Full Rapid Recall (25 min)','Complete history rapid recall without notes. Ancient: IVC sites with states, Vedic period distinctions, Buddhist councils and their chairpersons, Mauryan emperors. Medieval: Delhi Sultanate (5 dynasties in order), Mughal emperors and their architects/buildings (Akbar — Fatehpur Sikri, Shah Jahan — Taj Mahal, Humayun\'s Tomb), Bhakti/Sufi saints. Modern: 1857 revolt leaders and their centers, Congress founding, major Gandhi movements and years (Non-Cooperation 1920, Civil Disobedience 1930, Quit India 1942), partition events. Verify your recall against your notes after.','Modern History emphasis for Tier 2: The constitutional development period (1909 Morley-Minto, 1919 Montagu-Chelmsford, 1935 Government of India Act, 1947 Independence) is heavily tested because it connects to Polity.',25),
        s('d121-ga2','Geography Final — Full Rapid Recall (20 min)','Physical: Rivers (and their tributaries), mountain ranges (Karakoram, Hindukush, Himalayas, Western+Eastern Ghats — highest peaks), major passes. Political: border-sharing states, union territories and their characteristics. Economic: mineral belts, major ports (Mumbai, JNPT, Chennai, Visakhapatnam, Paradip, Kolkata, Kandla), airports (IATA codes for major ones). World Geography: major rivers (Nile — longest, Amazon — largest volume), deserts, mountain ranges.','India\'s coastline length: 7,516 km. Longest river in India: Ganga. Highest peak: Kangchenjunga (within India). K2 is in Pakistan-administered Kashmir. These distinctions are exam traps.',20),
      ]),
      WD_QR('d121','2026-09-03',[
        s('d121-qr1','Number Theory + Algebra Elite — 25 Hardest Combined PYQs (40 min)','25 hardest Tier 2 Number Theory and Algebra questions. Number Theory: Unit digit of large powers (cyclicity method — find the repeating cycle of the last digit for the base, then determine position), remainder of large numbers (use Euler\'s theorem and Chinese Remainder Theorem for hard cases, but most SSC questions use pattern recognition), divisibility rules (2, 3, 4, 5, 6, 8, 9, 11 — must be instant recall), finding number of factors of N (express N as prime factorization, then (p1+1)(p2+1)...). Algebra: Expressions where substitution of specific values (x=1, x=0, x=-1) collapses the problem.','Unit digit cyclicity: Unit digits of powers repeat in cycles. For base ending in 2: cycle is 2,4,8,6 (length 4). For base ending in 3: cycle is 3,9,7,1 (length 4). Find the remainder when power is divided by cycle length to determine position in cycle.',40),
        s('d121-qr2','DEST — 15 Minutes (Sub-3% Error Target) (15 min)','15-minute DEST session. Target: sub-3% error rate. If you are already achieving this: attempt a 5-minute speed drill at your maximum speed to benchmark your ceiling speed, then return to comfortable speed for the remaining 10 minutes. Log all rates.','DEST speed ceiling discovery: Your maximum speed where accuracy collapses tells you where you must NOT go in the exam. Stay 10 WPM below your collapse speed during the actual DEST session.',15),
      ]),
    ],
  },
  {
    id:'2026-09-04', dayNumber:122, date:'2026-09-04', phase:6, tier:2, weekNumber:18,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 122 — Full English Timed Test + Full GA Timed Test + Full Quant+Reasoning Timed + CKT Mock',
    promptBlock:`OPERATIVE BRIEFING — DAY 122

Friday. Triple full-section timed test day. Three sectional simulations back-to-back.

ENGLISH TIMED TEST (45 Qs in 50 minutes):
Target: 41+ correct. This is a 91% accuracy requirement. Any score below 38 (84%) is a problem that must be addressed in the weekend deep study block.

GA TIMED TEST (25 Qs in 15 minutes):
15 minutes, 25 questions. 36 seconds per question — but you should be finishing in 12 minutes to give yourself a 3-minute review window. GA at this stage should be automatic retrieval.

QUANT + REASONING TIMED (60 Qs in 75 minutes):
Full simulation. Note: questions 45-60 in the 75-minute window is the fatigue zone — this is where scores collapse for most candidates. Practice maintaining accuracy in the final 20 minutes of the session.

CKT 20-QUESTION MOCK TEST:
Before the end of today, take a 20-question CKT mock from memory. Log your score. This is your Week 18 CKT benchmark.`,
    tasks: [
      WD_ENG('d122','2026-09-04',[
        s('d122-e1','Full English Timed Test — 45 Qs in 50 Minutes (Target 41+) (50 min)','Full English section simulation. 45 questions, 50-minute strict timer — slightly tighter than the actual 60-minute window to build buffer. All question types: Error Detection, Sentence Improvement, Fill-in-the-Blanks, OWS, Idioms, Para Jumbles, Cloze Test, RC (2 passages). Mark raw score immediately after. Note which question types consumed the most time.','50-minute simulation for a 60-minute section: If you finish all 45 questions within 50 minutes in practice, the actual 60-minute exam will give you a 10-minute review buffer. Use that buffer for RC verification and Para Jumbles recheck.',50),
      ]),
      WD_GA('d122','2026-09-04',[
        s('d122-ga1','Full GA Timed Test — 25 Qs in 15 Minutes (25 min)','25 GA questions, 15-minute strict timer. After completing: score and log. Breakdown: how many Polity, Economy, History, Geography, Science, CA — and the accuracy for each category. Any category below 60% accuracy at this stage is a critical gap.','GA 15-minute target: If you cannot finish 25 GA questions in 15 minutes comfortably, practice daily rapid-fire GA at 30-second-per-question pace. Recall speed is the limiting factor, not knowledge depth at this stage.',25),
        s('d122-ga2','GA Error Review (20 min)','Review every wrong answer from the GA timed test. For each error: write the correct answer + write why you got it wrong (never knew it, forgot, confused with another fact). This categorization determines whether you need revision or new learning.','Never knew it: Can still be learned with focused 10-minute topic revision. Forgot: Needs a stronger memory anchor. Confused with another fact: Must explicitly contrast the two similar facts side by side.',20),
      ]),
      WD_QR('d122','2026-09-04',[
        s('d122-qr1','Full Quant + Reasoning Timed — 60 Qs in 75 Minutes (45 min)','Full Quant+Reasoning section simulation. Section strategy: Arithmetic (15 Qs, 15 min) → Advanced Maths (15 Qs, 20 min) → Reasoning (20 Qs, 20 min) → DI (10 Qs, 20 min). If running behind at the 55-minute mark: immediately enter rapid-fire mode on remaining questions — 20 seconds each, best guess if unsure. Never leave questions blank if time permits a guess with >40% confidence.','Fatigue zone (questions 45-60): Your brain is in its 4th quarter. The discipline required here is: trust your preparation, not your impulse. Impulse says "this looks like Option C" — preparation says "I calculated and it is Option C." Go with preparation.',45),
        s('d122-qr2','CKT 20-Question Mock Test (15 min)','20-question CKT mock test from memory, covering all topics studied so far: hardware, software, OS, DBMS, networking, number systems, cybersecurity, I/O devices. No reference. Log score. Target: 16+/20 (80%). Any topic below 70%: note it for weekend review.','CKT scoring reality: Every mark in CKT is a "free" mark relative to the competition — most candidates underestimate this section. A 90%+ CKT score can differentiate you from candidates with similar Quant scores.',15),
      ]),
    ],
  },
  {
    id:'2026-09-05', dayNumber:123, date:'2026-09-05', phase:6, tier:2, weekNumber:18,
    weekType:'weekend', totalHours:8, hasQuiz:false,
    title:'Day 123 — Triple Full Mock Day (All 3 Above 330) + DEST Final Calibration + CKT Mock + Weak Question List',
    promptBlock:`OPERATIVE BRIEFING — DAY 123 | TRIPLE MOCK PROTOCOL

Three full Paper 1 mocks today. This is the highest single-day mock volume of the entire preparation.

WHY THREE MOCKS:
The actual Tier 2 exam requires sustained cognitive performance for 2 hours 15 minutes. Three mocks in a single day — with analysis between them — trains cognitive endurance beyond what the actual exam demands. After this day, the actual exam will feel manageable by comparison.

THE TARGET: All three mocks above 330. Not an average — each individual mock above 330.
- Mock 1: Fresh mind, should be highest score
- Mock 2: After analysis break, moderate fatigue
- Mock 3: Maximum fatigue — this is where endurance training happens

PERCENTILE TRACKING:
Note your percentile on your platform after each mock. Percentile tells you where you stand relative to others using the same platform. Track this across all three mocks — is your percentile consistent?

ANALYSIS PROTOCOL:
After each mock, a 15-minute analysis (not comprehensive — just top 5 errors per mock). Comprehensive analysis happens in the REV block after all three mocks.

DEST FINAL CALIBRATION:
After the mocks: 15-minute DEST session. Then compile your final weak question list — the 20 questions across all your mocks that you got wrong most frequently.`,
    tasks: [
      WE_DS('d123',[
        s('d123-ds1','Full Paper 1 Mock 1 — 2 Hours 15 Minutes (Target 330+) (135 min)','First mock. Full simulation — strict exam conditions. Section strategy: Maths (40 min) → Reasoning (40 min) → English (50 min) → GA (15 min). Log section-wise time and raw score immediately. Note your platform percentile.','Mock 1 mindset: Treat this as the actual exam. Every question matters. Skip discipline from Day 116 analysis applies here — do not repeat the same skip failures.',135),
        s('d123-ds2','Inter-Mock Analysis 1 — 15 Minutes (15 min)','15-minute analysis only. Identify top 5 errors from Mock 1: What went wrong? Was it a knowledge gap, a skip failure, or a careless error? Write one correction for each. Then mental reset before Mock 2.','Inter-mock analysis rule: 15 minutes maximum. More analysis creates anxiety. Less analysis fails to correct. 15 minutes is the optimal window.',15),
        s('d123-ds3','Full Paper 1 Mock 2 — 2 Hours 15 Minutes (Target 330+) (135 min)','Second mock. Apply corrections from Mock 1 analysis immediately. Monitor: Did Mock 1\'s errors repeat? Is cognitive endurance holding — is your accuracy in the 90th minute comparable to the 15th minute?','Mock 2 adjustment: If Mock 1 had a specific section weakness, adjust your section time allocation for Mock 2. Example: If Maths took 50 minutes in Mock 1 instead of 40, cut it to 38 minutes in Mock 2 and enforce it.',135),
        s('d123-ds4','Inter-Mock Analysis 2 — 15 Minutes (15 min)','15-minute analysis of Mock 2. Same protocol. Compare with Mock 1 errors: Are the same question types causing errors in both? If yes: systematic weakness requiring topic correction. If different types: inconsistency requiring more mock volume.','Systematic vs inconsistent errors: Systematic = same topic fails across mocks → do targeted topic practice. Inconsistent = different topics fail each time → do more mixed practice mocks.',15),
        s('d123-ds5','Full Paper 1 Mock 3 — 2 Hours 15 Minutes (Target 330+) (135 min)','Third mock. This is the endurance test. Expect cognitive fatigue — the challenge is performing despite it. Focus on the section where fatigue typically hits you hardest (usually Quant, as it requires most processing). Apply extra skip discipline in the fatigue zone.','Mock 3 endurance note: A drop of 5-10 marks in Mock 3 vs Mock 1 is normal. A drop of 20+ marks indicates a serious endurance problem. Note the magnitude of your drop.',135),
      ]),
      WE_MT('d123',[
        s('d123-mt1','Three Mock Score Summary (10 min)','Write all three scores and percentiles. Calculate average. Calculate score range (max - min). A large range (30+ marks) indicates inconsistency. A tight range (10 marks) indicates consistent performance. Which mocks had all 3 above 330?','Consistency is more valuable than a single high score at this stage. The actual exam is one attempt — consistency predicts that single attempt better than a peak.',10),
      ]),
      WE_REV('d123',[
        s('d123-rev1','DEST Final Calibration — Sub-3% Error (15 min)','15-minute DEST session after 3 full mocks. This tests DEST performance under fatigue conditions — which is relevant because in the actual exam, DEST comes after the written paper. If your error rate spikes under fatigue: practice DEST after mock tests specifically.','DEST-under-fatigue drill: After completing heavy Quant practice, immediately switch to DEST typing. Train your fingers to be accurate even when your brain is tired.',15),
        s('d123-rev2','CKT Mock Test — All Topics (15 min)','20-question CKT mock from memory. Compare with Day 122 score. Is it improving? Any topics consistently missed across both CKT tests: these are your CKT weak points — review them tonight.','CKT improvement rate: You should be seeing improvement week-over-week. If not: the 10-minute daily sessions are not being done with sufficient focus. Increase attention during CKT sessions.',15),
        s('d123-rev3','Compile Final Weak Question List (15 min)','From all mocks this week and last week: compile a list of the 20 questions you got wrong most frequently. Categorize by topic. This list is your final study target for the remaining 14 days. Nothing outside this list and your existing strengths.','Final weak question list principle: These 20 questions represent your biggest score opportunity remaining. If you master these question types, you gain 10-15 marks. That is the difference between 325 and 340.',15),
      ]),
    ],
  },
  {
    id:'2026-09-06', dayNumber:124, date:'2026-09-06', phase:6, tier:2, weekNumber:18,
    weekType:'weekend', totalHours:8, hasQuiz:false,
    title:'Day 124 — Weak Questions Mastery + Final Quant Sprint + Final English Sprint + Double Mock (338+ Target) + Post Preference Research',
    promptBlock:`OPERATIVE BRIEFING — DAY 124 | WEEK 18 FINAL DAY

Today is the bridge between Week 18 and the penultimate week. Four missions, all mandatory.

MISSION 1 — WEAK QUESTIONS MASTERY (2 hours):
The 20 questions from yesterday's weak question list — reattempt and master every single one. Not just get the right answer — understand the complete solution path. These are the questions that will appear in similar form in the actual exam.

MISSION 2 — FINAL QUANT SPRINT (2 hours):
All Quant topics, one final comprehensive sprint. This is not new learning — it is activation of everything you know. Every topic gets 10 minutes. Formula sheet review integrated.

MISSION 3 — FINAL ENGLISH SPRINT (1 hour):
All English sub-types in one consolidated sprint. Grammar rules, OWS list, idioms, RC strategy notes — all reviewed rapidly.

MISSION 4 — DOUBLE MOCK (338+ target):
Target raised to 338+. By now, 338 should be within reach on good mock performance.

POST PREFERENCE FORM PREPARATION RESEARCH:
Research the actual form-filling process for post preference declaration in SSC CGL. Understand the window, the number of preferences you can select, and whether the order matters.

DEST must be sub-3% consistently now. This is no longer a practice target — it is a minimum standard.`,
    tasks: [
      WE_DS('d124',[
        s('d124-ds1','Weak Questions Reattempt and Master — 2 Hours (120 min)','Take the 20 weak questions from the compiled list. For each question: (1) Attempt it fresh without looking at the solution. (2) Check your answer. (3) If wrong: read the solution fully and understand every step. (4) Close the solution and re-attempt from scratch. (5) Verify you get it right without reference. This three-attempt protocol ensures you truly own the question type, not just the answer.','Mastery definition: You can solve a question type correctly and explain why each step is taken. If you can only get the answer but not explain the steps — you have not mastered it, you have memorized it. Memorized solutions fail under variation.',120),
        s('d124-ds2','Final Quant Sprint — All Topics (120 min)','All Quant topics activated in one session. Allocation: Arithmetic (Percentage, P&L, SI/CI, Ratio, Time-Work, STD) — 30 min, 3 questions per topic. Algebra (identities, linear, quadratic, surds) — 20 min. Geometry+Mensuration — 20 min. Trigonometry (values, identities, height-distance) — 15 min. Statistics (mean, median, mode, standard deviation basics) — 10 min. DI — 15 min. Number Theory — 10 min. After each topic: 1 hard question to confirm activation.','Final sprint protocol: Every topic gets a "challenge question" — the hardest question from that topic you can find. If you solve it, the topic is activated. If you don\'t, spend 5 more minutes on it.',120),
        s('d124-ds3','Final English Sprint — All Sub-Types (60 min)','All English sub-types in 60 minutes: Read grammar rule sheet (10 min) → 5 error detection questions (5 min) → Recall top 30 idioms from memory (5 min) → 5 OWS questions (3 min) → RC strategy notes review (5 min) → 1 Para Jumbles question (3 min) → 1 Cloze Test passage (4 min) → Vocabulary recall: 20 words from cold test failures (10 min) → Sentence improvement 5 questions (5 min) → Legal OWS and formal domain terms recall (10 min).','Final English sprint is activation, not learning. Every task should feel like reviewing something you already know, not encountering new material.',60),
        s('d124-ds4','Post Preference Form Preparation Research (30 min)','Research: (1) When does the post preference declaration form open in SSC CGL 2026? (2) How many preferences can you select? (3) Does the order of preferences matter — is it priority-ordered? (4) What documents are needed for verification against each post? (5) What are the medical standards required for CBI SI and IT Inspector (field posts)? Write a simple checklist.','Post preference form research is not academic — it has a direct impact on your career. One hour of research now can prevent a costly mistake in the preference form that affects the next decade.',30),
      ]),
      WE_MT('d124',[
        s('d124-mt1','Full Paper 1 Mock 5 — 2 Hours 15 Minutes (Target 338+) (135 min)','Fifth mock of the week (total: 7 mocks in 2 days across weekend). Target: 338+. This is the highest target yet. Apply everything: skip discipline, section time allocation, zero careless error mindset, DEST-level typing accuracy on answer filling.','338 target: At 338/390, you are comfortably in the top-tier scoring range for Tier 2. If you hit 338 on a mock today, you are in position for the actual exam.',135),
        s('d124-mt2','Full Paper 1 Mock 6 — 2 Hours 15 Minutes (Target 338+) (135 min)','Sixth mock. Week 18 total: 8 mocks across weekday tests + weekend mocks. This level of mock volume is what separates top scorers from average scorers. Note your score and compare with Mock 5.','Two-mock consistency: If Mock 5 and Mock 6 are within 10 marks of each other and both above 330, your performance is stable. If there is a 20+ mark gap, identify the specific section that dropped.',135),
      ]),
      WE_REV('d124',[
        s('d124-rev1','DEST Sub-3% Standard Check (15 min)','DEST session: 15 minutes. Confirm sub-3% error rate is now a consistent standard, not an occasional achievement. If you have two consecutive sessions above 3%: reduce typing speed immediately and rebuild from slower accurate pace.','Sub-3% is now your floor, not your ceiling. The exam requires consistent accuracy, not your best-day accuracy.',15),
        s('d124-rev2','Week 18 Summary + Week 19 Strategy (30 min)','Write: (1) Total mocks Week 18 with scores. (2) DEST error rate trend — is it below 3% consistently? (3) CKT progress. (4) Weak question list — how many are now mastered? (5) Post preference decision — narrowed down to top 2 choices? (6) Plan for Week 19 — what are the specific areas that need penultimate-week focus? (7) Logistics check: exam center distance, arrival time plan, document checklist begun.','Week 19 is the penultimate week. After Week 19, exam week begins. Use the Week 18 summary to set exactly the right priorities for the final preparation week.',30),
      ]),
    ],
  },
]
