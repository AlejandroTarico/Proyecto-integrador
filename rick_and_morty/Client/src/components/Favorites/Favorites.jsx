import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import Card from "../Card/Card";
import style from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions';

const Favorites = (props) => {
    const { myFavorites } = props;
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="">Opción</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <div className={style.containerText}>
                {myFavorites.map((char) => {
                    console.log(char);
                    return (
                        <Card
                            key= {char.id}
                            id= {char.id}
                            name= {char.name}
                            status= {char.species}
                            gender= {char.gender}
                            origin= {char.origin}
                            image= {char.image}
                            outClose= {true}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};
export default connect(mapStateToProps, null)(Favorites);