import { fromEvent } from 'rxjs';

const elm = document.createElement('a');
elm.innerText = 'Click me!';
// elm.addEventListener('click', function() {
//     import('mfe1/component');
// });

fromEvent(elm, 'click').subscribe(function() {
    import('mfe1/component');
});

document.body.appendChild(elm);