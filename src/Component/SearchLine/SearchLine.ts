import lensImageSrc from 'asset/lens.svg';

export function makeSearchLine() {
  const SearchLineWrap = document.createElement('div');
  SearchLineWrap.classList.add('searchLine');

  const SearchInput = makeSearchLineLeft(SearchLineWrap);

  makeSearchLineRight(SearchLineWrap);

  return [SearchLineWrap, SearchInput];
}

function makeSearchLineLeft(Node: Element) {
  const SearchLineWrapLeft = document.createElement('div');
  SearchLineWrapLeft.classList.add('searchLine__left');

  const SearchLineInputWrap = document.createElement('div');
  SearchLineInputWrap.classList.add('searchLine__left__inputWrap');

  const SearchLineimg = document.createElement('img');
  SearchLineimg.src = lensImageSrc;
  SearchLineimg.classList.add('searchLine__left__searchImg');

  const SearchInput = document.createElement('input');
  SearchInput.classList.add('searchLine__left__searchInput');
  SearchInput.placeholder = '이름 검색';

  const SearchSubmitButton = document.createElement('div');
  SearchSubmitButton.innerText = '통합검색';
  SearchSubmitButton.classList.add('searchLine__left__submitButton');

  SearchLineInputWrap.appendChild(SearchLineimg);
  SearchLineInputWrap.appendChild(SearchInput);
  SearchLineWrapLeft.appendChild(SearchLineInputWrap);
  SearchLineWrapLeft.appendChild(SearchSubmitButton);

  Node.appendChild(SearchLineWrapLeft);

  return SearchInput;
}

function makeSearchLineRight(Node: Element) {
  const SearchLineWrapRight = document.createElement('div');
  SearchLineWrapRight.classList.add('searchLine__right');

  const SearchLineRightCloseBtn = document.createElement('div');
  SearchLineWrapRight.appendChild(SearchLineRightCloseBtn);

  SearchLineRightCloseBtn.innerText = 'X';
  SearchLineRightCloseBtn.classList.add('searchLine__right__closeButton');

  SearchLineRightCloseBtn.addEventListener('click', () => {
    const SearchLineWrapClassList = Node.classList;
    if (SearchLineWrapClassList.contains('on')) {
      console.log(SearchLineWrapClassList.contains('on'), true);
      SearchLineWrapClassList.remove('on');
    } else {
      console.log(SearchLineWrapClassList.contains('on'), false);
      SearchLineWrapClassList.add('on');
    }
  });

  Node.appendChild(SearchLineWrapRight);
}
