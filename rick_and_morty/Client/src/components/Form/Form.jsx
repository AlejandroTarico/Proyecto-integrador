import React from 'react'
import style from './Form.module.css'
import { useState } from 'react'
import validate from './validation'

const Form = (props) => {
    const [userData, setuserData] = useState({
        email: "",  
        password: "",
    });
    const [errors, setErrors] = useState({
    });


    const handleChange = (event) => {
        const property = event.target.name;
        console.log(property);
        const value = event.target.value;

        setuserData({...userData, [property]: value});
        setErrors(validate({ ...userData, [property]: value }));
    }

    const submitHandler = (event) => {
		event.preventDefault(); 
        props.login(userData);
    };



  return (
    <form onSubmit={submitHandler}>
        <div className={style.targett}>
            <img  alt="" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} />
            {errors.email_1 ?
                (<p className={style.texalert}> {errors.email_1}</p>) :
             errors.email_2 ?
                (<p className={style.texalert}> {errors.email_2}</p>) :
        
                (<p className={style.texalert}> {errors.email_3}</p>) 
            }
            
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
            {errors.password_1 ?
                (<p className={style.texalert}> {errors.password_1}</p>) :
             errors.password_2 ?
                (<p className={style.texalert}> {errors.password_2}</p>) :
             errors.password_3 ?
                (<p className={style.texalert}> {errors.password_3}</p>) :

                (<p className={style.texalert}> {errors.password_4}</p>) 

            }
            
            
            <button className={style.buttomForm} type="submit">Ingresar</button>
        </div>
    </form>

  )
}

export default Form