import React from 'react'
import ReactDOM from 'react-dom'
import Cupcake from './cool.cupcake';

function main() {
    const element = document.getElementById('root');
    ReactDOM.render(< Cupcake />, element);
}


document.addEventListener("DOMContentLoaded", main);