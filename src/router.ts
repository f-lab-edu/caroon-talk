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
function initialRoutes(mode, el) {
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
function historyRouterPush(pathName, el) {
  console.log(pathName, el);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// get hash history route
function getHashRoute() {
  let route = '/';

  Object.keys(routes).forEach(hashRoute => {
    if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
      route = routes[hashRoute];
    }
  });

  return route;
}

// set hash history
function hashRouterPush(pathName, el) {
  renderHTML(el, getHashRoute());
}

// render
function renderHTML(el, route) {
  console.log(el, route);
  el.innerHTML = null;

  el.appendChild(route);
}

export { initialRoutes, historyRouterPush, hashRouterPush };
