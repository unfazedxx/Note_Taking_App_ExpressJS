//get the dependencies 
const express = require ('express');
const htmlRoute = require('./routes/notes-html-route');
const apiRoute = require('./routes/api-route');
//setting up express App
const PORT = process.env.port || 3001;
const app = express ();


//middleware to parse the data 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static for images 
app.use(express.static("public"));
app.use(htmlRoute)
app.use(apiRoute)



//end; listen for the express
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

