import './App.scss';
// router
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
