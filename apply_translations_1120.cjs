const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'data', 'chapters.ts');
let content = fs.readFileSync(src, 'utf8');

const t11_20 = {
    11: {
        bnTitle: "পলায়নের মোহ",
        bnQuotes: [
            { q: "আপনার পরিস্থিতি নয়, বরং আপনার দৃষ্টিভঙ্গি পরিবর্তন করা উচিত।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আসল সমস্যা হলো আমাদের মানসিকতা। সমস্যা আপনি নন। আশেপাশের পরিবেশের সাথে অভ্যস্ত হয়ে যাওয়া মানুষের স্বভাব।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "সমাধান বাইরে কোথাও নেই। যেখানে আপনি আছেন, সমাধান ঠিক সেখানেই।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "The Illusion of Travel", c: "We think moving to a new place or taking a vacation will remove sadness, but our mind travels with us." },
            { t: "Habituation", c: "Humans adapt to any environment. Even in paradise, boredom will eventually set in." },
            { t: "Attitude Shift", c: "Changing one's perspective is more effective and economical than changing the external environment." },
            { t: "Inner Peace", c: "Peace is not a destination; it's a state of mind that can be found in your current circumstances." }
        ],
        enPractical: "If you feel 'I'll be fine if I leave this city or job,' stop. Ask yourself: 'Am I running away?' Sit with your eyes closed in your current room for 5 minutes and think about how to find peace right now. Find 3 good things about your current environment.",
        enCritical: "This advice is effective for existential boredom, but dangerous in toxic or abusive environments. Sometimes, changing your environment is the only solution (like leaving a war zone or an abusive home). Privileged Stoicism often forgets that for marginalized people, environment determines mental health.",
        enInd: "Reduced tendency to run from problems; saving money on 'escapist' travel.",
        enSoc: "Greater social stability, as people try to improve their current environment instead of leaving."
    },
    12: {
        bnTitle: "পর্যবেক্ষক সত্তা",
        bnQuotes: [
            { q: "আমার মন। এটা কী? আমি এটা দিয়ে কী তৈরি করছি? আমি একে কী কাজে লাগাচ্ছি?", a: "মার্কাস অরেলিয়াস" },
            { q: "আপনি যত বেশি পর্যবেক্ষণ করবেন, তত বেশি ক্ষতিকারক আচরণগুলো চিহ্নিত করতে পারবেন।", a: "মার্কাস অরেলিয়াস" }
        ],
        enContent: [
            { t: "Self-Inquiry", c: "Asking yourself like Marcus Aurelius—'What am I doing with my mind right now?'" },
            { t: "Thought Patterns", c: "We often waste time unknowingly daydreaming or reminiscing about the past. This is a waste of energy." },
            { t: "Journaling", c: "Writing (Journaling) is the best way to clear the mind's clutter. It makes thoughts visible." },
            { t: "Being Present", c: "It's impossible to change the past, so returning the mind's focus solely to the present is essential." }
        ],
        enPractical: "Stop randomly throughout the day and ask: 'Where is my mind right now?' If you find it wandering in the past or future, gently bring it back to the present. Write your thoughts down for at least 10 minutes a day.",
        enCritical: "Constant self-observation can lead to 'Hyper-reflexivity', which is tied to anxiety. People can become so aware of their own thoughts that they cannot act naturally. While valuable, it needs to be balanced with 'Flow State' or self-forgetfulness.",
        enInd: "Increased mindfulness and metacognition (thinking about thinking).",
        enSoc: "Reduced reactive behavior during conversations."
    },
    13: {
        bnTitle: "মানসিক খাদ্যতালিকা",
        bnQuotes: [
            { q: "আমার দরকার ছিল ১৫ মিনিটেরও বেশি সময় ধরে নিরবচ্ছিন্নভাবে ভাবার ক্ষমতা।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আপনি যখন কোনো তথ্য গ্রহণ করেন, তা আপনার মেজাজের ওপর প্রভাব ফেলবে", a: "আপনি চান বা না চান।" },
            { q: "এমন তথ্য এড়িয়ে চলুন যা আপনাকে খারাপ, উদ্বিগ্ন, দুর্বল, ঈর্ষান্বিত করে বা যার কোনো ব্যবহারই নেই।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Impact of Information", c: "What we watch or read controls our mood. Negative news or social media weakens us unknowingly." },
            { t: "Uninterrupted Thought", c: "Deep and original thinking requires the ability to think without interruption for long periods." },
            { t: "Jesse Livermore's Strategy", c: "Successful trader Jesse Livermore isolated himself from others' opinions so his judgment wouldn't be affected." },
            { t: "Affect Heuristic", c: "Our emotions influence decision-making. Thus, we should avoid bad information (which creates bad emotions)." }
        ],
        enPractical: "Mute or unfollow 'News Feeds' or social media apps on your phone that make you feel angry or jealous. Dedicate at least 1 hour of 'Zero Input' time daily—no phone, books, or TV, just be with your own thoughts.",
        enCritical: "Strictly shielding the mind from 'unpleasant' information can create an 'echo chamber'. Avoiding news to prevent anxiety might mean ignoring real-world injustices that demand attention. In a democracy requiring informed citizens, 'blissful ignorance' is not always a virtue.",
        enInd: "Sharp focus, better mood regulation, and original thinking skills.",
        enSoc: "Potential disengagement from collective social issues or trends."
    },
    14: {
        bnTitle: "কম্পাস হিসেবে উদ্দেশ্য",
        bnQuotes: [
            { q: "কোনো এলোমেলো কাজ নয়, এমন কোনো কাজ নয় যার ভিত্তি কোনো অন্তর্নিহিত নীতি নয়।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "একটি সুন্দর জীবন যাপন করার অর্থ হলো লক্ষ্যভ্রষ্ট না হওয়া।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "সব জায়গায় থাকার অর্থ হলো কোথাও না থাকা।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Aimless Action", c: "Every action should have a principle or purpose behind it. Random tasks are a waste of energy." },
            { t: "Harmony with Nature", c: "Stoics believed that working in alignment with one's own nature and the universe makes it easier to maintain focus." },
            { t: "Passion Project", c: "To save life from boredom, having a 'Passion Project' or hobby is crucial to keep you focused." },
            { t: "Goals and Clarity", c: "Having a major goal prevents distraction from minor issues." }
        ],
        enPractical: "Before doing anything, ask yourself: 'Why am I doing this? Does it align with my main goal?' If the answer is 'no', then drop it. Start a side project (like gardening or writing) that puts you in a 'Flow State'.",
        enCritical: "'No aimless action'—this demand sets an extremely high standard for productivity. Human creativity and mental health require leisure, aimless wandering, and 'meaningless' play. Viewing distraction entirely as an evil can make life robotic and devoid of spontaneous joy.",
        enInd: "High productivity and proper direction.",
        enSoc: "Less participation in trivial social trends or viral distractions."
    },
    15: {
        bnTitle: "একনিষ্ঠতার শক্তি",
        bnQuotes: [
            { q: "সব জায়গায় থাকার অর্থ হলো কোথাও না থাকা।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আপনি সবকিছু পেতে পারেন, কিন্তু সবকিছু একবারে নয়।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আপনার জন্য গুরুত্বপূর্ণ বিষয়গুলোতে মনোযোগ দিলে আপনি মানসিকভাবে এবং পেশাগতভাবে আরও ভালো থাকবেন।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "The Power of Focus", c: "Trying to do everything at once means doing nothing well. We should focus on one major goal at a time." },
            { t: "Selecting Priorities", c: "For mental peace and career growth, unnecessary 'Secondary Activities' must be eliminated." },
            { t: "Major Goal", c: "Rather than having many small goals, having one 'Big Goal' accelerates progress." },
            { t: "Sacrifice", c: "To achieve something extraordinary, one must temporarily sacrifice many other things (like hanging out or entertainment)." }
        ],
        enPractical: "Set only one main goal for the next 3 months. Put all other projects on 'hold'. Arrange your daily routine so your best time is spent on that single goal. Completely stop multitasking.",
        enCritical: "Single-minded focus is effective but risky. If that specific goal fails, the person has no backup plan (diversification). Furthermore, if relationships and health are viewed as 'distractions' while pursuing a goal, excessive focus can damage them.",
        enInd: "Mastering skills rapidly and completing major projects.",
        enSoc: "Potential isolation or loneliness during periods of intense focus."
    },
    16: {
        bnTitle: "মানসিক সুস্থতার সংজ্ঞা",
        bnQuotes: [
            { q: "এক জোড়া সুস্থ চোখের সবকিছু দেখা উচিত এবং এ কথা বলা উচিত নয়, 'না! বড্ড বেশি আলো!'", a: "স্টয়িক প্রজ্ঞা" },
            { q: "একটি সুস্থ মন যেকোনো কিছুর জন্য প্রস্তুত থাকা উচিত।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "এটি আরও ভালো হওয়ার একটি চলমান প্রক্রিয়া।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Definition of a Healthy Mind", c: "A healthy mind or 'Common Sense' is one that is prepared for any situation." },
            { t: "Accepting Reality", c: "Just as eyes don't complain about seeing light, a healthy mind does not complain when facing reality. It has the courage to see both good and bad." },
            { t: "Signs of Instability", c: "Unreasonable mood swings, insecurity, and lack of focus are signs of an unhealthy mind." },
            { t: "Continuous Process", c: "Mental health is not a destination; it is a matter of daily practice." }
        ],
        enPractical: "Whenever something unexpected happens, instead of complaining, say, 'My mind was prepared for this.' View yourself as an observer, not a victim. Do a 'Health Check' of your mental state daily—was I unnecessarily anxious today?",
        enCritical: "The metaphor of eyes accepting brightness ignores that extreme brightness (trauma) can blind them. Suggesting a healthy mind never says 'too much' risks invalidating trauma responses, where the mind shuts down defensively. It sets a standard of Stoic invulnerability that is biologically unrealistic for many.",
        enInd: "Strong mental stability and adaptability.",
        enSoc: "Reliable and calm leaders during crises."
    },
    17: {
        bnTitle: "উন্নতির পূর্বশর্ত",
        bnQuotes: [
            { q: "আপনি জিজ্ঞেস করছেন, আমি কী উন্নতি করেছি? আমি নিজের সাথে বন্ধুত্ব করতে শুরু করেছি।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Friendship with Oneself", c: "The first step to improvement is treating yourself as a friend, not an enemy." },
            { t: "Self-Awareness", c: "Without truly knowing oneself, no improvement is sustainable." },
            { t: "Compassion", c: "Being compassionate towards your own mistakes rather than being harsh." },
            { t: "The Foundation", c: "Self-knowledge is the foundation of all other successes." }
        ],
        enPractical: "Stand in front of the mirror and tell yourself, 'I like you and I'm on your side.' Advise yourself as you would a dear friend. When you make a mistake, comfort yourself like a friend instead of scolding.",
        enCritical: "This concept is universally positive. However, 'knowing oneself' is often a privilege for those with the time for introspection. For those busy fighting for survival, self-analysis might feel like a luxury.",
        enInd: "Higher self-esteem and a reduction in self-sabotaging tendencies.",
        enSoc: "More authentic interactions, as people pretend less."
    },
    18: {
        bnTitle: "খাঁটি জীবনযাপন",
        bnQuotes: [
            { q: "নিজেকে জানাই হলো প্রজ্ঞার শুরু।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "সমস্যা হলো, আমাদের বেশিরভাগেরই নিজের সত্তার সাথে সামঞ্জস্য রেখে জীবনযাপনের আত্মবিশ্বাসের অভাব রয়েছে।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আমি শেষ পর্যন্ত কী ফলাফল খুঁজছি? এটি কি আমার সত্তার সাথে সামঞ্জস্যপূর্ণ?", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Applying Knowledge", c: "Merely knowing yourself is not enough; acting accordingly is essential. For example, if you are an introvert, stop forcing yourself to go to parties." },
            { t: "Wrong Decisions", c: "We often buy things or do things (like buying a large car) because of others, which contradicts our true nature." },
            { t: "Social Pressure", c: "Due to society or fear, we act against our own being, which is the root cause of an unhappy life." },
            { t: "Questioning", c: "Before every major decision, ask—'Is this really what I want, or what society wants?'" }
        ],
        enPractical: "Review your expenses over the last month. Which expenses were just for 'show-off' or due to social pressure? Identify them. Drop one habit today that doesn't align with your true nature.",
        enCritical: "Acting strictly according to 'who you are' assumes a fixed self. Psychology suggests personality is fluid. Strictly adhering to labels (e.g., 'I am an introvert, so I won't socialize') can hinder growth and experimentation.",
        enInd: "Deep satisfaction and effective use of resources (money/time).",
        enSoc: "A society of diverse individuals who follow their own path instead of uniform trends."
    },
    19: {
        bnTitle: "অভ্যন্তরীণ দুর্গ",
        bnQuotes: [
            { q: "মনে রাখবেন, আপনি যে চ্যালেঞ্জেরই মুখোমুখি হোন না কেন, তা মোকাবিলা করার মতো রসদ আপনার ভেতরেই রয়েছে।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আপনি প্রতি মুহূর্তেই নিজের ধারণার চেয়ে অনেক বেশি শক্তিশালী।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আপনার মানসিক স্টোরেজে অনুসন্ধান চালানোর সমতুল্য বিষয় হলো আত্ম-বিশ্লেষণ।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Latent Power", c: "There are many strengths (endurance, patience) hidden within us that we don't realize until we face danger." },
            { t: "Evidence from the Past", c: "People have survived difficult situations like the Holocaust or pandemics. You can too." },
            { t: "The Storage Room", c: "Our mind is like a storage room. Sometimes we need to search it to see what tools (skills) are stored there." },
            { t: "Fear vs. Strength", c: "Whenever you feel afraid about the future, remember that you have the weapons to deal with it." }
        ],
        enPractical: "Write down the 3 hardest moments in your life that you have overcome. Remind yourself, 'If I could get through that, I can get through this too.' Trust in your own strength.",
        enCritical: "While empowering, telling trauma survivors that they 'have the resources' can sometimes downplay the need for external help (therapy, medication, financial aid). Resilience is not infinite, and systemic failures cannot always be overcome by internal strength alone.",
        enInd: "Reduced panic during crises and increased self-confidence.",
        enSoc: "A more resilient population capable of recovering from collective trauma."
    },
    20: {
        bnTitle: "নতুন আখ্যান তৈরি",
        bnQuotes: [
            { q: "ক্ষতিগ্রস্ত না হওয়ার সিদ্ধান্ত নিন — তাহলে আপনিও ক্ষতিগ্রস্ত বোধ করবেন না। ক্ষতিগ্রস্ত বোধ না করলে", a: "আসলে আপনার কোনো ক্ষতিই হয়নি।" },
            { q: "কখনই ভুলবেন না: আপনিই আপনার জীবনের গল্প তৈরি করেন। যেকোনো মুহূর্তে আপনার দৃষ্টিভঙ্গি পরিবর্তন করার ক্ষমতা আপনারই রয়েছে।", a: "স্টয়িক প্রজ্ঞা" },
            { q: "আপনার সাথে যা ঘটে তা আপনি পরিবর্তন করতে পারবেন না। কিন্তু সেই ঘটনার যে অর্থ আপনি নির্ধারণ করেন, তা আপনি পরিবর্তন করতে পারেন।", a: "স্টয়িক প্রজ্ঞা" }
        ],
        enContent: [
            { t: "Author of the Story", c: "You are the author of your life's story. Whether you portray yourself as a 'victim' or a 'hero' is in your hands." },
            { t: "Giving Meaning", c: "Events have no inherent meaning; it is the meaning we give to an event that affects us." },
            { t: "Power of Rejection", c: "Even if someone insults you, if you choose not to feel insulted, that insult won't touch you." },
            { t: "Negative Narratives", c: "We must stop telling negative stories like 'I can't' or 'My luck is bad'." }
        ],
        enPractical: "Whenever something bad happens, tell yourself, 'This is just a Plot Twist in my story, not the end.' Imagine yourself in the role of a warrior overcoming an obstacle. Reframe the negative event as a 'challenge'.",
        enCritical: "'If you don't feel harmed, you haven't been'—this idea is powerful for insults but dangerous for physical or systemic harm. It can lead to denying abuse or injustice. Narrative therapy is effective, but it must acknowledge objective reality alongside personal interpretation.",
        enInd: "A strong sense of agency and overcoming the 'victim mentality'.",
        enSoc: "Empowering individuals to change their circumstances by shifting their mindset."
    }
};

const chaptersMatch = content.match(/export const chapters:\s*Chapter\[\]\s*=\s*(\[[\s\S]*?\]);/);
const rawChapters = new Function(`return ${chaptersMatch[1]}`)();

const updatedChapters = rawChapters.map(ch => {
    if (t11_20[ch.id]) {
        const t = t11_20[ch.id];

        // Set BN section title
        ch.sectionTitle.bn = "অভ্যন্তরীণ জগৎ";

        // Set BN chapter titles and quotes
        ch.chapterTitle.bn = t.bnTitle;
        for (let i = 0; i < ch.goldenQuotes.length; i++) {
            if (t.bnQuotes[i]) {
                ch.goldenQuotes[i].quote.bn = t.bnQuotes[i].q;
                ch.goldenQuotes[i].author.bn = t.bnQuotes[i].a;
            }
        }

        // Set EN insights, practical, critical, outcomes
        for (let i = 0; i < ch.coreInsights.length; i++) {
            if (t.enContent[i]) {
                ch.coreInsights[i].title.en = t.enContent[i].t;
                ch.coreInsights[i].content.en = t.enContent[i].c;
            }
        }

        ch.practicalApplication.en = t.enPractical;
        ch.criticalReflection.en = t.enCritical;
        ch.expectedOutcomes.individual.en = t.enInd;
        ch.expectedOutcomes.social.en = t.enSoc;
    }
    return ch;
});

const newChaptersString = JSON.stringify(updatedChapters, null, 2);
content = content.replace(chaptersMatch[1], newChaptersString);

fs.writeFileSync(src, content, 'utf8');
console.log("Applied absolute EN/BN translations for chapters 11-20");
