import { useState } from "react"
import validation from "./validation"
import style from "./Form.module.css"

const Form = ({login})=>{
    const [userData, setUserData] = useState({
        username: "", 
        password: ""
    })
    const [errors, setErrors] = useState({
        username: "", 
        password: ""
    })
    const handleInputChange= (event)=>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value

        })
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))

    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        login(userData)
    }
    return(
        <form className={style.container} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input className={style.input} type="text" name="username" onChange={handleInputChange} value={userData.username} placeholder="Escribe tu nombre de usuario"/>
            {errors.username && <p style={{color: "red"}} > {errors.username}</p>}
            <label htmlFor="password">Password</label>
            <input  className={style.input} type="password" name="password" onChange={handleInputChange} value={userData.password} placeholder="Escribe tu contraseña"/>
            {errors.password && <p style={{color: "red"}} > {errors.password}</p>}
            <button  className={style.button}>LOGIN</button>


        </form>
    )
}
export default Form