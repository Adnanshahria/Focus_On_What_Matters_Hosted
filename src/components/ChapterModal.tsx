import { useState, useEffect, useRef } from 'react';
import type { Chapter } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface ChapterModalProps {
    chapter: Chapter;
    onClose: () => void;
    onPrevChapter?: () => void;
    onNextChapter?: () => void;
    hasPrevChapter?: boolean;
    hasNextChapter?: boolean;
}

// Tab order for swipe navigation
const TAB_ORDER: Array<'insights' | 'practice' | 'reflection' | 'quotes'> = [
    'insights', 'practice', 'reflection', 'quotes'
];

export function ChapterModal({ chapter, onClose, onPrevChapter, onNextChapter, hasPrevChapter, hasNextChapter }: ChapterModalProps) {
    const { isBengali } = useLanguage();
    const [activeTab, setActiveTab] = useState<'insights' | 'quotes' | 'practice' | 'reflection'>('insights');
    const [tabTransition, setTabTransition] = useState<'none' | 'slide-left' | 'slide-right'>('none');

    // Pull-to-change-chapter state
    const [pullDirection, setPullDirection] = useState<'up' | 'down' | null>(null);
    const [pullProgress, setPullProgress] = useState(0); // 0 to 100

    // Swipe handling refs
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    const touchStartY = useRef<number>(0);
    const touchEndY = useRef<number>(0);
    const isSwiping = useRef<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    // Pull-hold timer refs
    const pullTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const pullStartTime = useRef<number>(0);
    const HOLD_DURATION = 2500; // 2.5 seconds

    const clearPullTimer = () => {
        if (pullTimerRef.current) {
            clearInterval(pullTimerRef.current);
            pullTimerRef.current = null;
        }
        setPullDirection(null);
        setPullProgress(0);
        pullStartTime.current = 0;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
        touchEndX.current = touch.clientX;
        touchEndY.current = touch.clientY;
        isSwiping.current = true;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isSwiping.current) return;
        const touch = e.touches[0];
        touchEndX.current = touch.clientX;
        touchEndY.current = touch.clientY;

        const diffY = touchStartY.current - touchEndY.current;
        const diffX = touchStartX.current - touchEndX.current;
        const isVerticalPull = Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 30;

        if (isVerticalPull) {
            const direction = diffY > 0 ? 'up' : 'down';
            const canNavigate = (direction === 'up' && hasNextChapter) || (direction === 'down' && hasPrevChapter);

            if (canNavigate) {
                // Start or continue the pull timer
                if (pullDirection !== direction) {
                    clearPullTimer();
                    setPullDirection(direction);
                    pullStartTime.current = Date.now();

                    pullTimerRef.current = setInterval(() => {
                        const elapsed = Date.now() - pullStartTime.current;
                        const progress = Math.min((elapsed / HOLD_DURATION) * 100, 100);
                        setPullProgress(progress);

                        if (progress >= 100) {
                            clearPullTimer();
                            // Trigger chapter change
                            if (direction === 'up' && onNextChapter) {
                                onNextChapter();
                            } else if (direction === 'down' && onPrevChapter) {
                                onPrevChapter();
                            }
                        }
                    }, 50);
                }
            }
        } else {
            // Not a vertical pull, clear the timer
            if (pullDirection) {
                clearPullTimer();
            }
        }
    };

    const handleTouchEnd = () => {
        if (!isSwiping.current) return;
        isSwiping.current = false;

        // Clear pull timer if not completed
        clearPullTimer();

        const swipeThreshold = 50;
        const diffX = touchStartX.current - touchEndX.current;
        const diffY = touchStartY.current - touchEndY.current;

        // Only process horizontal swipes for tabs
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
            const currentIndex = TAB_ORDER.indexOf(activeTab);

            if (diffX > 0) {
                // Swiped left - go to next tab
                const nextIndex = (currentIndex + 1) % TAB_ORDER.length;
                setTabTransition('slide-left');
                setTimeout(() => {
                    setActiveTab(TAB_ORDER[nextIndex]);
                    setTabTransition('none');
                }, 150);
            } else {
                // Swiped right - go to previous tab
                const prevIndex = (currentIndex - 1 + TAB_ORDER.length) % TAB_ORDER.length;
                setTabTransition('slide-right');
                setTimeout(() => {
                    setActiveTab(TAB_ORDER[prevIndex]);
                    setTabTransition('none');
                }, 150);
            }
        }
    };

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (pullTimerRef.current) {
                clearInterval(pullTimerRef.current);
            }
        };
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
            // Restore scroll position logic if needed, but usually 'unset' works
        };
    }, []);

    return (
        <div className="chapter-modal-overlay" onClick={onClose}>
            <div className="chapter-modal card-glass" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <div className="chapter-title-group">
                        <div className="modal-chapter-badge">{isBengali ? 'অধ্যায়' : 'Chapter'} {chapter.id}</div>
                        {chapter.sectionTitle && (
                            <span className="section-label">{isBengali ? chapter.sectionTitle.bn : chapter.sectionTitle.en}</span>
                        )}
                        <h2 className={`chapter-title ${isBengali ? 'bengali-text' : ''}`}>
                            {isBengali ? chapter.chapterTitle.bn : chapter.chapterTitle.en}
                        </h2>
                    </div>
                    <button className="close-btn" onClick={onClose} aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div
                    className="modal-content"
                    ref={contentRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Pull Progress Indicator */}
                    {pullDirection && (
                        <div className={`pull-indicator pull-indicator--${pullDirection}`}>
                            <div className="pull-indicator__bar">
                                <div
                                    className="pull-indicator__progress"
                                    style={{ width: `${pullProgress}%` }}
                                />
                            </div>
                            <span className="pull-indicator__text">
                                {pullDirection === 'up'
                                    ? (isBengali ? '↑ পরবর্তী অধ্যায়' : '↑ Next Chapter')
                                    : (isBengali ? '↓ আগের অধ্যায়' : '↓ Previous Chapter')}
                            </span>
                        </div>
                    )}
                    {/* Tab Navigation */}
                    <nav className="content-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'insights' ? 'active' : ''} ${isBengali ? 'bengali-text' : ''}`}
                            onClick={() => setActiveTab('insights')}
                        >
                            {isBengali ? 'মূল অন্তর্দৃষ্টি' : 'Core Insights'}
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''} ${isBengali ? 'bengali-text' : ''}`}
                            onClick={() => setActiveTab('practice')}
                        >
                            {isBengali ? 'অনুশীলন' : 'Practice'}
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'reflection' ? 'active' : ''} ${isBengali ? 'bengali-text' : ''}`}
                            onClick={() => setActiveTab('reflection')}
                        >
                            {isBengali ? 'পর্যালোচনা' : 'Reflection'}
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'quotes' ? 'active' : ''} ${isBengali ? 'bengali-text' : ''}`}
                            onClick={() => setActiveTab('quotes')}
                        >
                            {isBengali ? 'সুবর্ণ উদ্ধৃতি' : 'Golden Quotes'}
                        </button>
                    </nav>

                    {/* Tab Content */}
                    <div className={`tab-content tab-content--${tabTransition} ${isBengali ? 'bengali-text' : ''}`}>
                        {activeTab === 'insights' && (
                            <div className="insights-grid">
                                {chapter.coreInsights.map((insight, idx) => (
                                    <div key={idx} className="insight-card">
                                        <h4 className="insight-title">{isBengali ? insight.title.bn : insight.title.en}</h4>
                                        <p className="insight-content">{isBengali ? insight.content.bn : insight.content.en}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'quotes' && (
                            <div className="golden-quotes-section">
                                {chapter.goldenQuotes.map((quoteObj, idx) => (
                                    <blockquote key={idx} className="quote">
                                        <p className="quote-text">{isBengali ? quoteObj.quote.bn : quoteObj.quote.en}</p>
                                        <footer className="quote-author">— {isBengali ? quoteObj.author.bn : quoteObj.author.en}</footer>
                                    </blockquote>
                                ))}
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="practice-section">
                                <div className="practice-header">
                                    <span className="practice-icon">🎯</span>
                                    <h3>{isBengali ? 'অনুশীলন' : 'Practice'}</h3>
                                </div>
                                <p className="practice-content">{isBengali ? chapter.practicalApplication.bn : chapter.practicalApplication.en}</p>
                            </div>
                        )}

                        {activeTab === 'reflection' && (
                            <div className="reflection-section">
                                <div className="critical-reflection">
                                    <h4>{isBengali ? 'সমালোচনামূলক বিশ্লেষণ' : 'Critical Analysis'}</h4>
                                    <p>{isBengali ? chapter.criticalReflection.bn : chapter.criticalReflection.en}</p>
                                </div>
                                <div className="outcomes-grid">
                                    <div className="outcome-card individual">
                                        <span className="outcome-icon">👤</span>
                                        <h5>{isBengali ? 'ব্যক্তিগত' : 'Individual'}</h5>
                                        <p>{isBengali ? chapter.expectedOutcomes.individual.bn : chapter.expectedOutcomes.individual.en}</p>
                                    </div>
                                    <div className="outcome-card social">
                                        <span className="outcome-icon">👥</span>
                                        <h5>{isBengali ? 'সামাজিক' : 'Social'}</h5>
                                        <p>{isBengali ? chapter.expectedOutcomes.social.bn : chapter.expectedOutcomes.social.en}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
