/* eslint-disable no-param-reassign */
import { Home } from './Home';
import Route1 from './Route1';
import Route2 from './Route2';
// import Route1

const routes: RouteType = {
  '/': Home(),
  '/route1': Route1(),
  '/route2': Route2(),
};

type RouteType = {
  [key: string]: Element;
};

// render
function renderHTML(el: Element, route: Element) {
  // console.log(el, route);
  const cloneEl = route.cloneNode(true);
  el.innerHTML = '';
  el.appendChild(cloneEl);
}

// get hash history route
function getHashRoute() {
  // 해시 주소 받기
  // 해시 라우트
  let route: Element | '' = '';

  Object.keys(routes).forEach(hashRoute => {
    if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
      route = routes[hashRoute];
    }
  });

  if (route) {
    return route;
  }
  return routes.Home;
}

// entry point
function initialRoutes(mode: string, el: Element) {
  renderHTML(el, routes['/']);

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
      renderHTML(el, routes[window.location.pathname]);
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
  console.log('pushHistory'); // history를 넣음
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// set hash history
function hashRouterPush(pathName: string, el: Element) {
  renderHTML(el, getHashRoute());
}

export { initialRoutes, historyRouterPush, hashRouterPush };
