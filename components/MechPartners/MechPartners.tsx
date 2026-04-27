import { getT } from '@/lib/i18n';
import Header from '../Header/Header';
import HeroSection from './sections/HeroSection/HeroSection';
import WhatWeOfferSection from './sections/WhatWeOfferSection/WhatWeOfferSection';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import WaySection from './sections/WaySection/WaySection';
import RequestSection from './sections/RequestSection/RequestSection';
import Footer from '../Footer/Footer';
import ScrollToTopBtn from '../ScrollToTopBtn/ScrollToTopBtn';

export default function MechPartners({ lang }: { lang: string }) {
  const t = getT(lang);

  return (
    <div>
      <Header lang={lang} t={t.nav} />
      <main>
        <HeroSection t={t.hero} />
        <WhatWeOfferSection t={t.offer} />
        <WhyChooseUs t={t.whyChoose} />
        <WaySection t={t.way} />
        <RequestSection t={t.request} />
      </main>
      <Footer copyright={t.footer.copyright} />
      <ScrollToTopBtn />
    </div>
  );
}
