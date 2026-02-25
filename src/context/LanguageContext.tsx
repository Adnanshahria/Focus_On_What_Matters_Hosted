import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    isBengali: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    toggleLanguage: () => { },
    isBengali: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'bn' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, isBengali: language === 'bn' }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
