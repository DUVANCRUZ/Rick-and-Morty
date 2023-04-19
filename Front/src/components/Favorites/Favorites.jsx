import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { filterCards, orderCards } from '../../redux/actions';
import style from "./Favorites.module.css"

export default function Favorites() {
    const {myFavorites} = useSelector(state => state)
    const dispatch= useDispatch();
    
    const handlerOrder =(event) =>{
        dispatch(orderCards(event.target.value))
    }
    const handlerFilter =(event) =>{
        dispatch(filterCards(event.target.value))
    }
    
  return (
    <div>
        <div className={style.selects}>
            <select className={style.select} onChange={handlerOrder}>
                <option className={style.option} value="Order" disabled="disabled">Order By</option>
                <option className={style.option} value="Ascendente">Ascendente</option>
                <option className={style.option} value="Descendente">Descendente</option>
            </select>
            <select className={style.select} onChange={handlerFilter}>
            <option value="Filter" disabled="disabled">Filter By</option>
                <option className={style.option} value="Male">Male</option>
                <option className={style.option} value="Female">Female</option>
                <option className={style.option} value="Unknown">Unknown</option>
                <option className={style.option} value="Genderless">Genderless</option>
            </select>


        </div>
        <div className={style.containerCards}>
        {
            myFavorites.map((character)=>{
                return(
                    

                  
                    <div className={style.container}>
                    <Link to={`/detail/${character.id}`}>
                       <h2>Name: {character.name}</h2>
                       </Link>
                       <img className={style.imagen} src={character.image} alt='' /> 
                       <h2>Status: {character.status}</h2>
                       <h2>Species: {character.species} </h2>
                       <h2>Gender: {character.gender}</h2>
                    </div>
         
     
                )
            })
        }
        </div>
    </div>
  )
}
