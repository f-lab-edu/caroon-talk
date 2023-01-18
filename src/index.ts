import './style/App.scss';
import { initialRoutes, historyRouterPush, addEventLinker } from './router';
import { worker } from './mocks/worker';
import { appendMenu } from './component/Menu/Menu';

console.log(process.env.TEST_KEY);

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

// app division

const MainBodyNode = document.querySelector('.main-body');

appendMenu(MainBodyNode);

const historyAppDiv = document.createElement('div');
historyAppDiv.classList.add('content-box');
historyAppDiv.id = 'history-app';

MainBodyNode.appendChild(historyAppDiv);

// Browser History
if (historyAppDiv != null) initialRoutes('history', historyAppDiv);

// Hash History

window.onload = () => {
  const historyLinker = document.querySelectorAll('img.history');

  historyLinker.forEach(el => {
    const pathName = el.getAttribute('route');
    addEventLinker(el, pathName);
  });
};

export { historyAppDiv };
