import { sayHi } from './sayHi';
import './sayHi.css';

function main() {
    let x = Date.now();
    const element = document.getElementById('root');
    x *= 2;
    element.innerHTML = sayHi() + ' with ' + x;

    element.classList.add('hi_element');
}


document.addEventListener("DOMContentLoaded", main);