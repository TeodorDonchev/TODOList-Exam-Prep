const mongoose = require('mongoose');

let schema = mongoose.Schema({
    title: {type: 'string', required: 'true'},
    comments: {type: 'string', required: 'true'}
});

let Task = mongoose.model('Task', schema);

module.exports = Task;