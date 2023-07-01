
let myFavorites = [];


const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.json(myFavorites)
};

function deleteFav (req, res) {
    const {id} = req.params;
    const eliminado = myFavorites.filter((e) => {e.id !== Number(id)});
    myFavorites = eliminado;
    return res.json(myFavorites)
}

module.exports = {postFav, deleteFav};