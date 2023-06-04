import style from './SearchBar.module.css'
import { useState } from 'react';



export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   };
   const {onSearch} = props; // Hago un distroctoring
   return (
      <div className={style.searchStyle}>
         <input className={style.inputSearch} onChange = {handleChange} value={id} placeholder='Ingresá un nombre' type='search' />
         <button className={style.buttonSearch} onClick = {() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}
