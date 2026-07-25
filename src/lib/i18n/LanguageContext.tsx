'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from 'react';
import { translations, Language, TranslationType } from './translations';

interface LanguageContextProps {
  language: Language;
  t: TranslationType;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const STORAGE_KEY = 'tb-language';
const DEFAULT_LANGUAGE: Language = 'de';

/* The chosen language lives in localStorage, i.e. outside React. Reading it
   through useSyncExternalStore keeps the server render ('de') and the
   hydration pass in sync, then swaps in the stored preference. */

let cached: Language | undefined;
const listeners = new Set<() => void>();

function getSnapshot(): Language {
  if (cached === undefined) {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    cached = stored === 'en' || stored === 'de' ? stored : DEFAULT_LANGUAGE;
  }
  return cached;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function store(language: Language) {
  cached = language;
  window.localStorage.setItem(STORAGE_KEY, language);
  listeners.forEach((listener) => listener());
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => store(lang), []);
  const toggleLanguage = useCallback(
    () => store(getSnapshot() === 'de' ? 'en' : 'de'),
    []
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
