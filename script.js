// 四级单词数据
const cet4Words = [
    { word: "abandon", meaning: "v. 放弃，遗弃", example: "He had to abandon his plan." },
    { word: "ability", meaning: "n. 能力，才能", example: "She has the ability to learn quickly." },
    { word: "abnormal", meaning: "adj. 反常的，异常的", example: "The weather has been abnormal lately." },
    { word: "aboard", meaning: "adv. 在船(车、飞机)上", example: "Welcome aboard the flight." },
    { word: "absence", meaning: "n. 缺席，不在", example: "His absence made everyone worried." },
    { word: "absolute", meaning: "adj. 绝对的，完全的", example: "I have absolute confidence in him." },
    { word: "absorb", meaning: "v. 吸收，吸引", example: "Plants absorb sunlight." },
    { word: "abstract", meaning: "adj. 抽象的", example: "Love is an abstract concept." },
    { word: "abundant", meaning: "adj. 丰富的，充足的", example: "We have abundant evidence." },
    { word: "abuse", meaning: "v. 滥用，虐待", example: "Don't abuse your power." },
    { word: "academic", meaning: "adj. 学术的", example: "He has a strong academic background." },
    { word: "accelerate", meaning: "v. 加速", example: "The car accelerated rapidly." },
    { word: "access", meaning: "n. 通道，入口", example: "The access to the building is restricted." },
    { word: "accommodate", meaning: "v. 容纳，适应", example: "The hotel can accommodate 300 guests." },
    { word: "accompany", meaning: "v. 陪伴，陪同", example: "She accompanied me to the doctor." },
    { word: "accomplish", meaning: "v. 完成，实现", example: "We accomplished our goal." },
    { word: "account", meaning: "n. 账户，描述", example: "Please open a bank account." },
    { word: "accumulate", meaning: "v. 积累，积聚", example: "Dust accumulates in the corners." },
    { word: "accuracy", meaning: "n. 准确性", example: "Accuracy is important in science." },
    { word: "accuse", meaning: "v. 指责，控告", example: "He was accused of cheating." },
    { word: "achieve", meaning: "v. 达到，实现", example: "She achieved her dreams." },
    { word: "acknowledge", meaning: "v. 承认，致谢", example: "He acknowledged the gift." },
    { word: "acquire", meaning: "v. 获得，习得", example: "She acquired a new skill." },
    { word: "adapt", meaning: "v. 适应，改编", example: "We must adapt to change." },
    { word: "add", meaning: "v. 添加，增加", example: "Please add sugar to my coffee." },
    { word: "addition", meaning: "n. 加法，增加", example: "In addition, we need more time." },
    { word: "adequate", meaning: "adj. 足够的", example: "We have adequate supplies." },
    { word: "adjust", meaning: "v. 调整，适应", example: "Adjust the volume, please." },
    { word: "admit", meaning: "v. 承认，准许进入", example: "He admitted his mistake." },
    { word: "adopt", meaning: "v. 采用，收养", example: "The company adopted new policies." },
    { word: "advance", meaning: "v. 前进，进步", example: "Science advances rapidly." },
    { word: "advantage", meaning: "n. 优势，有利条件", example: "She has an advantage." },
    { word: "adventure", meaning: "n. 冒险", example: "Life is an adventure." },
    { word: "advertise", meaning: "v. 做广告", example: "We advertise our products online." },
    { word: "advice", meaning: "n. 建议", example: "Give me some advice." },
    { word: "advise", meaning: "v. 建议", example: "I advise you to rest." },
    { word: "affect", meaning: "v. 影响", example: "The weather affects our mood." },
    { word: "afford", meaning: "v. 买得起，负担得起", example: "I can afford this." },
    { word: "afraid", meaning: "adj. 害怕的", example: "Don't be afraid." },
    { word: "after", meaning: "prep. 在...之后", example: "After school, we play." },
    { word: "afternoon", meaning: "n. 下午", example: "See you in the afternoon." },
    { word: "again", meaning: "adv. 再一次", example: "Try again." },
    { word: "against", meaning: "prep. 反对", example: "I'm against this plan." },
    { word: "age", meaning: "n. 年龄", example: "What's your age?" },
    { word: "agency", meaning: "n. 代理，机构", example: "She works at a travel agency." },
    { word: "agent", meaning: "n. 代理人", example: "He is my agent." },
    { word: "aggressive", meaning: "adj. 侵略的，积极的", example: "He has an aggressive style." },
    { word: "agree", meaning: "v. 同意", example: "I agree with you." },
    { word: "agreement", meaning: "n. 协议", example: "We signed an agreement." },
    { word: "agriculture", meaning: "n. 农业", example: "Agriculture is important." },
    { word: "ahead", meaning: "adv. 向前", example: "Go ahead." },
    { word: "aid", meaning: "n. 帮助", example: "He gave me first aid." },
    { word: "aim", meaning: "n. 目标", example: "What's your aim?" },
    { word: "air", meaning: "n. 空气", example: "The air is fresh." },
    { word: "aircraft", meaning: "n. 飞机", example: "The aircraft took off." },
    { word: "airline", meaning: "n. 航空公司", example: "She works for an airline." },
    { word: "airport", meaning: "n. 机场", example: "We arrived at the airport." },
    { word: "alarm", meaning: "n. 警报", example: "The alarm went off." },
    { word: "album", meaning: "n. 相册，唱片", example: "This is my favorite album." },
    { word: "alcohol", meaning: "n. 酒精", example: "Don't drink too much alcohol." },
    { word: "alert", meaning: "adj. 警惕的", example: "Stay alert." },
    { word: "alike", meaning: "adj. 相似的", example: "They look alike." },
    { word: "alive", meaning: "adj. 活着的", example: "He is still alive." },
    { word: "all", meaning: "adj. 所有的", example: "All students passed." },
    { word: "allow", meaning: "v. 允许", example: "Smoking is not allowed." },
    { word: "alloy", meaning: "n. 合金", example: "Brass is an alloy." },
    { word: "alone", meaning: "adj. 单独的", example: "I want to be alone." },
    { word: "along", meaning: "prep. 沿着", example: "Walk along the street." },
    { word: "aloud", meaning: "adv. 大声地", example: "Read aloud." },
    { word: "alphabet", meaning: "n. 字母表", example: "Learn the alphabet." },
    { word: "already", meaning: "adv. 已经", example: "I've already finished." },
    { word: "also", meaning: "adv. 也", example: "I also like it." },
    { word: "alter", meaning: "v. 改变", example: "The plan was altered." },
    { word: "alternative", meaning: "n. 替代物", example: "We have alternatives." },
    { word: "although", meaning: "conj. 虽然", example: "Although it rained, we went out." },
    { word: "altitude", meaning: "n. 高度", example: "The plane flew at high altitude." },
    { word: "altogether", meaning: "adv. 完全，总共", example: "It's altogether different." },
    { word: "aluminum", meaning: "n. 铝", example: "This is made of aluminum." },
    { word: "always", meaning: "adv. 总是", example: "He always helps others." },
    { word: "amazing", meaning: "adj. 令人惊讶的", example: "That's amazing!" },
    { word: "ambition", meaning: "n. 野心，雄心", example: "He has great ambition." },
    { word: "ambulance", meaning: "n. 救护车", example: "Call an ambulance!" },
    { word: "among", meaning: "prep. 在...之中", example: "Choose among these options." },
    { word: "amount", meaning: "n. 数量", example: "A large amount of money." },
    { word: "analysis", meaning: "n. 分析", example: "The analysis shows..." },
    { word: "ancestor", meaning: "n. 祖先", example: "Our ancestors lived here." },
    { word: "anchor", meaning: "n. 锚", example: "Drop the anchor." },
    { word: "ancient", meaning: "adj. 古代的", example: "Ancient history." },
    { word: "and", meaning: "conj. 和", example: "You and me." },
    { word: "anger", meaning: "n. 愤怒", example: "He controlled his anger." },
    { word: "angle", meaning: "n. 角度", example: "Look at it from another angle." },
    { word: "angry", meaning: "adj. 生气的", example: "Don't be angry." },
    { word: "ankle", meaning: "n. 脚踝", example: "I twisted my ankle." },
    { word: "anniversary", meaning: "n. 周年纪念日", example: "Happy anniversary!" },
    { word: "announce", meaning: "v. 宣布", example: "They announced the winner." },
    { word: "annoy", meaning: "v. 使烦恼", example: "Don't annoy me." },
    { word: "annual", meaning: "adj. 每年的", example: "Annual meeting." },
    { word: "another", meaning: "adj. 另一个", example: "Give me another one." },
    { word: "answer", meaning: "n. 答案", example: "What's the answer?" },
    { word: "anticipate", meaning: "v. 预期", example: "I anticipate success." },
    { word: "anxiety", meaning: "n. 焦虑", example: "She felt anxiety before the test." },
    { word: "anxious", meaning: "adj. 焦虑的", example: "I'm anxious about the result." },
    { word: "any", meaning: "adj. 任何的", example: "Any questions?" },
    { word: "anybody", meaning: "pron. 任何人", example: "Anybody can do it." },
    { word: "anyhow", meaning: "adv. 无论如何", example: "Anyhow, we'll try." },
    { word: "anyone", meaning: "pron. 任何人", example: "Is anyone here?" },
    { word: "anything", meaning: "pron. 任何事", example: "Do anything you want." },
    { word: "anyway", meaning: "adv. 无论如何", example: "Anyway, let's start." },
    { word: "anywhere", meaning: "adv. 任何地方", example: "Go anywhere you like." },
    { word: "apart", meaning: "adv. 分开", example: "Take it apart." },
    { word: "apartment", meaning: "n. 公寓", example: "I live in an apartment." },
    { word: "apologize", meaning: "v. 道歉", example: "You should apologize." },
    { word: "apology", meaning: "n. 道歉", example: "He made an apology." },
    { word: "apparent", meaning: "adj. 明显的", example: "It's apparent that..." },
    { word: "appeal", meaning: "v. 呼吁，吸引", example: "This appeals to me." },
    { word: "appear", meaning: "v. 出现", example: "He appeared suddenly." },
    { word: "appearance", meaning: "n. 外貌，出现", example: "Don't judge by appearance." },
    { word: "appendix", meaning: "n. 附录", example: "See the appendix." },
    { word: "appetite", meaning: "n. 食欲", example: "I have no appetite." },
    { word: "applaud", meaning: "v. 鼓掌", example: "Everyone applauded." },
    { word: "apple", meaning: "n. 苹果", example: "An apple a day..." },
    { word: "applicant", meaning: "n. 申请人", example: "He is an applicant." },
    { word: "application", meaning: "n. 申请，应用", example: "Fill out the application." },
    { word: "apply", meaning: "v. 申请，应用", example: "Apply for the job." },
    { word: "appoint", meaning: "v. 任命", example: "He was appointed manager." },
    { word: "appointment", meaning: "n. 约会，任命", example: "Make an appointment." },
    { word: "appreciate", meaning: "v. 欣赏，感激", example: "I appreciate your help." },
    { word: "approach", meaning: "n./v. 方法，接近", example: "Try a different approach." },
    { word: "appropriate", meaning: "adj. 适当的", example: "It's not appropriate." },
    { word: "approval", meaning: "n. 批准", example: "Give your approval." },
    { word: "approve", meaning: "v. 批准", example: "The plan was approved." },
    { word: "approximate", meaning: "adj. 近似的", example: "The approximate time." },
    { word: "approximately", meaning: "adv. 大约", example: "It's approximately 10 o'clock." },
    { word: "april", meaning: "n. 四月", example: "April showers." },
    { word: "area", meaning: "n. 区域", example: "This area is safe." },
    { word: "argue", meaning: "v. 争论", example: "Don't argue with me." },
    { word: "argument", meaning: "n. 争论", example: "The argument continued." },
    { word: "arise", meaning: "v. 出现", example: "Problems arose." },
    { word: "arithmetic", meaning: "n. 算术", example: "I'm good at arithmetic." },
    { word: "arm", meaning: "n. 手臂", example: "Raise your arm." },
    { word: "army", meaning: "n. 军队", example: "Join the army." },
    { word: "around", meaning: "prep. 围绕", example: "Look around." },
    { word: "arrange", meaning: "v. 安排", example: "Arrange a meeting." },
    { word: "arrangement", meaning: "n. 安排", example: "Make arrangements." },
    { word: "arrest", meaning: "v. 逮捕", example: "He was arrested." },
    { word: "arrival", meaning: "n. 到达", example: "His arrival was expected." },
    { word: "arrive", meaning: "v. 到达", example: "We arrived late." },
    { word: "arrow", meaning: "n. 箭", example: "Shoot an arrow." },
    { word: "art", meaning: "n. 艺术", example: "I love art." },
    { word: "article", meaning: "n. 文章，冠词", example: "Read the article." },
    { word: "artificial", meaning: "adj. 人工的", example: "Artificial intelligence." },
    { word: "artist", meaning: "n. 艺术家", example: "He is a great artist." },
    { word: "artistic", meaning: "adj. 艺术的", example: "Artistic talent." },
    { word: "as", meaning: "conj. 作为", example: "As a student..." },
    { word: "ash", meaning: "n. 灰", example: "The fire turned to ash." },
    { word: "ashamed", meaning: "adj. 羞愧的", example: "I feel ashamed." },
    { word: "Asia", meaning: "n. 亚洲", example: "Asia is large." },
    { word: "Asian", meaning: "adj. 亚洲的", example: "Asian culture." },
    { word: "aside", meaning: "adv. 在旁边", example: "Put it aside." },
    { word: "ask", meaning: "v. 问", example: "Ask a question." },
    { word: "asleep", meaning: "adj. 睡着的", example: "Fall asleep." },
    { word: "aspect", meaning: "n. 方面", example: "Consider all aspects." },
    { word: "assemble", meaning: "v. 组装", example: "Assemble the furniture." },
    { word: "assembly", meaning: "n. 集会", example: "School assembly." },
    { word: "assess", meaning: "v. 评估", example: "Assess the situation." },
    { word: "assessment", meaning: "n. 评估", example: "Make an assessment." },
    { word: "assign", meaning: "v. 分配", example: "Assign homework." },
    { word: "assignment", meaning: "n. 作业，分配", example: "Do your assignment." },
    { word: "assist", meaning: "v. 帮助", example: "Assist me." },
    { word: "assistance", meaning: "n. 帮助", example: "I need assistance." },
    { word: "assistant", meaning: "n. 助手", example: "He is my assistant." },
    { word: "associate", meaning: "v. 联系", example: "Associate with friends." },
    { word: "association", meaning: "n. 协会，联系", example: "Professional association." },
    { word: "assume", meaning: "v. 假设", example: "Assume it's true." },
    { word: "assumption", meaning: "n. 假设", example: "My assumption was wrong." },
    { word: "assure", meaning: "v. 保证", example: "I assure you." },
    { word: "astonish", meaning: "v. 使惊讶", example: "It astonished me." },
    { word: "astronaut", meaning: "n. 宇航员", example: "Be an astronaut." },
    { word: "astronomy", meaning: "n. 天文学", example: "Study astronomy." },
    { word: "athlete", meaning: "n. 运动员", example: "Professional athlete." },
    { word: "athletic", meaning: "adj. 运动的", example: "Athletic ability." },
    { word: "atmosphere", meaning: "n. 大气，气氛", example: "The atmosphere is tense." },
    { word: "atmospheric", meaning: "adj. 大气的", example: "Atmospheric pressure." },
    { word: "atom", meaning: "n. 原子", example: "Atomic structure." },
    { word: "atomic", meaning: "adj. 原子的", example: "Atomic energy." },
    { word: "attach", meaning: "v. 附加", example: "Attach a file." },
    { word: "attack", meaning: "v./n. 攻击", example: "Attack the enemy." },
    { word: "attain", meaning: "v. 获得", example: "Attain success." },
    { word: "attempt", meaning: "v./n. 尝试", example: "Make an attempt." },
    { word: "attend", meaning: "v. 参加", example: "Attend the meeting." },
    { word: "attention", meaning: "n. 注意", example: "Pay attention." },
    { word: "attentive", meaning: "adj. 专心的", example: "Be attentive." },
    { word: "attitude", meaning: "n. 态度", example: "Positive attitude." },
    { word: "attract", meaning: "v. 吸引", example: "Attract customers." },
    { word: "attraction", meaning: "n. 吸引力", example: "Tourist attraction." },
    { word: "attractive", meaning: "adj. 有吸引力的", example: "Attractive offer." },
    { word: "attribute", meaning: "n. 属性", example: "Key attribute." },
    { word: "audience", meaning: "n. 观众", example: "The audience cheered." },
    { word: "audio", meaning: "adj. 音频的", example: "Audio equipment." },
    { word: "audit", meaning: "v. 审计", example: "Audit the accounts." },
    { word: "auditorium", meaning: "n. 礼堂", example: "Meet in the auditorium." },
    { word: "August", meaning: "n. 八月", example: "August is hot." },
    { word: "aunt", meaning: "n. 阿姨", example: "My aunt visited." },
    { word: "Australia", meaning: "n. 澳大利亚", example: "Visit Australia." },
    { word: "Australian", meaning: "adj. 澳大利亚的", example: "Australian accent." },
    { word: "author", meaning: "n. 作者", example: "Famous author." },
    { word: "authority", meaning: "n. 权威", example: "He has authority." },
    { word: "auto", meaning: "n. 汽车", example: "Auto repair." },
    { word: "automatic", meaning: "adj. 自动的", example: "Automatic door." },
    { word: "automatically", meaning: "adv. 自动地", example: "It opens automatically." },
    { word: "automobile", meaning: "n. 汽车", example: "Drive an automobile." },
    { word: "autumn", meaning: "n. 秋天", example: "Autumn leaves." },
    { word: "available", meaning: "adj. 可用的", example: "Is it available?" },
    { word: "avenue", meaning: "n. 大道", example: "Fifth Avenue." },
    { word: "average", meaning: "n./adj. 平均", example: "Average score." },
    { word: "avoid", meaning: "v. 避免", example: "Avoid mistakes." },
    { word: "await", meaning: "v. 等待", example: "Await your reply." },
    { word: "awake", meaning: "adj. 醒着的", example: "Stay awake." },
    { word: "award", meaning: "n./v. 奖励", example: "Win an award." },
    { word: "aware", meaning: "adj. 意识到的", example: "Be aware of." },
    { word: "awareness", meaning: "n. 意识", example: "Environmental awareness." },
    { word: "awful", meaning: "adj. 糟糕的", example: "Awful weather." },
    { word: "awkward", meaning: "adj. 尴尬的", example: "Awkward situation." },
    { word: "baby", meaning: "n. 婴儿", example: "Cute baby." },
    { word: "back", meaning: "n. 背部", example: "Turn back." },
    { word: "background", meaning: "n. 背景", example: "Check background." },
    { word: "backward", meaning: "adv. 向后", example: "Go backward." },
    { word: "bacteria", meaning: "n. 细菌", example: "Kill bacteria." },
    { word: "bad", meaning: "adj. 坏的", example: "Bad news." },
    { word: "badly", meaning: "adv. 严重地", example: "He was badly hurt." },
    { word: "bag", meaning: "n. 包", example: "Carry a bag." },
    { word: "baggage", meaning: "n. 行李", example: "Check baggage." },
    { word: "bake", meaning: "v. 烤", example: "Bake a cake." },
    { word: "balance", meaning: "n./v. 平衡", example: "Keep balance." },
    { word: "ball", meaning: "n. 球", example: "Play ball." },
    { word: "balloon", meaning: "n. 气球", example: "Colorful balloon." },
    { word: "ban", meaning: "v. 禁止", example: "Ban smoking." },
    { word: "band", meaning: "n. 乐队", example: "Rock band." },
    { word: "bank", meaning: "n. 银行", example: "Go to bank." },
    { word: "bar", meaning: "n. 酒吧", example: "Bar counter." },
    { word: "barrier", meaning: "n. 障碍", example: "Language barrier." },
    { word: "base", meaning: "n. 基础", example: "Base camp." },
    { word: "basic", meaning: "adj. 基本的", example: "Basic skills." },
    { word: "basically", meaning: "adv. 基本上", example: "Basically, it's done." },
    { word: "basis", meaning: "n. 基础", example: "On this basis." },
    { word: "basket", meaning: "n. 篮子", example: "Shopping basket." },
    { word: "basketball", meaning: "n. 篮球", example: "Play basketball." },
    { word: "bath", meaning: "n. 洗澡", example: "Take a bath." },
    { word: "bathe", meaning: "v. 洗澡", example: "Bathe daily." },
    { word: "bathroom", meaning: "n. 浴室", example: "Go to bathroom." },
    { word: "battery", meaning: "n. 电池", example: "Replace battery." },
    { word: "battle", meaning: "n./v. 战斗", example: "Battle field." },
    { word: "bay", meaning: "n. 海湾", example: "Beautiful bay." },
    { word: "be", meaning: "v. 是", example: "I am here." },
    { word: "beach", meaning: "n. 海滩", example: "Go to beach." },
    { word: "beam", meaning: "n. 光束", example: "Light beam." },
    { word: "bean", meaning: "n. 豆子", example: "Coffee bean." },
    { word: "bear", meaning: "n. 熊", example: "Grizzly bear." },
    { word: "beard", meaning: "n. 胡子", example: "Long beard." },
    { word: "beast", meaning: "n. 野兽", example: "Wild beast." },
    { word: "beat", meaning: "v. 击打", example: "Beat the drum." },
    { word: "beautiful", meaning: "adj. 美丽的", example: "Beautiful scenery." },
    { word: "beauty", meaning: "n. 美丽", example: "Beauty is subjective." },
    { word: "because", meaning: "conj. 因为", example: "Because I love it." },
    { word: "become", meaning: "v. 成为", example: "Become a doctor." },
    { word: "bed", meaning: "n. 床", example: "Go to bed." },
    { word: "bedroom", meaning: "n. 卧室", example: "Clean bedroom." },
    { word: "bee", meaning: "n. 蜜蜂", example: "Busy bee." },
    { word: "beef", meaning: "n. 牛肉", example: "Beef steak." },
    { word: "beer", meaning: "n. 啤酒", example: "Cold beer." },
    { word: "before", meaning: "prep. 在...之前", example: "Before dinner." },
    { word: "begin", meaning: "v. 开始", example: "Begin now." },
    { word: "beginner", meaning: "n. 初学者", example: "I'm a beginner." },
    { word: "beginning", meaning: "n. 开始", example: "In the beginning." },
    { word: "behalf", meaning: "n. 代表", example: "On behalf of." },
    { word: "behave", meaning: "v. 表现", example: "Behave well." },
    { word: "behavior", meaning: "n. 行为", example: "Good behavior." },
    { word: "behind", meaning: "prep. 在...后面", example: "Behind the door." },
    { word: "being", meaning: "n. 存在", example: "Human being." },
    { word: "belief", meaning: "n. 信仰", example: "Strong belief." },
    { word: "believe", meaning: "v. 相信", example: "I believe you." },
    { word: "bell", meaning: "n. 铃", example: "Ring the bell." },
    { word: "belong", meaning: "v. 属于", example: "It belongs to me." },
    { word: "below", meaning: "prep. 在...下面", example: "Below zero." },
    { word: "belt", meaning: "n. 腰带", example: "Safety belt." },
    { word: "bench", meaning: "n. 长椅", example: "Park bench." },
    { word: "bend", meaning: "v. 弯曲", example: "Bend down." },
    { word: "beneath", meaning: "prep. 在...下方", example: "Beneath the surface." },
    { word: "benefit", meaning: "n./v. 利益", example: "Benefit from it." },
    { word: "beneficial", meaning: "adj. 有益的", example: "Beneficial effect." },
    { word: "bent", meaning: "adj. 弯曲的", example: "Bent tree." },
    { word: "beside", meaning: "prep. 在...旁边", example: "Sit beside me." },
    { word: "besides", meaning: "adv. 此外", example: "Besides, it's cheap." },
    { word: "best", meaning: "adj. 最好的", example: "Best friend." },
    { word: "bet", meaning: "v. 打赌", example: "I bet you can." },
    { word: "better", meaning: "adj. 更好的", example: "Better than before." },
    { word: "between", meaning: "prep. 在...之间", example: "Between us." },
    { word: "beyond", meaning: "prep. 超出", example: "Beyond belief." },
    { word: "bicycle", meaning: "n. 自行车", example: "Ride bicycle." },
    { word: "big", meaning: "adj. 大的", example: "Big house." },
    { word: "bike", meaning: "n. 自行车", example: "Ride bike." },
    { word: "bill", meaning: "n. 账单", example: "Pay the bill." },
    { word: "billion", meaning: "num. 十亿", example: "A billion dollars." },
    { word: "bind", meaning: "v. 绑定", example: "Bind together." },
    { word: "biography", meaning: "n. 传记", example: "Read biography." },
    { word: "biology", meaning: "n. 生物学", example: "Study biology." },
    { word: "bird", meaning: "n. 鸟", example: "Flying bird." },
    { word: "birth", meaning: "n. 出生", example: "Date of birth." },
    { word: "birthday", meaning: "n. 生日", example: "Happy birthday!" },
    { word: "biscuit", meaning: "n. 饼干", example: "Eat biscuit." },
    { word: "bit", meaning: "n. 一点", example: "A bit tired." },
    { word: "bite", meaning: "v. 咬", example: "Dog bite." },
    { word: "bitter", meaning: "adj. 苦的", example: "Bitter taste." },
    { word: "black", meaning: "adj. 黑色的", example: "Black cat." },
    { word: "blackboard", meaning: "n. 黑板", example: "Write on blackboard." },
    { word: "blame", meaning: "v. 责备", example: "Don't blame me." },
    { word: "blank", meaning: "adj. 空白的", example: "Blank page." },
    { word: "blanket", meaning: "n. 毯子", example: "Warm blanket." },
    { word: "blast", meaning: "n./v. 爆炸", example: "Blast off." },
    { word: "blaze", meaning: "n. 火焰", example: "Blaze of fire." },
    { word: "bleed", meaning: "v. 流血", example: "My finger bleeds." },
    { word: "blend", meaning: "v. 混合", example: "Blend ingredients." },
    { word: "blind", meaning: "adj. 盲的", example: "Blind person." },
    { word: "block", meaning: "n. 块", example: "Building block." },
    { word: "blood", meaning: "n. 血", example: "Blood type." },
    { word: "bloom", meaning: "v. 开花", example: "Flowers bloom." },
    { word: "blossom", meaning: "n. 花", example: "Cherry blossom." },
    { word: "blow", meaning: "v. 吹", example: "Blow wind." },
    { word: "blue", meaning: "adj. 蓝色的", example: "Blue sky." },
    { word: "board", meaning: "n. 木板", example: "Surf board." },
    { word: "boat", meaning: "n. 船", example: "Row boat." },
    { word: "body", meaning: "n. 身体", example: "Healthy body." },
    { word: "boil", meaning: "v. 沸腾", example: "Boil water." },
    { word: "bold", meaning: "adj. 大胆的", example: "Bold move." },
    { word: "bolt", meaning: "n. 螺栓", example: "Loose bolt." },
    { word: "bomb", meaning: "n. 炸弹", example: "Time bomb." },
    { word: "bond", meaning: "n. 债券", example: "Government bond." },
    { word: "bone", meaning: "n. 骨头", example: "Dog bone." },
    { word: "bonus", meaning: "n. 奖金", example: "Year-end bonus." },
    { word: "book", meaning: "n. 书", example: "Read book." },
    { word: "boom", meaning: "n. 繁荣", example: "Economic boom." },
    { word: "boot", meaning: "n. 靴子", example: "Winter boot." },
    { word: "border", meaning: "n. 边界", example: "Cross border." },
    { word: "bore", meaning: "v. 使厌烦", example: "Don't bore me." },
    { word: "boring", meaning: "adj. 无聊的", example: "Boring movie." },
    { word: "born", meaning: "adj. 出生的", example: "Born in China." },
    { word: "borrow", meaning: "v. 借", example: "Borrow money." },
    { word: "boss", meaning: "n. 老板", example: "My boss." },
    { word: "both", meaning: "adj. 两者都", example: "Both sides." },
    { word: "bother", meaning: "v. 打扰", example: "Don't bother." },
    { word: "bottle", meaning: "n. 瓶子", example: "Water bottle." },
    { word: "bottom", meaning: "n. 底部", example: "At the bottom." },
    { word: "bounce", meaning: "v. 弹跳", example: "Ball bounce." },
    { word: "bound", meaning: "adj. 受约束的", example: "Bound by rules." },
    { word: "boundary", meaning: "n. 边界", example: "National boundary." },
    { word: "bow", meaning: "v. 鞠躬", example: "Bow politely." },
    { word: "bowl", meaning: "n. 碗", example: "Rice bowl." },
    { word: "box", meaning: "n. 盒子", example: "Cardboard box." },
    { word: "boy", meaning: "n. 男孩", example: "Little boy." },
    { word: "brain", meaning: "n. 大脑", example: "Brain power." },
    { word: "branch", meaning: "n. 分支", example: "Tree branch." },
    { word: "brand", meaning: "n. 品牌", example: "Famous brand." },
    { word: "brass", meaning: "n. 黄铜", example: "Brass instrument." },
    { word: "brave", meaning: "adj. 勇敢的", example: "Brave soldier." },
    { word: "bread", meaning: "n. 面包", example: "Eat bread." },
    { word: "break", meaning: "v. 打破", example: "Break glass." },
    { word: "breakfast", meaning: "n. 早餐", example: "Eat breakfast." },
    { word: "breast", meaning: "n. 胸部", example: "Breast cancer." },
    { word: "breath", meaning: "n. 呼吸", example: "Take breath." },
    { word: "breathe", meaning: "v. 呼吸", example: "Breathe deeply." },
    { word: "breeding", meaning: "n. 繁殖", example: "Animal breeding." },
    { word: "breeze", meaning: "n. 微风", example: "Gentle breeze." },
    { word: "brick", meaning: "n. 砖", example: "Red brick." },
    { word: "bridge", meaning: "n. 桥", example: "Cross bridge." },
    { word: "brief", meaning: "adj. 简短的", example: "Brief introduction." },
    { word: "bright", meaning: "adj. 明亮的", example: "Bright light." },
    { word: "brilliant", meaning: "adj. 杰出的", example: "Brilliant idea." },
    { word: "bring", meaning: "v. 带来", example: "Bring me water." },
    { word: "British", meaning: "adj. 英国的", example: "British accent." },
    { word: "broad", meaning: "adj. 宽的", example: "Broad street." },
    { word: "broadcast", meaning: "v. 广播", example: "Broadcast news." },
    { word: "broken", meaning: "adj. 破碎的", example: "Broken glass." },
    { word: "brother", meaning: "n. 兄弟", example: "My brother." },
    { word: "brown", meaning: "adj. 棕色的", example: "Brown eyes." },
    { word: "brush", meaning: "n. 刷子", example: "Paint brush." },
    { word: "bucket", meaning: "n. 桶", example: "Water bucket." },
    { word: "budget", meaning: "n. 预算", example: "Plan budget." },
    { word: "build", meaning: "v. 建造", example: "Build house." },
    { word: "building", meaning: "n. 建筑", example: "Tall building." },
    { word: "bulb", meaning: "n. 灯泡", example: "Light bulb." },
    { word: "bulk", meaning: "n. 大量", example: "Buy in bulk." },
    { word: "bull", meaning: "n. 公牛", example: "Bull market." },
    { word: "bullet", meaning: "n. 子弹", example: "Silver bullet." },
    { word: "bundle", meaning: "n. 捆", example: "Bundle of sticks." },
    { word: "burden", meaning: "n. 负担", example: "Heavy burden." },
    { word: "burn", meaning: "v. 燃烧", example: "Burn firewood." },
    { word: "burst", meaning: "v. 爆发", example: "Burst into tears." },
    { word: "bury", meaning: "v. 埋葬", example: "Bury the dead." },
    { word: "bus", meaning: "n. 公交车", example: "Take bus." },
    { word: "bush", meaning: "n. 灌木", example: "Rose bush." },
    { word: "business", meaning: "n. 商业", example: "Do business." },
    { word: "busy", meaning: "adj. 忙碌的", example: "Busy schedule." },
    { word: "but", meaning: "conj. 但是", example: "But I can't." },
    { word: "butter", meaning: "n. 黄油", example: "Butter toast." },
    { word: "button", meaning: "n. 按钮", example: "Push button." },
    { word: "buy", meaning: "v. 买", example: "Buy a car." },
    { word: "by", meaning: "prep. 通过", example: "By bus." },
    { word: "cabbage", meaning: "n. 卷心菜", example: "Green cabbage." },
    { word: "cabin", meaning: "n. 小木屋", example: "Mountain cabin." },
    { word: "cabinet", meaning: "n. 柜子", example: "Kitchen cabinet." },
    { word: "cable", meaning: "n. 电缆", example: "Cable TV." },
    { word: "cafe", meaning: "n. 咖啡馆", example: "Coffee cafe." },
    { word: "cafeteria", meaning: "n. 自助餐厅", example: "School cafeteria." },
    { word: "cake", meaning: "n. 蛋糕", example: "Birthday cake." },
    { word: "calculate", meaning: "v. 计算", example: "Calculate the cost." },
    { word: "calculator", meaning: "n. 计算器", example: "Use calculator." },
    { word: "calendar", meaning: "n. 日历", example: "Check calendar." },
    { word: "call", meaning: "v. 呼叫", example: "Call me." },
    { word: "calm", meaning: "adj. 平静的", example: "Stay calm." },
    { word: "camera", meaning: "n. 相机", example: "Digital camera." },
    { word: "camp", meaning: "n. 营地", example: "Summer camp." },
    { word: "campaign", meaning: "n. 活动", example: "Marketing campaign." },
    { word: "campus", meaning: "n. 校园", example: "College campus." },
    { word: "can", meaning: "v. 能", example: "I can do it." },
    { word: "canal", meaning: "n. 运河", example: "Panama Canal." },
    { word: "cancel", meaning: "v. 取消", example: "Cancel the plan." },
    { word: "cancer", meaning: "n. 癌症", example: "Fight cancer." },
    { word: "candidate", meaning: "n. 候选人", example: "Job candidate." },
    { word: "candle", meaning: "n. 蜡烛", example: "Light candle." },
    { word: "cap", meaning: "n. 帽子", example: "Baseball cap." },
    { word: "capable", meaning: "adj. 有能力的", example: "Capable worker." },
    { word: "capacity", meaning: "n. 容量", example: "Full capacity." },
    { word: "capital", meaning: "n. 首都", example: "National capital." },
    { word: "captain", meaning: "n. 船长", example: "Ship captain." },
    { word: "capture", meaning: "v. 捕获", example: "Capture the moment." },
    { word: "car", meaning: "n. 汽车", example: "Drive car." },
    { word: "carbon", meaning: "n. 碳", example: "Carbon dioxide." },
    { word: "card", meaning: "n. 卡片", example: "Credit card." },
    { word: "care", meaning: "v. 关心", example: "Care for you." },
    { word: "career", meaning: "n. 职业", example: "Career path." },
    { word: "careful", meaning: "adj. 小心的", example: "Be careful." },
    { word: "carefully", meaning: "adv. 小心地", example: "Drive carefully." },
    { word: "careless", meaning: "adj. 粗心的", example: "Careless mistake." },
    { word: "cargo", meaning: "n. 货物", example: "Ship cargo." },
    { word: "carpet", meaning: "n. 地毯", example: "Wool carpet." },
    { word: "carriage", meaning: "n. 马车", example: "Horse carriage." },
    { word: "carrier", meaning: "n. 载体", example: "Airline carrier." },
    { word: "carry", meaning: "v. 携带", example: "Carry bags." },
    { word: "cart", meaning: "n. 手推车", example: "Shopping cart." },
    { word: "cartoon", meaning: "n. 卡通", example: "Watch cartoon." },
    { word: "case", meaning: "n. 案例", example: "Legal case." },
    { word: "cash", meaning: "n. 现金", example: "Pay cash." },
    { word: "cassette", meaning: "n. 磁带", example: "Cassette tape." },
    { word: "cast", meaning: "v. 投掷", example: "Cast a vote." },
    { word: "castle", meaning: "n. 城堡", example: "Ancient castle." },
    { word: "casual", meaning: "adj. 随意的", example: "Casual wear." },
    { word: "cat", meaning: "n. 猫", example: "Cute cat." },
    { word: "catalog", meaning: "n. 目录", example: "Product catalog." },
    { word: "catch", meaning: "v. 抓住", example: "Catch the ball." },
    { word: "category", meaning: "n. 类别", example: "Product category." },
    { word: "cattle", meaning: "n. 牛", example: "Raise cattle." },
    { word: "cause", meaning: "n. 原因", example: "Main cause." },
    { word: "cave", meaning: "n. 洞穴", example: "Dark cave." },
    { word: "cease", meaning: "v. 停止", example: "Cease fire." },
    { word: "celebrate", meaning: "v. 庆祝", example: "Celebrate birthday." },
    { word: "celebration", meaning: "n. 庆祝", example: "New Year celebration." },
    { word: "celebrity", meaning: "n. 名人", example: "Famous celebrity." },
    { word: "cell", meaning: "n. 细胞", example: "Blood cell." },
    { word: "cellar", meaning: "n. 地下室", example: "Wine cellar." },
    { word: "cement", meaning: "n. 水泥", example: "Mix cement." },
    { word: "cent", meaning: "n. 分", example: "One cent." },
    { word: "center", meaning: "n. 中心", example: "City center." },
    { word: "central", meaning: "adj. 中央的", example: "Central station." },
    { word: "century", meaning: "n. 世纪", example: "21st century." },
    { word: "ceremony", meaning: "n. 仪式", example: "Graduation ceremony." },
    { word: "certain", meaning: "adj. 确定的", example: "Certain result." },
    { word: "certainly", meaning: "adv. 当然", example: "Certainly yes." },
    { word: "certificate", meaning: "n. 证书", example: "Graduation certificate." },
    { word: "chain", meaning: "n. 链条", example: "Gold chain." },
    { word: "chair", meaning: "n. 椅子", example: "Wooden chair." },
    { word: "challenge", meaning: "n. 挑战", example: "Accept challenge." },
    { word: "chamber", meaning: "n. 房间", example: "Music chamber." },
    { word: "champion", meaning: "n. 冠军", example: "World champion." },
    { word: "chance", meaning: "n. 机会", example: "Good chance." },
    { word: "change", meaning: "v./n. 改变", example: "Change mind." },
    { word: "channel", meaning: "n. 频道", example: "TV channel." },
    { word: "chapter", meaning: "n. 章节", example: "Read chapter." },
    { word: "character", meaning: "n. 角色", example: "Main character." },
    { word: "characteristic", meaning: "n. 特征", example: "Key characteristic." },
    { word: "characterize", meaning: "v. 描述特征", example: "Characterize the trend." },
    { word: "charge", meaning: "v. 充电", example: "Charge phone." },
    { word: "charity", meaning: "n. 慈善", example: "Charity event." },
    { word: "chart", meaning: "n. 图表", example: "Bar chart." },
    { word: "chase", meaning: "v. 追逐", example: "Chase the thief." },
    { word: "cheap", meaning: "adj. 便宜的", example: "Cheap price." },
    { word: "cheat", meaning: "v. 欺骗", example: "Don't cheat." },
    { word: "check", meaning: "v. 检查", example: "Check email." },
    { word: "cheer", meaning: "v. 欢呼", example: "Cheer up." },
    { word: "cheese", meaning: "n. 奶酪", example: "Cheese pizza." },
    { word: "chef", meaning: "n. 厨师", example: "Head chef." },
    { word: "chemical", meaning: "adj. 化学的", example: "Chemical reaction." },
    { word: "chemist", meaning: "n. 化学家", example: "Research chemist." },
    { word: "chemistry", meaning: "n. 化学", example: "Study chemistry." },
    { word: "cheque", meaning: "n. 支票", example: "Write cheque." },
    { word: "chess", meaning: "n. 国际象棋", example: "Play chess." },
    { word: "chest", meaning: "n. 胸部", example: "Chest pain." },
    { word: "chew", meaning: "v. 咀嚼", example: "Chew food." },
    { word: "chicken", meaning: "n. 鸡肉", example: "Fried chicken." },
    { word: "chief", meaning: "n. 首领", example: "Tribal chief." },
    { word: "child", meaning: "n. 孩子", example: "Little child." },
    { word: "childhood", meaning: "n. 童年", example: "Happy childhood." },
    { word: "chill", meaning: "v. 变冷", example: "Chill the drink." },
    { word: "chimney", meaning: "n. 烟囱", example: "Smoke from chimney." },
    { word: "chin", meaning: "n. 下巴", example: "Pointed chin." },
    { word: "china", meaning: "n. 瓷器", example: "Fine china." },
    { word: "Chinese", meaning: "adj. 中国的", example: "Chinese food." },
    { word: "chip", meaning: "n. 芯片", example: "Computer chip." },
    { word: "chocolate", meaning: "n. 巧克力", example: "Dark chocolate." },
    { word: "choice", meaning: "n. 选择", example: "Make choice." },
    { word: "choke", meaning: "v. 窒息", example: "Don't choke." },
    { word: "choose", meaning: "v. 选择", example: "Choose carefully." },
    { word: "chord", meaning: "n. 和弦", example: "Play chord." },
    { word: "chore", meaning: "n. 家务", example: "Daily chore." }
];

// 六级单词数据
const cet6Words = [
    { word: "abandon", meaning: "v. 放弃，遗弃", example: "He had to abandon his car in the snow." },
    { word: "ability", meaning: "n. 能力，才能", example: "She has the ability to speak three languages." },
    { word: "abnormal", meaning: "adj. 反常的，异常的", example: "The test results were abnormal." },
    { word: "abolish", meaning: "v. 废除，取消", example: "The government decided to abolish the tax." },
    { word: "abortion", meaning: "n. 流产，堕胎", example: "Abortion is a controversial issue." },
    { word: "abound", meaning: "v. 大量存在，充满", example: "The forest abounds with wildlife." },
    { word: "abroad", meaning: "adv. 在国外，海外", example: "She studied abroad for a year." },
    { word: "abrupt", meaning: "adj. 突然的，意外的", example: "The meeting came to an abrupt end." },
    { word: "absence", meaning: "n. 缺席，不在场", example: "His absence was noticed by everyone." },
    { word: "absolute", meaning: "adj. 绝对的，完全的", example: "He has absolute control over the company." },
    { word: "absorb", meaning: "v. 吸收，吸引", example: "The sponge absorbs water quickly." },
    { word: "abstract", meaning: "adj. 抽象的，理论的", example: "Abstract art is not everyone's cup of tea." },
    { word: "abundant", meaning: "adj. 丰富的，充足的", example: "The region has abundant natural resources." },
    { word: "abuse", meaning: "v. 滥用，虐待", example: "He was accused of abusing his power." },
    { word: "academic", meaning: "adj. 学术的，教学的", example: "She has an academic background in history." },
    { word: "accelerate", meaning: "v. 加速，促进", example: "The car accelerated quickly." },
    { word: "access", meaning: "n. 通道，接近", example: "The building has wheelchair access." },
    { word: "accommodate", meaning: "v. 容纳，适应", example: "The hotel can accommodate 200 guests." },
    { word: "accompany", meaning: "v. 陪伴，陪同", example: "She accompanied her mother to the doctor." },
    { word: "accomplish", meaning: "v. 完成，实现", example: "He accomplished his goal of running a marathon." },
    { word: "accordance", meaning: "n. 一致，和谐", example: "In accordance with the rules, he was disqualified." },
    { word: "account", meaning: "n. 账户，描述", example: "I need to check my bank account." },
    { word: "accumulate", meaning: "v. 积累，积聚", example: "Dust accumulates quickly in this room." },
    { word: "accuracy", meaning: "n. 准确性，精确性", example: "The accuracy of the report is questionable." },
    { word: "accuse", meaning: "v. 指责，控告", example: "He was accused of theft." },
    { word: "achieve", meaning: "v. 达到，实现", example: "She achieved her dream of becoming a doctor." },
    { word: "acknowledge", meaning: "v. 承认，致谢", example: "He acknowledged his mistake." },
    { word: "acquire", meaning: "v. 获得，习得", example: "She acquired a new skill." },
    { word: "across", meaning: "prep. 穿过，横过", example: "The bridge goes across the river." },
    { word: "act", meaning: "v. 行动，表演", example: "He acted in a movie." },
    { word: "action", meaning: "n. 行动，活动", example: "The government took action to solve the problem." },
    { word: "active", meaning: "adj. 活跃的，积极的", example: "She is an active member of the club." },
    { word: "activity", meaning: "n. 活动，行动", example: "The school offers many extracurricular activities." },
    { word: "actual", meaning: "adj. 实际的，真实的", example: "The actual cost was higher than expected." },
    { word: "acute", meaning: "adj. 尖锐的，严重的", example: "He has an acute pain in his back." },
    { word: "adapt", meaning: "v. 适应，改编", example: "She adapted to her new job quickly." },
    { word: "add", meaning: "v. 添加，增加", example: "Please add some sugar to the coffee." },
    { word: "addition", meaning: "n. 加法，增加", example: "The addition of a new wing to the building was necessary." },
    { word: "additional", meaning: "adj. 额外的，附加的", example: "We need additional information." },
    { word: "adequate", meaning: "adj. 足够的，适当的", example: "The food supply is adequate." },
    { word: "adjust", meaning: "v. 调整，适应", example: "He adjusted the temperature." },
    { word: "administrate", meaning: "v. 管理，行政", example: "She administrates the company." },
    { word: "admit", meaning: "v. 承认，允许进入", example: "He admitted his mistake." },
    { word: "adopt", meaning: "v. 采用，收养", example: "The company adopted a new policy." },
    { word: "advance", meaning: "v. 前进，进步", example: "The army advanced towards the city." },
    { word: "advantage", meaning: "n. 优势，有利条件", example: "She has an advantage over her competitors." },
    { word: "adventure", meaning: "n. 冒险，奇遇", example: "They went on an adventure in the jungle." },
    { word: "advertise", meaning: "v. 做广告，宣传", example: "The company advertised its new product." },
    { word: "advice", meaning: "n. 建议，忠告", example: "He gave me some good advice." },
    { word: "advise", meaning: "v. 建议，忠告", example: "I advise you to study hard." },
    { word: "advocate", meaning: "v. 提倡，拥护", example: "She advocates for human rights." },
    { word: "aesthetic", meaning: "adj. 美学的，审美的", example: "The building has aesthetic value." },
    { word: "affect", meaning: "v. 影响，感动", example: "The weather affected our plans." },
    { word: "affection", meaning: "n. 喜爱，感情", example: "She has great affection for her children." },
    { word: "affirm", meaning: "v. 断言，确认", example: "He affirmed his commitment to the project." },
    { word: "afford", meaning: "v. 买得起，负担得起", example: "I can't afford a new car." },
    { word: "afraid", meaning: "adj. 害怕的，担心的", example: "She is afraid of spiders." },
    { word: "after", meaning: "prep. 在...之后", example: "He came after me." },
    { word: "afternoon", meaning: "n. 下午", example: "We will meet in the afternoon." },
    { word: "afterward", meaning: "adv. 之后，后来", example: "We went home afterward." },
    { word: "again", meaning: "adv. 再一次，又", example: "Please say it again." },
    { word: "against", meaning: "prep. 反对，逆", example: "He is against the proposal." },
    { word: "age", meaning: "n. 年龄，时代", example: "What is your age?" },
    { word: "agency", meaning: "n. 代理，机构", example: "She works for a travel agency." },
    { word: "agent", meaning: "n. 代理人，经纪人", example: "He is a real estate agent." },
    { word: "aggravate", meaning: "v. 加重，恶化", example: "The problem was aggravated by bad weather." },
    { word: "aggressive", meaning: "adj. 侵略性的，有进取心的", example: "He has an aggressive personality." },
    { word: "agitate", meaning: "v. 煽动，搅动", example: "The crowd was agitated by the speech." },
    { word: "ago", meaning: "adv. 以前", example: "I met him three years ago." },
    { word: "agree", meaning: "v. 同意，赞成", example: "I agree with you." },
    { word: "agreement", meaning: "n. 协议，同意", example: "We reached an agreement." },
    { word: "agriculture", meaning: "n. 农业", example: "Agriculture is important for the economy." },
    { word: "ahead", meaning: "adv. 向前，提前", example: "We are ahead of schedule." },
    { word: "aid", meaning: "n. 帮助，援助", example: "The country received foreign aid." },
    { word: "aim", meaning: "n. 目标，目的", example: "What is your aim in life?" },
    { word: "air", meaning: "n. 空气，大气", example: "The air is fresh in the morning." },
    { word: "aircraft", meaning: "n. 飞机，航空器", example: "The aircraft took off on time." },
    { word: "airline", meaning: "n. 航空公司", example: "I work for a major airline." },
    { word: "airport", meaning: "n. 机场", example: "We arrived at the airport early." },
    { word: "aisle", meaning: "n. 过道，通道", example: "Please walk down the aisle." },
    { word: "alarm", meaning: "n. 警报，闹钟", example: "The fire alarm went off." },
    { word: "album", meaning: "n. 相册，唱片", example: "She has a photo album." },
    { word: "alcohol", meaning: "n. 酒精，酒", example: "He doesn't drink alcohol." },
    { word: "alert", meaning: "adj. 警惕的，警觉的", example: "The guard was alert." },
    { word: "alike", meaning: "adj. 相似的，相同的", example: "The two brothers look alike." },
    { word: "alive", meaning: "adj. 活着的，有活力的", example: "He is still alive." },
    { word: "all", meaning: "adj. 全部的，所有的", example: "All students must attend the meeting." },
    { word: "alliance", meaning: "n. 联盟，联合", example: "The two countries formed an alliance." },
    { word: "allocate", meaning: "v. 分配，分派", example: "The budget was allocated to different departments." },
    { word: "allow", meaning: "v. 允许，准许", example: "Smoking is not allowed here." },
    { word: "alloy", meaning: "n. 合金", example: "Brass is an alloy of copper and zinc." },
    { word: "alphabetical", meaning: "adj. 字母的，按字母顺序的", example: "Arrange the names in alphabetical order." },
    { word: "alter", meaning: "v. 改变，变更", example: "The plan was altered at the last minute." },
    { word: "alternate", meaning: "v. 交替，轮流", example: "Day and night alternate." },
    { word: "alternative", meaning: "n. 替代物，选择", example: "We have no other alternative." },
    { word: "altitude", meaning: "n. 高度，海拔", example: "The plane flew at a high altitude." },
    { word: "aluminum", meaning: "n. 铝", example: "The can is made of aluminum." },
    { word: "amateur", meaning: "n. 业余爱好者", example: "He is an amateur photographer." },
    { word: "ambassador", meaning: "n. 大使", example: "The ambassador presented his credentials." },
    { word: "ambiguous", meaning: "adj. 模糊的，模棱两可的", example: "The statement was ambiguous." },
    { word: "ambition", meaning: "n. 野心，雄心", example: "He has great ambition." },
    { word: "ambitious", meaning: "adj. 有野心的，有抱负的", example: "She is an ambitious woman." },
    { word: "amend", meaning: "v. 修改，修正", example: "Amend the document." },
    { word: "amiable", meaning: "adj. 和蔼可亲的", example: "She has an amiable personality." },
    { word: "ammunition", meaning: "n. 弹药", example: "The soldiers ran out of ammunition." },
    { word: "ample", meaning: "adj. 充足的，丰富的", example: "There is ample evidence." },
    { word: "amplify", meaning: "v. 放大，增强", example: "Amplify the sound." },
    { word: "analogous", meaning: "adj. 类似的", example: "This is analogous to the previous case." },
    { word: "analogy", meaning: "n. 类比，比喻", example: "Draw an analogy." },
    { word: "analyze", meaning: "v. 分析", example: "Analyze the data." },
    { word: "analytical", meaning: "adj. 分析的", example: "He has analytical skills." },
    { word: "ancestor", meaning: "n. 祖先", example: "Our ancestors lived here." },
    { word: "anchor", meaning: "n. 锚", example: "Drop the anchor." },
    { word: "ancient", meaning: "adj. 古代的", example: "Ancient civilization." },
    { word: "angel", meaning: "n. 天使", example: "She is like an angel." },
    { word: "angle", meaning: "n. 角度", example: "Look at it from another angle." },
    { word: "ankle", meaning: "n. 脚踝", example: "He twisted his ankle." },
    { word: "anniversary", meaning: "n. 周年纪念日", example: "Happy anniversary!" },
    { word: "announce", meaning: "v. 宣布", example: "They announced the winner." },
    { word: "annoy", meaning: "v. 使烦恼", example: "Don't annoy me." },
    { word: "annual", meaning: "adj. 每年的", example: "Annual report." },
    { word: "anonymous", meaning: "adj. 匿名的", example: "An anonymous letter." },
    { word: "another", meaning: "adj. 另一个", example: "Give me another chance." },
    { word: "answer", meaning: "n. 答案", example: "What's the answer?" },
    { word: "anticipate", meaning: "v. 预期", example: "I anticipate success." },
    { word: "antique", meaning: "n. 古董", example: "This is a valuable antique." },
    { word: "anxiety", meaning: "n. 焦虑", example: "She felt anxiety before the exam." },
    { word: "anxious", meaning: "adj. 焦虑的", example: "I'm anxious about the result." },
    { word: "apartment", meaning: "n. 公寓", example: "I live in an apartment." },
    { word: "apologize", meaning: "v. 道歉", example: "You should apologize." },
    { word: "apology", meaning: "n. 道歉", example: "He made an apology." },
    { word: "apparent", meaning: "adj. 明显的", example: "It's apparent that..." },
    { word: "appeal", meaning: "v. 呼吁，吸引", example: "This appeals to me." },
    { word: "appearance", meaning: "n. 外貌，出现", example: "Don't judge by appearance." },
    { word: "appetite", meaning: "n. 食欲", example: "I have a good appetite." },
    { word: "applaud", meaning: "v. 鼓掌", example: "Everyone applauded." },
    { word: "applicant", meaning: "n. 申请人", example: "Job applicant." },
    { word: "application", meaning: "n. 申请，应用", example: "Application form." },
    { word: "appoint", meaning: "v. 任命", example: "He was appointed manager." },
    { word: "appointment", meaning: "n. 约会，任命", example: "Make an appointment." },
    { word: "appreciate", meaning: "v. 欣赏，感激", example: "I appreciate your help." },
    { word: "apprehensive", meaning: "adj. 忧虑的", example: "She felt apprehensive." },
    { word: "approach", meaning: "n./v. 方法，接近", example: "New approach." },
    { word: "appropriate", meaning: "adj. 适当的", example: "Appropriate behavior." },
    { word: "approval", meaning: "n. 批准", example: "Give your approval." },
    { word: "approve", meaning: "v. 批准", example: "The plan was approved." },
    { word: "approximate", meaning: "adj. 近似的", example: "Approximate value." },
    { word: "approximately", meaning: "adv. 大约", example: "Approximately 100 people." },
    { word: "apt", meaning: "adj. 恰当的", example: "An apt remark." },
    { word: "arbitrary", meaning: "adj. 任意的", example: "Arbitrary decision." },
    { word: "arch", meaning: "n. 拱门", example: "Stone arch." },
    { word: "architect", meaning: "n. 建筑师", example: "Famous architect." },
    { word: "architecture", meaning: "n. 建筑", example: "Modern architecture." },
    { word: "arise", meaning: "v. 出现", example: "Problems arose." },
    { word: "arithmetic", meaning: "n. 算术", example: "Arithmetic operations." },
    { word: "armament", meaning: "n. 军备", example: "Disarmament talks." },
    { word: "array", meaning: "n. 数组，排列", example: "An array of options." },
    { word: "arrest", meaning: "v. 逮捕", example: "He was arrested." },
    { word: "arrival", meaning: "n. 到达", example: "His arrival was expected." },
    { word: "arrow", meaning: "n. 箭", example: "Arrow sign." },
    { word: "artificial", meaning: "adj. 人工的", example: "Artificial intelligence." },
    { word: "artistic", meaning: "adj. 艺术的", example: "Artistic talent." },
    { word: "ascribe", meaning: "v. 归因于", example: "Ascribe to luck." },
    { word: "aspect", meaning: "n. 方面", example: "Consider all aspects." },
    { word: "aspiration", meaning: "n. 渴望", example: "His aspiration is to be a doctor." },
    { word: "assemble", meaning: "v. 组装", example: "Assemble the furniture." },
    { word: "assembly", meaning: "n. 集会", example: "School assembly." },
    { word: "assess", meaning: "v. 评估", example: "Assess the damage." },
    { word: "assessment", meaning: "n. 评估", example: "Performance assessment." },
    { word: "assign", meaning: "v. 分配", example: "Assign tasks." },
    { word: "assignment", meaning: "n. 作业，分配", example: "Homework assignment." },
    { word: "assist", meaning: "v. 帮助", example: "Assist me." },
    { word: "assistance", meaning: "n. 帮助", example: "Technical assistance." },
    { word: "assistant", meaning: "n. 助手", example: "Teaching assistant." },
    { word: "associate", meaning: "v. 联系", example: "Associate with friends." },
    { word: "association", meaning: "n. 协会，联系", example: "Professional association." },
    { word: "assume", meaning: "v. 假设", example: "Assume it's true." },
    { word: "assumption", meaning: "n. 假设", example: "Wrong assumption." },
    { word: "assure", meaning: "v. 保证", example: "I assure you." },
    { word: "astonish", meaning: "v. 使惊讶", example: "It astonished me." },
    { word: "astronaut", meaning: "n. 宇航员", example: "Space astronaut." },
    { word: "astronomy", meaning: "n. 天文学", example: "Study astronomy." },
    { word: "athlete", meaning: "n. 运动员", example: "Professional athlete." },
    { word: "athletic", meaning: "adj. 运动的", example: "Athletic ability." },
    { word: "atmosphere", meaning: "n. 大气，气氛", example: "Romantic atmosphere." },
    { word: "atomic", meaning: "adj. 原子的", example: "Atomic energy." },
    { word: "attach", meaning: "v. 附加", example: "Attach a file." },
    { word: "attack", meaning: "v./n. 攻击", example: "Attack the enemy." },
    { word: "attain", meaning: "v. 获得", example: "Attain success." },
    { word: "attempt", meaning: "v./n. 尝试", example: "Make an attempt." },
    { word: "attend", meaning: "v. 参加", example: "Attend the meeting." },
    { word: "attention", meaning: "n. 注意", example: "Pay attention." },
    { word: "attentive", meaning: "adj. 专心的", example: "Attentive student." },
    { word: "attitude", meaning: "n. 态度", example: "Positive attitude." },
    { word: "attract", meaning: "v. 吸引", example: "Attract customers." },
    { word: "attraction", meaning: "n. 吸引力", example: "Tourist attraction." },
    { word: "attractive", meaning: "adj. 有吸引力的", example: "Attractive offer." },
    { word: "attribute", meaning: "n. 属性", example: "Key attribute." },
    { word: "audience", meaning: "n. 观众", example: "Large audience." },
    { word: "audio", meaning: "adj. 音频的", example: "Audio equipment." },
    { word: "audit", meaning: "v. 审计", example: "Audit the accounts." },
    { word: "auditorium", meaning: "n. 礼堂", example: "School auditorium." },
    { word: "augment", meaning: "v. 增加", example: "Augment the staff." },
    { word: "authentic", meaning: "adj. 真实的", example: "Authentic document." },
    { word: "author", meaning: "n. 作者", example: "Famous author." },
    { word: "authority", meaning: "n. 权威", example: "Academic authority." },
    { word: "auto", meaning: "n. 汽车", example: "Auto industry." },
    { word: "automatic", meaning: "adj. 自动的", example: "Automatic door." },
    { word: "automatically", meaning: "adv. 自动地", example: "It happens automatically." },
    { word: "automobile", meaning: "n. 汽车", example: "Luxury automobile." },
    { word: "autonomy", meaning: "n. 自治", example: "Regional autonomy." },
    { word: "available", meaning: "adj. 可用的", example: "Available resources." },
    { word: "average", meaning: "n./adj. 平均", example: "Average score." },
    { word: "avoid", meaning: "v. 避免", example: "Avoid mistakes." },
    { word: "await", meaning: "v. 等待", example: "Await your reply." },
    { word: "award", meaning: "n./v. 奖励", example: "Win an award." },
    { word: "aware", meaning: "adj. 意识到的", example: "Be aware of." },
    { word: "awareness", meaning: "n. 意识", example: "Environmental awareness." },
    { word: "awkward", meaning: "adj. 尴尬的", example: "Awkward situation." },
    { word: "axis", meaning: "n. 轴", example: "Earth's axis." },
    { word: "background", meaning: "n. 背景", example: "Educational background." },
    { word: "bachelor", meaning: "n. 学士", example: "Bachelor's degree." },
    { word: "bacteria", meaning: "n. 细菌", example: "Harmful bacteria." },
    { word: "badly", meaning: "adv. 严重地", example: "Badly damaged." },
    { word: "balance", meaning: "n./v. 平衡", example: "Keep balance." },
    { word: "bald", meaning: "adj. 秃的", example: "Bald head." },
    { word: "band", meaning: "n. 乐队", example: "Rock band." },
    { word: "bankruptcy", meaning: "n. 破产", example: "File for bankruptcy." },
    { word: "bar", meaning: "n. 酒吧", example: "Bar counter." },
    { word: "barrier", meaning: "n. 障碍", example: "Language barrier." },
    { word: "basically", meaning: "adv. 基本上", example: "Basically, it's done." },
    { word: "basis", meaning: "n. 基础", example: "On this basis." },
    { word: "batch", meaning: "n. 一批", example: "A batch of goods." },
    { word: "battery", meaning: "n. 电池", example: "Lithium battery." },
    { word: "battle", meaning: "n./v. 战斗", example: "Battle field." },
    { word: "behalf", meaning: "n. 代表", example: "On behalf of." },
    { word: "behave", meaning: "v. 表现", example: "Behave well." },
    { word: "behavior", meaning: "n. 行为", example: "Social behavior." },
    { word: "belief", meaning: "n. 信仰", example: "Strong belief." },
    { word: "belong", meaning: "v. 属于", example: "It belongs to me." },
    { word: "benefit", meaning: "n./v. 利益", example: "Benefit from it." },
    { word: "beneficial", meaning: "adj. 有益的", example: "Beneficial effect." },
    { word: "beside", meaning: "prep. 在...旁边", example: "Sit beside me." },
    { word: "besides", meaning: "adv. 此外", example: "Besides, it's cheap." },
    { word: "bet", meaning: "v. 打赌", example: "I bet you can." },
    { word: "beyond", meaning: "prep. 超出", example: "Beyond words." },
    { word: "bicycle", meaning: "n. 自行车", example: "Ride bicycle." },
    { word: "bid", meaning: "v. 投标", example: "Bid for the project." },
    { word: "billion", meaning: "num. 十亿", example: "A billion dollars." },
    { word: "biography", meaning: "n. 传记", example: "Read biography." },
    { word: "biology", meaning: "n. 生物学", example: "Study biology." },
    { word: "bird", meaning: "n. 鸟", example: "Migratory bird." },
    { word: "birth", meaning: "n. 出生", example: "Date of birth." },
    { word: "biscuit", meaning: "n. 饼干", example: "Cream biscuit." },
    { word: "bit", meaning: "n. 一点", example: "A bit of." },
    { word: "bite", meaning: "v. 咬", example: "Snake bite." },
    { word: "bitter", meaning: "adj. 苦的", example: "Bitter taste." },
    { word: "blame", meaning: "v. 责备", example: "Don't blame me." },
    { word: "blank", meaning: "adj. 空白的", example: "Blank sheet." },
    { word: "blast", meaning: "n./v. 爆炸", example: "Blast off." },
    { word: "bleed", meaning: "v. 流血", example: "Nose bleed." },
    { word: "blend", meaning: "v. 混合", example: "Blend colors." },
    { word: "blind", meaning: "adj. 盲的", example: "Blind person." },
    { word: "block", meaning: "n. 块", example: "Building block." },
    { word: "blood", meaning: "n. 血", example: "Blood pressure." },
    { word: "bloom", meaning: "v. 开花", example: "Flowers bloom." },
    { word: "blossom", meaning: "n. 花", example: "Peach blossom." },
    { word: "blow", meaning: "v. 吹", example: "Blow wind." },
    { word: "board", meaning: "n. 木板", example: "Surf board." },
    { word: "boast", meaning: "v. 吹嘘", example: "Don't boast." },
    { word: "bold", meaning: "adj. 大胆的", example: "Bold move." },
    { word: "bond", meaning: "n. 债券", example: "Government bond." },
    { word: "bonus", meaning: "n. 奖金", example: "Performance bonus." },
    { word: "book", meaning: "n. 书", example: "Reference book." },
    { word: "boom", meaning: "n. 繁荣", example: "Economic boom." },
    { word: "boost", meaning: "v. 提升", example: "Boost sales." },
    { word: "border", meaning: "n. 边界", example: "National border." },
    { word: "bore", meaning: "v. 使厌烦", example: "Don't bore me." },
    { word: "boring", meaning: "adj. 无聊的", example: "Boring lecture." },
    { word: "born", meaning: "adj. 出生的", example: "Born leader." },
    { word: "borrow", meaning: "v. 借", example: "Borrow money." },
    { word: "bounce", meaning: "v. 弹跳", example: "Ball bounce." },
    { word: "bound", meaning: "adj. 受约束的", example: "Bound by rules." },
    { word: "boundary", meaning: "n. 边界", example: "Boundary line." },
    { word: "bow", meaning: "v. 鞠躬", example: "Bow politely." },
    { word: "bowl", meaning: "n. 碗", example: "Rice bowl." },
    { word: "box", meaning: "n. 盒子", example: "Gift box." },
    { word: "boy", meaning: "n. 男孩", example: "Little boy." },
    { word: "brain", meaning: "n. 大脑", example: "Brain power." },
    { word: "branch", meaning: "n. 分支", example: "Company branch." },
    { word: "brand", meaning: "n. 品牌", example: "Famous brand." },
    { word: "brass", meaning: "n. 黄铜", example: "Brass instrument." },
    { word: "brave", meaning: "adj. 勇敢的", example: "Brave soldier." },
    { word: "breast", meaning: "n. 胸部", example: "Breast cancer." },
    { word: "breath", meaning: "n. 呼吸", example: "Deep breath." },
    { word: "breathe", meaning: "v. 呼吸", example: "Breathe deeply." },
    { word: "breeze", meaning: "n. 微风", example: "Gentle breeze." },
    { word: "brick", meaning: "n. 砖", example: "Red brick." },
    { word: "brief", meaning: "adj. 简短的", example: "Brief summary." },
    { word: "bright", meaning: "adj. 明亮的", example: "Bright future." },
    { word: "brilliant", meaning: "adj. 杰出的", example: "Brilliant idea." },
    { word: "bring", meaning: "v. 带来", example: "Bring gifts." },
    { word: "broad", meaning: "adj. 宽的", example: "Broad mind." },
    { word: "broadcast", meaning: "v. 广播", example: "Broadcast news." },
    { word: "broken", meaning: "adj. 破碎的", example: "Broken heart." },
    { word: "brother", meaning: "n. 兄弟", example: "Elder brother." },
    { word: "brown", meaning: "adj. 棕色的", example: "Brown hair." },
    { word: "brush", meaning: "n. 刷子", example: "Paint brush." },
    { word: "bucket", meaning: "n. 桶", example: "Water bucket." },
    { word: "budget", meaning: "n. 预算", example: "Annual budget." },
    { word: "build", meaning: "v. 建造", example: "Build house." },
    { word: "building", meaning: "n. 建筑", example: "High building." },
    { word: "bulb", meaning: "n. 灯泡", example: "Light bulb." },
    { word: "bulk", meaning: "n. 大量", example: "Buy in bulk." },
    { word: "bullet", meaning: "n. 子弹", example: "Silver bullet." },
    { word: "bundle", meaning: "n. 捆", example: "Bundle of sticks." },
    { word: "burden", meaning: "n. 负担", example: "Heavy burden." },
    { word: "burn", meaning: "v. 燃烧", example: "Burn fuel." },
    { word: "burst", meaning: "v. 爆发", example: "Burst into tears." },
    { word: "bury", meaning: "v. 埋葬", example: "Bury treasure." },
    { word: "bus", meaning: "n. 公交车", example: "City bus." },
    { word: "bush", meaning: "n. 灌木", example: "Rose bush." },
    { word: "business", meaning: "n. 商业", example: "Business meeting." },
    { word: "busy", meaning: "adj. 忙碌的", example: "Busy schedule." },
    { word: "butter", meaning: "n. 黄油", example: "Butter toast." },
    { word: "button", meaning: "n. 按钮", example: "Push button." },
    { word: "buy", meaning: "v. 买", example: "Buy shares." },
    { word: "bypass", meaning: "n. 旁路", example: "Road bypass." },
    { word: "cable", meaning: "n. 电缆", example: "Submarine cable." },
    { word: "calculation", meaning: "n. 计算", example: "Complex calculation." },
    { word: "calendar", meaning: "n. 日历", example: "Wall calendar." },
    { word: "calorie", meaning: "n. 卡路里", example: "Low calorie." },
    { word: "camp", meaning: "n. 营地", example: "Military camp." },
    { word: "campaign", meaning: "n. 活动", example: "Marketing campaign." },
    { word: "campus", meaning: "n. 校园", example: "University campus." },
    { word: "cancel", meaning: "v. 取消", example: "Cancel flight." },
    { word: "candidate", meaning: "n. 候选人", example: "Presidential candidate." },
    { word: "cap", meaning: "n. 帽子", example: "Baseball cap." },
    { word: "capable", meaning: "adj. 有能力的", example: "Capable leader." },
    { word: "capacity", meaning: "n. 容量", example: "Storage capacity." },
    { word: "capital", meaning: "n. 首都，资本", example: "National capital." },
    { word: "captain", meaning: "n. 船长", example: "Ship captain." },
    { word: "capture", meaning: "v. 捕获", example: "Capture attention." },
    { word: "carbon", meaning: "n. 碳", example: "Carbon footprint." },
    { word: "career", meaning: "n. 职业", example: "Career development." },
    { word: "careful", meaning: "adj. 小心的", example: "Be careful." },
    { word: "careless", meaning: "adj. 粗心的", example: "Careless mistake." },
    { word: "cargo", meaning: "n. 货物", example: "Ship cargo." },
    { word: "carrier", meaning: "n. 载体", example: "Carrier pigeon." },
    { word: "carve", meaning: "v. 雕刻", example: "Carve wood." },
    { word: "case", meaning: "n. 案例", example: "Legal case." },
    { word: "cash", meaning: "n. 现金", example: "Cash payment." },
    { word: "cast", meaning: "v. 投掷", example: "Cast vote." },
    { word: "castle", meaning: "n. 城堡", example: "Medieval castle." },
    { word: "casual", meaning: "adj. 随意的", example: "Casual wear." },
    { word: "catalog", meaning: "n. 目录", example: "Product catalog." },
    { word: "catch", meaning: "v. 抓住", example: "Catch thief." },
    { word: "category", meaning: "n. 类别", example: "Product category." },
    { word: "cause", meaning: "n. 原因", example: "Root cause." },
    { word: "cave", meaning: "n. 洞穴", example: "Deep cave." },
    { word: "cease", meaning: "v. 停止", example: "Cease fire." },
    { word: "celebrate", meaning: "v. 庆祝", example: "Celebrate victory." },
    { word: "celebration", meaning: "n. 庆祝", example: "Birthday celebration." },
    { word: "celebrity", meaning: "n. 名人", example: "Hollywood celebrity." },
    { word: "cell", meaning: "n. 细胞", example: "Blood cell." },
    { word: "cement", meaning: "n. 水泥", example: "Mix cement." },
    { word: "central", meaning: "adj. 中央的", example: "Central government." },
    { word: "ceremony", meaning: "n. 仪式", example: "Opening ceremony." },
    { word: "certain", meaning: "adj. 确定的", example: "Certain success." },
    { word: "certainly", meaning: "adv. 当然", example: "Certainly yes." },
    { word: "certificate", meaning: "n. 证书", example: "Graduation certificate." },
    { word: "chain", meaning: "n. 链条", example: "Supply chain." },
    { word: "chamber", meaning: "n. 房间", example: "Chamber music." },
    { word: "champion", meaning: "n. 冠军", example: "World champion." },
    { word: "chance", meaning: "n. 机会", example: "Golden chance." },
    { word: "change", meaning: "v./n. 改变", example: "Climate change." },
    { word: "channel", meaning: "n. 频道", example: "TV channel." },
    { word: "chapter", meaning: "n. 章节", example: "New chapter." },
    { word: "character", meaning: "n. 性格", example: "Strong character." },
    { word: "characteristic", meaning: "n. 特征", example: "Key characteristic." },
    { word: "characterize", meaning: "v. 描述特征", example: "Characterize behavior." },
    { word: "charge", meaning: "v. 充电", example: "Charge battery." },
    { word: "charity", meaning: "n. 慈善", example: "Charity organization." },
    { word: "chart", meaning: "n. 图表", example: "Pie chart." },
    { word: "chase", meaning: "v. 追逐", example: "Chase dreams." },
    { word: "cheap", meaning: "adj. 便宜的", example: "Cheap price." },
    { word: "cheat", meaning: "v. 欺骗", example: "Don't cheat." },
    { word: "check", meaning: "v. 检查", example: "Check list." },
    { word: "cheer", meaning: "v. 欢呼", example: "Cheer up." },
    { word: "chemical", meaning: "adj. 化学的", example: "Chemical reaction." },
    { word: "chemist", meaning: "n. 化学家", example: "Research chemist." },
    { word: "chemistry", meaning: "n. 化学", example: "Organic chemistry." },
    { word: "cheque", meaning: "n. 支票", example: "Bank cheque." },
    { word: "chess", meaning: "n. 国际象棋", example: "Play chess." },
    { word: "chest", meaning: "n. 胸部", example: "Chest pain." },
    { word: "chew", meaning: "v. 咀嚼", example: "Chew food." },
    { word: "chicken", meaning: "n. 鸡肉", example: "Roast chicken." },
    { word: "chief", meaning: "n. 首领", example: "Tribal chief." },
    { word: "child", meaning: "n. 孩子", example: "Only child." },
    { word: "childhood", meaning: "n. 童年", example: "Happy childhood." },
    { word: "chill", meaning: "v. 变冷", example: "Chill wine." },
    { word: "chin", meaning: "n. 下巴", example: "Double chin." },
    { word: "china", meaning: "n. 瓷器", example: "Fine china." },
    { word: "chip", meaning: "n. 芯片", example: "Computer chip." },
    { word: "choice", meaning: "n. 选择", example: "Tough choice." },
    { word: "choke", meaning: "v. 窒息", example: "Choke on food." },
    { word: "choose", meaning: "v. 选择", example: "Choose wisely." },
    { word: "chord", meaning: "n. 和弦", example: "Play chord." },
    { word: "chore", meaning: "n. 家务", example: "Household chores." },
    { word: "circuit", meaning: "n. 电路", example: "Electric circuit." },
    { word: "circulate", meaning: "v. 循环", example: "Circulate air." },
    { word: "circumstance", meaning: "n. 情况", example: "Under the circumstances." },
    { word: "cite", meaning: "v. 引用", example: "Cite sources." },
    { word: "citizen", meaning: "n. 公民", example: "Good citizen." },
    { word: "city", meaning: "n. 城市", example: "Big city." },
    { word: "civil", meaning: "adj. 公民的", example: "Civil rights." },
    { word: "civilization", meaning: "n. 文明", example: "Ancient civilization." },
    { word: "claim", meaning: "v. 声称", example: "Claim responsibility." },
    { word: "clap", meaning: "v. 拍手", example: "Clap hands." },
    { word: "clarify", meaning: "v. 澄清", example: "Clarify the issue." },
    { word: "class", meaning: "n. 班级", example: "Math class." },
    { word: "classic", meaning: "adj. 经典的", example: "Classic movie." },
    { word: "classify", meaning: "v. 分类", example: "Classify data." },
    { word: "clause", meaning: "n. 条款", example: "Contract clause." },
    { word: "clean", meaning: "adj. 干净的", example: "Clean room." },
    { word: "clear", meaning: "adj. 清楚的", example: "Clear explanation." },
    { word: "clerk", meaning: "n. 职员", example: "Bank clerk." },
    { word: "clever", meaning: "adj. 聪明的", example: "Clever idea." },
    { word: "client", meaning: "n. 客户", example: "VIP client." },
    { word: "climate", meaning: "n. 气候", example: "Tropical climate." },
    { word: "climax", meaning: "n. 高潮", example: "Story climax." },
    { word: "clinic", meaning: "n. 诊所", example: "Medical clinic." },
    { word: "clip", meaning: "n. 夹子", example: "Paper clip." },
    { word: "clock", meaning: "n. 时钟", example: "Wall clock." },
    { word: "close", meaning: "adj. 亲密的", example: "Close friend." },
    { word: "cloth", meaning: "n. 布", example: "Cotton cloth." },
    { word: "clothing", meaning: "n. 服装", example: "Winter clothing." },
    { word: "cloud", meaning: "n. 云", example: "White cloud." },
    { word: "club", meaning: "n. 俱乐部", example: "Sports club." },
    { word: "clue", meaning: "n. 线索", example: "Give a clue." },
    { word: "cluster", meaning: "n. 群", example: "Cluster of stars." },
    { word: "clutch", meaning: "v. 抓住", example: "Clutch at straws." },
    { word: "coach", meaning: "n. 教练", example: "Football coach." },
    { word: "coal", meaning: "n. 煤", example: "Coal mine." },
    { word: "coarse", meaning: "adj. 粗糙的", example: "Coarse fabric." },
    { word: "coast", meaning: "n. 海岸", example: "East coast." },
    { word: "coat", meaning: "n. 外套", example: "Winter coat." },
    { word: "code", meaning: "n. 代码", example: "Computer code." },
    { word: "coffee", meaning: "n. 咖啡", example: "Black coffee." },
    { word: "coil", meaning: "n. 线圈", example: "Electric coil." },
    { word: "coin", meaning: "n. 硬币", example: "Gold coin." },
    { word: "collapse", meaning: "v. 倒塌", example: "Building collapse." },
    { word: "colleague", meaning: "n. 同事", example: "Work colleague." },
    { word: "collect", meaning: "v. 收集", example: "Collect stamps." },
    { word: "collection", meaning: "n. 收集", example: "Art collection." },
    { word: "collective", meaning: "adj. 集体的", example: "Collective effort." },
    { word: "college", meaning: "n. 学院", example: "Community college." },
    { word: "collide", meaning: "v. 碰撞", example: "Cars collide." },
    { word: "collision", meaning: "n. 碰撞", example: "Head-on collision." },
    { word: "colony", meaning: "n. 殖民地", example: "British colony." },
    { word: "color", meaning: "n. 颜色", example: "Bright color." },
    { word: "column", meaning: "n. 柱子", example: "Stone column." },
    { word: "comb", meaning: "n. 梳子", example: "Hair comb." },
    { word: "combine", meaning: "v. 结合", example: "Combine efforts." },
    { word: "combination", meaning: "n. 组合", example: "Unique combination." },
    { word: "combine", meaning: "v. 联合", example: "Combine forces." },
    { word: "come", meaning: "v. 来", example: "Come here." },
    { word: "comedy", meaning: "n. 喜剧", example: "Funny comedy." },
    { word: "comfort", meaning: "n. 舒适", example: "Comfort zone." },
    { word: "comfortable", meaning: "adj. 舒适的", example: "Comfortable chair." },
    { word: "command", meaning: "n./v. 命令", example: "Give command." },
    { word: "commemorate", meaning: "v. 纪念", example: "Commemorate anniversary." },
    { word: "comment", meaning: "n. 评论", example: "Make comment." },
    { word: "commerce", meaning: "n. 商业", example: "International commerce." },
    { word: "commercial", meaning: "adj. 商业的", example: "Commercial building." },
    { word: "commission", meaning: "n. 佣金", example: "Sales commission." },
    { word: "commit", meaning: "v. 承诺", example: "Commit to plan." },
    { word: "commitment", meaning: "n. 承诺", example: "Strong commitment." },
    { word: "committee", meaning: "n. 委员会", example: "Planning committee." },
    { word: "common", meaning: "adj. 普通的", example: "Common sense." },
    { word: "communicate", meaning: "v. 交流", example: "Communicate effectively." },
    { word: "communication", meaning: "n. 交流", example: "Good communication." },
    { word: "community", meaning: "n. 社区", example: "Local community." },
    { word: "commute", meaning: "v. 通勤", example: "Commute to work." },
    { word: "compact", meaning: "adj. 紧凑的", example: "Compact design." },
    { word: "companion", meaning: "n. 同伴", example: "Travel companion." },
    { word: "company", meaning: "n. 公司", example: "Tech company." },
    { word: "compare", meaning: "v. 比较", example: "Compare prices." },
    { word: "comparison", meaning: "n. 比较", example: "Make comparison." },
    { word: "compatible", meaning: "adj. 兼容的", example: "Compatible with." },
    { word: "compel", meaning: "v. 强迫", example: "Compel to do." },
    { word: "compete", meaning: "v. 竞争", example: "Compete in market." },
    { word: "competent", meaning: "adj. 有能力的", example: "Competent worker." },
    { word: "competition", meaning: "n. 竞争", example: "Fierce competition." },
    { word: "competitive", meaning: "adj. 竞争的", example: "Competitive price." },
    { word: "compile", meaning: "v. 编译", example: "Compile code." },
    { word: "complaint", meaning: "n. 抱怨", example: "Customer complaint." },
    { word: "complete", meaning: "adj. 完整的", example: "Complete set." },
    { word: "complex", meaning: "adj. 复杂的", example: "Complex problem." },
    { word: "complicated", meaning: "adj. 复杂的", example: "Complicated process." },
    { word: "comply", meaning: "v. 遵守", example: "Comply with rules." },
    { word: "component", meaning: "n. 组件", example: "Computer component." },
    { word: "compose", meaning: "v. 组成", example: "Compose music." },
    { word: "composition", meaning: "n. 构成", example: "Chemical composition." },
    { word: "compound", meaning: "n. 化合物", example: "Chemical compound." },
    { word: "comprehend", meaning: "v. 理解", example: "Comprehend the text." },
    { word: "comprehensive", meaning: "adj. 全面的", example: "Comprehensive plan." },
    { word: "compress", meaning: "v. 压缩", example: "Compress file." },
    { word: "comprise", meaning: "v. 包含", example: "Comprise of parts." },
    { word: "compromise", meaning: "n./v. 妥协", example: "Reach compromise." },
    { word: "compulsory", meaning: "adj. 强制的", example: "Compulsory education." },
    { word: "compute", meaning: "v. 计算", example: "Compute results." },
    { word: "computer", meaning: "n. 计算机", example: "Personal computer." },
    { word: "conceal", meaning: "v. 隐藏", example: "Conceal secret." },
    { word: "concede", meaning: "v. 承认", example: "Concede defeat." },
    { word: "conceive", meaning: "v. 构思", example: "Conceive idea." },
    { word: "concentrate", meaning: "v. 集中", example: "Concentrate on work." },
    { word: "concentration", meaning: "n. 集中", example: "High concentration." },
    { word: "concept", meaning: "n. 概念", example: "New concept." },
    { word: "concern", meaning: "n. 关心", example: "Public concern." },
    { word: "concerning", meaning: "prep. 关于", example: "Concerning the issue." },
    { word: "concert", meaning: "n. 音乐会", example: "Rock concert." },
    { word: "conclude", meaning: "v. 结束", example: "Conclude meeting." },
    { word: "conclusion", meaning: "n. 结论", example: "Draw conclusion." },
    { word: "concrete", meaning: "adj. 具体的", example: "Concrete example." },
    { word: "condemn", meaning: "v. 谴责", example: "Condemn violence." },
    { word: "condense", meaning: "v. 浓缩", example: "Condense milk." },
    { word: "condition", meaning: "n. 条件", example: "Under condition." },
    { word: "conduct", meaning: "v. 进行", example: "Conduct experiment." },
    { word: "conference", meaning: "n. 会议", example: "International conference." },
    { word: "confess", meaning: "v. 承认", example: "Confess mistake." },
    { word: "confidence", meaning: "n. 信心", example: "Self confidence." },
    { word: "confident", meaning: "adj. 自信的", example: "Confident speaker." },
    { word: "confine", meaning: "v. 限制", example: "Confine to room." },
    { word: "confirm", meaning: "v. 确认", example: "Confirm booking." },
    { word: "conflict", meaning: "n. 冲突", example: "Conflict of interest." },
    { word: "confront", meaning: "v. 面对", example: "Confront problem." },
    { word: "confuse", meaning: "v. 混淆", example: "Don't confuse me." },
    { word: "confusion", meaning: "n. 混淆", example: "Avoid confusion." },
    { word: "congratulate", meaning: "v. 祝贺", example: "Congratulate success." },
    { word: "congress", meaning: "n. 国会", example: "National congress." },
    { word: "connect", meaning: "v. 连接", example: "Connect device." },
    { word: "connection", meaning: "n. 连接", example: "Internet connection." },
    { word: "conquer", meaning: "v. 征服", example: "Conquer fear." },
    { word: "conscience", meaning: "n. 良心", example: "Clear conscience." },
    { word: "conscientious", meaning: "adj. 认真的", example: "Conscientious worker." },
    { word: "conscious", meaning: "adj. 有意识的", example: "Conscious effort." },
    { word: "consecutive", meaning: "adj. 连续的", example: "Consecutive days." },
    { word: "consent", meaning: "n. 同意", example: "Give consent." },
    { word: "consequence", meaning: "n. 后果", example: "Bad consequence." },
    { word: "consequently", meaning: "adv. 因此", example: "Consequently, we failed." },
    { word: "conservation", meaning: "n. 保护", example: "Wildlife conservation." },
    { word: "conservative", meaning: "adj. 保守的", example: "Conservative approach." },
    { word: "consider", meaning: "v. 考虑", example: "Consider options." },
    { word: "considerable", meaning: "adj. 相当的", example: "Considerable amount." },
    { word: "considerate", meaning: "adj. 体贴的", example: "Considerate person." },
    { word: "consist", meaning: "v. 组成", example: "Consist of parts." },
    { word: "consistent", meaning: "adj. 一致的", example: "Consistent behavior." },
    { word: "constant", meaning: "adj. 恒定的", example: "Constant speed." },
    { word: "constantly", meaning: "adv. 不断地", example: "Constantly changing." },
    { word: "constitute", meaning: "v. 构成", example: "Constitute a team." },
    { word: "constitution", meaning: "n. 宪法", example: "National constitution." },
    { word: "construct", meaning: "v. 建造", example: "Construct building." },
    { word: "construction", meaning: "n. 建造", example: "Under construction." },
    { word: "consult", meaning: "v. 咨询", example: "Consult expert." },
    { word: "consultant", meaning: "n. 顾问", example: "Management consultant." },
    { word: "consume", meaning: "v. 消费", example: "Consume energy." },
    { word: "consumer", meaning: "n. 消费者", example: "Consumer goods." },
    { word: "consumption", meaning: "n. 消费", example: "Energy consumption." },
    { word: "contact", meaning: "n. 联系", example: "Get in contact." },
    { word: "contain", meaning: "v. 包含", example: "Contain virus." },
    { word: "container", meaning: "n. 容器", example: "Shipping container." },
    { word: "contaminate", meaning: "v. 污染", example: "Contaminate water." },
    { word: "contemporary", meaning: "adj. 当代的", example: "Contemporary art." },
    { word: "content", meaning: "n. 内容", example: "Website content." },
    { word: "contest", meaning: "n. 竞赛", example: "Beauty contest." },
    { word: "context", meaning: "n. 上下文", example: "In context." },
    { word: "continent", meaning: "n. 大陆", example: "Asian continent." },
    { word: "continue", meaning: "v. 继续", example: "Continue learning." },
    { word: "continuous", meaning: "adj. 连续的", example: "Continuous rain." },
    { word: "contract", meaning: "n. 合同", example: "Sign contract." },
    { word: "contradict", meaning: "v. 矛盾", example: "Contradict oneself." },
    { word: "contradiction", meaning: "n. 矛盾", example: "Logical contradiction." },
    { word: "contrary", meaning: "adj. 相反的", example: "Contrary to." },
    { word: "contrast", meaning: "n./v. 对比", example: "In contrast." },
    { word: "contribute", meaning: "v. 贡献", example: "Contribute to society." },
    { word: "contribution", meaning: "n. 贡献", example: "Make contribution." },
    { word: "control", meaning: "n./v. 控制", example: "Control system." },
    { word: "controversy", meaning: "n. 争议", example: "Public controversy." },
    { word: "convention", meaning: "n. 惯例", example: "Social convention." },
    { word: "conventional", meaning: "adj. 传统的", example: "Conventional wisdom." },
    { word: "converge", meaning: "v. 汇聚", example: "Converge at point." },
    { word: "conversation", meaning: "n. 对话", example: "Interesting conversation." },
    { word: "convert", meaning: "v. 转换", example: "Convert currency." },
    { word: "convey", meaning: "v. 传达", example: "Convey message." },
    { word: "conviction", meaning: "n. 信念", example: "Strong conviction." },
    { word: "convince", meaning: "v. 说服", example: "Convince someone." },
    { word: "cook", meaning: "v. 烹饪", example: "Cook dinner." },
    { word: "cool", meaning: "adj. 凉爽的", example: "Cool breeze." },
    { word: "cooperate", meaning: "v. 合作", example: "Cooperate with team." },
    { word: "cooperation", meaning: "n. 合作", example: "International cooperation." },
    { word: "coordinate", meaning: "v. 协调", example: "Coordinate efforts." },
    { word: "cop", meaning: "n. 警察", example: "Traffic cop." },
    { word: "cope", meaning: "v. 应对", example: "Cope with stress." },
    { word: "copper", meaning: "n. 铜", example: "Copper wire." },
    { word: "copy", meaning: "n. 副本", example: "Make copy." },
    { word: "core", meaning: "n. 核心", example: "Core values." },
    { word: "corporate", meaning: "adj. 公司的", example: "Corporate culture." },
    { word: "corporation", meaning: "n. 公司", example: "Multinational corporation." },
    { word: "correct", meaning: "adj. 正确的", example: "Correct answer." },
    { word: "correspond", meaning: "v. 通信", example: "Correspond with." },
    { word: "correspondence", meaning: "n. 通信", example: "Business correspondence." },
    { word: "correspondent", meaning: "n. 记者", example: "Foreign correspondent." },
    { word: "corresponding", meaning: "adj. 相应的", example: "Corresponding parts." },
    { word: "corrupt", meaning: "adj. 腐败的", example: "Corrupt official." },
    { word: "cost", meaning: "n. 成本", example: "Production cost." },
    { word: "costly", meaning: "adj. 昂贵的", example: "Costly mistake." },
    { word: "cottage", meaning: "n. 小屋", example: "Country cottage." },
    { word: "cotton", meaning: "n. 棉花", example: "Cotton shirt." },
    { word: "council", meaning: "n. 理事会", example: "City council." },
    { word: "count", meaning: "v. 计数", example: "Count numbers." },
    { word: "counter", meaning: "n. 柜台", example: "Reception counter." },
    { word: "country", meaning: "n. 国家", example: "Developed country." },
    { word: "countryside", meaning: "n. 农村", example: "Beautiful countryside." },
    { word: "county", meaning: "n. 县", example: "Rural county." },
    { word: "couple", meaning: "n. 夫妇", example: "Young couple." },
    { word: "courage", meaning: "n. 勇气", example: "Show courage." },
    { word: "course", meaning: "n. 课程", example: "Online course." },
    { word: "court", meaning: "n. 法院", example: "Supreme court." },
    { word: "cousin", meaning: "n. 表亲", example: "My cousin." },
    { word: "cover", meaning: "v. 覆盖", example: "Cover table." },
    { word: "cow", meaning: "n. 奶牛", example: "Milk cow." },
    { word: "coward", meaning: "n. 懦夫", example: "Don't be a coward." },
    { word: "crack", meaning: "n. 裂缝", example: "Crack in wall." },
    { word: "craft", meaning: "n. 工艺", example: "Handicraft." },
    { word: "crash", meaning: "v. 碰撞", example: "Car crash." },
    { word: "crazy", meaning: "adj. 疯狂的", example: "Crazy idea." },
    { word: "cream", meaning: "n. 奶油", example: "Ice cream." },
    { word: "create", meaning: "v. 创造", example: "Create art." },
    { word: "creative", meaning: "adj. 创造性的", example: "Creative thinking." },
    { word: "creation", meaning: "n. 创造", example: "New creation." },
    { word: "creature", meaning: "n. 生物", example: "Sea creature." },
    { word: "credit", meaning: "n. 信用", example: "Credit card." },
    { word: "creep", meaning: "v. 爬行", example: "Creep slowly." },
    { word: "crew", meaning: "n. 船员", example: "Ship crew." },
    { word: "crime", meaning: "n. 犯罪", example: "Commit crime." },
    { word: "criminal", meaning: "n. 罪犯", example: "Repeat criminal." },
    { word: "crisis", meaning: "n. 危机", example: "Economic crisis." },
    { word: "critic", meaning: "n. 批评家", example: "Film critic." },
    { word: "critical", meaning: "adj. 关键的", example: "Critical moment." },
    { word: "criticize", meaning: "v. 批评", example: "Don't criticize." },
    { word: "criticism", meaning: "n. 批评", example: "Accept criticism." },
    { word: "crop", meaning: "n. 作物", example: "Crop harvest." },
    { word: "cross", meaning: "v. 穿过", example: "Cross street." },
    { word: "crowd", meaning: "n. 人群", example: "Large crowd." },
    { word: "crown", meaning: "n. 王冠", example: "Royal crown." },
    { word: "crucial", meaning: "adj. 关键的", example: "Crucial decision." },
    { word: "crude", meaning: "adj. 粗糙的", example: "Crude oil." },
    { word: "cruel", meaning: "adj. 残忍的", example: "Cruel behavior." },
    { word: "cruise", meaning: "n. 巡航", example: "Cruise ship." },
    { word: "crush", meaning: "v. 压碎", example: "Crush ice." },
    { word: "cry", meaning: "v. 哭", example: "Don't cry." },
    { word: "crystal", meaning: "n. 水晶", example: "Crystal clear." },
    { word: "cube", meaning: "n. 立方体", example: "Ice cube." },
    { word: "cultivate", meaning: "v. 培养", example: "Cultivate habit." },
    { word: "culture", meaning: "n. 文化", example: "Popular culture." },
    { word: "cup", meaning: "n. 杯子", example: "Coffee cup." },
    { word: "cure", meaning: "v. 治愈", example: "Cure disease." },
    { word: "curious", meaning: "adj. 好奇的", example: "Curious child." },
    { word: "curiosity", meaning: "n. 好奇心", example: "Satisfy curiosity." },
    { word: "current", meaning: "adj. 当前的", example: "Current situation." },
    { word: "curriculum", meaning: "n. 课程", example: "School curriculum." },
    { word: "curve", meaning: "n. 曲线", example: "Smooth curve." },
    { word: "custom", meaning: "n. 习俗", example: "Local custom." },
    { word: "customer", meaning: "n. 顾客", example: "Regular customer." },
    { word: "cut", meaning: "v. 切", example: "Cut cake." },
    { word: "cycle", meaning: "n. 周期", example: "Life cycle." }
];

// 雅思单词数据
const ieltsWords = [
    { word: "abide", meaning: "v. 遵守，忍受", example: "We must abide by the rules." },
    { word: "ability", meaning: "n. 能力，才能", example: "She has the ability to solve complex problems." },
    { word: "abnormal", meaning: "adj. 反常的，异常的", example: "The test results showed abnormal levels." },
    { word: "abolish", meaning: "v. 废除，取消", example: "The government decided to abolish the death penalty." },
    { word: "abound", meaning: "v. 大量存在，充满", example: "The area abounds with wildlife." },
    { word: "abroad", meaning: "adv. 在国外，海外", example: "She has lived abroad for many years." },
    { word: "abrupt", meaning: "adj. 突然的，意外的", example: "The road came to an abrupt end." },
    { word: "absence", meaning: "n. 缺席，不在场", example: "His absence from the meeting was noticed." },
    { word: "absolute", meaning: "adj. 绝对的，完全的", example: "There is no absolute truth." },
    { word: "absorb", meaning: "v. 吸收，吸引", example: "The soil absorbs water quickly." },
    { word: "abstract", meaning: "adj. 抽象的，理论的", example: "Abstract concepts can be difficult to understand." },
    { word: "abundant", meaning: "adj. 丰富的，充足的", example: "The region has abundant natural resources." },
    { word: "abuse", meaning: "v. 滥用，虐待", example: "He was charged with child abuse." },
    { word: "academic", meaning: "adj. 学术的，教学的", example: "She has an academic background in linguistics." },
    { word: "accelerate", meaning: "v. 加速，促进", example: "The car accelerated to over 100 mph." },
    { word: "access", meaning: "n. 通道，接近", example: "The building has wheelchair access." },
    { word: "accessible", meaning: "adj. 可接近的，可使用的", example: "The information should be accessible to everyone." },
    { word: "accommodate", meaning: "v. 容纳，适应", example: "The hotel can accommodate 500 guests." },
    { word: "accompany", meaning: "v. 陪伴，陪同", example: "She accompanied her friend to the doctor." },
    { word: "accomplish", meaning: "v. 完成，实现", example: "He accomplished his goal of climbing Mount Everest." },
    { word: "accordance", meaning: "n. 一致，和谐", example: "In accordance with the law, he was arrested." },
    { word: "account", meaning: "n. 账户，描述", example: "I need to open a bank account." },
    { word: "accumulate", meaning: "v. 积累，积聚", example: "We need to accumulate more evidence." },
    { word: "accuracy", meaning: "n. 准确性，精确性", example: "The accuracy of the data is important." },
    { word: "accurate", meaning: "adj. 准确的，精确的", example: "The report was accurate." },
    { word: "accuse", meaning: "v. 指责，控告", example: "He was accused of murder." },
    { word: "achieve", meaning: "v. 达到，实现", example: "She achieved her dream of becoming a lawyer." },
    { word: "acknowledge", meaning: "v. 承认，致谢", example: "He acknowledged receipt of the letter." },
    { word: "acquire", meaning: "v. 获得，习得", example: "She acquired a new language." },
    { word: "across", meaning: "prep. 穿过，横过", example: "The bridge spans across the river." },
    { word: "act", meaning: "v. 行动，表演", example: "He acted in a play." },
    { word: "action", meaning: "n. 行动，活动", example: "The government took action to reduce crime." },
    { word: "active", meaning: "adj. 活跃的，积极的", example: "She is an active member of the community." },
    { word: "activity", meaning: "n. 活动，行动", example: "The school offers a variety of activities." },
    { word: "actual", meaning: "adj. 实际的，真实的", example: "The actual cost was higher than expected." },
    { word: "actually", meaning: "adv. 实际上，事实上", example: "Actually, I don't like coffee." },
    { word: "acute", meaning: "adj. 尖锐的，严重的", example: "He has an acute sense of hearing." },
    { word: "adapt", meaning: "v. 适应，改编", example: "She adapted to the new environment quickly." },
    { word: "add", meaning: "v. 添加，增加", example: "Please add some milk to the tea." },
    { word: "addition", meaning: "n. 加法，增加", example: "The addition of a new wing to the hospital was necessary." },
    { word: "additional", meaning: "adj. 额外的，附加的", example: "We need additional staff." },
    { word: "adequate", meaning: "adj. 足够的，适当的", example: "The food supply is adequate." },
    { word: "adjust", meaning: "v. 调整，适应", example: "He adjusted the mirror." },
    { word: "administer", meaning: "v. 管理，行政", example: "She administers the company's finances." },
    { word: "admit", meaning: "v. 承认，允许进入", example: "He admitted to stealing the money." },
    { word: "adopt", meaning: "v. 采用，收养", example: "The couple adopted a child." },
    { word: "advance", meaning: "v. 前进，进步", example: "The army advanced towards the enemy." },
    { word: "advantage", meaning: "n. 优势，有利条件", example: "She has an advantage in the competition." },
    { word: "adventure", meaning: "n. 冒险，奇遇", example: "They went on an adventure in the mountains." },
    { word: "advertise", meaning: "v. 做广告，宣传", example: "The company advertised its new product on TV." },
    { word: "advice", meaning: "n. 建议，忠告", example: "I need some advice about my career." },
    { word: "advise", meaning: "v. 建议，忠告", example: "I advise you to see a doctor." },
    { word: "advocate", meaning: "v. 提倡，拥护", example: "She advocates for environmental protection." },
    { word: "aesthetic", meaning: "adj. 美学的，审美的", example: "The building has aesthetic appeal." },
    { word: "affect", meaning: "v. 影响，感动", example: "The weather affected our plans." },
    { word: "affection", meaning: "n. 喜爱，感情", example: "She has great affection for her family." },
    { word: "affirm", meaning: "v. 断言，确认", example: "He affirmed his innocence." },
    { word: "afford", meaning: "v. 买得起，负担得起", example: "I can't afford to buy a new car." },
    { word: "afraid", meaning: "adj. 害怕的，担心的", example: "She is afraid of heights." },
    { word: "after", meaning: "prep. 在...之后", example: "He arrived after me." },
    { word: "afternoon", meaning: "n. 下午", example: "We will meet in the afternoon." },
    { word: "afterward", meaning: "adv. 之后，后来", example: "We went to the park afterward." },
    { word: "again", meaning: "adv. 再一次，又", example: "Please try again." },
    { word: "against", meaning: "prep. 反对，逆", example: "He is against the new law." },
    { word: "age", meaning: "n. 年龄，时代", example: "What is your age?" },
    { word: "agency", meaning: "n. 代理，机构", example: "She works for a government agency." },
    { word: "agent", meaning: "n. 代理人，经纪人", example: "He is a real estate agent." },
    { word: "aggravate", meaning: "v. 加重，恶化", example: "The problem was aggravated by his carelessness." },
    { word: "aggressive", meaning: "adj. 侵略性的，有进取心的", example: "He has an aggressive approach to business." },
    { word: "agitate", meaning: "v. 煽动，搅动", example: "The speech agitated the crowd." },
    { word: "ago", meaning: "adv. 以前", example: "I met him five years ago." },
    { word: "agree", meaning: "v. 同意，赞成", example: "I agree with your opinion." },
    { word: "agreement", meaning: "n. 协议，同意", example: "We reached an agreement." },
    { word: "agriculture", meaning: "n. 农业", example: "Agriculture is the main industry in this region." },
    { word: "ahead", meaning: "adv. 向前，提前", example: "We are ahead of our competitors." },
    { word: "aid", meaning: "n. 帮助，援助", example: "The country received international aid." },
    { word: "aim", meaning: "n. 目标，目的", example: "What is your aim in life?" },
    { word: "air", meaning: "n. 空气，大气", example: "The air is polluted in the city." },
    { word: "aircraft", meaning: "n. 飞机，航空器", example: "The aircraft was delayed." },
    { word: "airline", meaning: "n. 航空公司", example: "I flew with a major airline." },
    { word: "airport", meaning: "n. 机场", example: "We arrived at the airport late." },
    { word: "aisle", meaning: "n. 过道，通道", example: "Please walk down the aisle." },
    { word: "alarm", meaning: "n. 警报，闹钟", example: "The alarm woke me up." },
    { word: "album", meaning: "n. 相册，唱片", example: "She has a photo album." },
    { word: "alcohol", meaning: "n. 酒精，酒", example: "Alcohol is not allowed for minors." },
    { word: "alert", meaning: "adj. 警惕的，警觉的", example: "The dog was alert." },
    { word: "alike", meaning: "adj. 相似的，相同的", example: "The two sisters look alike." },
    { word: "alive", meaning: "adj. 活着的，有活力的", example: "The plant is still alive." },
    { word: "all", meaning: "adj. 全部的，所有的", example: "All students must pass the exam." },
    { word: "alliance", meaning: "n. 联盟，联合", example: "The two countries formed an alliance." },
    { word: "allocate", meaning: "v. 分配，分派", example: "The government allocated funds for education." },
    { word: "allow", meaning: "v. 允许，准许", example: "Smoking is not allowed in the building." }
];

// 全局变量
let currentWords = [];
let todayWords = [];
let currentIndex = 0;
let currentType = 'cet6';
let isLearning = false;
let dailyWordCount = 10;

// DOM元素
const wordElement = document.getElementById('word');
const meaningElement = document.getElementById('meaning');
const exampleElement = document.getElementById('example');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const cet4Btn = document.getElementById('cet4-btn');
const cet6Btn = document.getElementById('cet6-btn');
const ieltsBtn = document.getElementById('ielts-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsBtn = document.getElementById('close-settings');
const settingOptions = document.querySelectorAll('.setting-option');
const wordInputSection = document.getElementById('word-input-section');
const wordInput = document.getElementById('word-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const cet4Count = document.getElementById('cet4-count');
const cet6Count = document.getElementById('cet6-count');
const ieltsCount = document.getElementById('ielts-count');
const bgUploadBtn = document.getElementById('bg-upload-btn');
const bgSetDefaultBtn = document.getElementById('bg-set-default-btn');
const bgResetBtn = document.getElementById('bg-reset-btn');
const bgUpload = document.getElementById('bg-upload');
const DEFAULT_BG_URL = "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20study%20desk%20background%20with%20stacked%20books%20pencils%20open%20notebooks%20globe%20computer%20keyboard%20desk%20lamp%20brown%20puppy%20dog%20with%20purple%20glasses%20orange%20shirt%20waving%20hand%20english%20learning%20theme%20kawaii%20style%20warm%20beige%20cream%20background%20colorful%20illustration%20flat%20design&image_size=landscape_16_9";

// 初始化
function init() {
    // 加载存储的学习进度和设置
    loadProgress();
    loadSettings();
    
    // 初始化当前词库（默认六级）
    currentWords = cet6Words;
    
    // 初始化单词数量显示
    cet4Count.textContent = cet4Words.length;
    cet6Count.textContent = cet6Words.length;
    ieltsCount.textContent = ieltsWords.length;
    
    // 绑定事件监听器
    startBtn.addEventListener('click', startLearning);
    resetBtn.addEventListener('click', resetLearning);
    cet4Btn.addEventListener('click', () => switchWordType('cet4'));
    cet6Btn.addEventListener('click', () => switchWordType('cet6'));
    ieltsBtn.addEventListener('click', () => switchWordType('ielts'));
    settingsBtn.addEventListener('click', openSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);
    
    // 绑定背景图相关事件
    bgUploadBtn.addEventListener('click', () => {
        bgUpload.click();
    });
    bgSetDefaultBtn.addEventListener('click', setCustomDefaultBg);
    bgResetBtn.addEventListener('click', resetBackground);
    bgUpload.addEventListener('change', handleBgUpload);
    submitBtn.addEventListener('click', checkWord);
    wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkWord();
        }
    });
    
    // 绑定设置选项点击事件
    settingOptions.forEach(option => {
        option.addEventListener('click', () => {
            const count = parseInt(option.dataset.count);
            setDailyWordCount(count);
        });
    });
    
    // 初始化单词类型
    switchWordType('cet6');
    
    // 更新设置面板的选中状态
    updateSettingsPanel();
}

// 切换单词类型
function switchWordType(type) {
    currentType = type;
    if (type === 'cet4') {
        currentWords = cet4Words;
    } else if (type === 'cet6') {
        currentWords = cet6Words;
    } else {
        currentWords = ieltsWords;
    }
    
    // 更新按钮状态
    cet4Btn.classList.toggle('active', type === 'cet4');
    cet6Btn.classList.toggle('active', type === 'cet6');
    ieltsBtn.classList.toggle('active', type === 'ielts');
    
    // 重置学习状态
    resetLearning();
    
    // 加载存储的进度
    loadProgress();
}

// 开始学习
function startLearning() {
    if (!todayWords.length) {
        // 生成今天的单词
        generateTodayWords();
    }
    
    isLearning = true;
    startBtn.style.display = 'none';
    
    // 显示单词输入区域
    wordInputSection.style.display = 'block';
    
    // 显示第一个单词
    showWord(currentIndex);
}

// 生成今天的单词
function generateTodayWords() {
    if (dailyWordCount <= 10) {
        // 如果每天背10个或更少，正常生成单词
        const shuffled = [...currentWords].sort(() => 0.5 - Math.random());
        todayWords = shuffled.slice(0, dailyWordCount);
    } else {
        // 如果每天背10个以上，以10个为一组每组重复出现两边
        const shuffled = [...currentWords].sort(() => 0.5 - Math.random());
        todayWords = [];
        
        let remainingCount = dailyWordCount;
        let wordIndex = 0;
        
        while (remainingCount > 0) {
            // 每组10个单词
            const groupSize = Math.min(10, Math.ceil(remainingCount / 2));
            const group = shuffled.slice(wordIndex, wordIndex + groupSize);
            
            // 每组重复出现两边
            const repeatedGroup = [...group, ...group];
            
            // 添加到今天单词列表中
            todayWords.push(...repeatedGroup.slice(0, remainingCount));
            
            // 更新剩余数量和单词索引
            remainingCount -= repeatedGroup.length;
            wordIndex += groupSize;
        }
    }
    
    // 保存到本地存储
    saveProgress();
}

// 打开设置面板
function openSettings() {
    settingsPanel.style.display = 'block';
}

// 关闭设置面板
function closeSettings() {
    settingsPanel.style.display = 'none';
}

// 设置每天的单词数量
function setDailyWordCount(count) {
    dailyWordCount = count;
    
    // 更新设置面板的选中状态
    updateSettingsPanel();
    
    // 保存设置
    saveSettings();
    
    // 重置学习状态
    resetLearning();
}

// 更新设置面板的选中状态
function updateSettingsPanel() {
    settingOptions.forEach(option => {
        if (parseInt(option.dataset.count) === dailyWordCount) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 保存设置
function saveSettings() {
    const settings = {
        dailyWordCount: dailyWordCount
    };
    localStorage.setItem('wordSettings', JSON.stringify(settings));
}

// 加载设置
function loadSettings() {
    const savedSettings = localStorage.getItem('wordSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        dailyWordCount = settings.dailyWordCount || 10;
    }
}

// 显示当前单词
function showWord(index) {
    if (index < todayWords.length) {
        const word = todayWords[index];
        wordElement.textContent = word.word;
        meaningElement.textContent = word.meaning;
        exampleElement.textContent = `例句：${word.example}`;
        
        // 清空输入框和反馈信息
        wordInput.value = '';
        feedback.textContent = '';
        
        // 更新进度
        updateProgress(index + 1);
    } else {
        // 学习完成
        wordElement.textContent = '学习完成！';
        meaningElement.textContent = '恭喜你完成了今天的学习任务！';
        exampleElement.textContent = '明天继续加油！';
        isLearning = false;
        
        // 隐藏单词输入区域
        wordInputSection.style.display = 'none';
    }
}

// 检查单词
function checkWord() {
    const userInput = wordInput.value.trim().toLowerCase();
    const currentWord = todayWords[currentIndex].word.toLowerCase();
    
    if (userInput === currentWord) {
        // 单词正确
        feedback.textContent = '正确！';
        feedback.style.color = '#4CAF50';
        
        // 延迟后自动进入下一个单词
        setTimeout(() => {
            if (currentIndex < todayWords.length - 1) {
                currentIndex++;
                showWord(currentIndex);
            } else {
                // 学习完成
                showWord(currentIndex + 1);
            }
        }, 1000);
    } else {
        // 单词错误
        feedback.textContent = `错误！正确答案是：${todayWords[currentIndex].word}`;
        feedback.style.color = '#f44336';
    }
}

// 重置学习
function resetLearning() {
    currentIndex = 0;
    todayWords = [];
    isLearning = false;
    startBtn.style.display = 'block';
    
    // 隐藏单词输入区域
    wordInputSection.style.display = 'none';
    wordInput.value = '';
    feedback.textContent = '';
    
    // 重置显示
    wordElement.textContent = '点击开始学习';
    meaningElement.textContent = '准备好开始今天的学习了吗？';
    exampleElement.textContent = '例句：';
    
    // 重置进度
    updateProgress(0);
    
    // 清除本地存储
    localStorage.removeItem(`wordProgress_${currentType}`);
}

// 更新进度
function updateProgress(current) {
    const total = todayWords.length;
    const percentage = total > 0 ? (current / total) * 100 : 0;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${current}/${total}`;
}

// 保存进度
function saveProgress() {
    const progress = {
        date: new Date().toDateString(),
        words: todayWords,
        currentIndex: currentIndex
    };
    localStorage.setItem(`wordProgress_${currentType}`, JSON.stringify(progress));
}

// 加载进度
function loadProgress() {
    const savedProgress = localStorage.getItem(`wordProgress_${currentType}`);
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        const today = new Date().toDateString();
        
        // 检查是否是今天的进度
        if (progress.date === today) {
            todayWords = progress.words;
            currentIndex = progress.currentIndex;
            
            // 如果有今天的单词，更新显示
            if (todayWords.length) {
                // 显示单词输入区域
                wordInputSection.style.display = 'block';
                
                showWord(currentIndex);
                startBtn.style.display = 'none';
                isLearning = true;
            }
        }
    }
}

function handleBgUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const bgUrl = event.target.result;
            document.body.style.backgroundImage = `url('${bgUrl}')`;
            localStorage.setItem('customBackground', bgUrl);
            alert('背景图更换成功！');
        };
        reader.readAsDataURL(file);
    }
}

function setCustomDefaultBg() {
    const currentBg = document.body.style.backgroundImage;
    if (currentBg) {
        const bgUrl = currentBg.replace(/^url\(['"]?(.*?)['"]?\)$/, '$1');
        localStorage.setItem('userDefaultBackground', bgUrl);
        alert('已将当前背景设为默认！');
    } else {
        localStorage.setItem('userDefaultBackground', DEFAULT_BG_URL);
        alert('已将当前背景设为默认！');
    }
}

function resetBackground() {
    const userDefault = localStorage.getItem('userDefaultBackground');
    const bgUrl = userDefault || DEFAULT_BG_URL;
    document.body.style.backgroundImage = `url('${bgUrl}')`;
    localStorage.removeItem('customBackground');
    alert('已恢复默认背景！');
}

function loadCustomBackground() {
    const savedBg = localStorage.getItem('customBackground');
    if (savedBg) {
        document.body.style.backgroundImage = `url('${savedBg}')`;
    } else {
        const userDefault = localStorage.getItem('userDefaultBackground');
        if (userDefault) {
            document.body.style.backgroundImage = `url('${userDefault}')`;
        }
    }
}

function initDefaultBackground() {
    localStorage.removeItem('userDefaultBackground');
    localStorage.removeItem('customBackground');
}

// 初始化应用
init();
initDefaultBackground();
loadCustomBackground();