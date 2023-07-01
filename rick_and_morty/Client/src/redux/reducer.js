

const inicialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state= inicialState, action) => {
    switch (action.type){
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        // case 'ADD_FAV':            
        //     let favorite = state.allCharacters;
        //         favorite.push(action.payload)
        //         return {...state, myFavorites: favorite, allCharacters: favorite};
        
        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload };    
            
        
            // let favorite1 = state.myFavorites.filter((char) => {
            //     return char.id !== Number(action.payload)
            // });
            // return {...state, myFavorites: favorite1}
        
        case 'FILTER':
            let copy = state.allCharacters.filter((char) => {
                return char.gender === action.payload;
            });
            return {...state, myFavorites: copy};
        
        case 'ORDER':
            let orden = state.allCharacters.sort((a,b) => {
                return action.payload === 'A' ? a.id - b.id : b.id - a.id;
            });
            return {...state, myFavorites: orden};

        default:
            return state
    }
}
export default rootReducer;