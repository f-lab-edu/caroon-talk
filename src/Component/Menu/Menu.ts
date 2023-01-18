import lensImageSrc from 'asset/lens.svg';

export const appendMenu = (Node: Element) => {
  //  const historyApp = document.getElementsByClassName('history-app')[0];

  const LinkContainer = document.createElement('div');
  LinkContainer.classList.add('link-container');

  appendMenuBox(LinkContainer, lensImageSrc, '/');

  appendMenuBox(LinkContainer, lensImageSrc, '/chatList');

  appendMenuBox(LinkContainer, lensImageSrc, '/talkSample');

  Node.appendChild(LinkContainer);
};

function appendMenuBox(Node: Element, imgSrc: string, link: string) {
  const LinkBox = document.createElement('div');
  LinkBox.classList.add('link-box');

  const ImgIcon = document.createElement('img');
  ImgIcon.classList.add('history');

  ImgIcon.src = imgSrc;
  ImgIcon.setAttribute('route', link);

  LinkBox.appendChild(ImgIcon);
  Node.appendChild(LinkBox);
}
