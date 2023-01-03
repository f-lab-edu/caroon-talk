import profileImageSrc from 'asset/profile.svg';
import { FriendListData } from 'data/FriendListData';

export function appendFriendList(Node: Element) {
  const FriendListNodeRel = document.createElement('div');
  FriendListNodeRel.classList.add('friendListrel');

  const FriendListTitle = document.createElement('div');
  FriendListTitle.classList.add('friendListTitle');

  const FriendListInnerTextSpan = document.createElement('span');
  FriendListInnerTextSpan.innerText = '친구';
  FriendListInnerTextSpan.classList.add('friendListTitle_span_title');
  FriendListTitle.appendChild(FriendListInnerTextSpan);

  const FriendListInnerPeopleNum = document.createElement('span');
  FriendListInnerPeopleNum.innerText = FriendListData.length.toString();
  FriendListInnerPeopleNum.classList.add('friendListTitle_span_number');
  FriendListTitle.appendChild(FriendListInnerPeopleNum);

  Node.appendChild(FriendListTitle);

  const FriendListNode = document.createElement('div');
  FriendListNode.classList.add('friendList');

  FriendListData.map(el => {
    const FriendNode = document.createElement('div');
    FriendNode.classList.add('friendProfile');

    const Friendprofile = document.createElement('img');
    Friendprofile.classList.add('friendProfile__img');
    Friendprofile.src = profileImageSrc;

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
    FriendNode.appendChild(FriendContents);

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
