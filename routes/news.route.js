const express = require('express');
const router = express.Router();
const news_controller = require('../controllers/news.controller');


router.post('/news/addNews', news_controller.news_create)
router.get('/:id', news_controller.news_read)
router.post('/news/update/:id', news_controller.news_update)
//router.get('/read/:id', news_controller.news_read)
//router.put('/update/', news_controller.news_update)
//router.delete('/delete/bookName/:bookName', bookRating_controller.bookRating_delete)
router.get('/news/readAll', news_controller.news_readAll)
router.delete('/news/delete/:id', news_controller.news_delete)
router.put('/addComment/', news_controller.news_add_comment)


module.exports = router;
