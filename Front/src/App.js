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



function App() {
   const [characters, setCharacters]= useState([]);
   const location= useLocation();
   const navigate= useNavigate(); 
   const [access, setAccess] = useState(false)
   const onSearch= async (id)=> {
      if(characters.find((char)=> char.id=== +id)) {
         return alert ("Estas agregando un personaje repetido")
      }
      try {
         const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const {character}=data;
         if (character.name) {
            setCharacters((oldChars) => [...oldChars, character]);
         }
      } catch (error) {
         window.alert('¡No hay personajes con este ID!')
         
      }
      
   }
   const onClose=(id)=>{
      setCharacters(characters.filter((char) => char.id !== id))
   }
   const login= async (userData)=> {
     try {
      const { username, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const{data}= await  axios(URL + `?email=${username}&password=${password}`)
      const { access } = data;
      setAccess(access); 
      access && navigate('/home');
     } catch (error) {
      console.log(error.message)
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
