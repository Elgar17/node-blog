var express = require('express');
var router = express.Router();

/* GET list api */
router.get('/list', (req, res, next) => {
    res.json({
        state: 'ok'
    })
});

// 详情
router.post('/detail', (req, res, next) => {
    var id = req.body.id
    console.log(id)
    res.json({
        state: '详情'
    })
});

router.post('/update', (req, res, next) => {
    var id = req.body.id
    console.log(id)
    res.json({
        state: 'ok'
    })
}); 


router.post('/new', (req, res, next) => {
    res.json({
        state: 'new'
    })
});

router.post('/del', (req, res, next) => {
    var id = req.body.id
    console.log(id)
    res.json({
        state: 'dell'
    })
});

module.exports = router;