
const validate = (userData) => {
    const errors ={};
    if(!userData.email) errors.email_1 = "El nombre de usuario no puede estar vacío";
    
    else if (/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(userData.email)) errors.email_2 = '';
            
    else errors.email_3 = "El nombre de usuario tiene que ser un email";
    
    
    if(!userData.password) errors.password_1 = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    
    else if (/^(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(userData.password)) errors.password_2 = '';
    
    else if (!(/^(?=.*\d).+$/.test(userData.password))) errors.password_3 = "La contraseña tiene que tener al menos un número.";
    
    else errors.password_4 = '';

    return errors; 
};
export default validate