export const Menu = () => {
  //  const historyApp = document.getElementsByClassName('history-app')[0];

  const node1 = document.createElement('div');
  const innerText = document.createTextNode('home');
  node1.appendChild(innerText);
  //  historyApp.appendChild(node1);
  return node1;
};
