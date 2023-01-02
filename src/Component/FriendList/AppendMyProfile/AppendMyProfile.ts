import profileImageSrc from 'asset/profile.svg';
import { MyProfileInfo } from 'data/MyProfileInfo';

export function appendMyProfile(Node: Element) {
  const MyProfileNode = document.createElement('div');
  MyProfileNode.classList.add('myProfile');

  const MyProfileImgNode = document.createElement('img');
  MyProfileImgNode.classList.add('myProfile__img');
  MyProfileImgNode.src = profileImageSrc;

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
