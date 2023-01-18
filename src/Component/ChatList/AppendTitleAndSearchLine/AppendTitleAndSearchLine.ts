import { makeSearchLine } from '../../SearchLine/SearchLine';
import { makeButtonWrapNode } from './MakeButtonWrap';

export function appendTitleAndSearchLineNode(Node: Element) {
  const TitleNode = document.createElement('div');
  TitleNode.classList.add('talklist__title');
  const TextNodeInnerText = makeTitleText();
  TitleNode.appendChild(TextNodeInnerText);

  const SearchButtonNode = document.createElement('img');
  const TitleButtonWrapNode = makeButtonWrapNode(SearchButtonNode);
  TitleNode.appendChild(TitleButtonWrapNode);
  Node.appendChild(TitleNode);

  const [SearchLineWrap, SearchInput] = makeSearchLine();
  Node.appendChild(SearchLineWrap);

  SearchButtonNode.addEventListener('click', () => {
    const SearchLineWrapClassList = SearchLineWrap.classList;
    if (SearchLineWrapClassList.contains('on')) {
      console.log(SearchLineWrapClassList.contains('on'), true);
      SearchLineWrapClassList.remove('on');
    } else {
      console.log(SearchLineWrapClassList.contains('on'), false);
      SearchLineWrapClassList.add('on');
    }
  });
}

function makeTitleText() {
  const TextNodeInnerText = document.createElement('span');
  TextNodeInnerText.innerHTML = '채팅';
  return TextNodeInnerText;
}
