const express = require('express');
const router = express.Router();
const { addReview, getReviews, updateReview, deleteReview } = require('../controllers/reviewController');

router.post('/', addReview);
router.get('/', getReviews);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
