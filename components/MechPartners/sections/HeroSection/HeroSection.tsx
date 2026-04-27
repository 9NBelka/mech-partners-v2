'use client';

import css from './HeroSection.module.css';
import { BiSolidZap } from 'react-icons/bi';

interface HeroProps {
  t: {
    badge: string;
    titleTop: string;
    titleBottom: string;
    descriptionBrand: string;
    descriptionText: string;
    button: string;
    note: string;
  };
}

export default function HeroSection({ t }: HeroProps) {
  return (
    <section className={css.hero}>
      <div className={css.contentWrapper}>
        <div className={css.content}>
          <span className={css.badge}>{t.badge}</span>
          <h1 className={css.title}>
            <span className={css.gradient}>{t.titleTop}</span>
            <br />
            <span className={css.white}>{t.titleBottom}</span>
          </h1>
          <img src='/images/frame_mobile.webp' alt='MechOrbit' className={css.frame} />
          <p className={css.description}>
            <span className={css.subDescription}>{t.descriptionBrand}</span> — {t.descriptionText}
          </p>
          <button
            className={css.button}
            onClick={() => {
              window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=forbludov@gmail.com&su=Запит з сайту Mech.Partners',
                '_blank',
              );
            }}>
            <BiSolidZap className={css.iconZap} />
            {t.button}
          </button>
          <p className={css.note}>{t.note}</p>
        </div>
        <div className={css.imageWrapper}>
          <img
            src='/images/manx1.webp'
            srcSet='/images/manx1.webp 1x, /images/manx2.webp 2x'
            alt='MechOrbit'
            className={css.image}
          />
          <img
            src='/images/14x1.webp'
            srcSet='/images/14x1.webp 1x, /images/14x2.webp 2x'
            alt='rating'
            className={css.overlayTop}
          />
          <img
            src='/images/lid47x1.webp'
            srcSet='/images/lid47x1.webp 1x, /images/lid47x2.webp 2x'
            alt='statistic'
            className={css.overlayTopSecond}
          />
          <img
            src='/images/lid120x1.webp'
            srcSet='/images/lid120x1.webp 1x, /images/lid120x2.webp 2x'
            alt='profit'
            className={css.overlayTopThird}
          />
          <img
            src='/images/carx1.webp'
            srcSet='/images/carx1.webp 1x, /images/carx2.webp 2x'
            alt='app'
            className={css.overlayCenter}
          />
          <img
            src='/images/btnx1.webp'
            srcSet='/images/btnx1.webp 1x, /images/btnx2.webp 2x'
            alt='integration'
            className={css.overlayBottom}
          />
          <div className={css.mechOrbitLabel}>
            <span className={css.mech}>MECH</span>
            <span className={css.orbit}>ORBIT</span>
          </div>
          <div className={css.connected}>Connected</div>
        </div>
      </div>
    </section>
  );
}
