const express = require('express');
const router = express.Router();
const bookRating_controller = require('../controllers/bookRating.controller');



router.post('/create/bookId/:id/bookRating/:bookRating/ratingDate/:ratingpremiereDate', bookRating_controller.bookRating_create)
router.get('/read/:id', bookRating_controller.bookRating_read)
router.put('/update/:id/bookRating/:bookRating', bookRating_controller.bookRating_update)
//router.delete('/delete/bookName/:bookName', bookRating_controller.bookRating_delete)
router.get('/book/readAll', bookRating_controller.bookRating_readAll)
router.delete('/delete/id/:id', bookRating_controller.bookRating_delete)

module.exports = router;
