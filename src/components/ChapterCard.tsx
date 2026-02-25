import type { Chapter } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface ChapterCardProps {
    chapter: Chapter;
    onClick: () => void;
}

export function ChapterCard({ chapter, onClick }: ChapterCardProps) {
    const { isBengali } = useLanguage();

    return (
        <article
            className="chapter-card hover-lift"
            onClick={onClick}
        >
            {/* Header */}
            <header className="chapter-header">
                <div className="chapter-number-badge">
                    {chapter.id}
                </div>
                <div className="chapter-title-group">
                    {chapter.sectionTitle && (
                        <span className="section-label">{isBengali ? chapter.sectionTitle.bn : chapter.sectionTitle.en}</span>
                    )}
                    <h2 className={`chapter-title ${isBengali ? 'bengali-text' : ''}`}>
                        {isBengali ? chapter.chapterTitle.bn : chapter.chapterTitle.en}
                    </h2>
                </div>
            </header>

            {/* Preview Footer */}
            <footer className="chapter-preview-footer">
                <span className={`preview-insight ${isBengali ? 'bengali-text' : ''}`}>
                    {isBengali ? chapter.coreInsights[0]?.title.bn : chapter.coreInsights[0]?.title.en}
                </span>
            </footer>
        </article>
    );
}
