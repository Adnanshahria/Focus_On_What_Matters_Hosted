import type { ReactNode } from 'react';
import { Search } from './Search';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
    children: ReactNode;
    onSearch?: (chapterId: number) => void;
}

export function Layout({ children, onSearch }: LayoutProps) {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="app-layout">
            {/* Header */}
            <header className="app-header">
                <div className="header-content">
                    <div className="logo-section">
                        <div className="logo-icon">
                            <img src="/logo.png" alt="Stoic Guide Logo" className="logo-img" />
                        </div>
                        <div className="logo-text">
                            <h1>Stoic Guide</h1>
                        </div>
                    </div>

                    <div className="header-actions">
                        <button
                            className="lang-toggle"
                            onClick={toggleLanguage}
                            title={language === 'en' ? 'Switch to Bengali' : 'Switch to English'}
                            aria-label="Toggle language"
                        >
                            <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
                            <span className="lang-divider">/</span>
                            <span className={`lang-option ${language === 'bn' ? 'active' : ''}`}>বাং</span>
                        </button>
                        <Search onResultSelect={onSearch} />
                    </div>
                </div>
            </header>


            {/* Main Content */}
            <main className="app-main">
                {children}
            </main>

            {/* Footer */}
            <footer className="app-footer">
                <div className="footer-content">
                    <p className="copyright-text">
                        © {new Date().getFullYear()} All Rights Reserved by <a href="https://orbitsaas.cloud" target="_blank" rel="noopener noreferrer" className="brand-link">OrbitSaaS</a>
                    </p>
                    <p className="footer-subtext">
                        Based on <em>"Focus on What Matters"</em> by Darius Foroux
                    </p>
                    {language === 'bn' ? (
                        <p className="bengali-text footer-subtext">
                            ৮৩টি অধ্যায় • স্টয়িক দর্শন • বাংলায় সারসংক্ষেপ
                        </p>
                    ) : (
                        <p className="footer-subtext">
                            83 Chapters • Stoic Philosophy • Summarized in English
                        </p>
                    )}
                </div>
            </footer>
        </div>
    );
}
