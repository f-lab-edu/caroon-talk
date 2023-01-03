/* eslint-disable no-param-reassign */
import { FriendList } from './Component/FriendList/FriendList';
import { ChatList } from './Component/ChatList/ChatList';
import { Chat } from './Component/Chat/Chat';
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

  if (mode === 'history') {
    window.addEventListener('popstate', () => {
      // 뒤로가기 이벤트 history의 경우 window.history.pushState를 통해 관리한다. 단, hash 이벤트도 같이 발생하는데... 왜지?
      // 하지만 이것 때문에 문제가 있다...
      console.log(
        el,
        routes[window.location.pathname],
        window.location.pathname,
        'historyChanged',
      );
      renderHTML(el, 'window.location.pathname');
    });
  } else {
    window.addEventListener('hashchange', () => {
      console.log(
        el,
        routes[window.location.pathname],
        window.location.pathname,
        'hashChanged',
        getHashRoute(),
      );
      renderHTML(el, getHashRoute());
    });
  }
}

// set browser history
function historyRouterPush(pathName: string, el: Element) {
  window.history.pushState({}, pathName, window.location.origin + pathName); // 현제 URL 변경
  renderHTML(el, pathName); // renderHTML 완료
}

// set hash history
function hashRouterPush(pathName: string, el: Element) {
  renderHTML(el, getHashRoute());
}

export { initialRoutes, historyRouterPush, hashRouterPush };
