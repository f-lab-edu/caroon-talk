import lensImageSrc from 'asset/lens.svg';

export function makeSearchLine() {
  const SearchLineWrap = document.createElement('div'); // SearchLine Wrap 생성
  SearchLineWrap.classList.add('searchLine');

  makeSearchLineLeft(SearchLineWrap);

  function makeSearchLineLeft(Node: Element) {
    const SearchLineWrapLeft = document.createElement('div'); // SearchLine Left
    SearchLineWrapLeft.classList.add('searchLine__left');

    const SearchLineInputWrap = document.createElement('div'); // input Wrap 생성
    SearchLineInputWrap.classList.add('searchLine__left__inputWrap');

    const SearchLineimg = document.createElement('img'); // 추후 img로 변경 이미지 생성
    SearchLineimg.src = lensImageSrc;
    SearchLineimg.classList.add('searchLine__left__searchImg');

    const SearchInput = document.createElement('input'); // input 생성
    SearchInput.classList.add('searchLine__left__searchInput');
    SearchInput.placeholder = '이름 검색';

    const SearchSubmitButton = document.createElement('div'); // 검색 버튼 생성
    SearchSubmitButton.innerText = '통합검색';
    SearchSubmitButton.classList.add('searchLine__left__submitButton');

    SearchLineInputWrap.appendChild(SearchLineimg);
    SearchLineInputWrap.appendChild(SearchInput);
    SearchLineWrapLeft.appendChild(SearchLineInputWrap);
    SearchLineWrapLeft.appendChild(SearchSubmitButton); // left 생성 완료

    Node.appendChild(SearchLineWrapLeft);
  } // SearchLineLeft 생성

  makeSearchLineRight(SearchLineWrap);

  function makeSearchLineRight(Node: Element) {
    const SearchLineWrapRight = document.createElement('div'); // SearchLine Right
    SearchLineWrapRight.classList.add('searchLine__right');

    const SearchLineRightCloseBtn = document.createElement('div');
    SearchLineWrapRight.appendChild(SearchLineRightCloseBtn);

    SearchLineRightCloseBtn.innerText = 'X';
    SearchLineRightCloseBtn.classList.add('searchLine__right__closeButton');

    SearchLineRightCloseBtn.addEventListener('click', () => {
      const SearchLineWrapClassList = SearchLineWrap.classList;
      if (SearchLineWrapClassList.contains('on')) {
        console.log(SearchLineWrapClassList.contains('on'), true);
        SearchLineWrapClassList.remove('on');
      } else {
        console.log(SearchLineWrapClassList.contains('on'), false);
        SearchLineWrapClassList.add('on');
      }
    }); // 우측 상단 돋보기 버튼 이벤트

    Node.appendChild(SearchLineWrapRight);
  }

  return SearchLineWrap;
}
