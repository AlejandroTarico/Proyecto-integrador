import style from './SearchBar.module.css'
import { useState } from 'react';



export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   };
   const {onSearch} = props; // Hago un distroctoring

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSearch(id);
      }
   };


   return (
      <div className={style.searchStyle}>
         <input className={style.inputSearch} onChange = {handleChange} value={id} placeholder='Ingresá un nombre' type='search' onKeyDown={handleKeyDown}/>
         <button  className={style.buttonSearch} onClick = {() => {onSearch(id)}} type="submit">Agregar</button>
      </div>
   );
}
