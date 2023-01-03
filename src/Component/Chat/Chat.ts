import { TalkObj } from 'data/TalkObjData';
import { appendTitleAndSearchLine } from './AppendTitleAndeSearchLine/AppendTitleAndeSearchLine';

export const Chat = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('chat-wrap');

  appendTitleAndSearchLine(MainNode);
  /// talk-node

  appendTalkWrapNode(MainNode);

  return MainNode;
};

function appendTalkWrapNode(Node: Element) {
  const ChatMainWrapNode = document.createElement('div');
  ChatMainWrapNode.classList.add('chat-main__wrap');

  Node.appendChild(ChatMainWrapNode);
}
function appendFriendTalkNode(Node: Element) {}
function appendMyTalkNode(Node: Element) {}
function appendMyTimeNode(Node: Element) {}
