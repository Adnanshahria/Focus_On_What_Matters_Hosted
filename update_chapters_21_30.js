const fs = require('fs');
const translations = {
    21: {
        title: "সম্পদ থেকে আত্মমর্যাদাকে আলাদা করা",
        quotes: [
            { en: "Think that nothing deserves admiration except the mind, which being itself great counts nothing else as great.", bn: "মনে রাখবেন, মন ছাড়া অন্য কোনো কিছুই প্রশংসার যোগ্য নয়; মন নিজেই এত মহান যে সে অন্য কোনো কিছুকেই মহান মনে করে না।" },
            { en: "The truth is that you are not your possessions.", bn: "সত্যি বলতে, আপনার সম্পদই আপনার পরিচয় নয়।" },
            { en: "You don’t need to buy anything today to feel good about yourself. You’re not missing out on anything.", bn: "নিজেকে ভালো রাখার জন্য আজ আপনার নতুন কিছু কেনার প্রয়োজন নেই। আপনি কিছুই হারাচ্ছেন না।" }
        ],
        authors: { "Seneca": "সেনেকা", "Stoic Wisdom": "স্টয়িক প্রজ্ঞা", "Marcus Aurelius": "মার্কাস অরেলিয়াস" }
    },
    22: {
        title: "অটল সততা",
        quotes: [
            { en: "Decide first what type of person you want to be and stick to it. Be the same person whether you are by yourself or with others.", bn: "প্রথমে স্থির করুন আপনি কেমন মানুষ হতে চান এবং তাতে অটল থাকুন। একা থাকা অবস্থায় বা অন্যের সাথে থাকা অবস্থায়—সবসময় একই রকম থাকুন।" },
            { en: "The responsibility is all yours; no one can stop you from being honest or straightforward.", bn: "এর দায়িত্ব সম্পূর্ণ আপনার; সৎ বা স্পষ্টভাষী হওয়া থেকে কেউ আপনাকে আটকাতে পারবে না।" }
        ]
    },
    23: {
        title: "সিদ্ধান্ত গ্রহণ ম্যাট্রিক্স (ভূমিকা)",
        quotes: [
            { en: "We must concern ourselves absolutely with the things that are under our control and entrust the things not in our control to the universe.", bn: "যা আমাদের নিয়ন্ত্রণে আছে তা নিয়ে আমাদের সম্পূর্ণ যত্নবান হওয়া উচিত এবং যা আমাদের নিয়ন্ত্রণে নেই তা মহাবিশ্বের হাতে ছেড়ে দেওয়া উচিত।" }
        ]
    },
    24: {
        title: "অনুমোদনের ঊর্ধ্বে স্বায়ত্তশাসন",
        quotes: [
            { en: "Once you undertake to do something, stick with it and treat it as something that should be carried through. Don’t pay attention to what people say.", bn: "একবার কোনো কাজে হাত দিলে তাতে লেগে থাকুন এবং তা শেষ করার চেষ্টা করুন। লোকে কী বলে সেদিকে মনোযোগ দেবেন না।" },
            { en: "When you want to please everyone in your life, you end up harming your own sense of self-worth.", bn: "যখন আপনি আপনার জীবনে সবাইকে খুশি করার চেষ্টা করেন, তখন আপনি নিজের আত্মমর্যাদার ক্ষতি করেন।" }
        ]
    },
    25: {
        title: "মোড় ঘোরানোর শিল্প",
        quotes: [
            { en: "But we must be prepared to give up everything when something unexpected happens.", bn: "তবে অনিচ্ছাকৃত কিছু ঘটলে আমাদের সব কিছু ছেড়ে দিতে প্রস্তুত থাকতে হবে।" },
            { en: "We’re guests who temporarily walk this planet... I look at everything in life as borrowed.", bn: "আমরা অতিথি যারা ক্ষণিকের জন্য এই গ্রহে হেঁটে বেড়াচ্ছি... আমি জীবনের সব কিছুকেই ধার করা বলে মনে করি।" },
            { en: "Plan all you want! ... Just don’t get attached to your plans.", bn: "যতই পরিকল্পনা করুন না কেন! ... শুধু নিজের পরিকল্পনার প্রতি আসক্ত হবেন না।" }
        ]
    },
    26: {
        title: "Amor Fati (ভাগ্যকে ভালোবাসা)",
        quotes: [
            { en: "Don’t wish for things to happen the way you like. Instead, welcome whatever happens as if you wanted it to happen.", bn: "জিনিসগুলো আপনার মনমতো হবে এমনটা আশা করবেন না। বরং যা-ই ঘটুক না কেন তাকে এমনভাবে স্বাগত জানান যেন আপনি এটাই চেয়েছিলেন।" },
            { en: "Practice acceptance without disdain.", bn: "অবজ্ঞা ছাড়াই মেনে নেওয়ার অনুশীলন করুন।" }
        ]
    },
    27: {
        title: "Premeditatio Malorum (নেতিবাচক কল্পনা)",
        quotes: [
            { en: "Just the thought of multiple disasters happening at the same time will help you to be more clear-headed when things go wrong.", bn: "একাধিক বিপর্যয় একই সাথে ঘটতে পারে, এমন চিন্তা আপনাকে খারাপ পরিস্থিতিতে আরো স্পষ্টভাবে ভাবতে সাহায্য করবে।" },
            { en: "I am of the nature to have ill health. I cannot escape having ill health.", bn: "আমার প্রকৃতিতেই অসুস্থ হওয়া লেখা আছে। অসুস্থতা থেকে আমি পালাতে পারব না।" }
        ]
    },
    28: {
        title: "অপেক্ষার কক্ষ থেকে মুক্তি (ভূমিকা)",
        quotes: []
    },
    29: {
        title: "পরিমাণের চেয়ে গুণমান",
        quotes: [
            { en: "Teach me that the good of life does not depend on its length, but its employment.", bn: "আমাকে শেখান যে জীবনের সার্থকতা এর দৈঘ্যের ওপর নির্ভর করে না, বরং এর ব্যবহারের ওপর নির্ভর করে।" },
            { en: "It is possible, in fact very often so, that a man who has lived a long time has not lived enough.", bn: "এটা সম্ভব, এবং প্রায়শই ঘটে থাকে যে, দীর্ঘজীবী একজন মানুষ আসলে যথেষ্ট জীবন উপভোগ করেনি।" },
            { en: "When you always feel like your life is not complete... you’re never content.", bn: "যখন আপনার সবসময় মনে হবে যে আপনার জীবন অসম্পূর্ণ... তখন আপনি কখনোই সন্তুষ্ট হতে পারবেন না।" }
        ]
    },
    30: {
        title: "জ্ঞানের একমাত্র আশ্রয়",
        quotes: [
            { en: "No one can live happily, or even bearably, without the pursuit of wisdom.", bn: "জ্ঞানের সাধনা ছাড়া কেউই সুখে বা এমনকি সহ্য করার মতো অবস্থায় বাঁচতে পারে না।" },
            { en: "Dedicate your life to wisdom. It’s the only way to live a consistently happy life.", bn: "আপনার জীবনকে জ্ঞানের প্রতি উৎসর্গ করুন। এটিই ধারাবাহিকভাবে সুখী জীবন যাপনের একমাত্র উপায়।" }
        ]
    }
};

const authorTranslations = {
    "Seneca": "সেনেকা",
    "Stoic Wisdom": "স্টয়িক প্রজ্ঞা",
    "Marcus Aurelius": "মার্কাস অরেলিয়াস"
};

const filePath = 'src/data/chapters.ts';
let content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/export const chapters: Chapter\[\] = (\[[\s\S]*?\]);\r?\n/);
if (match) {
    let chaptersArrayStr = match[1];
    let chapters = (new Function('return ' + chaptersArrayStr))();

    for (const ch of chapters) {
        if (ch.id >= 21 && ch.id <= 30) {
            const trans = translations[ch.id];
            if (trans) {
                ch.chapterTitle.bn = trans.title;
                // Also ensure sectionTitle bn for inner world is consistent if missed
                ch.sectionTitle.bn = "অভ্যন্তরীণ জগৎ";

                for (let i = 0; i < ch.goldenQuotes.length; i++) {
                    const q = ch.goldenQuotes[i];
                    const tq = trans.quotes.find(tq => tq.en === q.quote.en);
                    if (tq) q.quote.bn = tq.bn;
                    if (authorTranslations[q.author.en]) {
                        q.author.bn = authorTranslations[q.author.en];
                    }
                }
            }
        }
    }

    // Need to replace the string in the file cleanly.
    // Using JSON.stringify will make it look like a pure JSON array string rather than JS format, but it compiles and works with typescript.
    // We'll replace the full array section.
    const serialized = JSON.stringify(chapters, null, 2);
    const updatedContent = content.replace(match[0], `export const chapters: Chapter[] = ${serialized};\n`);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log("Updated chapters 21 to 30.");
}
