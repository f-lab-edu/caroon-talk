const Route1 = () => {
  const TalkListWrap = document.createElement('div');
  const TextNode = document.createElement('div');

  TalkListWrap.appendChild(TextNode);

  const SearchAndAddFriendNode = document.createElement('div');
  const SearchNode = document.createElement('div');
  SearchNode.classList.add('SearchButton');
  SearchNode.innerText = 'search';

  const AddChatNode = document.createElement('div');
  AddChatNode.innerText = 'addChat';

  SearchAndAddFriendNode.appendChild(SearchNode);
  SearchAndAddFriendNode.appendChild(AddChatNode);

  TextNode.appendChild(SearchAndAddFriendNode);

  const SearchLineWrap = document.createElement('div');

  const SearchLineWrapLeft = document.createElement('div');
  const SearchLineWrapRight = document.createElement('div');

  SearchLineWrap.appendChild(SearchLineWrapLeft);
  SearchLineWrap.appendChild(SearchLineWrapRight);

  const SearchLineimg = document.createElement('div'); // 추후 img로 변경
  SearchLineimg.innerText = '돋보기 img';
  const SearchInput = document.createElement('input');
  const SearchInputButton = document.createElement('div');
  SearchInputButton.innerText = '통합검색';

  SearchLineWrapLeft.appendChild(SearchLineimg);
  SearchLineWrapLeft.appendChild(SearchInput);
  SearchLineWrapLeft.appendChild(SearchInputButton);

  SearchLineWrapRight.innerText = 'X';

  SearchNode.addEventListener('click', function SearchButtonClick(e) {
    const SearchLineWrapClassList = SearchLineWrap.classList;
    if (SearchLineWrapClassList.contains('on')) {
      SearchLineWrapClassList.add('on');
    } else SearchLineWrapClassList.remove('on');
  }); // 클릭하면 search 바 생성, 없엠 // 이 부분이 왜 작동 안되는지를 모르겠다;;

  TalkListWrap.appendChild(SearchLineWrap);

  return TalkListWrap;
};

export default Route1;
