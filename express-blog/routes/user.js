var express = require('express');
var router = express.Router();

// login
router.post('/login', function (req, res, next) {
    var {username, password} = req.body
    console.log(username,password)
    res.json({
        mess: "ok"
    });
});

module.exports = router;