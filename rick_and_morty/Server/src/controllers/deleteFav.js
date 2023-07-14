const {Favorite} = require('../DB_connection');


const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        await Favorite.destroy({ where: { id } });

        const arrayFav = await Favorite.findAll();

        res.json(arrayFav);
    } catch (error) {
        res.status(500).json({ message: error });
    }

}

module.exports = deleteFav;