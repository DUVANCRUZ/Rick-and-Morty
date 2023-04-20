const axios= require("axios")

const getCharById = (res, id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(result=> result.data)
        .then(data=>{
            let character= {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                status: data.status,
                image: data.image
            }
            return res
            .writeHead(200, {"Content-type":"application/json"})
            .end(JSON.stringify(character))
        })
        .catch(err=>{
            return res
            .writeHead(500, {"Content-type":"text/plain"} )
            .end(err.message)
        })
}


module.exports= {
    getCharById
}