'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import css from './Header.module.css';

interface HeaderProps {
  lang: string;
  t: { whyWe: string; contacts: string };
}

const LANGS = ['ua', 'ru', 'en'];

export default function Header({ lang, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const changeLanguage = (newLang: string) => {
    localStorage.setItem('preferredLang', newLang);
    const newPath = pathname.replace(/^\/(ua|ru|en)\b/, '') || '/';
    router.push(`/${newLang}${newPath === '/' ? '' : newPath}`);
  };

  return (
    <header className={`${css.header} ${isScrolled ? css.scrolled : ''}`}>
      <div className={css.contentWrapper}>
        <a href={`/${lang}`} className={css.logoText}>
          <img src='/images/logo.svg' alt='MechOrbit Partners' />
        </a>

        <ul className={css.languageBlock}>
          {LANGS.map((l) => (
            <li
              key={l}
              className={`${css.languageItem} ${l === lang ? css.activeLanguage : ''}`}
              onClick={() => changeLanguage(l)}>
              {l.toUpperCase()}
            </li>
          ))}
        </ul>

        <nav className={css.navigation}>
          <li
            className={`${css.link} ${isActive === 'whyWe' ? css.activeLink : ''}`}
            onClick={() => {
              scrollToSection('whyWe');
              setIsActive('whyWe');
            }}>
            {t.whyWe}
          </li>
          <li
            className={`${css.link} ${isActive === 'contacts' ? css.activeLink : ''}`}
            onClick={() => {
              scrollToSection('contacts');
              setIsActive('contacts');
            }}>
            {t.contacts}
          </li>
        </nav>
      </div>
    </header>
  );
}
