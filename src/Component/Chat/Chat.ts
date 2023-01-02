import lens from '../../asset/lens.svg';
import profileimage from '../../asset/profile.svg';
import addFriendimage from '../../asset/addFriend.svg';

function returnDate(parameter: string) {
  const date = new Date(parameter);
  return date;
}

const TalkObj = {
  chatName: 'chat-name',
  peopleInfo: {
    이장훈: { profile: 'img' },
    김진현: { profile: 'img' },
    김상훈: { profile: 'img' },
    이도형: { profile: 'img' },
  },
  chatLog: [
    [
      returnDate('2022-12-28'),
      [
        ['이장훈', '안녕하세요'],
        ['김진현', '만나서 반갑습니다.'],
        ['김상훈', '아 저분이 그 분이신가요?'],
        ['이장훈', '맞아요 저번에 말씀드렸죠?'],
        ['이도형', '기다리고 있었어요!'],
      ],
    ],
  ],
};
0;

export const Chat = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('chat-wrap');

  appendTitle(MainNode);
  /// talk-node

  appendTalkNode(MainNode);

  console.log(TalkObj.chatLog);
  return MainNode;
};

function appendTitle(Node: Element) {
  const TitleNode = document.createElement('div');
  TitleNode.classList.add('title-wrap');

  appendTitleLeft(TitleNode);

  function appendTitleLeft(Node: Element) {
    const TitleLeftNode = document.createElement('div');
    TitleLeftNode.classList.add('title-wrap__left');

    const ProfileImgNode = makeProfileImg();
    TitleLeftNode.appendChild(ProfileImgNode);

    function makeProfileImg() {
      if (Object.keys(TalkObj.peopleInfo).length > 2) {
        // 만약 사람이 3명 이상 있으면
        const ProfileTitleWrapNode = document.createElement('div');
        ProfileTitleWrapNode.classList.add('title-left__profile__wrap');

        const peopleName = Object.keys(TalkObj.peopleInfo);

        peopleName.sort((a, b) => {
          // 자신의 ID를 기준으로 처음은 자신, 나머지는 친구들
          if (a != '이장훈') {
            return 0;
          }
          return a.localeCompare(b);
        });

        peopleName.map((el, index) => {
          // 각자 사람들의 프로필 넣기
          if (index > 3) {
            return; // 이미지는 4개까지만 넣기
          }
          const ProfileTitleNode = document.createElement('div');
          ProfileTitleNode.classList.add('title__profile__img'); // 해당 부분에 이미지에 대한 정보를 넣어야함 (아직 이미지 정렬 안된 상태)

          ProfileTitleWrapNode.appendChild(ProfileTitleNode);
        });

        if (Object.keys(TalkObj.peopleInfo).length == 3) {
          const ProfileTitleNode = document.createElement('div');
          ProfileTitleNode.classList.add('title__profile__img'); // 비어있는 이미지 넣을 예정 투명 이미지 넣기 3명이면 한개 더 들어가야 꼴이 맞음
          ProfileTitleWrapNode.appendChild(ProfileTitleNode);
        }
        return ProfileTitleWrapNode;
      }

      const ProfileTitleOneNode = document.createElement('div');
      ProfileTitleOneNode.classList.add('title-left__profile__One');

      return ProfileTitleOneNode;
    } //프로필 이미지 만들기

    const NameAndPeopleWrap = makeNameAndPeopleWrap();
    TitleLeftNode.appendChild(NameAndPeopleWrap);
    function makeNameAndPeopleWrap() {
      const ChatNameAndPeopleWrap = document.createElement('div'); // 사람 wrap
      ChatNameAndPeopleWrap.classList.add('title-left__info__wrap');

      const ChatNameNode = document.createElement('div'); // 이름
      ChatNameNode.classList.add('title-left__info__name');
      ChatNameNode.innerText = TalkObj.chatName;
      ChatNameAndPeopleWrap.appendChild(ChatNameNode);

      const PeopleNode = document.createElement('div'); // 사람 수
      PeopleNode.classList.add('title-left__people-info');

      const PeopleImgNode = document.createElement('div'); // 추후 이미지로 변경 예정
      PeopleImgNode.classList.add('left-info__people-info__img');
      PeopleNode.appendChild(PeopleImgNode);

      const PeopleNumSpan = document.createElement('span');
      PeopleNumSpan.classList.add('left-info__people-info__num');
      PeopleNumSpan.innerText = Object.keys(
        TalkObj.peopleInfo,
      ).length.toString();
      PeopleNode.appendChild(PeopleNumSpan);

      ChatNameAndPeopleWrap.appendChild(PeopleNode);

      return ChatNameAndPeopleWrap;
    }

    Node.appendChild(TitleLeftNode);
  }

  const TitleRightSearchBtn = appendTitleRight(TitleNode);

  function appendTitleRight(Node: Element) {
    const TitleRightNode = document.createElement('div');
    TitleRightNode.classList.add('title-wrap__right');

    const TitleRightSearchBtn = document.createElement('div');
    TitleRightSearchBtn.classList.add('title-wrap__right__search-button');
    TitleRightSearchBtn.innerText = 'O';
    TitleRightNode.appendChild(TitleRightSearchBtn);

    const TitleRightMenuBtn = document.createElement('div');
    TitleRightMenuBtn.classList.add('title-wrap__right__menu-button');
    TitleRightNode.appendChild(TitleRightMenuBtn);

    Node.appendChild(TitleRightNode);

    return TitleRightSearchBtn;
  }

  Node.appendChild(TitleNode);

  appendSearch(Node, TitleRightSearchBtn);

  function appendSearch(Node: Element, SearchButton: Element) {
    const SearchWrapNode = document.createElement('div');
    SearchWrapNode.classList.add('search-wrap');

    appendSearchLeft(SearchWrapNode);
    function appendSearchLeft(Node: Element) {
      const SearchLeftNode = document.createElement('div');
      SearchLeftNode.classList.add('search-wrap__left');
      Node.appendChild(SearchLeftNode);

      const SearchIconImg = document.createElement('div');
      SearchIconImg.classList.add('search-wrap__left__icon-img');
      SearchLeftNode.appendChild(SearchIconImg);

      const SearchInput = document.createElement('input');
      SearchInput.classList.add('search-wrap__left__input');
      SearchInput.placeholder = '대화내용 검색';
      SearchLeftNode.appendChild(SearchInput);

      const SearchBtn = document.createElement('div');
      SearchBtn.classList.add('search-wrap__left__button');
      SearchLeftNode.appendChild(SearchBtn);
    }

    appendSearchRight(SearchWrapNode);
    function appendSearchRight(Node: Element) {
      const SearchRightNode = document.createElement('div');
      SearchRightNode.classList.add('search-wrap__right');

      const SearchCloseBtn = document.createElement('div');
      SearchCloseBtn.classList.add('search-wrap__right__close-btn');
      SearchCloseBtn.innerText = 'X';
      SearchRightNode.appendChild(SearchCloseBtn);

      SearchCloseBtn.addEventListener('click', () => {
        if (Node.classList.contains('on')) {
          Node.classList.remove('on');
        } else {
          Node.classList.add('on');
        }
      });

      Node.appendChild(SearchRightNode);
    }

    SearchButton.addEventListener('click', () => {
      if (SearchWrapNode.classList.contains('on')) {
        SearchWrapNode.classList.remove('on');
      } else {
        SearchWrapNode.classList.add('on');
      }
    });

    Node.appendChild(SearchWrapNode);
  }
}

function appendTalkNode(Node: Element) {}

function appendFriendTalkNode(Node: Element) {}
function appendMyTalkNode(Node: Element) {}
