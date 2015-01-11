// app/models/project.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our project model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Project', {
    name : {type : String, default: ''}
});