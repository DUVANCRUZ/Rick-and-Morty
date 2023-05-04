const { User, Favorite}= require("../DB_connection")


let myFavorites=[];


const postFav= (req, res)=>{
    const character= req.body;

   const char = await Favorite.create(character)
   if(userID){
    const User = await User.findByPk(userID);
    user ? await char.addFavorite(user): null
   }

    return res.status(200).json(char);
}

const deleteFav=(req, res)=>{
    const {id}= req.params;

    myFavorites= myFavorites.filter((favorite)=> favorite.id !== +id);

    return res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}