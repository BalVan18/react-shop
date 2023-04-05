import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Button from "../components/Button";
import { CSSTransition } from 'react-transition-group';
import useAnimationState from "../hooks/useAnimationState";
import React, {useEffect, useRef, useState} from "react";
import emptycart from "../img/empty-cart.webp";
import {Link} from 'react-router-dom';
import {collection, DocumentData, getDocs, query, where, orderBy} from "firebase/firestore";
import {useAppSelector} from "../store";
import Moment from 'react-moment';
import {PatternFormat} from "react-number-format";
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';

export const Profile = withAuthenticationRequired(({db}: { db: any }) => {

    const {logout, user} = useAuth0();
    const animationState = useAnimationState();
    const nodeRef = useRef(null);
    const state = useAppSelector(state => state);

    const [orders, setOrders] = useState([]);

    async function check() {
        const q = query(collection(db, "orders"), where("user", "==", user?.email), orderBy('date', 'desc'));

        let appData: DocumentData[] = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            appData.push(doc.data());
        });

        return appData
    }

    useEffect(() => {
        check().then((res: any) => setOrders(res));
    }, [])


    return (
        <CSSTransition
            classNames="animation"
            in={animationState}
            timeout={700}
            mountOnEnter
            unmountOnExit
            nodeRef={nodeRef}
        >
            <section className='profile' ref={nodeRef}>
                <div className='profile__user'>
                    <img className='user__photo' src={user?.picture} alt={user?.name}/>
                    <h3 className='user__email'>{user?.email}</h3>
                    {/*<p className='user__email'>{user?.name}</p>*/}
                    <form className="profile__form">
                        <input type="text" defaultValue={user?.name !== user?.email ? user?.name : 'Имя'} name="userName" className="user__input"/>
                        <PatternFormat format="+7 (###) ### ## ##" mask="_" className="user__input" name="userPhone" placeholder="Телефон"/>
                        <Button modificator={"edit-btn"} text="save"></Button>
                    </form>
                    <Button modificator={"cart-btn"} text={"Log Out"} onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}></Button>
                </div>
                <div className='profile__history'>
                    <h2 className='section__title text-color'>История заказов</h2>
                    {orders.length > 0
                        ?   <Accordion allowZeroExpanded>
                                {orders.map((el: any) => (
                                    <AccordionItem key={Math.random()}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span>Дата заказа: </span>
                                                <Moment format="YYYY-MM-DD HH:mm">{new Date(el.date.seconds * 1000)}</Moment>
                                                <p>Сумма заказа: {el.sum} ₽</p>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            {el.items.map((elem: any) => (
                                                <p key={Math.random()}>
                                                    <span>{state.goods.map(element => element.id === elem.id ? element.title : null)}</span>
                                                    <span> x {elem.count}</span>
                                                </p>
                                            ))}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                        :   <>
                                <img className="history__img" src={emptycart} alt="Cart is empty"/>
                                <p className="section__text">Ваша история заказов пуста!</p>
                                <Link to="/menu" className="btn home-btn">Сделать заказ</Link>
                            </>
                    }
                </div>
             </section>
         </CSSTransition>
     )
 })