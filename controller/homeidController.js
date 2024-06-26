const indexidView = (req, res, next) =>{
    res.render('homeid')
}

const aboutidView = (req, res, next) =>{
    res.render('aboutid')
}

const faqidView = (req, res, next)=>{
    res.render('faqid')
}

const galleryidView = (req, res, next)=>{
    res.render('galleryid')
}

module.exports = {
    indexidView,
    aboutidView,
    faqidView,
    galleryidView

}