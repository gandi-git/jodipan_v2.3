const express = require('express')

const {indexidView, aboutidView, faqidView, galleryidView } = require('../controller/homeidController')
const {indexenView, aboutenView, faqenView, galleryenView } = require('../controller/homeenController')
const router = express.Router()

router.get('/', indexidView)
router.get('/aboutid', aboutidView)
router.get('/faqid',faqidView)
router.get('/galleryid', galleryidView)
router.get('/homeen', indexenView)
router.get('/abouten', aboutenView)
router.get('/faqen',faqenView)
router.get('/galleryen', galleryenView)

module.exports = {
    routes: router
}