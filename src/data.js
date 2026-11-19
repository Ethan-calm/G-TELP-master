/* G-TELP Level 2 study data. 모든 문제·지문은 이 앱용으로 직접 쓴 연습 문항입니다.
   문법: [유형, 문장, 정답, 오답1, 오답2, 오답3, 해설]  (보기는 화면에서 섞음) */
const TYPES = {
  tense:  { name: '시제', n: 6, tip: '진행형이 정답. 단서 부사구로 6가지 진행형 중 고른다.' },
  cond:   { name: '가정법', n: 6, tip: 'If 과거 → would+동사원형 / If had p.p. → would have p.p. / 도치 Were·Had' },
  verbal: { name: '준동사', n: 6, tip: '동사 뒤 -ing냐 to V냐. having p.p.·to have p.p.는 거의 오답.' },
  subj:   { name: '당위성', n: 2, tip: 'suggest·recommend·important 등 + that S + 동사원형' },
  modal:  { name: '조동사', n: 2, tip: '문장 해석: 의무 must / 충고 should / 능력 can / 추측 may' },
  rel:    { name: '관계사', n: 2, tip: '콤마 뒤 that 불가. 사람 who, 사물 which, 장소 where, 소유 whose' },
  conj:   { name: '연결어', n: 2, tip: '앞뒤 문장 관계: 역접 However / 결과 Therefore / 추가 Moreover / 아니면 Otherwise' },
};

const GRAMMAR = [
// ── 시제 ──
['tense','Right now, Mia ___ for her final exam in the library.','is studying','studies','has studied','will study','Right now(지금) → 현재진행 is -ing.'],
['tense','Kevin ___ at the bank for ten years by the time he retires next month.','will have been working','has been working','had been working','will work','by the time + 현재동사(retires) + for 기간 → 미래완료진행 will have been -ing.'],
['tense','The guests ___ for over an hour when the bride finally arrived.','had been waiting','have been waiting','were waiting','will have been waiting','과거 시점(arrived)보다 앞서 + for 기간 → 과거완료진행 had been -ing.'],
['tense','Since 2019, the city ___ new bike lanes across downtown.','has been building','had been building','is building','builds','Since + 과거시점 → 현재완료진행 has been -ing.'],
['tense','When the power went out last night, my family ___ a movie.','was watching','is watching','has been watching','watches','when + 과거동사(went out), last night → 과거진행 was -ing.'],
['tense','If you call me at 9 p.m. tomorrow, I ___ my presentation.','will be practicing','practice','am practicing','have been practicing','tomorrow, if/when + 현재동사 → 미래진행 will be -ing.'],
['tense','These days, more people ___ electric cars because of rising fuel prices.','are buying','bought','had bought','will have bought','These days(요즘) → 현재진행.'],
['tense','Jake ___ in the garden at the moment, so he can\'t answer the phone.','is working','works','worked','has worked','at the moment → 현재진행.'],
['tense','By next June, Dr. Lee ___ the disease for two decades.','will have been studying','has been studying','had been studying','is studying','By + 미래시점(next June) + for 기간 → 미래완료진행.'],
['tense','Before she moved to Seoul in 2020, Anna ___ English in Busan for five years.','had been teaching','has been teaching','was teaching','will have been teaching','과거(moved in 2020) 이전부터 + for 기간 → 과거완료진행.'],
['tense','Ever since he got the promotion, Tom ___ late every night.','has been working','had been working','works','will be working','ever since + 과거 → 현재완료진행.'],
['tense','While the chef ___ the sauce, a fire alarm suddenly went off.','was stirring','is stirring','has been stirring','stirs','while + 과거 사건(went off) → 과거진행.'],
['tense','Next Saturday, our team ___ in the national robotics competition.','will be competing','competes','has been competing','was competing','Next Saturday(미래 시점) → 미래진행.'],
['tense','Currently, scientists ___ a new vaccine against the virus.','are developing','developed','had developed','will have developed','Currently → 현재진행.'],
['tense','My brother ___ video games since he came home three hours ago.','has been playing','is playing','had been playing','will be playing','since + 과거 (지금까지 계속) → 현재완료진행.'],
['tense','By the time the rescue team arrives, the hikers ___ in the cold for twelve hours.','will have been waiting','have been waiting','had been waiting','are waiting','by the time + 현재동사(arrives) + for → 미래완료진행.'],
// ── 가정법 ──
['cond','If I were the CEO, I ___ a four-day workweek.','would introduce','will introduce','would have introduced','introduce','If + 과거(were) → would + 동사원형 (가정법 과거).'],
['cond','If Sarah had left home earlier, she ___ the train.','would have caught','would catch','will catch','had caught','If + had p.p. → would have p.p. (가정법 과거완료).'],
['cond','Had the government acted sooner, the flood damage ___ much smaller.','would have been','would be','will be','has been','Had + S + p.p. = If S had p.p. (도치) → would have p.p.'],
['cond','If humans could breathe underwater, they ___ the ocean floor freely.','would explore','would have explored','will explore','explore','If + 과거(could) → would + 동사원형.'],
['cond','Were I in your position, I ___ the job offer immediately.','would accept','would have accepted','will accept','accepted','Were I = If I were (도치) → would + 동사원형.'],
['cond','If the team had practiced harder, it ___ the championship last year.','would have won','would win','will win','wins','If had p.p. → would have p.p.'],
['cond','If Mark knew the answer, he ___ it to us right now.','would tell','would have told','will tell','tells','If + 과거(knew) → would + 동사원형.'],
['cond','If the museum had not received the donation, it ___ its doors in 2015.','would have closed','would close','will close','closed','If had not p.p. → would have p.p.'],
['cond','If I had a time machine, I ___ to ancient Egypt.','would travel','would have traveled','will travel','travel','If + 과거(had) → would + 동사원형.'],
['cond','Linda would not have missed the meeting if her alarm ___.','had gone off','went off','would go off','goes off','주절이 would have p.p. → if절은 had p.p.'],
['cond','If dinosaurs still existed, zoos ___ very different places.','would be','would have been','will be','are','If + 과거(existed) → would + 동사원형.'],
['cond','Had Edison given up after his failures, we ___ electric light so early.','would not have had','would not have','will not have','did not have','Had S p.p. (도치) → would have p.p.'],
['cond','If Jenny spoke Spanish, she ___ as a tour guide in Madrid.','could work','could have worked','can work','works','If + 과거 → could/would + 동사원형.'],
['cond','If the company had invested in online sales, it ___ during the pandemic.','would have survived','would survive','will survive','survives','If had p.p. → would have p.p.'],
// ── 당위성 ──
['subj','The doctor recommended that Mr. Park ___ less salt.','eat','eats','ate','is eating','recommend that S + 동사원형 (should 생략).'],
['subj','It is essential that every employee ___ the safety training.','complete','completes','completed','will complete','It is essential that S + 동사원형.'],
['subj','The manager insisted that the report ___ by Friday.','be submitted','is submitted','was submitted','will be submitted','insist that S + 동사원형 → 수동이면 be p.p.'],
['subj','My parents suggested that I ___ a gap year before college.','take','took','takes','am taking','suggest that S + 동사원형.'],
['subj','It is important that she ___ her passport before the trip.','renew','renews','renewed','has renewed','It is important that S + 동사원형.'],
['subj','The law requires that drivers ___ a seat belt at all times.','wear','wears','wore','are wearing','require that S + 동사원형.'],
['subj','The teacher asked that the students ___ off their phones during the test.','turn','turned','turns','will turn','ask that S + 동사원형.'],
['subj','It is vital that the patient ___ in bed for a week.','stay','stays','stayed','will stay','It is vital that S + 동사원형.'],
['subj','The committee proposed that the festival ___ to May.','be moved','is moved','was moved','has been moved','propose that S + be p.p.'],
['subj','It is crucial that he ___ his medicine on time.','take','takes','took','is taking','It is crucial that S + 동사원형.'],
['subj','The coach urged that each player ___ enough sleep before the match.','get','gets','got','has gotten','urge that S + 동사원형.'],
['subj','It is necessary that the contract ___ by both parties.','be signed','is signed','was signed','will be signed','It is necessary that S + be p.p.'],
// ── 준동사 ──
['verbal','Many people enjoy ___ to music while they jog.','listening','to listen','to have listened','having listened','enjoy + -ing. 완료형(having p.p.)은 오답.'],
['verbal','Emma decided ___ abroad after graduation.','to study','studying','to have studied','having studied','decide + to V.'],
['verbal','You should avoid ___ heavy meals before bed.','eating','to eat','having eaten','to have eaten','avoid + -ing.'],
['verbal','The company plans ___ three new stores next year.','to open','opening','having opened','to have opened','plan + to V.'],
['verbal','Would you mind ___ the window?','closing','to close','having closed','to have closed','mind + -ing.'],
['verbal','Jason refused ___ the contract without reading it.','to sign','signing','having signed','to have signed','refuse + to V.'],
['verbal','The trainer recommends ___ for at least ten minutes before running.','stretching','to stretch','having stretched','to have stretched','recommend + -ing (목적어 없이 바로 올 때).'],
['verbal','Sophie hopes ___ a famous chef someday.','to become','becoming','having become','to have become','hope + to V.'],
['verbal','Have you considered ___ to a smaller apartment?','moving','to move','having moved','to have moved','consider + -ing.'],
['verbal','The students agreed ___ the classroom after the party.','to clean','cleaning','having cleaned','to have cleaned','agree + to V.'],
['verbal','He kept ___ the same mistake again and again.','making','to make','having made','to have made','keep + -ing.'],
['verbal','The doctor told me to quit ___ for my health.','smoking','to smoke','having smoked','to have smoked','quit + -ing.'],
['verbal','To save money, Liam chose ___ his bike to work.','to ride','riding','having ridden','to have ridden','choose + to V.'],
['verbal','The new job involves ___ to other countries often.','traveling','to travel','having traveled','to have traveled','involve + -ing.'],
['verbal','Nina went to the library ___ some books for her report.','to borrow','borrowing','having borrowed','to have borrowed','"~하기 위해" 목적 → to V.'],
['verbal','The museum postponed ___ the exhibit due to the storm.','opening','to open','having opened','to have opened','postpone + -ing.'],
['verbal','Ken promised ___ his sister with her homework.','to help','helping','having helped','to have helped','promise + to V.'],
['verbal','The suspect denied ___ the money from the store.','stealing','to steal','having to steal','to have stolen','deny + -ing.'],
['verbal','We can\'t afford ___ a new car this year.','to buy','buying','having bought','to have bought','afford + to V.'],
['verbal','Daniel finished ___ his report just before the deadline.','writing','to write','having written','to have written','finish + -ing.'],
['verbal','The team expects ___ the results by Friday.','to receive','receiving','having received','to have received','expect + to V.'],
['verbal','Some people dislike ___ in crowded places.','waiting','to have waited','having waited','to waiting','dislike + -ing.'],
// ── 조동사 ──
['modal','You ___ show your ID card to enter the building. It is a strict rule.','must','might','could','would','규칙·의무 → must.'],
['modal','Take an umbrella with you. It ___ rain later this afternoon.','may','must','would','shall','불확실한 추측(~할지도 모른다) → may.'],
['modal','Penguins are birds, but they ___ fly.','cannot','must not','should not','will not','능력이 없음 → cannot.'],
['modal','You look exhausted. You ___ get some rest.','should','can','may','would','충고(~하는 게 좋겠다) → should.'],
['modal','When I was a child, I ___ swim across the lake easily.','could','should','must','may','과거의 능력 → could.'],
['modal','If you practice every day, you ___ improve your score quickly.','will','must','should have','might have','조건 → 미래 결과 will.'],
['modal','Smartphones ___ distract students, so many schools limit their use.','can','must','shall','should have','일반적 가능성(~할 수 있다) → can.'],
['modal','The museum is free, so visitors ___ enter without paying a fee.','can','must','should','would','허가·가능 → can.'],
// ── 관계사 ──
['rel','The Eiffel Tower, ___, attracts millions of visitors every year.','which was completed in 1889','that was completed in 1889','who was completed in 1889','where was completed in 1889','사물 + 콤마 → which. 콤마 뒤 that은 불가.'],
['rel','Marie Curie, ___, won two Nobel Prizes.','who was born in Poland','which was born in Poland','that was born in Poland','where was born in Poland','사람 + 콤마 → who.'],
['rel','I finally met the author ___.','whose novel I loved as a teenager','which novel I loved as a teenager','who novel I loved as a teenager','where novel I loved as a teenager','소유(그의 소설) + 명사 → whose.'],
['rel','This is the café ___.','where I first met my wife','which I first met my wife','who I first met my wife','whose I first met my wife','장소 + 완전한 문장 → where.'],
['rel','The phone ___ has a great camera.','that I bought last week','who I bought last week','where I bought last week','whose I bought last week','사물, 콤마 없음, 목적어 빠짐 → that/which.'],
['rel','Jeju Island, ___, is popular with honeymooners.','which is famous for its beaches','that is famous for its beaches','who is famous for its beaches','where is famous for its beaches','사물(섬)이 주어 역할 + 콤마 → which. where 뒤엔 완전한 문장.'],
['rel','Students ___ must meet their advisor this week.','who failed the midterm','which failed the midterm','whose failed the midterm','where failed the midterm','사람 주어 → who.'],
['rel','I still remember the day ___.','when we won the final game','which we won the final game','who we won the final game','whose we won the final game','시간 + 완전한 문장 → when.'],
// ── 연결어 ──
['conj','Mike studied hard for months. ___, he failed the exam.','However','Therefore','For example','Similarly','앞과 반대 결과 → However (역접).'],
['conj','The roads were icy. ___, many schools closed for the day.','As a result','However','Otherwise','In contrast','원인 → 결과: As a result.'],
['conj','Wear your helmet. ___, you could get seriously hurt.','Otherwise','Therefore','Moreover','Likewise','"그렇지 않으면" → Otherwise.'],
['conj','The hotel was cheap. ___, it was close to the beach.','Moreover','However','Otherwise','Instead','장점 + 장점 추가 → Moreover.'],
['conj','Some fruits are rich in vitamin C. ___, oranges and kiwis contain a lot of it.','For instance','However','Otherwise','Nevertheless','예시 → For instance.'],
['conj','___ it was raining heavily, the game continued.','Although','Because','Unless','Since','비가 왔지만(양보) → Although.'],
['conj','You can\'t enter the concert hall ___ you have a ticket.','unless','because','although','while','"~하지 않으면" → unless.'],
['conj','She didn\'t go to the party. ___, she stayed home and read a book.','Instead','Moreover','For example','Similarly','A 대신 B → Instead.'],
['conj','Kim kept practicing ___ she could play the piece perfectly.','until','unless','although','whereas','"~할 때까지" → until.'],
];

/* 동명사·to부정사 동사 암기 */
const GERUND_VERBS = 'enjoy avoid consider mind keep quit finish postpone delay deny risk practice imagine recommend suggest involve admit dislike discontinue resist anticipate appreciate tolerate include advocate'.split(' ');
const INF_VERBS = 'want hope decide plan expect agree refuse promise need wish choose afford fail manage tend seem pretend attempt prepare offer learn aim deserve struggle arrange vow hesitate'.split(' ');
const SUBJ_WORDS = 'suggest recommend insist demand require ask advise propose urge order request command | important essential vital necessary crucial imperative critical mandatory';

/* 어휘: 단어|뜻|동의어(지텔프 어휘 문제는 '문맥상 같은 뜻' 고르기) */
const VOCAB_RAW = `
abandon|버리다, 포기하다|give up, desert
abundant|풍부한|plentiful, ample
accommodate|수용하다, 맞춰 주다|serve, house
accomplish|성취하다|achieve, complete
accurate|정확한|precise, exact
acquire|얻다, 습득하다|obtain, gain
adapt|적응하다|adjust
address|(문제를) 다루다|deal with, handle
adequate|충분한|sufficient, enough
adopt|채택하다, (습관을) 들이다|take up, embrace
alter|바꾸다|change, modify
ambitious|야심 찬|aspiring, determined
anticipate|예상하다|expect, foresee
apparent|명백한|obvious, clear
appealing|매력적인|attractive, inviting
appreciate|진가를 알다, 감사하다|value, recognize
approach|접근법|method, way
assume|가정하다; (책임을) 맡다|suppose, take on
attain|달성하다|reach, achieve
attribute|~의 탓으로 돌리다|credit, ascribe
authentic|진짜의|genuine, real
available|이용 가능한|accessible, obtainable
boost|높이다|increase, raise
brief|짧은|short, quick
capable|~할 수 있는|able, competent
claim|주장하다|assert, state
commence|시작하다|begin, start
compensate|보상하다|make up for, repay
compile|모으다, 편집하다|collect, gather
comprehensive|포괄적인|thorough, complete
conceal|숨기다|hide
conduct|수행하다|carry out, perform
consistent|일관된|steady, constant
contemporary|현대의; 동시대의|modern, current
convey|전달하다|communicate, express
crucial|결정적인|vital, essential
curious|호기심 많은|inquisitive, interested
decline|감소하다; 거절하다|decrease, refuse
dedicate|바치다, 헌신하다|devote, commit
demonstrate|보여 주다|show, display
depict|묘사하다|portray, represent
desire|욕구|wish, longing
deteriorate|악화되다|worsen, decline
devise|고안하다|invent, create
diminish|줄어들다|lessen, reduce
distinct|뚜렷한, 별개의|clear, separate
distinctive|독특한|unique, characteristic
diverse|다양한|varied, various
dominant|지배적인|leading, main
durable|내구성 있는|sturdy, lasting
eager|열망하는|keen, enthusiastic
eligible|자격이 있는|qualified, entitled
eliminate|제거하다|remove, get rid of
emerge|나타나다|appear, arise
emphasize|강조하다|stress, highlight
encounter|마주치다|meet, come across
endure|견디다|bear, tolerate
enhance|향상시키다|improve, boost
enormous|거대한|huge, vast
ensure|보장하다|guarantee, make sure
establish|설립하다|found, set up
evaluate|평가하다|assess, judge
eventually|결국|finally, ultimately
evident|분명한|clear, obvious
exceed|초과하다|surpass, go beyond
exhibit|전시하다; 보이다|display, show
expand|확장하다|enlarge, extend
expertise|전문 지식|skill, know-how
exploit|이용하다|use, take advantage of
extensive|광범위한|wide, broad
facilitate|용이하게 하다|ease, help
feasible|실현 가능한|possible, workable
figure|인물; 수치|person, number
flourish|번성하다|thrive, prosper
foster|육성하다|encourage, promote
fragile|깨지기 쉬운|delicate, breakable
fundamental|근본적인|basic, essential
generate|만들어 내다|produce, create
genuine|진짜의, 진심의|real, sincere
grant|주다, 승인하다|give, allow
gratitude|감사|thanks, appreciation
hinder|방해하다|obstruct, hamper
identical|동일한|same, alike
illustrate|보여 주다, 설명하다|show, demonstrate
immense|막대한|huge, vast
implement|실행하다|carry out, execute
imply|암시하다|suggest, hint
impose|부과하다|place, enforce
impressive|인상적인|remarkable, striking
incentive|장려책|motivation, encouragement
indicate|나타내다|show, signal
inevitable|피할 수 없는|unavoidable, certain
initial|처음의|first, early
initiate|시작하다|start, launch
innovative|혁신적인|new, inventive
inspire|영감을 주다|motivate, stimulate
intense|강렬한|strong, extreme
intriguing|흥미로운|fascinating, interesting
issue|문제; 발행하다|problem, release
launch|출시하다, 시작하다|introduce, start
legitimate|합법적인, 정당한|lawful, valid
maintain|유지하다; 주장하다|keep, claim
massive|거대한|huge, enormous
merely|단지|only, just
minor|사소한|small, slight
modest|겸손한; 적당한|humble, moderate
modify|수정하다|change, alter
monitor|감시하다|watch, check
notable|주목할 만한|remarkable, noteworthy
notion|개념|idea, concept
numerous|수많은|many, countless
objective|목표; 객관적인|goal, aim
obligation|의무|duty, responsibility
observe|관찰하다; (규칙을) 지키다|watch, follow
obtain|얻다|get, acquire
occupy|차지하다|take up, fill
ongoing|진행 중인|continuing, current
outstanding|뛰어난; 미지불의|excellent, unpaid
overcome|극복하다|beat, conquer
overwhelming|압도적인|enormous, crushing
participate|참여하다|take part, join
perceive|인식하다|notice, recognize
persist|지속되다|continue, last
plight|곤경|difficult situation, trouble
portray|묘사하다|depict, show
potential|잠재적인|possible, likely
practical|실용적인|useful, realistic
precise|정확한|exact, accurate
predominant|우세한|main, chief
preserve|보존하다|protect, conserve
prestigious|명망 있는|respected, renowned
prevalent|널리 퍼진|common, widespread
primary|주요한|main, chief
proficient|능숙한|skilled, expert
profound|깊은, 심오한|deep, intense
prohibit|금지하다|ban, forbid
prominent|저명한, 눈에 띄는|famous, noticeable
prompt|촉발하다; 즉각적인|cause, quick
pursue|추구하다|follow, seek
radical|급진적인, 근본적인|extreme, drastic
recall|기억해 내다; 회수하다|remember, take back
reflect|반영하다|show, mirror
reinforce|강화하다|strengthen, support
reject|거절하다|refuse, turn down
reluctant|꺼리는|unwilling, hesitant
remarkable|놀라운|extraordinary, notable
renowned|유명한|famous, celebrated
reside|거주하다|live, dwell
resolve|해결하다; 결심하다|solve, settle
resume|재개하다|restart, continue
retain|유지하다|keep, hold
reveal|드러내다|disclose, show
rigorous|엄격한|strict, thorough
secure|확보하다; 안전한|obtain, safe
settle|해결하다; 정착하다|resolve, establish
significant|중요한, 상당한|important, considerable
sole|유일한|only, single
sophisticated|정교한|advanced, complex
spontaneous|자발적인|unplanned, natural
stable|안정된|steady, secure
steady|꾸준한|constant, regular
stimulate|자극하다|encourage, spark
strive|노력하다|try, struggle
submit|제출하다|hand in, turn in
subsequent|그 후의|following, later
substantial|상당한|considerable, large
sufficient|충분한|enough, adequate
superior|우수한|better, higher
suspend|중단하다|stop, pause
sustain|지속시키다|maintain, support
thrive|번창하다|flourish, prosper
tremendous|엄청난|huge, enormous
ultimately|궁극적으로|finally, eventually
undergo|겪다|go through, experience
unique|독특한|distinctive, one of a kind
vast|광대한|huge, immense
vital|필수적인|essential, crucial
vivid|생생한|clear, lively
widespread|널리 퍼진|common, extensive
witness|목격하다|see, observe
yield|산출하다; 양보하다|produce, give way
`;
const VOCAB = VOCAB_RAW.trim().split('\n').map(l => { const [w, m, s] = l.split('|'); return { w, m, s }; });

/* 독해: 파트별 지문 1개 × 7문항 (내용 5 + 어휘 2). 문항: [질문, 정답, 오답1, 오답2, 오답3, 근거] */
const READING = [
{ id:'r1', part:'Part 1 · 인물 일대기', title:'FLORENCE NIGHTINGALE', body:
`Florence Nightingale was a British nurse and social reformer who is widely regarded as the founder of modern nursing. She is best known for her work during the Crimean War, where she earned the nickname "The Lady with the Lamp."

Nightingale was born on May 12, 1820, in Florence, Italy, to a wealthy British family, and she was named after the city of her birth. As a young woman, she believed she had received a calling to serve others. Her parents, however, strongly opposed her wish to become a nurse, as nursing was not considered a respectable profession for women of her class at the time. Despite their objections, she pursued her goal and received nursing training in Kaiserswerth, Germany, in 1850 and 1851.

In 1854, Nightingale led a team of 38 volunteer nurses to a British military hospital in Scutari, in present-day Turkey. She found the conditions there appalling: wounded soldiers lay in dirty wards without enough blankets, food, or clean water. Nightingale and her team improved sanitation, organized supplies, and cared for patients day and night. Her habit of checking on soldiers at night with a lamp in her hand made her famous.

After the war, Nightingale used statistics to persuade officials that poor hygiene, rather than battle wounds, had caused most soldiers' deaths. She presented her data in innovative diagrams that made the problem easy to grasp. In 1860, she established a nursing school at St Thomas' Hospital in London, which helped transform nursing into a respected career.

Nightingale died in 1910. Today, International Nurses Day is celebrated on her birthday to honor her lasting contributions.`,
q:[
['What is Florence Nightingale best known for?','her work caring for soldiers during a war','founding a hospital in Italy','inventing a new kind of lamp','training doctors in Germany','1문단: best known for her work during the Crimean War. 첫 문제는 거의 항상 1문단.'],
['Why did Nightingale\'s parents object to her career choice?','Nursing was not seen as a proper job for women of her social class.','They wanted her to become a doctor instead.','They could not afford to pay for her training.','They thought she was too young to travel abroad.','2문단: not considered a respectable profession for women of her class → "proper job"으로 바꿔 말함(패러프레이징).'],
['What did Nightingale find when she arrived at Scutari?','Patients lacked basic necessities such as clean water.','The hospital already had too many nurses.','Most of the soldiers had already recovered.','The doctors refused to let her team work.','3문단: without enough blankets, food, or clean water → lacked basic necessities.'],
['How did Nightingale persuade officials after the war?','by presenting data in clear visual forms','by writing letters to the soldiers\' families','by opening new hospitals across Turkey','by giving speeches at nursing schools','4문단: statistics + innovative diagrams that made the problem easy to grasp.'],
['What can most likely be said about the school she founded in 1860?','It helped make nursing a respected profession.','It accepted only soldiers as students.','It was later moved to Germany.','It closed soon after her death.','4문단: helped transform nursing into a respected career. "most likely"는 추론 문제.'],
['In the context of the passage, pursued means ___.','followed','chased','hunted','questioned','pursued her goal = 목표를 따랐다(followed). chased·hunted는 "쫓다"라는 다른 뜻이라 함정.'],
['In the context of the passage, appalling means ___.','terrible','surprising','ordinary','crowded','dirty wards without blankets → 끔찍한(terrible).'],
]},
{ id:'r2', part:'Part 2 · 잡지 기사', title:'WHY A SHORT WALK AFTER MEALS MATTERS', body:
`For many people, the most natural thing to do after a big meal is to sit on the couch. However, a growing body of research suggests that a short walk after eating may offer surprising health benefits.

When we eat, especially foods rich in carbohydrates, the level of sugar in our blood rises. Over time, frequent and sharp increases in blood sugar can raise the risk of health problems such as type 2 diabetes. Muscles, however, use sugar as fuel when they work. Studies have found that even light movement soon after a meal helps the body absorb sugar from the blood, making the rise smaller and shorter.

The good news is that the walk does not need to be long or intense. Researchers have reported benefits from walks as short as two to five minutes, as long as they take place soon after eating. A slow walk around the office or a few minutes of household chores may be enough to make a difference.

Experts say that walking after meals may also aid digestion and improve mood. Some people who adopt the habit say they sleep better when they walk after dinner rather than going straight to the sofa.

Of course, a short walk is not a substitute for a balanced diet or regular exercise. But for busy people who struggle to find time for the gym, it is a simple and practical place to start. So, the next time you finish a meal, consider standing up and taking a few steps.`,
q:[
['What is the article mainly about?','the benefits of walking briefly after eating','the best foods to eat before exercising','why people should stop eating carbohydrates','how to lose weight quickly at the gym','제목 + 1문단 마지막 문장이 주제.'],
['According to the article, how does walking affect blood sugar?','Working muscles use sugar from the blood.','It stops the body from digesting carbohydrates.','It increases the amount of sugar in food.','It causes the body to store more sugar.','2문단: Muscles use sugar as fuel when they work.'],
['What is true about an effective post-meal walk?','It can be short and light.','It must last at least an hour.','It should be done before eating.','It needs to be fast to work.','3문단: does not need to be long or intense; two to five minutes.'],
['Why does the writer mention household chores?','to show that simple movement can help','to suggest that cleaning is better than walking','to explain why people feel tired after meals','to warn against working right after eating','3문단: a few minutes of household chores may be enough → 가벼운 움직임의 예.'],
['Who would most likely benefit from the writer\'s advice?','a busy office worker with little time for exercise','a professional athlete who trains every day','a person who never eats dinner','a scientist studying diabetes','5문단: busy people who struggle to find time for the gym.'],
['In the context of the passage, absorb means ___.','take in','understand','interest','remove','absorb sugar from the blood = 흡수하다(take in). "이해하다" 뜻은 함정.'],
['In the context of the passage, adopt means ___.','take up','raise','borrow','approve','adopt the habit = 습관을 들이다(take up). "입양하다(raise)"는 함정.'],
]},
{ id:'r3', part:'Part 3 · 백과사전', title:'AXOLOTL', body:
`The axolotl is a type of salamander native to the lakes and canals of the Mexico City area, particularly Lake Xochimilco. It is often called the "Mexican walking fish," although it is an amphibian, not a fish.

Unlike most amphibians, the axolotl does not undergo metamorphosis. While a frog changes from a tadpole into an adult that can live on land, the axolotl keeps its youthful features throughout its life. It stays in the water and breathes through the feathery gills on the sides of its head. This trait, called neoteny, gives the animal its distinctive and friendly appearance.

The axolotl is famous for its remarkable ability to regenerate. It can regrow not only lost limbs and tails but also parts of vital organs, including its heart, spinal cord, and even sections of its brain. Because of this, scientists study the axolotl closely in the hope of learning how to help humans heal from injuries.

Although axolotls are common as pets and in laboratories, they are critically endangered in the wild. Their natural habitat has shrunk as Mexico City has expanded, and water pollution has worsened. In addition, non-native fish introduced into the lakes eat young axolotls and compete with them for food.

Conservation groups are working with local farmers to restore clean waterways in Xochimilco. The axolotl has also become a cultural symbol in Mexico, appearing in art and even on a banknote, which has helped raise public awareness of its plight.`,
q:[
['What is an axolotl?','an amphibian that lives in waters near Mexico City','a fish found in rivers across Mexico','a reptile that lives mainly on land','a frog that lives in deep lakes','1문단: salamander … an amphibian, not a fish.'],
['How is the axolotl different from most amphibians?','It keeps its young form as an adult.','It changes into a land animal.','It breathes only through lungs.','It lays its eggs on land.','2문단: keeps its youthful features throughout its life.'],
['Why do scientists study the axolotl?','to learn more about healing and regrowth','to find a new source of food','to breed it as a pet','to clean polluted lakes','3문단: in the hope of learning how to help humans heal.'],
['Which is NOT mentioned as a cause of the axolotl\'s decline in the wild?','a lack of interest from pet owners','the growth of a nearby city','polluted water','fish brought into the lakes','4문단에 도시 확장·오염·외래 어종은 있지만 애완동물 관심 부족은 없음. NOT 문제는 보기 하나씩 지문과 대조.'],
['What has probably helped people learn about the axolotl\'s situation?','its appearance in art and on money','a ban on keeping it as a pet','its use in traditional food','its spread to other countries','5문단: appearing in art and even on a banknote … raise public awareness.'],
['In the context of the passage, distinctive means ___.','unique','famous','separate','strange','distinctive appearance = 독특한(unique).'],
['In the context of the passage, plight means ___.','difficult situation','promise','journey','flight','plight = 곤경. 위기에 처한 상황.'],
]},
{ id:'r4', part:'Part 4 · 비즈니스 편지', title:'Letter to Ms. Rivera', body:
`Dear Ms. Rivera,

Thank you for choosing Greenleaf Office Supplies as your company's partner for the past three years. We truly value our relationship with Brightpath Design.

I am writing to inform you of an important change to our delivery service. Starting March 1, all orders placed before 2 p.m. will be delivered on the same day within the city area. Orders placed after 2 p.m. will arrive the next business day. We believe this upgrade will help your team receive essential items without delay.

In addition, as one of our long-term customers, your company is eligible for our new Premium Membership at no extra cost for the first six months. Members receive a 10 percent discount on all printing paper and ink, as well as free delivery on orders of any size. To activate this benefit, simply sign in to your online account and select "Premium" under the Membership menu by February 20.

Please note that our customer service hours will also change. Our phone lines will be open from 8 a.m. to 7 p.m. on weekdays, an hour longer than before, so that we can better accommodate customers who work late.

If you have any questions, please contact me directly at the number below. We look forward to continuing to serve you.

Sincerely,
Daniel Cho
Account Manager, Greenleaf Office Supplies`,
q:[
['Why did Daniel Cho write to Ms. Rivera?','to announce changes to the company\'s services','to apologize for a late delivery','to request an overdue payment','to offer her a new position','2문단: I am writing to inform you of … 편지 목적은 "I am writing to" 뒤.'],
['What will happen to an order placed at 3 p.m. after March 1?','It will arrive the next business day.','It will arrive on the same day.','It will be canceled automatically.','It will be charged an extra fee.','2문단: Orders placed after 2 p.m. will arrive the next business day.'],
['Why is Brightpath Design eligible for the Premium Membership?','It has been a customer for a long time.','It placed a very large order recently.','It is located within the city area.','It recommended Greenleaf to other firms.','3문단: as one of our long-term customers.'],
['What must Ms. Rivera do to receive the benefit?','choose an option in her online account by a deadline','call Daniel Cho before March 1','pay a membership fee in advance','order more than usual','3문단: sign in … select "Premium" … by February 20.'],
['Why will customer service hours change?','to better serve customers who work late','to reduce the number of staff','to handle more online orders','to match the new delivery times','4문단: so that we can better accommodate customers who work late.'],
['In the context of the passage, eligible means ___.','qualified','famous','required','likely','eligible for = ~할 자격이 있는(qualified).'],
['In the context of the passage, accommodate means ___.','serve','house','contain','adjust','accommodate customers = 고객에게 맞춰 주다(serve). "숙박시키다(house)"는 함정.'],
]},
];

/* 청취: 브라우저 영어 음성(TTS)으로 읽어 줌. 대사: [화자(0/1), 문장] */
const LISTENING = [
{ id:'l1', part:'Part 1 · 개인 경험 대화', title:'Weekend on Jeju Island', lines:[
[1,'Hi Sarah! You look tanned. Did you go somewhere last weekend?'],
[0,'Hi Mike. Yes, I went to Jeju Island with my sister. We joined a beach clean-up program there.'],
[1,'A beach clean-up? I thought you were going on vacation.'],
[0,'It was both! We spent the mornings collecting trash on the beach and the afternoons exploring the island.'],
[1,'That sounds like a great idea. How did you find the program?'],
[0,'My sister saw an advertisement on social media. The organizers even provided free lunch and gloves for the volunteers.'],
[1,'What kind of trash did you find?'],
[0,'Mostly plastic bottles and old fishing nets. Honestly, I was shocked by how much plastic there was.'],
[1,'I can imagine. Would you do it again?'],
[0,'Definitely. In fact, I am planning to join a river clean-up in Seoul next month. Why don\'t you come with me?'],
[1,'Sure, count me in. Just send me the details.'],
], q:[
['Who did Sarah travel with?','her sister','Mike','her coworkers','her parents'],
['What did Sarah do in the mornings?','She picked up trash on the beach.','She went swimming in the ocean.','She visited local museums.','She worked at a restaurant.'],
['How did Sarah\'s sister learn about the program?','from an online advertisement','from a close friend','from a newspaper article','from a local school'],
['What surprised Sarah the most?','the amount of plastic','the free lunch','the number of volunteers','the hot weather'],
['What will Mike probably do next month?','join a river clean-up with Sarah','travel to Jeju Island alone','buy new fishing nets','organize a beach festival'],
]},
{ id:'l2', part:'Part 2 · 발표 (상품·행사 소개)', title:'The ReadEasy App', lines:[
[0,'Good morning, everyone. I am Jenna from the Riverside Public Library, and today I would like to introduce our new mobile app, ReadEasy.'],
[0,'With ReadEasy, you can search our entire collection, reserve books, and renew your loans without visiting the library.'],
[0,'One of its most popular features is the e-book section, which offers more than twenty thousand titles that you can read on your phone for free.'],
[0,'The app also sends you a reminder three days before your books are due, so you will never have to pay a late fee again.'],
[0,'For parents, there is a special kids\' corner with audiobooks and reading games for children under ten.'],
[0,'To celebrate the launch, everyone who signs up this month will receive a free tote bag at the front desk.'],
[0,'Simply download the app, log in with your library card number, and show the welcome screen to our staff. Thank you, and happy reading!'],
], q:[
['What is the main purpose of the talk?','to introduce a new library app','to announce a library closing','to explain how to write e-books','to recruit library volunteers'],
['What can users do with the app?','renew borrowed books without visiting','buy new books at a discount','meet authors online','print documents at home'],
['When does the app send a reminder?','three days before books are due','one day after books are late','every Monday morning','whenever new books arrive'],
['Who is the kids\' corner designed for?','children under ten','teenagers preparing for exams','parents who work late','teachers at local schools'],
['How can new users get a free bag?','by showing the app\'s welcome screen at the front desk','by reading twenty e-books','by paying a small fee','by inviting a friend to the library'],
]},
{ id:'l3', part:'Part 3 · 장단점 비교 대화', title:'Car or Subway?', lines:[
[0,'Hi Tom. You look worried. What\'s up?'],
[1,'Hi Lisa. I just moved to a new apartment, and I am trying to decide whether to drive to work or take the subway.'],
[0,'Well, what are the advantages of driving?'],
[1,'Driving is comfortable, and I can leave whenever I want. I could also stop by the gym on the way home.'],
[0,'That\'s true. But what about the downsides?'],
[1,'Parking near the office is expensive. It costs about two hundred dollars a month. And traffic is terrible during rush hour.'],
[0,'What about the subway?'],
[1,'The subway is much cheaper, and it is usually on time. I could also read or study on the train.'],
[0,'Sounds good. Any disadvantages?'],
[1,'The trains are very crowded in the morning, and the nearest station is a fifteen-minute walk from my apartment.'],
[0,'Honestly, if I were you, I would take the subway. You said you wanted to save money for your trip next year.'],
[1,'You\'re right. Saving money is more important to me right now. I will take the subway and walk to the station. It will be good exercise anyway.'],
], q:[
['What are Tom and Lisa mainly discussing?','how Tom should get to work','where Tom should move next','which gym Tom should join','when Tom should take his trip'],
['According to Tom, what is an advantage of driving?','He can leave at any time.','Parking is free near the office.','There is little traffic.','It is cheaper than the subway.'],
['What is the problem with parking near the office?','It is expensive.','It is far from the office.','It is always full.','It closes early.'],
['What is a disadvantage of taking the subway?','The station is not close to his home.','The trains are often late.','He cannot read on the train.','The fare is very high.'],
['What has Tom most likely decided to do?','take the subway to work','buy a new car','move closer to the office','work from home'],
]},
{ id:'l4', part:'Part 4 · 방법·팁 설명', title:'Five Tips for a Job Interview', lines:[
[0,'Hello, listeners. Many of you have job interviews coming up, so today I will share five tips to help you succeed.'],
[0,'First, research the company carefully. Learn about its products, values, and recent news, so you can explain why you want to work there.'],
[0,'Second, prepare short stories from your experience. Interviewers often ask how you handled a problem, and a specific example is far more convincing than a general answer.'],
[0,'Third, practice out loud. Ask a friend to play the interviewer, or record yourself on your phone, and watch for habits such as speaking too fast.'],
[0,'Fourth, plan your trip the day before. Check the route and aim to arrive about ten minutes early, so you will not feel rushed.'],
[0,'Finally, prepare one or two questions for the interviewer. Asking thoughtful questions shows that you are truly interested in the position.'],
[0,'Remember, confidence comes from preparation. Good luck!'],
], q:[
['What is the talk mainly about?','how to prepare for a job interview','how to write a résumé','how to start a company','how to ask for a raise'],
['Why should listeners research the company?','to explain why they want to work there','to find out the salary','to meet current employees','to choose what to wear'],
['According to the speaker, what makes an answer more convincing?','a specific example','a long explanation','a confident voice','a friendly smile'],
['Why does the speaker suggest recording yourself?','to notice bad speaking habits','to send the video to employers','to memorize your answers','to save time on the interview day'],
['When should listeners arrive for the interview?','about ten minutes early','exactly on time','thirty minutes early','right after lunch'],
]},
];

/* 14주 로드맵 (2026.11.23 ~ 2027.02.28) */
const PHASES = [
  { from:'2026-11-23', to:'2026-12-13', name:'1단계 · 문법 공식 완성', goal:'문법 26문항 중 22개 이상', todo:['시제·가정법·당위성 공식을 외운다','준동사 동사 목록 매일 퀴즈','단어 하루 30개 시작'] },
  { from:'2026-12-14', to:'2027-01-10', name:'2단계 · 독해·어휘 끌어올리기', goal:'문법 24개 + 독해 15개 이상', todo:['독해는 질문 먼저 읽고 키워드 찾기','어휘 문제는 "문맥상 뜻"으로 고르기','12월 말~1월 초 첫 시험 응시 (실전 감 잡기)'] },
  { from:'2027-01-11', to:'2027-01-31', name:'3단계 · 청취 + 실전 응시', goal:'평균 65점 (문법 92 · 독해 61 · 청취 42)', todo:['청취는 들리는 문제만 확실히 맞히기','실전 26문항 20분 안에 풀기','1월 시험 매 회차 응시'] },
  { from:'2027-02-01', to:'2027-02-28', name:'4단계 · 약점 보완 + 마지막 응시', goal:'65점 이상 성적표 확보', todo:['오답노트 반복','약한 문법 유형 집중','남은 시험 회차 응시, 성적 발표일 확인'] },
];
