const express = require('express');
const router = express.Router();
const { addMovie, getMovies, updateMovie, deleteMovie } = require('../controllers/movieController');

router.post('/', addMovie);
router.get('/', getMovies);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
