/*  
    * @license Apache-2.0
    * @copyright trdmonkey 2024
*/

'use strict';

/*  
    * node modules
*/
require('dotenv').config();

// La direccion base de la api web
const BASE_URL = 'https://api.spotify.com/v1';

// La direccion base del token de autenticacion de spotify
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';

// Spotify client ID
const CLIENT_ID = process.env.CLIENT_ID;

// Cliente secreto de Spotify
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Redirigir uri para el flujo del código de autorización de Spotify
const REDIRECT_URI = process.env.REDIRECT_URI;

// Alcance de la solicitud de API de Spotify
const SCOPE = process.env.SCOPE;

// Autenticacion de la llave de spotify
const STATE_KEY = 'spotify_auth_state';

// Consultas de solicitud a la API
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;


module.exports = {
    BASE_URL,
    TOKEN_BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    SCOPE,
    STATE_KEY,
    MARKET,
    LOW_LIMIT,
    DEFAULT_LIMIT
}

