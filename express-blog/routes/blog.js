var express = require('express');
const session = require('express-session');
const loginCheck = require('../middleware/loginCheck')
const router = express.Router();

const {
    getList,
    getDetial,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')


/* GET list api */
router.get('/list', (req, res, next) => {
    let author = req.query.author || ''
    let keyword = req.query.keyword || ''

    if (req.query.isadmin) {
        if (req.session.username == null) {
            res.json(
                new ErrorModel('未登录')
            )
            return
        }
        author = req.session.username
    }
    getList(author, keyword)
        .then(dada => {
            res.json(new SuccessModel(dada))
        })
});



// 详情
router.get('/detial', (req, res, next) => {
    var id = req.query.id
    getDetial(id).then(data => {
        res.json(new SuccessModel(data))
    })
});

router.post('/update', loginCheck,(req, res, next) => {
    console.log(req.body.id,req.body)
    updateBlog(req.body.id,req.body)
    .then(data=>{
        if(data){
            res.json(
                new SuccessModel(data)
            )
        }
    })

});


router.post('/new',loginCheck, (req, res, next) => {
    req.body.author = req.session.username;
    newBlog(req.body)
        .then(data => {
            res.json(
                new SuccessModel(data)
            )
        })

});

router.post('/del',loginCheck, (req, res, next) => {
    let id = req.body.id
    let aothor = req.session.username
    delBlog(id,aothor)
    .then(data=>{
        if(data){
            res.json(
                new SuccessModel(data)
            )
            return
        }
        res.json(
            new ErrorModel(data)
        )
    })
});



module.exports = router;