import lens from '../../asset/lens.svg';
import profileimage from '../../asset/profile.svg';
import addFriendimage from '../../asset/addFriend.svg';
import talkBtn from '../../asset/talkBtn.svg';
import homeBtn from '../../asset/HomeBtn.svg';
import setting from '../../asset/setting.svg';

export const Home = () => {
  //  const historyApp = document.getElementsByClassName('history-app')[0];

  // console.log(homeBtn);
  // console.log(talkBtn);
  // console.log(setting);

  const HomeNode = document.createElement('div');

  HomeNode.classList.add('home-wrap');

  const TextNode = document.createElement('div');

  TextNode.classList.add('home__title');

  /// TextNode

  const TextNodeInnerText = document.createElement('span');
  TextNodeInnerText.innerHTML = '친구';
  TextNode.appendChild(TextNodeInnerText);
  HomeNode.appendChild(TextNode);

  const SearchAndAddFriendNode = document.createElement('div');
  SearchAndAddFriendNode.classList.add('title__buttonWrap');

  const SearchNode = document.createElement('img');
  SearchNode.classList.add('title__buttonWrap__searchButton');
  SearchNode.src = lens;

  const AddFriendNode = document.createElement('img');
  AddFriendNode.classList.add('title__buttonWrap__addFriendButton');
  AddFriendNode.src = addFriendimage;

  SearchAndAddFriendNode.appendChild(SearchNode);
  SearchAndAddFriendNode.appendChild(AddFriendNode);

  TextNode.appendChild(SearchAndAddFriendNode);

  /// SearchNode

  const SearchLineWrap = document.createElement('div');
  SearchLineWrap.classList.add('searchLine');

  const SearchLineWrapLeft = document.createElement('div');
  SearchLineWrapLeft.classList.add('searchLine__left');
  const SearchLineWrapRight = document.createElement('div');
  SearchLineWrapRight.classList.add('searchLine__right');

  SearchLineWrap.appendChild(SearchLineWrapLeft);
  SearchLineWrap.appendChild(SearchLineWrapRight);

  const SearchLineInputWrap = document.createElement('div'); // 추후 img로 변경
  SearchLineInputWrap.classList.add('searchLine__left__inputWrap');

  const SearchLineimg = document.createElement('img'); // 추후 img로 변경
  SearchLineimg.src = lens;
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

  const SearchLineRightCloseBtn = document.createElement('div');
  SearchLineWrapRight.appendChild(SearchLineRightCloseBtn);
  SearchLineRightCloseBtn.innerText = 'X';

  SearchLineRightCloseBtn.classList.add('searchLine__right__closeButton');

  SearchNode.addEventListener('click', function SearchButtonClick(e) {
    console.log('wow');
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
      status: '오늘도 좋은 하루',
    },
    {
      id: 2,
      name: '박규정',
      status: '심심해요',
    },
    {
      id: 3,
      name: '전민재',
      status: '뭐가 문제일까',
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
      id: 6,
      name: '이장훈',
    },
    {
      id: 7,
      name: '이장훈',
      status: '오늘도 좋은 하루',
    },
    {
      id: 8,
      name: '박규정',
      status: '심심해요',
    },
    {
      id: 9,
      name: '전민재',
      status: '뭐가 문제일까',
    },
    {
      id: 10,
      name: '김그윽한',
    },
    {
      id: 11,
      name: '김원석',
    },
    {
      id: 12,
      name: '이장훈',
    },
  ];

  const FriendListNodeRel = document.createElement('div');
  FriendListNodeRel.classList.add('friendListrel');

  const FriendListNode = document.createElement('div');
  FriendListNode.classList.add('friendList');

  FriendList.map(el => {
    const FriendNode = document.createElement('div');
    FriendNode.classList.add('friendProfile');

    const Friendprofile = document.createElement('img');
    Friendprofile.classList.add('friendProfile__img');
    Friendprofile.src = profileimage;

    const FriendContents = document.createElement('div');
    FriendContents.classList.add('friendProfile__contents');

    const FriendName = document.createElement('div');
    FriendName.classList.add('friendProfile__contents__name');

    const FriendStatus = document.createElement('div');
    FriendStatus.classList.add('friendProfile__name__status');

    if (el.status) {
      FriendStatus.innerText = el.status;
    }

    FriendName.innerText = el.name;
    FriendNode.appendChild(Friendprofile);
    FriendNode.appendChild(FriendContents); // FriendNode 추가

    FriendContents.appendChild(FriendName);
    FriendContents.appendChild(FriendStatus);

    FriendListNode.appendChild(FriendNode);
  });
  FriendListNodeRel.appendChild(FriendListNode);
  HomeNode.appendChild(FriendListNodeRel);

  return HomeNode;
};
