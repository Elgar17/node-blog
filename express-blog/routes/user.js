var express = require('express');
var router = express.Router();
const {
    login
} = require('../controller/user')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')

// login
router.post('/login', function (req, res, next) {
    var {
        username,
        password
    } = req.body
    
    login(username, password).then(data => {
        if (data.username) {
            req.session.username = data.username
            req.session.realname = data.realname
            res.json(
                new SuccessModel()
            )
            return
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })

});

module.exports = router;