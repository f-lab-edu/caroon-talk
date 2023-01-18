import lensImageSrc from 'asset/lens.svg';

export function appendButtonWrap(Node: Element) {
  const TitleRightNode = document.createElement('div');
  TitleRightNode.classList.add('title-wrap__right');

  const TitleRightSearchBtn = document.createElement('img');
  TitleRightSearchBtn.classList.add('title-wrap__right__search-button');
  TitleRightSearchBtn.src = lensImageSrc;
  TitleRightNode.appendChild(TitleRightSearchBtn);

  const TitleRightMenuBtn = document.createElement('img');
  TitleRightMenuBtn.src = lensImageSrc;
  TitleRightMenuBtn.classList.add('title-wrap__right__menu-button');
  TitleRightNode.appendChild(TitleRightMenuBtn);

  Node.appendChild(TitleRightNode);

  return TitleRightSearchBtn;
}
