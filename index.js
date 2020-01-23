const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/list", (req, res) => {

    return res.render("list");
});


app.listen(3000, function(){
    console.log("Application stated in port 3000");
})