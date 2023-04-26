import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER} from "./action-types";
import axios from "axios"

export const addFavorite= (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: ADD_FAVORITE,
               payload: data,
            });
         });
      };
};


export const deleteFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return (dispatch) => {
         axios.delete(endpoint).then(({ data }) => {
            return dispatch({
               type: DELETE_FAVORITE,
               payload: data,
         });
         });
      };
}

export const filterCards = (gender)=>{
    return{ type: FILTER, payload: gender }
}

export const orderCards=(id) =>{
    return { type: ORDER, payload: id}
}
