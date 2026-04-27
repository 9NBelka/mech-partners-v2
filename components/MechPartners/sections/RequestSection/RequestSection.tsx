'use client';

import css from './RequestSection.module.css';
import { FaRegEnvelope } from 'react-icons/fa6';

interface RequestProps {
  t: { title: string; text: string; buttonFull: string; buttonShort: string; note: string };
}

export default function RequestSection({ t }: RequestProps) {
  return (
    <section id='contacts' className={css.section}>
      <div className={css.requestSection}>
        <h2 className={css.requestTitle}>{t.title}</h2>
        <p className={css.centralText}>{t.text}</p>
        <button
          type='button'
          className={css.btn}
          onClick={() => {
            window.open(
              'https://mail.google.com/mail/?view=cm&fs=1&to=forbludov@gmail.com&su=Запит з сайту Mech.Partners',
              '_blank',
            );
          }}>
          <FaRegEnvelope className={css.icon} />
          <span className={css.fullText}>{t.buttonFull}</span>
          <span className={css.shortText}>{t.buttonShort}</span>
        </button>
        <p className={css.bottomText}>{t.note}</p>
      </div>
    </section>
  );
}
