const { Favorite } = require('../DB_connection');


const postFav = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender} = req.body;
        

        if (!id || !name || !origin || !status || !image || !species || !gender){
            res.status(401).json({message: "Faltan datos"});
        }
        await Favorite.findOrCreate({
            where: { name },
            defaults: {id, origin, status, image, species, gender }
        });
      
        const arrayFav = await Favorite.findAll();
        res.json(arrayFav);

    } catch (error) {
        res.status(500).json({ error: error });
    }
}
module.exports = postFav;