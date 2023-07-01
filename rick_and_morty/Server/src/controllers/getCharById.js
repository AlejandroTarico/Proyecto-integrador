//const express = require('express');
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = async () => {
    try {
        const {id} = req.params;
        const { status, name, species, origin, image, gender} = (await axios(URL/id)).data;
        const  character = { id, status, name, species, origin, image, gender};
        return character.name ? res.status(200).json(character) :
        res.status(404).send('Not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = getCharById;



















// Con express
// function getCharById(req, res){
//     const {id} = req.params;
//     axios(`${URL}/${id}`).then(({data})=>{
//         const { id, status, name, species, origin, image, gender} = data;
//         const  character = { id, status, name, species, origin, image, gender};
//         return name ? res.json(character) : res.status(404).json({message: error});
//     }).catch((reason) => {
//         return res.status(500).send({message: reason});
//     })
// }
























/******************** Codigo sin express ********************/


// const axios = require("axios");

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//         const {name, gender, species, origin, image, status} = data;
//         const character = {id, name, gender, species, origin, image, status}

//         res.writeHead(200,{"Content-Type":"application/json"})
//         return res.end(JSON.stringify(character));
//     })
//     .catch((err) => {
//         res.writeHead(500,{"Content-Type":"text/plain"})
//         return res.end(err.message)
//     })
    
// }
// module.exports = getCharById;