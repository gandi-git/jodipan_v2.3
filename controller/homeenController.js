const indexenView = (req, res, next) =>{
    res.render('homeen',{layout : 'layouten'})
}

const aboutenView = (req, res, next) =>{
    res.render('abouten',{layout : 'layouten'})
}

const faqenView = (req, res, next)=>{
    res.render('faqen',{layout : 'layouten'})
}

const galleryenView = (req, res, next)=>{
    res.render('galleryen',{layout : 'layouten'})
}

module.exports = {
    indexenView,
    aboutenView,
    faqenView,
    galleryenView

}