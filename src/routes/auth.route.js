/*  
    * @license Apache-2.0
    * @copyright trdmonkey 2024
*/

'use strict';

/*  
    * Login modules
*/
const router = require('express').Router();

/*  
    * custom modules
*/
const { auth } = require('../controllers/auth.controller');

router.get('/', auth);

module.exports = router;