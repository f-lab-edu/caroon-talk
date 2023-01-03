import { makeSearchLine } from '../../SearchLine/SearchLine';
import { appendButtonWrap } from './AppendButtonWrap';
import { appendTitleLeft } from './AppendTitleLeft';

export function appendTitleAndSearchLine(Node: Element) {
  const TitleNode = document.createElement('div');
  TitleNode.classList.add('title-wrap');

  appendTitleLeft(TitleNode);

  const TitleRightSearchBtn = appendButtonWrap(TitleNode);

  Node.appendChild(TitleNode);

  const [SearchLineWrap, SearchInput] = makeSearchLine();
  Node.appendChild(SearchLineWrap);

  TitleRightSearchBtn.addEventListener('click', () => {
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
