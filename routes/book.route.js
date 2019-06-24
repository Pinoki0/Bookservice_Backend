const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book.controller');



router.post('/book/addBook', book_controller.book_create)
router.post('/book/read', book_controller.book_read)
router.put('/update/:bookName/genre/:genre', book_controller.book_update)
router.delete('/delete/bookName/:bookName', book_controller.book_delete)
router.get('/book/readAll', book_controller.book_readAll)
router.get('/readByGenre/:bookGenre', book_controller.book_by_genre)

module.exports = router;
