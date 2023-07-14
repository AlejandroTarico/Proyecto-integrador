const {User} = require ('../DB_connection');

const login = async (req, res) => {
    try {
        const {email, password} = req.query;
        
        
        if(!email || !password) {
            res.status(400).json({message: "Faltan datos"});
        }
        const usuario = await User.findOne({ where: { email: email } });
        if(!usuario){
            res.status(404).json({message: "Usuario no encontrado"});
        }
        if(usuario.password !== password) {
            res.status(403).json({message: "Contraseña incorrecta"});
        }
        res.json({ access: true });
    } catch (error) {
        res.status(500).json({ error: "por alguna razón no pasa" });
    }
}

module.exports = login; 


















// const login = (req, res) => {
//     const {email, password} = req.query;
//     let access = false
//     users.forEach((user) => {
//         if(user.email === email && user.password === password) {
//             access = true;
//         }
//     })
//     return res.json({access});
// }
