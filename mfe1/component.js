// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
// import * as rxjs from 'rxjs';

(async function() { 
    const rxjs = await import('rxjs');

    const title = document.createElement('h2');
    title.innerText = 'Microfrontend 1';
    document.body.appendChild(title);

    const link = document.createElement('a');

    rxjs.fromEvent(link, 'click').subscribe(function() {
        import('./lazy');
    });

    link.innerText = 'More ...';
    document.body.append(link);

})();