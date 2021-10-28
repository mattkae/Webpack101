import { SayHiComponent } from './SayHiComponent';
import React from 'react';
import ReactDOM from 'react-dom';

function main() {
    const element = document.getElementById('root');
    ReactDOM.render(<SayHiComponent />, element);
}


document.addEventListener("DOMContentLoaded", main);