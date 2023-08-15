// Setup empty JS object to act as endpoint for all routes
let projectData = {};

const express = require('express');
const app = express ();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use (bodyParser.json());

const cors = require('cors');

app.use (cors());
app.use(express.static('website' ));
const port = 12831;

//server

const server= app. listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

// Post Route

app.post ('/add', postData )
function postData(req, res){
    console.log(req.body)
    projectData = req.body;
    res.send(projectData);
}


app.get ('/get', (req,res) => {
    res.send(projectData);
    console.log(projectData);
})