import css from './WhyChooseUs.module.css';
import { GoPeople } from 'react-icons/go';
import { IoCameraOutline } from 'react-icons/io5';
import { PiSquaresFourLight } from 'react-icons/pi';
import { FaRegCheckCircle } from 'react-icons/fa';

interface WhyProps {
  t: {
    label: string;
    title: string;
    subtitle: string;
    clientsTitle: string;
    clientsText: string;
    moneyTitle: string;
    moneyText: string;
    simpleTitle: string;
    simpleText: string;
    bottomText: string;
    requests: string;
    efficiency: string;
    orderTitle: string;
    brand: string;
    delivery: string;
    orderButton: string;
  };
}

export default function WhyChooseUs({ t }: WhyProps) {
  const advantages = [
    {
      icon: <GoPeople />,
      wrapperBgd: 'blue',
      iconColor: 'blueIcon',
      topText: t.clientsTitle,
      bottomText: t.clientsText,
    },
    {
      icon: <IoCameraOutline />,
      wrapperBgd: 'violet',
      iconColor: 'violetIcon',
      topText: t.moneyTitle,
      bottomText: t.moneyText,
    },
    {
      icon: <PiSquaresFourLight />,
      wrapperBgd: 'green',
      iconColor: 'greenIcon',
      topText: t.simpleTitle,
      bottomText: t.simpleText,
    },
  ];

  return (
    <section id='whyWe' className={css.wrapper}>
      <div className={css.contentWrapper}>
        <div className={css.headerWrapper}>
          <p className={css.leftHeader}>{t.label}</p>
          <h2 className={css.mainHeader}>{t.title}</h2>
        </div>
        <p className={css.subHeader}>{t.subtitle}</p>
        <div className={css.advantagesWrapper}>
          <div className={css.leftWrapper}>
            {advantages.map((a, i) => (
              <div key={i} className={css.stringWrapper}>
                <div className={`${css.iconWrapper} ${css[a.wrapperBgd]}`}>
                  <p className={css[a.iconColor]}>{a.icon}</p>
                </div>
                <div className={css.textWrapper}>
                  <p className={css.topText}>{a.topText}</p>
                  <p className={css.bottomText}>{a.bottomText}</p>
                </div>
              </div>
            ))}
            <p className={css.sectionBottomText}>{t.bottomText}</p>
          </div>
          <div className={css.rightWrapper}>
            <div className={css.rightHeaderWrapper}>
              <p className={css.logo}>
                MECH<span className={css.accent}>ORBIT</span>
              </p>
              <div className={css.dotsWrapper}>
                <p className={`${css.dot} ${css.redDot}`}></p>
                <p className={`${css.dot} ${css.yellowDot}`}></p>
                <p className={`${css.dot} ${css.greenDot}`}></p>
              </div>
            </div>
            <div className={css.rightStringWrapper}>
              <div className={css.leftStringWrapper}>
                <FaRegCheckCircle className={css.checkIcon} />
                <p className={css.rightText}>{t.requests}</p>
              </div>
              <p className={css.number}>14</p>
            </div>
            <div className={css.rightStringWrapper}>
              <div className={css.leftStringWrapper}>
                <FaRegCheckCircle className={css.checkIcon} />
                <p className={css.rightText}>{t.efficiency}</p>
              </div>
              <p className={css.number}>94%</p>
            </div>
            <div className={css.rightBottomWrapper}>
              <div>
                <p className={css.rightBottomHeader}>{t.orderTitle}</p>
                <p className={css.rightCentralText}>{t.brand}</p>
                <p className={css.rightBottomText}>{t.delivery}</p>
              </div>
              <button type='button' className={css.btn}>
                {t.orderButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
