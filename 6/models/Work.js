var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkSchema = new Schema({
  name: String,
  salary_id: {
        type: Schema.Types.ObjectId,
        ref: 'Salary'
    },
});

var Work = mongoose.model('Work', WorkSchema);
module.exports = Work;
