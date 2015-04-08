var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'EB | Development + Design' });
});

router.get('/work', function(req, res) {
    res.render('work-detail', { title: 'Hello, asdfWorld!' })
});

module.exports = router;
