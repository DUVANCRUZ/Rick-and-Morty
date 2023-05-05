const { HttpStatusCode } = require("axios");
const { User, Favorite}= require("../DB_connection")





const postFav= async (req, res)=>{
    const {id, name, gender, species, status, image}= req.body;
    console.log(name)
    try{
        if( !id, !name, !image) throw Error("faltan datos por completar");
        const character={
            id,
            name,
            gender,
            species,
            status,
            image,
        }
        console.log(character)
       const char = await Favorite.create(character)
       const favorites= await Favorite.findAll()
       
       console.log(char)
       console.log(favorites)
    return res.status(200).json(favorites);

    }catch(error){
        console.log(error.message)
        return res.status(400).json({error: error.message})

    }
   
}

const deleteFav= async(req, res)=>{
    const {id}= req.params;
    try {
        if(!id) throw Error("No se definidio el ID");

        const char= await Favorite.findByPk(id);
        if(char){
            await Favorite.destroy({
                where:{
                    id
                }
            })
        }
        const favorites= await Favorite.findALL()

        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports={
    postFav,
    deleteFav
}