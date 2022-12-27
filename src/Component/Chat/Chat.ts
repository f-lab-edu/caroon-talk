import lens from '../../asset/lens.svg';
import profileimage from '../../asset/profile.svg';
import addFriendimage from '../../asset/addFriend.svg';

const TalkObj = {
  chatName: 'chat-name',
  peopleInfo: {
    이장훈: { profile: 'img' },
    김진현: { profile: 'img' },
    김상훈: { profile: 'img' },
    이도형: { profile: 'img' },
  },
};

export const Chat = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('chat-wrap');

  appendTitle(MainNode);
  /// talk-node
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
    TitleRightNode.appendChild(TitleRightSearchBtn);

    const TitleRightMenuBtn = document.createElement('div');
    TitleRightMenuBtn.classList.add('title-wrap__right__menu-button');
    TitleRightNode.appendChild(TitleRightMenuBtn);

    return TitleRightSearchBtn;
  }

  Node.appendChild(TitleNode);

  appendTitleSearch(TitleNode, TitleRightSearchBtn);
  function appendTitleSearch(Node: Element, SearchButton: Element) {}

  const appendSearchBar = document.createElement('div');
  Node.appendChild(appendSearchBar);
}
