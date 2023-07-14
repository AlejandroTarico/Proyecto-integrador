//const router = require('express').Router(); Esta es otra opción para requerir router
// const login = require('../controllers/login')
// const {postFav, deleteFav} = require('../controllers/handleFavorites')
const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const Login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const postUser = require('../controllers/postUser');


router.get('/character/:id', getCharById)
router.get('/login', Login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;