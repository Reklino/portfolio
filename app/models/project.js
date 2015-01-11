// app/models/project.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our project model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('projects', {
    name	: { type : String,	default: '' },
    thumb	: { type : Object,	default: {} },
    photos	: { type : Array,	default: [] },
    desc	: { type : String,	default: '' },
    tags	: { type : Array,	default: [] },
    date	: { type : String,	default: '' },
    sort	: { type : Number,	default: 0 }
});