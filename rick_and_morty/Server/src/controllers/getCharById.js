const express = require('express');
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";


function getCharById(req, res){
    const {id} = req.params;
    axios(`${URL}/${id}`).then(({data})=>{
        const { id, status, name, species, origin, image, gender} = data;
        const  character = { id, status, name, species, origin, image, gender};
        return name ? res.json(character) : res.status(404).json({message: error});
    }).catch((reason) => {
        return res.status(500).send({message: reason});
    })
}


module.exports = getCharById;

























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