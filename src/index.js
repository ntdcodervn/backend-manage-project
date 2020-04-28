const express = require('express');
const app = express();
const body_parser = require('body-parser');
const db = require('./database/connect');
const cors = require('cors');
const PORT =  4000

app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use('/api/projects',require('./router/project/index'));
app.use('/api/members',require('./router/member/index'));

app.get('/', function(req, res){
    res.send('Welcome to Thanh Duy server');
});



app.listen(PORT,() => {
    console.log('server run on Port 4000');
})



