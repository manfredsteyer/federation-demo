// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
// import * as rxjs from 'rxjs';

(async function() { 
    const rxjs = await import('rxjs');

    const elm = document.createElement('a');
    elm.innerText = 'Click me!';

    rxjs.fromEvent(elm, 'click').subscribe(function() {
        import('mfe1/component');
    });

    document.body.appendChild(elm);
})();