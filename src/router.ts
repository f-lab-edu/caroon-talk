import { Home } from './Home';
import { Route1 } from './Route1';
import { Route2 } from './Route2';
// import Route1

const routes = {
  '/': Home(),
  '/route1': Route1(),
  '/route2': Route2(),
};

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
  } else return routes[home];
}

// set hash history
function hashRouterPush(pathName: string, el: Element) {
  renderHTML(el, getHashRoute());
}

// render
function renderHTML(el: Element, route: Element) {
  console.log(el, route);
  el.innerHTML = '';
  el.appendChild(route);
}

export { initialRoutes, historyRouterPush, hashRouterPush };
