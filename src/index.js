//imports the Express.js module, allowing us to create an instance of the Express application.
const express = require('express');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');
//creates a new Express application by invoking the express() function.
// The app variable represents the application and is used to configure routes and middleware.
const app = express ();
const PORT = 3001; //sets the port number on which the server will listen for incoming requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log('${req.method} : ${req.url}');
    next();
})

app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/markets', marketsRoute);

app.listen (PORT, () => console.log(`running express server on port ${PORT}!`));
