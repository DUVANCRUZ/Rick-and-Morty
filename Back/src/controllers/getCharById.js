const axios= require("axios")

const getCharById = async (req, res) =>{
    try{
        const {id} = req.params;
        const {data}= await axios(`https://rickandmortyapi.com/api/character/${id}`)

        if(!data) throw Error(`Faltan datos del personaje con ID: ${id}`)

        let character= {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            status: data.status,
            image: data.image
        }
        return res.status(200).json({character})
    }catch(error){
        if(error.message.includes("ID")) return res.status(400).send(error.message)
        return res.status(500).json(error.message)
    }
}



module.exports= {
    getCharById
}