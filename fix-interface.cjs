const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'data', 'chapters.ts');
let content = fs.readFileSync(src, 'utf8');

const newInterface = `export interface TranslatedString {
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
}`;

// Match from "export interface Chapter {" to the closing "}" before "export interface Section"
content = content.replace(/export interface Chapter \{[\s\S]*?\}\s*export interface Section/, newInterface + '\n\nexport interface Section');

fs.writeFileSync(src, content, 'utf8');
console.log("Fixed interface");
