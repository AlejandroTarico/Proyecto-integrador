import { useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { useEffect } from 'react';


function Card(props) {
   const{id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}= props; //Estoy haciendo un distroctoring al props
   
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props) 
      setIsFav(!isFav)
   }

   return (
      <div className={style.containerCard}>
      {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
      }
         <div className={style.containerText}>
         <Link to={`/detail/${id}`}>
            <h2 className={style.tamañoText}>{name}</h2>
         </Link>
            <button className={style.cierreCard} onClick={()=>{onClose(id);} }>X</button>
         </div>
         <img className={style.img} src={image} alt='' />
         <div className={style.containerText}>
            <h2 className={style.tamañoText}>{status}</h2>
            <h2 className={style.tamañoText}>{species}</h2>
            <h2 className={style.tamañoText}>{gender}</h2>
         </div>
            <h2 className={style.tamañoText}>{origin}</h2>
      </div>
   );
};
   const mapDispatchToProps = (dispatch) => {
      return {
         addFav: (characters) => {
            dispatch(addFav(characters))
         },
         removeFav: (id) => {
            dispatch(removeFav(id))
         }
      }
   }
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card); 