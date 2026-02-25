import type { Index } from 'lunr';
import lunr from 'lunr';
import type { Chapter } from './chapters';
import { chapters } from './chapters';

export interface SearchResult {
    chapter: Chapter;
    score: number;
    matchedFields: string[];
}

// Build the search index with equal weighting for English and Bengali
let searchIndex: Index | null = null;

export function buildSearchIndex(): Index {
    if (searchIndex) return searchIndex;

    searchIndex = lunr(function (this: lunr.Builder) {
        // Configure the index
        this.ref('id');

        // English fields
        this.field('chapterTitle', { boost: 10 });
        this.field('goldenQuotes', { boost: 8 });
        this.field('criticalReflection', { boost: 3 });
        this.field('expectedOutcomesIndividual', { boost: 2 });
        this.field('expectedOutcomesSocial', { boost: 2 });

        // Bengali fields - equally weighted
        this.field('coreInsightsTitles', { boost: 8 });
        this.field('coreInsightsContent', { boost: 6 });
        this.field('practicalApplication', { boost: 5 });

        // Use custom pipeline for better Bengali support
        this.pipeline.reset();
        this.pipeline.add(
            lunr.trimmer,
            lunr.stopWordFilter,
            lunr.stemmer
        );

        // Index all chapters combining both EN and BN texts
        chapters.forEach((chapter) => {
            this.add({
                id: chapter.id,
                chapterTitle: `${chapter.chapterTitle.en} ${chapter.chapterTitle.bn}`,
                goldenQuotes: chapter.goldenQuotes.map(q => `${q.quote.en} ${q.quote.bn} ${q.author.en} ${q.author.bn}`).join(' '),
                criticalReflection: `${chapter.criticalReflection.en} ${chapter.criticalReflection.bn}`,
                expectedOutcomesIndividual: `${chapter.expectedOutcomes.individual.en} ${chapter.expectedOutcomes.individual.bn}`,
                expectedOutcomesSocial: `${chapter.expectedOutcomes.social.en} ${chapter.expectedOutcomes.social.bn}`,
                coreInsightsTitles: chapter.coreInsights.map(i => `${i.title.en} ${i.title.bn}`).join(' '),
                coreInsightsContent: chapter.coreInsights.map(i => `${i.content.en} ${i.content.bn}`).join(' '),
                practicalApplication: `${chapter.practicalApplication.en} ${chapter.practicalApplication.bn}`
            });
        });
    });

    return searchIndex;
}

// Search function that returns matched chapters
export function searchChapters(query: string): SearchResult[] {
    if (!query.trim()) return [];

    const index = buildSearchIndex();

    try {
        // Perform wildcard search for partial matches
        const results = index.search(`${query}*`);

        return results.map((result: lunr.Index.Result) => {
            const chapter = chapters.find(ch => ch.id === parseInt(result.ref));
            if (!chapter) return null;

            // Determine which fields matched
            const matchedFields: string[] = [];
            const queryLower = query.toLowerCase();

            const titleMatch = chapter.chapterTitle.en.toLowerCase().includes(queryLower) || chapter.chapterTitle.bn.toLowerCase().includes(queryLower);
            if (titleMatch) {
                matchedFields.push('title');
            }
            const quotesMatch = chapter.goldenQuotes.some(q =>
                q.quote.en.toLowerCase().includes(queryLower) ||
                q.quote.bn.toLowerCase().includes(queryLower) ||
                q.author.en.toLowerCase().includes(queryLower) ||
                q.author.bn.toLowerCase().includes(queryLower)
            );
            if (quotesMatch) {
                matchedFields.push('quotes');
            }
            const insightsMatch = chapter.coreInsights.some(i =>
                i.title.en.toLowerCase().includes(queryLower) || i.title.bn.toLowerCase().includes(queryLower) ||
                i.content.en.toLowerCase().includes(queryLower) || i.content.bn.toLowerCase().includes(queryLower)
            );
            if (insightsMatch) {
                matchedFields.push('insights');
            }
            const practiceMatch = chapter.practicalApplication.en.toLowerCase().includes(queryLower) || chapter.practicalApplication.bn.toLowerCase().includes(queryLower);
            if (practiceMatch) {
                matchedFields.push('practice');
            }

            return {
                chapter,
                score: result.score,
                matchedFields
            };
        }).filter((r): r is SearchResult => r !== null);
    } catch {
        // Fallback to simple search if lunr fails
        return chapters
            .filter(ch => {
                const searchText = [
                    ch.chapterTitle.en, ch.chapterTitle.bn,
                    ...ch.goldenQuotes.map(q => `${q.quote.en} ${q.quote.bn} ${q.author.en} ${q.author.bn}`),
                    ...ch.coreInsights.map(i => `${i.title.en} ${i.title.bn} ${i.content.en} ${i.content.bn}`),
                    ch.practicalApplication.en, ch.practicalApplication.bn
                ].join(' ').toLowerCase();
                return searchText.includes(query.toLowerCase());
            })
            .map(chapter => ({
                chapter,
                score: 1,
                matchedFields: ['fallback']
            }));
    }
}

// Highlight search terms in text
export function highlightSearchTerm(text: string, query: string): string {
    if (!query.trim()) return text;

    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}
