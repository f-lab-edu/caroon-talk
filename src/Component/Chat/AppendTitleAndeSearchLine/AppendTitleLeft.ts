import { TalkObj } from 'data/TalkObjData';
import profileImageSrc from 'asset/profile.svg';

export function appendTitleLeft(Node: Element) {
  const TitleLeftNode = document.createElement('div');
  TitleLeftNode.classList.add('title-wrap__left');

  const ProfileImgNode = makeProfileImg();
  TitleLeftNode.appendChild(ProfileImgNode);

  function makeProfileImg() {
    if (Object.keys(TalkObj.peopleInfo).length > 2) {
      // 만약 사람이 자신 포함 3명 이상 있으면
      const ProfileTitleWrapNode = document.createElement('div');
      ProfileTitleWrapNode.classList.add('title-left__profile__wrap');

      const peopleName = Object.keys(TalkObj.peopleInfo);

      peopleName.sort((a, b) => {
        if (a != '이장훈') {
          // 나와의 대화는 프로필이 필요 없다.
          return 0;
        }
        return a.localeCompare(b);
      });

      peopleName.map((el, index) => {
        // 각자 사람들의 프로필 넣기
        if (index > 3) {
          return; // 이미지는 4개까지만 넣기
        }
        const ProfileTitleNode = document.createElement('img');
        ProfileTitleNode.src = profileImageSrc;
        ProfileTitleNode.classList.add('title__profile__img'); // 해당 부분에 이미지에 대한 정보를 넣어야함 (아직 이미지 정렬 안된 상태)

        ProfileTitleWrapNode.appendChild(ProfileTitleNode);
      });

      if (Object.keys(TalkObj.peopleInfo).length == 3) {
        //만약 인원이 3명일 경우
        const ProfileTitleNode = document.createElement('img');
        ProfileTitleNode.src = profileImageSrc;
        ProfileTitleNode.classList.add('title__profile__img'); // 비어있는 이미지 넣을 예정 투명 이미지 넣기 3명이면 한개 더 들어가야 꼴이 맞음
        ProfileTitleWrapNode.appendChild(ProfileTitleNode);
      }
      return ProfileTitleWrapNode;
    }

    //인원이 상대방 1:1 대회일 경우 프로필은 하나만 있으면 된다.
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

    const PeopleImgNode = document.createElement('img'); // 추후 이미지로 변경 예정
    PeopleImgNode.src = profileImageSrc;
    PeopleImgNode.classList.add('left-info__people-info__img');
    PeopleNode.appendChild(PeopleImgNode);

    const PeopleNumSpan = document.createElement('span');
    PeopleNumSpan.classList.add('left-info__people-info__num');
    PeopleNumSpan.innerText = Object.keys(TalkObj.peopleInfo).length.toString();
    PeopleNode.appendChild(PeopleNumSpan);

    ChatNameAndPeopleWrap.appendChild(PeopleNode);

    return ChatNameAndPeopleWrap;
  }

  Node.appendChild(TitleLeftNode);
}
