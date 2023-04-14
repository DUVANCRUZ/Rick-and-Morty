import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import style from "./Detail.module.css"

const Detail=()=>{
  const {detailId}= useParams();
  const [character, setCharacter] =useState({});
  const URLBASE= "https://be-a-rym.up.railway.app/api/character";
  const KEY= "16f6062dc1ba.d6bbc5810b692bf4707a"
  useEffect(() => {
    axios(`${URLBASE}/${detailId}?key=${KEY}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [detailId])
    return(
        <div className={style.container}>
            <div className={style.description}>
            <h2>{character?.name}</h2>
            <p>Status= {character?.status}</p>
            <p>Species= {character?.species}</p>
            <p>Gender={character?.gender}</p>
            <p>Origin= {character?.origin?.name}</p>
            <button className={style.button}>
                 <Link className={style.Link} to="/home"> Volver a Inicio</Link>
           </button>
           </div>
           <div className={style.image}>
           <img src={character?.image} alt={character.name} />
           </div>

        </div>
         
    )
}
export default Detail