import { appendChatList } from './AppendChatList/AppendChatLIst';
import { appendTitleAndSearchLineNode } from './AppendTitleAndSearchLine/AppendTitleAndSearchLine';

export const ChatList = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('talklist-wrap');

  appendTitleAndSearchLineNode(MainNode);

  appendChatList(MainNode);

  /// talk-node
  return MainNode;
};

// Title And Search Line
/// ChatList
