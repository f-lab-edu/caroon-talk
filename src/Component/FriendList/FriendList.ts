import lens from '../../asset/lens.svg';
import profileimage from '../../asset/profile.svg';
import addFriendimage from '../../asset/addFriend.svg';
import talkBtn from '../../asset/talkBtn.svg';
import homeBtn from '../../asset/HomeBtn.svg';
import setting from '../../asset/setting.svg';

const FriendListArr = [
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

const MyProfileInfo = {
  id: 1,
  name: '이장훈',
  status: '오늘도 좋은 하루',
};

export const FriendList = () => {
  const MainNode = document.createElement('div');

  MainNode.classList.add('friendList-wrap');

  appendTitleAndSearchLineNode(MainNode);

  appendMyProfile(MainNode);

  appendFriendList(MainNode);

  return MainNode;
};

// Title Ande Search Line
function appendTitleAndSearchLineNode(Node: Element) {
  // 타이틀 노드 생성
  const TitleNode = document.createElement('div');
  TitleNode.classList.add('friendList__title'); // 타이틀 노드 생성

  const TextNodeInnerText = makeTitleText(); // 타이틀 텍스트 생성
  TitleNode.appendChild(TextNodeInnerText); // 타이틀 노드 텍스트 삽입

  const SearchButtonNode = document.createElement('img'); // 다른 Property인 SearchLinWrap과 같이 사용해야하므로 아래 makeButtonWrap_getSearchButton_Node에 반환값을 만들었다. 하지만 더 좋은 방법이 있을 것 같은데;;
  const TitleButtonWrapNode = makeButtonWrapNode(SearchButtonNode); // 타이틀 버튼 생성
  TitleNode.appendChild(TitleButtonWrapNode); // 타이틀 버튼 wrap 삽입

  Node.appendChild(TitleNode); // 타이틀 삽입 완료

  // 타이틀 노드 생성 완료

  // 검색 노드 생성
  const SearchLineWrap = makeSearchLine(); // 검색 창 생성
  Node.appendChild(SearchLineWrap); // 검색 창 삽입

  //검색 노드 생성 완료

  /// 이벤트 설정

  SearchButtonNode.addEventListener('click', () => {
    const SearchLineWrapClassList = SearchLineWrap.classList;
    if (SearchLineWrapClassList.contains('on')) {
      console.log(SearchLineWrapClassList.contains('on'), true);
      SearchLineWrapClassList.remove('on');
    } else {
      console.log(SearchLineWrapClassList.contains('on'), false);
      SearchLineWrapClassList.add('on');
    }
  }); // 우측 상단 돋보기 버튼 이벤트
}

function makeTitleText() {
  const TextNodeInnerText = document.createElement('span'); // 타이틀 텍스트 노드 생성
  TextNodeInnerText.innerHTML = '친구';
  return TextNodeInnerText;
}

function makeButtonWrapNode(SearchButtonNode: HTMLImageElement) {
  const TitleButtonWrapNode = document.createElement('div');
  TitleButtonWrapNode.classList.add('title__buttonWrap');

  SearchButtonNode.classList.add('title__buttonWrap__searchButton');
  SearchButtonNode.src = lens;
  TitleButtonWrapNode.appendChild(SearchButtonNode); // search 버튼 생성

  const AddFriendNode = document.createElement('img');
  AddFriendNode.classList.add('title__buttonWrap__addFriendButton');
  AddFriendNode.src = addFriendimage;
  TitleButtonWrapNode.appendChild(AddFriendNode); // add friend 버튼 생성

  return TitleButtonWrapNode;
}

function makeSearchLine() {
  const SearchLineWrap = document.createElement('div'); // SearchLine Wrap 생성
  SearchLineWrap.classList.add('searchLine');

  makeSearchLineLeft(SearchLineWrap);

  function makeSearchLineLeft(Node: Element) {
    const SearchLineWrapLeft = document.createElement('div'); // SearchLine Left
    SearchLineWrapLeft.classList.add('searchLine__left');

    const SearchLineInputWrap = document.createElement('div'); // input Wrap 생성
    SearchLineInputWrap.classList.add('searchLine__left__inputWrap');

    const SearchLineimg = document.createElement('img'); // 추후 img로 변경 이미지 생성
    SearchLineimg.src = lens;
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
/// My Profile

function appendMyProfile(Node: Element) {
  const MyProfileNode = document.createElement('div');
  MyProfileNode.classList.add('myProfile');

  const MyProfileImgNode = document.createElement('img');
  MyProfileImgNode.classList.add('myProfile__img');
  MyProfileImgNode.src = profileimage;

  const MyProfileContents = document.createElement('div');
  MyProfileContents.classList.add('myProfile__contents');

  const MyProfileName = document.createElement('div');
  MyProfileName.classList.add('myProfile__contents__name');

  const MyProfileStatus = document.createElement('div');
  MyProfileStatus.classList.add('myProfile__name__status');

  if (MyProfileInfo.status) {
    MyProfileStatus.innerText = MyProfileInfo.status;
  }

  MyProfileName.innerText = MyProfileInfo.name;
  MyProfileNode.appendChild(MyProfileImgNode);
  MyProfileNode.appendChild(MyProfileContents); // MyProfileNode 추가
  //
  MyProfileContents.appendChild(MyProfileName);
  MyProfileContents.appendChild(MyProfileStatus);

  MyProfileNode.tabIndex = 0;

  MyProfileNode.addEventListener('click', () => {
    MyProfileNode.focus();
  });

  Node.appendChild(MyProfileNode);
}

///Friend List

function appendFriendList(Node: Element) {
  const FriendListNodeRel = document.createElement('div');
  FriendListNodeRel.classList.add('friendListrel');

  const FriendListTitle = document.createElement('div');
  FriendListTitle.classList.add('friendListTitle');

  const FriendListInnerTextSpan = document.createElement('span');
  FriendListInnerTextSpan.innerText = '친구';
  FriendListInnerTextSpan.classList.add('friendListTitle_span_title');
  FriendListTitle.appendChild(FriendListInnerTextSpan);

  const FriendListInnerPeopleNum = document.createElement('span');
  FriendListInnerPeopleNum.innerText = FriendList.length.toString();
  FriendListInnerPeopleNum.classList.add('friendListTitle_span_number');
  FriendListTitle.appendChild(FriendListInnerPeopleNum);

  Node.appendChild(FriendListTitle);

  //make Friend List

  const FriendListNode = document.createElement('div');
  FriendListNode.classList.add('friendList');

  FriendListArr.map(el => {
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

    FriendNode.tabIndex = 0;

    FriendNode.addEventListener('click', () => {
      FriendNode.focus();
    });

    FriendListNode.appendChild(FriendNode);
  });

  FriendListNodeRel.appendChild(FriendListNode);
  Node.appendChild(FriendListNodeRel);
}
