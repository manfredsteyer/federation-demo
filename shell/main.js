// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
// import * as rxjs from 'rxjs';

const container = document.getElementById('container');
const flightsLink = document.getElementById('flights');
const homeLink = document.getElementById('home');

function removeFirstChild() {
    if (container.firstChild) {
        container.firstChild.remove();
    }
}

function displayWelcomeMessage() {
    removeFirstChild();
    this.container.innerHTML = `<h1>Welcome!</h1>`;
}

(async function() { 
    const rxjs = await import('rxjs');

    displayWelcomeMessage();

    rxjs.fromEvent(flightsLink, 'click').subscribe(async _ => {
        const module = await import('mfe1/component');
        const elm = document.createElement(module.elementName);
        removeFirstChild();       
        container.appendChild(elm);
    });

    rxjs.fromEvent(homeLink, 'click').subscribe(_ => {
        displayWelcomeMessage();
    })

})();