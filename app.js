/*
    * @license Apache-2.0
    * @copyright trdmonkey 2024
*/

'use strict';

/*  
    * node modules
*/
const cors = require('cors');
const cookieParser = require('cookie-parser');

/*  
    * custom modules
*/
const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');

// Iniciar la aplicacion de express
const express = require('express');
const app = express();

/*  
    * EJS setting
*/
app.set('view engine', 'ejs');

/*  
    * Setting static directory
*/
app.use(express.static(`${__dirname}/public`));

/*  
    * Enable cors & cookie parser
*/
app.use(cors()).use(cookieParser());

/*  
    * Login page
*/
app.use('/login', login);

/*  
    * Auth page
*/
app.use('/auth', auth);


app.listen(5000, () => {
    console.log(`Server listening at http:localhost:5000`);
});