const { User } = require('../DB_connection');


const postUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) {
            res.status(400).json({message: 'Faltan datos'});
        }
        const user = await User.findOrCreate({
            where: { email, password },
            // defaults: { password }
          });
          res.json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = postUser;