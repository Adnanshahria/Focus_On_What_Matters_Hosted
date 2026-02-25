// Focus on What Matters - Complete Chapter Data
// Generated: 2025-12-10T08:58:38.587Z
// Chapters: 83 | Quotes: 180 | Insights: 358

export interface TranslatedString {
  en: string;
  bn: string;
}

export interface Chapter {
  id: number;
  sectionTitle: TranslatedString;
  chapterTitle: TranslatedString;
  goldenQuotes: { quote: TranslatedString; author: TranslatedString }[];
  coreInsights: { title: TranslatedString; content: TranslatedString }[];
  practicalApplication: TranslatedString;
  criticalReflection: TranslatedString;
  expectedOutcomes: { individual: TranslatedString; social: TranslatedString };
}

export interface Section {
  id: number;
  title: string;
  titleBengali: string;
  chapters: number[];
}

export const sections: Section[] = [
  { id: 1, title: "The Inner World", titleBengali: "অভ্যন্তরীণ জগৎ", chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] },
  { id: 2, title: "The Outer World", titleBengali: "বহির্জগৎ", chapters: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83] }
];

export const chapters: Chapter[] = [
  {
    "id": 1,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Foundation of Inner Stability",
      "bn": "অভ্যন্তরীণ স্থিতিশীলতার ভিত্তি"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "All improvement starts within.",
          "bn": "সমস্ত উন্নতি ভেতর থেকে শুরু হয়।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "We can’t be happy and comfortable in the world if we are not the same in our minds.",
          "bn": "আমরা যদি মানসিকভাবে শান্ত না থাকি, তবে পৃথিবীতে সুখী হতে পারববিধা।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "With Stoic wisdom, we can guard our minds against the things that disrupt our happiness.",
          "bn": "স্টয়িক দর্শনের সাহায্যে আমরা আমাদের মনকে রক্ষ করতে পারি।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "A strong mind is a peaceful mind.",
          "bn": "একটি শক্তিশালী মন একটি শান্ত মন।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "The Importance of Inner Improvement",
          "bn": "অভ্যন্তরীণ উন্নতির গুরুত্ব"
        },
        "content": {
          "en": "Before changing the external world, it is essential to improve your own mental state. Without a stable mind, external happiness is never long-lasting.",
          "bn": "বাহ্যিক জগৎ পরিবর্তনের আগে নিজের মানসিক অবস্থার উন্নতি করা অপরিহার্য। মন স্থিতিশীল না হলে বাইরের সুখ দীর্ঘস্থায়ী হয় না।"
        }
      },
      {
        "title": {
          "en": "The Shield of Stoic Philosophy",
          "bn": "স্টয়িক দর্শনের ঢাল"
        },
        "content": {
          "en": "Stoic philosophy acts as a protective shield for our minds, guarding our happiness from external chaos.",
          "bn": "স্টয়িক দর্শন আমাদের মনের জন্য একটি সুরক্ষা কবচ হিসেবে কাজ করে, যা বাহ্যিক বিশৃঙ্খলা থেকে আমাদের সুখকে রক্ষা করে।"
        }
      },
      {
        "title": {
          "en": "Mental Resilience",
          "bn": "মানসিক স্থিতিস্থাপকতা (Resilience)"
        },
        "content": {
          "en": "A strong and resilient mind is the true source of peace; regardless of external circumstances, it is possible to maintain inner peace.",
          "bn": "একটি শক্তিশালী এবং স্থিতিস্থাপক মনই প্রকৃত শান্তির উৎস; বাইরের পরিস্থিতি যাই হোক না কেন, মনের শান্তি ধরে রাখা সম্ভব।"
        }
      },
      {
        "title": {
          "en": "Mind and World Connection",
          "bn": "মন ও জগতের সংযোগ"
        },
        "content": {
          "en": "Our state of mind directly impacts our external experience.",
          "bn": "আমাদের মনের অবস্থা সরাসরি আমাদের বাহ্যিক অভিজ্ঞতার ওপর প্রভাব ফেলে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Take 5 minutes every morning to observe your mental state. If an external event (like traffic or bad weather) ruins your mood, remind yourself that while you cannot control external events, you can control your reaction. Repeat the mantra 'I will stay calm' in your mind.",
      "bn": "প্রতিদিন সকালে ঘুম থেকে ওঠার পর ৫ মিনিট সময় নিন নিজের মানসিক অবস্থা পর্যবেক্ষণ করার জন্য। যদি কোনো বাহ্যিক ঘটনা (যেমন ট্রাফিক বা খারাপ আবহাওয়া) আপনার মেজাজ খারাপ করে, তবে নিজেকে মনে করিয়ে দিন যে বাইরের ঘটনা নিয়ন্ত্রণ করা সম্ভব নয়, কিন্তু নিজের প্রতিক্রিয়া নিয়ন্ত্রণ করা সম্ভব। \"আমি শান্ত থাকব\"—এই মন্ত্রটি মনে মনে জপ করুন।"
    },
    "criticalReflection": {
      "en": "This chapter suggests happiness is almost entirely an internal matter. While empowering, this view risks downplaying the impact of severe external pressures like systemic poverty, trauma, or oppression. Socially, placing the entire burden of well-being on an individual's 'strong mind' can lead to victim-blaming, ignoring environmental factors that disrupt mental peace.",
      "bn": "এই অধ্যায়টি ধারণা দেয় যে সুখ প্রায় সম্পূর্ণই একটি অভ্যন্তরীণ বিষয়। যদিও এটি ক্ষমতায়ন করে, তবে এই দৃষ্টিভঙ্গি পদ্ধতিগত দারিদ্র্য, ট্রমা বা নিপীড়নের মতো তীব্র বাহ্যিক চাপের প্রভাবকে ছোট করে দেখার ঝুঁকি তৈরি করে। সামাজিকভাবে, সুস্থতার পুরো দায়ভার ব্যক্তির \"শক্তিশালী মনের\" ওপর চাপালে তা ভিক্টিম-ব্লেমিং বা নির্যাতিতকেই দোষারোপ করার দিকে নিয়ে যেতে পারে, যা মানসিক শান্তি বিঘ্নিতকারী পরিবেশগত কারণগুলোকে উপেক্ষা করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Improved emotional regulation and significantly reduced reactivity to daily annoyances.",
        "bn": "আবেগ নিয়ন্ত্রণে উন্নতি এবং দৈনন্দিন বিরক্তির প্রতি প্রতিক্রিয়াশীলতা উল্লেখযোগ্যভাবে হ্রাস।"
      },
      "social": {
        "en": "Calmer behavior in social interactions, which can reduce interpersonal conflict, but might lead to apathy towards social injustice if over-detached from 'external' problems.",
        "bn": "সামাজিক মিথস্ক্রিয়ায় আরও শান্ত আচরণ, যা আন্তঃব্যক্তিগত সংঘাত কমাতে পারে, তবে \"বাহ্যিক\" সমস্যা থেকে অতিরিক্ত বিচ্ছিন্ন হয়ে পড়লে সামাজিক অন্যায়ের প্রতি নিষ্ক্রিয়তা তৈরি হতে পারে।"
      }
    }
  },
  {
    "id": 2,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Harnessing the Divine Power Within",
      "bn": "অন্তরের ঐশ্বরিক শক্তিকে কাজে লাগানো"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Understand at last that you have something in you more powerful and divine than what causes the bodily passions and pulls you like a mere puppet.",
          "bn": "অবশেষে বুঝতে শিখুন যে আপনার ভেতরে শারীরিক আবেগের চেয়ে আরও শক্তিশালী এবং ঐশ্বরিক কিছু রয়েছে, যা আপনাকে নিছক পুতুলের মতো টানে।"
        },
        "author": {
          "en": "Marcus Aurelius",
          "bn": "মার্কাস অরেলিয়াস"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Control over Emotions",
          "bn": "আবেগের ওপর নিয়ন্ত্রণ"
        },
        "content": {
          "en": "There is a power within us that is more powerful than our physical emotions or passions.",
          "bn": "আমাদের ভেতরে এমন একটি শক্তি আছে যা আমাদের শারীরিক আবেগ বা উত্তেজনার চেয়েও বেশি শক্তিশালী।"
        }
      },
      {
        "title": {
          "en": "The Puppet Metaphor",
          "bn": "পুতুল নাচের উপমা"
        },
        "content": {
          "en": "We are often driven by emotions, like puppets tied to strings. This chapter calls for us to break those strings.",
          "bn": "আমরা প্রায়শই আবেগের দ্বারা চালিত হই, যেন আমরা সুতোয় বাঁধা পুতুল। এই অধ্যায় আমাদের সেই সুতো ছিড়ে ফেলার আহ্বান জানায়।"
        }
      },
      {
        "title": {
          "en": "Rationality vs. Emotion",
          "bn": "যৌক্তিকতা বনাম আবেগ"
        },
        "content": {
          "en": "To acquire the ability to judge a situation through reasoning rather than yielding to immediate emotions.",
          "bn": "তাৎক্ষণিক আবেগের বশবর্তী না হয়ে যুক্তির মাধ্যমে পরিস্থিতি বিচার করার ক্ষমতা অর্জন করা।"
        }
      },
      {
        "title": {
          "en": "Self-Awareness",
          "bn": "আত্ম-সচেতনতা"
        },
        "content": {
          "en": "Recognizing the 'divine' or noble self within us, which separates us from animalistic instincts.",
          "bn": "নিজের ভেতরের \"divine\" বা মহৎ সত্তাটিকে চিনে নেওয়া, যা আমাদের পশুসুলভ প্রবৃত্তি থেকে আলাদা করে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Whenever you feel very angry or afraid, do not react immediately. Hit the 'pause button'. Ask yourself: 'Am I acting like a puppet tied to the strings of emotion right now?' Take a deep breath and think what your 'Higher Self' would do in this situation. Then act calmly.",
      "bn": "যখনই খুব রাগ বা ভয় অনুভব করবেন, তাৎক্ষণিকভাবে কোনো প্রতিক্রিয়া দেখাবেন না। \"পজ বাটন\" চাপুন। নিজেকে প্রশ্ন করুন: \"আমি কি এখন আবেগের সুতোয় বাঁধা পুতুলের মতো আচরণ করছি?\" গভীরভাবে শ্বাস নিন এবং ভাবুন আপনার \"উচ্চতর সত্তা\" (Higher Self) এই পরিস্থিতিতে কী করত। তারপর ধীরস্থিরে কাজ করুন।"
    },
    "criticalReflection": {
      "en": "Viewing emotions as 'puppet strings' creates a division between reason (good) and emotion (bad). Modern psychology says emotions are not just obstacles but important signals. Suppressing emotions to reach a 'divine' level can create emotional numbness or alexithymia (inability to understand emotions). Socially, this Stoic suppression is often associated with 'toxic masculinity', where expressing vulnerability is seen as weakness.",
      "bn": "আবেগকে \"পুতুল নাচের সুতো\" হিসেবে দেখা যুক্তি (ভালো) এবং আবেগের (খারাপ) মধ্যে একটি বিভাজন তৈরি করে। আধুনিক মনোবিজ্ঞান বলে, আবেগ কেবল জয়ের বাধাই নয়, বরং গুরুত্বপূর্ণ সংকেত। \"ঐশ্বরিক\" স্তরে পৌঁছানোর জন্য আবেগকে দমন করা মানসিক অসাড়তা বা অ্যালেক্সিথাইমিয়া (আবেগ বুঝতে না পারা) তৈরি করতে পারে। সামাজিকভাবে, এই স্টয়িক অবদমন প্রায়ই \"টক্সিক ম্যাসকুলিনিটি\"-র সাথে যুক্ত, যেখানে দুর্বলতা প্রকাশকে দুর্বলতা হিসেবে দেখা হয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Creating a 'pause' between stimulus and response, which helps in making more intelligent decisions.",
        "bn": "উদ্দীপনা এবং প্রতিক্রিয়ার মাঝখানে একটি \"বিরতি বা পজ\" তৈরি করা, যা আরও বুদ্ধিদীপ্ত সিদ্ধান্তে সহায়ক।"
      },
      "social": {
        "en": "Individuals become less volatile and more reliable, increasing team stability. However, they may seem emotionless to loved ones expecting empathy.",
        "bn": "ব্যক্তিরা কম অস্থির এবং আরও নির্ভরযোগ্য হয়ে ওঠে, যা দলের স্থিতিশীলতা বাড়ায়। তবে সহমর্মিতা প্রত্যাশী প্রিয়জনদের কাছে তাদের আবেগহীন মনে হতে পারে।"
      }
    }
  },
  {
    "id": 3,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Dichotomy of Control",
      "bn": "নিয়ন্ত্রণের দ্বৈত নীতি"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "It’s so important to only focus on what you control.",
          "bn": "যা আপনার নিয়ন্ত্রণে আছে, শুধু তার ওপরই মন দেওয়া অত্যন্ত জরুরি।"
        },
        "author": {
          "en": "Epictetus",
          "bn": "এপিক্টেটাস"
        }
      },
      {
        "quote": {
          "en": "Time is your most valuable resource.",
          "bn": "সময় আপনার সবচেয়ে মূল্যবান সম্পদ।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "Without accepting that we don’t control most things in life, we can never have lasting happiness.",
          "bn": "জীবনের অধিকাংশ জিনিসই আমাদের নিয়ন্ত্রণে নেই—এ কথা মেনে না নিলে আমরা কখনোই দীর্ঘস্থায়ী সুখ পাব না।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "What actually matters to your happiness? Good friendships, work that you enjoy, reading books that make you think, walking in nature, working out, watching a good movie — you know this.",
          "bn": "আপনার সুখের জন্য আসলে কী গুরুত্বপূর্ণ? ভালো বন্ধুত্ব, যে কাজ আপনি উপভোগ করেন, চিন্তায় ফেলে এমন বই পড়া, প্রকৃতির মাঝে হাঁটা, ব্যায়াম করা, ভালো কোনো সিনেমা দেখা — এগুলো তো আপনি জানেনই।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Boundaries of Control",
          "bn": "নিয়ন্ত্রণের সীমানা"
        },
        "content": {
          "en": "Most things in life are beyond our control; only our thoughts and actions are within our control. Accepting this is the key to happiness.",
          "bn": "জীবনের অধিকাংশ বিষয়ই আমাদের নিয়ন্ত্রণের বাইরে; কেবল আমাদের চিন্তা ও কর্ম আমাদের নিয়ন্ত্রণে। এটি মেনে নেওয়াই সুখের চাবিকাঠি।"
        }
      },
      {
        "title": {
          "en": "Proper Use of Time",
          "bn": "সময়ের সঠিক ব্যবহার"
        },
        "content": {
          "en": "Thinking about uncontrollable things is a waste of time. Time is the most valuable resource, so it should not be spent on worrying.",
          "bn": "অনিয়ন্ত্রিত বিষয়ে চিন্তা করা মানেই সময়ের অপচয়। সময় সবচেয়ে মূল্যবান সম্পদ, তাই তা দুশ্চিন্তায় ব্যয় করা উচিত নয়।"
        }
      },
      {
        "title": {
          "en": "Indifference to Trivial Matters",
          "bn": "তুচ্ছ বিষয়ে উদাসীনতা"
        },
        "content": {
          "en": "It is essential for mental peace to remain indifferent to national or international crises that we cannot solve.",
          "bn": "জাতীয় বা আন্তর্জাতিক যেসব সংকট আমরা সমাধান করতে পারব না, সেগুলোর প্রতি উদাসীন থাকা মানসিক শান্তির জন্য জরুরি।"
        }
      },
      {
        "title": {
          "en": "Sources of Happiness",
          "bn": "সুখের উৎস"
        },
        "content": {
          "en": "True happiness comes from simple things—like good friendship, meaningful work, or walking in nature.",
          "bn": "প্রকৃত সুখ ছোট ছোট বিষয়—যেমন ভালো বন্ধুত্ব, অর্থবহ কাজ বা প্রকৃতির মাঝে হাঁটা—থেকে আসে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Create two columns on a piece of paper. On the left side, write 'Within my control' (e.g., my effort, my honesty) and on the right side, write 'Not in my control' (e.g., others' opinions, weather, traffic). Whenever you worry about something, see which column it falls into. Stop thinking about the things in the right column immediately.",
      "bn": "একটি কাগজে দুটি কলাম তৈরি করুন। বাম পাশে লিখুন \"আমার নিয়ন্ত্রণে আছে\" (যেমন: আমার চেষ্টা, আমার সততা) এবং ডান পাশে লিখুন \"আমার নিয়ন্ত্রণে নেই\" (যেমন: অন্যের মতামত, আবহাওয়া, ট্রাফিক)। যখনই কোনো বিষয়ে চিন্তা হবে, দেখুন সেটি কোন কলামে পড়ে। ডান পাশের কলামের বিষয়গুলো নিয়ে ভাবা এখনই বন্ধ করুন।"
    },
    "criticalReflection": {
      "en": "The advice to practice 'indifference' towards national or international crises can lead to political apathy. While excellent for personal peace, when applied collectively, it can undermine civic duties and social responsibilities. A society where everyone is only concerned with their own sphere might fail to address systemic issues like climate change or inequality.",
      "bn": "জাতীয় বা আন্তর্জাতিক সংকটের প্রতি \"উদাসীনতা\" চর্চার পরামর্শ রাজনৈতিক নিষ্ক্রিয়তা তৈরি করতে পারে। ব্যক্তিগত শান্তির জন্য এটি চমৎকার হলেও, সমষ্টিগতভাবে প্রয়োগ করলে এটি নাগরিক দায়িত্ব এবং সামাজিক দায়বদ্ধতা ক্ষুণ্ণ করতে পারে। এমন একটি সমাজ যেখানে সবাই কেবল নিজের গণ্ডি নিয়ে ব্যস্ত, তারা জলবায়ু পরিবর্তন বা অসমতার মতো পদ্ধতিগত সমস্যাগুলো সমাধানে ব্যর্থ হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "An immediate reduction in anxiety levels and increased productivity towards personal goals.",
        "bn": "উদ্বেগ স্তরে তাৎক্ষণিক হ্রাস এবং ব্যক্তিগত লক্ষ্যের প্রতি উৎপাদনশীলতা বৃদ্ধি।"
      },
      "social": {
        "en": "Potential decrease in civic activism, but immediate communities (family/friends) can become stronger and more supportive.",
        "bn": "নাগরিক সক্রিয়তা কমে যাওয়ার সম্ভাবনা, তবে তাৎক্ষণিক কমিউনিটি (পরিবার/বন্ধু) আরও শক্তিশালী ও সহায়ক হয়ে উঠতে পারে।"
      }
    }
  },
  {
    "id": 4,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Emotional Boundaries and Autonomy",
      "bn": "আবেগীয় সীমানা এবং স্বায়ত্তশাসন"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "When we decide to change our view of the world, it’s an internal decision.",
          "bn": "আমরা যখন পৃথিবী সম্পর্কে আমাদের দৃষ্টিভঙ্গি পরিবর্তনের সিদ্ধান্ত নিই, তখন এটি একটি অভ্যন্তরীণ সিদ্ধান্ত হয়।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "That’s how you protect your mood: By not feeling responsible for how others feel.",
          "bn": "অন্যরা কেমন অনুভব করছে তার জন্য নিজেকে দায়ী না ভেবে আপনি এভাবেই আপনার মেজাজ রক্ষা করতে পারেন।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Emotional Contagion",
          "bn": "আবেগের সংক্রমণ"
        },
        "content": {
          "en": "Others' negative emotions can influence us unknowingly; this is called 'Emotional Contagion'.",
          "bn": "অন্যের নেতিবাচক আবেগ আমাদের অজান্তেই প্রভাবিত করতে পারে; একে বলা হয় \"Emotional Contagion\"।"
        }
      },
      {
        "title": {
          "en": "Empathy vs. Internalization",
          "bn": "সহমর্মিতা বনাম আত্মীকরণ"
        },
        "content": {
          "en": "It is good to be empathetic to others' pain, but that pain should not be internalized within oneself.",
          "bn": "অন্যের দুঃখে সহমর্মী হওয়া ভালো, কিন্তু সেই দুঃখ নিজের ভেতরে ধারণ করা উচিত নয়।"
        }
      },
      {
        "title": {
          "en": "Boundaries of Responsibility",
          "bn": "দায়িত্বের সীমারেখা"
        },
        "content": {
          "en": "You are not responsible for others' feelings. You can help someone, but taking the burden of their well-being will destroy your own peace.",
          "bn": "অন্যের অনুভূতির দায়িত্ব আপনার নয়। আপনি কাউকে সাহায্য করতে পারেন, কিন্তু তাদের ভালো রাখার দায়িত্ব কাঁধে নিলে নিজের শান্তি নষ্ট হবে।"
        }
      },
      {
        "title": {
          "en": "Internal Decision",
          "bn": "অভ্যন্তরীণ সিদ্ধান্ত"
        },
        "content": {
          "en": "How we view the world depends entirely on our own internal decisions.",
          "bn": "বিশ্বকে কীভাবে দেখব, তা সম্পূর্ণ আমাদের নিজস্ব অভ্যন্তরীণ সিদ্ধান্তের ওপর নির্ভরশীল।"
        }
      }
    ],
    "practicalApplication": {
      "en": "If a friend or colleague constantly talks negatively, imagine a 'Mental Shield'. Listen to them, but imagine their words bouncing off your shield. Tell yourself inwardly, 'I sympathize with your pain, but this pain is not mine.' After the discussion, quickly move your focus to something you enjoy.",
      "bn": "যদি কোনো বন্ধু বা সহকর্মী ক্রমাগত নেতিবাচক কথা বলে, তবে \"Mental Shield\" বা মানসিক ঢাল কল্পনা করুন। তাদের কথা শুনুন, কিন্তু ভাবুন যে সেই কথাগুলো আপনার ঢালে ধাক্কা খেয়ে ফিরে যাচ্ছে। মনে মনে বলুন, \"আমি তোমার কষ্টে সমব্যথী, কিন্তু এই কষ্ট আমার নয়।\" আলোচনা শেষে দ্রুত নিজের পছন্দের কোনো কাজে মন দিন।"
    },
    "criticalReflection": {
      "en": "While the distinction between empathy and internalizing others' pain is clinically sound, the instruction 'not to be responsible for others' feelings' can create barriers to deep intimacy. In close relationships (partners, parents), emotional regulation is often mutual. Strictly following this rule can make someone appear cruel or unfeeling, destroying trust in vulnerable moments.",
      "bn": "সহমর্মিতা এবং অন্যের কষ্ট নিজের মধ্যে ধারণ করার মধ্যে পার্থক্যটি ক্লিনিক্যালি সঠিক, তবে \"অন্যের অনুভূতির জন্য দায়ী না হওয়া\"-র নির্দেশ গভীর ঘনিষ্ঠতায় বাধা সৃষ্টি করতে পারে। ঘনিষ্ঠ সম্পর্কে (সঙ্গী, পিতামাতা) আবেগীয় নিয়ন্ত্রণ প্রায়ই পারস্পরিক। এই নিয়ম কঠোরভাবে পালন করলে কাউকে নিষ্ঠুর বা অনুভূতিহীন মনে হতে পারে, যা দুর্বল মুহূর্তগুলোতে বিশ্বাস নষ্ট করতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Conservation of emotional energy and prevention of 'empathy burnout'.",
        "bn": "আবেগীয় শক্তি সংরক্ষণ এবং \"এমপ্যাথি বার্নআউট\" প্রতিরোধ।"
      },
      "social": {
        "en": "Creating healthy boundaries in toxic relationships, though it may cause friction in relationships that require deep emotional connection.",
        "bn": "বিষাক্ত সম্পর্কে স্বাস্থ্যকর সীমানা তৈরি, তবে গভীর আবেগীয় সংযোগ প্রয়োজন এমন সম্পর্কে টানাপোড়েন সৃষ্টি হতে পারে।"
      }
    }
  },
  {
    "id": 5,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Knowledge as Fuel",
      "bn": "জ্বালানি হিসেবে জ্ঞান"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "When you’re lost, unfocused, or lacking motivation, grab a book about a topic you’re interested in.",
          "bn": "যখন আপনি বিভ্রান্ত হন, মনোযোগ হারিয়ে ফেলেন, বা প্রেরণার অভাব হয়, তখন আপনার আগ্রহের কোনো বিষয়ে একটি বই হাতে নিন।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "If you don’t have a higher purpose, you can make the pursuit of knowledge your purpose.",
          "bn": "আপনার যদি উচ্চতর কোনো উদ্দেশ্য না থাকে, তবে জ্ঞান অর্জনকেই আপনার উদ্দেশ্য বানাতে পারেন।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      },
      {
        "quote": {
          "en": "Effort nourishes noble spirits.",
          "bn": "সৎ প্রচেষ্টা মহৎ আত্মাকে পুষ্ট করে।"
        },
        "author": {
          "en": "Seneca",
          "bn": "সেনেকা"
        }
      },
      {
        "quote": {
          "en": "When you keep learning, you will never be unmotivated for longer than a few days.",
          "bn": "যখন আপনি শেখা চালিয়ে যাবেন, তখন কয়েক দিনের বেশি সময় আপনি কখনোই প্রেষণাহীন থাকবেন না।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Knowledge is Power",
          "bn": "জ্ঞানই শক্তি"
        },
        "content": {
          "en": "When no goal can be found in life, learning something new can be the motivation to live.",
          "bn": "যখন জীবনে কোনো লক্ষ্য খুঁজে পাওয়া যায় না, তখন নতুন কিছু শেখাই হতে পারে বাঁচার প্রেরণা।"
        }
      },
      {
        "title": {
          "en": "Use of Curiosity",
          "bn": "কৌতূহলের ব্যবহার"
        },
        "content": {
          "en": "Studying topics of interest (like history, stock market, or writing) brings back lost focus.",
          "bn": "নিজের আগ্রহের বিষয় (যেমন ইতিহাস, স্টক মার্কেট বা লেখালেখি) নিয়ে পড়াশোনা করলে হারানো মনোযোগ ফিরে আসে।"
        }
      },
      {
        "title": {
          "en": "Dignity of Effort",
          "bn": "প্রচেষ্টার মর্যাদা"
        },
        "content": {
          "en": "According to Seneca, honest effort and labor nourish the noble soul. Whatever the outcome, the effort itself is a joy.",
          "bn": "সেনেকার মতে, সৎ প্রচেষ্টা এবং শ্রম মহৎ আত্মাকে পুষ্ট করে। ফলাফল যা-ই হোক, প্রচেষ্টাই আনন্দ।"
        }
      },
      {
        "title": {
          "en": "Continuous Learning",
          "bn": "ধারাবাহিক শিক্ষা"
        },
        "content": {
          "en": "Being in a process of continuous learning prevents long-term depression or demotivation from taking over.",
          "bn": "ক্রমাগত শেখার প্রক্রিয়ার মধ্যে থাকলে দীর্ঘস্থায়ী হতাশা বা demotivation গ্রাস করতে পারে না।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Whenever you feel lazy or depressed, pick up a book instead of scrolling through social media. Read simply out of curiosity, not for a specific goal. Decide today that you will read at least 10 pages every day for the next week. Take small steps to learn a new skill (like coding or a new language).",
      "bn": "যখনই অলসতা বা হতাশা অনুভব করবেন, সোশ্যাল মিডিয়া স্ক্রল না করে একটি বই হাতে নিন। কোনো নির্দিষ্ট লক্ষ্যের জন্য নয়, কেবল জানার আগ্রহ থেকে পড়ুন। আজই ঠিক করুন, আগামী এক সপ্তাহ প্রতিদিন অন্তত ১০ পৃষ্ঠা পড়বেন। নতুন কোনো দক্ষতা (যেমন কোডিং বা নতুন ভাষা) শেখার ছোট পদক্ষেপ নিন।"
    },
    "criticalReflection": {
      "en": "This chapter intellectualizes motivation, assuming that 'knowledge' is a universal cure for laziness. For those suffering from clinical depression or burnout, simply 'picking up a book' is not possible and can induce guilt. Moreover, an obsession with continuous learning can lead to 'Productive Procrastination', where people keep consuming information just to avoid taking action in the real world.",
      "bn": "এই অধ্যায়টি মোটিভেশন বা প্রেষণাকে বুদ্ধিবৃত্তিক করে তোলে, ধরে নেয় যে \"জ্ঞান\" হলো অলসতার সর্বজনীন ওষুধ। যারা ক্লিনিক্যাল ডিপ্রেশন বা বার্নআউটে ভুগছেন, তাদের জন্য কেবল \"বই হাতে নেওয়া\" সম্ভব নয় এবং এটি অপরাধবোধ তৈরি করতে পারে। তাছাড়া, ক্রমাগত শেখার প্রতি এই মোহ \"Productive Procrastination\" বা উৎপাদনশীল অলসতা তৈরি করতে পারে, যেখানে মানুষ বাস্তব জগতে কাজ করা এড়াতে কেবল তথ্য গ্রহণ করতেই থাকে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "A sharp mind, diverse skills, and a reliable method to regain momentum during stagnant times.",
        "bn": "একটি তীক্ষ্ণ মন, বৈচিত্র্যময় দক্ষতা এবং স্থবির সময়ে গতি ফিরিয়ে আনার একটি নির্ভরযোগ্য পদ্ধতি।"
      },
      "social": {
        "en": "A more aware and intellectually curious society, but focusing solely on theory without implementation can render it ineffective.",
        "bn": "একটি আরও সচেতন এবং বুদ্ধিবৃত্তিকভাবে কৌতূহলী সমাজ, তবে বাস্তবায়ন ছাড়া কেবল তত্ত্বের ওপর গুরুত্ব দিলে তা অকার্যকর হতে পারে।"
      }
    }
  },
  {
    "id": 6,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Normalizing and Detaching form Anxiety",
      "bn": "উদ্বেগকে স্বাভাবিক করা এবং তা থেকে নিজেকে বিচ্ছিন্ন রাখা"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "If you want to make progress, stop feeling anxious about things.",
          "bn": "আপনি যদি উন্নতি করতে চান, তবে বিষয়গুলো নিয়ে উদ্বিগ্ন হওয়া বন্ধ করুন।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "You can’t make people like you",
          "bn": "আপনি মানুষকে দিয়ে নিজেকে জোর করে পছন্দ করাতে পারবেন না"
        },
        "author": {
          "en": "and that’s fine.",
          "bn": "এবং সেটা ঠিক আছে।"
        }
      },
      {
        "quote": {
          "en": "When you choose not to be anxious, you do it in spite of your unfulfilled expectations.",
          "bn": "যখন আপনি উদ্বিগ্ন না হওয়ার সিদ্ধান্ত নেন, তখন আপনার অপূর্ণ প্রত্যাশা সত্ত্বেও আপনি এই সিদ্ধান্তটি প্রয়োগ করেন।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "Nothing is worth giving up your peace of mind for.",
          "bn": "মানসিক শান্তি বিসর্জন দেওয়ার মতো মূল্যবান কিছুই নেই।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Normalcy of Anxiety",
          "bn": "উদ্বেগের স্বাভাবিকতা"
        },
        "content": {
          "en": "Just as hunger is a signal of the body, anxiety is a signal of the mind. It must be accepted as a normal part of life.",
          "bn": "ক্ষুধা যেমন শরীরের একটি সংকেত, উদ্বেগও মনের একটি সংকেত। একে জীবনের স্বাভাবিক অংশ হিসেবে মেনে নিতে হবে।"
        }
      },
      {
        "title": {
          "en": "Expectation vs. Reality",
          "bn": "প্রত্যাশা বনাম বাস্তবতা"
        },
        "content": {
          "en": "The main cause of our anxiety or worry is our unrealistic expectations. We want everyone to like us, which is impossible.",
          "bn": "আমাদের উদ্বেগ বা দুশ্চিন্তার মূল কারণ হলো আমাদের অবাস্তব প্রত্যাশা। আমরা চাই সবাই আমাদের পছন্দ করুক, যা অসম্ভব।"
        }
      },
      {
        "title": {
          "en": "Detachment from Outcomes",
          "bn": "ফলাফল থেকে বিচ্ছিন্নতা (Detachment)"
        },
        "content": {
          "en": "We must learn to be indifferent to results without worrying about the outcome of actions or others' opinions.",
          "bn": "কর্মফল বা অন্যের মতামত নিয়ে দুশ্চিন্তা না করে ফলাফলের প্রতি নির্লিপ্ত হওয়া শিখতে হবে।"
        }
      },
      {
        "title": {
          "en": "Prioritizing Peace of Mind",
          "bn": "মনের শান্তির অগ্রাধিকার"
        },
        "content": {
          "en": "No job, relationship, or opportunity is more valuable than your peace of mind.",
          "bn": "কোনো চাকরি, সম্পর্ক বা সুযোগই আপনার মানসিক শান্তির চেয়ে মূল্যবান নয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Whenever you feel anxious, tell yourself, 'This worry won't solve my problem.' Ask yourself, 'What is the worst that could happen?' and mentally prepare for it. Then let go of the hope for a specific outcome and focus on the task at hand. Remember, people have the right to dislike you, and that doesn't affect you.",
      "bn": "যখনই দুশ্চিন্তা হবে, নিজেকে বলুন, \"এই দুশ্চিন্তা আমার সমস্যার সমাধান করবে না।\" নিজেকে প্রশ্ন করুন, \"সবচেয়ে খারাপ কী হতে পারে?\" এবং সেটার জন্য মানসিকভাবে প্রস্তুত হোন। এরপর ফলাফলের আশা ছেড়ে দিয়ে বর্তমান কাজের ওপর মনোযোগ দিন। মনে রাখুন, মানুষের অপছন্দ করার অধিকার আছে, এবং তাতে আপনার কিছু যায় আসে না।"
    },
    "criticalReflection": {
      "en": "'Decide not to worry'—this advice risks oversimplifying anxiety disorders. While Cognitive Reframing (CBT) is an effective therapy, telling someone with a disorder to simply choose peace can be dismissive. Furthermore, complete detachment from outcomes can sometimes diminish ambition, as worrying about the future often fuels preparation and excellence.",
      "bn": "\"উদ্বেগ না করার সিদ্ধান্ত নিন\"—এই পরামর্শটি অ্যাংজাইটি ডিসঅর্ডারকে অতিরিক্ত সহজ করে দেখার ঝুঁকি তৈরি করে। যদিও কগনিটিভ রিফ্রেমিং (CBT) একটি কার্যকর থেরাপি, তবুও ডিসঅর্ডারে ভোগা কাউকে কেবল শান্তি বেছে নিতে বলা অবজ্ঞাসূচক হতে পারে। তাছাড়া, ফলাফল থেকে সম্পূর্ণ বিচ্ছিন্নতা কখনও কখনও উচ্চাকাঙ্ক্ষা কমিয়ে দিতে পারে, কারণ ভবিষ্যতের দুশ্চিন্তাই অনেক সময় প্রস্তুতি এবং শ্রেষ্ঠত্বের জ্বালানি হিসেবে কাজ করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Significant reduction in social anxiety and fear of failure; increased ability to take risks.",
        "bn": "সামাজিক উদ্বেগ এবং ব্যর্থতার ভয় উল্লেখযোগ্যভাবে হ্রাস; ঝুঁকি নেওয়ার ক্ষমতা বৃদ্ধি।"
      },
      "social": {
        "en": "A culture that values authenticity over people-pleasing, though it may reduce motivation driven by fear (often utilized by corporations).",
        "bn": "এমন একটি সংস্কৃতি যা তোষামোদের চেয়ে খাঁটি থাকাকে মূল্য দেয়, তবে এটি ভয়ের মাধ্যমে চালিত মোটিভেশন (যা কর্পোরেশনগুলো প্রায়ই ব্যবহার করে) কমিয়ে দিতে পারে।"
      }
    }
  },
  {
    "id": 7,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Fortress of Zero Expectations",
      "bn": "শূন্য প্রত্যাশার দুর্গ"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "You are being foolish if you expect your children, spouse, or friends to live forever... It is equally naïve to expect everyone will be honest.",
          "bn": "আপনি বোকামি করছেন যদি প্রত্যাশা করেন যে আপনার সন্তান, পত্নী বা বন্ধু চিরকাল বেঁচে থাকবে... একইভাবে সবাই সৎ হবে—এমনটা প্রত্যাশা করাও বোকামি।"
        },
        "author": {
          "en": "Epictetus",
          "bn": "এপিক্টেটাস"
        }
      },
      {
        "quote": {
          "en": "To avoid disappointment, I kept focusing on what I control: My actions and belief in the book.",
          "bn": "হতাশা এড়াতে, আমি যা নিয়ন্ত্রণ করতে পারি কেবল তাতেই মনোযোগ দিয়েছি: আমার নিজের কাজ এবং বইটির প্রতি আমার বিশ্বাস।"
        },
        "author": {
          "en": "Darius Foroux",
          "bn": "দারিয়াস ফোরক্স"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Expectation is the Root of Sorrow",
          "bn": "প্রত্যাশাই দুঃখের মূল"
        },
        "content": {
          "en": "When we expect specific behaviors from others (like honesty or eternal companionship), we sow the seeds of disappointment.",
          "bn": "আমরা যখন অন্যের কাছ থেকে নির্দিষ্ট আচরণের আশা করি (যেমন সততা বা চিরস্থায়ী সঙ্গ), তখনই হতাশার বীজ রোপণ করি।"
        }
      },
      {
        "title": {
          "en": "Control vs. Outcome",
          "bn": "নিয়ন্ত্রণ বনাম ফলাফল"
        },
        "content": {
          "en": "Using the author's book publishing example, it emphasizes focusing on the process of work rather than the result.",
          "bn": "লেখকের বই প্রকাশের উদাহরণ দিয়ে বলা হয়েছে, কাজের ফলাফলের চেয়ে কাজের প্রক্রিয়ায় ফোকাস করা জরুরি।"
        }
      },
      {
        "title": {
          "en": "Realistic Perspective",
          "bn": "বাস্তববাদী দৃষ্টিভঙ্গি"
        },
        "content": {
          "en": "Accepting the truth that people make mistakes and life is mortal reduces suffering.",
          "bn": "মানুষ ভুল করবে এবং জীবন নশ্বর—এই সত্য মেনে নিলে কষ্ট কমে যায়।"
        }
      },
      {
        "title": {
          "en": "Stoic Protection",
          "bn": "স্টয়িক সুরক্ষা"
        },
        "content": {
          "en": "Developing a mindset of 'Low Expectations' to avoid long-term disappointment.",
          "bn": "দীর্ঘমেয়াদী হতাশা থেকে বাঁচতে 'Low Expectations' বা কম প্রত্যাশা রাখার মানসিকতা তৈরি করা।"
        }
      }
    ],
    "practicalApplication": {
      "en": "In any project or relationship, tell yourself, 'I will give my best, but the result is out of my hands.' If someone treats you badly, instead of being surprised, think that this might just be their nature. Don't take it personally.",
      "bn": "কোনো প্রজেক্ট বা সম্পর্কের ক্ষেত্রে নিজেকে বলুন, \"আমি আমার সেরাটা দেব, কিন্তু ফলাফল আমার হাতে নেই।\" যদি কেউ আপনার সাথে খারাপ ব্যবহার করে, তবে অবাক না হয়ে ভাবুন এটিই তাদের স্বভাব হতে পারে। একে ব্যক্তিগতভাবে নেবেন না।"
    },
    "criticalReflection": {
      "en": "While effective for personal resilience, completely stripping expectations from relationships can come across as emotional unavailability. Socially, if everyone maintains 'zero expectations' of others, it could undermine social accountability and the mutual standards necessary for a functioning society.",
      "bn": "ব্যক্তিগত স্থিতিস্থাপকতার জন্য কার্যকর হলেও, সম্পর্ক থেকে প্রত্যাশা সম্পূর্ণ বিচ্ছিন্ন করাকে আবেগীয়ভাবে অনুপলব্ধ (Emotionally Unavailability) মনে হতে পারে। সামাজিকভাবে, সবাই যদি অন্যের কাছ থেকে \"শূন্য প্রত্যাশা\" রাখে, তবে এটি সামাজিক দায়বদ্ধতা এবং একটি কার্যকরী সমাজের জন্য প্রয়োজনীয় পারস্পরিক মানদণ্ডকে ক্ষুণ্ণ করতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Immunity to daily disappointments and rejections.",
        "bn": "প্রতিদিনের হতাশা এবং প্রত্যাখ্যানের প্রতি অনাক্রম্যতা (Immunity)।"
      },
      "social": {
        "en": "More stable but potentially detached interpersonal relationships.",
        "bn": "আরও স্থিতিশীল কিন্তু সম্ভবত বিচ্ছিন্ন আন্তঃব্যক্তিগত সম্পর্ক।"
      }
    }
  },
  {
    "id": 8,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Paradox of Hope and Fear",
      "bn": "আশা এবং ভয়ের প্যারাডক্স"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Cease to hope … and you will cease to fear.",
          "bn": "আশা করা বন্ধ করুন … তাহলে আপনার ভয়ও কেটে যাবে।"
        },
        "author": {
          "en": "Seneca",
          "bn": "সেনেকা"
        }
      },
      {
        "quote": {
          "en": "Fear keeps pace with hope … both belong to a mind in suspense, to a mind in a state of anxiety through looking into the future.",
          "bn": "ভয় আশার সাথে তাল মিলিয়ে চলে … দুটোই এক দোদুল্যমান মনের অংশ, ভবিষ্যৎ নিয়ে উদ্বিগ্ন এক মনের অংশ।"
        },
        "author": {
          "en": "Seneca",
          "bn": "সেনেকা"
        }
      },
      {
        "quote": {
          "en": "Just have faith in the future, and then forget about it!",
          "bn": "স্রেফ ভবিষ্যতের ওপর বিশ্বাস রাখুন, তারপর সেটার কথা বেমালুম ভুলে যান!"
        },
        "author": {
          "en": "Seneca",
          "bn": "সেনেকা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "The Relationship Between Hope and Fear",
          "bn": "আশা ও ভয়ের সম্পর্ক"
        },
        "content": {
          "en": "According to Seneca, hope and fear are two sides of the same coin. When we hope for a future outcome, the fear of not getting it arises.",
          "bn": "সেনেকার মতে, আশা এবং ভয় একই মুদ্রার এপিঠ-ওপিঠ। আমরা যখন ভবিষ্যতের কোনো ফলের আশা করি, তখনই তা না পাওয়ার ভয় তৈরি হয়।"
        }
      },
      {
        "title": {
          "en": "Importance of the Present Moment",
          "bn": "বর্তমান মুহূর্তের গুরুত্ব"
        },
        "content": {
          "en": "Hope keeps us anxious about the future, which ruins the peace of the present.",
          "bn": "আশা আমাদের ভবিষ্যৎ নিয়ে উদ্বিগ্ন রাখে, যা বর্তমানের শান্তি নষ্ট করে।"
        }
      },
      {
        "title": {
          "en": "'I Hope' vs. 'I Wonder'",
          "bn": "'I Hope' বনাম 'I Wonder'"
        },
        "content": {
          "en": "Saying 'I wonder what might happen' (Curiosity) instead of 'I hope' reduces anxiety.",
          "bn": "\"আমি আশা করি\" বলার বদলে \"আমি ভাবছি কী হতে পারে\" (Curiosity) বললে দুশ্চিন্তা কমে।"
        }
      },
      {
        "title": {
          "en": "Embracing Uncertainty",
          "bn": "অনিশ্চয়তাকে আলিঙ্গন"
        },
        "content": {
          "en": "The future is unknown; accepting it and being curious is the cure for fear.",
          "bn": "ভবিষ্যৎ অজানা, একে মেনে নিয়ে কৌতূহলী হওয়াই ভয়ের ওষুধ।"
        }
      }
    ],
    "practicalApplication": {
      "en": "From today, replace the phrase 'I hope' with 'I wonder'. For example, instead of saying, 'I hope I get the job,' say, 'I wonder what opportunities come up after the interview.' This frees the mind from the pressure of outcomes.",
      "bn": "আজ থেকে \"I hope\" (আমি আশা করি) কথাটি \"I wonder\" (দেখা যাক কী হয়) দিয়ে রিপ্লেস করুন। যেমন: \"আশা করি আমি চাকরিটা পাব\" না বলে বলুন, \"দেখা যাক ইন্টারভিউয়ের পর কী সুযোগ আসে।\" এটি মনকে ফলাফলের চাপ থেকে মুক্ত করে।"
    },
    "criticalReflection": {
      "en": "'Stop hoping'—this is a controversial Stoic stance. For marginalized communities, hope is the main driver for social change and survival. Critics argue that eliminating hope might reduce fear, but it can also diminish ambition and the drive to improve social conditions. It can lead to passivity even in the face of solvable problems.",
      "bn": "\"আশা করা বন্ধ করুন\"—এটি একটি বিতর্কিত স্টয়িক অবস্থান। নিপীড়িত সম্প্রদায়ের জন্য সামাজিক পরিবর্তন এবং টিকে থাকার প্রধান চালিকাশক্তি হলো আশা। সমালোচকদের মতে, আশা বাদ দিলে ভয় হয়তো কমে, কিন্তু এটি উচ্চাকাঙ্ক্ষা এবং সামাজিক অবস্থার উন্নয়নের স্পৃহাও কমিয়ে দিতে পারে। এটি সমাধানযোগ্য সমস্যার মুখেও নিষ্ক্রিয়তা তৈরি করতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Immediate relief from performance anxiety and future-oriented stress.",
        "bn": "পারফরম্যান্স অ্যাংজাইটি এবং ভবিষ্যৎ-কেন্দ্রিক চাপ থেকে তাৎক্ষণিক মুক্তি।"
      },
      "social": {
        "en": "A calmer population, but potentially less inclined to take bold action for change.",
        "bn": "একটি শান্ত জনগোষ্ঠী, কিন্তু সম্ভবত পরিবর্তনের জন্য জোরালো পদক্ষেপ নিতে কম আগ্রহী।"
      }
    }
  },
  {
    "id": 9,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Art of Self-Compassion",
      "bn": "নিজের প্রতি করুণার শিল্প"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it.",
          "bn": "রাগ যদি সংযত না করা হয়, তবে এটি প্রায়শই আমাদের সেই আঘাতের চেয়ে বেশি ক্ষতি করে যা রাগের সূত্রপাত করেছিল।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "Go easy on yourself.",
          "bn": "নিজের প্রতি সদয় হোন।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "Instead of beating yourself up and being your own antagonist, be your own comedian.",
          "bn": "নিজেকে শাস্তি দেওয়ার এবং নিজেরই শত্রু হওয়ার পরিবর্তে, নিজের জীবনের কমেডিয়ান নিজেই হোন।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Physical Harm of Anger",
          "bn": "রাগের শারীরিক ক্ষতি"
        },
        "content": {
          "en": "Anger is not just mental; it increases cortisol hormones in the body, damaging metabolism and sleep.",
          "bn": "রাগ কেবল মানসিক নয়, শরীরে কর্টিসল হরমোন বাড়িয়ে মেটাবলিজম ও ঘুমের ক্ষতি করে।"
        }
      },
      {
        "title": {
          "en": "Kindness to Oneself",
          "bn": "নিজের ওপর দয়া"
        },
        "content": {
          "en": "We often punish ourselves for small mistakes. The author uses the example of washing a sweater wrong to talk about self-forgiveness.",
          "bn": "আমরা প্রায়ই ছোট ভুলের জন্য নিজেকে শাস্তি দিই। লেখক সোয়েটার ধোয়ার ভুলের উদাহরণ দিয়ে নিজেকে ক্ষমা করার কথা বলেছেন।"
        }
      },
      {
        "title": {
          "en": "Comedian vs. Villain",
          "bn": "কমেডিয়ান বনাম ভিলেন"
        },
        "content": {
          "en": "Viewing the small tragedies of your life as comedy instead of taking them too seriously reduces stress.",
          "bn": "নিজের জীবনের ছোট ট্র্যাজেডিগুলোকে সিরিয়াসলি না নিয়ে কমেডি হিসেবে দেখলে মানসিক চাপ কমে।"
        }
      },
      {
        "title": {
          "en": "Realizing Insignificance",
          "bn": "তুচ্ছতা অনুধাবন"
        },
        "content": {
          "en": "Most mistakes have no long-term impact, so it's better to just laugh at them.",
          "bn": "অধিকাংশ ভুলের কোনো দীর্ঘমেয়াদী প্রভাব নেই, তাই সেগুলোতে হাসাই শ্রেয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "If you do something foolish (like putting too much sugar in your coffee or deleting a file), smile instead of cursing yourself. Tell yourself, 'Wow! I am a cartoon character.' Being able to laugh at your own mistakes is a tremendous strength.",
      "bn": "আপনি যদি কোনো বোকামি করে ফেলেন (যেমন কফিতে চিনি বেশি দেওয়া বা কোনো ফাইল ডিলিট করা), তবে নিজেকে গালি না দিয়ে হাসুন। নিজেকে বলুন, \"বাহ! আমি তো একটা কার্টুন ক্যারেক্টার।\" নিজের ভুল নিয়ে নিজে হাসতে পারা একটি বিশাল শক্তি।"
    },
    "criticalReflection": {
      "en": "While self-compassion is healthy, treating serious mistakes as a 'comedy' without taking accountability can be toxic. There's a fine line between not being overly harsh on oneself and avoiding responsibility. If repeated mistakes are just laughed off, it may hinder personal growth and frustrate those affected.",
      "bn": "আত্ম-করুণা বা Self-compassion অত্যন্ত জরুরি, তবে প্রকৃত ভুলগুলোকে তুচ্ছ করে দেখার ঝুঁকিও থাকে। যদি কেউ সংশোধনমূলক বিশ্লেষণ ছাডাই প্রতিটি ভুল হেসে উড়িয়ে দেয়, তবে এটি বারবার অযোগ্যতার কারণ হতে পারে। স্থবিরতা এড়াতে আত্ম-ক্ষমা এবং আত্ম-উন্নয়নের মধ্যে ভারসাম্য প্রয়োজন।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Increased self-esteem, lower stress, and quicker recovery from minor failures.",
        "bn": "রক্তচাপ হ্রাস, ভালো ঘুম এবং ব্যর্থতার প্রতি উচ্চতর স্থিতিস্থাপকতা।"
      },
      "social": {
        "en": "A more forgiving environment where people are less afraid of making mistakes, potentially boosting creativity and morale.",
        "bn": "কম আক্রমণাত্মক এবং আরও ক্ষমাশীল সামাজিক পরিবেশ।"
      }
    }
  },
  {
    "id": 10,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Control Center (Introductory Section)",
      "bn": "নিয়ন্ত্রণের বিভাজন"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",
          "bn": "জীবনের প্রধান কাজ কেবল এইটুকু: বিষয়গুলোকে চিহ্নিত ও আলাদা করা, যাতে আমি নিজেকে পরিষ্কারভাবে বলতে পারি কোনগুলো বাইরের বিষয় এবং আমার নিয়ন্ত্রণের বাইরে, আর কোনগুলো এমন বিষয় যা আমার প্রকৃত সিদ্ধান্তের ওপর নির্ভরশীল।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "The Division of Control",
          "bn": "জীবনের প্রধান কাজ"
        },
        "content": {
          "en": "The most fundamental concept of Stoicism is distinguishing between what we can control and what we cannot.",
          "bn": "জীবনের সবচেয়ে বড় কাজ হলো কোনটি আমার নিয়ন্ত্রণে এবং কোনটি নয়, তা আলাদা করা।"
        }
      },
      {
        "title": {
          "en": "Mental Clarity",
          "bn": "চিন্তার ফিল্টার"
        },
        "content": {
          "en": "By clearly identifying our choices, we eliminate confusion and focus our energy efficiently.",
          "bn": "মনের ভেতরে আসা প্রতিটি চিন্তাকে এই ফিল্টারের মধ্য দিয়ে যাচাই করতে হবে।"
        }
      },
      {
        "title": {
          "en": "Emotional Freedom",
          "bn": "মানসিক পরিচ্ছন্নতা"
        },
        "content": {
          "en": "Letting go of attachment to external factors grants true emotional independence.",
          "bn": "অপ্রয়োজনীয় চিন্তা বা \"Mental Junk\" দূর করার প্রাথমিক ধাপ হলো এই বিভাজন।"
        }
      },
      {
        "title": {
          "en": "Practical Realism",
          "bn": "নির্বাচনের স্বাধীনতা"
        },
        "content": {
          "en": "It's about facing reality exactly as it is without adding our own judgments and anxieties to it.",
          "bn": "বাইরের ঘটনা আমরা নিয়ন্ত্রণ করতে না পারলেও, আমাদের প্রতিক্রিয়া বা 'Choice' সম্পূর্ণ আমাদের হাতে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "When faced with a difficult situation, pause and mentally draw a line. Place external events on one side and your own reactions on the other. Focus entirely on navigating the latter.",
      "bn": "একটি \"Worry List\" তৈরি করুন। সেখানে আপনার সব চিন্তার তালিকা করুন। এরপর লাল কালি দিয়ে কেটে দিন যেগুলো আপনার নিয়ন্ত্রণে নেই। যা বাকি থাকল, কেবল সেগুলো নিয়েই আজকের দিন শুরু করুন।"
    },
    "criticalReflection": {
      "en": "While this division is a powerful cognitive tool, rigid adherence can sometimes lead to an abdication of social responsibility. Some 'externals' (like systemic injustice) require collective effort to change, not just acceptance.",
      "bn": "এই মৌলিক স্টয়িক বিভাজনটি যৌক্তিকভাবে সঠিক হলেও মানসিকভাবে কঠিন। কগনিটিভ বায়াস বা পক্ষপাত প্রায়ই নিয়ন্ত্রণযোগ্য এবং অনিয়ন্ত্রণযোগ্য বিষয়ের সীমানা ঝাপসা করে দেয় (যেমন: আমরা বিশ্বাস করি অন্যের মতামত আমরা নিয়ন্ত্রণ করতে পারি)। এটি আয়ত্ত করতে পরিবেশ নিয়ন্ত্রণের বিবর্তনীয় প্রবৃত্তির বিরুদ্ধে যুদ্ধ করতে হয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "A profound sense of personal agency and resilience against life's unpredictability.",
        "bn": "চরম মানসিক স্বচ্ছতা এবং দক্ষতা।"
      },
      "social": {
        "en": "Individuals who are grounded and less reactive, though potentially less engaged in broader systemic reforms.",
        "bn": "গণহিস্টিরিয়া বা সামষ্টিক আতঙ্কের প্রতি ব্যক্তিদের প্রবণতা কমে যাওয়া।"
      }
    }
  },
  {
    "id": 11,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Illusion of Escape",
      "bn": "পলায়নের মোহ"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "You should change your attitude, not your surroundings.",
          "bn": "আপনার পরিস্থিতি নয়, বরং আপনার দৃষ্টিভঙ্গি পরিবর্তন করা উচিত।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "The problem is actually our mindset. The problem is not you. It’s human nature to get used to your surroundings.",
          "bn": "আসল সমস্যা হলো আমাদের মানসিকতা। সমস্যা আপনি নন। আশেপাশের পরিবেশের সাথে অভ্যস্ত হয়ে যাওয়া মানুষের স্বভাব।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "The solution is not out there. The solution is right where you are.",
          "bn": "সমাধান বাইরে কোথাও নেই। যেখানে আপনি আছেন, সমাধান ঠিক সেখানেই।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "The Illusion of Travel",
          "bn": "ভ্রমণের মোহ"
        },
        "content": {
          "en": "We think moving to a new place or taking a vacation will remove sadness, but our mind travels with us.",
          "bn": "আমরা মনে করি নতুন জায়গায় গেলে বা ছুটিতে গেলে দুঃখ দূর হবে, কিন্তু আমাদের মন আমাদের সাথেই যায়।"
        }
      },
      {
        "title": {
          "en": "Habituation",
          "bn": "অভ্যস্ত হওয়ার স্বভাব"
        },
        "content": {
          "en": "Humans adapt to any environment. Even in paradise, boredom will eventually set in.",
          "bn": "মানুষ যেকোনো পরিবেশে অভ্যস্ত (Adapt) হয়ে যায়। তাই প্যারাডাইসে গেলেও কিছুদিন পর একঘেয়েমি চলে আসবে।"
        }
      },
      {
        "title": {
          "en": "Attitude Shift",
          "bn": "আটিচিউড শিফট"
        },
        "content": {
          "en": "Changing one's perspective is more effective and economical than changing the external environment.",
          "bn": "বাইরের পরিবেশ পরিবর্তন করার চেয়ে নিজের দৃষ্টিভঙ্গি পরিবর্তন করা বেশি কার্যকর এবং সাশ্রয়ী।"
        }
      },
      {
        "title": {
          "en": "Inner Peace",
          "bn": "অন্তরের শান্তি"
        },
        "content": {
          "en": "Peace is not a destination; it's a state of mind that can be found in your current circumstances.",
          "bn": "শান্তি কোনো গন্তব্য নয়, এটি একটি মানসিক অবস্থা যা বর্তমান পরিস্থিতিতেই খুঁজে পাওয়া সম্ভব।"
        }
      }
    ],
    "practicalApplication": {
      "en": "If you feel 'I'll be fine if I leave this city or job,' stop. Ask yourself: 'Am I running away?' Sit with your eyes closed in your current room for 5 minutes and think about how to find peace right now. Find 3 good things about your current environment.",
      "bn": "যদি মনে হয় \"এই শহর বা এই চাকরি ছেড়ে দিলেই আমি ভালো থাকব,\" তবে থামুন। নিজেকে প্রশ্ন করুন: \"আমি কি পালিয়ে যাচ্ছি?\" বর্তমান রুমেই ৫ মিনিট চোখ বন্ধ করে বসুন এবং ভাবুন এই মুহূর্তেই কীভাবে শান্তি খুঁজে পাওয়া যায়। আপনার বর্তমান পরিবেশের ৩টি ভালো দিক খুঁজে বের করুন।"
    },
    "criticalReflection": {
      "en": "This advice is effective for existential boredom, but dangerous in toxic or abusive environments. Sometimes, changing your environment is the only solution (like leaving a war zone or an abusive home). Privileged Stoicism often forgets that for marginalized people, environment determines mental health.",
      "bn": "এই পরামর্শটি অস্তিত্বের একঘেয়েমির জন্য কার্যকর, কিন্তু বিষাক্ত বা নির্যাতনমূলক পরিবেশের ক্ষেত্রে এটি বিপজ্জনক হতে পারে। কখনও কখনও, পরিবেশ পরিবর্তনই একমাত্র সমাধান (যেমন যুদ্ধক্ষেত্র বা নির্যাতনমূলক বাড়ি ত্যাগ করা)। সুবিধাপ্রাপ্ত স্টয়িসিজম প্রায়ই ভুলে যায় যে প্রান্তিক মানুষের জন্য পরিবেশই মানসিক স্বাস্থ্য নির্ধারণ করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Reduced tendency to run from problems; saving money on 'escapist' travel.",
        "bn": "সমস্যা থেকে পালানোর প্রবণতা হ্রাস; \"পলায়নবাদী\" ভ্রমণে অর্থ সাশ্রয়।"
      },
      "social": {
        "en": "Greater social stability, as people try to improve their current environment instead of leaving.",
        "bn": "অধিকতর সামাজিক স্থিতিশীলতা, কারণ মানুষ এলাকা ছেড়ে না গিয়ে বর্তমান পরিবেশ উন্নয়নে সচেষ্ট হয়।"
      }
    }
  },
  {
    "id": 12,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Observer Self",
      "bn": "পর্যবেক্ষক সত্তা"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "My mind. What is it? What am I making of it? What am I using it for?",
          "bn": "আমার মন। এটা কী? আমি এটা দিয়ে কী তৈরি করছি? আমি একে কী কাজে লাগাচ্ছি?"
        },
        "author": {
          "en": "Marcus Aurelius",
          "bn": "মার্কাস অরেলিয়াস"
        }
      },
      {
        "quote": {
          "en": "The more you observe, the more you can spot unhelpful behavior.",
          "bn": "আপনি যত বেশি পর্যবেক্ষণ করবেন, তত বেশি ক্ষতিকারক আচরণগুলো চিহ্নিত করতে পারবেন।"
        },
        "author": {
          "en": "Marcus Aurelius",
          "bn": "মার্কাস অরেলিয়াস"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Self-Inquiry",
          "bn": "আত্ম-জিজ্ঞাসা"
        },
        "content": {
          "en": "Asking yourself like Marcus Aurelius—'What am I doing with my mind right now?'",
          "bn": "মার্কাস অরেলিয়াসের মতো নিজেকে প্রশ্ন করা—\"আমি এখন আমার মন দিয়ে কী করছি?\""
        }
      },
      {
        "title": {
          "en": "Thought Patterns",
          "bn": "চিন্তার প্যাটার্ন"
        },
        "content": {
          "en": "We often waste time unknowingly daydreaming or reminiscing about the past. This is a waste of energy.",
          "bn": "আমরা প্রায়ই অজান্তে দিবাস্বপ্ন বা অতীতের স্মৃতি রোমন্থনে সময় নষ্ট করি। এটি শক্তির অপচয়।"
        }
      },
      {
        "title": {
          "en": "Journaling",
          "bn": "জার্নালিং"
        },
        "content": {
          "en": "Writing (Journaling) is the best way to clear the mind's clutter. It makes thoughts visible.",
          "bn": "মনের আবর্জনা পরিষ্কার করার সেরা উপায় হলো লেখা (Journaling)। এটি চিন্তাকে দৃশ্যমান করে।"
        }
      },
      {
        "title": {
          "en": "Being Present",
          "bn": "বর্তমানমুখী হওয়া"
        },
        "content": {
          "en": "It's impossible to change the past, so returning the mind's focus solely to the present is essential.",
          "bn": "অতীত পরিবর্তন করা অসম্ভব, তাই মনের ফোকাস কেবল বর্তমানে ফিরিয়ে আনা জরুরি।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Stop randomly throughout the day and ask: 'Where is my mind right now?' If you find it wandering in the past or future, gently bring it back to the present. Write your thoughts down for at least 10 minutes a day.",
      "bn": "দিনের যেকোনো সময় দৈবচয়ন ভিত্তিতে (Randomly) নিজেকে থামান এবং প্রশ্ন করুন: \"আমার মন এখন কোথায়?\" যদি দেখেন মন অতীতে বা ভবিষ্যতে ঘুরে বেড়াচ্ছে, তবে আলতো করে তাকে বর্তমানে ফিরিয়ে আনুন। দিনে একবার অন্তত ১০ মিনিট চিন্তাভাবনা লিখুন।"
    },
    "criticalReflection": {
      "en": "Constant self-observation can lead to 'Hyper-reflexivity', which is tied to anxiety. People can become so aware of their own thoughts that they cannot act naturally. While valuable, it needs to be balanced with 'Flow State' or self-forgetfulness.",
      "bn": "ক্রমাগত আত্ম-পর্যবেক্ষণ \"Hyper-reflexivity\" বা অতি-সচেতনতা তৈরি করতে পারে, যা উদ্বেগের সাথে যুক্ত। তখন মানুষ নিজের চিন্তার ব্যাপারে এতটাই সচেতন হয়ে পড়ে যে স্বাভাবিক আচরণ করতে পারে না। এটি মূল্যবান হলেও, \"Flow State\" বা আত্ম-বিস্মৃতির অবস্থার সাথে এর ভারসাম্য থাকা প্রয়োজন।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Increased mindfulness and metacognition (thinking about thinking).",
        "bn": "মাইন্ডফুলনেস বা সজ্ঞানতা এবং মেটাকগনিশন (চিন্তা সম্পর্কে চিন্তা করা) বৃদ্ধি।"
      },
      "social": {
        "en": "Reduced reactive behavior during conversations.",
        "bn": "কথপোকথনের সময় প্রতিক্রিয়াশীল আচরণ হ্রাস।"
      }
    }
  },
  {
    "id": 13,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Mental Diet",
      "bn": "মানসিক খাদ্যতালিকা"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "I needed to be able to have more than 15 minutes of uninterrupted thought.",
          "bn": "আমার দরকার ছিল ১৫ মিনিটেরও বেশি সময় ধরে নিরবচ্ছিন্নভাবে ভাবার ক্ষমতা।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "When you consume information, it will impact your mood",
          "bn": "আপনি যখন কোনো তথ্য গ্রহণ করেন, তা আপনার মেজাজের ওপর প্রভাব ফেলবে"
        },
        "author": {
          "en": "whether you like it or not.",
          "bn": "আপনি চান বা না চান।"
        }
      },
      {
        "quote": {
          "en": "Get rid of information that makes you feel bad, anxious, weak, jealous, or simply has no use.",
          "bn": "এমন তথ্য এড়িয়ে চলুন যা আপনাকে খারাপ, উদ্বিগ্ন, দুর্বল, ঈর্ষান্বিত করে বা যার কোনো ব্যবহারই নেই।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Impact of Information",
          "bn": "তথ্যের প্রভাব"
        },
        "content": {
          "en": "What we watch or read controls our mood. Negative news or social media weakens us unknowingly.",
          "bn": "আমরা যা দেখি বা পড়ি, তা আমাদের মেজাজ নিয়ন্ত্রণ করে। নেতিবাচক খবর বা সোশ্যাল মিডিয়া আমাদের অজান্তেই দুর্বল করে দেয়।"
        }
      },
      {
        "title": {
          "en": "Uninterrupted Thought",
          "bn": "নিরবচ্ছিন্ন চিন্তা"
        },
        "content": {
          "en": "Deep and original thinking requires the ability to think without interruption for long periods.",
          "bn": "গভীর এবং মৌলিক চিন্তার জন্য দীর্ঘ সময় ধরে কোনো বাধা ছাড়া ভাবার ক্ষমতা প্রয়োজন।"
        }
      },
      {
        "title": {
          "en": "Jesse Livermore's Strategy",
          "bn": "জেসি লিভারমোরের কৌশল"
        },
        "content": {
          "en": "Successful trader Jesse Livermore isolated himself from others' opinions so his judgment wouldn't be affected.",
          "bn": "সফল ট্রেডার জেসি লিভারমোর অন্যের মতামত থেকে নিজেকে বিচ্ছিন্ন রাখতেন যাতে তার বিচারবুদ্ধি প্রভাবিত না হয়।"
        }
      },
      {
        "title": {
          "en": "Affect Heuristic",
          "bn": "Affect Heuristic"
        },
        "content": {
          "en": "Our emotions influence decision-making. Thus, we should avoid bad information (which creates bad emotions).",
          "bn": "আমাদের আবেগ সিদ্ধান্ত গ্রহণকে প্রভাবিত করে। তাই বাজে তথ্য (যা খারাপ আবেগ তৈরি করে) এড়িয়ে চলা উচিত।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Mute or unfollow 'News Feeds' or social media apps on your phone that make you feel angry or jealous. Dedicate at least 1 hour of 'Zero Input' time daily—no phone, books, or TV, just be with your own thoughts.",
      "bn": "আপনার ফোনের \"News Feed\" বা সোশ্যাল মিডিয়া অ্যাপগুলো আনফলো বা মিউট করুন যা আপনাকে রাগ বা হিংসা অনুভব করায়। দিনে অন্তত ১ ঘণ্টা \"Zero Input\" সময় রাখুন—কোনো ফোন, বই বা টিভি নয়, কেবল নিজের চিন্তার সাথে থাকুন।"
    },
    "criticalReflection": {
      "en": "Strictly shielding the mind from 'unpleasant' information can create an 'echo chamber'. Avoiding news to prevent anxiety might mean ignoring real-world injustices that demand attention. In a democracy requiring informed citizens, 'blissful ignorance' is not always a virtue.",
      "bn": "\"অপ্রীতিকর\" তথ্য থেকে মনকে কঠোরভাবে রক্ষা করা একটি \"ইকো চেম্বার\" তৈরি করতে পারে। উদ্বেগ এড়াতে খবর এড়িয়ে চলার অর্থ হতে পারে বাস্তব জগতর অবিচারগুলো উপেক্ষা করা, যার প্রতি মনোযোগ দেওয়া প্রয়োজন। একটি গণতন্ত্রে যেখানে সচেতন নাগরিক প্রয়োজন, সেখানে \"সুখী অজ্ঞতা\" সর্বদা গুণ নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Sharp focus, better mood regulation, and original thinking skills.",
        "bn": "তীক্ষ্ণ মনোযোগ, ভালো মেজাজ নিয়ন্ত্রণ এবং মৌলিক চিন্তাশক্তি।"
      },
      "social": {
        "en": "Potential disengagement from collective social issues or trends.",
        "bn": "সামষ্টিক সামাজিক সমস্যা বা ট্রেন্ড থেকে সম্ভাব্য বিচ্ছিন্নতা।"
      }
    }
  },
  {
    "id": 14,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Purpose as a Compass",
      "bn": "কম্পাস হিসেবে উদ্দেশ্য"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "No random actions, none not based on underlying principles.",
          "bn": "কোনো এলোমেলো কাজ নয়, এমন কোনো কাজ নয় যার ভিত্তি কোনো অন্তর্নিহিত নীতি নয়।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "Living a good life is about not getting distracted.",
          "bn": "একটি সুন্দর জীবন যাপন করার অর্থ হলো লক্ষ্যভ্রষ্ট না হওয়া।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "To be everywhere is to be nowhere.",
          "bn": "সব জায়গায় থাকার অর্থ হলো কোথাও না থাকা।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Aimless Action",
          "bn": "উদ্দেশ্যহীন কর্ম"
        },
        "content": {
          "en": "Every action should have a principle or purpose behind it. Random tasks are a waste of energy.",
          "bn": "প্রতিটি কাজের পেছনে একটি নীতি বা উদ্দেশ্য থাকা উচিত। এলোমেলো কাজ শক্তির অপচয়।"
        }
      },
      {
        "title": {
          "en": "Harmony with Nature",
          "bn": "প্রকৃতির সাথে সামঞ্জস্য"
        },
        "content": {
          "en": "Stoics believed that working in alignment with one's own nature and the universe makes it easier to maintain focus.",
          "bn": "স্টয়িকরা বিশ্বাস করতেন, নিজের স্বভাব এবং প্রকৃতির সাথে মিল রেখে কাজ করলে মনোযোগ ধরে রাখা সহজ হয়।"
        }
      },
      {
        "title": {
          "en": "Passion Project",
          "bn": "প্যাশন প্রজেক্ট"
        },
        "content": {
          "en": "To save life from boredom, having a 'Passion Project' or hobby is crucial to keep you focused.",
          "bn": "জীবনকে একঘেয়েমি থেকে বাঁচাতে একটি \"Passion Project\" বা শখের কাজ থাকা জরুরি যা আপনাকে ফোকাসড রাখে।"
        }
      },
      {
        "title": {
          "en": "Goals and Clarity",
          "bn": "লক্ষ্য ও স্বচ্ছতা"
        },
        "content": {
          "en": "Having a major goal prevents distraction from minor issues.",
          "bn": "বড় লক্ষ্য থাকলে ছোটখাটো বিষয়ে মন বিক্ষিপ্ত হয় না।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Before doing anything, ask yourself: 'Why am I doing this? Does it align with my main goal?' If the answer is 'no', then drop it. Start a side project (like gardening or writing) that puts you in a 'Flow State'.",
      "bn": "কোনো কাজ করার আগে নিজেকে প্রশ্ন করুন: \"কেন আমি এটি করছি? এটি কি আমার মূল লক্ষ্যের সাথে যায়?\" যদি উত্তর \"না\" হয়, তবে সেটি বাদ দিন। একটি সাইড প্রজেক্ট শুরু করুন (যেমন বাগান করা বা লেখালেখি) যা আপনাকে 'Flow State'-এ রাখে।"
    },
    "criticalReflection": {
      "en": "'No aimless action'—this demand sets an extremely high standard for productivity. Human creativity and mental health require leisure, aimless wandering, and 'meaningless' play. Viewing distraction entirely as an evil can make life robotic and devoid of spontaneous joy.",
      "bn": "\"কোনো উদ্দেশ্যহীন কাজ নয়\"—এই দাবি উৎপাদনশীলতার জন্য অত্যন্ত উচ্চ মানদণ্ড নির্ধারণ করে। মানুষের সৃজনশীলতা এবং মানসিক স্বাস্থ্যের জন্য অবসর, উদ্দেশ্যহীন ঘোরাঘুরি এবং \"অর্থহীন\" খেলাধুলা প্রয়োজন। বিভ্রান্তিকে সম্পূর্ণ শয়তান বা খারাপ হিসেবে দেখালে জীবন রোবোটিক এবং আকস্মিক আনন্দবিহীন হয়ে উঠতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "High productivity and proper direction.",
        "bn": "উচ্চ উৎপাদনশীলতা এবং সঠিক দিকনির্দেশনা।"
      },
      "social": {
        "en": "Less participation in trivial social trends or viral distractions.",
        "bn": "তুচ্ছ সামাজিক ট্রেন্ড বা ভাইরাল বিভ্রান্তিতে কম অংশগ্রহণ।"
      }
    }
  },
  {
    "id": 15,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Power of One",
      "bn": "একনিষ্ঠতার শক্তি"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "To be everywhere is to be nowhere.",
          "bn": "সব জায়গায় থাকার অর্থ হলো কোথাও না থাকা।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "You can have it all, but not all at the same time.",
          "bn": "আপনি সবকিছু পেতে পারেন, কিন্তু সবকিছু একবারে নয়।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "You’re better off, mentally and professionally, by being really focused on the things that matter to you.",
          "bn": "আপনার জন্য গুরুত্বপূর্ণ বিষয়গুলোতে মনোযোগ দিলে আপনি মানসিকভাবে এবং পেশাগতভাবে আরও ভালো থাকবেন।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "The Power of Focus",
          "bn": "একাগ্রতার শক্তি"
        },
        "content": {
          "en": "Trying to do everything at once means doing nothing well. We should focus on one major goal at a time.",
          "bn": "একসাথে সব কিছু করতে চাওয়া মানে কোনোটিই ঠিকভাবে না করা। এক সময়ে একটি বড় লক্ষ্যের ওপর ফোকাস করা উচিত।"
        }
      },
      {
        "title": {
          "en": "Selecting Priorities",
          "bn": "অগ্রাধিকার নির্বাচন"
        },
        "content": {
          "en": "For mental peace and career growth, unnecessary 'Secondary Activities' must be eliminated.",
          "bn": "মানসিক শান্তি এবং ক্যারিয়ারের জন্য জীবনের অপ্রয়োজনীয় \"Secondary Activities\" বাদ দিতে হবে।"
        }
      },
      {
        "title": {
          "en": "Major Goal",
          "bn": "বড় লক্ষ্য"
        },
        "content": {
          "en": "Rather than having many small goals, having one 'Big Goal' accelerates progress.",
          "bn": "ছোট ছোট অনেক লক্ষ্যের চেয়ে একটি বড় লক্ষ্য (Big Goal) থাকলে অগ্রগতি দ্রুত হয়।"
        }
      },
      {
        "title": {
          "en": "Sacrifice",
          "bn": "ত্যাগ স্বীকার"
        },
        "content": {
          "en": "To achieve something extraordinary, one must temporarily sacrifice many other things (like hanging out or entertainment).",
          "bn": "অসাধারণ কিছু অর্জন করতে চাইলে সাময়িকভাবে অন্য অনেক কিছু (যেমন আড্ডা, বিনোদন) ত্যাগ করতে হবে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Set only one main goal for the next 3 months. Put all other projects on 'hold'. Arrange your daily routine so your best time is spent on that single goal. Completely stop multitasking.",
      "bn": "আগামী ৩ মাসের জন্য কেবল একটি প্রধান লক্ষ্য ঠিক করুন। বাকি সব প্রজেক্ট 'হোল্ড'-এ রাখুন। প্রতিদিনের রুটিন এমনভাবে সাজান যেন আপনার দিনের সেরা সময়টা ওই একটি লক্ষ্যের পেছনে ব্যয় হয়। মাল্টি-টাস্কিং সম্পূর্ণ বন্ধ করুন।"
    },
    "criticalReflection": {
      "en": "Single-minded focus is effective but risky. If that specific goal fails, the person has no backup plan (diversification). Furthermore, if relationships and health are viewed as 'distractions' while pursuing a goal, excessive focus can damage them.",
      "bn": "একমুখী ফোকাস বা একাগ্রতা কার্যকর হলেও ঝুঁকিপূর্ণ। যদি সেই নির্দিষ্ট লক্ষ্যটি ব্যর্থ হয়, তবে ব্যক্তির হাতে কোনো ব্যাকআপ প্ল্যান (বৈচিত্র্য) থাকে না। তাছাড়া, লক্ষ্য অর্জনের সময় সম্পর্ক এবং স্বাস্থ্যকে যদি \"বিভ্রান্তি\" হিসেবে দেখা হয়, তবে অতিরিক্ত ফোকাস সেগুলোর ক্ষতি করতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Mastering skills rapidly and completing major projects.",
        "bn": "দক্ষতা দ্রুত আয়ত্ত করা এবং বড় প্রজেক্ট সম্পন্ন করা।"
      },
      "social": {
        "en": "Potential isolation or loneliness during periods of intense focus.",
        "bn": "তীব্র ফোকাসের সময় সম্ভাব্য বিচ্ছিন্নতা বা একাকীত্ব।"
      }
    }
  },
  {
    "id": 16,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Defining Mental Sanity",
      "bn": "মানসিক সুস্থতার সংজ্ঞা"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "A healthy pair of eyes should see everything that can be seen and not say, 'No! Too bright!'",
          "bn": "এক জোড়া সুস্থ চোখের সবকিছু দেখা উচিত এবং এ কথা বলা উচিত নয়, 'না! বড্ড বেশি আলো!'"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "A healthy mind should be prepared for anything.",
          "bn": "একটি সুস্থ মন যেকোনো কিছুর জন্য প্রস্তুত থাকা উচিত।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "It’s an ongoing process of trying to become better.",
          "bn": "এটি আরও ভালো হওয়ার একটি চলমান প্রক্রিয়া।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Definition of a Healthy Mind",
          "bn": "সুস্থ মনের সংজ্ঞা"
        },
        "content": {
          "en": "A healthy mind or 'Common Sense' is one that is prepared for any situation.",
          "bn": "একটি সুস্থ মন বা \"Gezond Verstand\" (Common Sense) হলো এমন একটি মন যা যেকোনো পরিস্থিতির জন্য প্রস্তুত থাকে।"
        }
      },
      {
        "title": {
          "en": "Accepting Reality",
          "bn": "বাস্তবতা গ্রহণ"
        },
        "content": {
          "en": "Just as eyes don't complain about seeing light, a healthy mind does not complain when facing reality. It has the courage to see both good and bad.",
          "bn": "চোখ যেমন আলো দেখে অভিযোগ করে না, সুস্থ মনও বাস্তবতা দেখে অভিযোগ করে না। সে ভালো-মন্দ সব কিছু দেখার সাহস রাখে।"
        }
      },
      {
        "title": {
          "en": "Signs of Instability",
          "bn": "অস্থিরতার লক্ষণ"
        },
        "content": {
          "en": "Unreasonable mood swings, insecurity, and lack of focus are signs of an unhealthy mind.",
          "bn": "অকারণে মেজাজ পরিবর্তন, নিরাপত্তাহীনতা এবং ফোকাসের অভাব অসুস্থ মনের লক্ষণ।"
        }
      },
      {
        "title": {
          "en": "Continuous Process",
          "bn": "ধারাবাহিক প্রক্রিয়া"
        },
        "content": {
          "en": "Mental health is not a destination; it is a matter of daily practice.",
          "bn": "মানসিক স্বাস্থ্য কোনো গন্তব্য নয়, এটি প্রতিদিনের চর্চার বিষয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Whenever something unexpected happens, instead of complaining, say, 'My mind was prepared for this.' View yourself as an observer, not a victim. Do a 'Health Check' of your mental state daily—was I unnecessarily anxious today?",
      "bn": "যখনই কোনো অনাকাঙ্ক্ষিত ঘটনা ঘটবে, অভিযোগ না করে বলুন, \"আমার মন এর জন্য প্রস্তুত ছিল।\" নিজেকে ভিক্টিম না ভেবে পর্যবেক্ষক হিসেবে দেখুন। প্রতিদিন নিজের মানসিক অবস্থার \"Health Check\" করুন—আজ আমি কি অকারণে উদ্বিগ্ন ছিলাম?"
    },
    "criticalReflection": {
      "en": "The metaphor of eyes accepting brightness ignores that extreme brightness (trauma) can blind them. Suggesting a healthy mind never says 'too much' risks invalidating trauma responses, where the mind shuts down defensively. It sets a standard of Stoic invulnerability that is biologically unrealistic for many.",
      "bn": "চোখ উজ্জ্বলতাকে মেনে নেওয়ার এই রূপকটি উপেক্ষা করে যে অতিরিক্ত উজ্জ্বলতা (ট্রমা) চোখকে অন্ধ করে দিতে পারে। একটি সুস্থ মন কখনোই \"অতিরিক্ত\" বলবে না—এই পরামর্শ ট্রমা প্রতিক্রিয়াকে বাতিল করার ঝুঁকি তৈরি করে, যেখানে মন প্রতিরক্ষামূলক ব্যবস্থা হিসেবে বন্ধ হয়ে যায়। এটি স্টয়িক অভেদ্যতার এমন একটি মানদণ্ড তৈরি করে যা অনেকের জন্য জীবতাত্ত্বিকভাবে অবাস্তব।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Strong mental stability and adaptability.",
        "bn": "শক্তিশালী মানসিক স্থিতিশীলতা এবং অভিযোজনযোগ্যতা।"
      },
      "social": {
        "en": "Reliable and calm leaders during crises.",
        "bn": "সংকটময় পরিস্থিতিতে নির্ভরযোগ্য এবং শান্ত নেতা।"
      }
    }
  },
  {
    "id": 17,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Prerequisite to Growth",
      "bn": "উন্নতির পূর্বশর্ত"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "What progress, you ask, have I made? I have begun to be a friend to myself.",
          "bn": "আপনি জিজ্ঞেস করছেন, আমি কী উন্নতি করেছি? আমি নিজের সাথে বন্ধুত্ব করতে শুরু করেছি।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Friendship with Oneself",
          "bn": "নিজের সাথে বন্ধুত্ব"
        },
        "content": {
          "en": "The first step to improvement is treating yourself as a friend, not an enemy.",
          "bn": "উন্নতির প্রথম ধাপ হলো নিজেকে শত্রু না ভেবে বন্ধু ভাবা।"
        }
      },
      {
        "title": {
          "en": "Self-Awareness",
          "bn": "আত্ম-সচেতনতা"
        },
        "content": {
          "en": "Without truly knowing oneself, no improvement is sustainable.",
          "bn": "নিজেকে না জানলে কোনো উন্নতিই টেকসই হয় না।"
        }
      },
      {
        "title": {
          "en": "Compassion",
          "bn": "সহমর্মিতা"
        },
        "content": {
          "en": "Being compassionate towards your own mistakes rather than being harsh.",
          "bn": "নিজের ভুলগুলোর প্রতি কঠোর না হয়ে সহমর্মী হওয়া।"
        }
      },
      {
        "title": {
          "en": "The Foundation",
          "bn": "ভিত্তিপ্রস্তর"
        },
        "content": {
          "en": "Self-knowledge is the foundation of all other successes.",
          "bn": "আত্ম-জ্ঞান হলো বাকি সব সাফল্যের ভিত্তি।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Stand in front of the mirror and tell yourself, 'I like you and I'm on your side.' Advise yourself as you would a dear friend. When you make a mistake, comfort yourself like a friend instead of scolding.",
      "bn": "আয়নার সামনে দাঁড়িয়ে নিজেকে বলুন, \"আমি তোমাকে পছন্দ করি এবং আমি তোমার পাশে আছি।\" নিজেকে একজন প্রিয় বন্ধুর মতো পরামর্শ দিন। যখন কোনো ভুল করবেন, নিজেকে বকা না দিয়ে বন্ধুর মতো সান্ত্বনা দিন।"
    },
    "criticalReflection": {
      "en": "This concept is universally positive. However, 'knowing oneself' is often a privilege for those with the time for introspection. For those busy fighting for survival, self-analysis might feel like a luxury.",
      "bn": "এই ধারণাটি সর্বজনীনভাবে ইতিবাচক। তবে, \"নিজেকে জানা\" প্রায়শই তাদেরই বিশেষ সুবিধা যাদের আত্মবিশ্লেষণের জন্য সময় আছে। যারা অস্তিত্ব রক্ষার সংগ্রামে ব্যস্ত, তাদের কাছে আত্ম-বিশ্লেষণ বিলাসিতা মনে হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Higher self-esteem and a reduction in self-sabotaging tendencies.",
        "bn": "উচ্চ আত্মসম্মান এবং নিজের ক্ষতি করার প্রবণতা হ্রাস।"
      },
      "social": {
        "en": "More authentic interactions, as people pretend less.",
        "bn": "আরও খাঁটি মিথস্ক্রিয়া, কারণ মানুষ ভান কম করে।"
      }
    }
  },
  {
    "id": 18,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "Authentic Living",
      "bn": "খাঁটি জীবনযাপন"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "To know thyself is the beginning of wisdom.",
          "bn": "নিজেকে জানাই হলো প্রজ্ঞার শুরু।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "The problem is that most of us lack the confidence to actually live in agreement with who we are.",
          "bn": "সমস্যা হলো, আমাদের বেশিরভাগেরই নিজের সত্তার সাথে সামঞ্জস্য রেখে জীবনযাপনের আত্মবিশ্বাসের অভাব রয়েছে।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "What are the ultimate outcomes I’m looking for? Does this align with who I actually am?",
          "bn": "আমি শেষ পর্যন্ত কী ফলাফল খুঁজছি? এটি কি আমার সত্তার সাথে সামঞ্জস্যপূর্ণ?"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Applying Knowledge",
          "bn": "জ্ঞানের প্রয়োগ"
        },
        "content": {
          "en": "Merely knowing yourself is not enough; acting accordingly is essential. For example, if you are an introvert, stop forcing yourself to go to parties.",
          "bn": "কেবল নিজেকে জানাই যথেষ্ট নয়, সেই অনুযায়ী কাজ করাও জরুরি। উদাহরণস্বরূপ, আপনি যদি ইন্ট্রোভার্ট হন, তবে জোর করে পার্টিতে যাওয়া বন্ধ করুন।"
        }
      },
      {
        "title": {
          "en": "Wrong Decisions",
          "bn": "ভুল সিদ্ধান্ত"
        },
        "content": {
          "en": "We often buy things or do things (like buying a large car) because of others, which contradicts our true nature.",
          "bn": "আমরা প্রায়ই অন্যের দেখাদেখি এমন জিনিস কিনি বা কাজ করি (যেমন বড় গাড়ি কেনা) যা আমাদের স্বভাবের সাথে যায় না।"
        }
      },
      {
        "title": {
          "en": "Social Pressure",
          "bn": "সামাজিক চাপ"
        },
        "content": {
          "en": "Due to society or fear, we act against our own being, which is the root cause of an unhappy life.",
          "bn": "সমাজ বা ভয়ের কারণে আমরা নিজের সত্তার বিরুদ্ধে কাজ করি, যা অসুখী জীবনের মূল কারণ।"
        }
      },
      {
        "title": {
          "en": "Questioning",
          "bn": "প্রশ্ন করা"
        },
        "content": {
          "en": "Before every major decision, ask—'Is this really what I want, or what society wants?'",
          "bn": "প্রতিটি বড় সিদ্ধান্তের আগে প্রশ্ন করুন—\"এটা কি সত্যিই আমি চাই, নাকি সমাজ চায়?\""
        }
      }
    ],
    "practicalApplication": {
      "en": "Review your expenses over the last month. Which expenses were just for 'show-off' or due to social pressure? Identify them. Drop one habit today that doesn't align with your true nature.",
      "bn": "আপনার গত এক মাসের খরচের তালিকা দেখুন। কোন খরচগুলো কেবল \"Show off\" বা অন্যের চাপে করেছেন? সেগুলো চিহ্নিত করুন। নিজের স্বভাবের সাথে যায় না এমন একটি কাজ আজই তালিকা থেকে বাদ দিন।"
    },
    "criticalReflection": {
      "en": "Acting strictly according to 'who you are' assumes a fixed self. Psychology suggests personality is fluid. Strictly adhering to labels (e.g., 'I am an introvert, so I won't socialize') can hinder growth and experimentation.",
      "bn": "\"আপনি কে\" সেই অনুযায়ী কাজ করা একটি স্থির সত্তাকে ধরে নেয়। মনোবিজ্ঞান বলে ব্যক্তিত্ব পরিবর্তনশীল। লেবেল বা তকমা (যেমন: \"আমি অন্তর্মুখী, তাই মিশব না\") কঠোরভাবে মেনে চলা বৃদ্ধি এবং পরীক্ষানিরীক্ষায় বাধা দিতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Deep satisfaction and effective use of resources (money/time).",
        "bn": "গভীর সন্তুষ্টি এবং সম্পদের (টাকা/সময়) কার্যকর ব্যবহার।"
      },
      "social": {
        "en": "A society of diverse individuals who follow their own path instead of uniform trends.",
        "bn": "একই রকম ট্রেন্ডের বদলে বৈচিত্র্যময় ব্যক্তিদের সমাজ যারা নিজস্ব পথে চলে।"
      }
    }
  },
  {
    "id": 19,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Reservoir of Resilience",
      "bn": "অভ্যন্তরীণ দুর্গ"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Remember that for every challenge you face, you have the resources within you to cope with that challenge.",
          "bn": "মনে রাখবেন, আপনি যে চ্যালেঞ্জেরই মুখোমুখি হোন না কেন, তা মোকাবিলা করার মতো রসদ আপনার ভেতরেই রয়েছে।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "You are stronger than you think at any given moment.",
          "bn": "আপনি প্রতি মুহূর্তেই নিজের ধারণার চেয়ে অনেক বেশি শক্তিশালী।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "The mental equivalent of going through your storage is reflection.",
          "bn": "আপনার মানসিক স্টোরেজে অনুসন্ধান চালানোর সমতুল্য বিষয় হলো আত্ম-বিশ্লেষণ।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Latent Power",
          "bn": "সুপ্ত শক্তি"
        },
        "content": {
          "en": "There are many strengths (endurance, patience) hidden within us that we don't realize until we face danger.",
          "bn": "আমাদের ভেতরে এমন অনেক শক্তি (সহ্যক্ষমতা, ধৈর্য) লুকিয়ে আছে যা আমরা বিপদে না পড়লে টের পাই না।"
        }
      },
      {
        "title": {
          "en": "Evidence from the Past",
          "bn": "অতীতের প্রমাণ"
        },
        "content": {
          "en": "People have survived difficult situations like the Holocaust or pandemics. You can too.",
          "bn": "হলোকাস্ট বা মহামারীর মতো কঠিন পরিস্থিতি মানুষ পার করেছে। আপনিও পারবেন।"
        }
      },
      {
        "title": {
          "en": "The Storage Room",
          "bn": "স্টোরেজ রুম"
        },
        "content": {
          "en": "Our mind is like a storage room. Sometimes we need to search it to see what tools (skills) are stored there.",
          "bn": "আমাদের মন একটা স্টোরেজ রুমের মতো। মাঝে মাঝে খুঁজে দেখতে হয় সেখানে কী কী হাতিয়ার (দক্ষতা) জমা আছে।"
        }
      },
      {
        "title": {
          "en": "Fear vs. Strength",
          "bn": "ভয় বনাম শক্তি"
        },
        "content": {
          "en": "Whenever you feel afraid about the future, remember that you have the weapons to deal with it.",
          "bn": "যখনই ভবিষ্যৎ নিয়ে ভয় লাগবে, মনে করবেন আপনার কাছে তা মোকাবিলার অস্ত্র আছে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Write down the 3 hardest moments in your life that you have overcome. Remind yourself, 'If I could get through that, I can get through this too.' Trust in your own strength.",
      "bn": "আপনার জীবনের সবচেয়ে কঠিন ৩টি মুহূর্তের কথা লিখুন যা আপনি পার করে এসেছেন। নিজেকে মনে করিয়ে দিন, \"আমি যদি ওটা পার করতে পারি, তবে এটাও পারব।\" নিজের শক্তির ওপর আস্থা রাখুন।"
    },
    "criticalReflection": {
      "en": "While empowering, telling trauma survivors that they 'have the resources' can sometimes downplay the need for external help (therapy, medication, financial aid). Resilience is not infinite, and systemic failures cannot always be overcome by internal strength alone.",
      "bn": "যদিও ক্ষমতায়নমূলক, ট্রমা সারভাইভারদের বলা যে তাদের \"রসদ আছে\" তা অনেক সময় বাহ্যিক সাহায্যের (থেরাপি, ওষুধ, আর্থিক সাহায্য) প্রয়োজনীয়তাকে ছোট করে দেখাতে পারে। স্থিতিস্থাপকতা অসীম নয় এবং পদ্ধতিগত ব্যর্থতা সবসময় কেবল অভ্যন্তরীণ শক্তি দিয়ে জয় করা যায় না।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "Reduced panic during crises and increased self-confidence.",
        "bn": "সংকটের সময় আতঙ্ক হ্রাস এবং আত্মবিশ্বাস বৃদ্ধি।"
      },
      "social": {
        "en": "A more resilient population capable of recovering from collective trauma.",
        "bn": "সামষ্টিক ট্রমা থেকে ঘুরে দাঁড়াতে সক্ষম একটি আরও সহনশীল জনগোষ্ঠী।"
      }
    }
  },
  {
    "id": 20,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "অভ্যন্তরীণ জগৎ"
    },
    "chapterTitle": {
      "en": "The Narrative Power",
      "bn": "নতুন আখ্যান তৈরি"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed",
          "bn": "ক্ষতিগ্রস্ত না হওয়ার সিদ্ধান্ত নিন — তাহলে আপনিও ক্ষতিগ্রস্ত বোধ করবেন না। ক্ষতিগ্রস্ত বোধ না করলে"
        },
        "author": {
          "en": "and you haven’t been.",
          "bn": "আসলে আপনার কোনো ক্ষতিই হয়নি।"
        }
      },
      {
        "quote": {
          "en": "Never forget: YOU create your own life story. YOU have the power to change your attitude at any given moment.",
          "bn": "কখনই ভুলবেন না: আপনিই আপনার জীবনের গল্প তৈরি করেন। যেকোনো মুহূর্তে আপনার দৃষ্টিভঙ্গি পরিবর্তন করার ক্ষমতা আপনারই রয়েছে।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      },
      {
        "quote": {
          "en": "You cannot change what happens to you. You can change the meaning you give to what happens.",
          "bn": "আপনার সাথে যা ঘটে তা আপনি পরিবর্তন করতে পারবেন না। কিন্তু সেই ঘটনার যে অর্থ আপনি নির্ধারণ করেন, তা আপনি পরিবর্তন করতে পারেন।"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "স্টয়িক প্রজ্ঞা"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "Author of the Story",
          "bn": "গল্পের লেখক"
        },
        "content": {
          "en": "You are the author of your life's story. Whether you portray yourself as a 'victim' or a 'hero' is in your hands.",
          "bn": "আপনি আপনার জীবনের গল্পের লেখক। নিজেকে আপনি \"ভিক্টিম\" হিসেবে দেখাবেন নাকি \"হিরো\" হিসেবে, তা আপনার হাতে।"
        }
      },
      {
        "title": {
          "en": "Giving Meaning",
          "bn": "অর্থ প্রদান"
        },
        "content": {
          "en": "Events have no inherent meaning; it is the meaning we give to an event that affects us.",
          "bn": "ঘটনার কোনো নিজস্ব অর্থ নেই; আমরা ঘটনাকে যে অর্থ দিই, সেটাই আমাদের প্রভাবিত করে।"
        }
      },
      {
        "title": {
          "en": "Power of Rejection",
          "bn": "প্রত্যাখ্যানের ক্ষমতা"
        },
        "content": {
          "en": "Even if someone insults you, if you choose not to feel insulted, that insult won't touch you.",
          "bn": "কেউ আপনাকে অপমান করলেও, আপনি যদি অপমানিত বোধ না করার সিদ্ধান্ত নেন, তবে সেই অপমান আপনাকে স্পর্শ করবে না।"
        }
      },
      {
        "title": {
          "en": "Negative Narratives",
          "bn": "নেতিবাচক আখ্যান"
        },
        "content": {
          "en": "We must stop telling negative stories like 'I can't' or 'My luck is bad'.",
          "bn": "\"আমি পারি না\" বা \"আমার ভাগ্য খারাপ\"—এই ধরনের নেতিবাচক গল্প বলা বন্ধ করতে হবে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "Whenever something bad happens, tell yourself, 'This is just a Plot Twist in my story, not the end.' Imagine yourself in the role of a warrior overcoming an obstacle. Reframe the negative event as a 'challenge'.",
      "bn": "যখনই কোনো খারাপ ঘটনা ঘটবে, নিজেকে বলুন, \"এটি আমার গল্পের একটি 'Plot Twist' মাত্র, শেষ নয়।\" নিজেকে একজন যোদ্ধার ভূমিকায় কল্পনা করুন যে বাধা অতিক্রম করছে। নেতিবাচক ঘটনাকে \"চ্যালেঞ্জ\" হিসেবে রি-ফ্রেম (Reframe) করুন।"
    },
    "criticalReflection": {
      "en": "'If you don't feel harmed, you haven't been'—this idea is powerful for insults but dangerous for physical or systemic harm. It can lead to denying abuse or injustice. Narrative therapy is effective, but it must acknowledge objective reality alongside personal interpretation.",
      "bn": "\"ক্ষতিগ্রস্ত বোধ না করলে ক্ষতি হয়নি\"—এই ধারণা অপমানের ক্ষেত্রে শক্তিশালী হলেও শারীরিক বা পদ্ধতিগত ক্ষতির ক্ষেত্রে বিপজ্জনক। এটি নির্যাতন বা অবিচার অস্বীকারের কারণ হতে পারে। ন্যারেটিভ থেরাপি কার্যকর, তবে এর পাশাপাশি ব্যক্তিগত ব্যাখ্যার সাথে বস্তুনিষ্ঠ বাস্তবতাকেও স্বীকৃতি দিতে হবে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "A strong sense of agency and overcoming the 'victim mentality'.",
        "bn": "কর্তৃত্বের দৃঢ় অনুভূতি এবং \"ভিক্টিম মেন্তালিটি\" জয় করা।"
      },
      "social": {
        "en": "Empowering individuals to change their circumstances by shifting their mindset.",
        "bn": "মানসিকতা পরিবর্তনের মাধ্যমে পরিস্থিতি পরিবর্তনের জন্য ব্যক্তিদের ক্ষমতায়ন।"
      }
    }
  },
  {
    "id": 21,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Detaching Worth from Possessions",
      "bn": "Detaching Worth from Possessions"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Think that nothing deserves admiration except the mind, which being itself great counts nothing else as great.",
          "bn": "Think that nothing deserves admiration except the mind, which being itself great counts nothing else as great."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "The truth is that you are not your possessions.",
          "bn": "The truth is that you are not your possessions."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "You don’t need to buy anything today to feel good about yourself. You’re not missing out on anything.",
          "bn": "You don’t need to buy anything today to feel good about yourself. You’re not missing out on anything."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "আত্মমর্যাদার উৎস",
          "bn": "আত্মমর্যাদার উৎস"
        },
        "content": {
          "en": "আমাদের মূল্য আমাদের দামী গাড়ি, বাড়ি বা গ্যাজেট দিয়ে নির্ধারিত হয় না; এটি নির্ধারিত হয় আমাদের চরিত্র এবং মনন দিয়ে।",
          "bn": "আমাদের মূল্য আমাদের দামী গাড়ি, বাড়ি বা গ্যাজেট দিয়ে নির্ধারিত হয় না; এটি নির্ধারিত হয় আমাদের চরিত্র এবং মনন দিয়ে।"
        }
      },
      {
        "title": {
          "en": "ব্ল্যাক ফ্রাইডে মানসিকতা",
          "bn": "ব্ল্যাক ফ্রাইডে মানসিকতা"
        },
        "content": {
          "en": "কনজিউমারিজম বা ভোগবাদ আমাদের বিশ্বাস করায় যে কেনাকাটা করলেই সুখ মিলবে, কিন্তু স্টয়িকরা একে \"দাসত্ব\" মনে করতেন।",
          "bn": "কনজিউমারিজম বা ভোগবাদ আমাদের বিশ্বাস করায় যে কেনাকাটা করলেই সুখ মিলবে, কিন্তু স্টয়িকরা একে \"দাসত্ব\" মনে করতেন।"
        }
      },
      {
        "title": {
          "en": "অস্থায়ী আনন্দ",
          "bn": "অস্থায়ী আনন্দ"
        },
        "content": {
          "en": "নতুন জিনিস কেনার আনন্দ ক্ষণস্থায়ী। কিছুদিন পরেই সেই বস্তুটি আমাদের কাছে সাধারণ হয়ে যায়।",
          "bn": "নতুন জিনিস কেনার আনন্দ ক্ষণস্থায়ী। কিছুদিন পরেই সেই বস্তুটি আমাদের কাছে সাধারণ হয়ে যায়।"
        }
      },
      {
        "title": {
          "en": "মনের শ্রেষ্ঠত্ব",
          "bn": "মনের শ্রেষ্ঠত্ব"
        },
        "content": {
          "en": "সেনেকার মতে, একমাত্র প্রশংসার যোগ্য হলো একটি শক্তিশালী মন, কোনো আসবাবপত্র বা পোশাক নয়।",
          "bn": "সেনেকার মতে, একমাত্র প্রশংসার যোগ্য হলো একটি শক্তিশালী মন, কোনো আসবাবপত্র বা পোশাক নয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আগামী ১ সপ্তাহ \"No-Buy\" চ্যালেঞ্জ নিন। নিত্যপ্রয়োজনীয় খাবার ও ওষুধ ছাড়া আর কিচ্ছু কিনবেন না। যখনই কোনো শপিং অ্যাপে ঢুকতে ইচ্ছে করবে, নিজেকে বলুন: \"আমি আমার জিনিসের চেয়ে দামী।\" নিজের আলমারির দিকে তাকিয়ে ভাবুন, \"এগুলোর কোনোটিই আমি নই।\"",
      "bn": "আগামী ১ সপ্তাহ \"No-Buy\" চ্যালেঞ্জ নিন। নিত্যপ্রয়োজনীয় খাবার ও ওষুধ ছাড়া আর কিচ্ছু কিনবেন না। যখনই কোনো শপিং অ্যাপে ঢুকতে ইচ্ছে করবে, নিজেকে বলুন: \"আমি আমার জিনিসের চেয়ে দামী।\" নিজের আলমারির দিকে তাকিয়ে ভাবুন, \"এগুলোর কোনোটিই আমি নই।\""
    },
    "criticalReflection": {
      "en": "সম্পদ থেকে আত্মমর্যাদাকে আলাদা করা মানসিকভাবে মুক্তিদায়ক হলেও, এটি জাগতিক সম্পদ যে নিরাপত্তা দেয় তাকে উপেক্ষা করার মতো মনে হতে পারে। যারা মৌলিক চাহিদা মেটাতে হিমশিম খাচ্ছেন, তাদের কাছে \"জিনিসপত্র\" বিলাসিতা নয়, বেঁচে থাকার হাতিয়ার। এই দর্শনটি তখনই সবচেয়ে ভালো কাজ করে যখন কেউ ইতিমধ্যে আর্থিক স্থিতিশীলতার একটি নির্দিষ্ট স্তরে পৌঁছেছে।",
      "bn": "সম্পদ থেকে আত্মমর্যাদাকে আলাদা করা মানসিকভাবে মুক্তিদায়ক হলেও, এটি জাগতিক সম্পদ যে নিরাপত্তা দেয় তাকে উপেক্ষা করার মতো মনে হতে পারে। যারা মৌলিক চাহিদা মেটাতে হিমশিম খাচ্ছেন, তাদের কাছে \"জিনিসপত্র\" বিলাসিতা নয়, বেঁচে থাকার হাতিয়ার। এই দর্শনটি তখনই সবচেয়ে ভালো কাজ করে যখন কেউ ইতিমধ্যে আর্থিক স্থিতিশীলতার একটি নির্দিষ্ট স্তরে পৌঁছেছে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "আবেগবশত কেনাকাটা এবং আর্থিক উদ্বেগ হ্রাস।",
        "bn": "আবেগবশত কেনাকাটা এবং আর্থিক উদ্বেগ হ্রাস।"
      },
      "social": {
        "en": "স্ট্যাটাস-ভিত্তিক প্রতিযোগিতার বদলে চরিত্র-ভিত্তিক মিথস্ক্রিয়ার দিকে সরে আসা।",
        "bn": "স্ট্যাটাস-ভিত্তিক প্রতিযোগিতার বদলে চরিত্র-ভিত্তিক মিথস্ক্রিয়ার দিকে সরে আসা।"
      }
    }
  },
  {
    "id": 22,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Unwavering Integrity",
      "bn": "Unwavering Integrity"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Decide first what type of person you want to be and stick to it. Be the same person whether you are by yourself or with others.",
          "bn": "Decide first what type of person you want to be and stick to it. Be the same person whether you are by yourself or with others."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The responsibility is all yours; no one can stop you from being honest or straightforward.",
          "bn": "The responsibility is all yours; no one can stop you from being honest or straightforward."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "চরিত্রের ধারাবাহিকতা",
          "bn": "চরিত্রের ধারাবাহিকতা"
        },
        "content": {
          "en": "আপনি যখন একা থাকেন এবং যখন সবার সাথে থাকেন—এই দুই সময়ে আপনার আচরণে যেন কোনো পার্থক্য না থাকে।",
          "bn": "আপনি যখন একা থাকেন এবং যখন সবার সাথে থাকেন—এই দুই সময়ে আপনার আচরণে যেন কোনো পার্থক্য না থাকে।"
        }
      },
      {
        "title": {
          "en": "সামাজিক চাপ বনাম নীতি",
          "bn": "সামাজিক চাপ বনাম নীতি"
        },
        "content": {
          "en": "বন্ধুদের বা সমাজের চাপে পড়ে নিজের নীতি বিসর্জন দেওয়া দুর্বলতার লক্ষণ। লেখক পার্টিতে ড্রাগস বা অ্যালকোহলের উদাহরণ দিয়ে নিজের নীতিতে অটল থাকার কথা বলেছেন।",
          "bn": "বন্ধুদের বা সমাজের চাপে পড়ে নিজের নীতি বিসর্জন দেওয়া দুর্বলতার লক্ষণ। লেখক পার্টিতে ড্রাগস বা অ্যালকোহলের উদাহরণ দিয়ে নিজের নীতিতে অটল থাকার কথা বলেছেন।"
        }
      },
      {
        "title": {
          "en": "আত্ম-সম্মান",
          "bn": "আত্ম-সম্মান"
        },
        "content": {
          "en": "অন্যের অনুমোদনের চেয়ে নিজের কাছে নিজের স্বচ্ছ থাকা বেশি জরুরি।",
          "bn": "অন্যের অনুমোদনের চেয়ে নিজের কাছে নিজের স্বচ্ছ থাকা বেশি জরুরি।"
        }
      },
      {
        "title": {
          "en": "সিদ্ধান্তের ক্ষমতা",
          "bn": "সিদ্ধান্তের ক্ষমতা"
        },
        "content": {
          "en": "সততা বজায় রাখার ক্ষমতা সম্পূর্ণ আপনার নিয়ন্ত্রণে; কেউ আপনাকে জোর করে অসৎ বানাতে পারে না।",
          "bn": "সততা বজায় রাখার ক্ষমতা সম্পূর্ণ আপনার নিয়ন্ত্রণে; কেউ আপনাকে জোর করে অসৎ বানাতে পারে না।"
        }
      }
    ],
    "practicalApplication": {
      "en": "নিজের ৩টি মূল নীতি (Core Values) লিখুন (যেমন: সততা, সময়ানুবর্তিতা, পরোপকার)। আগামী এক মাসে এমন কোনো পরিস্থিতির মুখোমুখি হলে যেখানে এই নীতি ভাঙার চাপ আসবে (যেমন বন্ধুদের আড্ডায় গসিপ করা), তখন সাহসের সাথে \"না\" বলুন অথবা সেখান থেকে সরে আসুন।",
      "bn": "নিজের ৩টি মূল নীতি (Core Values) লিখুন (যেমন: সততা, সময়ানুবর্তিতা, পরোপকার)। আগামী এক মাসে এমন কোনো পরিস্থিতির মুখোমুখি হলে যেখানে এই নীতি ভাঙার চাপ আসবে (যেমন বন্ধুদের আড্ডায় গসিপ করা), তখন সাহসের সাথে \"না\" বলুন অথবা সেখান থেকে সরে আসুন।"
    },
    "criticalReflection": {
      "en": "সব পরিস্থিতিতে মূল্যবোধের প্রতি কঠোর আনুগত্য কখনও কখনও সামাজিক সংঘাত বা অসহিষ্ণুতা তৈরি করতে পারে। সর্বদা \"একই ব্যক্তি\" থাকা জটিল সামাজিক সূক্ষ্মতায় (যেমন: কূটনীতি বনাম নিষ্ঠুর সততা) প্রয়োজনীয় নমনীয়তার অভাব ঘটাতে পারে।",
      "bn": "সব পরিস্থিতিতে মূল্যবোধের প্রতি কঠোর আনুগত্য কখনও কখনও সামাজিক সংঘাত বা অসহিষ্ণুতা তৈরি করতে পারে। সর্বদা \"একই ব্যক্তি\" থাকা জটিল সামাজিক সূক্ষ্মতায় (যেমন: কূটনীতি বনাম নিষ্ঠুর সততা) প্রয়োজনীয় নমনীয়তার অভাব ঘটাতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "আত্মশ্রদ্ধা বৃদ্ধি এবং পরিষ্কার বিবেক।",
        "bn": "আত্মশ্রদ্ধা বৃদ্ধি এবং পরিষ্কার বিবেক।"
      },
      "social": {
        "en": "নির্ভরযোগ্য হওয়ার জন্য অন্যের শ্রদ্ধা অর্জন, তবে সম্ভবত কম \"ক্যাজুয়াল\" বন্ধু।",
        "bn": "নির্ভরযোগ্য হওয়ার জন্য অন্যের শ্রদ্ধা অর্জন, তবে সম্ভবত কম \"ক্যাজুয়াল\" বন্ধু।"
      }
    }
  },
  {
    "id": 23,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Decision Matrix (Introductory)",
      "bn": "The Decision Matrix (Introductory)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "We must concern ourselves absolutely with the things that are under our control and entrust the things not in our control to the universe.",
          "bn": "We must concern ourselves absolutely with the things that are under our control and entrust the things not in our control to the universe."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সিদ্ধান্তের ভিত্তি",
          "bn": "সিদ্ধান্তের ভিত্তি"
        },
        "content": {
          "en": "ভালো সিদ্ধান্তের মূল ভিত্তি হলো নিয়ন্ত্রণযোগ্য এবং অনিয়ন্ত্রণযোগ্য বিষয়ের পার্থক্য বোঝা।",
          "bn": "ভালো সিদ্ধান্তের মূল ভিত্তি হলো নিয়ন্ত্রণযোগ্য এবং অনিয়ন্ত্রণযোগ্য বিষয়ের পার্থক্য বোঝা।"
        }
      },
      {
        "title": {
          "en": "মহাবিশ্বের ওপর বিশ্বাস",
          "bn": "মহাবিশ্বের ওপর বিশ্বাস"
        },
        "content": {
          "en": "যা আমাদের হাতে নেই, তা নিয়ে দুশ্চিন্তা না করে মহাবিশ্ব বা প্রকৃতির ওপর ছেড়ে দেওয়া উচিত।",
          "bn": "যা আমাদের হাতে নেই, তা নিয়ে দুশ্চিন্তা না করে মহাবিশ্ব বা প্রকৃতির ওপর ছেড়ে দেওয়া উচিত।"
        }
      },
      {
        "title": {
          "en": "ফোকাস শিফট",
          "bn": "ফোকাস শিফট"
        },
        "content": {
          "en": "ফলাফলের (Outcome) ওপর ফোকাস না করে প্রক্রিয়ার (Process) ওপর ফোকাস করলে সিদ্ধান্ত নেওয়া সহজ হয়।",
          "bn": "ফলাফলের (Outcome) ওপর ফোকাস না করে প্রক্রিয়ার (Process) ওপর ফোকাস করলে সিদ্ধান্ত নেওয়া সহজ হয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যেকোনো বড় সিদ্ধান্ত নেওয়ার আগে একটি ছক আঁকুন। একপাশে লিখুন \"আমার করণীয়\" (যেমন: পরিশ্রম, প্রস্তুতি), অন্যপাশে লিখুন \"ভাগ্যের হাতে\" (যেমন: ফলাফল, অন্যের প্রতিক্রিয়া)। ফোকাস কেবল প্রথম অংশে রাখুন।",
      "bn": "যেকোনো বড় সিদ্ধান্ত নেওয়ার আগে একটি ছক আঁকুন। একপাশে লিখুন \"আমার করণীয়\" (যেমন: পরিশ্রম, প্রস্তুতি), অন্যপাশে লিখুন \"ভাগ্যের হাতে\" (যেমন: ফলাফল, অন্যের প্রতিক্রিয়া)। ফোকাস কেবল প্রথম অংশে রাখুন।"
    },
    "criticalReflection": {
      "en": "\"মহাবিশ্বের\" ওপর বিষয়গুলো ছেড়ে দেওয়া কখনও কখনও নিষ্ক্রিয়তা বা নিয়তিবাদের উৎসাহ দিতে পারে। নিজের সেরাটা দেওয়ার পর ফলাফল মেনে নেওয়া এবং ভাগ্যের দোহাই দিয়ে প্রস্তুতির অভাব ঢাকার মধ্যে পার্থক্য বোঝা জরুরি।",
      "bn": "\"মহাবিশ্বের\" ওপর বিষয়গুলো ছেড়ে দেওয়া কখনও কখনও নিষ্ক্রিয়তা বা নিয়তিবাদের উৎসাহ দিতে পারে। নিজের সেরাটা দেওয়ার পর ফলাফল মেনে নেওয়া এবং ভাগ্যের দোহাই দিয়ে প্রস্তুতির অভাব ঢাকার মধ্যে পার্থক্য বোঝা জরুরি।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "\"অ্যানালাইসিস প্যারালাইসিস\" বা দ্বিধা হ্রাস।",
        "bn": "\"অ্যানালাইসিস প্যারালাইসিস\" বা দ্বিধা হ্রাস।"
      },
      "social": {
        "en": "দলীয় পরিবেশে আরও সিদ্ধান্তমূলক নেতৃত্ব।",
        "bn": "দলীয় পরিবেশে আরও সিদ্ধান্তমূলক নেতৃত্ব।"
      }
    }
  },
  {
    "id": 24,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Autonomy Over Approval",
      "bn": "Autonomy Over Approval"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Once you undertake to do something, stick with it and treat it as something that should be carried through. Don’t pay attention to what people say.",
          "bn": "Once you undertake to do something, stick with it and treat it as something that should be carried through. Don’t pay attention to what people say."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "When you want to please everyone in your life, you end up harming your own sense of self-worth.",
          "bn": "When you want to please everyone in your life, you end up harming your own sense of self-worth."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "পিপল প্লিজার সিনড্রোম",
          "bn": "পিপল প্লিজার সিনড্রোম"
        },
        "content": {
          "en": "সবাইকে খুশি করার চেষ্টা করা মানে নিজের আত্মসম্মান বিসর্জন দেওয়া।",
          "bn": "সবাইকে খুশি করার চেষ্টা করা মানে নিজের আত্মসম্মান বিসর্জন দেওয়া।"
        }
      },
      {
        "title": {
          "en": "মতামতের বিষ",
          "bn": "মতামতের বিষ"
        },
        "content": {
          "en": "অন্যের মতামত বা সমালোচনা আপনার সিদ্ধান্তের ওপর যেন প্রভাব ফেলতে না পারে।",
          "bn": "অন্যের মতামত বা সমালোচনা আপনার সিদ্ধান্তের ওপর যেন প্রভাব ফেলতে না পারে।"
        }
      },
      {
        "title": {
          "en": "দৃঢ়তা",
          "bn": "দৃঢ়তা"
        },
        "content": {
          "en": "একবার কোনো সিদ্ধান্ত নিলে, তা শেষ পর্যন্ত চালিয়ে যাওয়ার মানসিকতা থাকতে হবে। বারবার সিদ্ধান্ত বদলানো দুর্বলতার লক্ষণ।",
          "bn": "একবার কোনো সিদ্ধান্ত নিলে, তা শেষ পর্যন্ত চালিয়ে যাওয়ার মানসিকতা থাকতে হবে। বারবার সিদ্ধান্ত বদলানো দুর্বলতার লক্ষণ।"
        }
      },
      {
        "title": {
          "en": "নিজের পথ",
          "bn": "নিজের পথ"
        },
        "content": {
          "en": "আপনার জীবনের এক্সপার্ট আপনি নিজেই; অন্য কেউ আপনার জুতোয় পা দিয়ে হাঁটছে না।",
          "bn": "আপনার জীবনের এক্সপার্ট আপনি নিজেই; অন্য কেউ আপনার জুতোয় পা দিয়ে হাঁটছে না।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার জীবনের এমন একটি সিদ্ধান্তের কথা ভাবুন যা আপনি অন্যের ভয়ে নিচ্ছেন না (যেমন: নতুন ক্যারিয়ার, বিয়ে বা বিদেশ যাত্রা)। আজই সেই বিষয়ে ছোট একটি পদক্ষেপ নিন এবং কাউকে কৈফিয়ত দেবেন না। মনে মনে বলুন, \"এটি আমার জীবন, আমার সিদ্ধান্ত।\"",
      "bn": "আপনার জীবনের এমন একটি সিদ্ধান্তের কথা ভাবুন যা আপনি অন্যের ভয়ে নিচ্ছেন না (যেমন: নতুন ক্যারিয়ার, বিয়ে বা বিদেশ যাত্রা)। আজই সেই বিষয়ে ছোট একটি পদক্ষেপ নিন এবং কাউকে কৈফিয়ত দেবেন না। মনে মনে বলুন, \"এটি আমার জীবন, আমার সিদ্ধান্ত।\""
    },
    "criticalReflection": {
      "en": "যদিও স্বায়ত্তশাসন বা অটোনমি গুরুত্বপূর্ণ, কিন্তু \"লোকে কী বলবে\" তা সম্পূর্ণ উপেক্ষা করা বিপজ্জনক হতে পারে যদি তা অহংকারে পরিণত হয়। পরামর্শদাতা বা বিশেষজ্ঞদের গঠনমূলক সমালোচনা উন্নতির জন্য অপরিহার্য। চ্যালেঞ্জ হলো জ্ঞানের কথা এবং অপ্রয়োজনীয় শোরগোলের মধ্যে পার্থক্য করা।",
      "bn": "যদিও স্বায়ত্তশাসন বা অটোনমি গুরুত্বপূর্ণ, কিন্তু \"লোকে কী বলবে\" তা সম্পূর্ণ উপেক্ষা করা বিপজ্জনক হতে পারে যদি তা অহংকারে পরিণত হয়। পরামর্শদাতা বা বিশেষজ্ঞদের গঠনমূলক সমালোচনা উন্নতির জন্য অপরিহার্য। চ্যালেঞ্জ হলো জ্ঞানের কথা এবং অপ্রয়োজনীয় শোরগোলের মধ্যে পার্থক্য করা।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "ক্ষমতায়ন এবং নিজের জীবনের পথের ওপর মালিকানা বোধ।",
        "bn": "ক্ষমতায়ন এবং নিজের জীবনের পথের ওপর মালিকানা বোধ।"
      },
      "social": {
        "en": "আপনার দৃঢ় সংকল্প দেখার পর অন্যরা অযাচিত উপদেশ দেওয়া বন্ধ করবে।",
        "bn": "আপনার দৃঢ় সংকল্প দেখার পর অন্যরা অযাচিত উপদেশ দেওয়া বন্ধ করবে।"
      }
    }
  },
  {
    "id": 25,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Art of Pivot",
      "bn": "The Art of Pivot"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "But we must be prepared to give up everything when something unexpected happens.",
          "bn": "But we must be prepared to give up everything when something unexpected happens."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "We’re guests who temporarily walk this planet... I look at everything in life as borrowed.",
          "bn": "We’re guests who temporarily walk this planet... I look at everything in life as borrowed."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Plan all you want! ... Just don’t get attached to your plans.",
          "bn": "Plan all you want! ... Just don’t get attached to your plans."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "অতিথি মানসিকতা",
          "bn": "অতিথি মানসিকতা"
        },
        "content": {
          "en": "আমরা এই পৃথিবীতে কিছুদিনের অতিথি। আমাদের চাকরি, সম্পর্ক, এমনকি শরীর—সবই \"ধার করা\"। যেকোনো সময় তা ফেরত দিতে হতে পারে।",
          "bn": "আমরা এই পৃথিবীতে কিছুদিনের অতিথি। আমাদের চাকরি, সম্পর্ক, এমনকি শরীর—সবই \"ধার করা\"। যেকোনো সময় তা ফেরত দিতে হতে পারে।"
        }
      },
      {
        "title": {
          "en": "নমনীয়তা (Flexibility)",
          "bn": "নমনীয়তা (Flexibility)"
        },
        "content": {
          "en": "পরিকল্পনা করা ভালো, কিন্তু পরিকল্পনার প্রতি আসক্ত হওয়া বোকামি। পরিস্থিতি বদলালে পরিকল্পনাও বদলাতে হবে।",
          "bn": "পরিকল্পনা করা ভালো, কিন্তু পরিকল্পনার প্রতি আসক্ত হওয়া বোকামি। পরিস্থিতি বদলালে পরিকল্পনাও বদলাতে হবে।"
        }
      },
      {
        "title": {
          "en": "জাহাজের উপমা",
          "bn": "জাহাজের উপমা"
        },
        "content": {
          "en": "জীবন একটি জাহাজের মতো; যখন সাইরেন বাজবে (বিপদ আসবে), তখন তীরের সৌন্দর্য উপভোগ বাদ দিয়ে জাহাজে ফিরে আসতে হবে।",
          "bn": "জীবন একটি জাহাজের মতো; যখন সাইরেন বাজবে (বিপদ আসবে), তখন তীরের সৌন্দর্য উপভোগ বাদ দিয়ে জাহাজে ফিরে আসতে হবে।"
        }
      },
      {
        "title": {
          "en": "হতাশা মুক্তি",
          "bn": "হতাশা মুক্তি"
        },
        "content": {
          "en": "পরিকল্পনা ভেস্তে গেলে হতাশ না হয়ে দ্রুত নতুন পরিকল্পনা করা স্টয়িকদের বৈশিষ্ট্য।",
          "bn": "পরিকল্পনা ভেস্তে গেলে হতাশ না হয়ে দ্রুত নতুন পরিকল্পনা করা স্টয়িকদের বৈশিষ্ট্য।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যদি হঠাৎ কোনো পরিকল্পনা বাতিল হয় (বৃষ্টিতে পিকনিক বাতিল বা মিটিং ক্যানসেল), তবে ১ মিনিটের বেশি মন খারাপ করবেন না। তৎক্ষণাৎ \"Plan B\" তৈরি করুন। বলুন, \"যা হয়েছে ভালোর জন্যই হয়েছে, এখন আমি এই সময়টা অন্য কাজে লাগাব।\"",
      "bn": "যদি হঠাৎ কোনো পরিকল্পনা বাতিল হয় (বৃষ্টিতে পিকনিক বাতিল বা মিটিং ক্যানসেল), তবে ১ মিনিটের বেশি মন খারাপ করবেন না। তৎক্ষণাৎ \"Plan B\" তৈরি করুন। বলুন, \"যা হয়েছে ভালোর জন্যই হয়েছে, এখন আমি এই সময়টা অন্য কাজে লাগাব।\""
    },
    "criticalReflection": {
      "en": "সব কিছুকে \"ধার করা\" হিসেবে দেখা ক্ষতির শোক কাটানোর জন্য একটি গভীর কৌশল, কিন্তু এটি গভীর আবেগীয় বিনিয়োগ বা ভালোবাসার ক্ষেত্রে বাধা হতে পারে। কেউ যদি সর্বদা \"সব কিছু ছেড়ে দেওয়ার\" জন্য প্রস্তুত থাকে, তবে সে আসক্তির ভয়ে এক ধরনের সুপ্ত উদ্বেগ বা বিচ্ছিন্নতা নিয়ে বাঁচতে পারে।",
      "bn": "সব কিছুকে \"ধার করা\" হিসেবে দেখা ক্ষতির শোক কাটানোর জন্য একটি গভীর কৌশল, কিন্তু এটি গভীর আবেগীয় বিনিয়োগ বা ভালোবাসার ক্ষেত্রে বাধা হতে পারে। কেউ যদি সর্বদা \"সব কিছু ছেড়ে দেওয়ার\" জন্য প্রস্তুত থাকে, তবে সে আসক্তির ভয়ে এক ধরনের সুপ্ত উদ্বেগ বা বিচ্ছিন্নতা নিয়ে বাঁচতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উচ্চ অভিযোজন ক্ষমতা (AQ) এবং বিশৃঙ্খলার মধ্যেও স্থিতিস্থাপকতা।",
        "bn": "উচ্চ অভিযোজন ক্ষমতা (AQ) এবং বিশৃঙ্খলার মধ্যেও স্থিতিস্থাপকতা।"
      },
      "social": {
        "en": "মহামারীর মতো সামষ্টিক বিপর্যয়ের সময় নাটকীয়তা এবং অভিযোগ হ্রাস।",
        "bn": "মহামারীর মতো সামষ্টিক বিপর্যয়ের সময় নাটকীয়তা এবং অভিযোগ হ্রাস।"
      }
    }
  },
  {
    "id": 26,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Amor Fati (Love of Fate)",
      "bn": "Amor Fati (Love of Fate)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Don’t wish for things to happen the way you like. Instead, welcome whatever happens as if you wanted it to happen.",
          "bn": "Don’t wish for things to happen the way you like. Instead, welcome whatever happens as if you wanted it to happen."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Practice acceptance without disdain.",
          "bn": "Practice acceptance without disdain."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "প্রত্যাশা বনাম গ্রহণ",
          "bn": "প্রত্যাশা বনাম গ্রহণ"
        },
        "content": {
          "en": "আমরা চাই পৃথিবী আমাদের মতো চলুক, কিন্তু তা হয় না। যা ঘটছে, তাকেই \"আমি এমনটাই চেয়েছিলাম\" বলে মেনে নেওয়া হলো প্রশান্তির চাবিকাঠি।",
          "bn": "আমরা চাই পৃথিবী আমাদের মতো চলুক, কিন্তু তা হয় না। যা ঘটছে, তাকেই \"আমি এমনটাই চেয়েছিলাম\" বলে মেনে নেওয়া হলো প্রশান্তির চাবিকাঠি।"
        }
      },
      {
        "title": {
          "en": "Amor Fati",
          "bn": "Amor Fati"
        },
        "content": {
          "en": "কেবল ভাগ্যকে মেনে নেওয়া নয়, তাকে ভালোবাসা। প্রতিটি বাধা বা সমস্যাকে \"উপহার\" হিসেবে দেখা।",
          "bn": "কেবল ভাগ্যকে মেনে নেওয়া নয়, তাকে ভালোবাসা। প্রতিটি বাধা বা সমস্যাকে \"উপহার\" হিসেবে দেখা।"
        }
      },
      {
        "title": {
          "en": "মানসিক কসরত",
          "bn": "মানসিক কসরত"
        },
        "content": {
          "en": "অবাঞ্ছিত ঘটনাকে (যেমন ট্রাফিক জ্যাম) মনে মনে বলুন, \"এটি আমাকে ধৈর্য শেখানোর জন্য এসেছে।\"",
          "bn": "অবাঞ্ছিত ঘটনাকে (যেমন ট্রাফিক জ্যাম) মনে মনে বলুন, \"এটি আমাকে ধৈর্য শেখানোর জন্য এসেছে।\""
        }
      },
      {
        "title": {
          "en": "বিরক্তিহীনতা",
          "bn": "বিরক্তিহীনতা"
        },
        "content": {
          "en": "পরিস্থিতি মেনে নেওয়ার সময় বিরক্তি বা ঘৃণা রাখা যাবে না; পূর্ণ হৃদয়ে গ্রহণ করতে হবে।",
          "bn": "পরিস্থিতি মেনে নেওয়ার সময় বিরক্তি বা ঘৃণা রাখা যাবে না; পূর্ণ হৃদয়ে গ্রহণ করতে হবে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ সারাদিনে যা কিছু \"ভুল\" হবে (কফি পড়ে যাওয়া, ইন্টারনেট স্লো হওয়া), তার প্রতিটিতে হাসিমুখে বলুন, \"আমি ঠিক এটাই চেয়েছিলাম!\" এটি প্রথমে হাস্যকর মনে হলেও মস্তিষ্ককে নেতিবাচকতা থেকে মুক্তি দেয়।",
      "bn": "আজ সারাদিনে যা কিছু \"ভুল\" হবে (কফি পড়ে যাওয়া, ইন্টারনেট স্লো হওয়া), তার প্রতিটিতে হাসিমুখে বলুন, \"আমি ঠিক এটাই চেয়েছিলাম!\" এটি প্রথমে হাস্যকর মনে হলেও মস্তিষ্ককে নেতিবাচকতা থেকে মুক্তি দেয়।"
    },
    "criticalReflection": {
      "en": "\"যা ঘটছে তাকেই স্বাগত জানানো\" অবিচার বা নির্যাতনের শিকার ব্যক্তিদের জন্য বিপজ্জনক উপদেশ হতে পারে। অনিবার্য ভাগ্যের (যেমন মৃত্যু, আবহাওয়া) জন্য এটি সঠিক হলেও, সমাধানযোগ্য নিপীড়নের (বৈষম্য, খারাপ বস) ক্ষেত্রে এটি প্রয়োজনীয় প্রতিরোধের বদলে নিষ্ক্রিয়তার পরামর্শ দেয়।",
      "bn": "\"যা ঘটছে তাকেই স্বাগত জানানো\" অবিচার বা নির্যাতনের শিকার ব্যক্তিদের জন্য বিপজ্জনক উপদেশ হতে পারে। অনিবার্য ভাগ্যের (যেমন মৃত্যু, আবহাওয়া) জন্য এটি সঠিক হলেও, সমাধানযোগ্য নিপীড়নের (বৈষম্য, খারাপ বস) ক্ষেত্রে এটি প্রয়োজনীয় প্রতিরোধের বদলে নিষ্ক্রিয়তার পরামর্শ দেয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "একটি \"টেফলন মাইন্ড\" বা পিচ্ছিল মন যেখানে হতাশা সহজেই পিছলে যায়।",
        "bn": "একটি \"টেফলন মাইন্ড\" বা পিচ্ছিল মন যেখানে হতাশা সহজেই পিছলে যায়।"
      },
      "social": {
        "en": "এমন একজন ব্যক্তি যিনি চাপের পরিস্থিতিতে বিশৃঙ্খলার বদলে প্রশান্তি নিয়ে আসেন।",
        "bn": "এমন একজন ব্যক্তি যিনি চাপের পরিস্থিতিতে বিশৃঙ্খলার বদলে প্রশান্তি নিয়ে আসেন।"
      }
    }
  },
  {
    "id": 27,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Premeditatio Malorum (Negative Visualization)",
      "bn": "Premeditatio Malorum (Negative Visualization)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Just the thought of multiple disasters happening at the same time will help you to be more clear-headed when things go wrong.",
          "bn": "Just the thought of multiple disasters happening at the same time will help you to be more clear-headed when things go wrong."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "I am of the nature to have ill health. I cannot escape having ill health.",
          "bn": "I am of the nature to have ill health. I cannot escape having ill health."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সবচেয়ে খারাপ কল্পনা",
          "bn": "সবচেয়ে খারাপ কল্পনা"
        },
        "content": {
          "en": "স্টয়িকরা প্রতিদিন ভাবতেন, \"আজ আমার সব কিছু ধ্বংস হয়ে যেতে পারে।\" এটি ভয়ের জন্য নয়, প্রস্তুতির জন্য।",
          "bn": "স্টয়িকরা প্রতিদিন ভাবতেন, \"আজ আমার সব কিছু ধ্বংস হয়ে যেতে পারে।\" এটি ভয়ের জন্য নয়, প্রস্তুতির জন্য।"
        }
      },
      {
        "title": {
          "en": "ওয়ারেন বাফেটের কৌশল",
          "bn": "ওয়ারেন বাফেটের কৌশল"
        },
        "content": {
          "en": "বাফেটের মতো বিনিয়োগকারীরা সবসময় \"Worst Case Scenario\" বা সবচেয়ে খারাপ পরিস্থিতির জন্য লিকুইড ক্যাশ হাতে রাখেন।",
          "bn": "বাফেটের মতো বিনিয়োগকারীরা সবসময় \"Worst Case Scenario\" বা সবচেয়ে খারাপ পরিস্থিতির জন্য লিকুইড ক্যাশ হাতে রাখেন।"
        }
      },
      {
        "title": {
          "en": "বাস্তববাদী আশাবাদ",
          "bn": "বাস্তববাদী আশাবাদ"
        },
        "content": {
          "en": "কেবল \"সব ঠিক হয়ে যাবে\" ভাবা বোকামি। \"সব শেষ হয়ে গেলেও আমি ঠিক থাকব\"—এটিই প্রকৃত শক্তি।",
          "bn": "কেবল \"সব ঠিক হয়ে যাবে\" ভাবা বোকামি। \"সব শেষ হয়ে গেলেও আমি ঠিক থাকব\"—এটিই প্রকৃত শক্তি।"
        }
      },
      {
        "title": {
          "en": "কৃতজ্ঞতা বৃদ্ধি",
          "bn": "কৃতজ্ঞতা বৃদ্ধি"
        },
        "content": {
          "en": "যখন আপনি ভাবেন যে আপনি অসুস্থ হতে পারেন, তখন বর্তমান সুস্থতার জন্য কৃতজ্ঞতা বাড়ে।",
          "bn": "যখন আপনি ভাবেন যে আপনি অসুস্থ হতে পারেন, তখন বর্তমান সুস্থতার জন্য কৃতজ্ঞতা বাড়ে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "সকালে ৫ মিনিট চোখ বন্ধ করে ভাবুন—আজ আপনার চাকরি চলে গেলে বা ফোন হারিয়ে গেলে আপনি কী করবেন? এই কল্পনার পর বাস্তবে ফিরে আসুন এবং বর্তমান নিরাপত্তার জন্য কৃতজ্ঞতা প্রকাশ করুন। এই প্রস্তুতি আপনাকে বিপদে প্যানিক করা থেকে বাঁচাবে।",
      "bn": "সকালে ৫ মিনিট চোখ বন্ধ করে ভাবুন—আজ আপনার চাকরি চলে গেলে বা ফোন হারিয়ে গেলে আপনি কী করবেন? এই কল্পনার পর বাস্তবে ফিরে আসুন এবং বর্তমান নিরাপত্তার জন্য কৃতজ্ঞতা প্রকাশ করুন। এই প্রস্তুতি আপনাকে বিপদে প্যানিক করা থেকে বাঁচাবে।"
    },
    "criticalReflection": {
      "en": "যদিও এটি স্থিতিস্থাপকতা তৈরি করে, উদ্বেগজনিত সমস্যায় ভোগা ব্যক্তিদের জন্য \"বিপর্যয় কল্পনা করা\" প্রস্তুতির বদলে প্যানিক অ্যাটাক তৈরি করতে পারে। এটি কার্যকরভাবে চর্চা করার জন্য একটি স্থিতিশীল মানসিক ভিত্তি প্রয়োজন, নতুবা এটি অতিরিক্ত দুশ্চিন্তা বা Catastrophizing-এর দিকে নিয়ে যেতে পারে।",
      "bn": "যদিও এটি স্থিতিস্থাপকতা তৈরি করে, উদ্বেগজনিত সমস্যায় ভোগা ব্যক্তিদের জন্য \"বিপর্যয় কল্পনা করা\" প্রস্তুতির বদলে প্যানিক অ্যাটাক তৈরি করতে পারে। এটি কার্যকরভাবে চর্চা করার জন্য একটি স্থিতিশীল মানসিক ভিত্তি প্রয়োজন, নতুবা এটি অতিরিক্ত দুশ্চিন্তা বা Catastrophizing-এর দিকে নিয়ে যেতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "অ্যান্টি-ফ্রাজিলিটি; আঘাত আপনাকে ভেঙে দেয় না বরং আরও বুদ্ধিদীপ্ত প্রতিক্রিয়া করতে শেখায়।",
        "bn": "অ্যান্টি-ফ্রাজিলিটি; আঘাত আপনাকে ভেঙে দেয় না বরং আরও বুদ্ধিদীপ্ত প্রতিক্রিয়া করতে শেখায়।"
      },
      "social": {
        "en": "মানুষ আরও ভালো ক্রাইসিস ম্যানেজার এবং ইন্স্যুরেন্স পরিকল্পনাকারী হয়ে ওঠে।",
        "bn": "মানুষ আরও ভালো ক্রাইসিস ম্যানেজার এবং ইন্স্যুরেন্স পরিকল্পনাকারী হয়ে ওঠে।"
      }
    }
  },
  {
    "id": 28,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Escaping the Waiting Room (Introductory)",
      "bn": "Escaping the Waiting Room (Introductory)"
    },
    "goldenQuotes": [],
    "coreInsights": [
      {
        "title": {
          "en": "অমরত্বের ভ্রম",
          "bn": "অমরত্বের ভ্রম"
        },
        "content": {
          "en": "আমরা এমনভাবে বাঁচি যেন আমাদের হাতে অফুরন্ত সময় আছে, যা সত্য নয়।",
          "bn": "আমরা এমনভাবে বাঁচি যেন আমাদের হাতে অফুরন্ত সময় আছে, যা সত্য নয়।"
        }
      },
      {
        "title": {
          "en": "অপেক্ষার সংস্কৃতি",
          "bn": "অপেক্ষার সংস্কৃতি"
        },
        "content": {
          "en": "আমরা সবসময় \"আগামীকাল\" বা \"ভবিষ্যতের\" জন্য বর্তমানকে বিসর্জন দিই।",
          "bn": "আমরা সবসময় \"আগামীকাল\" বা \"ভবিষ্যতের\" জন্য বর্তমানকে বিসর্জন দিই।"
        }
      },
      {
        "title": {
          "en": "ভয় ও আকাঙ্ক্ষা",
          "bn": "ভয় ও আকাঙ্ক্ষা"
        },
        "content": {
          "en": "আমরা ভয়ে মরি মরণশীল মানুষের মতো, কিন্তু আকাঙ্ক্ষা করি অমর দেবতার মতো—এই বৈপরীত্যই আমাদের অসুখী করে।",
          "bn": "আমরা ভয়ে মরি মরণশীল মানুষের মতো, কিন্তু আকাঙ্ক্ষা করি অমর দেবতার মতো—এই বৈপরীত্যই আমাদের অসুখী করে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "নিজেকে প্রশ্ন করুন: \"যদি আজই আমার জীবনের শেষ দিন হয়, তবে আমি কি এই কাজটিই করতাম যা এখন করছি?\" যদি উত্তর \"না\" হয়, তবে সন্ধ্যায় অন্তত এমন কিছু করুন যা আপনাকে জীবিত অনুভব করায়।",
      "bn": "নিজেকে প্রশ্ন করুন: \"যদি আজই আমার জীবনের শেষ দিন হয়, তবে আমি কি এই কাজটিই করতাম যা এখন করছি?\" যদি উত্তর \"না\" হয়, তবে সন্ধ্যায় অন্তত এমন কিছু করুন যা আপনাকে জীবিত অনুভব করায়।"
    },
    "criticalReflection": {
      "en": "এই অধ্যায়টি \"স্থগিত জীবন পরিকল্পনা\"-র (পরে উপভোগ করব বলে এখন কঠোর পরিশ্রম করা) সমালোচনা করে। দার্শনিকভবে সঠিক হলেও, অর্থনৈতিক বাস্তবতা প্রায়ই ভবিষ্যতের নিরাপত্তার জন্য বর্তমানকে ত্যাগ করার দাবি করে (যেমন রিটায়ারমেন্টের জন্য সঞ্চয়)। এর মধ্যে একটি ভারসাম্য প্রয়োজন।",
      "bn": "এই অধ্যায়টি \"স্থগিত জীবন পরিকল্পনা\"-র (পরে উপভোগ করব বলে এখন কঠোর পরিশ্রম করা) সমালোচনা করে। দার্শনিকভবে সঠিক হলেও, অর্থনৈতিক বাস্তবতা প্রায়ই ভবিষ্যতের নিরাপত্তার জন্য বর্তমানকে ত্যাগ করার দাবি করে (যেমন রিটায়ারমেন্টের জন্য সঞ্চয়)। এর মধ্যে একটি ভারসাম্য প্রয়োজন।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "শখ বা প্যাশন পূরণের জন্য তাগিদ বৃদ্ধি।",
        "bn": "শখ বা প্যাশন পূরণের জন্য তাগিদ বৃদ্ধি।"
      },
      "social": {
        "en": "\"হাসল কালচার\" থেকে সরে এসে \"লিভিং কালচার\" বা বাঁচার সংস্কৃতির দিকে ধাবিত হওয়া।",
        "bn": "\"হাসল কালচার\" থেকে সরে এসে \"লিভিং কালচার\" বা বাঁচার সংস্কৃতির দিকে ধাবিত হওয়া।"
      }
    }
  },
  {
    "id": 29,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Quality Over Quantity",
      "bn": "Quality Over Quantity"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Teach me that the good of life does not depend on its length, but its employment.",
          "bn": "Teach me that the good of life does not depend on its length, but its employment."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "It is possible, in fact very often so, that a man who has lived a long time has not lived enough.",
          "bn": "It is possible, in fact very often so, that a man who has lived a long time has not lived enough."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "When you always feel like your life is not complete... you’re never content.",
          "bn": "When you always feel like your life is not complete... you’re never content."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "জীবনের দৈর্ঘ্য",
          "bn": "জীবনের দৈর্ঘ্য"
        },
        "content": {
          "en": "কতদিন বাঁচলাম তার চেয়ে গুরুত্বপূর্ণ হলো কীভাবে বাঁচলাম। ১০০ বছরের অসচেতন জীবনের চেয়ে ৩০ বছরের সচেতন জীবন শ্রেয়।",
          "bn": "কতদিন বাঁচলাম তার চেয়ে গুরুত্বপূর্ণ হলো কীভাবে বাঁচলাম। ১০০ বছরের অসচেতন জীবনের চেয়ে ৩০ বছরের সচেতন জীবন শ্রেয়।"
        }
      },
      {
        "title": {
          "en": "অসম্পূর্ণতার বোধ",
          "bn": "অসম্পূর্ণতার বোধ"
        },
        "content": {
          "en": "\"ভবিষ্যতে কিছু একটা পেলে আমার জীবন পূর্ণ হবে\"—এই ধারণা আমাদের বর্তমানের আনন্দ কেড়ে নেয়।",
          "bn": "\"ভবিষ্যতে কিছু একটা পেলে আমার জীবন পূর্ণ হবে\"—এই ধারণা আমাদের বর্তমানের আনন্দ কেড়ে নেয়।"
        }
      },
      {
        "title": {
          "en": "পরিপূর্ণতা",
          "bn": "পরিপূর্ণতা"
        },
        "content": {
          "en": "প্রতিটি দিনকে একটি সম্পূর্ণ জীবন হিসেবে দেখা উচিত। আজ যা আছে, তাতেই তৃপ্ত থাকা।",
          "bn": "প্রতিটি দিনকে একটি সম্পূর্ণ জীবন হিসেবে দেখা উচিত। আজ যা আছে, তাতেই তৃপ্ত থাকা।"
        }
      },
      {
        "title": {
          "en": "মৃত্যুচেতনা",
          "bn": "মৃত্যুচেতনা"
        },
        "content": {
          "en": "মৃত্যু অনিবার্য জেনেও আমরা সময়ের অপচয় করি, যা স্টয়িকদের মতে সবচেয়ে বড় ভুল।",
          "bn": "মৃত্যু অনিবার্য জেনেও আমরা সময়ের অপচয় করি, যা স্টয়িকদের মতে সবচেয়ে বড় ভুল।"
        }
      }
    ],
    "practicalApplication": {
      "en": "দিনের শেষে ডায়েরিতে লিখুন: \"আজ আমি এমন কী করেছি যা আমার জীবনকে অর্থবহ করেছে?\" যদি উত্তর শূন্য হয়, তবে আগামীকালের রুটিনে পরিবর্তন আনুন। সময়কে টাকার মতো হিসাব করে খরচ করুন।",
      "bn": "দিনের শেষে ডায়েরিতে লিখুন: \"আজ আমি এমন কী করেছি যা আমার জীবনকে অর্থবহ করেছে?\" যদি উত্তর শূন্য হয়, তবে আগামীকালের রুটিনে পরিবর্তন আনুন। সময়কে টাকার মতো হিসাব করে খরচ করুন।"
    },
    "criticalReflection": {
      "en": "সেনেকার পরামর্শ তাদের জন্য কার্যকর যাদের সময়ের ওপর নিজস্ব নিয়ন্ত্রণ আছে। গিগ ওয়ার্কার বা দিনমজুরদের জন্য সময়ের \"গুণমান\" অপটিমাইজ করা একটি বিলাসিতা। প্রতিদিন \"অর্থবহভাবে বাঁচার\" চাপ কখনও কখনও মানসিক চাপের নতুন উৎস হয়ে উঠতে পারে।",
      "bn": "সেনেকার পরামর্শ তাদের জন্য কার্যকর যাদের সময়ের ওপর নিজস্ব নিয়ন্ত্রণ আছে। গিগ ওয়ার্কার বা দিনমজুরদের জন্য সময়ের \"গুণমান\" অপটিমাইজ করা একটি বিলাসিতা। প্রতিদিন \"অর্থবহভাবে বাঁচার\" চাপ কখনও কখনও মানসিক চাপের নতুন উৎস হয়ে উঠতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "দীর্ঘসূত্রিতা হ্রাস এবং \"ডুম-স্ক্রলিং\" কমে যাওয়া।",
        "bn": "দীর্ঘসূত্রিতা হ্রাস এবং \"ডুম-স্ক্রলিং\" কমে যাওয়া।"
      },
      "social": {
        "en": "অপ্রয়োজনে ওভারটাইম করার বদলে পরিবারের সাথে মানসম্মত সময় কাটানো।",
        "bn": "অপ্রয়োজনে ওভারটাইম করার বদলে পরিবারের সাথে মানসম্মত সময় কাটানো।"
      }
    }
  },
  {
    "id": 30,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Wisdom as the Only Solace",
      "bn": "Wisdom as the Only Solace"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "No one can live happily, or even bearably, without the pursuit of wisdom.",
          "bn": "No one can live happily, or even bearably, without the pursuit of wisdom."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Dedicate your life to wisdom. It’s the only way to live a consistently happy life.",
          "bn": "Dedicate your life to wisdom. It’s the only way to live a consistently happy life."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "জ্ঞানের সাধনা",
          "bn": "জ্ঞানের সাধনা"
        },
        "content": {
          "en": "সুখ বাহ্যিক বিনোদনে নেই, আছে জ্ঞান অর্জনে। জ্ঞান আমাদের মনের চোখ খুলে দেয়।",
          "bn": "সুখ বাহ্যিক বিনোদনে নেই, আছে জ্ঞান অর্জনে। জ্ঞান আমাদের মনের চোখ খুলে দেয়।"
        }
      },
      {
        "title": {
          "en": "'My Octopus Teacher' উদাহরণ",
          "bn": "'My Octopus Teacher' উদাহরণ"
        },
        "content": {
          "en": "ডকুমেন্টারির উদাহরণ দিয়ে দেখানো হয়েছে, যে কৌতূহল এবং শেখার আগ্রহ বিষণ্ণ জীবনকেও রোমাঞ্চকর করে তুলতে পারে।",
          "bn": "ডকুমেন্টারির উদাহরণ দিয়ে দেখানো হয়েছে, যে কৌতূহল এবং শেখার আগ্রহ বিষণ্ণ জীবনকেও রোমাঞ্চকর করে তুলতে পারে।"
        }
      },
      {
        "title": {
          "en": "অভিযোগহীনতা",
          "bn": "অভিযোগহীনতা"
        },
        "content": {
          "en": "জ্ঞানীরা পরিস্থিতির অভিযোগ করেন না; তারা পরিস্থিতির অর্থ খোঁজার চেষ্টা করেন।",
          "bn": "জ্ঞানীরা পরিস্থিতির অভিযোগ করেন না; তারা পরিস্থিতির অর্থ খোঁজার চেষ্টা করেন।"
        }
      },
      {
        "title": {
          "en": "ধারাবাহিক সুখ",
          "bn": "ধারাবাহিক সুখ"
        },
        "content": {
          "en": "বাহ্যিক সুখ আসে-যায়, কিন্তু জ্ঞানের আনন্দ স্থায়ী।",
          "bn": "বাহ্যিক সুখ আসে-যায়, কিন্তু জ্ঞানের আনন্দ স্থায়ী।"
        }
      }
    ],
    "practicalApplication": {
      "en": "বিনোদনের জন্য নেটফ্লিক্স না দেখে ইউটিউবে কোনো শিক্ষামূলক ডকুমেন্টারি বা টেড টক (TED Talk) দেখুন। সপ্তাহে একটি নতুন বিষয় সম্পর্কে জানুন (যেমন মহাকাশ, ইতিহাস বা মনোবিজ্ঞান)। শেখার আনন্দকে অভ্যাসে পরিণত করুন।",
      "bn": "বিনোদনের জন্য নেটফ্লিক্স না দেখে ইউটিউবে কোনো শিক্ষামূলক ডকুমেন্টারি বা টেড টক (TED Talk) দেখুন। সপ্তাহে একটি নতুন বিষয় সম্পর্কে জানুন (যেমন মহাকাশ, ইতিহাস বা মনোবিজ্ঞান)। শেখার আনন্দকে অভ্যাসে পরিণত করুন।"
    },
    "criticalReflection": {
      "en": "কেবল জ্ঞানের মাধ্যমেই সুখ সংজ্ঞায়িত করা সংকীর্ণ হতে পারে। অনেকেই বাগান করা, সেবা করা বা কায়িক শ্রমের মতো সাধারণ কাজের মধ্যে গভীর সুখ খুঁজে পান। সুখকে বুদ্ধিবৃত্তিক করা স্টয়িসিজমের একটি বিশেষ, এবং কিছুটা অভিজাত বৈশিষ্ট্য।",
      "bn": "কেবল জ্ঞানের মাধ্যমেই সুখ সংজ্ঞায়িত করা সংকীর্ণ হতে পারে। অনেকেই বাগান করা, সেবা করা বা কায়িক শ্রমের মতো সাধারণ কাজের মধ্যে গভীর সুখ খুঁজে পান। সুখকে বুদ্ধিবৃত্তিক করা স্টয়িসিজমের একটি বিশেষ, এবং কিছুটা অভিজাত বৈশিষ্ট্য।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "একটি আরও ব্যস্ত এবং কৌতূহলী মন; একঘেয়েমি হ্রাস।",
        "bn": "একটি আরও ব্যস্ত এবং কৌতূহলী মন; একঘেয়েমি হ্রাস।"
      },
      "social": {
        "en": "সমালোচনামূলক চিন্তায় সক্ষম একটি আরও শিক্ষিত নাগরিক সমাজ।",
        "bn": "সমালোচনামূলক চিন্তায় সক্ষম একটি আরও শিক্ষিত নাগরিক সমাজ।"
      }
    }
  },
  {
    "id": 31,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Equilibrium of Effort",
      "bn": "The Equilibrium of Effort"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The truth is we need to do hard things, to maintain equilibrium.",
          "bn": "The truth is we need to do hard things, to maintain equilibrium."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Nothing in life improves on its own without any form of nurturing.",
          "bn": "Nothing in life improves on its own without any form of nurturing."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Decide that you are an adult, and you are going to devote the rest of your life to making progress.",
          "bn": "Decide that you are an adult, and you are going to devote the rest of your life to making progress."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "কঠিন কাজের প্রয়োজন",
          "bn": "কঠিন কাজের প্রয়োজন"
        },
        "content": {
          "en": "শরীর ও মন ভালো রাখতে হলে আমাদের কঠিন কাজ (যেমন ব্যায়াম, গভীর মনোযোগের কাজ) করতেই হবে। আরাম শুধু ক্ষয় ডেকে আনে।",
          "bn": "শরীর ও মন ভালো রাখতে হলে আমাদের কঠিন কাজ (যেমন ব্যায়াম, গভীর মনোযোগের কাজ) করতেই হবে। আরাম শুধু ক্ষয় ডেকে আনে।"
        }
      },
      {
        "title": {
          "en": "ভারসাম্য",
          "bn": "ভারসাম্য"
        },
        "content": {
          "en": "স্টয়িকরা অলসতা এবং অতি-পরিশ্রম—উভয়কেই খারাপ মনে করতেন। তারা \"সক্রিয় বিশ্রাম\" এবং \"অর্থবহ শ্রমে\" বিশ্বাসী ছিলেন।",
          "bn": "স্টয়িকরা অলসতা এবং অতি-পরিশ্রম—উভয়কেই খারাপ মনে করতেন। তারা \"সক্রিয় বিশ্রাম\" এবং \"অর্থবহ শ্রমে\" বিশ্বাসী ছিলেন।"
        }
      },
      {
        "title": {
          "en": "রক্ষণাবেক্ষণ",
          "bn": "রক্ষণাবেক্ষণ"
        },
        "content": {
          "en": "একটি বাড়ি বা বাগানের মতো আমাদের জীবনও নিয়মিত যত্ন বা 'Nurturing' চায়। অবহেলা করলেই আগাছা জন্মাবে।",
          "bn": "একটি বাড়ি বা বাগানের মতো আমাদের জীবনও নিয়মিত যত্ন বা 'Nurturing' চায়। অবহেলা করলেই আগাছা জন্মাবে।"
        }
      },
      {
        "title": {
          "en": "প্রগতি",
          "bn": "প্রগতি"
        },
        "content": {
          "en": "প্রাপ্তবয়স্ক হওয়ার অর্থ হলো আজীবন উন্নতির প্রতি প্রতিশ্রুতিবদ্ধ থাকা।",
          "bn": "প্রাপ্তবয়স্ক হওয়ার অর্থ হলো আজীবন উন্নতির প্রতি প্রতিশ্রুতিবদ্ধ থাকা।"
        }
      }
    ],
    "practicalApplication": {
      "en": "প্রতিদিন অন্তত একটি কাজ করুন যা করতে আপনার কষ্ট হয় কিন্তু শরীরের জন্য ভালো (যেমন: ঠান্ডা পানিতে গোসল, ৩০ মিনিট দৌড়ানো বা কঠিন কোনো বই পড়া)। কষ্টের মধ্য দিয়ে নিজের ইচ্ছাশক্তিকে ঝালিয়ে নিন।",
      "bn": "প্রতিদিন অন্তত একটি কাজ করুন যা করতে আপনার কষ্ট হয় কিন্তু শরীরের জন্য ভালো (যেমন: ঠান্ডা পানিতে গোসল, ৩০ মিনিট দৌড়ানো বা কঠিন কোনো বই পড়া)। কষ্টের মধ্য দিয়ে নিজের ইচ্ছাশক্তিকে ঝালিয়ে নিন।"
    },
    "criticalReflection": {
      "en": "\"কঠিন কাজ করা\"-র সংস্কৃতি স্থিতিস্থাপকতা তৈরি করে ঠিকই, তবে এটি কষ্টের মহিমা প্রচার করতে পারে। কখনও কখনও সহজ পথটিই সবচেয়ে বুদ্ধিদীপ্ত (দক্ষতা)। অনবরত সংগ্রাম করা সর্বদা গুণের নয়; কৌশলগত আরাম বা বিশ্রামও একটি দক্ষতা।",
      "bn": "\"কঠিন কাজ করা\"-র সংস্কৃতি স্থিতিস্থাপকতা তৈরি করে ঠিকই, তবে এটি কষ্টের মহিমা প্রচার করতে পারে। কখনও কখনও সহজ পথটিই সবচেয়ে বুদ্ধিদীপ্ত (দক্ষতা)। অনবরত সংগ্রাম করা সর্বদা গুণের নয়; কৌশলগত আরাম বা বিশ্রামও একটি দক্ষতা।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "শারীরিক স্বাস্থ্যের উন্নতি এবং মানসিক শৃঙ্খলা।",
        "bn": "শারীরিক স্বাস্থ্যের উন্নতি এবং মানসিক শৃঙ্খলা।"
      },
      "social": {
        "en": "এমন একটি সংস্কৃতি যা মেধা এবং কষ্টের প্রতি শ্রদ্ধাশীল।",
        "bn": "এমন একটি সংস্কৃতি যা মেধা এবং কষ্টের প্রতি শ্রদ্ধাশীল।"
      }
    }
  },
  {
    "id": 32,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Liberation of Minimalism",
      "bn": "The Liberation of Minimalism"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "You cannot really lose anything because you don’t own anything in the first place.",
          "bn": "You cannot really lose anything because you don’t own anything in the first place."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "They are given to you for temporary keep. So never say, ‘I have lost something.’ You just returned it.",
          "bn": "They are given to you for temporary keep. So never say, ‘I have lost something.’ You just returned it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "মালিকানার ভ্রম",
          "bn": "মালিকানার ভ্রম"
        },
        "content": {
          "en": "আমরা মনে করি আমরা জিনিসের মালিক, আসলে আমরা কেবল সেগুলোর সাময়িক ব্যবহারকারী।",
          "bn": "আমরা মনে করি আমরা জিনিসের মালিক, আসলে আমরা কেবল সেগুলোর সাময়িক ব্যবহারকারী।"
        }
      },
      {
        "title": {
          "en": "হারানোর ভয়",
          "bn": "হারানোর ভয়"
        },
        "content": {
          "en": "যার নেই, তার হারানোর ভয়ও নেই। মালিকানা কমালে দুশ্চিন্তা কমে।",
          "bn": "যার নেই, তার হারানোর ভয়ও নেই। মালিকানা কমালে দুশ্চিন্তা কমে।"
        }
      },
      {
        "title": {
          "en": "ফিরিয়ে দেওয়া",
          "bn": "ফিরিয়ে দেওয়া"
        },
        "content": {
          "en": "কোনো কিছু হারিয়ে গেলে বা নষ্ট হলে ভাবুন, \"এটি আমি ফেরত দিয়েছি,\" হারিয়ে ফেলিনি। এটি শোক কমানোর শক্তিশালী উপায়।",
          "bn": "কোনো কিছু হারিয়ে গেলে বা নষ্ট হলে ভাবুন, \"এটি আমি ফেরত দিয়েছি,\" হারিয়ে ফেলিনি। এটি শোক কমানোর শক্তিশালী উপায়।"
        }
      },
      {
        "title": {
          "en": "মিনিমালিস্ট জীবন",
          "bn": "মিনিমালিস্ট জীবন"
        },
        "content": {
          "en": "কম জিনিস মানে কম মেইনটেন্যান্স, কম খরচ এবং বেশি মানসিক শান্তি।",
          "bn": "কম জিনিস মানে কম মেইনটেন্যান্স, কম খরচ এবং বেশি মানসিক শান্তি।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার ঘর থেকে এমন ৫টি জিনিস আজই ফেলে দিন বা দান করুন যা গত ৬ মাসে ব্যবহার করেননি। নিজেকে বলুন, \"এই জিনিসগুলো আমাকে সংজ্ঞায়িত করে না।\" এটি আপনাকে মুক্তির স্বাদ দেবে।",
      "bn": "আপনার ঘর থেকে এমন ৫টি জিনিস আজই ফেলে দিন বা দান করুন যা গত ৬ মাসে ব্যবহার করেননি। নিজেকে বলুন, \"এই জিনিসগুলো আমাকে সংজ্ঞায়িত করে না।\" এটি আপনাকে মুক্তির স্বাদ দেবে।"
    },
    "criticalReflection": {
      "en": "\"আপনার কোনো কিছুর মালিকানা নেই\"—এটি আধ্যাত্মিকভাবে মুক্তিদায়ক হলেও আইনি এবং ব্যবহারিক দিক থেকে জটিল। পুঁজিবাদী সমাজে মালিকানাই নিরাপত্তা (যেমন ভাড়াবাসা বনাম নিজস্ব বাড়ি)। এই দর্শনটি সবার জন্য আক্ষরিক আর্থিক কৌশলের চেয়ে মানসিক অনাসক্তি হিসেবে বেশি কার্যকর।",
      "bn": "\"আপনার কোনো কিছুর মালিকানা নেই\"—এটি আধ্যাত্মিকভাবে মুক্তিদায়ক হলেও আইনি এবং ব্যবহারিক দিক থেকে জটিল। পুঁজিবাদী সমাজে মালিকানাই নিরাপত্তা (যেমন ভাড়াবাসা বনাম নিজস্ব বাড়ি)। এই দর্শনটি সবার জন্য আক্ষরিক আর্থিক কৌশলের চেয়ে মানসিক অনাসক্তি হিসেবে বেশি কার্যকর।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "জমা করে রাখার প্রবণতা হ্রাস এবং বসবাসের স্থান পরিচ্ছন্ন রাখা।",
        "bn": "জমা করে রাখার প্রবণতা হ্রাস এবং বসবাসের স্থান পরিচ্ছন্ন রাখা।"
      },
      "social": {
        "en": "ভোক্তা বর্জ্য হ্রাস এবং দাতব্য কাজে অংশগ্রহণ বৃদ্ধি।",
        "bn": "ভোক্তা বর্জ্য হ্রাস এবং দাতব্য কাজে অংশগ্রহণ বৃদ্ধি।"
      }
    }
  },
  {
    "id": 33,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Accidental vs. Intentional Living",
      "bn": "Accidental vs. Intentional Living"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "It is shameful not to walk but to be carried, and suddenly dazed in the midst of worldly confusion to ask: ‘How did I come to this point?’",
          "bn": "It is shameful not to walk but to be carried, and suddenly dazed in the midst of worldly confusion to ask: ‘How did I come to this point?’"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Your life shouldn’t be an accident.",
          "bn": "Your life shouldn’t be an accident."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "স্রোতে গা ভাসানো",
          "bn": "স্রোতে গা ভাসানো"
        },
        "content": {
          "en": "অধিকাংশ মানুষ স্রোতের টানে ভেসে চলে এবং হঠাৎ মাঝবয়েসে গিয়ে অবাক হয়ে ভাবে, \"আমি এখানে কীভাবে এলাম?\" এটি লজ্জাজনক।",
          "bn": "অধিকাংশ মানুষ স্রোতের টানে ভেসে চলে এবং হঠাৎ মাঝবয়েসে গিয়ে অবাক হয়ে ভাবে, \"আমি এখানে কীভাবে এলাম?\" এটি লজ্জাজনক।"
        }
      },
      {
        "title": {
          "en": "দুর্ঘটনাবশত ক্যারিয়ার",
          "bn": "দুর্ঘটনাবশত ক্যারিয়ার"
        },
        "content": {
          "en": "লেখক তার বাবার লন্ড্রি ব্যবসার উদাহরণ দিয়ে দেখিয়েছেন, কীভাবে আমরা না বুঝেই কোনো পেশায় ঢুকে পড়ি।",
          "bn": "লেখক তার বাবার লন্ড্রি ব্যবসার উদাহরণ দিয়ে দেখিয়েছেন, কীভাবে আমরা না বুঝেই কোনো পেশায় ঢুকে পড়ি।"
        }
      },
      {
        "title": {
          "en": "সচেতন নির্বাচন",
          "bn": "সচেতন নির্বাচন"
        },
        "content": {
          "en": "প্রতিটি পদক্ষেপ—ক্যারিয়ার, সঙ্গী, বাসস্থান—সচেতনভাবে এবং যুক্তির মাধ্যমে নির্বাচন করা উচিত।",
          "bn": "প্রতিটি পদক্ষেপ—ক্যারিয়ার, সঙ্গী, বাসস্থান—সচেতনভাবে এবং যুক্তির মাধ্যমে নির্বাচন করা উচিত।"
        }
      },
      {
        "title": {
          "en": "প্রশ্ন করা",
          "bn": "প্রশ্ন করা"
        },
        "content": {
          "en": "নিয়মিত নিজেকে প্রশ্ন করুন: \"আমি যা করছি, তা কি আমি সত্যিই করতে চেয়েছিলাম?\"",
          "bn": "নিয়মিত নিজেকে প্রশ্ন করুন: \"আমি যা করছি, তা কি আমি সত্যিই করতে চেয়েছিলাম?\""
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ রাতে ১০ মিনিট সময় নিয়ে ভাবুন—আপনার বর্তমান চাকরি বা পড়াশোনা কি আপনার নিজের চয়েস, নাকি পরিস্থিতির শিকার? যদি পরিস্থিতির শিকার হন, তবে ছোট ছোট পদক্ষেপ নিতে শুরু করুন যা আপনাকে আপনার ইচ্ছের পথে নিয়ে যাবে।",
      "bn": "আজ রাতে ১০ মিনিট সময় নিয়ে ভাবুন—আপনার বর্তমান চাকরি বা পড়াশোনা কি আপনার নিজের চয়েস, নাকি পরিস্থিতির শিকার? যদি পরিস্থিতির শিকার হন, তবে ছোট ছোট পদক্ষেপ নিতে শুরু করুন যা আপনাকে আপনার ইচ্ছের পথে নিয়ে যাবে।"
    },
    "criticalReflection": {
      "en": "জীবন দুর্ঘটনাবশত হওয়া উচিত নয়—এই ধারণা ভাগ্য এবং দৈবচয়নের বিশাল ভূমিকাকে উপেক্ষা করে। অনেক সফল জীবনই সুখী দুর্ঘটনার ফল। অতিরিক্ত পরিকল্পনা বা প্রতিটি পদক্ষেপে সচেতনতা দাবি করা জীবনকে যান্ত্রিক করে তুলতে পারে এবং অপ্রত্যাশিত সুযোগ গ্রহণে বাধা দিতে পারে।",
      "bn": "জীবন দুর্ঘটনাবশত হওয়া উচিত নয়—এই ধারণা ভাগ্য এবং দৈবচয়নের বিশাল ভূমিকাকে উপেক্ষা করে। অনেক সফল জীবনই সুখী দুর্ঘটনার ফল। অতিরিক্ত পরিকল্পনা বা প্রতিটি পদক্ষেপে সচেতনতা দাবি করা জীবনকে যান্ত্রিক করে তুলতে পারে এবং অপ্রত্যাশিত সুযোগ গ্রহণে বাধা দিতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "জীবনের একটি সুসংগত গতিপথ এবং মধ্যবয়সকালীন সংকট (Mid-life crisis) হ্রাস।",
        "bn": "জীবনের একটি সুসংগত গতিপথ এবং মধ্যবয়সকালীন সংকট (Mid-life crisis) হ্রাস।"
      },
      "social": {
        "en": "অধিক সংখ্যক মানুষ তৃপ্তদায়ক পেশায় নিযুক্ত হবে, যা সামাজিকভাবে উৎপাদনশীলতা বাড়াতে পারে।",
        "bn": "অধিক সংখ্যক মানুষ তৃপ্তদায়ক পেশায় নিযুক্ত হবে, যা সামাজিকভাবে উৎপাদনশীলতা বাড়াতে পারে।"
      }
    }
  },
  {
    "id": 34,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Urgency of Now",
      "bn": "The Urgency of Now"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Whether you’re 25 or 85, it always seems like you have a short time left...",
          "bn": "Whether you’re 25 or 85, it always seems like you have a short time left..."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Live as if you were alone",
          "bn": "Live as if you were alone"
        },
        "author": {
          "en": "out in the wilderness.",
          "bn": "out in the wilderness."
        }
      },
      {
        "quote": {
          "en": "But as we’re waiting, we keep on wasting today.",
          "bn": "But as we’re waiting, we keep on wasting today."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সময়ের আপেক্ষিকতা",
          "bn": "সময়ের আপেক্ষিকতা"
        },
        "content": {
          "en": "বয়স যা-ই হোক, সময় সবসময় কম মনে হয়। তাই \"পরে করব\" বলার সুযোগ নেই।",
          "bn": "বয়স যা-ই হোক, সময় সবসময় কম মনে হয়। তাই \"পরে করব\" বলার সুযোগ নেই।"
        }
      },
      {
        "title": {
          "en": "অপেক্ষার ফাঁদ",
          "bn": "অপেক্ষার ফাঁদ"
        },
        "content": {
          "en": "আমরা সবসময় \"সঠিক সময়ের\" জন্য অপেক্ষা করি, কিন্তু সেই সময় কখনোই আসে না। এই অপেক্ষাতেই জীবন শেষ হয়ে যায়।",
          "bn": "আমরা সবসময় \"সঠিক সময়ের\" জন্য অপেক্ষা করি, কিন্তু সেই সময় কখনোই আসে না। এই অপেক্ষাতেই জীবন শেষ হয়ে যায়।"
        }
      },
      {
        "title": {
          "en": "বন্য জীবন",
          "bn": "বন্য জীবন"
        },
        "content": {
          "en": "মার্কাস অরেলিয়াস বলেছিলেন, শহরের ভিড়ে থেকেও এমনভাবে বাঁচুন যেন আপনি বনে একা আছেন—কারো ওপর নির্ভরশীল না হয়ে, বর্তমান মুহূর্তে ফোকাস করে।",
          "bn": "মার্কাস অরেলিয়াস বলেছিলেন, শহরের ভিড়ে থেকেও এমনভাবে বাঁচুন যেন আপনি বনে একা আছেন—কারো ওপর নির্ভরশীল না হয়ে, বর্তমান মুহূর্তে ফোকাস করে।"
        }
      },
      {
        "title": {
          "en": "আজই যথেষ্ট",
          "bn": "আজই যথেষ্ট"
        },
        "content": {
          "en": "ভবিষ্যৎ নিয়ে দুশ্চিন্তা না করে আজকের দিনটিকে পূর্ণভাবে উপভোগ করাই জীবনের সার্থকতা।",
          "bn": "ভবিষ্যৎ নিয়ে দুশ্চিন্তা না করে আজকের দিনটিকে পূর্ণভাবে উপভোগ করাই জীবনের সার্থকতা।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার বাকেট লিস্টের (Bucket List) এমন একটি কাজ বেছে নিন যা আপনি \"পরে করবেন\" বলে রেখে দিয়েছেন। সেই কাজটি করার জন্য আজকেই কোনো পদক্ষেপ নিন (যেমন টিকিট কাটা বা ক্লাস বুক করা)। ভাবুন, \"আর সময় নেই।\"",
      "bn": "আপনার বাকেট লিস্টের (Bucket List) এমন একটি কাজ বেছে নিন যা আপনি \"পরে করবেন\" বলে রেখে দিয়েছেন। সেই কাজটি করার জন্য আজকেই কোনো পদক্ষেপ নিন (যেমন টিকিট কাটা বা ক্লাস বুক করা)। ভাবুন, \"আর সময় নেই।\""
    },
    "criticalReflection": {
      "en": "ক্রমাগত জরুরি ভাব (\"সময় কম\") নিয়ে বেঁচে থাকা দীর্ঘস্থায়ী মানসিক চাপ বা ভোগবাদের দিকে নিয়ে যেতে পারে। একটি ভারসাম্যপূর্ণ দৃষ্টিভঙ্গি আতঙ্ক তৈরি না করেই নশ্বরতাকে স্বীকার করে, যা সন্তান লালন-পালন বা প্রতিষ্ঠান গড়ার মতো দীর্ঘমেয়াদী প্রকল্পগুলোর জন্য ধৈর্য ধারণে সহায়তা করে।",
      "bn": "ক্রমাগত জরুরি ভাব (\"সময় কম\") নিয়ে বেঁচে থাকা দীর্ঘস্থায়ী মানসিক চাপ বা ভোগবাদের দিকে নিয়ে যেতে পারে। একটি ভারসাম্যপূর্ণ দৃষ্টিভঙ্গি আতঙ্ক তৈরি না করেই নশ্বরতাকে স্বীকার করে, যা সন্তান লালন-পালন বা প্রতিষ্ঠান গড়ার মতো দীর্ঘমেয়াদী প্রকল্পগুলোর জন্য ধৈর্য ধারণে সহায়তা করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "দীর্ঘসূত্রিতা দূরীকরণ।",
        "bn": "দীর্ঘসূত্রিতা দূরীকরণ।"
      },
      "social": {
        "en": "একটি প্রাণবন্ত সংস্কৃতি যেখানে মানুষ তাদের স্বপ্ন নিয়ে কাজ করে।",
        "bn": "একটি প্রাণবন্ত সংস্কৃতি যেখানে মানুষ তাদের স্বপ্ন নিয়ে কাজ করে।"
      }
    }
  },
  {
    "id": 35,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Principle of Progression (Introductory)",
      "bn": "The Principle of Progression (Introductory)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Progress is not achieved by luck or accident, but by working on yourself daily.",
          "bn": "Progress is not achieved by luck or accident, but by working on yourself daily."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ভাগ্য বনাম কর্ম",
          "bn": "ভাগ্য বনাম কর্ম"
        },
        "content": {
          "en": "উন্নতি লটারির মতো হঠাৎ করে আসে না; এটি প্রতিদিনের ছোট ছোট অভ্যাসের ফসল।",
          "bn": "উন্নতি লটারির মতো হঠাৎ করে আসে না; এটি প্রতিদিনের ছোট ছোট অভ্যাসের ফসল।"
        }
      },
      {
        "title": {
          "en": "প্রতিদিনের কাজ",
          "bn": "প্রতিদিনের কাজ"
        },
        "content": {
          "en": "নিজেকে উন্নত করার জন্য প্রতিদিন কিছু না কিছু করতেই হবে। একদিন জিম করে বডি বিল্ডার হওয়া যায় না।",
          "bn": "নিজেকে উন্নত করার জন্য প্রতিদিন কিছু না কিছু করতেই হবে। একদিন জিম করে বডি বিল্ডার হওয়া যায় না।"
        }
      },
      {
        "title": {
          "en": "ধারাবাহিকতা",
          "bn": "ধারাবাহিকতা"
        },
        "content": {
          "en": "সাফল্যের মূল চাবিকাঠি হলো কনসিস্টেন্সি বা ধারাবাহিকতা।",
          "bn": "সাফল্যের মূল চাবিকাঠি হলো কনসিস্টেন্সি বা ধারাবাহিকতা।"
        }
      },
      {
        "title": {
          "en": "প্রক্রিয়ায় বিশ্বাস",
          "bn": "প্রক্রিয়ায় বিশ্বাস"
        },
        "content": {
          "en": "ফলাফলের চেয়ে প্রতিদিনের রুটিন বা প্রক্রিয়ার ওপর বিশ্বাস রাখা বেশি জরুরি।",
          "bn": "ফলাফলের চেয়ে প্রতিদিনের রুটিন বা প্রক্রিয়ার ওপর বিশ্বাস রাখা বেশি জরুরি।"
        }
      }
    ],
    "practicalApplication": {
      "en": "\"১% রুল\" মেনে চলুন। প্রতিদিন নিজেকে গতকালের চেয়ে মাত্র ১% উন্নত করার চেষ্টা করুন। সেটা হতে পারে ১০ মিনিট বেশি পড়া বা ৫ মিনিট বেশি হাঁটা। ১ বছরে এই ছোট পরিবর্তন বিশাল আকার ধারণ করবে।",
      "bn": "\"১% রুল\" মেনে চলুন। প্রতিদিন নিজেকে গতকালের চেয়ে মাত্র ১% উন্নত করার চেষ্টা করুন। সেটা হতে পারে ১০ মিনিট বেশি পড়া বা ৫ মিনিট বেশি হাঁটা। ১ বছরে এই ছোট পরিবর্তন বিশাল আকার ধারণ করবে।"
    },
    "criticalReflection": {
      "en": "ক্রমাগত \"উন্নতি\"-র প্রতি মোহ আধুনিক সেলফ-হেল্প কালচারের বৈশিষ্ট্য। এটি ইঙ্গিত দেয় যে আমরা যেমন আছি, তা কখনোই \"যথেষ্ট\" নয়। কখনও কখনও, অবিরাম অপটিমাইজেশনের স্নায়বিক তাড়ার চেয়ে নিজের বর্তমান অবস্থাকে মেনে নেওয়া বেশি স্বাস্থ্যকর।",
      "bn": "ক্রমাগত \"উন্নতি\"-র প্রতি মোহ আধুনিক সেলফ-হেল্প কালচারের বৈশিষ্ট্য। এটি ইঙ্গিত দেয় যে আমরা যেমন আছি, তা কখনোই \"যথেষ্ট\" নয়। কখনও কখনও, অবিরাম অপটিমাইজেশনের স্নায়বিক তাড়ার চেয়ে নিজের বর্তমান অবস্থাকে মেনে নেওয়া বেশি স্বাস্থ্যকর।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "দক্ষতা এবং চরিত্রের চক্রবৃদ্ধি হারে বৃদ্ধি।",
        "bn": "দক্ষতা এবং চরিত্রের চক্রবৃদ্ধি হারে বৃদ্ধি।"
      },
      "social": {
        "en": "অধিকারবোধের (Entitlement) পরিবর্তে যোগ্যতা এবং কঠোর পরিশ্রমের ওপর মনোযোগী সমাজ।",
        "bn": "অধিকারবোধের (Entitlement) পরিবর্তে যোগ্যতা এবং কঠোর পরিশ্রমের ওপর মনোযোগী সমাজ।"
      }
    }
  },
  {
    "id": 36,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Discipline of Resilience",
      "bn": "The Discipline of Resilience"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "We will train both soul and body when we accustom ourselves to cold, heat, thirst, hunger, scarcity of food, hardness of bed, abstaining from pleasures, and enduring pains.",
          "bn": "We will train both soul and body when we accustom ourselves to cold, heat, thirst, hunger, scarcity of food, hardness of bed, abstaining from pleasures, and enduring pains."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Only when you exert moderate effort can you maintain your strength, and potentially grow stronger.",
          "bn": "Only when you exert moderate effort can you maintain your strength, and potentially grow stronger."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "কষ্টের অনুশীলন",
          "bn": "কষ্টের অনুশীলন"
        },
        "content": {
          "en": "মুসোনিয়াস রুফাসের মতে, শরীর ও মনকে ইচ্ছাকৃতভাবে কষ্টের (যেমন ঠান্ডা, ক্ষুধা) মুখোমুখি করা উচিত। এটি আমাদের সহনশীলতা বাড়ায়।",
          "bn": "মুসোনিয়াস রুফাসের মতে, শরীর ও মনকে ইচ্ছাকৃতভাবে কষ্টের (যেমন ঠান্ডা, ক্ষুধা) মুখোমুখি করা উচিত। এটি আমাদের সহনশীলতা বাড়ায়।"
        }
      },
      {
        "title": {
          "en": "ফিলোসফি বনাম অ্যাকশন",
          "bn": "ফিলোসফি বনাম অ্যাকশন"
        },
        "content": {
          "en": "কেবল দর্শন পড়লেই হবে না, তা বাস্তবে প্রয়োগ করতে হবে। যেমন জিমে না গিয়ে সিক্স প্যাক বানানো যায় না, তেমনি চর্চা ছাড়া মনের জোর বাড়ে না।",
          "bn": "কেবল দর্শন পড়লেই হবে না, তা বাস্তবে প্রয়োগ করতে হবে। যেমন জিমে না গিয়ে সিক্স প্যাক বানানো যায় না, তেমনি চর্চা ছাড়া মনের জোর বাড়ে না।"
        }
      },
      {
        "title": {
          "en": "মডারেট এফোর্ট",
          "bn": "মডারেট এফোর্ট"
        },
        "content": {
          "en": "সবসময় নিজেকে ১০০% পুশ করার দরকার নেই। 'Moderate Effort' বা পরিমিত প্রচেষ্টাই দীর্ঘমেয়াদী শক্তির চাবিকাঠি।",
          "bn": "সবসময় নিজেকে ১০০% পুশ করার দরকার নেই। 'Moderate Effort' বা পরিমিত প্রচেষ্টাই দীর্ঘমেয়াদী শক্তির চাবিকাঠি।"
        }
      },
      {
        "title": {
          "en": "বডি-মাইন্ড কানেকশন",
          "bn": "বডি-মাইন্ড কানেকশন"
        },
        "content": {
          "en": "শরীর দুর্বল হলে মনও দুর্বল হয়ে পড়ে। তাই শরীরচর্চা মনের জোর বাড়ানোর একটি হাতিয়ার।",
          "bn": "শরীর দুর্বল হলে মনও দুর্বল হয়ে পড়ে। তাই শরীরচর্চা মনের জোর বাড়ানোর একটি হাতিয়ার।"
        }
      }
    ],
    "practicalApplication": {
      "en": "সপ্তাহে একদিন ইচ্ছাকৃতভাবে কোনো একটি আরাম ত্যাগ করুন (Voluntary Discomfort)। হতে পারে ফ্যানের স্পিড কমিয়ে ঘুমানো, প্রিয় খাবার না খাওয়া বা লিফট ব্যবহার না করে সিঁড়ি দিয়ে ওঠা। এটি আপনার মস্তিষ্ককে কঠিন পরিস্থিতির জন্য প্রস্তুত করবে।",
      "bn": "সপ্তাহে একদিন ইচ্ছাকৃতভাবে কোনো একটি আরাম ত্যাগ করুন (Voluntary Discomfort)। হতে পারে ফ্যানের স্পিড কমিয়ে ঘুমানো, প্রিয় খাবার না খাওয়া বা লিফট ব্যবহার না করে সিঁড়ি দিয়ে ওঠা। এটি আপনার মস্তিষ্ককে কঠিন পরিস্থিতির জন্য প্রস্তুত করবে।"
    },
    "criticalReflection": {
      "en": "যদিও \"ইচ্ছাকৃত অস্বস্তি\" স্থিতিস্থাপকতা তৈরি করে, এটি একটি সুবিধাপ্রাপ্ত অবস্থান থেকে আসে। যারা ইতিমধ্যেই দারিদ্র্য বা দীর্ঘস্থায়ী কষ্টে আছেন, তাদের জন্য জীবনটাই একটা প্রশিক্ষণ। শারীরিক কৃচ্ছ্রসাধনের ওপর স্টয়িক গুরুত্ব যদি আত্ম-যত্নের সাথে ভারসাম্যপূর্ণ না হয়, তবে তা কখনও কখনও নিজেকে শাস্তি দেওয়ার শামিল হতে পারে।",
      "bn": "যদিও \"ইচ্ছাকৃত অস্বস্তি\" স্থিতিস্থাপকতা তৈরি করে, এটি একটি সুবিধাপ্রাপ্ত অবস্থান থেকে আসে। যারা ইতিমধ্যেই দারিদ্র্য বা দীর্ঘস্থায়ী কষ্টে আছেন, তাদের জন্য জীবনটাই একটা প্রশিক্ষণ। শারীরিক কৃচ্ছ্রসাধনের ওপর স্টয়িক গুরুত্ব যদি আত্ম-যত্নের সাথে ভারসাম্যপূর্ণ না হয়, তবে তা কখনও কখনও নিজেকে শাস্তি দেওয়ার শামিল হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "ব্যথা সহ্য করার ক্ষমতা বৃদ্ধি এবং বিলাসিতার ওপর নির্ভরতা হ্রাস।",
        "bn": "ব্যথা সহ্য করার ক্ষমতা বৃদ্ধি এবং বিলাসিতার ওপর নির্ভরতা হ্রাস।"
      },
      "social": {
        "en": "কম ভোগবাদী জীবনযাপন।",
        "bn": "কম ভোগবাদী জীবনযাপন।"
      }
    }
  },
  {
    "id": 37,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Art of Making Do",
      "bn": "The Art of Making Do"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Until we have begun to go without them, we fail to realize how unnecessary many things are.",
          "bn": "Until we have begun to go without them, we fail to realize how unnecessary many things are."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The only things we really can’t live without are the basics",
          "bn": "The only things we really can’t live without are the basics"
        },
        "author": {
          "en": "water, food, shelter. Other things are optional.",
          "bn": "water, food, shelter. Other things are optional."
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "অপ্রয়োজনীয় নির্ভরতা",
          "bn": "অপ্রয়োজনীয় নির্ভরতা"
        },
        "content": {
          "en": "আমরা অনেক জিনিসের ওপর মানসিকভাবে নির্ভরশীল হয়ে পড়ি (যেমন এসি, দামী কফি), যা আসলে বেঁচে থাকার জন্য অপরিহার্য নয়।",
          "bn": "আমরা অনেক জিনিসের ওপর মানসিকভাবে নির্ভরশীল হয়ে পড়ি (যেমন এসি, দামী কফি), যা আসলে বেঁচে থাকার জন্য অপরিহার্য নয়।"
        }
      },
      {
        "title": {
          "en": "রিসোর্সফুলনেস",
          "bn": "রিসোর্সফুলনেস"
        },
        "content": {
          "en": "জীবনের সার্থকতা আমাদের কী আছে তার ওপর নয়, বরং যা আছে তা আমরা কীভাবে ব্যবহার করছি তার ওপর নির্ভর করে।",
          "bn": "জীবনের সার্থকতা আমাদের কী আছে তার ওপর নয়, বরং যা আছে তা আমরা কীভাবে ব্যবহার করছি তার ওপর নির্ভর করে।"
        }
      },
      {
        "title": {
          "en": "ভ্রমণের শিক্ষা",
          "bn": "ভ্রমণের শিক্ষা"
        },
        "content": {
          "en": "লেখক যখন ছোট ব্যাগে ভ্রমণ করতেন, তখন তিনি বুঝতেন যে দৈনন্দিন জীবনে আমরা কতটা বোঝা বয়ে বেড়াই।",
          "bn": "লেখক যখন ছোট ব্যাগে ভ্রমণ করতেন, তখন তিনি বুঝতেন যে দৈনন্দিন জীবনে আমরা কতটা বোঝা বয়ে বেড়াই।"
        }
      },
      {
        "title": {
          "en": "অর্থনৈতিক অনিশ্চয়তা",
          "bn": "অর্থনৈতিক অনিশ্চয়তা"
        },
        "content": {
          "en": "মন্দার সময় যারা কম রিসোর্সে চলতে পারে, তারাই টিকে থাকে।",
          "bn": "মন্দার সময় যারা কম রিসোর্সে চলতে পারে, তারাই টিকে থাকে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ আপনার ঘরের দিকে তাকান এবং ৩টি জিনিস চিহ্নিত করুন যা গত ৬ মাসে ব্যবহার করেননি। সেগুলোকে স্টোরে রেখে দিন বা দান করুন। নিজেকে প্রমাণ করুন যে এগুলো ছাড়াই আপনি দিব্যি চলতে পারেন।",
      "bn": "আজ আপনার ঘরের দিকে তাকান এবং ৩টি জিনিস চিহ্নিত করুন যা গত ৬ মাসে ব্যবহার করেননি। সেগুলোকে স্টোরে রেখে দিন বা দান করুন। নিজেকে প্রমাণ করুন যে এগুলো ছাড়াই আপনি দিব্যি চলতে পারেন।"
    },
    "criticalReflection": {
      "en": "রিসোর্সফুলনেস একটি গুণ, কিন্তু পদ্ধতিগত অভাব একটি সামাজিক ব্যর্থতা। ব্যক্তিগত অভিযোজন ক্ষমতা ভালো হলেও, \"কম দিয়ে চালিয়ে নেওয়া\"-কে মহিমান্বিত করা উচিত নয় যদি তা অর্থনৈতিক বৈষম্যকে উপেক্ষা করার অজুহাত হয়, যা মানুষকে বাধ্য হয়ে রিসোর্সফুল হতে শেখায়, পছন্দ থেকে নয়।",
      "bn": "রিসোর্সফুলনেস একটি গুণ, কিন্তু পদ্ধতিগত অভাব একটি সামাজিক ব্যর্থতা। ব্যক্তিগত অভিযোজন ক্ষমতা ভালো হলেও, \"কম দিয়ে চালিয়ে নেওয়া\"-কে মহিমান্বিত করা উচিত নয় যদি তা অর্থনৈতিক বৈষম্যকে উপেক্ষা করার অজুহাত হয়, যা মানুষকে বাধ্য হয়ে রিসোর্সফুল হতে শেখায়, পছন্দ থেকে নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "আর্থিক ক্ষতি নিয়ে উদ্বেগ হ্রাস।",
        "bn": "আর্থিক ক্ষতি নিয়ে উদ্বেগ হ্রাস।"
      },
      "social": {
        "en": "ভোগ বা কনজামশন কমার ফলে পরিবেশগত প্রভাব হ্রাস।",
        "bn": "ভোগ বা কনজামশন কমার ফলে পরিবেশগত প্রভাব হ্রাস।"
      }
    }
  },
  {
    "id": 38,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Pedagogy of Error",
      "bn": "The Pedagogy of Error"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "To err is human, but to persist (in the mistake) is diabolical.",
          "bn": "To err is human, but to persist (in the mistake) is diabolical."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The unexamined life is not worth living.",
          "bn": "The unexamined life is not worth living."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ভুলের অনিবার্যতা",
          "bn": "ভুলের অনিবার্যতা"
        },
        "content": {
          "en": "কিছু ভুল এড়ানো যায় (জ্ঞান দিয়ে), আবার কিছু ভুল এড়ানো অসম্ভব। জীবনের অংশ হিসেবেই ভুলকে মেনে নিতে হবে।",
          "bn": "কিছু ভুল এড়ানো যায় (জ্ঞান দিয়ে), আবার কিছু ভুল এড়ানো অসম্ভব। জীবনের অংশ হিসেবেই ভুলকে মেনে নিতে হবে।"
        }
      },
      {
        "title": {
          "en": "শারীরিক শিক্ষা",
          "bn": "শারীরিক শিক্ষা"
        },
        "content": {
          "en": "লেখক তার পিঠের ইনজুরি থেকে শিখেছেন যে ছোট ছোট অবহেলা (খারাপ পশ্চার) বড় ভুলের কারণ হতে পারে।",
          "bn": "লেখক তার পিঠের ইনজুরি থেকে শিখেছেন যে ছোট ছোট অবহেলা (খারাপ পশ্চার) বড় ভুলের কারণ হতে পারে।"
        }
      },
      {
        "title": {
          "en": "আত্ম-পর্যালোচনা",
          "bn": "আত্ম-পর্যালোচনা"
        },
        "content": {
          "en": "নিয়মিত নিজেকে প্রশ্ন করা—\"আমি কি ঠিক পথে আছি?\"—ভুলের পুনরাবৃত্তি রোধ করে।",
          "bn": "নিয়মিত নিজেকে প্রশ্ন করা—\"আমি কি ঠিক পথে আছি?\"—ভুলের পুনরাবৃত্তি রোধ করে।"
        }
      },
      {
        "title": {
          "en": "শেখার মানসিকতা",
          "bn": "শেখার মানসিকতা"
        },
        "content": {
          "en": "ভুল মানে ব্যর্থতা নয়, এটি একটি ডেটা পয়েন্ট যা আমাদের শেখায় কীভাবে আর কাজ করা উচিত নয়।",
          "bn": "ভুল মানে ব্যর্থতা নয়, এটি একটি ডেটা পয়েন্ট যা আমাদের শেখায় কীভাবে আর কাজ করা উচিত নয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "গত মাসে আপনি কী কী ভুল করেছেন তার একটি তালিকা করুন। নিজেকে বিচার না করে (Non-judgmentally) প্রতিটি ভুলের পাশে লিখুন—\"এখান থেকে আমি কী শিখলাম?\" এবং \"আগামীবার আমি কী ভিন্নভাবে করব?\"",
      "bn": "গত মাসে আপনি কী কী ভুল করেছেন তার একটি তালিকা করুন। নিজেকে বিচার না করে (Non-judgmentally) প্রতিটি ভুলের পাশে লিখুন—\"এখান থেকে আমি কী শিখলাম?\" এবং \"আগামীবার আমি কী ভিন্নভাবে করব?\""
    },
    "criticalReflection": {
      "en": "\"ভুলে অটল থাকা শয়তানের কাজ\"—এই কথাটি ভুলের পুনরাবৃত্তির ওপর ভারী নৈতিক চাপ সৃষ্টি করে। বাস্তবে, কোনো অভ্যাস (যেমন খারাপ বসার ভঙ্গি বা আসক্তি) ভাঙতে গেলে বারবার স্খলন হতে পারে। পুনরাবৃত্তিকে \"শয়তানি\" হিসেবে দেখার চেয়ে নমনীয় দৃষ্টিভঙ্গি আচরণ পরিবর্তনের জন্য বেশি কার্যকর হতে পারে।",
      "bn": "\"ভুলে অটল থাকা শয়তানের কাজ\"—এই কথাটি ভুলের পুনরাবৃত্তির ওপর ভারী নৈতিক চাপ সৃষ্টি করে। বাস্তবে, কোনো অভ্যাস (যেমন খারাপ বসার ভঙ্গি বা আসক্তি) ভাঙতে গেলে বারবার স্খলন হতে পারে। পুনরাবৃত্তিকে \"শয়তানি\" হিসেবে দেখার চেয়ে নমনীয় দৃষ্টিভঙ্গি আচরণ পরিবর্তনের জন্য বেশি কার্যকর হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "দ্রুত শেখার ক্ষমতা এবং ব্যর্থতা নিয়ে অপরাধবোধ হ্রাস।",
        "bn": "দ্রুত শেখার ক্ষমতা এবং ব্যর্থতা নিয়ে অপরাধবোধ হ্রাস।"
      },
      "social": {
        "en": "দোষারোপের পরিবর্তে দায়বদ্ধতার সংস্কৃতি।",
        "bn": "দোষারোপের পরিবর্তে দায়বদ্ধতার সংস্কৃতি।"
      }
    }
  },
  {
    "id": 39,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Rewriting the Internal Script",
      "bn": "Rewriting the Internal Script"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "You have the power to change your self-talk if you want.",
          "bn": "You have the power to change your self-talk if you want."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "No one ever got worse by trying to be better.",
          "bn": "No one ever got worse by trying to be better."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "প্যাসিভ বনাম প্রো-অ্যাক্টিভ",
          "bn": "প্যাসিভ বনাম প্রো-অ্যাক্টিভ"
        },
        "content": {
          "en": "অসুস্থতা বা কষ্টের সময় \"আমি শেষ হয়ে গেলাম\" (প্যাসিভ) না বলে \"আমি এর মোকাবেলা করব\" (প্রো-অ্যাক্টিভ) বলা উচিত।",
          "bn": "অসুস্থতা বা কষ্টের সময় \"আমি শেষ হয়ে গেলাম\" (প্যাসিভ) না বলে \"আমি এর মোকাবেলা করব\" (প্রো-অ্যাক্টিভ) বলা উচিত।"
        }
      },
      {
        "title": {
          "en": "যুক্তির ব্যবহার",
          "bn": "যুক্তির ব্যবহার"
        },
        "content": {
          "en": "স্টয়িকরা আবেগের চেয়ে যুক্তিকে প্রাধান্য দেন। সেলফ-টক হতে হবে যৌক্তিক, আবেগপ্রবণ নয়।",
          "bn": "স্টয়িকরা আবেগের চেয়ে যুক্তিকে প্রাধান্য দেন। সেলফ-টক হতে হবে যৌক্তিক, আবেগপ্রবণ নয়।"
        }
      },
      {
        "title": {
          "en": "শারীরিক প্রভাব",
          "bn": "শারীরিক প্রভাব"
        },
        "content": {
          "en": "নেতিবাচক কথা শরীরকে আরও দুর্বল করে দেয়। লেখক তার IBS (পেটের সমস্যা) মোকাবেলায় পজিটিভ সেলফ-টকের শক্তি দেখেছেন।",
          "bn": "নেতিবাচক কথা শরীরকে আরও দুর্বল করে দেয়। লেখক তার IBS (পেটের সমস্যা) মোকাবেলায় পজিটিভ সেলফ-টকের শক্তি দেখেছেন।"
        }
      },
      {
        "title": {
          "en": "পারফেকশন নয়, প্রগতি",
          "bn": "পারফেকশন নয়, প্রগতি"
        },
        "content": {
          "en": "আমরা নিখুঁত হতে পারব না, কিন্তু প্রতিদিন একটু একটু করে ভালো হওয়ার চেষ্টা করতে পারি।",
          "bn": "আমরা নিখুঁত হতে পারব না, কিন্তু প্রতিদিন একটু একটু করে ভালো হওয়ার চেষ্টা করতে পারি।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যখনই মনে মনে বলবেন \"আমি পারব না\" বা \"এটা খুব কঠিন\", তখন বাক্যটি রি-ফ্রেজ (Rephrase) করুন। বলুন, \"এটা কঠিন, কিন্তু আমি এর সমাধান বের করতে পারব।\" নিজের নাম ধরে নিজেকে উৎসাহিত করুন (যেমন: \"শোন",
      "bn": "যখনই মনে মনে বলবেন \"আমি পারব না\" বা \"এটা খুব কঠিন\", তখন বাক্যটি রি-ফ্রেজ (Rephrase) করুন। বলুন, \"এটা কঠিন, কিন্তু আমি এর সমাধান বের করতে পারব।\" নিজের নাম ধরে নিজেকে উৎসাহিত করুন (যেমন: \"শোন"
    },
    "criticalReflection": {
      "en": "যদিও ইতিবাচক সেলফ-টক শক্তিশালী (CBT নীতি), এর সীমাবদ্ধতা আছে। গুরুতর ক্রনিক রোগ বা মানসিক স্বাস্থ্য সমস্যায় কেবল \"ভালো সেলফ-টক\" নয়, বরং চিকিৎসার প্রয়োজন হয়। শারীরিক অসুস্থতা সারাতে কেবল মানসিকতার ওপর অতিরিক্ত নির্ভরতা প্রয়োজনীয় চিকিৎসা অবহেলার কারণ হতে পারে।",
      "bn": "যদিও ইতিবাচক সেলফ-টক শক্তিশালী (CBT নীতি), এর সীমাবদ্ধতা আছে। গুরুতর ক্রনিক রোগ বা মানসিক স্বাস্থ্য সমস্যায় কেবল \"ভালো সেলফ-টক\" নয়, বরং চিকিৎসার প্রয়োজন হয়। শারীরিক অসুস্থতা সারাতে কেবল মানসিকতার ওপর অতিরিক্ত নির্ভরতা প্রয়োজনীয় চিকিৎসা অবহেলার কারণ হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "ব্যথা ব্যবস্থাপনা এবং মানসিক সহনশীলতা বৃদ্ধি।",
        "bn": "ব্যথা ব্যবস্থাপনা এবং মানসিক সহনশীলতা বৃদ্ধি।"
      },
      "social": {
        "en": "সামাজিক মিথস্ক্রিয়ায় অভিযোগের মাত্রা হ্রাস।",
        "bn": "সামাজিক মিথস্ক্রিয়ায় অভিযোগের মাত্রা হ্রাস।"
      }
    }
  },
  {
    "id": 40,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Wisdom into Action",
      "bn": "Wisdom into Action"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Your job is to perform in this game called life. And to perform, you need two things: A plan, and stamina.",
          "bn": "Your job is to perform in this game called life. And to perform, you need two things: A plan, and stamina."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Don’t just learn things. Turn everything you learn into an activity.",
          "bn": "Don’t just learn things. Turn everything you learn into an activity."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "জ্ঞান বনাম প্রয়োগ",
          "bn": "জ্ঞান বনাম প্রয়োগ"
        },
        "content": {
          "en": "হাজারটা বই পড়ে লাভ নেই যদি তা কাজে লাগানো না হয়। জ্ঞান জমা করা আর জ্ঞান প্রয়োগ করা—দুটি ভিন্ন জিনিস।",
          "bn": "হাজারটা বই পড়ে লাভ নেই যদি তা কাজে লাগানো না হয়। জ্ঞান জমা করা আর জ্ঞান প্রয়োগ করা—দুটি ভিন্ন জিনিস।"
        }
      },
      {
        "title": {
          "en": "অ্যাথলেট মানসিকতা",
          "bn": "অ্যাথলেট মানসিকতা"
        },
        "content": {
          "en": "জীবনকে একটি খেলার মতো দেখতে হবে। খেলার জন্য যেমন স্ট্যামিনা বা দম লাগে, জীবনের জন্যও মানসিক স্ট্যামিনা দরকার।",
          "bn": "জীবনকে একটি খেলার মতো দেখতে হবে। খেলার জন্য যেমন স্ট্যামিনা বা দম লাগে, জীবনের জন্যও মানসিক স্ট্যামিনা দরকার।"
        }
      },
      {
        "title": {
          "en": "গোপন রহস্য",
          "bn": "গোপন রহস্য"
        },
        "content": {
          "en": "উন্নতির কোনো গোপন রহস্য নেই; আসল রহস্য হলো একঘেয়ে বা বোরিং কাজগুলো প্রতিদিন করে যাওয়া (Consistency)।",
          "bn": "উন্নতির কোনো গোপন রহস্য নেই; আসল রহস্য হলো একঘেয়ে বা বোরিং কাজগুলো প্রতিদিন করে যাওয়া (Consistency)।"
        }
      },
      {
        "title": {
          "en": "মাইন্ডফুল ট্রেনিং",
          "bn": "মাইন্ডফুল ট্রেনিং"
        },
        "content": {
          "en": "যা শিখছেন, তা ছোট কোনো কাজের মাধ্যমে চর্চা করুন। লেখা শিখলে রোজ লিখুন, ধ্যান শিখলে রোজ ৫ মিনিট বসুন।",
          "bn": "যা শিখছেন, তা ছোট কোনো কাজের মাধ্যমে চর্চা করুন। লেখা শিখলে রোজ লিখুন, ধ্যান শিখলে রোজ ৫ মিনিট বসুন।"
        }
      }
    ],
    "practicalApplication": {
      "en": "গত এক সপ্তাহে আপনি যা নতুন শিখেছেন (বই বা ভিডিও থেকে), তার ওপর ভিত্তি করে আজই একটি অ্যাকশন নিন। যদি স্বাস্থ্যের টিপস দেখে থাকেন, তবে আজই একটি স্বাস্থ্যকর মিল খান। \"Learning\" কে \"Doing\"-এ রূপান্তর করুন।",
      "bn": "গত এক সপ্তাহে আপনি যা নতুন শিখেছেন (বই বা ভিডিও থেকে), তার ওপর ভিত্তি করে আজই একটি অ্যাকশন নিন। যদি স্বাস্থ্যের টিপস দেখে থাকেন, তবে আজই একটি স্বাস্থ্যকর মিল খান। \"Learning\" কে \"Doing\"-এ রূপান্তর করুন।"
    },
    "criticalReflection": {
      "en": "\"অ্যাথলেট মানসিকতা\" জীবনকে একটি পারফরম্যান্স-ভিত্তিক দৃষ্টিভঙ্গিতে দেখে। সবাই সবসময় \"পারফর্ম\" করতে চায় না; কেউ কেউ তুষ্টি বা স্থিরতা চায়। ক্রমাগত কাজ করার প্রবণতা জীবনকে একটি উপযোগিতামূলক বা Utilitarian দর্শনের দিকে নিয়ে যেতে পারে, যেখানে জ্ঞানের মূল্য কেবল তখনই যদি তা কাজে লাগে, যা নিছক আনন্দের জন্য শিল্প বা দর্শন চর্চাকে অবহেলা করে।",
      "bn": "\"অ্যাথলেট মানসিকতা\" জীবনকে একটি পারফরম্যান্স-ভিত্তিক দৃষ্টিভঙ্গিতে দেখে। সবাই সবসময় \"পারফর্ম\" করতে চায় না; কেউ কেউ তুষ্টি বা স্থিরতা চায়। ক্রমাগত কাজ করার প্রবণতা জীবনকে একটি উপযোগিতামূলক বা Utilitarian দর্শনের দিকে নিয়ে যেতে পারে, যেখানে জ্ঞানের মূল্য কেবল তখনই যদি তা কাজে লাগে, যা নিছক আনন্দের জন্য শিল্প বা দর্শন চর্চাকে অবহেলা করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উচ্চ দক্ষতা এবং স্কিল অর্জন।",
        "bn": "উচ্চ দক্ষতা এবং স্কিল অর্জন।"
      },
      "social": {
        "en": "একটি ব্যবহারিক সমাজ যা সনদের চেয়ে ফলাফলকে বেশি গুরুত্ব দেয়।",
        "bn": "একটি ব্যবহারিক সমাজ যা সনদের চেয়ে ফলাফলকে বেশি গুরুত্ব দেয়।"
      }
    }
  },
  {
    "id": 41,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Internal Fortification",
      "bn": "Internal Fortification"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Each day acquire something that will fortify you against poverty, against death, indeed against other misfortunes as well.",
          "bn": "Each day acquire something that will fortify you against poverty, against death, indeed against other misfortunes as well."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "The REAL reward you acquire is not the money or status, it’s the energy, pride, and sense of accomplishment.",
          "bn": "The REAL reward you acquire is not the money or status, it’s the energy, pride, and sense of accomplishment."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "বাহ্যিক বনাম অভ্যন্তরীণ পুরস্কার",
          "bn": "বাহ্যিক বনাম অভ্যন্তরীণ পুরস্কার"
        },
        "content": {
          "en": "টাকা বা স্ট্যাটাস হলো কাজের উপজাত (By-product)। আসল পুরস্কার হলো কাজ শেষ করার আত্মতৃপ্তি।",
          "bn": "টাকা বা স্ট্যাটাস হলো কাজের উপজাত (By-product)। আসল পুরস্কার হলো কাজ শেষ করার আত্মতৃপ্তি।"
        }
      },
      {
        "title": {
          "en": "প্রতিদিনের সুরক্ষা",
          "bn": "প্রতিদিনের সুরক্ষা"
        },
        "content": {
          "en": "প্রতিদিন এমন একটি চিন্তা বা দক্ষতা অর্জন করুন যা আপনাকে ভবিষ্যতের দারিদ্র্য বা মৃত্যুভয় থেকে রক্ষা করবে।",
          "bn": "প্রতিদিন এমন একটি চিন্তা বা দক্ষতা অর্জন করুন যা আপনাকে ভবিষ্যতের দারিদ্র্য বা মৃত্যুভয় থেকে রক্ষা করবে।"
        }
      },
      {
        "title": {
          "en": "তুলনার ফাঁদ",
          "bn": "তুলনার ফাঁদ"
        },
        "content": {
          "en": "অন্যের ফলোয়ার বা সম্পদ দেখে নিজের উন্নতি মাপা বোকামি। নিজের গতকালের সাথে আজকের তুলনা করুন।",
          "bn": "অন্যের ফলোয়ার বা সম্পদ দেখে নিজের উন্নতি মাপা বোকামি। নিজের গতকালের সাথে আজকের তুলনা করুন।"
        }
      },
      {
        "title": {
          "en": "দক্ষতা অর্জন",
          "bn": "দক্ষতা অর্জন"
        },
        "content": {
          "en": "আপনি যদি বিখ্যাত নাও হন, তবুও দক্ষতা অর্জন করলে আপনি জীবনের যেকোনো ঝড় মোকাবেলা করতে পারবেন।",
          "bn": "আপনি যদি বিখ্যাত নাও হন, তবুও দক্ষতা অর্জন করলে আপনি জীবনের যেকোনো ঝড় মোকাবেলা করতে পারবেন।"
        }
      }
    ],
    "practicalApplication": {
      "en": "দিনের শুরুতে ঠিক করুন আজ কোন একটি নির্দিষ্ট বিষয়ে আপনি গতকালের চেয়ে ভালো করবেন। দিন শেষে নিজেকে প্রশ্ন করুন: \"আজ আমি এমন কী শিখেছি বা করেছি যা আমাকে মানসিকভাবে শক্তিশালী করেছে?\"",
      "bn": "দিনের শুরুতে ঠিক করুন আজ কোন একটি নির্দিষ্ট বিষয়ে আপনি গতকালের চেয়ে ভালো করবেন। দিন শেষে নিজেকে প্রশ্ন করুন: \"আজ আমি এমন কী শিখেছি বা করেছি যা আমাকে মানসিকভাবে শক্তিশালী করেছে?\""
    },
    "criticalReflection": {
      "en": "সেনেকার দারিদ্র্যের বিরুদ্ধে সুরক্ষার পরামর্শটি রোমের অন্যতম ধনী ব্যক্তির কাছ থেকে আসাটা পরিহাসমূলক। যদিও মানসিক শক্তি দারিদ্র্য সহ্য করতে সাহায্য করে, এটি দারিদ্র্য দূর করে না। \"শক্তিশালী\" হওয়ার পথে যে কাঠামোগত বাধাগুলো (যেমন শিক্ষার সুযোগের অভাব) থাকে, তা এই ব্যক্তিকেন্দ্রিক কাঠামোতে উপেক্ষা করা হয়।",
      "bn": "সেনেকার দারিদ্র্যের বিরুদ্ধে সুরক্ষার পরামর্শটি রোমের অন্যতম ধনী ব্যক্তির কাছ থেকে আসাটা পরিহাসমূলক। যদিও মানসিক শক্তি দারিদ্র্য সহ্য করতে সাহায্য করে, এটি দারিদ্র্য দূর করে না। \"শক্তিশালী\" হওয়ার পথে যে কাঠামোগত বাধাগুলো (যেমন শিক্ষার সুযোগের অভাব) থাকে, তা এই ব্যক্তিকেন্দ্রিক কাঠামোতে উপেক্ষা করা হয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "বাহ্যিক অনুমোদনের (লাইক/ভিউ) ওপর নির্ভরতা হ্রাস।",
        "bn": "বাহ্যিক অনুমোদনের (লাইক/ভিউ) ওপর নির্ভরতা হ্রাস।"
      },
      "social": {
        "en": "আরও স্থিতিস্থাপক ব্যক্তি যারা সহজে প্রভাবিত বা ম্যানিপুলেটেড হন না।",
        "bn": "আরও স্থিতিস্থাপক ব্যক্তি যারা সহজে প্রভাবিত বা ম্যানিপুলেটেড হন না।"
      }
    }
  },
  {
    "id": 42,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Grace of Self-Forgiveness",
      "bn": "The Grace of Self-Forgiveness"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "When you blame yourself for your negative feelings, you are making progress.",
          "bn": "When you blame yourself for your negative feelings, you are making progress."
        },
        "author": {
          "en": "Epictetus",
          "bn": "Epictetus"
        }
      },
      {
        "quote": {
          "en": "It’s always foolish to blame yourself for things that happen in life.",
          "bn": "It’s always foolish to blame yourself for things that happen in life."
        },
        "author": {
          "en": "Epictetus",
          "bn": "Epictetus"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "দায়িত্ব বনাম দোষ",
          "bn": "দায়িত্ব বনাম দোষ"
        },
        "content": {
          "en": "নিজের অনুভূতির দায়িত্ব নেওয়া আর নিজেকে দোষী ভাবা এক নয়। দায়িত্ব নিলে ক্ষমতা বাড়ে, দোষ দিলে গ্লানি বাড়ে।",
          "bn": "নিজের অনুভূতির দায়িত্ব নেওয়া আর নিজেকে দোষী ভাবা এক নয়। দায়িত্ব নিলে ক্ষমতা বাড়ে, দোষ দিলে গ্লানি বাড়ে।"
        }
      },
      {
        "title": {
          "en": "অতীত অপরিবর্তনীয়",
          "bn": "অতীত অপরিবর্তনীয়"
        },
        "content": {
          "en": "টাইম মেশিন নেই, তাই \"আমি কেন এটা করলাম না\" ভেবে সময় নষ্ট করা অর্থহীন।",
          "bn": "টাইম মেশিন নেই, তাই \"আমি কেন এটা করলাম না\" ভেবে সময় নষ্ট করা অর্থহীন।"
        }
      },
      {
        "title": {
          "en": "স্বাস্থ্যের অগ্রাধিকার",
          "bn": "স্বাস্থ্যের অগ্রাধিকার"
        },
        "content": {
          "en": "বার্সেলোনা ট্যুরের উদাহরণ দিয়ে লেখক বলেছেন, উচ্চাকাঙ্ক্ষার চেয়ে শরীর ও মনের সুস্থতা সবসময় আগে।",
          "bn": "বার্সেলোনা ট্যুরের উদাহরণ দিয়ে লেখক বলেছেন, উচ্চাকাঙ্ক্ষার চেয়ে শরীর ও মনের সুস্থতা সবসময় আগে।"
        }
      },
      {
        "title": {
          "en": "ভুল মানুষের ধর্ম",
          "bn": "ভুল মানুষের ধর্ম"
        },
        "content": {
          "en": "ভুল করা স্বাভাবিক। নিজের ভুলের প্রতি সদয় হোন এবং সেখান থেকে শিক্ষা নিয়ে এগিয়ে যান।",
          "bn": "ভুল করা স্বাভাবিক। নিজের ভুলের প্রতি সদয় হোন এবং সেখান থেকে শিক্ষা নিয়ে এগিয়ে যান।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যদি অতীতে কোনো ভুল সিদ্ধান্ত নিয়ে থাকেন, তবে আজ নিজেকে একটি চিঠি লিখুন। লিখুন: \"আমি তোমাকে ক্ষমা করলাম, কারণ সেই সময় তোমার কাছে যে বুদ্ধি ছিল, তা দিয়ে তুমি সেরাটাই করার চেষ্টা করেছ।\"",
      "bn": "যদি অতীতে কোনো ভুল সিদ্ধান্ত নিয়ে থাকেন, তবে আজ নিজেকে একটি চিঠি লিখুন। লিখুন: \"আমি তোমাকে ক্ষমা করলাম, কারণ সেই সময় তোমার কাছে যে বুদ্ধি ছিল, তা দিয়ে তুমি সেরাটাই করার চেষ্টা করেছ।\""
    },
    "criticalReflection": {
      "en": "\"নেতিবাচক অনুভূতির জন্য নিজেকে দোষারোপ করা প্রগতি\" (এপিক্টেটাস) একটি জটিল স্টয়িক ধারণা, যার অর্থ আপনিই আপনার কষ্টের উৎস (বিচার), ঘটনা নয়। তবে, ভুলভাবে ব্যাখ্যা করা হলে, এটি নিজেকে গ্যাসলাইটিং করার দিকে নিয়ে যেতে পারে—বিশ্বাস করা যে নির্যাতন বা ট্রমার প্রতি বৈধ প্রতিক্রিয়াগুলো কেবল \"মন খারাপ করার জন্য আমারই দোষ\"।",
      "bn": "\"নেতিবাচক অনুভূতির জন্য নিজেকে দোষারোপ করা প্রগতি\" (এপিক্টেটাস) একটি জটিল স্টয়িক ধারণা, যার অর্থ আপনিই আপনার কষ্টের উৎস (বিচার), ঘটনা নয়। তবে, ভুলভাবে ব্যাখ্যা করা হলে, এটি নিজেকে গ্যাসলাইটিং করার দিকে নিয়ে যেতে পারে—বিশ্বাস করা যে নির্যাতন বা ট্রমার প্রতি বৈধ প্রতিক্রিয়াগুলো কেবল \"মন খারাপ করার জন্য আমারই দোষ\"।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "অতীতের অনুশোচনা থেকে নিরাময় এবং আত্ম-ঘৃণা হ্রাস।",
        "bn": "অতীতের অনুশোচনা থেকে নিরাময় এবং আত্ম-ঘৃণা হ্রাস।"
      },
      "social": {
        "en": "অন্যের প্রতি আরও ক্ষমাশীল আচরণ, যা আত্ম-ক্ষমারই প্রতিফলন।",
        "bn": "অন্যের প্রতি আরও ক্ষমাশীল আচরণ, যা আত্ম-ক্ষমারই প্রতিফলন।"
      }
    }
  },
  {
    "id": 43,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "The Loneliness of Growth",
      "bn": "The Loneliness of Growth"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "There’ll still be people standing around the bed who will welcome the sad event.",
          "bn": "There’ll still be people standing around the bed who will welcome the sad event."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The best thing we can do is to never be like the negative people on this planet.",
          "bn": "The best thing we can do is to never be like the negative people on this planet."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ঈর্ষার বাস্তবতা",
          "bn": "ঈর্ষার বাস্তবতা"
        },
        "content": {
          "en": "আপনি যতই ভালো হোন না কেন, কিছু মানুষ আপনার পতন চাইবে বা আপনার মৃত্যুতে খুশি হবে। এটি মেনে নিন।",
          "bn": "আপনি যতই ভালো হোন না কেন, কিছু মানুষ আপনার পতন চাইবে বা আপনার মৃত্যুতে খুশি হবে। এটি মেনে নিন।"
        }
      },
      {
        "title": {
          "en": "বন্ধু পরিবর্তন",
          "bn": "বন্ধু পরিবর্তন"
        },
        "content": {
          "en": "আপনি যখন উন্নতির পথে হাঁটবেন, পুরনো অনেক বন্ধু হারিয়ে যাবে। এটি স্বাভাবিক প্রক্রিয়া।",
          "bn": "আপনি যখন উন্নতির পথে হাঁটবেন, পুরনো অনেক বন্ধু হারিয়ে যাবে। এটি স্বাভাবিক প্রক্রিয়া।"
        }
      },
      {
        "title": {
          "en": "নেতিবাচকতা এড়ানো",
          "bn": "নেতিবাচকতা এড়ানো"
        },
        "content": {
          "en": "যারা আপনাকে টেনে নিচে নামাতে চায়, তাদের ওপর রাগ না করে তাদের থেকে দূরে থাকুন। তাদের মতো আচরণ করবেন না।",
          "bn": "যারা আপনাকে টেনে নিচে নামাতে চায়, তাদের ওপর রাগ না করে তাদের থেকে দূরে থাকুন। তাদের মতো আচরণ করবেন না।"
        }
      },
      {
        "title": {
          "en": "নিজের পথে অটল",
          "bn": "নিজের পথে অটল"
        },
        "content": {
          "en": "অন্যের সমালোচনায় নিজের ভালো কাজ বা স্বভাব পরিবর্তন করবেন না।",
          "bn": "অন্যের সমালোচনায় নিজের ভালো কাজ বা স্বভাব পরিবর্তন করবেন না।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার সার্কেলে এমন কাউকে চিহ্নিত করুন যে সবসময় আপনার উৎসাহ কমিয়ে দেয়। তার সাথে সময় কাটানো কমিয়ে দিন। পরিবর্তে এমন কারো সাথে মিশুন যে আপনার চেয়ে এক ধাপ এগিয়ে আছে।",
      "bn": "আপনার সার্কেলে এমন কাউকে চিহ্নিত করুন যে সবসময় আপনার উৎসাহ কমিয়ে দেয়। তার সাথে সময় কাটানো কমিয়ে দিন। পরিবর্তে এমন কারো সাথে মিশুন যে আপনার চেয়ে এক ধাপ এগিয়ে আছে।"
    },
    "criticalReflection": {
      "en": "বন্ধুত্ব নষ্ট হওয়াকে কেবল \"ঈর্ষা\" বা \"উন্নতি\"-র ফল ভাবা একটি প্রতিরক্ষা বা ডিফেন্স মেকানিজম হতে পারে, যা নিজের অহংকার বা বন্ধুদের প্রতি অবহেলাকে আড়াল করে। কখনও কখনও মানুষের অগ্রাধিকার পরিবর্তনের কারণেও দূরত্ব তৈরি হয়, বিদ্বেষের কারণে নয়।",
      "bn": "বন্ধুত্ব নষ্ট হওয়াকে কেবল \"ঈর্ষা\" বা \"উন্নতি\"-র ফল ভাবা একটি প্রতিরক্ষা বা ডিফেন্স মেকানিজম হতে পারে, যা নিজের অহংকার বা বন্ধুদের প্রতি অবহেলাকে আড়াল করে। কখনও কখনও মানুষের অগ্রাধিকার পরিবর্তনের কারণেও দূরত্ব তৈরি হয়, বিদ্বেষের কারণে নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উচ্চ-মূল্যবোধ সম্পন্ন ব্যক্তিদের নিয়ে একটি সাজানো সোশ্যাল সার্কেল।",
        "bn": "উচ্চ-মূল্যবোধ সম্পন্ন ব্যক্তিদের নিয়ে একটি সাজানো সোশ্যাল সার্কেল।"
      },
      "social": {
        "en": "সামাজিক স্তরবিন্যাস যেখানে \"উন্নতি-মনস্ক\" মানুষরা অন্যদের থেকে বিচ্ছিন্ন হয়ে পড়ে।",
        "bn": "সামাজিক স্তরবিন্যাস যেখানে \"উন্নতি-মনস্ক\" মানুষরা অন্যদের থেকে বিচ্ছিন্ন হয়ে পড়ে।"
      }
    }
  },
  {
    "id": 44,
    "sectionTitle": {
      "en": "The Inner World",
      "bn": "The Inner World"
    },
    "chapterTitle": {
      "en": "Embracing Discomfort",
      "bn": "Embracing Discomfort"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Hardship is good. Too much pleasure is bad.",
          "bn": "Hardship is good. Too much pleasure is bad."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The soul is strengthened as it is trained for courage by enduring hardships.",
          "bn": "The soul is strengthened as it is trained for courage by enduring hardships."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "বিরক্তির উপকারিতা",
          "bn": "বিরক্তির উপকারিতা"
        },
        "content": {
          "en": "ছোটখাটো বিরক্তি (যেমন ঠান্ডা আবহাওয়া, লাইনে দাঁড়ানো) আমাদের ধৈর্য পরীক্ষা করে এবং সহনশীলতা বাড়ায়।",
          "bn": "ছোটখাটো বিরক্তি (যেমন ঠান্ডা আবহাওয়া, লাইনে দাঁড়ানো) আমাদের ধৈর্য পরীক্ষা করে এবং সহনশীলতা বাড়ায়।"
        }
      },
      {
        "title": {
          "en": "বিলাসবহুল জীবনের ফাঁদ",
          "bn": "বিলাসবহুল জীবনের ফাঁদ"
        },
        "content": {
          "en": "অতিরিক্ত আরাম আমাদের দুর্বল করে দেয়। মাঝে মাঝে সাধারণ জীবনযাপন করা উচিত।",
          "bn": "অতিরিক্ত আরাম আমাদের দুর্বল করে দেয়। মাঝে মাঝে সাধারণ জীবনযাপন করা উচিত।"
        }
      },
      {
        "title": {
          "en": "কন্ট্রাস্ট এফেক্ট",
          "bn": "কন্ট্রাস্ট এফেক্ট"
        },
        "content": {
          "en": "যখন আপনি কষ্টের স্বাদ পান, তখন আরামের কদর অনেক বেড়ে যায়। হিটেড ম্যাট্রেসের উদাহরণ দিয়ে লেখক এটি বুঝিয়েছেন।",
          "bn": "যখন আপনি কষ্টের স্বাদ পান, তখন আরামের কদর অনেক বেড়ে যায়। হিটেড ম্যাট্রেসের উদাহরণ দিয়ে লেখক এটি বুঝিয়েছেন।"
        }
      },
      {
        "title": {
          "en": "ইচ্ছাকৃত সরলতা",
          "bn": "ইচ্ছাকৃত সরলতা"
        },
        "content": {
          "en": "সামর্থ্য থাকলেও সাদামাটা জীবন বেছে নেওয়া মানসিক স্বাধীনতার লক্ষণ।",
          "bn": "সামর্থ্য থাকলেও সাদামাটা জীবন বেছে নেওয়া মানসিক স্বাধীনতার লক্ষণ।"
        }
      }
    ],
    "practicalApplication": {
      "en": "পরবর্তীবার যখন ট্রাফিক জ্যামে পড়বেন বা ইন্টারনেট স্লো হবে, তখন বিরক্ত না হয়ে একে \"ধৈর্য পরীক্ষার সুযোগ\" হিসেবে দেখুন। মনে মনে বলুন, \"এটি আমাকে মানসিকভাবে শক্ত করছে।\"",
      "bn": "পরবর্তীবার যখন ট্রাফিক জ্যামে পড়বেন বা ইন্টারনেট স্লো হবে, তখন বিরক্ত না হয়ে একে \"ধৈর্য পরীক্ষার সুযোগ\" হিসেবে দেখুন। মনে মনে বলুন, \"এটি আমাকে মানসিকভাবে শক্ত করছে।\""
    },
    "criticalReflection": {
      "en": "এই অধ্যায়টি কষ্টকে রোমান্টিকাইজ করে। যাদের পুরো জীবনটাই দারিদ্র্য বা অক্ষমতার কারণে \"বিরক্তিকর\", তাদের জন্য আরও অস্বস্তি যোগ করা প্রশিক্ষণ নয়—এটি নির্যাতন। এই স্টয়িক অনুশীলনটি মূলত সুবিধাপ্রাপ্ত মধ্যবিত্ত/উচ্চবিত্ত শ্রেণীর জন্য উপকারী।",
      "bn": "এই অধ্যায়টি কষ্টকে রোমান্টিকাইজ করে। যাদের পুরো জীবনটাই দারিদ্র্য বা অক্ষমতার কারণে \"বিরক্তিকর\", তাদের জন্য আরও অস্বস্তি যোগ করা প্রশিক্ষণ নয়—এটি নির্যাতন। এই স্টয়িক অনুশীলনটি মূলত সুবিধাপ্রাপ্ত মধ্যবিত্ত/উচ্চবিত্ত শ্রেণীর জন্য উপকারী।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "অসুবিধা এবং হতাশা সহ্য করার উচ্চ ক্ষমতা।",
        "bn": "অসুবিধা এবং হতাশা সহ্য করার উচ্চ ক্ষমতা।"
      },
      "social": {
        "en": "জনসেবামূলক পরিস্থিতিতে কম অভিযোগপ্রবণ আচরণ।",
        "bn": "জনসেবামূলক পরিস্থিতিতে কম অভিযোগপ্রবণ আচরণ।"
      }
    }
  },
  {
    "id": 45,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Navigating Society (Section Intro)",
      "bn": "Navigating Society (Section Intro)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Happiness is not only being able to live well with yourself... We have to find a way to be comfortable in society as well.",
          "bn": "Happiness is not only being able to live well with yourself... We have to find a way to be comfortable in society as well."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সামাজিক প্রাণী",
          "bn": "সামাজিক প্রাণী"
        },
        "content": {
          "en": "মানুষ একা সুখী হতে পারে না; সমাজের সাথে মানিয়ে চলাও সুখের অংশ।",
          "bn": "মানুষ একা সুখী হতে পারে না; সমাজের সাথে মানিয়ে চলাও সুখের অংশ।"
        }
      },
      {
        "title": {
          "en": "বাস্তবতা",
          "bn": "বাস্তবতা"
        },
        "content": {
          "en": "সন্ন্যাসীর মতো পাহাড়ের গুহায় বাস করা সবার জন্য সম্ভব নয়, তাই সমাজের বিশৃঙ্খলার মাঝেই শান্তি খুঁজতে হবে।",
          "bn": "সন্ন্যাসীর মতো পাহাড়ের গুহায় বাস করা সবার জন্য সম্ভব নয়, তাই সমাজের বিশৃঙ্খলার মাঝেই শান্তি খুঁজতে হবে।"
        }
      },
      {
        "title": {
          "en": "Chapter 46",
          "bn": "Chapter 46"
        },
        "content": {
          "en": "Pursuing Worldly Success",
          "bn": "Pursuing Worldly Success"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "Virtue Over Victory (Intro)",
          "bn": "Virtue Over Victory (Intro)"
        }
      },
      {
        "title": {
          "en": "সফলতার সংজ্ঞা",
          "bn": "সফলতার সংজ্ঞা"
        },
        "content": {
          "en": "জাগতিক সফলতা (টাকা, ক্ষমতা) সুখের নিশ্চয়তা দেয় না; সদ্গুণ বা 'Virtue' (সততা, ন্যায়পরায়ণতা) দেয়।",
          "bn": "জাগতিক সফলতা (টাকা, ক্ষমতা) সুখের নিশ্চয়তা দেয় না; সদ্গুণ বা 'Virtue' (সততা, ন্যায়পরায়ণতা) দেয়।"
        }
      },
      {
        "title": {
          "en": "হারমনি",
          "bn": "হারমনি"
        },
        "content": {
          "en": "সদ্গুণ আমাদের জীবনে এক ধরনের ছন্দ বা হারমনি নিয়ে আসে।",
          "bn": "সদ্গুণ আমাদের জীবনে এক ধরনের ছন্দ বা হারমনি নিয়ে আসে।"
        }
      },
      {
        "title": {
          "en": "Chapter 47",
          "bn": "Chapter 47"
        },
        "content": {
          "en": "Letter 38: On the Price We Pay to Get What We Want",
          "bn": "Letter 38: On the Price We Pay to Get What We Want"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "The Hidden Costs of Ambition",
          "bn": "The Hidden Costs of Ambition"
        }
      },
      {
        "title": {
          "en": "ক্যারিয়ার গেম",
          "bn": "ক্যারিয়ার গেম"
        },
        "content": {
          "en": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।",
          "bn": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।"
        }
      },
      {
        "title": {
          "en": "মূল্যবোধের সংঘাত",
          "bn": "মূল্যবোধের সংঘাত"
        },
        "content": {
          "en": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।",
          "bn": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।"
        }
      },
      {
        "title": {
          "en": "সরে আসার সাহস",
          "bn": "সরে আসার সাহস"
        },
        "content": {
          "en": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।",
          "bn": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।"
        }
      },
      {
        "title": {
          "en": "নির্বাচন",
          "bn": "নির্বাচন"
        },
        "content": {
          "en": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।",
          "bn": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।"
        }
      }
    ],
    "practicalApplication": {
      "en": "",
      "bn": ""
    },
    "criticalReflection": {
      "en": "",
      "bn": ""
    },
    "expectedOutcomes": {
      "individual": {
        "en": "",
        "bn": ""
      },
      "social": {
        "en": "",
        "bn": ""
      }
    }
  },
  {
    "id": 46,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Virtue Over Victory (Intro)",
      "bn": "Virtue Over Victory (Intro)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "It is in virtue that happiness consists, for virtue is the state of mind which tends to make the whole of life harmonious.",
          "bn": "It is in virtue that happiness consists, for virtue is the state of mind which tends to make the whole of life harmonious."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সফলতার সংজ্ঞা",
          "bn": "সফলতার সংজ্ঞা"
        },
        "content": {
          "en": "জাগতিক সফলতা (টাকা, ক্ষমতা) সুখের নিশ্চয়তা দেয় না; সদ্গুণ বা 'Virtue' (সততা, ন্যায়পরায়ণতা) দেয়।",
          "bn": "জাগতিক সফলতা (টাকা, ক্ষমতা) সুখের নিশ্চয়তা দেয় না; সদ্গুণ বা 'Virtue' (সততা, ন্যায়পরায়ণতা) দেয়।"
        }
      },
      {
        "title": {
          "en": "হারমনি",
          "bn": "হারমনি"
        },
        "content": {
          "en": "সদ্গুণ আমাদের জীবনে এক ধরনের ছন্দ বা হারমনি নিয়ে আসে।",
          "bn": "সদ্গুণ আমাদের জীবনে এক ধরনের ছন্দ বা হারমনি নিয়ে আসে।"
        }
      },
      {
        "title": {
          "en": "Chapter 47",
          "bn": "Chapter 47"
        },
        "content": {
          "en": "Letter 38: On the Price We Pay to Get What We Want",
          "bn": "Letter 38: On the Price We Pay to Get What We Want"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "The Hidden Costs of Ambition",
          "bn": "The Hidden Costs of Ambition"
        }
      },
      {
        "title": {
          "en": "ক্যারিয়ার গেম",
          "bn": "ক্যারিয়ার গেম"
        },
        "content": {
          "en": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।",
          "bn": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।"
        }
      },
      {
        "title": {
          "en": "মূল্যবোধের সংঘাত",
          "bn": "মূল্যবোধের সংঘাত"
        },
        "content": {
          "en": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।",
          "bn": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।"
        }
      },
      {
        "title": {
          "en": "সরে আসার সাহস",
          "bn": "সরে আসার সাহস"
        },
        "content": {
          "en": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।",
          "bn": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।"
        }
      },
      {
        "title": {
          "en": "নির্বাচন",
          "bn": "নির্বাচন"
        },
        "content": {
          "en": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।",
          "bn": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।"
        }
      }
    ],
    "practicalApplication": {
      "en": "",
      "bn": ""
    },
    "criticalReflection": {
      "en": "",
      "bn": ""
    },
    "expectedOutcomes": {
      "individual": {
        "en": "",
        "bn": ""
      },
      "social": {
        "en": "",
        "bn": ""
      }
    }
  },
  {
    "id": 47,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Hidden Costs of Ambition",
      "bn": "The Hidden Costs of Ambition"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "You pay a price to play a game.",
          "bn": "You pay a price to play a game."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The moment you have to exchange your values for money, you always come to the same conclusion: It’s just not worth it.",
          "bn": "The moment you have to exchange your values for money, you always come to the same conclusion: It’s just not worth it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ক্যারিয়ার গেম",
          "bn": "ক্যারিয়ার গেম"
        },
        "content": {
          "en": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।",
          "bn": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।"
        }
      },
      {
        "title": {
          "en": "মূল্যবোধের সংঘাত",
          "bn": "মূল্যবোধের সংঘাত"
        },
        "content": {
          "en": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।",
          "bn": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।"
        }
      },
      {
        "title": {
          "en": "সরে আসার সাহস",
          "bn": "সরে আসার সাহস"
        },
        "content": {
          "en": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।",
          "bn": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।"
        }
      },
      {
        "title": {
          "en": "নির্বাচন",
          "bn": "নির্বাচন"
        },
        "content": {
          "en": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।",
          "bn": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার বর্তমান কাজের পরিবেশ মূল্যায়ন করুন। সফল হওয়ার জন্য আপনাকে কি এমন কিছু করতে হচ্ছে যা আপনি ঘৃণা করেন (যেমন মিথ্যা বলা, তেল দেওয়া)? যদি হ্যাঁ হয়, তবে ভাবুন এই \"মূল্য\" আপনি দিতে প্রস্তুত কি না। প্রস্তুত না থাকলে এক্সিট প্ল্যান তৈরি করুন।",
      "bn": "আপনার বর্তমান কাজের পরিবেশ মূল্যায়ন করুন। সফল হওয়ার জন্য আপনাকে কি এমন কিছু করতে হচ্ছে যা আপনি ঘৃণা করেন (যেমন মিথ্যা বলা, তেল দেওয়া)? যদি হ্যাঁ হয়, তবে ভাবুন এই \"মূল্য\" আপনি দিতে প্রস্তুত কি না। প্রস্তুত না থাকলে এক্সিট প্ল্যান তৈরি করুন।"
    },
    "criticalReflection": {
      "en": "মূল্যবোধের সাথে আপোষ করতে হয় এমন \"গেম\" থেকে সরে আসা মহৎ, কিন্তু এর জন্য অর্থনৈতিক সুবিধা (সঞ্চয়/নিরাপত্তা জাল) প্রয়োজন। অনেক মানুষকে তাদের পরিবারকে খাওয়ানোর জন্য বিষাক্ত কর্মক্ষেত্রের মূল্য দিতে হয়। এখানের স্টয়িক উপদেশটি এমন এক ধরনের ক্যারিয়ার গতিশীলতা বা মোবিলিটি ধারণা করে যা সবার থাকে না।",
      "bn": "মূল্যবোধের সাথে আপোষ করতে হয় এমন \"গেম\" থেকে সরে আসা মহৎ, কিন্তু এর জন্য অর্থনৈতিক সুবিধা (সঞ্চয়/নিরাপত্তা জাল) প্রয়োজন। অনেক মানুষকে তাদের পরিবারকে খাওয়ানোর জন্য বিষাক্ত কর্মক্ষেত্রের মূল্য দিতে হয়। এখানের স্টয়িক উপদেশটি এমন এক ধরনের ক্যারিয়ার গতিশীলতা বা মোবিলিটি ধারণা করে যা সবার থাকে না।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "সততা-চালিত ক্যারিয়ার পছন্দ।",
        "bn": "সততা-চালিত ক্যারিয়ার পছন্দ।"
      },
      "social": {
        "en": "স্বল্পমেয়াদে আয়ের সম্ভাব্য ক্ষতি, তবে দীর্ঘমেয়াদী মানসিক শান্তি।",
        "bn": "স্বল্পমেয়াদে আয়ের সম্ভাব্য ক্ষতি, তবে দীর্ঘমেয়াদী মানসিক শান্তি।"
      }
    }
  },
  {
    "id": 48,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Absolute Freedom",
      "bn": "Absolute Freedom"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "To be free is to not give power to fortune.",
          "bn": "To be free is to not give power to fortune."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "When you have nothing, everything else in life is a bonus.",
          "bn": "When you have nothing, everything else in life is a bonus."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "মুক্তির সংজ্ঞা",
          "bn": "মুক্তির সংজ্ঞা"
        },
        "content": {
          "en": "প্রকৃত মুক্তি টাকা বা ক্ষমতা নয়; প্রকৃত মুক্তি হলো ভাগ্যের ওপর নির্ভর না করা।",
          "bn": "প্রকৃত মুক্তি টাকা বা ক্ষমতা নয়; প্রকৃত মুক্তি হলো ভাগ্যের ওপর নির্ভর না করা।"
        }
      },
      {
        "title": {
          "en": "রুবিন কার্টারের উদাহরণ",
          "bn": "রুবিন কার্টারের উদাহরণ"
        },
        "content": {
          "en": "২০ বছর মিথ্যা মামলায় জেলে থেকেও রুবিন কার্টার মানসিকভাবে মুক্ত ছিলেন কারণ তিনি ঘৃণা বা প্রতিশোধের কাছে নতি স্বীকার করেননি।",
          "bn": "২০ বছর মিথ্যা মামলায় জেলে থেকেও রুবিন কার্টার মানসিকভাবে মুক্ত ছিলেন কারণ তিনি ঘৃণা বা প্রতিশোধের কাছে নতি স্বীকার করেননি।"
        }
      },
      {
        "title": {
          "en": "চাহিদা বনাম স্বাধীনতা",
          "bn": "চাহিদা বনাম স্বাধীনতা"
        },
        "content": {
          "en": "যার চাহিদা যত কম, সে তত বেশি স্বাধীন। \"কিছুই চাই না\"—এই মানসিকতা মানুষকে অজেয় করে তোলে।",
          "bn": "যার চাহিদা যত কম, সে তত বেশি স্বাধীন। \"কিছুই চাই না\"—এই মানসিকতা মানুষকে অজেয় করে তোলে।"
        }
      },
      {
        "title": {
          "en": "বোনাস মানসিকতা",
          "bn": "বোনাস মানসিকতা"
        },
        "content": {
          "en": "জীবনকে শূন্য থেকে শুরু ভাবলে, যা কিছুই পাওয়া যায় তাকেই বোনাস মনে হয় এবং কৃতজ্ঞতা বাড়ে।",
          "bn": "জীবনকে শূন্য থেকে শুরু ভাবলে, যা কিছুই পাওয়া যায় তাকেই বোনাস মনে হয় এবং কৃতজ্ঞতা বাড়ে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "নিজেকে বলুন, \"আমার সুখ বাইরের কোনো ঘটনার ওপর নির্ভর করে না।\" যদি কাল লটারি জিতেন—ভালো; যদি না জিতেন—তাও ভালো। নিজের মেজাজকে বাইরের ঘটনার দাস হতে দেবেন না।",
      "bn": "নিজেকে বলুন, \"আমার সুখ বাইরের কোনো ঘটনার ওপর নির্ভর করে না।\" যদি কাল লটারি জিতেন—ভালো; যদি না জিতেন—তাও ভালো। নিজের মেজাজকে বাইরের ঘটনার দাস হতে দেবেন না।"
    },
    "criticalReflection": {
      "en": "রুবিন কার্টারের গল্পটি অনুপ্রেরণাদায়ক কিন্তু এটি মানসিক দৃঢ়তার একটি চরম দৃষ্টান্ত (ভুল কারাদণ্ড থেকে বেঁচে ফেরা)। চরম উদাহরণ ব্যবহার করা কখনও কখনও সাধারণ সংগ্রামের মুখোমুখি হওয়া সাধারণ মানুষদের নিরুৎসাহিত করতে পারে, এবং তাদের মনে হতে পারে যে অতটা স্টয়িক হতে না পারাটা তাদের ব্যর্থতা।",
      "bn": "রুবিন কার্টারের গল্পটি অনুপ্রেরণাদায়ক কিন্তু এটি মানসিক দৃঢ়তার একটি চরম দৃষ্টান্ত (ভুল কারাদণ্ড থেকে বেঁচে ফেরা)। চরম উদাহরণ ব্যবহার করা কখনও কখনও সাধারণ সংগ্রামের মুখোমুখি হওয়া সাধারণ মানুষদের নিরুৎসাহিত করতে পারে, এবং তাদের মনে হতে পারে যে অতটা স্টয়িক হতে না পারাটা তাদের ব্যর্থতা।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "বাহ্যিক সীমাবদ্ধতা নির্বিশেষে অবিচল অভ্যন্তরীণ শান্তি।",
        "bn": "বাহ্যিক সীমাবদ্ধতা নির্বিশেষে অবিচল অভ্যন্তরীণ শান্তি।"
      },
      "social": {
        "en": "এমন ব্যক্তিরা যাদের মানসিকভাবে প্রভাবিত বা দমন করা কঠিন।",
        "bn": "এমন ব্যক্তিরা যাদের মানসিকভাবে প্রভাবিত বা দমন করা কঠিন।"
      }
    }
  },
  {
    "id": 49,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Trap of \"More\"",
      "bn": "The Trap of \"More\""
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Mo money, mo problems.",
          "bn": "Mo money, mo problems."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "How often have you sacrificed your inner peace for some sort of success?",
          "bn": "How often have you sacrificed your inner peace for some sort of success?"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Success is greedy and exposed to the greed of others.",
          "bn": "Success is greedy and exposed to the greed of others."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সফলতার মূল্য",
          "bn": "সফলতার মূল্য"
        },
        "content": {
          "en": "প্রতিটি সাফল্যের সাথে নতুন সমস্যা আসে (যেমন আইনি জটিলতা, স্ট্রেস, শত্রুতা)।",
          "bn": "প্রতিটি সাফল্যের সাথে নতুন সমস্যা আসে (যেমন আইনি জটিলতা, স্ট্রেস, শত্রুতা)।"
        }
      },
      {
        "title": {
          "en": "\"কিন্তু যদি...\" ফাঁদ",
          "bn": "\"কিন্তু যদি...\" ফাঁদ"
        },
        "content": {
          "en": "আমরা ভাবি \"যদি ১ লাখ টাকা বেতন পাই তবে সুখী হব\"—এটি একটি মরীচিকা। লক্ষ্য পূরণ হলে নতুন অভাববোধ তৈরি হয়।",
          "bn": "আমরা ভাবি \"যদি ১ লাখ টাকা বেতন পাই তবে সুখী হব\"—এটি একটি মরীচিকা। লক্ষ্য পূরণ হলে নতুন অভাববোধ তৈরি হয়।"
        }
      },
      {
        "title": {
          "en": "যাত্রার আনন্দ",
          "bn": "যাত্রার আনন্দ"
        },
        "content": {
          "en": "গন্তব্যে পৌঁছানোর চেয়ে যাত্রাপথ উপভোগ করা বেশি জরুরি। সাধারণ দিনের ছোট ছোট অলৌকিক ঘটনাগুলো খেয়াল করুন।",
          "bn": "গন্তব্যে পৌঁছানোর চেয়ে যাত্রাপথ উপভোগ করা বেশি জরুরি। সাধারণ দিনের ছোট ছোট অলৌকিক ঘটনাগুলো খেয়াল করুন।"
        }
      },
      {
        "title": {
          "en": "লোভের চক্র",
          "bn": "লোভের চক্র"
        },
        "content": {
          "en": "সাফল্য আরও লোভ ডেকে আনে। থামতে না জানলে শান্তি অসম্ভব।",
          "bn": "সাফল্য আরও লোভ ডেকে আনে। থামতে না জানলে শান্তি অসম্ভব।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার \"পর্যাপ্ত\" (Enough) এর সংজ্ঞা ঠিক করুন। কত টাকা বা কী পদ পেলে আপনি থামবেন? সেই সীমারেখা না থাকলে আপনি আজীবন দৌড়াবেন। আজই ঠিক করুন, আপনার \"Enough Point\" কোনটি।",
      "bn": "আপনার \"পর্যাপ্ত\" (Enough) এর সংজ্ঞা ঠিক করুন। কত টাকা বা কী পদ পেলে আপনি থামবেন? সেই সীমারেখা না থাকলে আপনি আজীবন দৌড়াবেন। আজই ঠিক করুন, আপনার \"Enough Point\" কোনটি।"
    },
    "criticalReflection": {
      "en": "\"Mo money, mo problems\" একটি ক্লিশে কথা যা প্রায়শই ধনীরা ব্যবহার করে গরিবদের সম্পদ অর্জন থেকে নিরুৎসাহিত করতে। যদিও সম্পদ নতুন সমস্যা নিয়ে আসে, দারিদ্র্য নিয়ে আসে বেঁচে থাকার সমস্যা। অনাহারে থাকার চাপের চেয়ে সম্পদ ব্যবস্থাপনার চাপ নিঃসন্দেহে ভালো।",
      "bn": "\"Mo money, mo problems\" একটি ক্লিশে কথা যা প্রায়শই ধনীরা ব্যবহার করে গরিবদের সম্পদ অর্জন থেকে নিরুৎসাহিত করতে। যদিও সম্পদ নতুন সমস্যা নিয়ে আসে, দারিদ্র্য নিয়ে আসে বেঁচে থাকার সমস্যা। অনাহারে থাকার চাপের চেয়ে সম্পদ ব্যবস্থাপনার চাপ নিঃসন্দেহে ভালো।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উন্নত কর্ম-জীবন ভারসাম্য এবং বার্নআউট হ্রাস।",
        "bn": "উন্নত কর্ম-জীবন ভারসাম্য এবং বার্নআউট হ্রাস।"
      },
      "social": {
        "en": "একটি সংস্কৃতি যা নিরলস প্রবৃদ্ধির চেয়ে তুষ্টিকে মূল্য দেয়।",
        "bn": "একটি সংস্কৃতি যা নিরলস প্রবৃদ্ধির চেয়ে তুষ্টিকে মূল্য দেয়।"
      }
    }
  },
  {
    "id": 50,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Action Over Outcome",
      "bn": "Action Over Outcome"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The problem is that we often set bad goals. And when we do that, we actually set ourselves up for failure.",
          "bn": "The problem is that we often set bad goals. And when we do that, we actually set ourselves up for failure."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Everything is in your hands now. You don’t depend on anyone for the outcomes.",
          "bn": "Everything is in your hands now. You don’t depend on anyone for the outcomes."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ভুল লক্ষ্য",
          "bn": "ভুল লক্ষ্য"
        },
        "content": {
          "en": "\"আমি ১০ কেজি ওজন কমাব\"—এটি ভুল লক্ষ্য কারণ ফলাফল পুরোপুরি আপনার হাতে নেই।",
          "bn": "\"আমি ১০ কেজি ওজন কমাব\"—এটি ভুল লক্ষ্য কারণ ফলাফল পুরোপুরি আপনার হাতে নেই।"
        }
      },
      {
        "title": {
          "en": "সঠিক লক্ষ্য",
          "bn": "সঠিক লক্ষ্য"
        },
        "content": {
          "en": "\"আমি সপ্তাহে ৪ দিন ব্যায়াম করব\"—এটি সঠিক লক্ষ্য কারণ এটি একটি কাজ (Action) যা আপনি নিয়ন্ত্রণ করতে পারেন।",
          "bn": "\"আমি সপ্তাহে ৪ দিন ব্যায়াম করব\"—এটি সঠিক লক্ষ্য কারণ এটি একটি কাজ (Action) যা আপনি নিয়ন্ত্রণ করতে পারেন।"
        }
      },
      {
        "title": {
          "en": "প্রক্রিয়ায় ফোকাস",
          "bn": "প্রক্রিয়ায় ফোকাস"
        },
        "content": {
          "en": "ফলাফলের দুশ্চিন্তা বাদ দিয়ে কেবল প্রতিদিনের রুটিন বা কাজের ওপর ফোকাস করলে সাফল্য সহজে আসে।",
          "bn": "ফলাফলের দুশ্চিন্তা বাদ দিয়ে কেবল প্রতিদিনের রুটিন বা কাজের ওপর ফোকাস করলে সাফল্য সহজে আসে।"
        }
      },
      {
        "title": {
          "en": "আত্মবিশ্বাস",
          "bn": "আত্মবিশ্বাস"
        },
        "content": {
          "en": "যখন লক্ষ্য কেবল নিজের কাজের ওপর নির্ভরশীল হয়, তখন আত্মবিশ্বাস বাড়ে কারণ এখানে ভাগ্যের ভূমিকা নেই।",
          "bn": "যখন লক্ষ্য কেবল নিজের কাজের ওপর নির্ভরশীল হয়, তখন আত্মবিশ্বাস বাড়ে কারণ এখানে ভাগ্যের ভূমিকা নেই।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার বর্তমান লক্ষ্যগুলো রিভিউ করুন। সেগুলোকে \"ফলাফল\" থেকে \"কাজে\" রূপান্তর করুন।",
      "bn": "আপনার বর্তমান লক্ষ্যগুলো রিভিউ করুন। সেগুলোকে \"ফলাফল\" থেকে \"কাজে\" রূপান্তর করুন।"
    },
    "criticalReflection": {
      "en": "শুধুমাত্র ইনপুট (কাজ) এর ওপর ফোকাস করলে কার্যকারিতা বা এফেক্টিভনেস উপেক্ষিত হতে পারে। কেউ প্রতিদিন দৌড়াতে পারে (কাজ) কিন্তু ভুল ফর্মে দৌড়ালে আহত হতে পারে। লক্ষ্যগুলোর একটি ফিডব্যাক লুপ থাকা দরকার যেখানে ফলাফলগুলো পর্যায়ক্রমে পরীক্ষা করা হয় প্রক্রিয়াটি সামঞ্জস্য করার জন্য, কেবল অন্ধভাবে কাজ করে যাওয়া নয়।",
      "bn": "শুধুমাত্র ইনপুট (কাজ) এর ওপর ফোকাস করলে কার্যকারিতা বা এফেক্টিভনেস উপেক্ষিত হতে পারে। কেউ প্রতিদিন দৌড়াতে পারে (কাজ) কিন্তু ভুল ফর্মে দৌড়ালে আহত হতে পারে। লক্ষ্যগুলোর একটি ফিডব্যাক লুপ থাকা দরকার যেখানে ফলাফলগুলো পর্যায়ক্রমে পরীক্ষা করা হয় প্রক্রিয়াটি সামঞ্জস্য করার জন্য, কেবল অন্ধভাবে কাজ করে যাওয়া নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উচ্চ ধারাবাহিকতা এবং ব্যর্থতার উদ্বেগ হ্রাস।",
        "bn": "উচ্চ ধারাবাহিকতা এবং ব্যর্থতার উদ্বেগ হ্রাস।"
      },
      "social": {
        "en": "আরও সুশৃঙ্খল কর্মী বাহিনী।",
        "bn": "আরও সুশৃঙ্খল কর্মী বাহিনী।"
      }
    }
  },
  {
    "id": 51,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Overcoming Envy",
      "bn": "Overcoming Envy"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "I grow stronger and more triumphant... whenever I realize from your actions and writings how much you have projected yourself beyond yourself.",
          "bn": "I grow stronger and more triumphant... whenever I realize from your actions and writings how much you have projected yourself beyond yourself."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Jealousy is a prevalent emotion that leads to negativity and unhappiness.",
          "bn": "Jealousy is a prevalent emotion that leads to negativity and unhappiness."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ঈর্ষা বনাম অনুপ্রেরণা",
          "bn": "ঈর্ষা বনাম অনুপ্রেরণা"
        },
        "content": {
          "en": "অন্যের সাফল্য দেখে জ্বলে না গিয়ে সেখান থেকে শক্তি ও অনুপ্রেরণা নেওয়া উচিত।",
          "bn": "অন্যের সাফল্য দেখে জ্বলে না গিয়ে সেখান থেকে শক্তি ও অনুপ্রেরণা নেওয়া উচিত।"
        }
      },
      {
        "title": {
          "en": "সহযোগিতার শক্তি",
          "bn": "সহযোগিতার শক্তি"
        },
        "content": {
          "en": "লেখকের বস \"আন্দ্রে\" সবাইকে সাহায্য করতেন এবং অন্যের সাফল্যে খুশি হতেন, যা তাকেও সফল করেছিল। অন্যদিকে \"স্যান্ডার\" হিংসুটে হওয়ায় ব্যর্থ হন।",
          "bn": "লেখকের বস \"আন্দ্রে\" সবাইকে সাহায্য করতেন এবং অন্যের সাফল্যে খুশি হতেন, যা তাকেও সফল করেছিল। অন্যদিকে \"স্যান্ডার\" হিংসুটে হওয়ায় ব্যর্থ হন।"
        }
      },
      {
        "title": {
          "en": "শূন্য মানসিকতা (Zero-sum) ত্যাগ",
          "bn": "শূন্য মানসিকতা (Zero-sum) ত্যাগ"
        },
        "content": {
          "en": "অন্যের ভালো মানে আমার ক্ষতি নয়। সাফল্যের পিঠা অনেক বড়, সবাই ভাগ পেতে পারে।",
          "bn": "অন্যের ভালো মানে আমার ক্ষতি নয়। সাফল্যের পিঠা অনেক বড়, সবাই ভাগ পেতে পারে।"
        }
      },
      {
        "title": {
          "en": "চিয়ারলিডার হওয়া",
          "bn": "চিয়ারলিডার হওয়া"
        },
        "content": {
          "en": "অন্যের জয়ে হাততালি দিলে নিজের মানসিকতা বড় হয়।",
          "bn": "অন্যের জয়ে হাততালি দিলে নিজের মানসিকতা বড় হয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ সোশ্যাল মিডিয়ায় বা বাস্তবে পরিচিত কারো সাফল্যে (প্রমোশন, নতুন বাড়ি) মন থেকে অভিনন্দন জানান। হিংসা লাগলেও জোর করে ভালো কথা বলুন। এটি আপনার মস্তিষ্ককে \"Scarcity Mindset\" থেকে \"Abundance Mindset\"-এ শিফট করবে।",
      "bn": "আজ সোশ্যাল মিডিয়ায় বা বাস্তবে পরিচিত কারো সাফল্যে (প্রমোশন, নতুন বাড়ি) মন থেকে অভিনন্দন জানান। হিংসা লাগলেও জোর করে ভালো কথা বলুন। এটি আপনার মস্তিষ্ককে \"Scarcity Mindset\" থেকে \"Abundance Mindset\"-এ শিফট করবে।"
    },
    "criticalReflection": {
      "en": "অন্যদের উদযাপন করা একটি পুণ্যের কাজ হলেও, পদ্ধতিগত বৈষম্যের কারণে কেউ কেউ সুবিধা/দুর্নীতির কারণে সফল হয় যখন অন্যরা সংগ্রাম করে। কীভাবে অর্জিত হয়েছে তা প্রশ্ন না করে অন্ধভাবে সব সাফল্য উদযাপন করা অন্যায্যতাকে স্বাভাবিক করতে পারে। তবে, ব্যক্তিগত স্তরে, ঈর্ষা সর্বদা বিষাক্ত।",
      "bn": "অন্যদের উদযাপন করা একটি পুণ্যের কাজ হলেও, পদ্ধতিগত বৈষম্যের কারণে কেউ কেউ সুবিধা/দুর্নীতির কারণে সফল হয় যখন অন্যরা সংগ্রাম করে। কীভাবে অর্জিত হয়েছে তা প্রশ্ন না করে অন্ধভাবে সব সাফল্য উদযাপন করা অন্যায্যতাকে স্বাভাবিক করতে পারে। তবে, ব্যক্তিগত স্তরে, ঈর্ষা সর্বদা বিষাক্ত।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উন্নত মানসিক স্বাস্থ্য এবং শক্তিশালী নেটওয়ার্ক।",
        "bn": "উন্নত মানসিক স্বাস্থ্য এবং শক্তিশালী নেটওয়ার্ক।"
      },
      "social": {
        "en": "সহযোগিতামূলক সম্প্রদায় এবং কর্মক্ষেত্রের বিষাক্ততা হ্রাস।",
        "bn": "সহযোগিতামূলক সম্প্রদায় এবং কর্মক্ষেত্রের বিষাক্ততা হ্রাস।"
      }
    }
  },
  {
    "id": 52,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Wise Use of Resources (Intro)",
      "bn": "The Wise Use of Resources (Intro)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Wise people are in want of nothing, and yet need many things. On the other hand, nothing is needed by fools... but are in want of everything.",
          "bn": "Wise people are in want of nothing, and yet need many things. On the other hand, nothing is needed by fools... but are in want of everything."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "জ্ঞানী বনাম বোকা",
          "bn": "জ্ঞানী বনাম বোকা"
        },
        "content": {
          "en": "জ্ঞানীরা জানে কীভাবে সম্পদ ব্যবহার করতে হয়, তাই তাদের অভাব নেই। বোকারা সম্পদের ব্যবহার জানে না, তাই তারা সবসময় অভাব অনুভব করে।",
          "bn": "জ্ঞানীরা জানে কীভাবে সম্পদ ব্যবহার করতে হয়, তাই তাদের অভাব নেই। বোকারা সম্পদের ব্যবহার জানে না, তাই তারা সবসময় অভাব অনুভব করে।"
        }
      },
      {
        "title": {
          "en": "প্রয়োজন বনাম অভাব",
          "bn": "প্রয়োজন বনাম অভাব"
        },
        "content": {
          "en": "অভাব একটি মানসিক অবস্থা।",
          "bn": "অভাব একটি মানসিক অবস্থা।"
        }
      },
      {
        "title": {
          "en": "Chapter 53",
          "bn": "Chapter 53"
        },
        "content": {
          "en": "Letter 43: On Getting Rich",
          "bn": "Letter 43: On Getting Rich"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "Wealth Without Corruption",
          "bn": "Wealth Without Corruption"
        }
      },
      {
        "title": {
          "en": "সৎ উপার্জন",
          "bn": "সৎ উপার্জন"
        },
        "content": {
          "en": "স্টয়িকরা ধনী হওয়ার বিরোধী নন, তবে তা হতে হবে সততা বজায় রেখে।",
          "bn": "স্টয়িকরা ধনী হওয়ার বিরোধী নন, তবে তা হতে হবে সততা বজায় রেখে।"
        }
      },
      {
        "title": {
          "en": "টাকা একটি টুল",
          "bn": "টাকা একটি টুল"
        },
        "content": {
          "en": "টাকা জীবনের লক্ষ্য নয়, এটি জীবনকে সহজ করার একটি হাতিয়ার মাত্র।",
          "bn": "টাকা জীবনের লক্ষ্য নয়, এটি জীবনকে সহজ করার একটি হাতিয়ার মাত্র।"
        }
      },
      {
        "title": {
          "en": "আত্মমর্যাদা",
          "bn": "আত্মমর্যাদা"
        },
        "content": {
          "en": "নিজের মূল্য ব্যাংকের ব্যালেন্স দিয়ে বিচার করা উচিত নয়।",
          "bn": "নিজের মূল্য ব্যাংকের ব্যালেন্স দিয়ে বিচার করা উচিত নয়।"
        }
      },
      {
        "title": {
          "en": "পারিবারিক শিক্ষা",
          "bn": "পারিবারিক শিক্ষা"
        },
        "content": {
          "en": "লেখক তার মায়ের উদাহরণ দিয়েছেন যিনি টাকার জন্য দুশ্চিন্তা না করে জীবন উপভোগ করতেন, যা তাকে সুখী রেখেছিল।",
          "bn": "লেখক তার মায়ের উদাহরণ দিয়েছেন যিনি টাকার জন্য দুশ্চিন্তা না করে জীবন উপভোগ করতেন, যা তাকে সুখী রেখেছিল।"
        }
      }
    ],
    "practicalApplication": {
      "en": "",
      "bn": ""
    },
    "criticalReflection": {
      "en": "",
      "bn": ""
    },
    "expectedOutcomes": {
      "individual": {
        "en": "",
        "bn": ""
      },
      "social": {
        "en": "",
        "bn": ""
      }
    }
  },
  {
    "id": 53,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Wealth Without Corruption",
      "bn": "Wealth Without Corruption"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "If you can make money remaining honest, trustworthy, and dignified, by all means; do it.",
          "bn": "If you can make money remaining honest, trustworthy, and dignified, by all means; do it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Life’s too short to let money dictate our lives to an extreme.",
          "bn": "Life’s too short to let money dictate our lives to an extreme."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Values and character hold greater significance than wealth.",
          "bn": "Values and character hold greater significance than wealth."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সৎ উপার্জন",
          "bn": "সৎ উপার্জন"
        },
        "content": {
          "en": "স্টয়িকরা ধনী হওয়ার বিরোধী নন, তবে তা হতে হবে সততা বজায় রেখে।",
          "bn": "স্টয়িকরা ধনী হওয়ার বিরোধী নন, তবে তা হতে হবে সততা বজায় রেখে।"
        }
      },
      {
        "title": {
          "en": "টাকা একটি টুল",
          "bn": "টাকা একটি টুল"
        },
        "content": {
          "en": "টাকা জীবনের লক্ষ্য নয়, এটি জীবনকে সহজ করার একটি হাতিয়ার মাত্র।",
          "bn": "টাকা জীবনের লক্ষ্য নয়, এটি জীবনকে সহজ করার একটি হাতিয়ার মাত্র।"
        }
      },
      {
        "title": {
          "en": "আত্মমর্যাদা",
          "bn": "আত্মমর্যাদা"
        },
        "content": {
          "en": "নিজের মূল্য ব্যাংকের ব্যালেন্স দিয়ে বিচার করা উচিত নয়।",
          "bn": "নিজের মূল্য ব্যাংকের ব্যালেন্স দিয়ে বিচার করা উচিত নয়।"
        }
      },
      {
        "title": {
          "en": "পারিবারিক শিক্ষা",
          "bn": "পারিবারিক শিক্ষা"
        },
        "content": {
          "en": "লেখক তার মায়ের উদাহরণ দিয়েছেন যিনি টাকার জন্য দুশ্চিন্তা না করে জীবন উপভোগ করতেন, যা তাকে সুখী রেখেছিল।",
          "bn": "লেখক তার মায়ের উদাহরণ দিয়েছেন যিনি টাকার জন্য দুশ্চিন্তা না করে জীবন উপভোগ করতেন, যা তাকে সুখী রেখেছিল।"
        }
      }
    ],
    "practicalApplication": {
      "en": "টাকা উপার্জনের নতুন উপায় খুঁজুন, কিন্তু শর্ত হলো তা হতে হবে ১০০% সৎ পথে। যদি কোনো সুযোগ আসে যেখানে সামান্য অনৈতিকতা দরকার, তা প্রত্যাখ্যান করুন। নিজেকে বলুন, \"আমার চরিত্র আমার টাকার চেয়ে দামী।\"",
      "bn": "টাকা উপার্জনের নতুন উপায় খুঁজুন, কিন্তু শর্ত হলো তা হতে হবে ১০০% সৎ পথে। যদি কোনো সুযোগ আসে যেখানে সামান্য অনৈতিকতা দরকার, তা প্রত্যাখ্যান করুন। নিজেকে বলুন, \"আমার চরিত্র আমার টাকার চেয়ে দামী।\""
    },
    "criticalReflection": {
      "en": "\"সততা বজায় রেখে... টাকা উপার্জনের\" পরামর্শটি আদর্শবাদী। অনেক দুর্নীতিগ্রস্ত অর্থনীতিতে, সৎভাবে সম্পদ আহরণ কাঠামোগতভাবে অসম্ভব বা অত্যন্ত ধীর। এই উপদেশটি একটি ন্যায্য বাজার ব্যবস্থা ধারণা করে যা সর্বত্র বিদ্যমান নয়।",
      "bn": "\"সততা বজায় রেখে... টাকা উপার্জনের\" পরামর্শটি আদর্শবাদী। অনেক দুর্নীতিগ্রস্ত অর্থনীতিতে, সৎভাবে সম্পদ আহরণ কাঠামোগতভাবে অসম্ভব বা অত্যন্ত ধীর। এই উপদেশটি একটি ন্যায্য বাজার ব্যবস্থা ধারণা করে যা সর্বত্র বিদ্যমান নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "অপরাধবোধহীন সম্পদ এবং মানসিক শান্তি।",
        "bn": "অপরাধবোধহীন সম্পদ এবং মানসিক শান্তি।"
      },
      "social": {
        "en": "দুর্নীতি হ্রাস এবং নৈতিক ব্যবসায়িক অনুশীলন।",
        "bn": "দুর্নীতি হ্রাস এবং নৈতিক ব্যবসায়িক অনুশীলন।"
      }
    }
  },
  {
    "id": 54,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Reputation vs. Revenue",
      "bn": "Reputation vs. Revenue"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "It takes 20 years to build a reputation and five minutes to ruin it.",
          "bn": "It takes 20 years to build a reputation and five minutes to ruin it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "A good friend would rather you didn’t compromise your integrity than wish you gave him money.",
          "bn": "A good friend would rather you didn’t compromise your integrity than wish you gave him money."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সুনামের ভঙ্গুরতা",
          "bn": "সুনামের ভঙ্গুরতা"
        },
        "content": {
          "en": "টাকা হারানো গেলে তা আবার কামানো যায়, কিন্তু একবার চরিত্র বা সুনাম নষ্ট হলে তা ফিরে পাওয়া অসম্ভব।",
          "bn": "টাকা হারানো গেলে তা আবার কামানো যায়, কিন্তু একবার চরিত্র বা সুনাম নষ্ট হলে তা ফিরে পাওয়া অসম্ভব।"
        }
      },
      {
        "title": {
          "en": "সততার মূল্য",
          "bn": "সততার মূল্য"
        },
        "content": {
          "en": "অসৎ পথে অর্জিত সম্পদ মানসিক শান্তি কেড়ে নেয়। প্রকৃত বন্ধুরা আপনার টাকার চেয়ে আপনার সততাকেই বেশি মূল্য দেয়।",
          "bn": "অসৎ পথে অর্জিত সম্পদ মানসিক শান্তি কেড়ে নেয়। প্রকৃত বন্ধুরা আপনার টাকার চেয়ে আপনার সততাকেই বেশি মূল্য দেয়।"
        }
      },
      {
        "title": {
          "en": "অন্ধ দৌড়",
          "bn": "অন্ধ দৌড়"
        },
        "content": {
          "en": "অর্থের পেছনে অন্ধের মতো ছুটলে আমরা নিজের সত্তা হারিয়ে ফেলি। এটি আমাদের সমাজ ও পরিবার থেকে বিচ্ছিন্ন করে দেয়।",
          "bn": "অর্থের পেছনে অন্ধের মতো ছুটলে আমরা নিজের সত্তা হারিয়ে ফেলি। এটি আমাদের সমাজ ও পরিবার থেকে বিচ্ছিন্ন করে দেয়।"
        }
      },
      {
        "title": {
          "en": "সামাজিক উপযোগিতা",
          "bn": "সামাজিক উপযোগিতা"
        },
        "content": {
          "en": "কেবল নিজের পকেটের জন্য নয়, সমাজের জন্য ভ্যালু তৈরি করাই প্রকৃত সাফল্যের মাপকাঠি।",
          "bn": "কেবল নিজের পকেটের জন্য নয়, সমাজের জন্য ভ্যালু তৈরি করাই প্রকৃত সাফল্যের মাপকাঠি।"
        }
      }
    ],
    "practicalApplication": {
      "en": "কোনো আর্থিক সুযোগ পেলে নিজেকে প্রশ্ন করুন: \"এই কাজটি করলে কি আমি রাতে শান্তিতে ঘুমাতে পারব?\" যদি উত্তর 'না' হয়, তবে যত টাকাই হোক না কেন, তা প্রত্যাখ্যান করুন। আপনার চরিত্রই আপনার সবচেয়ে বড় সম্পদ।",
      "bn": "কোনো আর্থিক সুযোগ পেলে নিজেকে প্রশ্ন করুন: \"এই কাজটি করলে কি আমি রাতে শান্তিতে ঘুমাতে পারব?\" যদি উত্তর 'না' হয়, তবে যত টাকাই হোক না কেন, তা প্রত্যাখ্যান করুন। আপনার চরিত্রই আপনার সবচেয়ে বড় সম্পদ।"
    },
    "criticalReflection": {
      "en": "সততা বজায় রাখা অত্যন্ত গুরুত্বপূর্ণ, তবে \"সুনাম\" এবং \"রাজস্ব\"-এর মধ্যে কঠিন পছন্দটি বেঁচে থাকার পরিস্থিতিতে একটি মিথ্যা দ্বিধাদ্বন্দ্ব বা False Dichotomy হতে পারে। পদ্ধতিগত দুর্নীতি অনেক সময় মানুষকে বেঁচে থাকার জন্য নৈতিক ধুসর অঞ্চলে ঠেলে দেয়। এই উপদেশটি এমন একটি অর্থনৈতিক সুবিধাপ্রাপ্ত অবস্থার কথা বলে যেখানে কেউ আপোসকৃত আয়কে 'না' বলার সামর্থ্য রাখে।",
      "bn": "সততা বজায় রাখা অত্যন্ত গুরুত্বপূর্ণ, তবে \"সুনাম\" এবং \"রাজস্ব\"-এর মধ্যে কঠিন পছন্দটি বেঁচে থাকার পরিস্থিতিতে একটি মিথ্যা দ্বিধাদ্বন্দ্ব বা False Dichotomy হতে পারে। পদ্ধতিগত দুর্নীতি অনেক সময় মানুষকে বেঁচে থাকার জন্য নৈতিক ধুসর অঞ্চলে ঠেলে দেয়। এই উপদেশটি এমন একটি অর্থনৈতিক সুবিধাপ্রাপ্ত অবস্থার কথা বলে যেখানে কেউ আপোসকৃত আয়কে 'না' বলার সামর্থ্য রাখে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "পরিষ্কার বিবেক এবং দীর্ঘমেয়াদী আস্থার পুঁজি।",
        "bn": "পরিষ্কার বিবেক এবং দীর্ঘমেয়াদী আস্থার পুঁজি।"
      },
      "social": {
        "en": "প্রতারণা এবং অনৈতিক ব্যবসায়িক অনুশীলন হ্রাস।",
        "bn": "প্রতারণা এবং অনৈতিক ব্যবসায়িক অনুশীলন হ্রাস।"
      }
    }
  },
  {
    "id": 55,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Myth of Exceptionalism",
      "bn": "The Myth of Exceptionalism"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "A life of excess only leads to more excess.",
          "bn": "A life of excess only leads to more excess."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Moderation is useful and life-enhancing, whereas excess harms by its abundance.",
          "bn": "Moderation is useful and life-enhancing, whereas excess harms by its abundance."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সাধারণ জীবনের সৌন্দর্য",
          "bn": "সাধারণ জীবনের সৌন্দর্য"
        },
        "content": {
          "en": "সুস্থ শরীর, পাগলামিহীন পরিবার এবং কিছু ভালো বন্ধু—এগুলোই আশীর্বাদ। এর চেয়ে বেশি কিছু চাওয়ার নামই লোভ।",
          "bn": "সুস্থ শরীর, পাগলামিহীন পরিবার এবং কিছু ভালো বন্ধু—এগুলোই আশীর্বাদ। এর চেয়ে বেশি কিছু চাওয়ার নামই লোভ।"
        }
      },
      {
        "title": {
          "en": "অতিরিক্তের বিপদ",
          "bn": "অতিরিক্তের বিপদ"
        },
        "content": {
          "en": "সাফল্য, খ্যাতি বা সম্পদের আতিশয্য মানুষকে সুখের বদলে আরও বেশি অশান্তির দিকে ঠেলে দেয়।",
          "bn": "সাফল্য, খ্যাতি বা সম্পদের আতিশয্য মানুষকে সুখের বদলে আরও বেশি অশান্তির দিকে ঠেলে দেয়।"
        }
      },
      {
        "title": {
          "en": "চরিত্র বনাম খ্যাতি",
          "bn": "চরিত্র বনাম খ্যাতি"
        },
        "content": {
          "en": "জে-জেড (Jay-Z) এবং ইয়াংবয় এনবিএ (Youngboy NBA)-এর তুলনা দিয়ে লেখক দেখিয়েছেন, অল্প বয়সে খ্যাতির চেয়ে ধীরে অর্জিত চরিত্র বেশি টেকসই।",
          "bn": "জে-জেড (Jay-Z) এবং ইয়াংবয় এনবিএ (Youngboy NBA)-এর তুলনা দিয়ে লেখক দেখিয়েছেন, অল্প বয়সে খ্যাতির চেয়ে ধীরে অর্জিত চরিত্র বেশি টেকসই।"
        }
      },
      {
        "title": {
          "en": "নিজেকে মেনে নেওয়া",
          "bn": "নিজেকে মেনে নেওয়া"
        },
        "content": {
          "en": "সাফল্যের পেছনে দৌড়ে নিজের স্বকীয়তা হারানোর চেয়ে, একজন নির্ভরযোগ্য ও সাধারণ মানুষ হওয়া অনেক বেশি সম্মানের।",
          "bn": "সাফল্যের পেছনে দৌড়ে নিজের স্বকীয়তা হারানোর চেয়ে, একজন নির্ভরযোগ্য ও সাধারণ মানুষ হওয়া অনেক বেশি সম্মানের।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ রাতে ঘুমানোর আগে আপনার জীবনের ৩টি \"সাধারণ\" জিনিসের জন্য কৃতজ্ঞতা প্রকাশ করুন (যেমন: নিজের বিছানা, এক গ্লাস পরিষ্কার পানি, বা মায়ের ফোন কল)। নিজেকে বলুন, \"আমার জীবন যথেষ্ট সুন্দর।\"",
      "bn": "আজ রাতে ঘুমানোর আগে আপনার জীবনের ৩টি \"সাধারণ\" জিনিসের জন্য কৃতজ্ঞতা প্রকাশ করুন (যেমন: নিজের বিছানা, এক গ্লাস পরিষ্কার পানি, বা মায়ের ফোন কল)। নিজেকে বলুন, \"আমার জীবন যথেষ্ট সুন্দর।\""
    },
    "criticalReflection": {
      "en": "\"স্বাভাবিক\" জীবন উদযাপন করা হাসল কালচারের একটি স্বাস্থ্যকর প্রতিষেধক, কিন্তু এটি সাধারণত্ব বা উচ্চাকাঙ্ক্ষার অভাবকে সমর্থন করার জন্যও ব্যবহার করা যেতে পারে। \"স্বাভাবিক\" বা \"Normal\" বিষয়টি আপেক্ষিক; কারো কারো জন্য এর অর্থ নিরাপত্তা, অন্যদের জন্য এটি স্থবিরতা। চ্যালেঞ্জ হলো উন্নতির এবং উচ্চাকাঙ্ক্ষা না হারিয়েও তুষ্ট থাকা।",
      "bn": "\"স্বাভাবিক\" জীবন উদযাপন করা হাসল কালচারের একটি স্বাস্থ্যকর প্রতিষেধক, কিন্তু এটি সাধারণত্ব বা উচ্চাকাঙ্ক্ষার অভাবকে সমর্থন করার জন্যও ব্যবহার করা যেতে পারে। \"স্বাভাবিক\" বা \"Normal\" বিষয়টি আপেক্ষিক; কারো কারো জন্য এর অর্থ নিরাপত্তা, অন্যদের জন্য এটি স্থবিরতা। চ্যালেঞ্জ হলো উন্নতির এবং উচ্চাকাঙ্ক্ষা না হারিয়েও তুষ্ট থাকা।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "জীবন নিয়ে সন্তুষ্টি বৃদ্ধি এবং \"FOMO\" (Fear Of Missing Out) হ্রাস।",
        "bn": "জীবন নিয়ে সন্তুষ্টি বৃদ্ধি এবং \"FOMO\" (Fear Of Missing Out) হ্রাস।"
      },
      "social": {
        "en": "তরুণদের ওপর রাতারাতি ভাইরাল সেনসেশন বা কোটিপতি হওয়ার চাপ কমবে।",
        "bn": "তরুণদের ওপর রাতারাতি ভাইরাল সেনসেশন বা কোটিপতি হওয়ার চাপ কমবে।"
      }
    }
  },
  {
    "id": 56,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Money as a Tool, Not a Master",
      "bn": "Money as a Tool, Not a Master"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The man who needs wealth is afraid of it... He is eager to add something to it, and while he is concentrating on the increase he has forgotten to use it.",
          "bn": "The man who needs wealth is afraid of it... He is eager to add something to it, and while he is concentrating on the increase he has forgotten to use it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Isn’t the true definition of being wealthy not having to worry about money?",
          "bn": "Isn’t the true definition of being wealthy not having to worry about money?"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "অর্থের দাসত্ব",
          "bn": "অর্থের দাসত্ব"
        },
        "content": {
          "en": "যারা টাকার পেছনে ছোটে, তারা টাকার ব্যবহার করতে ভুলে যায়। তারা কেবল জমাতেই ব্যস্ত থাকে, ভোগ করতে পারে না।",
          "bn": "যারা টাকার পেছনে ছোটে, তারা টাকার ব্যবহার করতে ভুলে যায়। তারা কেবল জমাতেই ব্যস্ত থাকে, ভোগ করতে পারে না।"
        }
      },
      {
        "title": {
          "en": "ভয় ও লোভ",
          "bn": "ভয় ও লোভ"
        },
        "content": {
          "en": "টাকা হারানোর ভয় এবং আরও টাকার লোভ—এই দুইয়ের চক্রে মানুষ আটকা পড়ে যায়।",
          "bn": "টাকা হারানোর ভয় এবং আরও টাকার লোভ—এই দুইয়ের চক্রে মানুষ আটকা পড়ে যায়।"
        }
      },
      {
        "title": {
          "en": "আসল ধনী",
          "bn": "আসল ধনী"
        },
        "content": {
          "en": "যার ব্যাংকে কোটি টাকা আছে সে ধনী নয়; ধনী সে-ই যার টাকার অভাব নিয়ে কোনো দুশ্চিন্তা নেই, তা সে অল্প টাকাতেই হোক।",
          "bn": "যার ব্যাংকে কোটি টাকা আছে সে ধনী নয়; ধনী সে-ই যার টাকার অভাব নিয়ে কোনো দুশ্চিন্তা নেই, তা সে অল্প টাকাতেই হোক।"
        }
      },
      {
        "title": {
          "en": "সরল জীবন",
          "bn": "সরল জীবন"
        },
        "content": {
          "en": "মাঝে মাঝে ইচ্ছাকৃতভাবে বিলাসবহুল জীবন ত্যাগ করে সাধারণ জীবনযাপন করলে টাকার প্রতি মোহ কমে।",
          "bn": "মাঝে মাঝে ইচ্ছাকৃতভাবে বিলাসবহুল জীবন ত্যাগ করে সাধারণ জীবনযাপন করলে টাকার প্রতি মোহ কমে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "মাসে একবার \"Poverty Simulation\" করুন। খুব সাধারণ খাবার খান, কোনো খরচ করবেন না। এটি আপনাকে বোঝাবে যে সুখের জন্য টাকার প্রয়োজন খুব কম। এতে অর্থ হারানোর ভয় কমে যাবে।",
      "bn": "মাসে একবার \"Poverty Simulation\" করুন। খুব সাধারণ খাবার খান, কোনো খরচ করবেন না। এটি আপনাকে বোঝাবে যে সুখের জন্য টাকার প্রয়োজন খুব কম। এতে অর্থ হারানোর ভয় কমে যাবে।"
    },
    "criticalReflection": {
      "en": "\"টাকা নিয়ে চিন্তা না করা\"-ই হলো সম্পদের সংজ্ঞা, কিন্তু সেই অবস্থায় পৌঁছাতে শুরুতে প্রচুর টাকার প্রয়োজন হয়। টাকা থেকে বিচ্ছিন্ন থাকার স্টয়িক উপদেশটি মনস্তাত্বিকভাবে সঠিক হলেও যারা দিন এনে দিন খায় তাদের জন্য এটি বাস্তবে কঠিন।",
      "bn": "\"টাকা নিয়ে চিন্তা না করা\"-ই হলো সম্পদের সংজ্ঞা, কিন্তু সেই অবস্থায় পৌঁছাতে শুরুতে প্রচুর টাকার প্রয়োজন হয়। টাকা থেকে বিচ্ছিন্ন থাকার স্টয়িক উপদেশটি মনস্তাত্বিকভাবে সঠিক হলেও যারা দিন এনে দিন খায় তাদের জন্য এটি বাস্তবে কঠিন।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "আর্থিক স্বাধীনতা (মনস্তাত্ত্বিক, কেবল গাণিতিক নয়)।",
        "bn": "আর্থিক স্বাধীনতা (মনস্তাত্ত্বিক, কেবল গাণিতিক নয়)।"
      },
      "social": {
        "en": "লোক দেখানো ভোগের পরিবর্তে সচেতন জীবনযাপনের দিকে পরিবর্তন।",
        "bn": "লোক দেখানো ভোগের পরিবর্তে সচেতন জীবনযাপনের দিকে পরিবর্তন।"
      }
    }
  },
  {
    "id": 57,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Action Speaks Louder",
      "bn": "Action Speaks Louder"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "When we try to tell people about Stoicism... we’re actually making a show of our principles.",
          "bn": "When we try to tell people about Stoicism... we’re actually making a show of our principles."
        },
        "author": {
          "en": "Epictetus",
          "bn": "Epictetus"
        }
      },
      {
        "quote": {
          "en": "Sheep don’t bring their owners grass to show how much they ate.",
          "bn": "Sheep don’t bring their owners grass to show how much they ate."
        },
        "author": {
          "en": "Epictetus",
          "bn": "Epictetus"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "উপদেশ বনাম উদাহরণ",
          "bn": "উপদেশ বনাম উদাহরণ"
        },
        "content": {
          "en": "মানুষকে মুখে জ্ঞান দেওয়ার চেয়ে নিজের কাজের মাধ্যমে উদাহরণ তৈরি করা বেশি কার্যকর।",
          "bn": "মানুষকে মুখে জ্ঞান দেওয়ার চেয়ে নিজের কাজের মাধ্যমে উদাহরণ তৈরি করা বেশি কার্যকর।"
        }
      },
      {
        "title": {
          "en": "ভেড়ার উপমা",
          "bn": "ভেড়ার উপমা"
        },
        "content": {
          "en": "এপিক্টেটাস বলেছেন, ভেড়া ঘাস খেয়ে মালিককে ঘাস দেখায় না; সে দুধ ও পশম দেয়। তেমনি, আপনি কত বই পড়েছেন তা না দেখিয়ে, আপনার আচরণে তার প্রতিফলন দেখান।",
          "bn": "এপিক্টেটাস বলেছেন, ভেড়া ঘাস খেয়ে মালিককে ঘাস দেখায় না; সে দুধ ও পশম দেয়। তেমনি, আপনি কত বই পড়েছেন তা না দেখিয়ে, আপনার আচরণে তার প্রতিফলন দেখান।"
        }
      },
      {
        "title": {
          "en": "বিনিময়",
          "bn": "বিনিময়"
        },
        "content": {
          "en": "জ্ঞান নিজের কাছে চেপে না রেখে অন্যদের সাথে ভাগ করে নেওয়া উচিত, তবে তা হতে হবে বিনম্রভাবে।",
          "bn": "জ্ঞান নিজের কাছে চেপে না রেখে অন্যদের সাথে ভাগ করে নেওয়া উচিত, তবে তা হতে হবে বিনম্রভাবে।"
        }
      },
      {
        "title": {
          "en": "শো-অফ বর্জন",
          "bn": "শো-অফ বর্জন"
        },
        "content": {
          "en": "নিজের নীতি বা দর্শন জাহির করা এক ধরনের অহংকার। প্রকৃত স্টয়িকরা নীরবে কাজ করে যান।",
          "bn": "নিজের নীতি বা দর্শন জাহির করা এক ধরনের অহংকার। প্রকৃত স্টয়িকরা নীরবে কাজ করে যান।"
        }
      }
    ],
    "practicalApplication": {
      "en": "কাউকে কোনো উপদেশ দেওয়ার আগে ভাবুন, \"আমি কি এই উপদেশ নিজে পালন করি?\" যদি না করেন, তবে চুপ থাকুন। আজ থেকে \"আমি জানি\" বলার বদলে \"আমি করছি\" প্রমাণ করার চেষ্টা করুন।",
      "bn": "কাউকে কোনো উপদেশ দেওয়ার আগে ভাবুন, \"আমি কি এই উপদেশ নিজে পালন করি?\" যদি না করেন, তবে চুপ থাকুন। আজ থেকে \"আমি জানি\" বলার বদলে \"আমি করছি\" প্রমাণ করার চেষ্টা করুন।"
    },
    "criticalReflection": {
      "en": "যদিও উদাহরণের মাধ্যমে নেতৃত্ব দেওয়া শক্তিশালী, কিছু পরিস্থিতির জন্য স্পষ্ট প্রতিবাদ এবং নির্দেশনার প্রয়োজন হয়। জরুরি অজ্ঞতা বা অবিচারের মুখে চুপ থাকা এবং কাজ দিয়ে অনুপ্রাণিত করার আশা করাটা খুব বেশি নিষ্ক্রিয় হতে পারে।",
      "bn": "যদিও উদাহরণের মাধ্যমে নেতৃত্ব দেওয়া শক্তিশালী, কিছু পরিস্থিতির জন্য স্পষ্ট প্রতিবাদ এবং নির্দেশনার প্রয়োজন হয়। জরুরি অজ্ঞতা বা অবিচারের মুখে চুপ থাকা এবং কাজ দিয়ে অনুপ্রাণিত করার আশা করাটা খুব বেশি নিষ্ক্রিয় হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "নেতা হিসেবে বিশ্বাসযোগ্যতা এবং যথার্থতা (Authenticity)।",
        "bn": "নেতা হিসেবে বিশ্বাসযোগ্যতা এবং যথার্থতা (Authenticity)।"
      },
      "social": {
        "en": "ভণ্ডামি হ্রাস এবং আরও অকৃত্রিম মেন্টরশিপ।",
        "bn": "ভণ্ডামি হ্রাস এবং আরও অকৃত্রিম মেন্টরশিপ।"
      }
    }
  },
  {
    "id": 58,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Long Game (Introductory)",
      "bn": "The Long Game (Introductory)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "If you accomplish something good with hard work, the labor passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasure passes quickly, but the shame endures.",
          "bn": "If you accomplish something good with hard work, the labor passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasure passes quickly, but the shame endures."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "শ্রম বনাম লজ্জা",
          "bn": "শ্রম বনাম লজ্জা"
        },
        "content": {
          "en": "কষ্টের কাজ শেষ হয়ে যায়, কিন্তু তার সুফল থেকে যায়। অন্যদিকে, অনৈতিক সুখ দ্রুত শেষ হয়, কিন্তু তার লজ্জা বা গ্লানি আজীবন থেকে যায়।",
          "bn": "কষ্টের কাজ শেষ হয়ে যায়, কিন্তু তার সুফল থেকে যায়। অন্যদিকে, অনৈতিক সুখ দ্রুত শেষ হয়, কিন্তু তার লজ্জা বা গ্লানি আজীবন থেকে যায়।"
        }
      },
      {
        "title": {
          "en": "ক্যারিয়ারের ভিত্তি",
          "bn": "ক্যারিয়ারের ভিত্তি"
        },
        "content": {
          "en": "ক্যারিয়ার গড়ার সময় শর্টকাট বা অনৈতিক পথ পরিহার করা উচিত, কারণ দীর্ঘমেয়াদে তা কেবল অনুশোচনাই বয়ে আনে।",
          "bn": "ক্যারিয়ার গড়ার সময় শর্টকাট বা অনৈতিক পথ পরিহার করা উচিত, কারণ দীর্ঘমেয়াদে তা কেবল অনুশোচনাই বয়ে আনে।"
        }
      },
      {
        "title": {
          "en": "Chapter 59",
          "bn": "Chapter 59"
        },
        "content": {
          "en": "Letter 48: On Resting vs Working",
          "bn": "Letter 48: On Resting vs Working"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "Productive Rest",
          "bn": "Productive Rest"
        }
      },
      {
        "title": {
          "en": "বিশ্রামের সময়",
          "bn": "বিশ্রামের সময়"
        },
        "content": {
          "en": "ক্লান্ত হওয়ার আগেই বিশ্রাম নেওয়া উচিত। তৃষ্ণা পাওয়ার আগে পানি খাওয়ার মতো এটি বার্নআউট (Burnout) প্রতিরোধ করে।",
          "bn": "ক্লান্ত হওয়ার আগেই বিশ্রাম নেওয়া উচিত। তৃষ্ণা পাওয়ার আগে পানি খাওয়ার মতো এটি বার্নআউট (Burnout) প্রতিরোধ করে।"
        }
      },
      {
        "title": {
          "en": "অলসতার ফাঁদ",
          "bn": "অলসতার ফাঁদ"
        },
        "content": {
          "en": "অতিরিক্ত বিশ্রাম বা কাজ থেকে পালানো মানুষকে আরও অস্থির করে তোলে। কাজই অনেক সময় মানসিক শান্তির উৎস।",
          "bn": "অতিরিক্ত বিশ্রাম বা কাজ থেকে পালানো মানুষকে আরও অস্থির করে তোলে। কাজই অনেক সময় মানসিক শান্তির উৎস।"
        }
      },
      {
        "title": {
          "en": "কাজের আনন্দ",
          "bn": "কাজের আনন্দ"
        },
        "content": {
          "en": "যারা নিজের কাজ উপভোগ করেন, তাদের ঘন ঘন ছুটির প্রয়োজন হয় না। তাদের জন্য কাজই এক ধরনের খেলা।",
          "bn": "যারা নিজের কাজ উপভোগ করেন, তাদের ঘন ঘন ছুটির প্রয়োজন হয় না। তাদের জন্য কাজই এক ধরনের খেলা।"
        }
      },
      {
        "title": {
          "en": "ব্যালেন্স",
          "bn": "ব্যালেন্স"
        },
        "content": {
          "en": "কাজ ও বিশ্রামের মধ্যে ভারসাম্য রাখা জরুরি, যাতে কোনোটিই বিরক্তির কারণ না হয়।",
          "bn": "কাজ ও বিশ্রামের মধ্যে ভারসাম্য রাখা জরুরি, যাতে কোনোটিই বিরক্তির কারণ না হয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "",
      "bn": ""
    },
    "criticalReflection": {
      "en": "",
      "bn": ""
    },
    "expectedOutcomes": {
      "individual": {
        "en": "",
        "bn": ""
      },
      "social": {
        "en": "",
        "bn": ""
      }
    }
  },
  {
    "id": 59,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Productive Rest",
      "bn": "Productive Rest"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Rest before you are tired.",
          "bn": "Rest before you are tired."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Sometimes rest itself is restless.",
          "bn": "Sometimes rest itself is restless."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "If you find pleasure in your work, you won’t yearn for rest all the time.",
          "bn": "If you find pleasure in your work, you won’t yearn for rest all the time."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "বিশ্রামের সময়",
          "bn": "বিশ্রামের সময়"
        },
        "content": {
          "en": "ক্লান্ত হওয়ার আগেই বিশ্রাম নেওয়া উচিত। তৃষ্ণা পাওয়ার আগে পানি খাওয়ার মতো এটি বার্নআউট (Burnout) প্রতিরোধ করে।",
          "bn": "ক্লান্ত হওয়ার আগেই বিশ্রাম নেওয়া উচিত। তৃষ্ণা পাওয়ার আগে পানি খাওয়ার মতো এটি বার্নআউট (Burnout) প্রতিরোধ করে।"
        }
      },
      {
        "title": {
          "en": "অলসতার ফাঁদ",
          "bn": "অলসতার ফাঁদ"
        },
        "content": {
          "en": "অতিরিক্ত বিশ্রাম বা কাজ থেকে পালানো মানুষকে আরও অস্থির করে তোলে। কাজই অনেক সময় মানসিক শান্তির উৎস।",
          "bn": "অতিরিক্ত বিশ্রাম বা কাজ থেকে পালানো মানুষকে আরও অস্থির করে তোলে। কাজই অনেক সময় মানসিক শান্তির উৎস।"
        }
      },
      {
        "title": {
          "en": "কাজের আনন্দ",
          "bn": "কাজের আনন্দ"
        },
        "content": {
          "en": "যারা নিজের কাজ উপভোগ করেন, তাদের ঘন ঘন ছুটির প্রয়োজন হয় না। তাদের জন্য কাজই এক ধরনের খেলা।",
          "bn": "যারা নিজের কাজ উপভোগ করেন, তাদের ঘন ঘন ছুটির প্রয়োজন হয় না। তাদের জন্য কাজই এক ধরনের খেলা।"
        }
      },
      {
        "title": {
          "en": "ব্যালেন্স",
          "bn": "ব্যালেন্স"
        },
        "content": {
          "en": "কাজ ও বিশ্রামের মধ্যে ভারসাম্য রাখা জরুরি, যাতে কোনোটিই বিরক্তির কারণ না হয়।",
          "bn": "কাজ ও বিশ্রামের মধ্যে ভারসাম্য রাখা জরুরি, যাতে কোনোটিই বিরক্তির কারণ না হয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "পোমোডোরো (Pomodoro) টেকনিক ব্যবহার করুন। ২৫ মিনিট কাজ, ৫ মিনিট বিশ্রাম। ক্লান্ত হওয়ার জন্য অপেক্ষা করবেন না। এই ছোট ছোট বিশ্রাম আপনার এনার্জি লেভেল সারাদিন ধরে রাখবে।",
      "bn": "পোমোডোরো (Pomodoro) টেকনিক ব্যবহার করুন। ২৫ মিনিট কাজ, ৫ মিনিট বিশ্রাম। ক্লান্ত হওয়ার জন্য অপেক্ষা করবেন না। এই ছোট ছোট বিশ্রাম আপনার এনার্জি লেভেল সারাদিন ধরে রাখবে।"
    },
    "criticalReflection": {
      "en": "\"ক্লান্ত হওয়ার আগেই বিশ্রাম নিন\"—উপদেশটি চমৎকার কিন্তু কঠোর কর্পোরেট কাঠামো বা গিগ ইকোনমিতে বাস্তবায়ন করা কঠিন যেখানে সময় মানেই টাকা। এছাড়াও, কাজে আনন্দ খুঁজে পাওয়া আদর্শ, কিন্তু অনেকের ছোটোখাটো বা একঘেয়ে নিচু পদের চাকরিতে কাজ কেবলই লেনদেনমূলক, যেখানে বিশ্রামের জন্য কঠোর সীমানা প্রয়োজন।",
      "bn": "\"ক্লান্ত হওয়ার আগেই বিশ্রাম নিন\"—উপদেশটি চমৎকার কিন্তু কঠোর কর্পোরেট কাঠামো বা গিগ ইকোনমিতে বাস্তবায়ন করা কঠিন যেখানে সময় মানেই টাকা। এছাড়াও, কাজে আনন্দ খুঁজে পাওয়া আদর্শ, কিন্তু অনেকের ছোটোখাটো বা একঘেয়ে নিচু পদের চাকরিতে কাজ কেবলই লেনদেনমূলক, যেখানে বিশ্রামের জন্য কঠোর সীমানা প্রয়োজন।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উচ্চ শক্তি ধরে রাখা এবং ক্রনিক ক্লান্তি বা ফ্যাটিগ প্রতিরোধ।",
        "bn": "উচ্চ শক্তি ধরে রাখা এবং ক্রনিক ক্লান্তি বা ফ্যাটিগ প্রতিরোধ।"
      },
      "social": {
        "en": "অসুস্থতার ছুটি কম এবং একটি স্বাস্থ্যকর কর্মী বাহিনী।",
        "bn": "অসুস্থতার ছুটি কম এবং একটি স্বাস্থ্যকর কর্মী বাহিনী।"
      }
    }
  },
  {
    "id": 60,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Playing Your Role",
      "bn": "Playing Your Role"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Consider yourself as an actor in a play. The nature of the play... is for the director to decide.",
          "bn": "Consider yourself as an actor in a play. The nature of the play... is for the director to decide."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "It’s not that our lives are bad; we just think our lives are bad and expect that could or should be limitless and extraordinary.",
          "bn": "It’s not that our lives are bad; we just think our lives are bad and expect that could or should be limitless and extraordinary."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "জীবনের মঞ্চ",
          "bn": "জীবনের মঞ্চ"
        },
        "content": {
          "en": "আমরা সবাই একটি নাটকের অভিনেতা। আমাদের চরিত্র বা পরিস্থিতি (ধনী/গরিব, সুস্থ/অসুস্থ) আমাদের হাতে নেই; আমাদের কাজ হলো সেই চরিত্রে সেরাটা দেওয়া।",
          "bn": "আমরা সবাই একটি নাটকের অভিনেতা। আমাদের চরিত্র বা পরিস্থিতি (ধনী/গরিব, সুস্থ/অসুস্থ) আমাদের হাতে নেই; আমাদের কাজ হলো সেই চরিত্রে সেরাটা দেওয়া।"
        }
      },
      {
        "title": {
          "en": "অবাস্তব প্রত্যাশা",
          "bn": "অবাস্তব প্রত্যাশা"
        },
        "content": {
          "en": "সমাজ শেখায় \"তুমি যা ইচ্ছা তাই হতে পারো\"—এটি একটি মিথ্যা। আমাদের সীমাবদ্ধতা আছে এবং তা মেনে নেওয়াই বুদ্ধিমানের কাজ।",
          "bn": "সমাজ শেখায় \"তুমি যা ইচ্ছা তাই হতে পারো\"—এটি একটি মিথ্যা। আমাদের সীমাবদ্ধতা আছে এবং তা মেনে নেওয়াই বুদ্ধিমানের কাজ।"
        }
      },
      {
        "title": {
          "en": "ভাগ্যের লটারি",
          "bn": "ভাগ্যের লটারি"
        },
        "content": {
          "en": "ওয়ারেন বাফেটের মতো সফলরাও স্বীকার করেন যে তাদের সাফল্যে ভাগ্য বা জন্মস্থানের ভূমিকা বিশাল। একে \"ওভারিয়ান লটারি\" বলা হয়।",
          "bn": "ওয়ারেন বাফেটের মতো সফলরাও স্বীকার করেন যে তাদের সাফল্যে ভাগ্য বা জন্মস্থানের ভূমিকা বিশাল। একে \"ওভারিয়ান লটারি\" বলা হয়।"
        }
      },
      {
        "title": {
          "en": "তুলনা ও দুঃখ",
          "bn": "তুলনা ও দুঃখ"
        },
        "content": {
          "en": "নিজের জীবনকে অন্যের কাল্পনিক \"পারফেক্ট\" জীবনের সাথে তুলনা করাই আমাদের দুঃখের মূল কারণ।",
          "bn": "নিজের জীবনকে অন্যের কাল্পনিক \"পারফেক্ট\" জীবনের সাথে তুলনা করাই আমাদের দুঃখের মূল কারণ।"
        }
      }
    ],
    "practicalApplication": {
      "en": "নিজের বর্তমান পরিস্থিতির ৩টি সীমাবদ্ধতা লিখুন (যেমন: আর্থিক অবস্থা, বয়স বা পারিবারিক দায়িত্ব)। এগুলোকে \"সমস্যা\" হিসেবে না দেখে নাটকের \"স্ক্রিপ্ট\" হিসেবে দেখুন। বলুন, \"এই স্ক্রিপ্টেই আমি সেরা অভিনয় করে দেখাব।\"",
      "bn": "নিজের বর্তমান পরিস্থিতির ৩টি সীমাবদ্ধতা লিখুন (যেমন: আর্থিক অবস্থা, বয়স বা পারিবারিক দায়িত্ব)। এগুলোকে \"সমস্যা\" হিসেবে না দেখে নাটকের \"স্ক্রিপ্ট\" হিসেবে দেখুন। বলুন, \"এই স্ক্রিপ্টেই আমি সেরা অভিনয় করে দেখাব।\""
    },
    "criticalReflection": {
      "en": "জীবনকে একটি পূর্বনির্ধারিত স্ক্রিপ্টের নাটক হিসেবে দেখার রূপকটি সবকিছু মেনে নিতে উৎসাহিত করে, কিন্তু এটি সামাজিক গতিশীলতা বা প্রগতিকে নিরুৎসাহিত করার ঝুঁকি তৈরি করে। যদি সবাই তাদের \"চরিত্র\" (যেমন, একজন গরিব ব্যক্তি হিসেবে) মেনে নেয়, তবে সামাজিক অগ্রগতি স্থগিত হয়ে যায়। এটি নিয়তিবাদের দিকে ঝুঁকতে পারে।",
      "bn": "জীবনকে একটি পূর্বনির্ধারিত স্ক্রিপ্টের নাটক হিসেবে দেখার রূপকটি সবকিছু মেনে নিতে উৎসাহিত করে, কিন্তু এটি সামাজিক গতিশীলতা বা প্রগতিকে নিরুৎসাহিত করার ঝুঁকি তৈরি করে। যদি সবাই তাদের \"চরিত্র\" (যেমন, একজন গরিব ব্যক্তি হিসেবে) মেনে নেয়, তবে সামাজিক অগ্রগতি স্থগিত হয়ে যায়। এটি নিয়তিবাদের দিকে ঝুঁকতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "নিজের পরিস্থিতির সাথে শান্তি এবং হিংসা হ্রাস।",
        "bn": "নিজের পরিস্থিতির সাথে শান্তি এবং হিংসা হ্রাস।"
      },
      "social": {
        "en": "শ্রেণী সংঘাত কম হতে পারে, কিন্তু সামাজিক সাম্যের জন্য তাগিদও কমে যেতে পারে।",
        "bn": "শ্রেণী সংঘাত কম হতে পারে, কিন্তু সামাজিক সাম্যের জন্য তাগিদও কমে যেতে পারে।"
      }
    }
  },
  {
    "id": 61,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Integrity in Solitude",
      "bn": "Integrity in Solitude"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Be your own witness if you need one. You don’t need any more witness than that.",
          "bn": "Be your own witness if you need one. You don’t need any more witness than that."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "What do you do when no one’s watching? Your actions during those moments define you.",
          "bn": "What do you do when no one’s watching? Your actions during those moments define you."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "একান্ত সততা",
          "bn": "একান্ত সততা"
        },
        "content": {
          "en": "কেউ দেখছে না—এমন সময়ে আপনি কী করেন, সেটাই আপনার আসল চরিত্র।",
          "bn": "কেউ দেখছে না—এমন সময়ে আপনি কী করেন, সেটাই আপনার আসল চরিত্র।"
        }
      },
      {
        "title": {
          "en": "আত্ম-সাক্ষী",
          "bn": "আত্ম-সাক্ষী"
        },
        "content": {
          "en": "অন্যের প্রশংসার জন্য নয়, নিজের কাছে সৎ থাকার জন্য ভালো কাজ করুন। আপনি নিজেই আপনার বিচারক।",
          "bn": "অন্যের প্রশংসার জন্য নয়, নিজের কাছে সৎ থাকার জন্য ভালো কাজ করুন। আপনি নিজেই আপনার বিচারক।"
        }
      },
      {
        "title": {
          "en": "ওয়ার্ক ফ্রম হোম",
          "bn": "ওয়ার্ক ফ্রম হোম"
        },
        "content": {
          "en": "ঘরে বসে কাজ করার সময় বস দেখছে না বলে ফাঁকি দেওয়া বা নিজের স্ট্যান্ডার্ড কমানো—এগুলো আত্মসম্মান হীনতার লক্ষণ।",
          "bn": "ঘরে বসে কাজ করার সময় বস দেখছে না বলে ফাঁকি দেওয়া বা নিজের স্ট্যান্ডার্ড কমানো—এগুলো আত্মসম্মান হীনতার লক্ষণ।"
        }
      },
      {
        "title": {
          "en": "অন্তরের মোটিভেশন",
          "bn": "অন্তরের মোটিভেশন"
        },
        "content": {
          "en": "বাইরের কোনো সাক্ষী বা পুরস্কার ছাড়াই কাজ করার ক্ষমতা হলো প্রকৃত স্বাধীনতা।",
          "bn": "বাইরের কোনো সাক্ষী বা পুরস্কার ছাড়াই কাজ করার ক্ষমতা হলো প্রকৃত স্বাধীনতা।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ এমন একটি ভালো কাজ করুন যা কেউ জানবে না। রাস্তা থেকে ময়লা সরানো বা গোপনে দান করা। এরপর কাউকে সেটা বলবেন না। এই গোপন ভালো কাজটি আপনার আত্মসম্মানবোধ বহুগুণ বাড়িয়ে দেবে।",
      "bn": "আজ এমন একটি ভালো কাজ করুন যা কেউ জানবে না। রাস্তা থেকে ময়লা সরানো বা গোপনে দান করা। এরপর কাউকে সেটা বলবেন না। এই গোপন ভালো কাজটি আপনার আত্মসম্মানবোধ বহুগুণ বাড়িয়ে দেবে।"
    },
    "criticalReflection": {
      "en": "নিজের সাক্ষী নিজেই হওয়া সততার সর্বোচ্চ রূপ। তবে, বাহ্যিক জবাবদিহিতা ছাড়া আত্ম-প্রবঞ্চনা বা Self-deception খুব সহজে ঢুকে পড়তে পারে। আমরা প্রায়শই নিজেদের বিচার করার ক্ষেত্রে পক্ষপাতদুষ্ট। অভ্যন্তরীণ মানদণ্ড এবং বাহ্যিক ফিডব্যাকের একটি মিশ্রণ আদর্শ।",
      "bn": "নিজের সাক্ষী নিজেই হওয়া সততার সর্বোচ্চ রূপ। তবে, বাহ্যিক জবাবদিহিতা ছাড়া আত্ম-প্রবঞ্চনা বা Self-deception খুব সহজে ঢুকে পড়তে পারে। আমরা প্রায়শই নিজেদের বিচার করার ক্ষেত্রে পক্ষপাতদুষ্ট। অভ্যন্তরীণ মানদণ্ড এবং বাহ্যিক ফিডব্যাকের একটি মিশ্রণ আদর্শ।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "অটল আত্মবিশ্বাস এবং নৈতিক ভিত্তি।",
        "bn": "অটল আত্মবিশ্বাস এবং নৈতিক ভিত্তি।"
      },
      "social": {
        "en": "একটি উচ্চ-আস্থার সমাজ যেখানে তদারকি খরচ কম।",
        "bn": "একটি উচ্চ-আস্থার সমাজ যেখানে তদারকি খরচ কম।"
      }
    }
  },
  {
    "id": 62,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Precision of Speech",
      "bn": "The Precision of Speech"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "If someone bathes quickly, don’t say he doesn’t bathe properly, say he bathes quickly.",
          "bn": "If someone bathes quickly, don’t say he doesn’t bathe properly, say he bathes quickly."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "To live like a Stoic, practice precision in your words.",
          "bn": "To live like a Stoic, practice precision in your words."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ফ্যাক্ট বনাম জাজমেন্ট",
          "bn": "ফ্যাক্ট বনাম জাজমেন্ট"
        },
        "content": {
          "en": "আমরা প্রায়ই ঘটনা বর্ণনা না করে রায় দিয়ে ফেলি। \"সে খারাপ লোক\" না বলে \"সে আমার সাথে খারাপ ব্যবহার করেছে\"—এভাবে বলা উচিত।",
          "bn": "আমরা প্রায়ই ঘটনা বর্ণনা না করে রায় দিয়ে ফেলি। \"সে খারাপ লোক\" না বলে \"সে আমার সাথে খারাপ ব্যবহার করেছে\"—এভাবে বলা উচিত।"
        }
      },
      {
        "title": {
          "en": "লেখার গুরুত্ব",
          "bn": "লেখার গুরুত্ব"
        },
        "content": {
          "en": "লেখার মাধ্যমে চিন্তা পরিষ্কার হয়। কথা বলার আগে লিখে বা গুছিয়ে নিলে ভুল বোঝাবুঝি কমে।",
          "bn": "লেখার মাধ্যমে চিন্তা পরিষ্কার হয়। কথা বলার আগে লিখে বা গুছিয়ে নিলে ভুল বোঝাবুঝি কমে।"
        }
      },
      {
        "title": {
          "en": "ব্যাকস্পেস নেই",
          "bn": "ব্যাকস্পেস নেই"
        },
        "content": {
          "en": "মুখের কথার কোনো \"ব্যাকস্পেস\" বা মোছার সুযোগ নেই। তাই শব্দ চয়ন হতে হবে সতর্ক।",
          "bn": "মুখের কথার কোনো \"ব্যাকস্পেস\" বা মোছার সুযোগ নেই। তাই শব্দ চয়ন হতে হবে সতর্ক।"
        }
      },
      {
        "title": {
          "en": "যোগাযোগ দক্ষতা",
          "bn": "যোগাযোগ দক্ষতা"
        },
        "content": {
          "en": "স্পষ্ট ও সঠিক শব্দ ব্যবহার করলে সম্পর্ক ভালো থাকে এবং অপ্রয়োজনীয় ঝগড়া এড়ানো যায়।",
          "bn": "স্পষ্ট ও সঠিক শব্দ ব্যবহার করলে সম্পর্ক ভালো থাকে এবং অপ্রয়োজনীয় ঝগড়া এড়ানো যায়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ সারাদিন বিশেষণ (Adjective) ব্যবহার কম করুন। \"বাজে আবহাওয়া\" না বলে বলুন \"বৃষ্টি হচ্ছে।\" \"বিরক্তিকর ট্রাফিক\" না বলে বলুন \"গাড়ি ধীরে চলছে।\" ঘটনাকে আবেগ থেকে আলাদা করে দেখার চেষ্টা করুন।",
      "bn": "আজ সারাদিন বিশেষণ (Adjective) ব্যবহার কম করুন। \"বাজে আবহাওয়া\" না বলে বলুন \"বৃষ্টি হচ্ছে।\" \"বিরক্তিকর ট্রাফিক\" না বলে বলুন \"গাড়ি ধীরে চলছে।\" ঘটনাকে আবেগ থেকে আলাদা করে দেখার চেষ্টা করুন।"
    },
    "criticalReflection": {
      "en": "নির্ভুলতা বা Precision দ্বন্দ্ব কমায় কিন্তু কখনও কখনও ভাষাকে আবেগ ও সূক্ষ্মতা বর্জিত করে ফেলতে পারে। ঘনিষ্ঠ সম্পর্কের ক্ষেত্রে, অনুভূতি (যা সাবজেক্টিভ এবং অনির্দিষ্ট হতে পারে) প্রকাশ করা প্রায়শই কাঠখোট্টা তথ্যের চেয়ে বেশি গুরুত্বপূর্ণ।",
      "bn": "নির্ভুলতা বা Precision দ্বন্দ্ব কমায় কিন্তু কখনও কখনও ভাষাকে আবেগ ও সূক্ষ্মতা বর্জিত করে ফেলতে পারে। ঘনিষ্ঠ সম্পর্কের ক্ষেত্রে, অনুভূতি (যা সাবজেক্টিভ এবং অনির্দিষ্ট হতে পারে) প্রকাশ করা প্রায়শই কাঠখোট্টা তথ্যের চেয়ে বেশি গুরুত্বপূর্ণ।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "স্পষ্ট চিন্তাভাবনা এবং আন্তঃব্যক্তিক নাটকীয়তা বা ড্রামা হ্রাস।",
        "bn": "স্পষ্ট চিন্তাভাবনা এবং আন্তঃব্যক্তিক নাটকীয়তা বা ড্রামা হ্রাস।"
      },
      "social": {
        "en": "আরও যুক্তিবাদী পাবলিক ডিসকোর্স বা আলোচনা।",
        "bn": "আরও যুক্তিবাদী পাবলিক ডিসকোর্স বা আলোচনা।"
      }
    }
  },
  {
    "id": 63,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Essentialism",
      "bn": "Essentialism"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "If you seek tranquility, do less.",
          "bn": "If you seek tranquility, do less."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Ask yourself at every moment, ‘Is this necessary?’",
          "bn": "Ask yourself at every moment, ‘Is this necessary?’"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "কম করা",
          "bn": "কম করা"
        },
        "content": {
          "en": "প্রশান্তি চাইলে কাজের পরিমাণ কমাতে হবে। বেশি কাজ মানেই বেশি উৎপাদনশীলতা নয়; বরং এটি বার্নআউট ডেকে আনে।",
          "bn": "প্রশান্তি চাইলে কাজের পরিমাণ কমাতে হবে। বেশি কাজ মানেই বেশি উৎপাদনশীলতা নয়; বরং এটি বার্নআউট ডেকে আনে।"
        }
      },
      {
        "title": {
          "en": "প্রশ্ন করা",
          "bn": "প্রশ্ন করা"
        },
        "content": {
          "en": "প্রতিটি কাজের আগে নিজেকে প্রশ্ন করুন—\"এটি কি প্রয়োজনীয়?\" উত্তর \"না\" হলে নির্দ্বিধায় বাদ দিন।",
          "bn": "প্রতিটি কাজের আগে নিজেকে প্রশ্ন করুন—\"এটি কি প্রয়োজনীয়?\" উত্তর \"না\" হলে নির্দ্বিধায় বাদ দিন।"
        }
      },
      {
        "title": {
          "en": "চক্র ভাঙা",
          "bn": "চক্র ভাঙা"
        },
        "content": {
          "en": "আমরা ব্যস্ত থাকার নেশায় পড়ে যাই। এই ব্যস্ততার চক্র ভেঙে প্রয়োজনীয় কাজগুলো বেছে নেওয়া জরুরি।",
          "bn": "আমরা ব্যস্ত থাকার নেশায় পড়ে যাই। এই ব্যস্ততার চক্র ভেঙে প্রয়োজনীয় কাজগুলো বেছে নেওয়া জরুরি।"
        }
      },
      {
        "title": {
          "en": "ফোকাস",
          "bn": "ফোকাস"
        },
        "content": {
          "en": "১০টি কাজ আধাখেঁচড়া করার চেয়ে ১টি কাজ নিখুঁতভাবে করা অনেক বেশি তৃপ্তিদায়ক।",
          "bn": "১০টি কাজ আধাখেঁচড়া করার চেয়ে ১টি কাজ নিখুঁতভাবে করা অনেক বেশি তৃপ্তিদায়ক।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার টু-ডু লিস্ট (To-Do List) থেকে নিচের দিকের ৩টি কাজ কেটে দিন। নিজেকে অনুমতি দিন \"কিছু না করার\"। সপ্তাহে অন্তত একটি সন্ধ্যা রাখুন যেখানে কোনো কাজ বা প্ল্যান থাকবে না।",
      "bn": "আপনার টু-ডু লিস্ট (To-Do List) থেকে নিচের দিকের ৩টি কাজ কেটে দিন। নিজেকে অনুমতি দিন \"কিছু না করার\"। সপ্তাহে অন্তত একটি সন্ধ্যা রাখুন যেখানে কোনো কাজ বা প্ল্যান থাকবে না।"
    },
    "criticalReflection": {
      "en": "\"কম কাজ করা\" প্রায়শই অর্থনৈতিক নিরাপত্তা আছে এমন ব্যক্তিদের বিলাসিতা। যিনি বেঁচে থাকার জন্য তিনটি চাকরি করছেন, তার জন্য এই উপদেশ অবাস্তব। তবে, মানসিক বিশৃঙ্খলা এবং অপ্রয়োজনীয় সামাজিক বাধ্যবাধকতার ক্ষেত্রে এটি সবার জন্যই প্রযোজ্য।",
      "bn": "\"কম কাজ করা\" প্রায়শই অর্থনৈতিক নিরাপত্তা আছে এমন ব্যক্তিদের বিলাসিতা। যিনি বেঁচে থাকার জন্য তিনটি চাকরি করছেন, তার জন্য এই উপদেশ অবাস্তব। তবে, মানসিক বিশৃঙ্খলা এবং অপ্রয়োজনীয় সামাজিক বাধ্যবাধকতার ক্ষেত্রে এটি সবার জন্যই প্রযোজ্য।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "মানসিক চাপ কম এবং কাজের মান উন্নয়ন।",
        "bn": "মানসিক চাপ কম এবং কাজের মান উন্নয়ন।"
      },
      "social": {
        "en": "জীবনের একটি ধীর এবং আরও চিন্তাশীল গতি।",
        "bn": "জীবনের একটি ধীর এবং আরও চিন্তাশীল গতি।"
      }
    }
  },
  {
    "id": 64,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Habit of Completion",
      "bn": "The Habit of Completion"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "In life, sometimes it’s more important that you see your plans through until the end than to have the perfect plan.",
          "bn": "In life, sometimes it’s more important that you see your plans through until the end than to have the perfect plan."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "If you do what you say, you become reliable.",
          "bn": "If you do what you say, you become reliable."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "শেষ করার গুরুত্ব",
          "bn": "শেষ করার গুরুত্ব"
        },
        "content": {
          "en": "পরিকল্পনা নিখুঁত হওয়ার চেয়েও জরুরি হলো শুরু করা কাজ শেষ করা। অর্ধেক করা ১০টি কাজের চেয়ে ১টি সম্পূর্ণ কাজ ভালো।",
          "bn": "পরিকল্পনা নিখুঁত হওয়ার চেয়েও জরুরি হলো শুরু করা কাজ শেষ করা। অর্ধেক করা ১০টি কাজের চেয়ে ১টি সম্পূর্ণ কাজ ভালো।"
        }
      },
      {
        "title": {
          "en": "নির্ভরযোগ্যতা",
          "bn": "নির্ভরযোগ্যতা"
        },
        "content": {
          "en": "আপনি যখন কথা রাখেন এবং কাজ শেষ করেন, তখন নিজের ওপর এবং অন্যের কাছে আপনার বিশ্বাসযোগ্যতা বাড়ে।",
          "bn": "আপনি যখন কথা রাখেন এবং কাজ শেষ করেন, তখন নিজের ওপর এবং অন্যের কাছে আপনার বিশ্বাসযোগ্যতা বাড়ে।"
        }
      },
      {
        "title": {
          "en": "ত্যাগ করার প্রবণতা",
          "bn": "ত্যাগ করার প্রবণতা"
        },
        "content": {
          "en": "কোনো কাজ কঠিন মনে হলেই ছেড়ে দেওয়া একটি বদভ্যাস। এটি আত্মবিশ্বাস নষ্ট করে।",
          "bn": "কোনো কাজ কঠিন মনে হলেই ছেড়ে দেওয়া একটি বদভ্যাস। এটি আত্মবিশ্বাস নষ্ট করে।"
        }
      },
      {
        "title": {
          "en": "সিদ্ধান্তে অটল",
          "bn": "সিদ্ধান্তে অটল"
        },
        "content": {
          "en": "স্টয়িকরা একবার সিদ্ধান্ত নিলে বাইরের প্রভাবে তা বদলাতেন না। এই দৃঢ়তাই চরিত্র গঠন করে।",
          "bn": "স্টয়িকরা একবার সিদ্ধান্ত নিলে বাইরের প্রভাবে তা বদলাতেন না। এই দৃঢ়তাই চরিত্র গঠন করে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার এমন একটি প্রজেক্ট বা বই খুঁজে বের করুন যা আপনি অর্ধেক করে রেখে দিয়েছেন। আজ প্রতিজ্ঞা করুন, আগামী ৭ দিনের মধ্যে এটি শেষ করবেন। ছোট হলেও কোনো কাজ \"সম্পূর্ণ\" করার স্বাদ নিন।",
      "bn": "আপনার এমন একটি প্রজেক্ট বা বই খুঁজে বের করুন যা আপনি অর্ধেক করে রেখে দিয়েছেন। আজ প্রতিজ্ঞা করুন, আগামী ৭ দিনের মধ্যে এটি শেষ করবেন। ছোট হলেও কোনো কাজ \"সম্পূর্ণ\" করার স্বাদ নিন।"
    },
    "criticalReflection": {
      "en": "অধ্যবসায় একটি গুণ, কিন্তু \"Sunk Cost Fallacy\" একটি ঝুঁকি। কখনও কখনও কাজ ছেড়ে দেওয়াটাই স্মার্ট সিদ্ধান্ত যদি লক্ষ্যটি আর নিজের মূল্যবোধ বা বাস্তবতার সাথে সামঞ্জস্যপূর্ণ না হয়। অন্ধভাবে সবকিছু শেষ করার জেদ অযোগ্য কাজের পেছনে সময় নষ্টের কারণ হতে পারে।",
      "bn": "অধ্যবসায় একটি গুণ, কিন্তু \"Sunk Cost Fallacy\" একটি ঝুঁকি। কখনও কখনও কাজ ছেড়ে দেওয়াটাই স্মার্ট সিদ্ধান্ত যদি লক্ষ্যটি আর নিজের মূল্যবোধ বা বাস্তবতার সাথে সামঞ্জস্যপূর্ণ না হয়। অন্ধভাবে সবকিছু শেষ করার জেদ অযোগ্য কাজের পেছনে সময় নষ্টের কারণ হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "সাফল্যের ট্র্যাক রেকর্ড এবং উচ্চ আত্ম-কার্যকারিতা (Self-efficacy)।",
        "bn": "সাফল্যের ট্র্যাক রেকর্ড এবং উচ্চ আত্ম-কার্যকারিতা (Self-efficacy)।"
      },
      "social": {
        "en": "পেশাগত নেটওয়ার্কে বিশ্বাস এবং নির্ভরতা বৃদ্ধি।",
        "bn": "পেশাগত নেটওয়ার্কে বিশ্বাস এবং নির্ভরতা বৃদ্ধি।"
      }
    }
  },
  {
    "id": 65,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Action is Destiny",
      "bn": "Action is Destiny"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "By changing your actions today, you can shape your tomorrow.",
          "bn": "By changing your actions today, you can shape your tomorrow."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Instead of getting frustrated... look at how you feel at the end of the day.",
          "bn": "Instead of getting frustrated... look at how you feel at the end of the day."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "বর্তমানের শক্তি",
          "bn": "বর্তমানের শক্তি"
        },
        "content": {
          "en": "ভবিষ্যৎ নিয়ে দুশ্চিন্তা না করে আজকের কাজের ওপর ফোকাস করলে ভবিষ্যৎ এমনিতেই সুন্দর হবে।",
          "bn": "ভবিষ্যৎ নিয়ে দুশ্চিন্তা না করে আজকের কাজের ওপর ফোকাস করলে ভবিষ্যৎ এমনিতেই সুন্দর হবে।"
        }
      },
      {
        "title": {
          "en": "স্থবিরতা",
          "bn": "স্থবিরতা"
        },
        "content": {
          "en": "যদি দেখেন গত এক বছরে আপনার কোনো মানসিক বা শারীরিক উন্নতি হয়নি, তবে বুঝবেন আপনি স্থবির হয়ে আছেন। এটি পরিবর্তনের সংকেত।",
          "bn": "যদি দেখেন গত এক বছরে আপনার কোনো মানসিক বা শারীরিক উন্নতি হয়নি, তবে বুঝবেন আপনি স্থবির হয়ে আছেন। এটি পরিবর্তনের সংকেত।"
        }
      },
      {
        "title": {
          "en": "পরিশ্রমের তৃপ্তি",
          "bn": "পরিশ্রমের তৃপ্তি"
        },
        "content": {
          "en": "দিন শেষে শরীর ও মন ক্লান্ত হলে বুঝবেন আপনি সঠিক পথে আছেন। অলস দিন যাপন কোনো গর্বের বিষয় নয়।",
          "bn": "দিন শেষে শরীর ও মন ক্লান্ত হলে বুঝবেন আপনি সঠিক পথে আছেন। অলস দিন যাপন কোনো গর্বের বিষয় নয়।"
        }
      },
      {
        "title": {
          "en": "প্রতিদিনের অভ্যাস",
          "bn": "প্রতিদিনের অভ্যাস"
        },
        "content": {
          "en": "প্রতিদিন বই পড়া বা ব্যায়াম করার মতো ছোট কাজগুলোই দীর্ঘমেয়াদে বড় পরিবর্তন আনে।",
          "bn": "প্রতিদিন বই পড়া বা ব্যায়াম করার মতো ছোট কাজগুলোই দীর্ঘমেয়াদে বড় পরিবর্তন আনে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ রাতে ঘুমানোর আগে নিজেকে রেটিং দিন (১-১০)। প্রশ্ন করুন: \"আজ আমি আমার ভবিষ্যতের জন্য কতটুকু কাজ করেছি?\" যদি স্কোর কম হয়, তবে আগামীকাল ১ ঘণ্টা বেশি ফোকাসড কাজ করার প্ল্যান করুন।",
      "bn": "আজ রাতে ঘুমানোর আগে নিজেকে রেটিং দিন (১-১০)। প্রশ্ন করুন: \"আজ আমি আমার ভবিষ্যতের জন্য কতটুকু কাজ করেছি?\" যদি স্কোর কম হয়, তবে আগামীকাল ১ ঘণ্টা বেশি ফোকাসড কাজ করার প্ল্যান করুন।"
    },
    "criticalReflection": {
      "en": "প্রতিদিনের ক্লান্তির সাথে \"সঠিকতা\"-কে যুক্ত করাটি কঠোর পরিশ্রমকে মহিমান্বিত করে। কেউ কোনো প্রকৃত অগ্রগতি ছাড়াই ব্যস্ততার কারণে ক্লান্ত হতে পারে। কেবল কঠোর পরিশ্রম নয়, কৌশলগত কাজই ভবিষ্যৎ গড়ে তোলে।",
      "bn": "প্রতিদিনের ক্লান্তির সাথে \"সঠিকতা\"-কে যুক্ত করাটি কঠোর পরিশ্রমকে মহিমান্বিত করে। কেউ কোনো প্রকৃত অগ্রগতি ছাড়াই ব্যস্ততার কারণে ক্লান্ত হতে পারে। কেবল কঠোর পরিশ্রম নয়, কৌশলগত কাজই ভবিষ্যৎ গড়ে তোলে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "কর্তৃত্ববোধ (Sense of agency) এবং অজানা সম্পর্কে উদ্বেগ হ্রাস।",
        "bn": "কর্তৃত্ববোধ (Sense of agency) এবং অজানা সম্পর্কে উদ্বেগ হ্রাস।"
      },
      "social": {
        "en": "একটি প্র্যাক্টিভ এবং দূরদর্শী নাগরিক সমাজ।",
        "bn": "একটি প্র্যাক্টিভ এবং দূরদর্শী নাগরিক সমাজ।"
      }
    }
  },
  {
    "id": 66,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Paradox of Social Validation (Intro)",
      "bn": "The Paradox of Social Validation (Intro)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
          "bn": "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "আত্মপ্রেম বনাম অনুমোদন",
          "bn": "আত্মপ্রেম বনাম অনুমোদন"
        },
        "content": {
          "en": "আমরা নিজেকে সবচেয়ে বেশি ভালোবাসি, অথচ অন্যের মতামতের ওপর ভিত্তি করে নিজের জীবন চালাই। এটি একটি অদ্ভুত বৈপরীত্য।",
          "bn": "আমরা নিজেকে সবচেয়ে বেশি ভালোবাসি, অথচ অন্যের মতামতের ওপর ভিত্তি করে নিজের জীবন চালাই। এটি একটি অদ্ভুত বৈপরীত্য।"
        }
      },
      {
        "title": {
          "en": "নিজের মূল্যে বিশ্বাস",
          "bn": "নিজের মূল্যে বিশ্বাস"
        },
        "content": {
          "en": "অন্যের প্রশংসার চেয়ে নিজের আত্মসম্মানবোধ বেশি জরুরি।",
          "bn": "অন্যের প্রশংসার চেয়ে নিজের আত্মসম্মানবোধ বেশি জরুরি।"
        }
      },
      {
        "title": {
          "en": "Chapter 67",
          "bn": "Chapter 67"
        },
        "content": {
          "en": "Letter 55: On The Liberation of Keeping Things to Yourself",
          "bn": "Letter 55: On The Liberation of Keeping Things to Yourself"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "The Quiet Life",
          "bn": "The Quiet Life"
        }
      },
      {
        "title": {
          "en": "গোপনীয়তার শক্তি",
          "bn": "গোপনীয়তার শক্তি"
        },
        "content": {
          "en": "নিজের দর্শন বা জীবনধারা নিয়ে বড়াই করার প্রয়োজন নেই। নীরবে নিজের মতো বাঁচাই হলো প্রকৃত স্বাধীনতা।",
          "bn": "নিজের দর্শন বা জীবনধারা নিয়ে বড়াই করার প্রয়োজন নেই। নীরবে নিজের মতো বাঁচাই হলো প্রকৃত স্বাধীনতা।"
        }
      },
      {
        "title": {
          "en": "অন্যকে মেনে নেওয়া",
          "bn": "অন্যকে মেনে নেওয়া"
        },
        "content": {
          "en": "মানুষকে বদলানোর চেষ্টা না করে, তারা যেমন আছে তেমনভাবেই গ্রহণ করা উচিত।",
          "bn": "মানুষকে বদলানোর চেষ্টা না করে, তারা যেমন আছে তেমনভাবেই গ্রহণ করা উচিত।"
        }
      },
      {
        "title": {
          "en": "তর্ক এড়ানো",
          "bn": "তর্ক এড়ানো"
        },
        "content": {
          "en": "রাজনীতি বা ধর্ম নিয়ে তর্ক করে কারো মত বদলানো যায় না, কেবল সম্পর্ক নষ্ট হয়।",
          "bn": "রাজনীতি বা ধর্ম নিয়ে তর্ক করে কারো মত বদলানো যায় না, কেবল সম্পর্ক নষ্ট হয়।"
        }
      },
      {
        "title": {
          "en": "নিজের মধ্যে বাস",
          "bn": "নিজের মধ্যে বাস"
        },
        "content": {
          "en": "স্টয়িকরা পরামর্শ দেন বাইরের কোলাহল থেকে নিজেকে গুটিয়ে নিজের অন্তর্জগতে বাস করতে।",
          "bn": "স্টয়িকরা পরামর্শ দেন বাইরের কোলাহল থেকে নিজেকে গুটিয়ে নিজের অন্তর্জগতে বাস করতে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "",
      "bn": ""
    },
    "criticalReflection": {
      "en": "",
      "bn": ""
    },
    "expectedOutcomes": {
      "individual": {
        "en": "",
        "bn": ""
      },
      "social": {
        "en": "",
        "bn": ""
      }
    }
  },
  {
    "id": 67,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Quiet Life",
      "bn": "The Quiet Life"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "If you have chosen a simple life, don’t make a show of it.",
          "bn": "If you have chosen a simple life, don’t make a show of it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Just let others be.",
          "bn": "Just let others be."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "গোপনীয়তার শক্তি",
          "bn": "গোপনীয়তার শক্তি"
        },
        "content": {
          "en": "নিজের দর্শন বা জীবনধারা নিয়ে বড়াই করার প্রয়োজন নেই। নীরবে নিজের মতো বাঁচাই হলো প্রকৃত স্বাধীনতা।",
          "bn": "নিজের দর্শন বা জীবনধারা নিয়ে বড়াই করার প্রয়োজন নেই। নীরবে নিজের মতো বাঁচাই হলো প্রকৃত স্বাধীনতা।"
        }
      },
      {
        "title": {
          "en": "অন্যকে মেনে নেওয়া",
          "bn": "অন্যকে মেনে নেওয়া"
        },
        "content": {
          "en": "মানুষকে বদলানোর চেষ্টা না করে, তারা যেমন আছে তেমনভাবেই গ্রহণ করা উচিত।",
          "bn": "মানুষকে বদলানোর চেষ্টা না করে, তারা যেমন আছে তেমনভাবেই গ্রহণ করা উচিত।"
        }
      },
      {
        "title": {
          "en": "তর্ক এড়ানো",
          "bn": "তর্ক এড়ানো"
        },
        "content": {
          "en": "রাজনীতি বা ধর্ম নিয়ে তর্ক করে কারো মত বদলানো যায় না, কেবল সম্পর্ক নষ্ট হয়।",
          "bn": "রাজনীতি বা ধর্ম নিয়ে তর্ক করে কারো মত বদলানো যায় না, কেবল সম্পর্ক নষ্ট হয়।"
        }
      },
      {
        "title": {
          "en": "নিজের মধ্যে বাস",
          "bn": "নিজের মধ্যে বাস"
        },
        "content": {
          "en": "স্টয়িকরা পরামর্শ দেন বাইরের কোলাহল থেকে নিজেকে গুটিয়ে নিজের অন্তর্জগতে বাস করতে।",
          "bn": "স্টয়িকরা পরামর্শ দেন বাইরের কোলাহল থেকে নিজেকে গুটিয়ে নিজের অন্তর্জগতে বাস করতে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আগামী ২৪ ঘণ্টা আপনার কোনো মতামত (Opinion) বা উপদেশ কাউকে দেবেন না, যদি না কেউ চায়। কেউ ভুল কিছু বললে কেবল হাসুন এবং চুপ থাকুন। দেখুন এতে আপনার মানসিক শক্তি কতটা বাঁচে।",
      "bn": "আগামী ২৪ ঘণ্টা আপনার কোনো মতামত (Opinion) বা উপদেশ কাউকে দেবেন না, যদি না কেউ চায়। কেউ ভুল কিছু বললে কেবল হাসুন এবং চুপ থাকুন। দেখুন এতে আপনার মানসিক শক্তি কতটা বাঁচে।"
    },
    "criticalReflection": {
      "en": "\"অন্যদের তাদের মতো থাকতে দেওয়া\" শান্তিপূর্ণ হলেও কখনও কখনও তা ক্ষতিকর হতে পারে। যদি \"অন্যরা\" ক্ষতি করে বা ঘৃণা ছড়ায়, তবে নীরবতা কোনো গুণ নয়, বরং কাপুরুষতা। স্টয়িক নিরাসক্তিকে অবশ্যই নাগরিক দায়িত্বের সাথে ভারসাম্যপূর্ণ করতে হবে।",
      "bn": "\"অন্যদের তাদের মতো থাকতে দেওয়া\" শান্তিপূর্ণ হলেও কখনও কখনও তা ক্ষতিকর হতে পারে। যদি \"অন্যরা\" ক্ষতি করে বা ঘৃণা ছড়ায়, তবে নীরবতা কোনো গুণ নয়, বরং কাপুরুষতা। স্টয়িক নিরাসক্তিকে অবশ্যই নাগরিক দায়িত্বের সাথে ভারসাম্যপূর্ণ করতে হবে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "অপার মানসিক শান্তি এবং শক্তি সংরক্ষণ।",
        "bn": "অপার মানসিক শান্তি এবং শক্তি সংরক্ষণ।"
      },
      "social": {
        "en": "দৈনন্দিন মিথস্ক্রিয়ায় মেরুকরণ এবং সংঘাত কমে যাওয়া।",
        "bn": "দৈনন্দিন মিথস্ক্রিয়ায় মেরুকরণ এবং সংঘাত কমে যাওয়া।"
      }
    }
  },
  {
    "id": 68,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Mirror of Faults",
      "bn": "The Mirror of Faults"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "When faced with people’s bad behavior, turn around and ask when you have acted like that.",
          "bn": "When faced with people’s bad behavior, turn around and ask when you have acted like that."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Have you noticed how we’re often quick to judge others... but don’t look at ourselves with that same critical eye?",
          "bn": "Have you noticed how we’re often quick to judge others... but don’t look at ourselves with that same critical eye?"
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "আয়না দেখা",
          "bn": "আয়না দেখা"
        },
        "content": {
          "en": "অন্যের খারাপ ব্যবহার দেখে রাগ না করে ভাবুন, \"আমিও কি কখনো এমন করেছি?\" এটি রাগ কমিয়ে সহমর্মিতা বাড়ায়।",
          "bn": "অন্যের খারাপ ব্যবহার দেখে রাগ না করে ভাবুন, \"আমিও কি কখনো এমন করেছি?\" এটি রাগ কমিয়ে সহমর্মিতা বাড়ায়।"
        }
      },
      {
        "title": {
          "en": "বিচার না করা",
          "bn": "বিচার না করা"
        },
        "content": {
          "en": "আমরা অন্যের ভুল দেখি কিন্তু নিজের ভুল দেখি না। এই দ্বিচারিতা ত্যাগ করতে হবে।",
          "bn": "আমরা অন্যের ভুল দেখি কিন্তু নিজের ভুল দেখি না। এই দ্বিচারিতা ত্যাগ করতে হবে।"
        }
      },
      {
        "title": {
          "en": "শালীনতা",
          "bn": "শালীনতা"
        },
        "content": {
          "en": "অন্যের উগ্র আচরণের জবাবে শান্ত ও ভদ্র থাকা হলো শক্তির পরিচয়। মায়ের উদাহরণ দিয়ে লেখক এটি বুঝিয়েছেন।",
          "bn": "অন্যের উগ্র আচরণের জবাবে শান্ত ও ভদ্র থাকা হলো শক্তির পরিচয়। মায়ের উদাহরণ দিয়ে লেখক এটি বুঝিয়েছেন।"
        }
      },
      {
        "title": {
          "en": "শিক্ষা গ্রহণ",
          "bn": "শিক্ষা গ্রহণ"
        },
        "content": {
          "en": "প্রতিটি খারাপ মানুষ আমাদের জন্য একটি শিক্ষার সুযোগ—\"আমি যেন এমন না হই।\"",
          "bn": "প্রতিটি খারাপ মানুষ আমাদের জন্য একটি শিক্ষার সুযোগ—\"আমি যেন এমন না হই।\""
        }
      }
    ],
    "practicalApplication": {
      "en": "যখন কেউ আপনার সাথে খারাপ ব্যবহার করবে, তখন তাকে \"শিক্ষক\" হিসেবে দেখুন। মনে মনে বলুন, \"ধন্যবাদ আমাকে দেখানোর জন্য যে, মেজাজ হারালে মানুষকে কতটা কুৎসিত দেখায়। আমি এমন হব না।\"",
      "bn": "যখন কেউ আপনার সাথে খারাপ ব্যবহার করবে, তখন তাকে \"শিক্ষক\" হিসেবে দেখুন। মনে মনে বলুন, \"ধন্যবাদ আমাকে দেখানোর জন্য যে, মেজাজ হারালে মানুষকে কতটা কুৎসিত দেখায়। আমি এমন হব না।\""
    },
    "criticalReflection": {
      "en": "অন্যদের খারাপ আচরণকে শুধুমাত্র আত্ম-প্রতিফলনের জন্য ব্যবহার করাটা প্রোডাক্টিভ হলেও তা নিষ্ক্রিয়তার দিকে নিয়ে যেতে পারে। কখনও কখনও খারাপ আচরণের মোকাবিলা করা এবং সংশোধন করা প্রয়োজন, কেবল আত্মদর্শন নয়, বিশেষত যদি তা নিরাপত্তা বা বাউন্ডারি লঙ্ঘন করে।",
      "bn": "অন্যদের খারাপ আচরণকে শুধুমাত্র আত্ম-প্রতিফলনের জন্য ব্যবহার করাটা প্রোডাক্টিভ হলেও তা নিষ্ক্রিয়তার দিকে নিয়ে যেতে পারে। কখনও কখনও খারাপ আচরণের মোকাবিলা করা এবং সংশোধন করা প্রয়োজন, কেবল আত্মদর্শন নয়, বিশেষত যদি তা নিরাপত্তা বা বাউন্ডারি লঙ্ঘন করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উন্নত আবেগ নিয়ন্ত্রণ এবং বিনয়।",
        "bn": "উন্নত আবেগ নিয়ন্ত্রণ এবং বিনয়।"
      },
      "social": {
        "en": "সংঘাত প্রশমন এবং আরও সহানুভূতিশীল সমাজ।",
        "bn": "সংঘাত প্রশমন এবং আরও সহানুভূতিশীল সমাজ।"
      }
    }
  },
  {
    "id": 69,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Quality over Quantity",
      "bn": "Quality over Quantity"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "A friend is someone who thinks and cares about you... even when you don’t see or need each other.",
          "bn": "A friend is someone who thinks and cares about you... even when you don’t see or need each other."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "Seek out people who have the same values as you. Friendship is not about quantity.",
          "bn": "Seek out people who have the same values as you. Friendship is not about quantity."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সুবিধাবাদী বন্ধু",
          "bn": "সুবিধাবাদী বন্ধু"
        },
        "content": {
          "en": "সেনেকার মতে, প্রয়োজনে যে বন্ধু হয়, প্রয়োজন ফুরোলে সে হারিয়ে যায়। এদের থেকে সাবধান।",
          "bn": "সেনেকার মতে, প্রয়োজনে যে বন্ধু হয়, প্রয়োজন ফুরোলে সে হারিয়ে যায়। এদের থেকে সাবধান।"
        }
      },
      {
        "title": {
          "en": "মূল্যবোধের মিল",
          "bn": "মূল্যবোধের মিল"
        },
        "content": {
          "en": "সত্যিকারের বন্ধুত্ব গড়ে ওঠে অভিন্ন মূল্যবোধের ওপর, কেবল আড্ডা বা পার্টি করার ওপর নয়।",
          "bn": "সত্যিকারের বন্ধুত্ব গড়ে ওঠে অভিন্ন মূল্যবোধের ওপর, কেবল আড্ডা বা পার্টি করার ওপর নয়।"
        }
      },
      {
        "title": {
          "en": "পরিবর্তন মেনে নেওয়া",
          "bn": "পরিবর্তন মেনে নেওয়া"
        },
        "content": {
          "en": "মানুষ বদলায়, তাই বন্ধুত্বও বদলায়। পুরোনো বন্ধু হারিয়ে গেলে দুঃখ না করে মেনে নিতে হবে।",
          "bn": "মানুষ বদলায়, তাই বন্ধুত্বও বদলায়। পুরোনো বন্ধু হারিয়ে গেলে দুঃখ না করে মেনে নিতে হবে।"
        }
      },
      {
        "title": {
          "en": "আসল বন্ধু",
          "bn": "আসল বন্ধু"
        },
        "content": {
          "en": "যারা বিপদে পাশে থাকে এবং আপনাকে মানসিকভাবে সাপোর্ট করে, তারাই আসল বন্ধু। সংখ্যায় কম হলেও সমস্যা নেই।",
          "bn": "যারা বিপদে পাশে থাকে এবং আপনাকে মানসিকভাবে সাপোর্ট করে, তারাই আসল বন্ধু। সংখ্যায় কম হলেও সমস্যা নেই।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার ফ্রেন্ডলিস্ট চেক করুন। কারা আপনাকে নিয়মিত খোঁজ নেয় বা বিপদে পাশে ছিল? তাদের একটি আলাদা তালিকা করুন। আজ তাদের অন্তত একজনকে ফোন করে বলুন তারা আপনার জন্য কতটা স্পেশাল। বাকিদের নিয়ে প্রত্যাশা কমান।",
      "bn": "আপনার ফ্রেন্ডলিস্ট চেক করুন। কারা আপনাকে নিয়মিত খোঁজ নেয় বা বিপদে পাশে ছিল? তাদের একটি আলাদা তালিকা করুন। আজ তাদের অন্তত একজনকে ফোন করে বলুন তারা আপনার জন্য কতটা স্পেশাল। বাকিদের নিয়ে প্রত্যাশা কমান।"
    },
    "criticalReflection": {
      "en": "এখানে বন্ধুত্বের সংজ্ঞাটি অত্যন্ত উচ্চ মানদণ্ড সম্পন্ন। সাধারণ বন্ধুত্ব বা পরিচিতিরও (casual friendships) সোশ্যাল নেটওয়ার্কিং এবং হালকা মেজাজে থাকার জন্য মূল্য রয়েছে। সম্পর্কগুলোকে কেবল উপযোগিতা বা গভীর মূল্যের লেন্স দিয়ে দেখলে সাধারণ মেলামেশার ছোট ছোট আনন্দগুলো থেকে কেউ বিচ্ছিন্ন হতে পারে।",
      "bn": "এখানে বন্ধুত্বের সংজ্ঞাটি অত্যন্ত উচ্চ মানদণ্ড সম্পন্ন। সাধারণ বন্ধুত্ব বা পরিচিতিরও (casual friendships) সোশ্যাল নেটওয়ার্কিং এবং হালকা মেজাজে থাকার জন্য মূল্য রয়েছে। সম্পর্কগুলোকে কেবল উপযোগিতা বা গভীর মূল্যের লেন্স দিয়ে দেখলে সাধারণ মেলামেশার ছোট ছোট আনন্দগুলো থেকে কেউ বিচ্ছিন্ন হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "গভীর, সহায়ক সম্পর্ক এবং একাকীত্ব হ্রাস।",
        "bn": "গভীর, সহায়ক সম্পর্ক এবং একাকীত্ব হ্রাস।"
      },
      "social": {
        "en": "ছোট দলগুলোর মধ্যে শক্তিশালী সামাজিক নিরাপত্তা বেষ্টনী।",
        "bn": "ছোট দলগুলোর মধ্যে শক্তিশালী সামাজিক নিরাপত্তা বেষ্টনী।"
      }
    }
  },
  {
    "id": 70,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Grace of Patience",
      "bn": "The Grace of Patience"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Always conduct yourself as though you are at a formal dinner.",
          "bn": "Always conduct yourself as though you are at a formal dinner."
        },
        "author": {
          "en": "Epictetus",
          "bn": "Epictetus"
        }
      },
      {
        "quote": {
          "en": "Be gentle in your interactions with others and with yourself.",
          "bn": "Be gentle in your interactions with others and with yourself."
        },
        "author": {
          "en": "Epictetus",
          "bn": "Epictetus"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ফরমাল ডিনার",
          "bn": "ফরমাল ডিনার"
        },
        "content": {
          "en": "এপিক্টেটাস জীবনকে একটি ভোজসভার সাথে তুলনা করেছেন। খাবার (সুযোগ) আপনার কাছে আসা পর্যন্ত ধৈর্য ধরুন; কাড়াকাড়ি করবেন না।",
          "bn": "এপিক্টেটাস জীবনকে একটি ভোজসভার সাথে তুলনা করেছেন। খাবার (সুযোগ) আপনার কাছে আসা পর্যন্ত ধৈর্য ধরুন; কাড়াকাড়ি করবেন না।"
        }
      },
      {
        "title": {
          "en": "অধৈর্যের ক্ষতি",
          "bn": "অধৈর্যের ক্ষতি"
        },
        "content": {
          "en": "অধৈর্য হলে আমরা প্রিয়জনদের সাথে খারাপ ব্যবহার করে ফেলি, যা পরে অনুশোচনার কারণ হয়।",
          "bn": "অধৈর্য হলে আমরা প্রিয়জনদের সাথে খারাপ ব্যবহার করে ফেলি, যা পরে অনুশোচনার কারণ হয়।"
        }
      },
      {
        "title": {
          "en": "নিজের প্রতি সদয়",
          "bn": "নিজের প্রতি সদয়"
        },
        "content": {
          "en": "কেবল অন্যের সাথে নয়, নিজের ভুলের প্রতিও সদয় হওয়া উচিত। নিজেকে বকাঝকা করলে মানসিক শান্তি নষ্ট হয়।",
          "bn": "কেবল অন্যের সাথে নয়, নিজের ভুলের প্রতিও সদয় হওয়া উচিত। নিজেকে বকাঝকা করলে মানসিক শান্তি নষ্ট হয়।"
        }
      },
      {
        "title": {
          "en": "তাড়া নেই",
          "bn": "তাড়া নেই"
        },
        "content": {
          "en": "জীবন কোনো দৌড় প্রতিযোগিতা নয়। ধীরস্থিরভাবে কাজ করলে এবং সবার সাথে ভালো ব্যবহার করলে জীবন সুন্দর হয়।",
          "bn": "জীবন কোনো দৌড় প্রতিযোগিতা নয়। ধীরস্থিরভাবে কাজ করলে এবং সবার সাথে ভালো ব্যবহার করলে জীবন সুন্দর হয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ সারাদিন \"স্লো মোশন\"-এ চলুন। কথা বলার সময় তাড়াহুড়ো করবেন না। কারো কথার মাঝখানে কথা বলবেন না। ভাবুন আপনি একটি রাজকীয় ডিনারে আছেন যেখানে ভদ্রতাই একমাত্র মুদ্রা।",
      "bn": "আজ সারাদিন \"স্লো মোশন\"-এ চলুন। কথা বলার সময় তাড়াহুড়ো করবেন না। কারো কথার মাঝখানে কথা বলবেন না। ভাবুন আপনি একটি রাজকীয় ডিনারে আছেন যেখানে ভদ্রতাই একমাত্র মুদ্রা।"
    },
    "criticalReflection": {
      "en": "\"নিজের পালা আসার অপেক্ষা করা\" একটি মহৎ অভিজাত আদর্শ, কিন্তু অতি-প্রতিযোগিতামূলক বিশ্বে, নিষ্ক্রিয়তা প্রায়শই সুযোগ হারানোর কারণ হয়। নিজের অধিকার বা ন্যায্য পাওনা নিশ্চিত করার জন্য কখনও কখনও ভদ্রতার চেয়ে দৃঢ়তা বা Assertiveness বেশি প্রয়োজন।",
      "bn": "\"নিজের পালা আসার অপেক্ষা করা\" একটি মহৎ অভিজাত আদর্শ, কিন্তু অতি-প্রতিযোগিতামূলক বিশ্বে, নিষ্ক্রিয়তা প্রায়শই সুযোগ হারানোর কারণ হয়। নিজের অধিকার বা ন্যায্য পাওনা নিশ্চিত করার জন্য কখনও কখনও ভদ্রতার চেয়ে দৃঢ়তা বা Assertiveness বেশি প্রয়োজন।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "একটি ক্যারিশম্যাটিক এবং শান্ত উপস্থিতি তৈরি করা।",
        "bn": "একটি ক্যারিশম্যাটিক এবং শান্ত উপস্থিতি তৈরি করা।"
      },
      "social": {
        "en": "আরও ভদ্র এবং সুবিবেচক পাবলিক স্ফিয়ার বা জনপরিসর।",
        "bn": "আরও ভদ্র এবং সুবিবেচক পাবলিক স্ফিয়ার বা জনপরিসর।"
      }
    }
  },
  {
    "id": 71,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Comparison Trap",
      "bn": "The Comparison Trap"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Don’t be fooled by the outward appearance of other people.",
          "bn": "Don’t be fooled by the outward appearance of other people."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Our concern should be our freedom, not titles and prestigious positions.",
          "bn": "Our concern should be our freedom, not titles and prestigious positions."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Every time you feel envious, check your priorities.",
          "bn": "Every time you feel envious, check your priorities."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "তুলনার বিষ",
          "bn": "তুলনার বিষ"
        },
        "content": {
          "en": "অন্যের সাজানো সোশ্যাল মিডিয়া লাইফ বা বাহ্যিক সাফল্য দেখে ঈর্ষান্বিত হওয়া বোকামি। এটি আমাদের নিজেদের অর্জনের আনন্দ কেড়ে নেয়।",
          "bn": "অন্যের সাজানো সোশ্যাল মিডিয়া লাইফ বা বাহ্যিক সাফল্য দেখে ঈর্ষান্বিত হওয়া বোকামি। এটি আমাদের নিজেদের অর্জনের আনন্দ কেড়ে নেয়।"
        }
      },
      {
        "title": {
          "en": "জে. কোল (J. Cole)-এর শিক্ষা",
          "bn": "জে. কোল (J. Cole)-এর শিক্ষা"
        },
        "content": {
          "en": "বিখ্যাত র‍্যাপার জে. কোলের উদাহরণ দিয়ে বলা হয়েছে, অন্যের ভ্যালিডেশনের আশায় না থেকে নিজের স্বকীয়তা বজায় রাখাই আসল সাফল্য।",
          "bn": "বিখ্যাত র‍্যাপার জে. কোলের উদাহরণ দিয়ে বলা হয়েছে, অন্যের ভ্যালিডেশনের আশায় না থেকে নিজের স্বকীয়তা বজায় রাখাই আসল সাফল্য।"
        }
      },
      {
        "title": {
          "en": "স্বাধীনতার ফোকাস",
          "bn": "স্বাধীনতার ফোকাস"
        },
        "content": {
          "en": "টাইটেল বা পদমর্যাদার চেয়ে মানসিক স্বাধীনতা বেশি গুরুত্বপূর্ণ। ঈর্ষা আমাদের পরাধীন করে।",
          "bn": "টাইটেল বা পদমর্যাদার চেয়ে মানসিক স্বাধীনতা বেশি গুরুত্বপূর্ণ। ঈর্ষা আমাদের পরাধীন করে।"
        }
      },
      {
        "title": {
          "en": "কৃতজ্ঞতা",
          "bn": "কৃতজ্ঞতা"
        },
        "content": {
          "en": "নিজের স্বাস্থ্য এবং প্রিয়জনদের কথা মনে করলে ঈর্ষা কমে যায়। যা নেই তার চেয়ে যা আছে, তা নিয়ে ভাবা উচিত।",
          "bn": "নিজের স্বাস্থ্য এবং প্রিয়জনদের কথা মনে করলে ঈর্ষা কমে যায়। যা নেই তার চেয়ে যা আছে, তা নিয়ে ভাবা উচিত।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যখনই কারো ইনস্টাগ্রাম স্টোরি দেখে হিংসা হবে, নিজেকে বলুন: \"আমি তার ব্যাকস্টেজ জানি না, শুধু হাইলাইট দেখছি।\" এরপর ফোন রেখে নিজের জীবনের ৩টি ভালো দিক লিখে ফেলুন (যেমন: সুস্থ শরীর, মা-বাবার হাসি, বা প্রিয় বই)।",
      "bn": "যখনই কারো ইনস্টাগ্রাম স্টোরি দেখে হিংসা হবে, নিজেকে বলুন: \"আমি তার ব্যাকস্টেজ জানি না, শুধু হাইলাইট দেখছি।\" এরপর ফোন রেখে নিজের জীবনের ৩টি ভালো দিক লিখে ফেলুন (যেমন: সুস্থ শরীর, মা-বাবার হাসি, বা প্রিয় বই)।"
    },
    "criticalReflection": {
      "en": "যদিও \"ঈর্ষা নির্মূল করা\" মহৎ কাজ, এটি এমন একটি অতি-পুঁজিবাদী সমাজে বলা সহজ কিন্তু করা কঠিন যা ভোগের জন্য ঈর্ষা বা এনভি উসকে দেওয়ার জন্য ডিজাইন করা হয়েছে। এটিকে সম্পূর্ণরূপে \"নির্মূল\" করার চেষ্টা করার পরিবর্তে (যা অসম্ভব মনে হয়), ঈর্ষাকে অনুপ্রেরণায় রূপান্তর করা বেশিরভাগ মানুষের জন্য একটি বাস্তবসম্মত প্রাথমিক পদক্ষেপ হতে পারে।",
      "bn": "যদিও \"ঈর্ষা নির্মূল করা\" মহৎ কাজ, এটি এমন একটি অতি-পুঁজিবাদী সমাজে বলা সহজ কিন্তু করা কঠিন যা ভোগের জন্য ঈর্ষা বা এনভি উসকে দেওয়ার জন্য ডিজাইন করা হয়েছে। এটিকে সম্পূর্ণরূপে \"নির্মূল\" করার চেষ্টা করার পরিবর্তে (যা অসম্ভব মনে হয়), ঈর্ষাকে অনুপ্রেরণায় রূপান্তর করা বেশিরভাগ মানুষের জন্য একটি বাস্তবসম্মত প্রাথমিক পদক্ষেপ হতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "জীবনের নিজস্ব গতি নিয়ে গভীর সন্তুষ্টি।",
        "bn": "জীবনের নিজস্ব গতি নিয়ে গভীর সন্তুষ্টি।"
      },
      "social": {
        "en": "গোপন প্রতিদ্বন্দ্বিতার পরিবর্তে একে অপরের প্রতি অকৃত্রিম সমর্থন।",
        "bn": "গোপন প্রতিদ্বন্দ্বিতার পরিবর্তে একে অপরের প্রতি অকৃত্রিম সমর্থন।"
      }
    }
  },
  {
    "id": 72,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Path of Non-Conformity",
      "bn": "The Path of Non-Conformity"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The happy people usually don’t care about what others think.",
          "bn": "The happy people usually don’t care about what others think."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "You do not care if others think you are naïve or stupid. Your only concern is to keep your focus on yourself.",
          "bn": "You do not care if others think you are naïve or stupid. Your only concern is to keep your focus on yourself."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ভয় বনাম কৌতূহল",
          "bn": "ভয় বনাম কৌতূহল"
        },
        "content": {
          "en": "মানুষ কী ভাববে—এই ভয়কে কৌতূহলে রূপান্তর করুন। ভাবুন, \"দেখা যাক তারা কী বলে,\" কিন্তু তা গায়ে মাখবেন না।",
          "bn": "মানুষ কী ভাববে—এই ভয়কে কৌতূহলে রূপান্তর করুন। ভাবুন, \"দেখা যাক তারা কী বলে,\" কিন্তু তা গায়ে মাখবেন না।"
        }
      },
      {
        "title": {
          "en": "স্বাধীন সত্তা",
          "bn": "স্বাধীন সত্তা"
        },
        "content": {
          "en": "প্রাপ্তবয়স্ক হওয়ার অর্থ হলো নিজের চয়েস নিজেই নেওয়া। সমাজ বা পরিবারের চাপে নিজের স্বপ্ন বিসর্জন দেওয়া মানে নিজের সত্তাকে অপমান করা।",
          "bn": "প্রাপ্তবয়স্ক হওয়ার অর্থ হলো নিজের চয়েস নিজেই নেওয়া। সমাজ বা পরিবারের চাপে নিজের স্বপ্ন বিসর্জন দেওয়া মানে নিজের সত্তাকে অপমান করা।"
        }
      },
      {
        "title": {
          "en": "সমালোচনার প্রস্তুতি",
          "bn": "সমালোচনার প্রস্তুতি"
        },
        "content": {
          "en": "আপনি যখন নিজের পথে চলবেন, সমালোচনা আসবেই। একে পথের বাধা না ভেবে রাস্তার ধুলো মনে করুন।",
          "bn": "আপনি যখন নিজের পথে চলবেন, সমালোচনা আসবেই। একে পথের বাধা না ভেবে রাস্তার ধুলো মনে করুন।"
        }
      },
      {
        "title": {
          "en": "সুখের চাবিকাঠি",
          "bn": "সুখের চাবিকাঠি"
        },
        "content": {
          "en": "সুখী হতে চাইলে 'Validation Seeking' বা অনুমোদনের আশা ত্যাগ করতে হবে।",
          "bn": "সুখী হতে চাইলে 'Validation Seeking' বা অনুমোদনের আশা ত্যাগ করতে হবে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "এমন একটি পোশাক পরুন বা এমন একটি কাজ করুন যা আপনি \"লোকে কী বলবে\" ভয়ে করছেন না। ছোট একটি ঝুঁকি নিন। কেউ কিছু বললে হাসিমুখে শুনুন এবং নিজের কাজ চালিয়ে যান। এটি আপনার \"Thick Skin\" তৈরি করবে।",
      "bn": "এমন একটি পোশাক পরুন বা এমন একটি কাজ করুন যা আপনি \"লোকে কী বলবে\" ভয়ে করছেন না। ছোট একটি ঝুঁকি নিন। কেউ কিছু বললে হাসিমুখে শুনুন এবং নিজের কাজ চালিয়ে যান। এটি আপনার \"Thick Skin\" তৈরি করবে।"
    },
    "criticalReflection": {
      "en": "\"পরোয়া না করা\" বা \"Not caring\" যদি চরমে নিয়ে যাওয়া হয় তবে তা নার্সিসিজম বা সহানুভূতির অভাবের দিকে যেতে পারে। আমরা একটি সমাজে বাস করি, এবং কখনও কখনও প্রতিক্রিয়া বা সমালোচনা বৈধ (যেমন, যদি কারো কাজ অন্যকে আঘাত করে)। লক্ষ্য হলো নয়েজ বা কোলাহল ফিল্টার করা, বৈধ নৈতিক সমালোচনা নয়।",
      "bn": "\"পরোয়া না করা\" বা \"Not caring\" যদি চরমে নিয়ে যাওয়া হয় তবে তা নার্সিসিজম বা সহানুভূতির অভাবের দিকে যেতে পারে। আমরা একটি সমাজে বাস করি, এবং কখনও কখনও প্রতিক্রিয়া বা সমালোচনা বৈধ (যেমন, যদি কারো কাজ অন্যকে আঘাত করে)। লক্ষ্য হলো নয়েজ বা কোলাহল ফিল্টার করা, বৈধ নৈতিক সমালোচনা নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "আপোষহীন অকৃত্রিমতা (Authenticity) এবং সৃজনশীল স্বাধীনতা।",
        "bn": "আপোষহীন অকৃত্রিমতা (Authenticity) এবং সৃজনশীল স্বাধীনতা।"
      },
      "social": {
        "en": "বৈচিত্র্যময় জীবনপথ সহ একটি আরও বৈচিত্র্যময় সমাজ।",
        "bn": "বৈচিত্র্যময় জীবনপথ সহ একটি আরও বৈচিত্র্যময় সমাজ।"
      }
    }
  },
  {
    "id": 73,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Shared Happiness",
      "bn": "Shared Happiness"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "There’s no enjoying the possession of anything valuable unless one has someone to share it with.",
          "bn": "There’s no enjoying the possession of anything valuable unless one has someone to share it with."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      },
      {
        "quote": {
          "en": "No matter how cool or badass you are, it’s good to let people know you appreciate them.",
          "bn": "No matter how cool or badass you are, it’s good to let people know you appreciate them."
        },
        "author": {
          "en": "Seneca",
          "bn": "Seneca"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "একাকী সাফল্যের শূন্যতা",
          "bn": "একাকী সাফল্যের শূন্যতা"
        },
        "content": {
          "en": "সেনেকার মতে, যদি কেউ একা পৃথিবীর সব সম্পদের মালিক হয় কিন্তু তা শেয়ার করার কেউ না থাকে, তবে সে অসুখী।",
          "bn": "সেনেকার মতে, যদি কেউ একা পৃথিবীর সব সম্পদের মালিক হয় কিন্তু তা শেয়ার করার কেউ না থাকে, তবে সে অসুখী।"
        }
      },
      {
        "title": {
          "en": "সম্পর্কের যত্ন",
          "bn": "সম্পর্কের যত্ন"
        },
        "content": {
          "en": "ব্যস্ততার অজুহাতে প্রিয়জনদের অবহেলা করা উচিত নয়। সত্যিকারের বন্ধুরা সাফল্যের সময় যেমন পাশে থাকে, বিপদেও থাকে।",
          "bn": "ব্যস্ততার অজুহাতে প্রিয়জনদের অবহেলা করা উচিত নয়। সত্যিকারের বন্ধুরা সাফল্যের সময় যেমন পাশে থাকে, বিপদেও থাকে।"
        }
      },
      {
        "title": {
          "en": "বন্ধু হওয়া",
          "bn": "বন্ধু হওয়া"
        },
        "content": {
          "en": "ভালো বন্ধু পেতে চাইলে আগে নিজেকে ভালো বন্ধু হতে হবে। এটি একটি দ্বিমুখী রাস্তা।",
          "bn": "ভালো বন্ধু পেতে চাইলে আগে নিজেকে ভালো বন্ধু হতে হবে। এটি একটি দ্বিমুখী রাস্তা।"
        }
      },
      {
        "title": {
          "en": "কৃতজ্ঞতা প্রকাশ",
          "bn": "কৃতজ্ঞতা প্রকাশ"
        },
        "content": {
          "en": "প্রিয় মানুষদের জানিয়ে দিন তারা আপনার জীবনে কতটা গুরুত্বপূর্ণ। এটি সম্পর্ক মজবুত করে।",
          "bn": "প্রিয় মানুষদের জানিয়ে দিন তারা আপনার জীবনে কতটা গুরুত্বপূর্ণ। এটি সম্পর্ক মজবুত করে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আজ কোনো বিশেষ কারণ ছাড়াই আপনার ৩ জন প্রিয় বন্ধু বা আত্মীয়কে মেসেজ দিন। লিখুন: \"তোমাকে আমার জীবনে পেয়ে আমি খুশি।\" কোনো ফরোয়ার্ডেড মেসেজ নয়, নিজের ভাষায় লিখুন।",
      "bn": "আজ কোনো বিশেষ কারণ ছাড়াই আপনার ৩ জন প্রিয় বন্ধু বা আত্মীয়কে মেসেজ দিন। লিখুন: \"তোমাকে আমার জীবনে পেয়ে আমি খুশি।\" কোনো ফরোয়ার্ডেড মেসেজ নয়, নিজের ভাষায় লিখুন।"
    },
    "criticalReflection": {
      "en": "বইটি এখানে আত্মনির্ভরশীলতা থেকে পারস্পরিক নির্ভরতার দিকে সরে এসেছে। এটি স্বীকার করে যে স্টয়িসিজম বিচ্ছিন্নতা নয়। যাইহোক, আনন্দ ভাগ করে নেওয়ার জন্য \"যোগ্য\" মানুষ খুঁজে পাওয়া প্রাপ্তবয়স্ক জীবনে চ্যালেঞ্জিং। এই উপদেশটি ধরে নেয় যে একজনের ইতিমধ্যেই একটি সুস্থ সামাজিক বৃত্ত আছে, যা সবার জন্য সত্য নয়।",
      "bn": "বইটি এখানে আত্মনির্ভরশীলতা থেকে পারস্পরিক নির্ভরতার দিকে সরে এসেছে। এটি স্বীকার করে যে স্টয়িসিজম বিচ্ছিন্নতা নয়। যাইহোক, আনন্দ ভাগ করে নেওয়ার জন্য \"যোগ্য\" মানুষ খুঁজে পাওয়া প্রাপ্তবয়স্ক জীবনে চ্যালেঞ্জিং। এই উপদেশটি ধরে নেয় যে একজনের ইতিমধ্যেই একটি সুস্থ সামাজিক বৃত্ত আছে, যা সবার জন্য সত্য নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "একাকীত্ব হ্রাস এবং গভীর মানসিক বন্ধন।",
        "bn": "একাকীত্ব হ্রাস এবং গভীর মানসিক বন্ধন।"
      },
      "social": {
        "en": "শক্তিশালী কমিউনিটি সম্পর্ক এবং সামাজিক পুঁজি (Social Capital)।",
        "bn": "শক্তিশালী কমিউনিটি সম্পর্ক এবং সামাজিক পুঁজি (Social Capital)।"
      }
    }
  },
  {
    "id": 74,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Clouds and the Sun (Intro)",
      "bn": "The Clouds and the Sun (Intro)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Even if some obstacle comes on the scene, its appearance is only to be compared to that of clouds which drift in front of the sun without ever defeating its light.",
          "bn": "Even if some obstacle comes on the scene, its appearance is only to be compared to that of clouds which drift in front of the sun without ever defeating its light."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "মেঘ বনাম সূর্য",
          "bn": "মেঘ বনাম সূর্য"
        },
        "content": {
          "en": "সমস্যা বা বাধা হলো মেঘের মতো, আর আপনার ভেতরের শক্তি হলো সূর্যের মতো। মেঘ সূর্যকে ঢাকতে পারে, কিন্তু নেভাতে পারে না।",
          "bn": "সমস্যা বা বাধা হলো মেঘের মতো, আর আপনার ভেতরের শক্তি হলো সূর্যের মতো। মেঘ সূর্যকে ঢাকতে পারে, কিন্তু নেভাতে পারে না।"
        }
      },
      {
        "title": {
          "en": "ক্ষণস্থায়ীত্ব",
          "bn": "ক্ষণস্থায়ীত্ব"
        },
        "content": {
          "en": "প্রতিটি বাধা সাময়িক। এটি আসবে এবং যাবে, কিন্তু আপনার মনের আলো বা সাহস স্থায়ী।",
          "bn": "প্রতিটি বাধা সাময়িক। এটি আসবে এবং যাবে, কিন্তু আপনার মনের আলো বা সাহস স্থায়ী।"
        }
      },
      {
        "title": {
          "en": "Chapter 75",
          "bn": "Chapter 75"
        },
        "content": {
          "en": "Letter 62: On Living Through Anxious Times",
          "bn": "Letter 62: On Living Through Anxious Times"
        }
      },
      {
        "title": {
          "en": "1. Chapter Title",
          "bn": "1. Chapter Title"
        },
        "content": {
          "en": "Crisis Management",
          "bn": "Crisis Management"
        }
      },
      {
        "title": {
          "en": "সতর্কতা",
          "bn": "সতর্কতা"
        },
        "content": {
          "en": "ইউক্রেন যুদ্ধ বা কোভিডের মতো সংকট আমাদের শেখায় যে পৃথিবী অনির্দেশ্য। তাই মানসিকভাবে সবসময় প্রস্তুত থাকতে হবে।",
          "bn": "ইউক্রেন যুদ্ধ বা কোভিডের মতো সংকট আমাদের শেখায় যে পৃথিবী অনির্দেশ্য। তাই মানসিকভাবে সবসময় প্রস্তুত থাকতে হবে।"
        }
      },
      {
        "title": {
          "en": "ইতিহাসের শিক্ষা",
          "bn": "ইতিহাসের শিক্ষা"
        },
        "content": {
          "en": "স্যাম জেলের (Sam Zell) পরিবারের পোল্যান্ড থেকে পালানোর উদাহরণ দিয়ে লেখক বলেছেন, বিপদ সংকেত চিনতে পারা এবং দ্রুত ব্যবস্থা নেওয়া জরুরি।",
          "bn": "স্যাম জেলের (Sam Zell) পরিবারের পোল্যান্ড থেকে পালানোর উদাহরণ দিয়ে লেখক বলেছেন, বিপদ সংকেত চিনতে পারা এবং দ্রুত ব্যবস্থা নেওয়া জরুরি।"
        }
      },
      {
        "title": {
          "en": "খবর বাছাই",
          "bn": "খবর বাছাই"
        },
        "content": {
          "en": "সংকটের সময় সব খবর না দেখে কেবল নির্ভরযোগ্য উৎস দেখা উচিত। অতিরিক্ত প্যানিক ছড়ায় এমন সোর্স (যেমন টুইটার/ফেসবুক) বর্জনীয়।",
          "bn": "সংকটের সময় সব খবর না দেখে কেবল নির্ভরযোগ্য উৎস দেখা উচিত। অতিরিক্ত প্যানিক ছড়ায় এমন সোর্স (যেমন টুইটার/ফেসবুক) বর্জনীয়।"
        }
      },
      {
        "title": {
          "en": "সাহস",
          "bn": "সাহস"
        },
        "content": {
          "en": "ভয় পেয়ে জমে না গিয়ে (Freeze), কাজ করা (Act) বা সিদ্ধান্ত নেওয়া উচিত।",
          "bn": "ভয় পেয়ে জমে না গিয়ে (Freeze), কাজ করা (Act) বা সিদ্ধান্ত নেওয়া উচিত।"
        }
      }
    ],
    "practicalApplication": {
      "en": "",
      "bn": ""
    },
    "criticalReflection": {
      "en": "",
      "bn": ""
    },
    "expectedOutcomes": {
      "individual": {
        "en": "",
        "bn": ""
      },
      "social": {
        "en": "",
        "bn": ""
      }
    }
  },
  {
    "id": 75,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Crisis Management",
      "bn": "Crisis Management"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Fortune falls heavily on those for whom she’s unexpected. The one always on the lookout easily endures.",
          "bn": "Fortune falls heavily on those for whom she’s unexpected. The one always on the lookout easily endures."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "সতর্কতা",
          "bn": "সতর্কতা"
        },
        "content": {
          "en": "ইউক্রেন যুদ্ধ বা কোভিডের মতো সংকট আমাদের শেখায় যে পৃথিবী অনির্দেশ্য। তাই মানসিকভাবে সবসময় প্রস্তুত থাকতে হবে।",
          "bn": "ইউক্রেন যুদ্ধ বা কোভিডের মতো সংকট আমাদের শেখায় যে পৃথিবী অনির্দেশ্য। তাই মানসিকভাবে সবসময় প্রস্তুত থাকতে হবে।"
        }
      },
      {
        "title": {
          "en": "ইতিহাসের শিক্ষা",
          "bn": "ইতিহাসের শিক্ষা"
        },
        "content": {
          "en": "স্যাম জেলের (Sam Zell) পরিবারের পোল্যান্ড থেকে পালানোর উদাহরণ দিয়ে লেখক বলেছেন, বিপদ সংকেত চিনতে পারা এবং দ্রুত ব্যবস্থা নেওয়া জরুরি।",
          "bn": "স্যাম জেলের (Sam Zell) পরিবারের পোল্যান্ড থেকে পালানোর উদাহরণ দিয়ে লেখক বলেছেন, বিপদ সংকেত চিনতে পারা এবং দ্রুত ব্যবস্থা নেওয়া জরুরি।"
        }
      },
      {
        "title": {
          "en": "খবর বাছাই",
          "bn": "খবর বাছাই"
        },
        "content": {
          "en": "সংকটের সময় সব খবর না দেখে কেবল নির্ভরযোগ্য উৎস দেখা উচিত। অতিরিক্ত প্যানিক ছড়ায় এমন সোর্স (যেমন টুইটার/ফেসবুক) বর্জনীয়।",
          "bn": "সংকটের সময় সব খবর না দেখে কেবল নির্ভরযোগ্য উৎস দেখা উচিত। অতিরিক্ত প্যানিক ছড়ায় এমন সোর্স (যেমন টুইটার/ফেসবুক) বর্জনীয়।"
        }
      },
      {
        "title": {
          "en": "সাহস",
          "bn": "সাহস"
        },
        "content": {
          "en": "ভয় পেয়ে জমে না গিয়ে (Freeze), কাজ করা (Act) বা সিদ্ধান্ত নেওয়া উচিত।",
          "bn": "ভয় পেয়ে জমে না গিয়ে (Freeze), কাজ করা (Act) বা সিদ্ধান্ত নেওয়া উচিত।"
        }
      }
    ],
    "practicalApplication": {
      "en": "একটি \"Crisis Plan\" তৈরি করুন। যদি কাল বড় কোনো প্রাকৃতিক দুর্যোগ বা আর্থিক ধস নামে, আপনার প্রথম ৩টি পদক্ষেপ কী হবে? এটি লিখে রাখলে উদ্বেগ কমে এবং আত্মবিশ্বাস বাড়ে।",
      "bn": "একটি \"Crisis Plan\" তৈরি করুন। যদি কাল বড় কোনো প্রাকৃতিক দুর্যোগ বা আর্থিক ধস নামে, আপনার প্রথম ৩টি পদক্ষেপ কী হবে? এটি লিখে রাখলে উদ্বেগ কমে এবং আত্মবিশ্বাস বাড়ে।"
    },
    "criticalReflection": {
      "en": "\"সর্বদা সতর্ক থাকা\" হাইপার-ভিজিল্যান্স বা প্যারানিয়ার দিকে নিয়ে যেতে পারে। প্রস্তুতি চাবিকাঠি হলেও, ক্রমাগত বিপর্যয়ের আশঙ্কায় বেঁচে থাকা বর্তমানকে নষ্ট করে। প্রস্তুতি এবং প্যারানিয়ার মধ্যে ভারসাম্য বজায় রাখা সূক্ষ্ম।",
      "bn": "\"সর্বদা সতর্ক থাকা\" হাইপার-ভিজিল্যান্স বা প্যারানিয়ার দিকে নিয়ে যেতে পারে। প্রস্তুতি চাবিকাঠি হলেও, ক্রমাগত বিপর্যয়ের আশঙ্কায় বেঁচে থাকা বর্তমানকে নষ্ট করে। প্রস্তুতি এবং প্যারানিয়ার মধ্যে ভারসাম্য বজায় রাখা সূক্ষ্ম।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "বিৃঙ্খলার মধ্যে প্রশান্তি; উন্নত জরুরি পরিকল্পনা।",
        "bn": "বিৃঙ্খলার মধ্যে প্রশান্তি; উন্নত জরুরি পরিকল্পনা।"
      },
      "social": {
        "en": "প্যানিক বায়িং বা কেনাকাটা এবং সমষ্টিগত হিস্টিরিয়া হ্রাস।",
        "bn": "প্যানিক বায়িং বা কেনাকাটা এবং সমষ্টিগত হিস্টিরিয়া হ্রাস।"
      }
    }
  },
  {
    "id": 76,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Math of Mortality",
      "bn": "The Math of Mortality"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "We hardly ever regret the things we did. Instead, we regret the things we didn’t do.",
          "bn": "We hardly ever regret the things we did. Instead, we regret the things we didn’t do."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Just being alive is the biggest thing one can be grateful for.",
          "bn": "Just being alive is the biggest thing one can be grateful for."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "শেষ দেখা",
          "bn": "শেষ দেখা"
        },
        "content": {
          "en": "লেখকের বন্ধু হিসাব করে দেখেছিল যে সে তার বাবা-মাকে আর মাত্র ২০ বার দেখতে পাবে। এই উপলব্ধি তাকে প্রতি মুহূর্তের কদর করতে শিখিয়েছে।",
          "bn": "লেখকের বন্ধু হিসাব করে দেখেছিল যে সে তার বাবা-মাকে আর মাত্র ২০ বার দেখতে পাবে। এই উপলব্ধি তাকে প্রতি মুহূর্তের কদর করতে শিখিয়েছে।"
        }
      },
      {
        "title": {
          "en": "তুচ্ছ অভিযোগ",
          "bn": "তুচ্ছ অভিযোগ"
        },
        "content": {
          "en": "মৃত্যুর কথা মনে রাখলে ছোটখাটো ঝগড়া বা অভিযোগ অর্থহীন মনে হয়।",
          "bn": "মৃত্যুর কথা মনে রাখলে ছোটখাটো ঝগড়া বা অভিযোগ অর্থহীন মনে হয়।"
        }
      },
      {
        "title": {
          "en": "বেঁচে থাকার আনন্দ",
          "bn": "বেঁচে থাকার আনন্দ"
        },
        "content": {
          "en": "কেবল বেঁচে থাকাটাই যে কত বড় উপহার, তা আমরা প্রায়ই ভুলে যাই।",
          "bn": "কেবল বেঁচে থাকাটাই যে কত বড় উপহার, তা আমরা প্রায়ই ভুলে যাই।"
        }
      },
      {
        "title": {
          "en": "রিগ্রেট মিনিমাইজেশন",
          "bn": "রিগ্রেট মিনিমাইজেশন"
        },
        "content": {
          "en": "শেষ বয়সে অনুশোচনা এড়াতে এখনই প্রিয়জনদের সময় দেওয়া উচিত।",
          "bn": "শেষ বয়সে অনুশোচনা এড়াতে এখনই প্রিয়জনদের সময় দেওয়া উচিত।"
        }
      }
    ],
    "practicalApplication": {
      "en": "\"Memento Mori\" (মৃত্যুকে স্মরণ কর) অনুশীলন করুন। ভাবুন, যদি আজকেই আপনার প্রিয়জনের সাথে শেষ দেখা হয়, তবে আপনি তার সাথে কেমন আচরণ করবেন? আজ বাড়ি ফিরে বা ফোনে ঠিক সেই আচরণটি করুন।",
      "bn": "\"Memento Mori\" (মৃত্যুকে স্মরণ কর) অনুশীলন করুন। ভাবুন, যদি আজকেই আপনার প্রিয়জনের সাথে শেষ দেখা হয়, তবে আপনি তার সাথে কেমন আচরণ করবেন? আজ বাড়ি ফিরে বা ফোনে ঠিক সেই আচরণটি করুন।"
    },
    "criticalReflection": {
      "en": "পিতামাতার সাথে আর \"কতবার দেখা হবে\" তা গণনা করা একটি ভয়ঙ্কর কিন্তু কার্যকর বাস্তবতার মুখোমুখি হওয়া। এটি অগ্রাধিকার বা প্রায়োরিটি ঠিক করতে বাধ্য করে। তবে, এটি আগে থেকেই শোক বা \"Anticipatory Grief\" তৈরি করতে পারে, যা সাক্ষাতগুলোকে আনন্দদায়ক না করে ভারী করে তুলতে পারে।",
      "bn": "পিতামাতার সাথে আর \"কতবার দেখা হবে\" তা গণনা করা একটি ভয়ঙ্কর কিন্তু কার্যকর বাস্তবতার মুখোমুখি হওয়া। এটি অগ্রাধিকার বা প্রায়োরিটি ঠিক করতে বাধ্য করে। তবে, এটি আগে থেকেই শোক বা \"Anticipatory Grief\" তৈরি করতে পারে, যা সাক্ষাতগুলোকে আনন্দদায়ক না করে ভারী করে তুলতে পারে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "সম্পর্কে উপস্থিতি বৃদ্ধি; তুচ্ছ সংঘাত হ্রাস।",
        "bn": "সম্পর্কে উপস্থিতি বৃদ্ধি; তুচ্ছ সংঘাত হ্রাস।"
      },
      "social": {
        "en": "প্রজন্মের মধ্যে শক্তিশালী বন্ধন।",
        "bn": "প্রজন্মের মধ্যে শক্তিশালী বন্ধন।"
      }
    }
  },
  {
    "id": 77,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Embracing the Cycle",
      "bn": "Embracing the Cycle"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The world’s cycles never change — up and down, from age to age.",
          "bn": "The world’s cycles never change — up and down, from age to age."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "When things are good, simply enjoy. When things are bad, go through it.",
          "bn": "When things are good, simply enjoy. When things are bad, go through it."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "জীবনের চক্র",
          "bn": "জীবনের চক্র"
        },
        "content": {
          "en": "জীবন সরলরেখা নয়, এটি একটি সাইন ওয়েভ (Sine Wave)—কখনও ওপরে, কখনও নিচে। খারাপ সময় চিরস্থায়ী নয়, ভালো সময়ও নয়।",
          "bn": "জীবন সরলরেখা নয়, এটি একটি সাইন ওয়েভ (Sine Wave)—কখনও ওপরে, কখনও নিচে। খারাপ সময় চিরস্থায়ী নয়, ভালো সময়ও নয়।"
        }
      },
      {
        "title": {
          "en": "অভিনেতার ভূমিকা",
          "bn": "অভিনেতার ভূমিকা"
        },
        "content": {
          "en": "আমরা জীবনের নাটকে কেবল অভিনেতা। চিত্রনাট্য (ভাগ্য) আমাদের হাতে নেই, কিন্তু অভিনয় (প্রতিক্রিয়া) আমাদের হাতে।",
          "bn": "আমরা জীবনের নাটকে কেবল অভিনেতা। চিত্রনাট্য (ভাগ্য) আমাদের হাতে নেই, কিন্তু অভিনয় (প্রতিক্রিয়া) আমাদের হাতে।"
        }
      },
      {
        "title": {
          "en": "জোকারের উপমা",
          "bn": "জোকারের উপমা"
        },
        "content": {
          "en": "একই জোকার চরিত্রে বিভিন্ন অভিনেতা ভিন্নভাবে অভিনয় করেছেন। তেমনি আমাদের পরিস্থিতি এক হলেও আমাদের প্রতিক্রিয়া ভিন্ন হতে পারে।",
          "bn": "একই জোকার চরিত্রে বিভিন্ন অভিনেতা ভিন্নভাবে অভিনয় করেছেন। তেমনি আমাদের পরিস্থিতি এক হলেও আমাদের প্রতিক্রিয়া ভিন্ন হতে পারে।"
        }
      },
      {
        "title": {
          "en": "স্বাভাবিকতা",
          "bn": "স্বাভাবিকতা"
        },
        "content": {
          "en": "উত্থান-পতনকে জীবনের স্বাভাবিক নিয়ম বা ঋতু পরিবর্তনের মতো মেনে নেওয়া।",
          "bn": "উত্থান-পতনকে জীবনের স্বাভাবিক নিয়ম বা ঋতু পরিবর্তনের মতো মেনে নেওয়া।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার জীবনের বর্তমান অবস্থাকে একটি ঋতুর সাথে তুলনা করুন। যদি এখন \"শীতকাল\" (খারাপ সময়) চলে, তবে মনে রাখুন বসন্ত আসবেই। এই সময়ে কেবল টিকে থাকার (Survival) দিকে মনোযোগ দিন, বড় কিছু করার দরকার নেই।",
      "bn": "আপনার জীবনের বর্তমান অবস্থাকে একটি ঋতুর সাথে তুলনা করুন। যদি এখন \"শীতকাল\" (খারাপ সময়) চলে, তবে মনে রাখুন বসন্ত আসবেই। এই সময়ে কেবল টিকে থাকার (Survival) দিকে মনোযোগ দিন, বড় কিছু করার দরকার নেই।"
    },
    "criticalReflection": {
      "en": "চক্র মেনে নেওয়া খারাপ সময়ে হতাশা কমাতে সাহায্য করে কিন্তু ভালো সময়ে অহংকারও নিয়ন্ত্রণ করে। এটি ইগোকে নিয়ন্ত্রণে রাখে। সমাজতাত্ত্বিকভাবে, চক্র স্বীকার করা সমাজগুলোকে আশা না হারিয়ে অর্থনৈতিক মন্দা বা মহামারীগুলির জন্য প্রস্তুত হতে সাহায্য করে।",
      "bn": "চক্র মেনে নেওয়া খারাপ সময়ে হতাশা কমাতে সাহায্য করে কিন্তু ভালো সময়ে অহংকারও নিয়ন্ত্রণ করে। এটি ইগোকে নিয়ন্ত্রণে রাখে। সমাজতাত্ত্বিকভাবে, চক্র স্বীকার করা সমাজগুলোকে আশা না হারিয়ে অর্থনৈতিক মন্দা বা মহামারীগুলির জন্য প্রস্তুত হতে সাহায্য করে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "সংকটের সময় মানসিক স্থিতিশীলতা।",
        "bn": "সংকটের সময় মানসিক স্থিতিশীলতা।"
      },
      "social": {
        "en": "ধৈর্য এবং দীর্ঘমেয়াদী চিন্তাভাবনার সংস্কৃতি।",
        "bn": "ধৈর্য এবং দীর্ঘমেয়াদী চিন্তাভাবনার সংস্কৃতি।"
      }
    }
  },
  {
    "id": 78,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Breaking the Spiral",
      "bn": "Breaking the Spiral"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "One little negative thing can set you on this whole downward spiral.",
          "bn": "One little negative thing can set you on this whole downward spiral."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "When you work on something that’s important to you, you feel that your days have meaning.",
          "bn": "When you work on something that’s important to you, you feel that your days have meaning."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "নেতিবাচক চক্র",
          "bn": "নেতিবাচক চক্র"
        },
        "content": {
          "en": "একটি ছোট খারাপ ঘটনা (যেমন অসুস্থতা) আমাদের রুটিন নষ্ট করে দেয় এবং সেখান থেকে হতাশার চক্র শুরু হয়।",
          "bn": "একটি ছোট খারাপ ঘটনা (যেমন অসুস্থতা) আমাদের রুটিন নষ্ট করে দেয় এবং সেখান থেকে হতাশার চক্র শুরু হয়।"
        }
      },
      {
        "title": {
          "en": "উদ্দেশ্য খুঁজে পাওয়া",
          "bn": "উদ্দেশ্য খুঁজে পাওয়া"
        },
        "content": {
          "en": "হতাশা কাটানোর সেরা উপায় হলো নতুন কোনো অর্থবহ লক্ষ্য ঠিক করা।",
          "bn": "হতাশা কাটানোর সেরা উপায় হলো নতুন কোনো অর্থবহ লক্ষ্য ঠিক করা।"
        }
      },
      {
        "title": {
          "en": "অন্যের উপকার",
          "bn": "অন্যের উপকার"
        },
        "content": {
          "en": "নিজের দুঃখ নিয়ে না ভেবে অন্যের জন্য কিছু করলে দ্রুত মোটিভেশন ফিরে আসে।",
          "bn": "নিজের দুঃখ নিয়ে না ভেবে অন্যের জন্য কিছু করলে দ্রুত মোটিভেশন ফিরে আসে।"
        }
      },
      {
        "title": {
          "en": "তাৎক্ষণিক অ্যাকশন",
          "bn": "তাৎক্ষণিক অ্যাকশন"
        },
        "content": {
          "en": "বড় পরিবর্তনের জন্য অপেক্ষা না করে ছোট কোনো কাজ শুরু করা।",
          "bn": "বড় পরিবর্তনের জন্য অপেক্ষা না করে ছোট কোনো কাজ শুরু করা।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যদি নিজেকে \"আটকে থাকা\" (Stuck) মনে হয়, তবে আজই এমন একটি কাজ করুন যা অন্যের উপকারে আসে। হতে পারে ঘরের কাজ করে দেওয়া বা কলিগকে সাহায্য করা। নিজের ফোকাস \"আমি\" থেকে সরিয়ে \"আমরা\"-তে নিন।",
      "bn": "যদি নিজেকে \"আটকে থাকা\" (Stuck) মনে হয়, তবে আজই এমন একটি কাজ করুন যা অন্যের উপকারে আসে। হতে পারে ঘরের কাজ করে দেওয়া বা কলিগকে সাহায্য করা। নিজের ফোকাস \"আমি\" থেকে সরিয়ে \"আমরা\"-তে নিন।"
    },
    "criticalReflection": {
      "en": "\"অন্যদের ওপর ফোকাস করা\" একটি ক্লিনিক্যালি প্রমাণিত অ্যান্টিডিপ্রেসেন্ট পদ্ধতি (পরার্থপরতা বা Altruism)। এটি চিন্তামগ্ন মস্তিষ্ককে অভ্যন্তরীণ দুঃখ থেকে বাহ্যিক উপযোগিতার দিকে সরিয়ে দেয়। এটি মানসিক স্বাস্থ্যের জন্য একটি সাধারণ কিন্তু গভীর বায়ো-হ্যাক।",
      "bn": "\"অন্যদের ওপর ফোকাস করা\" একটি ক্লিনিক্যালি প্রমাণিত অ্যান্টিডিপ্রেসেন্ট পদ্ধতি (পরার্থপরতা বা Altruism)। এটি চিন্তামগ্ন মস্তিষ্ককে অভ্যন্তরীণ দুঃখ থেকে বাহ্যিক উপযোগিতার দিকে সরিয়ে দেয়। এটি মানসিক স্বাস্থ্যের জন্য একটি সাধারণ কিন্তু গভীর বায়ো-হ্যাক।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "বিষণ্নতা বা ক্রিয়েটিভ ব্লক থেকে দ্রুত পুনরুদ্ধার।",
        "bn": "বিষণ্নতা বা ক্রিয়েটিভ ব্লক থেকে দ্রুত পুনরুদ্ধার।"
      },
      "social": {
        "en": "স্বেচ্ছাসেবী মনোভাব এবং সামাজিক সহায়তা বৃদ্ধি।",
        "bn": "স্বেচ্ছাসেবী মনোভাব এবং সামাজিক সহায়তা বৃদ্ধি।"
      }
    }
  },
  {
    "id": 79,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Relentless Consistency",
      "bn": "Relentless Consistency"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "The way you treat small problems becomes how you treat big ones.",
          "bn": "The way you treat small problems becomes how you treat big ones."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "If you know you’re doing the right thing, don’t let anyone stop you.",
          "bn": "If you know you’re doing the right thing, don’t let anyone stop you."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Never miss.",
          "bn": "Never miss."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "ছোট সমস্যার গুরুত্ব",
          "bn": "ছোট সমস্যার গুরুত্ব"
        },
        "content": {
          "en": "ছোট সমস্যাকে অবহেলা করলে তা বড় সমস্যার মোকাবেলায় আমাদের দুর্বল করে দেয়। কার রেন্টাল কোম্পানির উদাহরণ দিয়ে লেখক দৃঢ়তার কথা বলেছেন।",
          "bn": "ছোট সমস্যাকে অবহেলা করলে তা বড় সমস্যার মোকাবেলায় আমাদের দুর্বল করে দেয়। কার রেন্টাল কোম্পানির উদাহরণ দিয়ে লেখক দৃঢ়তার কথা বলেছেন।"
        }
      },
      {
        "title": {
          "en": "নেভার মিস",
          "bn": "নেভার মিস"
        },
        "content": {
          "en": "জিমে যাওয়া হোক বা লেখালেখি—\"Never Miss\" বা একদিনও বাদ না দেওয়ার মানসিকতা অজেয় করে তোলে।",
          "bn": "জিমে যাওয়া হোক বা লেখালেখি—\"Never Miss\" বা একদিনও বাদ না দেওয়ার মানসিকতা অজেয় করে তোলে।"
        }
      },
      {
        "title": {
          "en": "দ্বৈত সত্তা",
          "bn": "দ্বৈত সত্তা"
        },
        "content": {
          "en": "মায়ের উপদেশ—ঘরের ভেতরে দয়ালু এবং বাইরে অনমনীয় বা 'Unstoppable' হওয়া।",
          "bn": "মায়ের উপদেশ—ঘরের ভেতরে দয়ালু এবং বাইরে অনমনীয় বা 'Unstoppable' হওয়া।"
        }
      },
      {
        "title": {
          "en": "বিরোধিতা মোকাবেলা",
          "bn": "বিরোধিতা মোকাবেলা"
        },
        "content": {
          "en": "সঠিক পথে থাকলে পৃথিবীর কারো কথায় থামা উচিত নয়।",
          "bn": "সঠিক পথে থাকলে পৃথিবীর কারো কথায় থামা উচিত নয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "\"Seinfeld Strategy\" বা ক্যালেন্ডার চেইন মেথড ব্যবহার করুন। কোনো একটি অভ্যাসের জন্য ক্যালেন্ডারে রোজ দাগ দিন। চেইন ভাঙবেন না। ছোট ছোট জয়ে নিজেকে অভ্যস্ত করুন।",
      "bn": "\"Seinfeld Strategy\" বা ক্যালেন্ডার চেইন মেথড ব্যবহার করুন। কোনো একটি অভ্যাসের জন্য ক্যালেন্ডারে রোজ দাগ দিন। চেইন ভাঙবেন না। ছোট ছোট জয়ে নিজেকে অভ্যস্ত করুন।"
    },
    "criticalReflection": {
      "en": "\"Never miss\" বা \"কখনও মিস না করা\" উচ্চ শৃঙ্খলা তৈরি করে তবে এটি অবসেসিভ-কম্পালসিভ আচরণ বা বার্নআউটের ঝুঁকি তৈরি করে। জীবনে অনেক কিছু ঘটে (অসুস্থতা, জরুরি অবস্থা)। একটি আরও সহানুভূতিশীল নিয়ম হলো \"Never miss twice\" (জেমস ক্লিয়ার), যা গতি বা মোমেন্টাম না হারিয়েও মানুষের ভুলের সুযোগ রাখে।",
      "bn": "\"Never miss\" বা \"কখনও মিস না করা\" উচ্চ শৃঙ্খলা তৈরি করে তবে এটি অবসেসিভ-কম্পালসিভ আচরণ বা বার্নআউটের ঝুঁকি তৈরি করে। জীবনে অনেক কিছু ঘটে (অসুস্থতা, জরুরি অবস্থা)। একটি আরও সহানুভূতিশীল নিয়ম হলো \"Never miss twice\" (জেমস ক্লিয়ার), যা গতি বা মোমেন্টাম না হারিয়েও মানুষের ভুলের সুযোগ রাখে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "এলিট স্তরের শৃঙ্খলা এবং গ্রিট (Grit)।",
        "bn": "এলিট স্তরের শৃঙ্খলা এবং গ্রিট (Grit)।"
      },
      "social": {
        "en": "উচ্চ-সাফল্য অর্জনকারী ব্যক্তিরা যারা সীমানা ছাড়িয়ে যান।",
        "bn": "উচ্চ-সাফল্য অর্জনকারী ব্যক্তিরা যারা সীমানা ছাড়িয়ে যান।"
      }
    }
  },
  {
    "id": 80,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Taking Charge",
      "bn": "Taking Charge"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Make the best use of what is in your power, and take the rest as it happens.",
          "bn": "Make the best use of what is in your power, and take the rest as it happens."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "Let us commit to making the best of any situation.",
          "bn": "Let us commit to making the best of any situation."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "খবরের প্রভাব",
          "bn": "খবরের প্রভাব"
        },
        "content": {
          "en": "প্রতিদিন নেতিবাচক খবর দেখলে মনে হয় পৃথিবী ধ্বংস হয়ে যাচ্ছে, যা আমাদের নিষ্ক্রিয় করে দেয়।",
          "bn": "প্রতিদিন নেতিবাচক খবর দেখলে মনে হয় পৃথিবী ধ্বংস হয়ে যাচ্ছে, যা আমাদের নিষ্ক্রিয় করে দেয়।"
        }
      },
      {
        "title": {
          "en": "ইতিহাসের শিক্ষা",
          "bn": "ইতিহাসের শিক্ষা"
        },
        "content": {
          "en": "২০০৮-এর মন্দার সময়ও অনেকে ভেবেছিল সব শেষ, কিন্তু অর্থনীতি ঘুরে দাঁড়িয়েছে। তাই প্যানিক না হয়ে নিজের কাজ করা উচিত।",
          "bn": "২০০৮-এর মন্দার সময়ও অনেকে ভেবেছিল সব শেষ, কিন্তু অর্থনীতি ঘুরে দাঁড়িয়েছে। তাই প্যানিক না হয়ে নিজের কাজ করা উচিত।"
        }
      },
      {
        "title": {
          "en": "দায়িত্ব গ্রহণ",
          "bn": "দায়িত্ব গ্রহণ"
        },
        "content": {
          "en": "বাইরের পরিস্থিতির দোষ না দিয়ে নিজের অবস্থার দায়িত্ব নিজেকেই নিতে হবে।",
          "bn": "বাইরের পরিস্থিতির দোষ না দিয়ে নিজের অবস্থার দায়িত্ব নিজেকেই নিতে হবে।"
        }
      },
      {
        "title": {
          "en": "প্রতিক্রিয়া নিয়ন্ত্রণ",
          "bn": "প্রতিক্রিয়া নিয়ন্ত্রণ"
        },
        "content": {
          "en": "অর্থনীতি বা রাজনীতি আমাদের হাতে নেই, কিন্তু আমাদের স্কিল এবং সঞ্চয় আমাদের হাতে।",
          "bn": "অর্থনীতি বা রাজনীতি আমাদের হাতে নেই, কিন্তু আমাদের স্কিল এবং সঞ্চয় আমাদের হাতে।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আগামী ৩ দিন কোনো নিউজ চ্যানেল বা নিউজ পোর্টাল দেখবেন না। সেই সময়টুকু নিজের স্কিল ডেভেলপমেন্টে ব্যয় করুন। দেখুন উদ্বেগ কমে কি না এবং প্রোডাক্টিভিটি বাড়ে কি না।",
      "bn": "আগামী ৩ দিন কোনো নিউজ চ্যানেল বা নিউজ পোর্টাল দেখবেন না। সেই সময়টুকু নিজের স্কিল ডেভেলপমেন্টে ব্যয় করুন। দেখুন উদ্বেগ কমে কি না এবং প্রোডাক্টিভিটি বাড়ে কি না।"
    },
    "criticalReflection": {
      "en": "খবর এড়িয়ে চলা বা ইগনোর করা একজন অবগত ভোটার হওয়ার পথে বাধা হতে পারে। ব্যক্তিগত শক্তি অত্যাবশ্যক, কিন্তু সমষ্টিগত শক্তি (ভোটদান, সক্রিয়তা) বাহ্যিক পরিস্থিতিকে রূপ দেয়। একজন নাগরিক হিসাবে কাজ করার জন্য যথেষ্ট তথ্য জানা উচিত, কিন্তু ব্যক্তি হিসাবে পক্ষাঘাতগ্রস্ত বা প্যারালাইজড হওয়ার মতো অতিরিক্ত তথ্য নয়।",
      "bn": "খবর এড়িয়ে চলা বা ইগনোর করা একজন অবগত ভোটার হওয়ার পথে বাধা হতে পারে। ব্যক্তিগত শক্তি অত্যাবশ্যক, কিন্তু সমষ্টিগত শক্তি (ভোটদান, সক্রিয়তা) বাহ্যিক পরিস্থিতিকে রূপ দেয়। একজন নাগরিক হিসাবে কাজ করার জন্য যথেষ্ট তথ্য জানা উচিত, কিন্তু ব্যক্তি হিসাবে পক্ষাঘাতগ্রস্ত বা প্যারালাইজড হওয়ার মতো অতিরিক্ত তথ্য নয়।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "প্রোডাক্টিভ মানসিকতা এবং উদ্বেগ হ্রাস।",
        "bn": "প্রোডাক্টিভ মানসিকতা এবং উদ্বেগ হ্রাস।"
      },
      "social": {
        "en": "অভিযোগের পরিবর্তে সমাধানের দিকে মনোযোগী একটি সমাজ।",
        "bn": "অভিযোগের পরিবর্তে সমাধানের দিকে মনোযোগী একটি সমাজ।"
      }
    }
  },
  {
    "id": 81,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "The Inner Ally",
      "bn": "The Inner Ally"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "What progress, you ask, have I made? I have begun to be a friend to myself.",
          "bn": "What progress, you ask, have I made? I have begun to be a friend to myself."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "He who is a friend to himself is a friend to all mankind.",
          "bn": "He who is a friend to himself is a friend to all mankind."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "আত্ম-সমালোচনা",
          "bn": "আত্ম-সমালোচনা"
        },
        "content": {
          "en": "আমরা বন্ধুদের ভুলের প্রতি যতটা সদয়, নিজের ভুলের প্রতি ততটাই কঠোর। এই বৈষম্য দূর করতে হবে।",
          "bn": "আমরা বন্ধুদের ভুলের প্রতি যতটা সদয়, নিজের ভুলের প্রতি ততটাই কঠোর। এই বৈষম্য দূর করতে হবে।"
        }
      },
      {
        "title": {
          "en": "বন্ধুর মতো আচরণ",
          "bn": "বন্ধুর মতো আচরণ"
        },
        "content": {
          "en": "নিজেকে একজন বেস্ট ফ্রেন্ডের মতো ট্রিট করুন। ভুল করলে বকা না দিয়ে উৎসাহ দিন।",
          "bn": "নিজেকে একজন বেস্ট ফ্রেন্ডের মতো ট্রিট করুন। ভুল করলে বকা না দিয়ে উৎসাহ দিন।"
        }
      },
      {
        "title": {
          "en": "সম্পর্কের উন্নতি",
          "bn": "সম্পর্কের উন্নতি"
        },
        "content": {
          "en": "যে নিজের সাথে ভালো ব্যবহার করে, সে অন্যের সাথেও ভালো ব্যবহার করতে পারে।",
          "bn": "যে নিজের সাথে ভালো ব্যবহার করে, সে অন্যের সাথেও ভালো ব্যবহার করতে পারে।"
        }
      },
      {
        "title": {
          "en": "পড়ে যাওয়া",
          "bn": "পড়ে যাওয়া"
        },
        "content": {
          "en": "পড়ে যাওয়া বা ব্যর্থ হওয়া স্বাভাবিক। নিজেকে উঠে দাঁড়াতে সাহায্য করাই বন্ধুর কাজ।",
          "bn": "পড়ে যাওয়া বা ব্যর্থ হওয়া স্বাভাবিক। নিজেকে উঠে দাঁড়াতে সাহায্য করাই বন্ধুর কাজ।"
        }
      }
    ],
    "practicalApplication": {
      "en": "যখনই নিজের ওপর রাগ হবে, চোখ বন্ধ করে ভাবুন আপনার সবচেয়ে প্রিয় বন্ধু এই ভুলটি করেছে। আপনি তাকে কী বলতেন? ঠিক সেই কথাগুলোই নিজেকে বলুন।",
      "bn": "যখনই নিজের ওপর রাগ হবে, চোখ বন্ধ করে ভাবুন আপনার সবচেয়ে প্রিয় বন্ধু এই ভুলটি করেছে। আপনি তাকে কী বলতেন? ঠিক সেই কথাগুলোই নিজেকে বলুন।"
    },
    "criticalReflection": {
      "en": "নিজেকে বন্ধু ভাবা আত্ম-ঘৃণার প্রতিষেধক। এটি মানসিক স্বাস্থ্যের জন্য মৌলিক। এটি ছাড়া, বাহ্যিক ভ্যালিডেশন একটি মাদকের মতো হয়ে ওঠে। দীর্ঘমেয়াদী সুখের জন্য এটি তর্কসাপেক্ষে সবচেয়ে গুরুত্বপূর্ণ শিক্ষা।",
      "bn": "নিজেকে বন্ধু ভাবা আত্ম-ঘৃণার প্রতিষেধক। এটি মানসিক স্বাস্থ্যের জন্য মৌলিক। এটি ছাড়া, বাহ্যিক ভ্যালিডেশন একটি মাদকের মতো হয়ে ওঠে। দীর্ঘমেয়াদী সুখের জন্য এটি তর্কসাপেক্ষে সবচেয়ে গুরুত্বপূর্ণ শিক্ষা।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "উচ্চ ইমোশনাল ইন্টেলিজেন্স এবং আত্মপ্রেম।",
        "bn": "উচ্চ ইমোশনাল ইন্টেলিজেন্স এবং আত্মপ্রেম।"
      },
      "social": {
        "en": "আরও সহানুভূতিশীল এবং কম বিচারপ্রবণ মিথস্ক্রিয়া।",
        "bn": "আরও সহানুভূতিশীল এবং কম বিচারপ্রবণ মিথস্ক্রিয়া।"
      }
    }
  },
  {
    "id": 82,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Economic Stoicism",
      "bn": "Economic Stoicism"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "Do not seek to have events happen as you want them but instead want them to happen and your life will go well.",
          "bn": "Do not seek to have events happen as you want them but instead want them to happen and your life will go well."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "The good thing about the economy is that unlike a company or a person, it never dies.",
          "bn": "The good thing about the economy is that unlike a company or a person, it never dies."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "চক্রাকার অর্থনীতি",
          "bn": "চক্রাকার অর্থনীতি"
        },
        "content": {
          "en": "মন্দা অর্থনীতির একটি স্বাভাবিক অংশ, কোনো বিপর্যয় নয়। এটি ঋতু পরিবর্তনের মতো।",
          "bn": "মন্দা অর্থনীতির একটি স্বাভাবিক অংশ, কোনো বিপর্যয় নয়। এটি ঋতু পরিবর্তনের মতো।"
        }
      },
      {
        "title": {
          "en": "দীর্ঘমেয়াদী দৃষ্টিভঙ্গি",
          "bn": "দীর্ঘমেয়াদী দৃষ্টিভঙ্গি"
        },
        "content": {
          "en": "শর্ট-টার্ম বা স্বল্পমেয়াদী পতনে ভয় না পেয়ে ইতিহাসের দিকে তাকালে দেখা যায়, অর্থনীতি সবসময় ঘুরে দাঁড়ায় (S&P 500 উদাহরণ)।",
          "bn": "শর্ট-টার্ম বা স্বল্পমেয়াদী পতনে ভয় না পেয়ে ইতিহাসের দিকে তাকালে দেখা যায়, অর্থনীতি সবসময় ঘুরে দাঁড়ায় (S&P 500 উদাহরণ)।"
        }
      },
      {
        "title": {
          "en": "আবেগ নিয়ন্ত্রণ",
          "bn": "আবেগ নিয়ন্ত্রণ"
        },
        "content": {
          "en": "মিডিয়া বা মানুষের কথায় প্যানিক না হয়ে যুক্তির মাধ্যমে বিনিয়োগ বা ক্যারিয়ারের সিদ্ধান্ত নেওয়া উচিত।",
          "bn": "মিডিয়া বা মানুষের কথায় প্যানিক না হয়ে যুক্তির মাধ্যমে বিনিয়োগ বা ক্যারিয়ারের সিদ্ধান্ত নেওয়া উচিত।"
        }
      },
      {
        "title": {
          "en": "টিকে থাকার মানসিকতা",
          "bn": "টিকে থাকার মানসিকতা"
        },
        "content": {
          "en": "মন্দার সময় যারা মাথা ঠান্ডা রেখে টিকে থাকে, সুসময়ে তারাই সবচেয়ে বেশি লাভবান হয়।",
          "bn": "মন্দার সময় যারা মাথা ঠান্ডা রেখে টিকে থাকে, সুসময়ে তারাই সবচেয়ে বেশি লাভবান হয়।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আপনার বিনিয়োগ বা সঞ্চয়ের দিকে তাকান। প্যানিক হয়ে সব বিক্রি বা খরচ না করে দীর্ঘমেয়াদী প্ল্যানে অটল থাকুন। মন্দাকে \"Sale\" বা সুযোগ হিসেবে দেখার চেষ্টা করুন।",
      "bn": "আপনার বিনিয়োগ বা সঞ্চয়ের দিকে তাকান। প্যানিক হয়ে সব বিক্রি বা খরচ না করে দীর্ঘমেয়াদী প্ল্যানে অটল থাকুন। মন্দাকে \"Sale\" বা সুযোগ হিসেবে দেখার চেষ্টা করুন।"
    },
    "criticalReflection": {
      "en": "মন্দার মধ্যে শান্ত থাকা তাদের জন্যই সহজ যাদের সঞ্চয় আছে। যাদের চাকরি/বাড়ি হারাতে হচ্ছে, তাদের জন্য \"শান্ত থাকা\"র উপদেশ অনেকটা উপহাসের মতো শোনাতে পারে। তবে, প্যানিক কেবল দারিদ্র্যকে আরও খারাপ করে। যুক্তিসঙ্গত পদক্ষেপ (খরচ কমানো, আপস্কিলিং) হলো একমাত্র মুক্তির উপায়, শ্রেণী নির্বিশেষে।",
      "bn": "মন্দার মধ্যে শান্ত থাকা তাদের জন্যই সহজ যাদের সঞ্চয় আছে। যাদের চাকরি/বাড়ি হারাতে হচ্ছে, তাদের জন্য \"শান্ত থাকা\"র উপদেশ অনেকটা উপহাসের মতো শোনাতে পারে। তবে, প্যানিক কেবল দারিদ্র্যকে আরও খারাপ করে। যুক্তিসঙ্গত পদক্ষেপ (খরচ কমানো, আপস্কিলিং) হলো একমাত্র মুক্তির উপায়, শ্রেণী নির্বিশেষে।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "আর্থিক স্থিতিস্থাপকতা এবং সময়ের সাথে সম্পদ সঞ্চয়।",
        "bn": "আর্থিক স্থিতিস্থাপকতা এবং সময়ের সাথে সম্পদ সঞ্চয়।"
      },
      "social": {
        "en": "ভয়ের কারণে সৃষ্ট বাজারের অস্থিতিশীলতা হ্রাস।",
        "bn": "ভয়ের কারণে সৃষ্ট বাজারের অস্থিতিশীলতা হ্রাস।"
      }
    }
  },
  {
    "id": 83,
    "sectionTitle": {
      "en": "The Outer World",
      "bn": "The Outer World"
    },
    "chapterTitle": {
      "en": "Making Peace with Mortality (The Conclusion)",
      "bn": "Making Peace with Mortality (The Conclusion)"
    },
    "goldenQuotes": [
      {
        "quote": {
          "en": "You don’t want to be a slave to anything. You want to be free. So be free — of everything.",
          "bn": "You don’t want to be a slave to anything. You want to be free. So be free — of everything."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      },
      {
        "quote": {
          "en": "When we’re sick, we should respect the signals our body sends us. When we age, we should be proud instead of trying to hide.",
          "bn": "When we’re sick, we should respect the signals our body sends us. When we age, we should be proud instead of trying to hide."
        },
        "author": {
          "en": "Stoic Wisdom",
          "bn": "Stoic Wisdom"
        }
      }
    ],
    "coreInsights": [
      {
        "title": {
          "en": "শরীরের দাসত্ব",
          "bn": "শরীরের দাসত্ব"
        },
        "content": {
          "en": "আমরা শরীরের যত্ন নেব, কিন্তু শরীরের দাস হব না। বার্ধক্য বা অসুস্থতাকে ভয় না পেয়ে জীবনের অংশ হিসেবে মেনে নেব।",
          "bn": "আমরা শরীরের যত্ন নেব, কিন্তু শরীরের দাস হব না। বার্ধক্য বা অসুস্থতাকে ভয় না পেয়ে জীবনের অংশ হিসেবে মেনে নেব।"
        }
      },
      {
        "title": {
          "en": "খাবিবের শিক্ষা",
          "bn": "খাবিবের শিক্ষা"
        },
        "content": {
          "en": "ফাইটার খাবিবের বাবার মৃত্যুর পর তার অবসরের সিদ্ধান্ত প্রমাণ করে যে জীবনের নশ্বরতা মেনে নেওয়াই প্রকৃত শক্তি।",
          "bn": "ফাইটার খাবিবের বাবার মৃত্যুর পর তার অবসরের সিদ্ধান্ত প্রমাণ করে যে জীবনের নশ্বরতা মেনে নেওয়াই প্রকৃত শক্তি।"
        }
      },
      {
        "title": {
          "en": "বার্ধক্যকে আলিঙ্গন",
          "bn": "বার্ধক্যকে আলিঙ্গন"
        },
        "content": {
          "en": "বয়স লুকানোর চেষ্টা না করে অভিজ্ঞতার জন্য গর্বিত হওয়া উচিত।",
          "bn": "বয়স লুকানোর চেষ্টা না করে অভিজ্ঞতার জন্য গর্বিত হওয়া উচিত।"
        }
      },
      {
        "title": {
          "en": "চূড়ান্ত মুক্তি",
          "bn": "চূড়ান্ত মুক্তি"
        },
        "content": {
          "en": "শরীর, সম্পদ বা পরিস্থিতি—কোনো কিছুর ওপর আসক্তি না রাখাই হলো চূড়ান্ত স্টয়িক মুক্তি বা Freedom।",
          "bn": "শরীর, সম্পদ বা পরিস্থিতি—কোনো কিছুর ওপর আসক্তি না রাখাই হলো চূড়ান্ত স্টয়িক মুক্তি বা Freedom।"
        }
      }
    ],
    "practicalApplication": {
      "en": "আয়নায় নিজের বয়সের ছাপ বা শরীরের কোনো দাগ দেখে মন খারাপ করবেন না। ভাবুন, \"এটি আমার বেঁচে থাকার প্রমাণ।\" শরীর খারাপ হলে জোর না করে বিশ্রাম নিন। নশ্বরতাকে ভয় না পেয়ে আজকেই সেরা ব্যবহার করুন।",
      "bn": "আয়নায় নিজের বয়সের ছাপ বা শরীরের কোনো দাগ দেখে মন খারাপ করবেন না। ভাবুন, \"এটি আমার বেঁচে থাকার প্রমাণ।\" শরীর খারাপ হলে জোর না করে বিশ্রাম নিন। নশ্বরতাকে ভয় না পেয়ে আজকেই সেরা ব্যবহার করুন।"
    },
    "criticalReflection": {
      "en": "বইটি একটি বিষাদগ্রস্ত কিন্তু মুক্তিময় নোটে শেষ হয়েছে। শারীরিক ক্ষয় মেনে নেওয়া স্টয়িকের জন্য চূড়ান্ত পরীক্ষা। এটি চিরন্তন যৌবন এবং বায়ো-হ্যাকিংয়ের আধুনিক আবেশকে চ্যালেঞ্জ করে এবং প্রস্তাব করে যে মর্যাদা অস্বীকারে নয়, গ্রহণের মধ্যে নিহিত।",
      "bn": "বইটি একটি বিষাদগ্রস্ত কিন্তু মুক্তিময় নোটে শেষ হয়েছে। শারীরিক ক্ষয় মেনে নেওয়া স্টয়িকের জন্য চূড়ান্ত পরীক্ষা। এটি চিরন্তন যৌবন এবং বায়ো-হ্যাকিংয়ের আধুনিক আবেশকে চ্যালেঞ্জ করে এবং প্রস্তাব করে যে মর্যাদা অস্বীকারে নয়, গ্রহণের মধ্যে নিহিত।"
    },
    "expectedOutcomes": {
      "individual": {
        "en": "মার্জিত বার্ধক্য এবং স্বাস্থ্য উদ্বেগ হ্রাস।",
        "bn": "মার্জিত বার্ধক্য এবং স্বাস্থ্য উদ্বেগ হ্রাস।"
      },
      "social": {
        "en": "একটি সমাজ যা প্রবীণদের এবং জীবনের স্বাভাবিক চক্রকে সম্মান করে।",
        "bn": "একটি সমাজ যা প্রবীণদের এবং জীবনের স্বাভাবিক চক্রকে সম্মান করে।"
      }
    }
  }
];

export const getChapterById = (id: number) => chapters.find(c => c.id === id);
export const getSectionForChapter = (id: number) => sections.find(s => s.chapters.includes(id));
export const getAllGoldenQuotes = () => chapters.flatMap(c => c.goldenQuotes.map(q => ({ quote: q.quote, author: q.author, chapterId: c.id, chapterTitle: c.chapterTitle })));
