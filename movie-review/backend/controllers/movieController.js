const { Movie } = require('../models');

exports.addMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Movie.update(req.body, { where: { id } });
        if (updated) {
            const updatedMovie = await Movie.findOne({ where: { id } });
            res.status(200).json(updatedMovie);
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Movie.destroy({ where: { id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
