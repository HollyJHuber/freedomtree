import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

import { square, cube } from './utils.js';

// console.log('app.js is running!!! WOO HOO!!');
// console.log('is email? ' + validator.isEmail('test'));

const template = <p>Babel and React are running</p>;
ReactDOM.render(template, document.getElementById('app'));