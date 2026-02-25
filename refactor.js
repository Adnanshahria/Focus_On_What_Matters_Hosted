const fs = require('fs');
const path = require('path');

const chaptersFilePath = path.join(__dirname, 'src', 'data', 'chapters.ts');

let content = fs.readFileSync(chaptersFilePath, 'utf8');

// 1. Update the interfaces at the top
content = content.replace(
    `export interface Chapter {
  id: number;
  sectionTitle: string;
  chapterTitle: string;
  goldenQuotes: { quote: string; author: string }[];
  coreInsights: { title: string; content: string }[];
  practicalApplication: string;
  criticalReflection: string;
  expectedOutcomes: { individual: string; social: string };
}`,
    `export interface TranslatedString {
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
}`);

// Extract the chapters array string
const chaptersMatch = content.match(/export const chapters: Chapter\[\] = (\[[\s\S]*?\]);\n/);
if (!chaptersMatch) {
    console.error("Could not find chapters array!");
    process.exit(1);
}

const chaptersArrayString = chaptersMatch[1];
// Safely evaluate the array (it's pure object data)
const rawChapters = new Function(`return ${chaptersArrayString}`)();

// Transform chapters
const newChapters = rawChapters.map(ch => {
    // If it's chapter 1, we use our translated text!
    if (ch.id === 1) {
        return {
            id: ch.id,
            sectionTitle: { en: ch.sectionTitle, bn: "অভ্যন্তরীণ জগৎ" },
            chapterTitle: { en: ch.chapterTitle, bn: "অভ্যন্তরীণ স্থিতিশীলতার ভিত্তি" },
            goldenQuotes: ch.goldenQuotes.map(q => ({
                quote: { en: q.quote, bn: q.quote === "All improvement starts within." ? "সমস্ত উন্নতি ভেতর থেকে শুরু হয়।" : q.quote === "We can’t be happy and comfortable in the world if we are not the same in our minds." ? "আমরা যদি মানসিকভাবে শান্ত না থাকি, তবে পৃথিবীতে সুখী হতে পারব না।" : q.quote === "With Stoic wisdom, we can guard our minds against the things that disrupt our happiness." ? "স্টয়িক দর্শনের সাহায্যে আমরা আমাদের মনকে রক্ষ করতে পারি।" : "একটি শক্তিশালী মন একটি শান্ত মন।" },
                author: { en: q.author, bn: "দারিয়াস ফোরক্স" }
            })),
            coreInsights: ch.coreInsights.map(ci => ({
                title: { en: ci.title === "অভ্যন্তরীণ উন্নতির গুরুত্ব" ? "The Importance of Inner Improvement" : ci.title === "স্টয়িক দর্শনের ঢাল" ? "The Shield of Stoic Philosophy" : ci.title.includes("মানসিক স্থিতিস্থাপকতা") ? "Mental Resilience" : "Mind and World Connection", bn: ci.title },
                content: { en: ci.title === "অভ্যন্তরীণ উন্নতির গুরুত্ব" ? "Before changing the external world, it is essential to improve your own mental state. Without a stable mind, external happiness is never long-lasting." : ci.title === "স্টয়িক দর্শনের ঢাল" ? "Stoic philosophy acts as a protective shield for our minds, guarding our happiness from external chaos." : ci.title.includes("মানসিক স্থিতিস্থাপকতা") ? "A strong and resilient mind is the true source of peace; regardless of external circumstances, it is possible to maintain inner peace." : "Our state of mind directly impacts our external experience.", bn: ci.content }
            })),
            practicalApplication: {
                en: "Take 5 minutes every morning to observe your mental state. If an external event (like traffic or bad weather) ruins your mood, remind yourself that while you cannot control external events, you can control your reaction. Repeat the mantra 'I will stay calm' in your mind.",
                bn: ch.practicalApplication
            },
            criticalReflection: {
                en: "This chapter suggests happiness is almost entirely an internal matter. While empowering, this view risks downplaying the impact of severe external pressures like systemic poverty, trauma, or oppression. Socially, placing the entire burden of well-being on an individual's 'strong mind' can lead to victim-blaming, ignoring environmental factors that disrupt mental peace.",
                bn: ch.criticalReflection
            },
            expectedOutcomes: {
                individual: { en: "Improved emotional regulation and significantly reduced reactivity to daily annoyances.", bn: ch.expectedOutcomes.individual },
                social: { en: "Calmer behavior in social interactions, which can reduce interpersonal conflict, but might lead to apathy towards social injustice if over-detached from 'external' problems.", bn: ch.expectedOutcomes.social }
            }
        };
    }

    // Generic transform for the rest of chapters (filling missing languages with English defaults for now)
    return {
        id: ch.id,
        sectionTitle: { en: ch.sectionTitle, bn: ch.sectionTitle },
        chapterTitle: { en: ch.chapterTitle, bn: ch.chapterTitle },
        goldenQuotes: ch.goldenQuotes.map(q => ({
            quote: { en: q.quote, bn: q.quote },
            author: { en: q.author, bn: q.author }
        })),
        coreInsights: ch.coreInsights.map(ci => ({
            title: { en: ci.title, bn: ci.title },
            content: { en: ci.content, bn: ci.content }
        })),
        practicalApplication: { en: ch.practicalApplication, bn: ch.practicalApplication },
        criticalReflection: { en: ch.criticalReflection, bn: ch.criticalReflection },
        expectedOutcomes: {
            individual: { en: ch.expectedOutcomes.individual, bn: ch.expectedOutcomes.individual },
            social: { en: ch.expectedOutcomes.social, bn: ch.expectedOutcomes.social }
        }
    };
});

const newChaptersString = JSON.stringify(newChapters, null, 2);
content = content.replace(chaptersArrayString, newChaptersString);

fs.writeFileSync(chaptersFilePath, content, 'utf8');
console.log("Refactored chapters.ts successfully!");
