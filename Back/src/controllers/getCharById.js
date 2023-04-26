const axios= require("axios")

const getCharById = (req, res) =>{
    const {id} = req.params;


    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(result=> result.data)
        .then(data=>{
            if(data.name){let character= {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                status: data.status,
                image: data.image
            }
            return res.status(200).json({character})
            }
            return res.status(404).send("Not found")
        })
        .catch(err=>{
            res.status(500).json({error: err.message})
        })
}


module.exports= {
    getCharById
}