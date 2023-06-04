

const inicialState = {
    myFavorites: [],
}

const rootReducer = (state= inicialState, action) => {
    switch (action.type){
        case 'ADD_FAV':            
            let favorite = state.myFavorites;
                favorite.push(action.payload)
                return {...state, myFavorites: favorite};
        case 'REMOVE_FAV':
            let favorite1 = state.myFavorites.filter((char) => {
                return char.id !== Number(action.payload)
            });     
            return {...state, myFavorites: favorite1}
        default:
            return state
    }
}
export default rootReducer;