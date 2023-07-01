const express = require('express');
const router = express.Router();
//const router = require('express').Router(); Esta es otra opción para requerir router

const login = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const getCharById = require('../controllers/getCharById')


router.get('/character/:id', getCharById)
router.get('/login', login)
router.get('/fav', postFav)
router.get('/fav/:id', deleteFav)

module.exports = router;