'use client';

import { useEffect, useState } from 'react';
import css from './ScrollToTopBtn.module.css';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className={css.scrollTopBtn}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <FaChevronUp />
    </button>
  );
}
