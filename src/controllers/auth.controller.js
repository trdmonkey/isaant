/*  
    * @license Apache-2.0
    * @copyright trdmonkey 2024
*/

'use strict';

/*  
    * node modules
*/
const querystring = require('querystring');


/*  
    * custom modules
*/
const apiConfig = require('../config/api.config');
const utils = require('../utils/helpers.util');


const auth = (req, res) => {

    const /** {string} */ state = utils.generateRandomString(16);
    res.cookie(apiConfig.STATE_KEY, state);

}