
let myFavorites = [];


const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites)
};

function deleteFav (req, res) {
    const {id} = req.params;
    const eliminado = myFavorites.filter((e) => {
        return e.id !== id
    });
    myFavorites = eliminado;
    return res.json(myFavorites)
}

module.exports = {postFav, deleteFav};