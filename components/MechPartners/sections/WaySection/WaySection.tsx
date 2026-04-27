import css from './WaySection.module.css';
import { LuFileSpreadsheet, LuMousePointerClick } from 'react-icons/lu';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface WayProps {
  t: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Text: string;
    step1Accent: string;
    step2Title: string;
    step2Text: string;
    step2Accent: string;
    step3Title: string;
    step3Text1: string;
    step3Text2: string;
    bottomAccent: string;
    bottomQuestion: string;
  };
}

export default function WaySection({ t }: WayProps) {
  return (
    <section className={css.waySection}>
      <div className={css.contentWrapper}>
        <h2 className={css.wayTitle}>{t.title}</h2>
        <p className={css.subHeader}>{t.subtitle}</p>
        <div className={css.cardsWrapper}>
          <div className={`${css.card} ${css.left}`}>
            <div className={`${css.iconWrapper} ${css.leftIconWrapper}`}>
              <LuFileSpreadsheet className={`${css.icon} ${css.leftIcon}`} />
            </div>
            <div className={css.textWrapper}>
              <p className={css.topText}>{t.step1Title}</p>
              <p className={css.bottomText}>
                {t.step1Text}
                <span className={css.accent}>{t.step1Accent}</span>
              </p>
            </div>
          </div>
          <div className={`${css.card} ${css.central}`}>
            <div className={`${css.iconWrapper} ${css.centralIconWrapper}`}>
              <FaMagnifyingGlass className={`${css.icon} ${css.centralIcon}`} />
            </div>
            <div className={css.textWrapper}>
              <p className={css.topText}>{t.step2Title}</p>
              <div className={css.bottomTextWrapper}>
                <p className={css.bottomText}>{t.step2Text}</p>
                <p className={css.centralAccent}>{t.step2Accent}</p>
              </div>
            </div>
          </div>
          <div className={`${css.card} ${css.left}`}>
            <div className={`${css.iconWrapper} ${css.leftIconWrapper}`}>
              <LuMousePointerClick className={`${css.icon} ${css.leftIcon}`} />
            </div>
            <div className={css.textWrapper}>
              <p className={css.topText}>{t.step3Title}</p>
              <div className={css.bottomTextWrapper}>
                <p className={css.bottomText}>{t.step3Text1}</p>
                <p className={css.bottomText}>{t.step3Text2}</p>
              </div>
            </div>
          </div>
        </div>
        <p className={css.bottomSectionText}>
          <span className={css.bottomAccent}>{t.bottomAccent} </span>
          {t.bottomQuestion}
        </p>
      </div>
    </section>
  );
}
