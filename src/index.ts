import './style/App.scss';
import { initialRoutes, historyRouterPush } from './router';
import { worker } from './mocks/worker';

console.log(process.env.TEST_KEY);

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

// app division
const historyAppDiv = document.querySelector('#history-app');

// Browser History

if (historyAppDiv != null) initialRoutes('history', historyAppDiv);

// Hash History

window.onload = () => {
  const historyLinker = document.querySelectorAll('img.history');

  historyLinker.forEach(el => {
    // 모든 span.history에게 history 변경시 이벤트
    el.addEventListener('click', evt => {
      const pathNode = evt.target as Element;
      const pathName = pathNode.getAttribute('route');
      if (pathName != null && historyAppDiv != null) {
        // route가 존재하고 history-app이 존재할 경우
        historyRouterPush(pathName, historyAppDiv); // history 변경 시 이벤트
      }
    });
  });
};
