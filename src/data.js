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
// ── 기출형 보강 (실제 시험처럼 문맥이 긴 문장) ──
['tense','Jenna is not available for a call right now. She ___ a client in the conference room, and the meeting won\'t end until noon.','is meeting','meets','has met','will meet','right now → 현재진행. 단서가 앞 문장에 숨어 있는 기출 유형.'],
['tense','The company\'s founder, Mr. Hale, ___ in the same office for over thirty years by the time he finally retired in 2021.','had been working','has been working','was working','will have been working','by the time + 과거(retired) + for 기간 → had been -ing.'],
['tense','By the end of this year, Professor Kim ___ the effects of climate change on coral reefs for a full decade.','will have been studying','has been studying','had been studying','is studying','By the end of this year(미래) + for 기간 → will have been -ing.'],
['tense','Last night, while Mark ___ dinner, the smoke alarm went off and woke the baby.','was cooking','is cooking','has been cooking','cooks','Last night + while → 과거진행.'],
['tense','Don\'t call Anna at 8 tomorrow morning. She ___ to the airport to pick up her parents at that time.','will be driving','drives','has been driving','was driving','tomorrow morning + at that time → 미래진행.'],
['tense','Since the start of the semester, Tyler ___ at the campus library three nights a week to pay his tuition.','has been working','had been working','is working','will have been working','Since + 과거 시점 → 현재완료진행.'],
['tense','The hikers ___ for almost six hours when the rescue helicopter finally spotted them.','had been walking','have been walking','were walking','will have been walking','for 기간 + when + 과거(spotted) → 과거완료진행.'],
['tense','As of this moment, thousands of fans ___ outside the stadium for the band\'s first concert in ten years.','are waiting','waited','had waited','will have waited','As of this moment(지금 이 순간) → 현재진행.'],
['tense','When the CEO arrives at the headquarters later today, the staff ___ the final details of the annual report.','will be reviewing','are reviewing','have been reviewing','were reviewing','when + 현재동사(arrives) + later today → 미래진행.'],
['tense','I couldn\'t answer your call earlier because I ___ in a job interview at that moment.','was sitting','am sitting','have been sitting','will be sitting','earlier + at that moment(과거) → 과거진행.'],
['cond','If it were not for the internet, many people ___ it difficult to work from home.','would find','would have found','will find','found','If it were not for(~이 없다면) = 가정법 과거 → would + 동사원형.'],
['cond','If Ben had checked the weather forecast, he ___ his umbrella to the picnic yesterday.','would have brought','would bring','will bring','brought','If had p.p. → would have p.p.'],
['cond','Were the city to build a new subway line, commuters ___ much less time in traffic.','would spend','would have spent','will spend','spent','Were S to V (가정법 미래 도치) → would + 동사원형.'],
['cond','If my grandmother were still alive today, she ___ proud of my graduation.','would be','would have been','will be','is','If + were → would + 동사원형.'],
['cond','The concert could have been canceled if the organizers ___ enough tickets.','had not sold','did not sell','would not sell','have not sold','주절 could have p.p. → if절 had p.p.'],
['cond','If I won the lottery, I ___ a small house by the sea and quit my job.','would buy','would have bought','will buy','bought','If + 과거(won) → would + 동사원형.'],
['cond','Had the scientists ignored the strange results, they ___ the new antibiotic.','would never have discovered','would never discover','will never discover','never discovered','Had S p.p. → would have p.p.'],
['cond','If Paul were more organized, he ___ his deadlines so often.','would not miss','would not have missed','will not miss','does not miss','If + were → would + 동사원형.'],
['cond','If the hotel had offered free parking, we ___ there instead of the one downtown.','would have stayed','would stay','will stay','stayed','If had p.p. → would have p.p.'],
['verbal','The doctor advised Kelly ___ caffeine after 3 p.m. so that she could sleep better.','to avoid','avoiding','having avoided','to have avoided','advise + 목적어 + to V. (목적어 없이 바로 오면 advise -ing)'],
['verbal','Mr. Lim\'s speech encouraged many young people ___ careers in science.','to pursue','pursuing','having pursued','to have pursued','encourage + 목적어 + to V.'],
['verbal','The new policy allows employees ___ from home twice a week.','to work','working','having worked','to have worked','allow + 목적어 + to V.'],
['verbal','The teacher made the students ___ the essay because it was full of errors.','rewrite','to rewrite','rewriting','having rewritten','사역동사 make + 목적어 + 동사원형.'],
['verbal','Since the museum is closed on Mondays, I suggest ___ there on Tuesday instead.','going','to go','having gone','to have gone','suggest + -ing.'],
['verbal','The scientist is looking forward to ___ her findings at the conference.','presenting','present','having presented','to have presented','look forward to + -ing (to는 전치사).'],
['verbal','Many tourists spend hours ___ in line to see the famous painting.','waiting','to wait','having waited','to have waited','spend + 시간 + -ing.'],
['verbal','The startup failed ___ enough funding and closed after only a year.','to raise','raising','having raised','to have raised','fail + to V.'],
['verbal','The city council is considering ___ cars from the downtown area on weekends.','banning','to ban','having banned','to have banned','consider + -ing.'],
['verbal','After years of practice, Ryan finally managed ___ the marathon in under three hours.','to finish','finishing','having finished','to have finished','manage + to V.'],
['verbal','Residents have been told to discontinue ___ tap water until the pipes are repaired.','drinking','to drink','having drunk','to have drunk','discontinue + -ing.'],
['verbal','The library prohibits ___ food into the reading rooms.','bringing','to bring','having brought','to have brought','prohibit + -ing.'],
['verbal','Jake practiced ___ his speech in front of a mirror before the contest.','giving','to give','having given','to have given','practice + -ing.'],
['verbal','The new law requires companies ___ their employees for overtime work.','to pay','paying','having paid','to have paid','require + 목적어 + to V.'],
['verbal','This old movie is definitely worth ___ again.','watching','to watch','having watched','to have watched','be worth + -ing.'],
['subj','The landlord demanded that the tenant ___ the rent by the end of the week.','pay','pays','paid','will pay','demand that S + 동사원형.'],
['subj','It is advisable that travelers ___ their flight status before leaving for the airport.','check','checks','checked','are checking','It is advisable that S + 동사원형.'],
['subj','The fire chief ordered that all residents ___ the building immediately.','evacuate','evacuated','evacuates','are evacuating','order that S + 동사원형.'],
['subj','The professor requested that every essay ___ by email before midnight.','be submitted','is submitted','was submitted','will be submitted','request that S + be p.p.'],
['subj','It is imperative that the factory ___ its safety rules after the accident.','update','updates','updated','will update','It is imperative that S + 동사원형.'],
['subj','Dr. Moore advised that his patient ___ jogging until the knee injury heals.','avoid','avoids','avoided','is avoiding','advise that S + 동사원형.'],
['modal','The lights are on in Jake\'s apartment, and his car is parked outside. He ___ be home now.','must','should','could','would','강한 확신(~임에 틀림없다) → must.'],
['modal','When we were children, my grandfather ___ tell us stories every night before bed.','would','must','should','can','과거의 습관(~하곤 했다) → would.'],
['modal','Passengers ___ keep their seat belts fastened while the sign is on.','must','might','could','would','규칙·의무 → must.'],
['modal','With the new software, users ___ edit videos on their phones in just a few minutes.','can','must','should','would','능력·가능 → can.'],
['modal','Even experienced climbers ___ get lost in heavy fog, so always carry a map.','may','must','should','would','가능성(~할 수도 있다) → may.'],
['modal','To protect the rare plants, visitors ___ not step off the marked trails.','must','can','would','might','금지 규칙 → must not.'],
['rel','The Amazon rainforest, ___, produces a large share of the world\'s oxygen.','which covers parts of nine countries','that covers parts of nine countries','where covers parts of nine countries','who covers parts of nine countries','사물 + 콤마 → which.'],
['rel','The scientist ___ will speak at tomorrow\'s opening ceremony.','who won the award last year','which won the award last year','whose won the award last year','where won the award last year','사람 + 주어 자리 빔 → who.'],
['rel','Seoul, ___, hosted the Summer Olympics in 1988.','which is the capital of South Korea','that is the capital of South Korea','where is the capital of South Korea','who is the capital of South Korea','도시도 주어 자리가 비면 which. where 뒤엔 주어+동사가 다 있어야 함.'],
['rel','The hotel ___ was fully booked for the holidays.','where we stayed last summer','which we stayed last summer','who we stayed last summer','whose we stayed last summer','stay는 목적어가 없는 동사라 "we stayed"가 완전한 문장 → where.'],
['rel','Tom Hanks, ___, is one of the most popular actors in Hollywood.','whose movies have earned billions of dollars','which movies have earned billions of dollars','who movies have earned billions of dollars','that movies have earned billions of dollars','"그의 영화들" 소유 → whose + 명사.'],
['rel','Many Koreans still remember the summer of 2002, ___.','when the country hosted the World Cup','which the country hosted the World Cup','where the country hosted the World Cup','who the country hosted the World Cup','시간 + 완전한 문장 → when.'],
['conj','The company lost money for two years in a row. ___, it decided to close two of its stores.','Consequently','Nevertheless','Similarly','Meanwhile','손실 → 결과로 폐점: Consequently.'],
['conj','Kate was preparing dinner in the kitchen. ___, her husband was setting the table in the dining room.','Meanwhile','Therefore','Otherwise','For example','같은 시간 다른 일 → Meanwhile.'],
['conj','Many people think bats are blind. ___, most bats can see quite well.','In fact','Therefore','Similarly','For instance','통념을 뒤집는 사실 → In fact.'],
['conj','Sam failed the driving test three times. ___, he got his license on the fourth try.','Eventually','Otherwise','In contrast','Likewise','여러 번 끝에 → Eventually(결국).'],
['conj','The new phone is light and fast. ___, its battery lasts longer than older models.','In addition','However','Otherwise','Instead','장점 추가 → In addition.'],
['conj','Lisa saved money every month ___ she could buy a car by the end of the year.','so that','even though','unless','as if','목적(~하도록) → so that.'],
['conj','___ you finish the report, please send it to me right away.','As soon as','Although','Unless','Even though','"~하자마자" → As soon as.'],
];

/* 동명사·to부정사 동사 암기 */
const GERUND_VERBS = 'enjoy avoid consider mind keep quit finish postpone delay deny risk practice imagine recommend suggest involve admit dislike discontinue resist anticipate appreciate tolerate include advocate prohibit'.split(' ');
const INF_VERBS = 'want hope decide plan expect agree refuse promise need wish choose afford fail manage tend seem pretend attempt prepare offer learn aim deserve struggle arrange vow hesitate intend seek pledge'.split(' ');
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
['How did Sarah spend the afternoons?','by exploring the island','by resting at the hotel','by fishing with her sister','by taking a cooking class'],
['How did Sarah\'s sister learn about the program?','from an online advertisement','from a close friend','from a newspaper article','from a local school'],
['What did the organizers give the volunteers?','free lunch and gloves','free hotel rooms','plane tickets','new fishing nets'],
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
['What is true about the e-book section?','It offers over twenty thousand free titles.','It is only for children under ten.','It charges a small monthly fee.','It can be used only inside the library.'],
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
['Why does Lisa recommend the subway?','Tom wants to save money for a trip.','Lisa takes the same train every day.','The subway stops at Tom\'s gym.','Driving makes Tom feel sleepy.'],
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
['What should listeners do the day before the interview?','check the route to the company','buy new clothes','call the interviewer','memorize the company\'s history'],
['When should listeners arrive for the interview?','about ten minutes early','exactly on time','thirty minutes early','right after lunch'],
['According to the speaker, what does asking questions show?','real interest in the job','a lack of preparation','nervousness','strong technical skills'],
]},
];


/* ── 2회분: 독해 4지문 (28문항) ── */
READING.push(
{ id:'r5', part:'Part 1 · 인물 일대기', title:'LOUIS BRAILLE', body:
`Louis Braille was a French educator who invented braille, the system of raised dots that allows blind people to read and write by touch. His invention is still used around the world today, almost two centuries after he created it.

Braille was born on January 4, 1809, in Coupvray, a small town near Paris. His father made leather goods, and young Louis often played in his workshop. At the age of three, he accidentally injured his eye with a sharp tool. The wound became infected, and the infection soon spread to his other eye. By the age of five, he was completely blind.

Despite his disability, Braille was a bright and curious student. At ten, he won a scholarship to the Royal Institute for Blind Youth in Paris. The school's books used large raised letters, which were heavy, expensive, and very slow to read. When Braille was twelve, a former army captain named Charles Barbier visited the school and shared a code of raised dots that soldiers could read in the dark. The code was too complicated for everyday use, but it gave Braille an idea.

Working tirelessly, Braille simplified Barbier's system into a cell of just six dots, which could be felt with a single fingertip. He completed the basic system when he was only fifteen and later adapted it for mathematics and music. He went on to become a respected teacher at the institute.

Braille died of tuberculosis in 1852 at the age of 43. Two years later, the school officially adopted his system, and it gradually spread to other countries. Today, his name has become the word for the writing system itself.`,
q:[
['What is Louis Braille best known for?','creating a reading system for blind people','founding a school in Paris','designing tools for leather workers','teaching soldiers to read in the dark','1문단: invented braille … allows blind people to read and write by touch.'],
['How did Braille lose his sight?','An injury led to an infection in both eyes.','He was born without the ability to see.','He was hurt while serving in the army.','A disease spread through his town.','2문단: injured his eye with a sharp tool → infection spread to his other eye.'],
['What was the problem with the books at the Royal Institute?','They were hard to use and costly.','They were written only in English.','They were too small to read by touch.','They were kept in a locked room.','3문단: heavy, expensive, and very slow to read → hard to use and costly (패러프레이징).'],
['Why did Barbier\'s code need to be changed?','It was too complex for daily use.','It was secret military information.','It used too few dots.','It could only be read during the day.','3문단: too complicated for everyday use.'],
['Based on the article, what is true about Braille\'s six-dot cell?','It could be read with one finger.','It was invented by Barbier.','It was used only for music.','It was rejected by the institute.','4문단: could be felt with a single fingertip.'],
['In the context of the passage, bright means ___.','intelligent','shiny','cheerful','colorful','bright student = 영리한(intelligent). 빛나는(shiny)은 함정.'],
['In the context of the passage, adopted means ___.','accepted','raised','borrowed','copied','officially adopted his system = 공식적으로 채택했다(accepted).'],
]},
{ id:'r6', part:'Part 2 · 잡지 기사', title:'THE SURPRISING BENEFITS OF BOREDOM', body:
`Most of us do everything we can to avoid boredom. The moment we have nothing to do, we reach for our phones to check messages, watch videos, or scroll through social media. However, some psychologists now argue that being bored from time to time may actually be good for us.

In one widely discussed experiment, participants were first asked to complete a dull task, such as copying numbers from a phone book. Afterward, they were asked to think of as many uses as possible for a pair of plastic cups. The bored participants came up with more creative ideas than those who had skipped the dull task.

Researchers believe this happens because boredom lets the mind wander. When we are not focused on anything in particular, the brain begins to make new connections between ideas. This daydreaming state can lead to fresh solutions to problems that we could not solve when we were concentrating hard.

Boredom may also push people to change their lives. The uncomfortable feeling acts as a signal that our current activity is not meaningful, motivating us to seek new goals or hobbies.

Unfortunately, constant smartphone use rarely gives our minds the chance to wander. Experts therefore suggest setting aside short periods each day without screens. Taking a walk, looking out of a window, or simply sitting quietly may feel unproductive, but these moments could be when our best ideas emerge.`,
q:[
['What is the article mainly about?','how boredom can be useful','why phones make people unhappy','how to finish dull tasks quickly','why creative people are rarely bored','1문단 마지막 문장: being bored may actually be good for us.'],
['What did the experiment show?','People who were bored first gave more creative answers.','People who skipped the task felt more relaxed.','Copying numbers improved people\'s memory.','Plastic cups were hard to describe.','2문단: bored participants came up with more creative ideas.'],
['Why does boredom lead to creativity, according to researchers?','It allows the mind to link ideas freely.','It makes people concentrate harder.','It reduces the need for sleep.','It helps people remember facts.','3문단: the brain begins to make new connections between ideas.'],
['How can boredom help people change their lives?','It signals that they need more meaningful activities.','It makes them spend less money.','It helps them become more patient.','It encourages them to use their phones less.','4문단: signal that our current activity is not meaningful → seek new goals.'],
['What do experts most likely recommend?','spending some time each day away from screens','avoiding all boring activities','using phones only for work','doing difficult tasks every morning','5문단: setting aside short periods each day without screens.'],
['In the context of the passage, dull means ___.','boring','dark','blunt','slow','dull task = 지루한(boring). 무딘(blunt)·어두운(dark)은 함정.'],
['In the context of the passage, emerge means ___.','appear','escape','rise','recover','our best ideas emerge = 떠오르다(appear).'],
]},
{ id:'r7', part:'Part 3 · 백과사전', title:'MONARCH BUTTERFLY', body:
`The monarch butterfly is a large orange-and-black butterfly found mainly in North America. It is famous for its long annual migration, one of the most remarkable journeys in the insect world.

Each autumn, monarchs in eastern North America fly south to the mountain forests of central Mexico, a trip of up to about 4,800 kilometers. There, millions of butterflies gather in fir trees to survive the winter. In spring, they begin flying north again. No single butterfly completes the whole round trip, however. The monarchs that fly south belong to a special generation that can live for up to eight months, while summer generations live for only a few weeks. It takes several generations to return to the northern breeding grounds.

Scientists believe monarchs use the position of the sun to find their direction, and they may also sense the Earth's magnetic field. Remarkably, the butterflies that arrive in Mexico have never made the trip before.

Monarch caterpillars feed only on milkweed plants. The milkweed contains toxins that remain in the butterfly's body, making it poisonous to many birds. Its bright colors serve as a warning to predators to stay away.

In recent decades, monarch populations have fallen sharply. The loss of milkweed due to farming and the use of chemicals, the clearing of forests in Mexico, and extreme weather linked to climate change all pose threats. Many communities now plant milkweed gardens to help the butterflies recover.`,
q:[
['What is the monarch butterfly best known for?','its long yearly journey','its unusually long life','its ability to change colors','its habit of living in deserts','1문단: famous for its long annual migration.'],
['What is true about the monarchs that fly south in autumn?','They live much longer than summer monarchs.','They return north in the same year.','They travel only a few hundred kilometers.','They spend the winter in Canada.','2문단: special generation that can live for up to eight months.'],
['How do monarchs most likely find their way?','by using the sun and possibly magnetic fields','by following older butterflies','by remembering past trips','by following rivers and roads','3문단: use the position of the sun … may also sense the Earth\'s magnetic field.'],
['Why do birds usually avoid eating monarchs?','The butterflies contain poison from milkweed.','The butterflies are too large to catch.','The butterflies fly too high.','The butterflies hide in fir trees.','4문단: toxins … making it poisonous to many birds.'],
['Which is NOT mentioned as a threat to monarchs?','being collected as pets','the loss of milkweed','the clearing of forests','extreme weather','5문단에 애완용 채집은 없음. NOT 문제는 보기를 지문과 하나씩 대조.'],
['In the context of the passage, gather means ___.','assemble','harvest','understand','increase','millions of butterflies gather = 모이다(assemble).'],
['In the context of the passage, pose means ___.','present','model','ask','place','pose threats = 위협이 되다(present). "포즈를 취하다(model)"는 함정.'],
]},
{ id:'r8', part:'Part 4 · 비즈니스 편지', title:'Letter to Mr. Patel', body:
`Dear Mr. Patel,

On behalf of Northfield Travel Group, I am delighted to offer you the position of Marketing Coordinator. The hiring committee was very impressed by your experience with social media campaigns and your creative ideas during the final interview.

As we discussed, your starting date will be Monday, April 7. You will report to Ms. Grace Ahn, our Marketing Director, and work closely with our design team. During your first two weeks, you will attend a training program that introduces our booking systems and company policies.

Your annual salary will be $48,000, and you will be eligible for a performance bonus after your first six months. In addition, all full-time employees receive health insurance and fifteen days of paid vacation per year. Because our team works with partners in different time zones, you may occasionally need to join video meetings early in the morning. In such cases, you may begin work later that day.

To accept this offer, please sign the enclosed contract and return it to me by March 21. On your first day, kindly bring a copy of your university diploma and a valid photo ID so that we can complete your employment records.

We are confident that you will make a valuable contribution to our team. Please do not hesitate to contact me if you have any questions.

Sincerely,
Olivia Brooks
Human Resources Manager, Northfield Travel Group`,
q:[
['Why did Olivia Brooks write to Mr. Patel?','to offer him a job','to invite him to an interview','to ask him to plan a trip','to explain a change in salary','1문단: delighted to offer you the position.'],
['Why was Mr. Patel chosen for the position?','His experience and ideas impressed the committee.','He had worked for the company before.','He was recommended by Ms. Ahn.','He agreed to the lowest salary.','1문단: impressed by your experience … and your creative ideas.'],
['What will Mr. Patel do during his first two weeks?','learn about the company\'s systems and rules','travel to meet foreign partners','design a new advertising campaign','interview other candidates','2문단: training program that introduces our booking systems and company policies.'],
['What will most likely happen if Mr. Patel has an early meeting?','He can start his workday later.','He will receive extra vacation days.','He will be paid a bonus.','He can skip the training program.','3문단: you may begin work later that day.'],
['What must Mr. Patel bring on his first day?','his diploma and an ID card','the signed contract','his health insurance card','a list of marketing ideas','4문단: bring a copy of your university diploma and a valid photo ID. 계약서는 3/21까지 미리 보냄.'],
['In the context of the passage, report to means ___.','work under','write about','complain to','announce to','report to Ms. Ahn = 그 사람 밑에서 일하다(work under).'],
['In the context of the passage, valid means ___.','current','strong','reasonable','famous','valid photo ID = 유효한(current). "타당한(reasonable)"은 함정.'],
]},
);

/* ── 2회분: 청취 4세트 (7·6·6·7 = 26문항) ── */
LISTENING.push(
{ id:'l5', part:'Part 1 · 개인 경험 대화', title:'Jason\'s Cooking Class', lines:[
[0,'Hey Jason, I heard you started taking a cooking class. How is it going?'],
[1,'Hi Amy! It\'s going great. I signed up last month because I was tired of eating instant noodles every night.'],
[0,'Ha ha, I remember. So what kind of food are you learning to make?'],
[1,'Mostly Italian dishes. Last week we made fresh pasta from scratch. It took two hours, but it tasted amazing.'],
[0,'Wow. Where is the class?'],
[1,'It\'s at the community center near my office, so I can go right after work on Thursdays.'],
[0,'That\'s convenient. Is it expensive?'],
[1,'Not really. It\'s eighty dollars for eight weeks, and all the ingredients are included.'],
[0,'That\'s a good deal. What has been the hardest part?'],
[1,'Using a knife properly. I cut my finger in the first class, so now I am very careful. The chef taught us to curl our fingers when we chop vegetables.'],
[0,'Ouch. So, are you going to cook for me sometime?'],
[1,'Actually, I am planning a small dinner party next Saturday to practice. Why don\'t you come? I will make lasagna.'],
[0,'I would love to. I will bring dessert.'],
], q:[
['Why did Jason sign up for the cooking class?','He was tired of eating instant food.','His doctor told him to eat better.','He wanted to become a chef.','Amy asked him to join.'],
['What kind of food is Jason mainly learning to cook?','Italian food','Korean food','desserts','vegetarian dishes'],
['What is true about the pasta the class made?','It took a long time but was delicious.','It was bought at a store.','It was too salty to eat.','It was made in ten minutes.'],
['Why is the location of the class convenient for Jason?','It is near his workplace.','It is next to his apartment.','It is held online.','It is on his way to the gym.'],
['What is included in the class fee?','the ingredients','a set of knives','a recipe book','a dinner party'],
['What has Jason found most difficult?','using a knife correctly','following recipes','cleaning the kitchen','cooking quickly'],
['What will Amy probably do next Saturday?','go to Jason\'s dinner party','take a cooking class','cook lasagna for Jason','visit the community center'],
]},
{ id:'l6', part:'Part 2 · 발표 (상품·행사 소개)', title:'Harbor City Night Run', lines:[
[0,'Good evening, everyone! I am Chris, the organizer of the first Harbor City Night Run, and I am excited to tell you about this event.'],
[0,'The run will take place on Saturday, June 14, starting at 8 p.m. at Harbor Park. Runners can choose between a five-kilometer course and a ten-kilometer course along the waterfront.'],
[0,'Unlike regular races, this is a night run, so the route will be lit with colorful lights, and live bands will play music at every kilometer.'],
[0,'Each participant will receive a glow-in-the-dark T-shirt and a medal at the finish line. The fee is twenty-five dollars, and part of it will be donated to the city children\'s hospital.'],
[0,'If you register before May 31, you will get a five-dollar discount. Registration is available on our website.'],
[0,'Please note that runners under fourteen must be accompanied by an adult. We hope to see you at the starting line!'],
], q:[
['What is the speaker mainly talking about?','a running event held at night','a new park opening','a music festival at the harbor','a fundraiser for a school'],
['What can runners choose?','the length of the course','the color of their T-shirt','the starting time','the band that plays'],
['What makes this race different from regular races?','The route has lights and live music.','There is no finish line.','Runners must wear costumes.','It is held on a beach.'],
['What will be done with part of the fee?','It will be given to a children\'s hospital.','It will pay the bands.','It will buy new park lights.','It will be returned to the winners.'],
['How can participants get a discount?','by registering before the end of May','by bringing a friend','by running the longer course','by volunteering at the event'],
['What is required of runners under fourteen?','They must run with an adult.','They must run the shorter course.','They must pay a higher fee.','They must start earlier.'],
]},
{ id:'l7', part:'Part 3 · 장단점 비교 대화', title:'Laptop or Tablet?', lines:[
[0,'Hi Kevin. You\'re starting university next month, right? Have you bought a computer yet?'],
[1,'Not yet, Mina. I am trying to decide between a laptop and a tablet.'],
[0,'Let\'s think about it together. What is good about a laptop?'],
[1,'A laptop has a real keyboard, so it is much easier to type long reports. It also runs all the programs I need for my engineering classes.'],
[0,'Any downsides?'],
[1,'It\'s heavy to carry around campus all day, and the battery doesn\'t last very long.'],
[0,'And the tablet?'],
[1,'A tablet is light, and the battery lasts almost a full day. I could also take handwritten notes with a pen, which helps me remember things.'],
[0,'Sounds nice. What are the disadvantages?'],
[1,'Some engineering software doesn\'t work on tablets. And typing on the screen is slow.'],
[0,'Well, it seems like the programs are the most important thing for your major.'],
[1,'You\'re right. I can\'t take the risk of not running the software for my classes. I will go with the laptop and buy a lighter bag.'],
], q:[
['What are Kevin and Mina mainly discussing?','which device Kevin should buy for school','which university Kevin should attend','how to write long reports','where to buy a new bag'],
['According to Kevin, what is an advantage of a laptop?','It makes typing long reports easier.','It is light enough to carry all day.','It has a long-lasting battery.','It comes with a pen.'],
['What is a disadvantage of a laptop?','It is heavy to carry.','It cannot run engineering programs.','It is more expensive than a tablet.','Its screen is too small.'],
['Why does Kevin like the idea of a tablet\'s pen?','Writing by hand helps him remember.','He likes to draw pictures.','It makes typing faster.','His professors require it.'],
['What is a disadvantage of a tablet?','Some programs for his major will not run on it.','Its battery dies quickly.','It is hard to carry.','It cannot connect to the internet.'],
['What has Kevin most likely decided to do?','buy a laptop','buy a tablet','buy both devices','wait until next year'],
]},
{ id:'l8', part:'Part 4 · 방법·팁 설명', title:'How to Sleep Better', lines:[
[0,'Hello and welcome to Healthy Habits. Many of our listeners say they have trouble sleeping, so today I will share six simple steps to improve your sleep.'],
[0,'First, go to bed and wake up at the same time every day, even on weekends. A regular schedule helps your body clock stay on track.'],
[0,'Second, avoid caffeine in the afternoon. Coffee, tea, and some soft drinks can keep you awake for up to eight hours.'],
[0,'Third, put away your phone at least an hour before bed. The blue light from screens tells your brain that it is still daytime.'],
[0,'Fourth, keep your bedroom cool, dark, and quiet. If street noise is a problem, try using earplugs or a fan.'],
[0,'Fifth, exercise during the day, but not right before bedtime, because it can make you feel too energetic to fall asleep.'],
[0,'Finally, if you cannot fall asleep after twenty minutes, get up and do something relaxing, like reading a paper book, until you feel sleepy.'],
[0,'Try these steps for two weeks, and you will likely notice a difference. Sweet dreams!'],
], q:[
['What is the talk mainly about?','ways to sleep better','the dangers of caffeine','how to exercise safely','choosing a new bed'],
['Why should listeners keep the same sleep schedule on weekends?','to keep their body clock regular','to have more free time','to avoid traffic','to wake up earlier on Monday'],
['How long can caffeine keep a person awake?','up to eight hours','about one hour','about twenty minutes','up to two days'],
['Why should people put their phones away before bed?','Screen light makes the brain think it is daytime.','Phones make too much noise.','Phone calls can be stressful.','Phones get too hot at night.'],
['What does the speaker suggest for a noisy bedroom?','using earplugs or a fan','moving to another room','playing loud music','opening the windows'],
['Why should people avoid exercising right before bed?','It can make them too energetic to sleep.','It can cause injuries at night.','It makes them hungry.','It uses too much energy for the next day.'],
['What should listeners do if they cannot sleep after twenty minutes?','get up and do something relaxing','check their phone','drink a cup of tea','keep trying with their eyes closed'],
]},
);

/* ── 7일 완성 플랜: 하루 5~6시간 기준. [시간, 할 일] ── */
const PLAN = [
 { day:1, area:'문법', title:'시제 + 가정법 (12문항 = 문법의 절반)', score:'문법 12개 확보', blocks:[
   ['60분','요약노트 ① 시제 단서표 · ② 가정법 표 소리 내어 3번 읽기'],
   ['90분','시제·가정법 유형별 전체 풀기 → 틀린 건 단서에 동그라미'],
   ['60분','오답노트 다시 풀기 + 단서만 보고 형태 말하기'],
   ['60분','단어 1~60 (뜻 가리고 체크)'] ] },
 { day:2, area:'문법', title:'준동사 + 당위성 + 조동사', score:'문법 22개 확보', blocks:[
   ['60분','요약노트 ③ -ing / to V 동사 목록 외우기 (목록 퀴즈 2번)'],
   ['90분','준동사·당위성·조동사 유형별 전체 풀기'],
   ['60분','관계사·연결어 표 읽고 유형별 풀기'],
   ['60분','단어 61~120'] ] },
 { day:3, area:'문법', title:'문법 실전 26문항 × 3회', score:'문법 24개 이상 (92점)', blocks:[
   ['90분','실전 26문항 3회 (회당 20분 목표, 끝나면 바로 채점)'],
   ['60분','오답노트 비우기 (두 번 맞혀야 빠짐)'],
   ['60분','요약노트 전체 1회독'],
   ['60분','단어 121~181 + 다의어 표'] ] },
 { day:4, area:'독해', title:'독해 Part 1·2 + 어휘', score:'독해 파트당 4개', blocks:[
   ['30분','요약노트 ⑥ 독해 전략 읽기'],
   ['90분','인물(Part 1)·잡지(Part 2) 지문 4개: 질문 먼저 → 키워드 → 문단에서 근거 찾기'],
   ['60분','틀린 문제 근거 문장과 정답 보기 비교 (말 바꾸기 확인)'],
   ['60분','단어 전체 1회독 + 동의어 퀴즈'] ] },
 { day:5, area:'독해', title:'독해 Part 3·4 + 어휘', score:'독해 17개 (61점)', blocks:[
   ['90분','백과(Part 3)·편지(Part 4) 지문 4개'],
   ['60분','어휘 문제만 모아 다시 (사전 뜻 말고 문맥 뜻)'],
   ['60분','문법 실전 26문항 1회 (감 유지)'],
   ['60분','틀린 단어만 다시'] ] },
 { day:6, area:'청취', title:'청취 4파트 + 모의고사 1회', score:'청취 11개 (42점)', blocks:[
   ['30분','요약노트 ⑦ 청취 전략 읽기'],
   ['60분','청취 1회분 4세트: 질문 들을 때 의문사·키워드 메모'],
   ['90분','모의고사 1회 (문법 26 · 청취 26 · 독해 28)'],
   ['60분','모의고사 오답 정리'] ] },
 { day:7, area:'실전', title:'모의고사 2회 + 약점 마무리', score:'평균 65 이상', blocks:[
   ['90분','모의고사 2회'],
   ['60분','가장 약한 문법 유형만 다시 (오늘 탭 하단에 표시)'],
   ['30분','요약노트 ⑧ 시험 당일 체크 읽기'],
   ['자기 전','시제 단서표·동사 목록·당위성 단어만 한 번 더'] ] },
];
