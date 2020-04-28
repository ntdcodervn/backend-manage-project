const mongoose = require('mongoose');
const configs = require('./../config/default');

const ProjectCreate = require('./../model/Project');

mongoose.connect(configs.uri, {useNewUrlParser: true,useUnifiedTopology: true},(err) => {
    if(!err) {
        console.log('Mongodb connected');
       
    }else {
        console.log(err);
        
    }
});
