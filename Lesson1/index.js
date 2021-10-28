import { sayHi } from './sayHi';

function main() {
    let x = Date.now();
    const element = document.getElementById('root');
    x *= 2;
    element.innerHTML = sayHi() + ' with ' + x;
}


document.addEventListener("DOMContentLoaded", main);