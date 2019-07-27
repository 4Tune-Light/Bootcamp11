var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalarySchema = new Schema({
  salary: Number
});

var Salary = mongoose.model('Salary', SalarySchema);
module.exports = Salary;
