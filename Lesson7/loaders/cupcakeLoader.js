module.exports = function (source) {
    console.log(source);
    return `
    import React from 'react';
    export default function Cupcake() {
        return <div>
        ${source}
        </div>;
    }
    `;
  }
  