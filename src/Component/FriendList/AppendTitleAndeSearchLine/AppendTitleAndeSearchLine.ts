import { makeButtonWrapNode } from './MakeButtonWrap';
import { makeSearchLine } from './MakeSearchLine';

export function appendTitleAndSearchLineNode(Node: Element) {
  const TitleNode = document.createElement('div');
  TitleNode.classList.add('friendList__title');

  const TextNodeInnerText = makeTitleText();
  TitleNode.appendChild(TextNodeInnerText);
  const SearchButtonNode = document.createElement('img');
  const TitleButtonWrapNode = makeButtonWrapNode(SearchButtonNode);
  TitleNode.appendChild(TitleButtonWrapNode);

  Node.appendChild(TitleNode);

  const SearchLineWrap = makeSearchLine();
  Node.appendChild(SearchLineWrap);

  SearchButtonNode.addEventListener('click', () => {
    const SearchLineWrapClassList = SearchLineWrap.classList;
    if (SearchLineWrapClassList.contains('on')) {
      SearchLineWrapClassList.remove('on');
    } else {
      SearchLineWrapClassList.add('on');
    }
  });
}

function makeTitleText() {
  const TextNodeInnerText = document.createElement('span'); // 타이틀 텍스트 노드 생성
  TextNodeInnerText.innerHTML = '친구';
  return TextNodeInnerText;
}
