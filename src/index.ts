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
    // 모든 span.history에게 history 변경시 이벤트
    el.addEventListener('click', evt => {
      const pathNode = evt.target as Element;
      const pathName = pathNode.getAttribute('route');
      if (pathName != null && historyAppDiv != null) {
        historyRouterPush(pathName, historyAppDiv); // history 변경 시 이벤트
      }
    });
  });

  hashLinker.forEach(el => {
    // 모든 a.hash에게 이벤트
    el.addEventListener('click', evt => {
      const pathNode = evt.target as Element;
      const pathName = pathNode.getAttribute('route');

      if (pathName != null && hashAppDiv != null)
        hashRouterPush(pathName, hashAppDiv); // 해시 변경 시 이벤트
    });
  });
};
