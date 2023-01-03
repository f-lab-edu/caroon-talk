import { TalkListData } from 'data/ChatListData';
import profileImageSrc from 'asset/profile.svg';

TalkListData;

export function appendChatList(Node: Element) {
  const TalkListNodeRel = document.createElement('div');
  TalkListNodeRel.classList.add('talkListrel');
  const TalkListNode = document.createElement('div');
  TalkListNode.classList.add('talkList');

  TalkListData.map(el => {
    const TalkNode = document.createElement('div');
    TalkNode.classList.add('talkProfile');
    const Talkprofile = document.createElement('img');
    Talkprofile.classList.add('talkProfile__img');
    Talkprofile.src = profileImageSrc;
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
