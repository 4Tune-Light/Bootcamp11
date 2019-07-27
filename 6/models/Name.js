var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NameSchema = new Schema({
  name: String,
  work_id: {
        type: Schema.Types.ObjectId,
        ref: 'Work'
    },
  salary_id: {
        type: Schema.Types.ObjectId,
        ref: 'Salary'
    },
});

var Name = mongoose.model('Name', NameSchema);
module.exports = Name;
