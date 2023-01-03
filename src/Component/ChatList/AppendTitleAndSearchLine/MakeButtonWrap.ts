import lensImageSrc from 'asset/lens.svg';
import addFriendImageSrc from 'asset/addFriend.svg';

export function makeButtonWrapNode(SearchButtonNode: HTMLImageElement) {
  const TitleButtonWrapNode = document.createElement('div');
  TitleButtonWrapNode.classList.add('title__buttonWrap');

  SearchButtonNode.classList.add('title__buttonWrap__searchButton');
  SearchButtonNode.src = lensImageSrc;
  TitleButtonWrapNode.appendChild(SearchButtonNode); // search 버튼 생성

  const AddFriendNode = document.createElement('img');
  AddFriendNode.classList.add('title__buttonWrap__addFriendButton');
  AddFriendNode.src = addFriendImageSrc;
  TitleButtonWrapNode.appendChild(AddFriendNode); // add friend 버튼 생성

  return TitleButtonWrapNode;
}
