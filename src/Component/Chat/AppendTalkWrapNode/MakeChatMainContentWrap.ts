import profileImageSrc from 'asset/profile.svg';

export function makeChatMainContentWrap(
  ChatMainWrapNode: Element,
  TalkedName?: string,
) {
  const ChatMainPersonWrap = document.createElement('div');
  ChatMainPersonWrap.classList.add('chat-main__person__wrap');
  ChatMainWrapNode.appendChild(ChatMainPersonWrap);

  const ContentLine = document.createElement('div');
  ContentLine.classList.add('chat-main__person__content-wrap');

  if (TalkedName) {
    // 프로필 이미지 생성
    const ProfileNode = document.createElement('div');
    ProfileNode.classList.add('chat-main__person__profile-wrap');
    const ProfileImgNode = document.createElement('img');
    ProfileImgNode.classList.add('chat-main__person__profile-img');
    ProfileImgNode.src = profileImageSrc;
    ProfileNode.appendChild(ProfileImgNode);

    ChatMainPersonWrap.appendChild(ProfileNode);

    const NameNode = document.createElement('div');
    NameNode.classList.add('chat-main__person__content-name');
    NameNode.innerText = TalkedName;
    ContentLine.appendChild(NameNode);
  }

  ChatMainPersonWrap.appendChild(ContentLine);

  return ContentLine;
}
