var express = require('express');
var router = express.Router();
var Name = require('../models/Name');
var Work = require('../models/Work');
var Salary = require('../models/Salary');

router.get('/', (req, res, next) => {
  Name.find().populate('work_id').populate('salary_id').exec(function (err, name) {
    res.render('home', {name});
  });
});

module.exports = router;
