const express = require('express');
const app = express();

const {body, validationResult} = require('express-validator');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
    res.render('index');
})


// Starting the server
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () =>{
    console.log('Server on port',app.get('port'));
})