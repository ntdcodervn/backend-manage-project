const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name : {
        type : 'string',
        required : true
    },
    description : {
        type : 'string',
        required : true
    },
    member : [
        {
            type : Schema.Types.ObjectId,
            ref : 'member'
        }
    ],
 

},{
    autoCreate : true
})

module.exports = mongoose.model('projects',ProjectSchema);