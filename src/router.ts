/* eslint-disable no-param-reassign */
import { FriendList } from './component/FriendList/FriendList';
import { ChatList } from './component/ChatList/ChatList';
import { Chat } from './component/Chat/Chat';
import { historyAppDiv } from '.';
// import Route2 from './Route2';
// import Route1

const routes: RouteType = {
  '/': Chat(),
  '/chatList': FriendList(),
  '/talkSample': ChatList(),
};

type RouteType = {
  [key: string]: Element;
};

// render
function renderHTML(el: Element, pathName: string) {
  const pathArr = pathName.split('/');
  pathArr.shift();
  el.innerHTML = '';

  if (
    pathArr[0] === '' ||
    pathArr[0] === 'chatList' ||
    pathArr[0] === 'talkSample'
  ) {
    el.appendChild(routes['/' + pathArr[0]]);
  }
}

// get hash history route
function getHashRoute() {
  // 해시 주소 받기
  // 해시 라우트
  let route: string | '' = '';

  Object.keys(routes).forEach(hashRoute => {
    if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
      route = hashRoute;
    }
  });

  if (route) {
    return route;
  }
  return 'Home';
}

// entry point
function initialRoutes(mode: string, el: Element) {
  renderHTML(el, '/');
  window.addEventListener('popstate', () => {
    renderHTML(el, 'window.location.pathname');
  });
}

// set browser history
function historyRouterPush(pathName: string, el: Element) {
  window.history.pushState({}, pathName, window.location.origin + pathName); // 현제 URL 변경
  renderHTML(el, pathName); // renderHTML 완료
}

function addEventLinker(Node: Element, path: string) {
  Node.addEventListener('click', evt => {
    const pathName = path;
    if (pathName != null) {
      historyRouterPush(pathName, historyAppDiv); // history 변경 시 이벤트
    }
  });
}

export { initialRoutes, historyRouterPush, addEventLinker };
