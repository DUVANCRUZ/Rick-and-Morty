import { useState,  useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav"
import axios from "axios"
import { Route, Routes, useLocation, useNavigate} from "react-router-dom"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import style from "./App.css"


const URLBASE= "https://be-a-rym.up.railway.app/api/character"
const KEY= "16f6062dc1ba.d6bbc5810b692bf4707a"
function App() {
   const [characters, setCharacters]= useState([]);
   const location= useLocation();
   const navigate= useNavigate(); 
   const [access, setAccess] = useState(false)
   const onSearch=(id)=> {
      if(characters.find((char)=> char.id=== id)) {
         return alert ("Estas agregando un personaje repetido")
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {    
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose=(id)=>{
      setCharacters(characters.filter((char) => char.id !== id))
   }
   const username= "duvandres9820@gmail.com";
   const password= "Asd123"
   const login= (userData) =>{
      if(userData.username === username && userData.password === password){
         setAccess(true);
         navigate("/home")
      }
   }
   useEffect(()=>{
      !access && navigate("/");
   }, [access])
   return (
     
      <div className='App'>
      
     {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
      
      <Routes>
         <Route 
         path="/home" 
         element={<Cards characters={characters} onClose={onClose} />}
         />
         <Route path="/about" element={<About />}/>
         <Route path="/detail/:detailId" element={<Detail />}/>
         <Route path="/favorites" element={<Favorites/>} />
      </Routes>
      

      </div>
   );
}

export default App;
