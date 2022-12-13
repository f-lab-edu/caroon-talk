export const Home = () => {
  //  const historyApp = document.getElementsByClassName('history-app')[0];

  const HomeNode = document.createElement('div');
  const TextNode = document.createElement('div');

  /// TextNode

  const TextNodeInnerText = document.createTextNode('친구');
  TextNode.appendChild(TextNodeInnerText);
  HomeNode.appendChild(TextNode);

  const SearchAndAddFriendNode = document.createElement('div');
  const SearchNode = document.createElement('div');
  SearchNode.classList.add('SearchButton');
  SearchNode.innerText = 'search';

  const AddFriendNode = document.createElement('div');
  AddFriendNode.innerText = 'addFriend';

  SearchAndAddFriendNode.appendChild(SearchNode);
  SearchAndAddFriendNode.appendChild(AddFriendNode);

  TextNode.appendChild(SearchAndAddFriendNode);

  /// SearchNode

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

  HomeNode.appendChild(SearchLineWrap);

  //// FriendList

  const FriendList = [
    {
      id: 1,
      name: '이장훈',
    },
    {
      id: 2,
      name: '박규정',
    },
    {
      id: 3,
      name: '전민재',
    },
    {
      id: 4,
      name: '김그윽한',
    },
    {
      id: 5,
      name: '김원석',
    },
    {
      id: 1,
      name: '이장훈',
    },
  ];

  const FriendListNode = document.createElement('div');

  FriendList.map(el => {
    const FriendNode = document.createElement('div');
    const FriendName = document.createElement('div');
    const Friendprofile = document.createElement('div');
    Friendprofile.innerText = 'profile';
    FriendName.innerText = el.name;
    FriendNode.appendChild(FriendName); // FriendNode 추가
    FriendListNode.appendChild(Friendprofile);
    FriendListNode.appendChild(FriendNode);
  });

  HomeNode.appendChild(FriendListNode);

  return HomeNode;
};
