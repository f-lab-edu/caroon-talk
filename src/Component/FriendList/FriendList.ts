import { appendTitleAndSearchLineNode } from './AppendTitleAndSearchLine/AppendTitleAndSearchLine';
import { appendMyProfile } from './AppendMyProfile/AppendMyProfile';
import { appendFriendList } from './AppendFriendList/AppendFriendList';

export const FriendList = () => {
  const MainNode = document.createElement('div');

  MainNode.classList.add('friendList-wrap');

  appendTitleAndSearchLineNode(MainNode);

  appendMyProfile(MainNode);

  appendFriendList(MainNode);

  return MainNode;
};
