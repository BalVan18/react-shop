import '../styles/pages/Home.sass';
import '../styles/components/slider.sass';

import useAnimationState from "../hooks/useAnimationState";
import {useRef, useState} from "react";
import {imagesLoaded} from "../helpers/imagesLoaded";
import { useTranslation } from 'react-i18next';

import ClientsCard from "../components/ClientsCard";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import Loader from "../components/Loader";
import { CSSTransition } from 'react-transition-group';
import { Trans } from 'react-i18next';

import trustpilot from "../img/trustpilot.webp";
import homeDecorate from "../img/home-decorate.webp";

function Home() {

  const animationState = useAnimationState();
  const nodeRef = useRef(null);
  const secondNodeRef = useRef(null);
  const { t } = useTranslation();

  const [imagesLoading, setImagesLoading] = useState(true)

  const handleImageChange = (imagesParent: HTMLDivElement | HTMLUListElement) => {
    setImagesLoading(!imagesLoaded(imagesParent))
  }

  let parent: HTMLDivElement,
      parent2: HTMLDivElement,
      parent3: HTMLUListElement;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      {imagesLoading && <Loader></Loader>}
      <CSSTransition
        classNames="animation"
        in={animationState}
        timeout={700}
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        <section className="home flex-x-between-y-center" ref={nodeRef}>
          <div className="home__left flex--column">
            <h1 className="home__title section__title">
              <Trans i18nKey="homeTitle">
                Beautiful food & takeaway, <span className="text-color">delivered</span> to your door.
              </Trans>
            </h1>
            <p className="home__text section__text">{t('homeText')}</p>
            <Link to="/menu" className="btn home-btn">{t('homeBtn')}</Link>
            <div className="home__rate rate" ref={elem => parent = elem as HTMLDivElement}>
              <img className="rate__img" src={trustpilot} alt='Trustpilot' onLoad={() => handleImageChange(parent)} onError={() => handleImageChange(parent)}/>
              <p className="rate__text">
                <Trans i18nKey="rateText"><span className="text-color">4.8 out of 5</span> based on 2000+ reviews</Trans>
              </p>
            </div>
          </div>
          <div className="home__right" ref={elem => parent2 = elem as HTMLDivElement}>
            <img src={homeDecorate} alt={t('homeImgAlt')} onLoad={() => handleImageChange(parent2)} onError={() => handleImageChange(parent2)}/>
          </div>
        </section>
      </CSSTransition>
      <CSSTransition
          classNames="animation"
          in={animationState}
          timeout={700}
          mountOnEnter
          unmountOnExit
          nodeRef={secondNodeRef}
      >
        <section className="clients" ref={secondNodeRef}>
          <h2 className="clients__title section__title text-color">{t('clientsTitle')}</h2>
          <ul className="clients__wrap flex-x-between" ref={elem => parent3 = elem as HTMLUListElement}>
            <ClientsCard tag="li" handleImageChange={() => handleImageChange(parent3)} parentClass='clients__card'/>
            <ClientsCard tag="li" handleImageChange={() => handleImageChange(parent3)} parentClass='clients__card'/>
            <ClientsCard tag="li" handleImageChange={() => handleImageChange(parent3)} parentClass='clients__card'/>
          </ul>
          <Slider {...settings}>
            <ClientsCard tag="div" handleImageChange={() => handleImageChange(parent3)} parentClass='clients__card'/>
            <ClientsCard tag="div" handleImageChange={() => handleImageChange(parent3)} parentClass='clients__card'/>
            <ClientsCard tag="div" handleImageChange={() => handleImageChange(parent3)} parentClass='clients__card'/>
          </Slider>
        </section>
      </CSSTransition>
    </>
  );
}

export default Home;