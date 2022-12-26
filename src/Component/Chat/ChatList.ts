import lens from '../../asset/lens.svg';
import profileimage from '../../asset/profile.svg';
import addFriendimage from '../../asset/addFriend.svg';

const TalkListArr = [
  {
    id: 1,
    name: '홍천고바보들',
    status: '오늘 술 ㄱㄱ??',
    date: '어제',
  },
  {
    id: 2,
    name: '거래처 김상훈 팀장님',
    status: '부탁드립니다.',
    date: '어제',
  },
  {
    id: 3,
    name: '플러스친구',
    status: '친구추가해보세요',
    date: '어제',
  },
  {
    id: 4,
    name: '광고성 카카오 톡',
    status: '광고입니다.',
    date: '어제',
  },
  {
    id: 5,
    name: '홍천고바보들',
    status: '오늘 술 ㄱㄱ??',
    date: '어제',
  },
  {
    id: 6,
    name: '거래처 김상훈 팀장님',
    status: '부탁드립니다.',
    date: '어제',
  },
  {
    id: 7,
    name: '플러스친구',
    status: '친구추가해보세요',
    date: '어제',
  },
  {
    id: 8,
    name: '광고성 카카오 톡',
    status: '광고입니다.',
    date: '어제',
  },
];

export const ChatList = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('talklist-wrap');

  appendTitleAndSearchLineNode(MainNode);

  appendChatList(MainNode);

  /// talk-node
  return MainNode;
};

// Title And Search Line
function appendTitleAndSearchLineNode(Node: Element) {
  // 타이틀 노드 생성
  const TitleNode = document.createElement('div');
  TitleNode.classList.add('talklist__title'); // 타이틀 노드 생성

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
  TextNodeInnerText.innerHTML = '채팅';
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
/// ChatList

function appendChatList(Node: Element) {
  const TalkListNodeRel = document.createElement('div');
  TalkListNodeRel.classList.add('talkListrel');
  const TalkListNode = document.createElement('div');
  TalkListNode.classList.add('talkList');

  TalkListArr.map(el => {
    const TalkNode = document.createElement('div');
    TalkNode.classList.add('talkProfile');
    const Talkprofile = document.createElement('img');
    Talkprofile.classList.add('talkProfile__img');
    Talkprofile.src = profileimage;
    const TalkContents = document.createElement('div');
    TalkContents.classList.add('talkProfile__contents');
    const TalkName = document.createElement('div');
    TalkName.classList.add('talkProfile__contents__name');
    const TalkStatus = document.createElement('div');
    TalkStatus.classList.add('talkProfile__name__status');
    if (el.status) {
      TalkStatus.innerText = el.status;
    }
    const TalkDate = document.createElement('div');
    TalkDate.classList.add('talkProfile__Date');
    if (el.date) {
      TalkDate.innerText = el.date;
    }
    TalkName.innerText = el.name;
    TalkNode.appendChild(Talkprofile);
    TalkNode.appendChild(TalkContents); // TalkNode 추가
    TalkNode.appendChild(TalkDate);
    TalkContents.appendChild(TalkName);
    TalkContents.appendChild(TalkStatus);

    TalkNode.tabIndex = 0;

    TalkNode.addEventListener('click', () => {
      TalkNode.focus();
    });

    TalkListNode.appendChild(TalkNode);
  });

  TalkListNodeRel.appendChild(TalkListNode);
  Node.appendChild(TalkListNodeRel);
}
