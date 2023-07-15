import axios from 'axios';
import { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
const Detail = () => {
  const {id} = useParams();
  const [characters, setCharacter] = useState({});
  
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
  
 
  return (
    characters ?
    <div className={style.containerCard}>
      <div className={style.textoDesing}>
        <h2>{characters.name}</h2>
        <h2 >{characters.status}</h2>  
      </div>
      <div className={style.textoDesing}>
        <h2 >{characters.species}</h2>
        <h2 >{characters.gender}</h2>
        <h2 >{characters.origin?.name}</h2>
      </div>
      <img  src={characters.image} alt='' />
    </div> : <h1>Loading...</h1>
  )
}

export default Detail