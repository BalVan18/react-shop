import React, {useEffect, useState} from 'react'
import { useDebounce } from '../hooks/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from "../store";
import Card from '../components/Card';

function Fullmenu() {

    const [search, setSearch] = useState('');
    const debounced = useDebounce(search, 0);
    const state = useSelector((state) => state)

    state.setGoods.map(el => console.log(el.image))
    // useEffect(() => {

    //   if(debounced.length > 0) console.log(debounced)
      
    // }, [debounced])  

  return (
    <div>
        <h2 className="section__title menu__title text-color">Browse our menu</h2>
            <p className="menu__text">Use our menu to place an order online, or phone our store to place a pickup order. Fast and fresh food.</p>
            <div className="menu__btn">
              <button className="btn__burger">Burgers</button>
              <button className="btn__slider">Sides</button>
              <button className="btn__drinks">Drinks</button>
              <input type="text" name="search" placeholder='type your search here...' value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
        <ul className='card__wrap'>
          {state.setGoods?.length > 0 
            ?
            state.setGoods.map(el => <Card key={Math.random()} title={el.title} image={el.image} price={el.price} text={el.text}/>)
            :
              <></>
          }
        </ul>
    </div>
  )
}

export default Fullmenu