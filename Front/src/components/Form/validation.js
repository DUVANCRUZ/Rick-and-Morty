const validation = (userData) =>{
    let errors={};
    if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.username)){
        errors.username= "E-mail incorrexto, vuelve a intentarlo"
    }
    if(!userData.username) errors.username= "Este campo es obligatorio"
    if(!userData.username.length > 35) errors.username= "El e-mail no puede superar los 35 caracteres"
    if(!userData.password.match((/\d/))) errors.password = "La contraseña debe contener al menos un número"
    if(userData.password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres"
    if(userData.password.length > 10) errors.password = "La contraseña no puede tener mas de 10 caracteres"

    return errors
}
export default validation