import style from "./Card.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

export default function Card({id, name, species, gender, origin, image, onClose, status}) {
   const dispatch= useDispatch();
   const [isFav, setIsFav] = useState(false);
   const myFavorites= useSelector(state => state.myFavorites)
   const handleFavorite =()=>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({id, name, species, gender, origin, image, onClose, status}));
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         <div className={style.buttons}>
         {isFav ? 
         <button className={style.favbutton} onClick={handleFavorite}>❤️</button>  : 
         
         <button className={style.favbutton} onClick={handleFavorite}>🤍</button>
         
         }
         <button className={style.closeButton} onClick={()=> onClose(id)} >X</button>
         </div>

         <Link to={`/detail/${id}`}>
         <h2>Name: {name}</h2>
         </Link>
         <img className={style.imagen} src={image} alt='' /> 
         <h2>Status: {status}</h2>
         <h2>Species: {species} </h2>
         <h2>Gender: {gender}</h2>
         
        
      </div>
   );
}
