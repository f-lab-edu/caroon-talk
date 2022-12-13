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

const observeFunc = () => {
  const infiniteBox = document.getElementsByClassName('infinite-box')[0];
  const node1 = document.createElement('div');
  const node2 = document.createElement('div');
  const node3 = document.createElement('div');
  const node4 = document.createElement('div');
  const node5 = document.createElement('div');
  const node6 = document.createElement('div');

  node1.className = 'add-box';
  node2.className = 'add-box';
  node3.className = 'add-box';
  node4.className = 'add-box';
  node5.className = 'add-box';
  node6.className = 'add-box';

  infiniteBox.append(node1);
  infiniteBox.append(node2);
  infiniteBox.append(node3);
  infiniteBox.append(node4);
  infiniteBox.append(node5);
  infiniteBox.append(node6);
  // console.log('why??');
};
const observer = new IntersectionObserver(e => {
  e.forEach(el => {
    console.log(el);
    observeFunc();
    setTimeout(() => {
      console.log(el, 'test');
    }, 1000);
  });
});

// const observeBox = document.getElementsByClassName('observe')[0];

// observer.observe(observeBox);
