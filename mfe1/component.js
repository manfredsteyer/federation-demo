import { fromEvent } from 'rxjs';

const title = document.createElement('h2');
title.innerText = 'Microfrontend 1';
document.body.appendChild(title);

const link = document.createElement('a');
// link.addEventListener('click', function() {
//     import('./lazy');
// });

fromEvent(link, 'click').subscribe(function() {
    import('./lazy');
});

link.innerText = 'More ...';
document.body.append(link);
