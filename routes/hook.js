var express = require('express');
var router = express.Router();

router.all('*', (req, res) => {
    console.log(req)
    res.status(200).end()
});



module.exports = router;
