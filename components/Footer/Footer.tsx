import css from './Footer.module.css';

export default function Footer({ copyright }: { copyright: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.contentWrapper}>
        <p className={css.footerLogo}>
          MECH <span className={css.blue}>orbit</span> <span className={css.gray}>Partners</span>
        </p>
        <p className={css.footerText}>
          &copy; {currentYear}
          {copyright}
        </p>
      </div>
    </footer>
  );
}
