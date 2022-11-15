import './App.scss';
// router
import { debounce, throttler } from './debouncer';
import { initialRoutes, historyRouterPush, hashRouterPush } from './router';

// app division
const historyAppDiv = document.querySelector('#history-app');
const hashAppDiv = document.querySelector('#hash-app');

// Browser History

if (historyAppDiv != null) initialRoutes('history', historyAppDiv);

// Hash History

if (hashAppDiv != null) initialRoutes('hash', hashAppDiv);

window.onload = () => {
  const historyLinker = document.querySelectorAll('span.history');
  const hashLinker = document.querySelectorAll('a.hash');

  historyLinker.forEach(el => {
    el.addEventListener('click', evt => {
      const pathNode = evt.target as Element;
      const pathName = pathNode.getAttribute('route');
      if (pathName != null && historyAppDiv != null) {
        historyRouterPush(pathName, historyAppDiv);
      }
    });
  });

  hashLinker.forEach(el => {
    el.addEventListener('click', evt => {
      const pathNode = evt.target as Element;
      const pathName = pathNode.getAttribute('route');

      if (pathName != null && hashAppDiv != null)
        hashRouterPush(pathName, hashAppDiv);
    });
  });
};

const fixed_box1 = document.getElementsByClassName('fixed-box')[0];
const fixed_box2 = document.getElementsByClassName('fixed-box2')[0];
const fixed_box3 = document.getElementsByClassName('fixed-box3')[0];

let box1Counter = 0;
let box2Counter = 0;
let box3Counter = 0;

const box1plus = () => {
  box1Counter += 1;
  fixed_box1.innerHTML = `${box1Counter}`;
};
const box2plus = () => {
  box2Counter += 1;
  fixed_box2.innerHTML = `${box2Counter}`;
};
const box3plus = () => {
  box3Counter += 1;
  fixed_box3.innerHTML = `${box3Counter}`;
};

const throttleFunc = throttler(box2plus, 100);
const debounceFunc = debounce(box3plus, 300);
window.addEventListener('wheel', () => {
  box1plus();
  throttleFunc();
  debounceFunc();
});
