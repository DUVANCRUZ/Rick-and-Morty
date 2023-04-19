const http= require("http");
const characters= require("../utils/data");

http.createServer((res, req) => {
    if(req.url.includes("rickandmorty/character")){
        let id= req.url.split("/").at(-1);

        let charFilter= characters.find((char) => char.id === Number(id));
        
        res.writeHead(200, {"Content-type" : "application/json"}).end(JSON.stringify(charFilter))

    }
}).listen(3001, "localhost")