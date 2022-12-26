import lens from '../../asset/lens.svg';
import profileimage from '../../asset/profile.svg';
import addFriendimage from '../../asset/addFriend.svg';
import talkBtn from '../../asset/talkBtn.svg';
import homeBtn from '../../asset/HomeBtn.svg';
import setting from '../../asset/setting.svg';

export const ChatList = () => {
  const TalkListWrap = document.createElement('div');

  TalkListWrap.classList.add('talklist-wrap');

  const TextNode = document.createElement('div');

  TextNode.classList.add('talklist__title');

  const TextNodeInnerText = document.createElement('span');
  TextNodeInnerText.innerHTML = '채팅';
  TextNode.appendChild(TextNodeInnerText);
  TalkListWrap.appendChild(TextNode);

  const SearchAndAddTalkNode = document.createElement('div');
  SearchAndAddTalkNode.classList.add('title__buttonWrap');

  const SearchNode = document.createElement('img');
  SearchNode.classList.add('title__buttonWrap__searchButton');
  SearchNode.src = lens;

  const AddTalkNode = document.createElement('img');
  AddTalkNode.classList.add('title__buttonWrap__addFriendButton');
  AddTalkNode.src = addFriendimage;

  SearchAndAddTalkNode.appendChild(SearchNode);
  SearchAndAddTalkNode.appendChild(AddTalkNode);

  TextNode.appendChild(SearchAndAddTalkNode);

  /// SearchNode

  const SearchLineWrap = document.createElement('div');
  SearchLineWrap.classList.add('searchLineFriend');

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
  SearchInput.placeholder = '채팅방, 참여자 검색';

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

  TalkListWrap.appendChild(SearchLineWrap);

  /// talk-node

  const TalkList = [
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

  const TalkListNodeRel = document.createElement('div');
  TalkListNodeRel.classList.add('talkListrel');

  const TalkListNode = document.createElement('div');
  TalkListNode.classList.add('talkList');

  TalkList.map(el => {
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

    TalkListNode.appendChild(TalkNode);
  });
  TalkListNodeRel.appendChild(TalkListNode);
  TalkListWrap.appendChild(TalkListNodeRel);

  return TalkListWrap;
};
