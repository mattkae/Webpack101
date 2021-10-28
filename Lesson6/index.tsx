import { SayHiComponent, SayHiMode } from './SayHiComponent';
import * as React from 'react'
import * as ReactDOM from 'react-dom'

function main() {
    const element = document.getElementById('root');
    ReactDOM.render(<SayHiComponent 
        counterStart={12}
        mode={SayHiMode.SayHi}
    />, element);
}


document.addEventListener("DOMContentLoaded", main);