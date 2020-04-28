const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name : {
        type : 'string',
        required : true
    },
    phone : {
        type : 'string',
        required : true
    },
    birthday : {
        type : 'number',
        required : true
    },
 

},{
    autoCreate : true
})

module.exports = mongoose.model('members',ProjectSchema);