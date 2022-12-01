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
  el.innerHTML = '';
  el.appendChild(route);
}

// get hash history route
function getHashRoute() {
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
    window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
  } else {
    window.addEventListener('hashchange', () => {
      return renderHTML(el, getHashRoute());
    });
  }
}

// set browser history
function historyRouterPush(pathName: string, el: Element) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// set hash history
function hashRouterPush(pathName: string, el: Element) {
  renderHTML(el, getHashRoute());
}

export { initialRoutes, historyRouterPush, hashRouterPush };
