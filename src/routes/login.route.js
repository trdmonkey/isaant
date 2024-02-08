/*  
    * @license Apache-2.0
    * @copyright trdmonkey 2024
*/

'use strict';

/*  
    * Login modules
*/
const router = require('express').Router();

const { Router } = require('express');
/*  
    * custom modules
*/
const { login } = require('../controllers/login.controller');

router.get('/', login);

module.exports = router;