'use strict';

require('../stylesheets/index.css');

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const Elm = require('./Main');

Elm.Elm.Main.init({ node: document.body });
