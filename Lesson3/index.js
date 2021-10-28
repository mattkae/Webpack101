import { sayHi } from './sayHi';

function main() {
    let x = Date.now();
    const element = document.getElementById('root');
    x *= 2;
    element.innerHTML = sayHi() + ' with ' + x;

    if (INSERTED_STRING) {
        element.innerHTML += INSERTED_STRING;
    }
}


document.addEventListener("DOMContentLoaded", main);