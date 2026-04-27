import css from './WhatWeOfferSection.module.css';
import { LuChartColumn, LuLink2 } from 'react-icons/lu';

interface OfferProps {
  t: {
    title: string;
    subtitle: string;
    nativeTitle: string;
    nativeText: string;
    aiTitle: string;
    aiText: string;
  };
}

export default function WhatWeOfferSection({ t }: OfferProps) {
  return (
    <section className={css.section}>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>{t.title}</h2>
        <p className={css.subtitle}>{t.subtitle}</p>
        <div className={css.cards}>
          <div className={css.card}>
            <div className={css.iconTitle}>
              <div className={css.iconWrapper}>
                <LuLink2 className={css.iconBlue} />
              </div>
              <h3 className={css.cardTitle}>{t.nativeTitle}</h3>
            </div>
            <p className={css.cardText}>{t.nativeText}</p>
          </div>
          <div className={css.card}>
            <div className={css.iconTitle}>
              <div className={css.iconWrapper}>
                <LuChartColumn className={css.iconGreen} />
              </div>
              <h3 className={css.cardTitle}>{t.aiTitle}</h3>
            </div>
            <p className={css.cardText}>{t.aiText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
