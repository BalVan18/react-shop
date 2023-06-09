import '../../styles/layout/header.sass';

import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import english from "../../img/en.png";
import russian from "../../img/ru.png"

import {useCallback, useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEventListener} from "../../hooks/useEventListener";
import { useTranslation } from 'react-i18next';

import Button from "../Button";
import { NavLink, Link } from 'react-router-dom';
import {setLang} from "../../store/slice/langSlice";

function Header() {

  let themeFromLocalStorage = localStorage.getItem('theme');

  useEffect(() => {
    themeFromLocalStorage === 'dark'
        ? document.body.classList.add('themeDark')
        : document.body.classList.remove('themeDark')
  }, [themeFromLocalStorage])

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(themeFromLocalStorage !== null ? themeFromLocalStorage : 'light');

  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  const { t, i18n } = useTranslation()
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const cb = useCallback((e: { target: { closest: (arg0: string) => HTMLElement }; }) => {
    if (!e.target.closest('.header')) closeMenu()
  }, [])

  useEventListener('click', cb, isOpen)

  const switchTheme = () => {
    document.body.classList.remove('themeDark');
    setTheme((prev) => {
      if(prev === 'light'){
        document.body.classList.add('themeDark');
        localStorage.setItem('theme', 'dark');
        return 'dark'
      }else{
        localStorage.setItem('theme', 'light');
        return 'light'
      }
    })
  }

  const switchLang = () => {
    let nextLang = state.lang === 'en' ? 'ru' : 'en'
    dispatch(setLang(nextLang))
    i18n.changeLanguage(nextLang)
    document.documentElement.setAttribute('lang', nextLang)
    localStorage.setItem('lang', nextLang);
  }

  const burgerLines = [1,2,3]

  const menuItems = [
    {
      to: '/',
      text: t('home'),
    },
    {
      to: '/menu',
      text: t('menu'),
    },
    {
      to: '/company',
      text: t('company'),
    },
    {
      to: '/faq',
      text: t('faq'),
    },
    {
      to: '/contacts',
      text: t('contacts'),
    },
    {
      to: '/profile',
      text: t('profile'),
    },
  ]

  return (
    <header className={`header ${isOpen && 'header--active'}`}>
      <div className="header__top top">
        <div className="container container--height-full">
          <div className="top__wrap flex-x-center-y-center">
            <p className="top__text">
              {t('headerTopText')}
            </p>
            {isAuthenticated &&
                <div className="top__right flex">
                    <Button text={t('logOut')} modifier="logout-btn" onClick={logout}></Button>
                    <Link to="/profile" className="top__link" onClick={closeMenu}><img className='top__photo' src={user?.picture} alt={user?.name}/></Link>
                </div>
            }
          </div>
            {theme === 'dark'
                ? <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="theme-switcher" onClick={switchTheme} fill="#FFFFFF"><path d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287Z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="theme-switcher" onClick={switchTheme}><path d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z"/></svg>
            }
            {state.lang === 'en'
                ? <img className='lang-switcher' src={russian} alt="Russian" onClick={switchLang}/>
                : <img className='lang-switcher' src={english} alt="Английский" onClick={switchLang}/>
            }
        </div>
      </div>
      <div className="container">
        <div className="header__bottom bottom flex-x-between">
          <div className="header__logo">
            <Link to="/" className="logo" onClick={closeMenu}><img className='logo__img' src={logo} alt={t('logoAlt')} /></Link>
          </div>
          <nav className={`header__nav nav ${!isAuthenticated && 'guest'}`}>
            <div className="nav__burger burger flex-x-between-y-center flex--column" onClick={clickHandler}>
              {burgerLines.map(line => <span className={`burger__line line-${line}`} key={line}></span>)}
            </div>
            <ul className="nav__list flex-x-between-y-center">
              {!isAuthenticated
                ? <li className="nav__item nav__item--short-list"><Button text={t('logIn')} modifier="login-btn" onClick={loginWithRedirect}></Button></li>
                : <>
                    {menuItems.map(item => (
                        <li className="nav__item" key={item.text}>
                          <NavLink to={item.to} className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} onClick={closeMenu}>{item.text}</NavLink>
                        </li>
                    ))}
                    <li className="nav__item nav__item--cart">
                      <Link to="/cart" className="nav__link nav__link--cart flex-x-center-y-center" onClick={closeMenu}>
                        <img className='cart-image' src={cart} alt={t('cart')} />
                        {state.cart.length > 0 && <div className="cart__badge">{state.cart.reduce((acc: number, num: { count: number }) => acc + Number(num.count), 0)}</div>}
                      </Link>
                    </li>
                  </>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
