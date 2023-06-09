import '../styles/pages/Cart.sass';

import { MouseEvent, useEffect, useState} from "react";
import {deleteFromCart, clearCart} from '../store/slice/cartSlice';
import {useAppDispatch, useAppSelector} from "../store";
import {withAuthenticationRequired} from '@auth0/auth0-react';
import {addDoc, collection, Firestore} from "firebase/firestore";
import {useTranslation} from "react-i18next";

import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Modal from "../components/Modal";
import Delete from "../components/Delete";
import {imagesLoaded} from "../helpers/imagesLoaded";
import Loader from "../components/Loader";

export interface IpageContent {
  calory: string,
  carb: string,
  fat: string,
  id: number,
  image: string,
  price: number,
  protein: string,
  text: string,
  title: string,
  text_en: string,
  title_en: string,
  type: string,
  weight: string,
}

export const Cart = withAuthenticationRequired(({db}: {db: Firestore}) => {

  const [pageContent, setPageContent] = useState<IpageContent[] | []>([])
  const [isOrdered, setIsOrdered] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [imagesLoading, setImagesLoading] = useState(true)

  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleImageChange = (imagesParent: HTMLDivElement | HTMLUListElement) => {
    setImagesLoading(!imagesLoaded(imagesParent))
  }

  let parent: HTMLUListElement

  const sum = () => {
    let prices = state.cart.map((el: { id: number; count: number; }) => (state.goods.find(elem => elem.id === el.id).price * el.count))
    const count = (arr: number[]) => arr.reduce((acc, num) => acc + Number(num), 0);
    return count(prices)
  }

  const deleteFromCartHandler = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, id: number) => {
    if(e.target instanceof Element){
      e.target.closest<HTMLElement>('.cart__item')!.style.opacity = '0';
      setTimeout(() => {
        dispatch(deleteFromCart(id))

        if(localStorage.getItem('cart')){
          let localStorageCart = JSON.parse(localStorage.getItem('cart') || "");
          localStorage.setItem('cart', JSON.stringify(localStorageCart.filter((el: { id: any; }) => el.id !== id)));
          if(localStorage.getItem('cart') === '[]') localStorage.removeItem('cart')
        }
      }, 300)
    }
  }

  useEffect(() => {
    setPageContent(state.cart.map((el: { id: any; }) => state.goods.find(elem => el.id === elem.id)))
  }, [state.cart, state.goods])

  async function saveOrder(){
    await addDoc(collection(db, "orders"), {
      user: state.user.email,
      date: new Date(),
      sum: sum(),
      items: state.cart
    });
  }

  const order = () => {
    closeModal()
    setIsOrdered(true)
    saveOrder().then(() => console.log('order saved'))
    localStorage.removeItem('cart')
    dispatch(clearCart())
  }

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      {imagesLoading && pageContent.length > 0 && <Loader></Loader>}
      <section className="cart">
        <h2 className="cart__title section__title text-color">{t('cartTitle')}</h2>
        <div className="cart__main flex-x-around">
          {!isOrdered
            ?
              <>
                <ul className="cart__list flex--column flex-x-between" ref={elem => parent = elem as HTMLUListElement}>
                  {pageContent.length > 0
                    ?
                    pageContent.map(el =>
                      <li className="cart__item flex" key={el.id}>
                        <div className="cart__product product flex-x-between">
                          <img className="product__img" src={el.image} alt={state.lang === 'ru' ? el.title : el.title_en} onLoad={() => handleImageChange(parent)} onError={() => handleImageChange(parent)}/>
                          <div className="product__wrap flex--column flex-x-around-y-center">
                            <p className="product__name">{state.lang === 'ru' ? el.title : el.title_en}</p>
                            <div className={`flex-x-between-y-center product__price-wraper ${el.id}`}>
                              <Counter
                                  count={state.cart.find((elem: { id: number }) => elem.id === el.id) ? state.cart.find((elem: { id: number }) => elem.id === el.id).count : 0}
                                  elementId={el.id}
                                  deleteHandler={(e, id) => deleteFromCartHandler(e, id)}></Counter>
                              <p className="product__price text-color">{el.price * (state.cart.find((elem: { id: number }) => elem.id === el.id) ? state.cart.find((elem: { id: number }) => elem.id === el.id).count : 0)} {t('currency')}</p>
                            </div>
                            <Delete parentClass="product__delete" onClick={e => deleteFromCartHandler(e, el.id)}/>
                          </div>
                        </div>
                      </li>
                    )
                    :
                    <>
                      <li className="cart__text section__text">{t('emptyCartText')}</li>
                      <li className="cart__btn-wrapper flex-x-around">
                        <Link to="/Home" className="btn cart-btn">{t('emptyCartHomeBtn')}</Link>
                        <Link to="/menu" className="btn cart-btn">{t('emptyCartMenuBtn')}</Link>
                      </li>
                    </>
                  }
                </ul>
                <div className="cart__total total flex-y-center flex--column">
                  <h3 className="total__title text-color">{t('totalTitle')}</h3>
                  <div className="total__wrapper flex-x-around">
                    <p className="total__count">{state.cart.reduce((acc: number, num: { count: number }) => acc + Number(num.count), 0)} {t('totalCount')}</p>
                    <p className="total__price">{t('totalPrice')} <span className="text-color">{sum()} {t('currency')}</span></p>
                  </div>
                  <Button text={t('makeOrder')} disabled={pageContent.length > 0 ? false : true} onClick={openModal}></Button>
                </div>
              </>
            :
              <h2 className="cart__title section__title section__title--success">{t('successCartTitle')}</h2>
          }
        </div>
        <Modal isVisible={showModal} onClose={closeModal} order={order} userCart={pageContent} sum={sum()}></Modal>
      </section>
    </>
  )
})