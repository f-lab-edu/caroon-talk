import { TalkObj } from 'data/TalkObjData';
import { appendMyTalkNode } from '../ChatList/Mychat';
import { appendOtherTalkNode } from '../ChatList/OtherChat';
import { makeChatMainContentWrap } from './MakeChatMainContentWrap';

export function appendTalkWrapNode(Node: Element) {
  const ChatMainWrapRelNode = document.createElement('div');
  ChatMainWrapRelNode.classList.add('chat-main__wrap-rel');
  const ChatMainWrapNode = document.createElement('div');
  ChatMainWrapNode.classList.add('chat-main__wrap');

  ChatMainWrapRelNode.appendChild(ChatMainWrapNode);

  let IncertingNode: Element = document.createElement('div');
  const MyId = '이장훈';
  const chatLogLength = TalkObj.chatLog.length;
  TalkObj.chatLog.map(
    (el, index, chatLog) => {
      if (index == 0) {
        // index 0
        if (el[0] === MyId) {
          IncertingNode = makeChatMainContentWrap(ChatMainWrapNode);
        } else {
          IncertingNode = makeChatMainContentWrap(ChatMainWrapNode, el[0]);
        }
      } else if (chatLog[index][0] != chatLog[index - 1][0]) {
        if (el[0] === MyId) {
          IncertingNode = makeChatMainContentWrap(ChatMainWrapNode); // 내 이름으로 시작될 경우 이름 node를 넣지 않아도 된다.
        } else {
          IncertingNode = makeChatMainContentWrap(ChatMainWrapNode, el[0]);
        }
      }

      // 이제 이 곳에 어떤 chat box를 넣으면 될지 정하면 된다.

      if (MyId === el[0]) {
        let startFlag = false;
        let endFlag = false;
        let TimeFlag = false;

        if (chatLogLength - 1 === index) endFlag = true; // 전체에서 마지막일 경우 endFlag on
        if (index === 0) startFlag = true; // 전체에서 처음일 경우 startFlag on

        if (chatLog[index - 1]) {
          if (chatLog[index][0] != chatLog[index - 1][0]) {
            // 박스 내에서 첫 글일 경우
            startFlag = true;
          }
        }
        if (chatLog[index + 1]) {
          if (chatLog[index][0] != chatLog[index + 1][0]) {
            // 박스 내에서 마지막 글일 경우
            endFlag = true;
          }
        }
        appendMyTalkNode(IncertingNode, el, startFlag, endFlag);
      } else {
        let startFlag = false;
        let endFlag = false;

        if (chatLogLength - 1 === index) endFlag = true; // 전체에서 마지막일 경우 endFlag on
        if (index === 0) startFlag = true; // 전체에서 처음일 경우 startFlag on

        if (chatLog[index - 1]) {
          if (chatLog[index][0] != chatLog[index - 1][0]) {
            // 박스 내에서 첫 글일 경우
            startFlag = true;
          }
        }
        if (chatLog[index + 1]) {
          if (chatLog[index][0] != chatLog[index + 1][0]) {
            // 박스 내에서 마지막 글일 경우
            endFlag = true;
          }
        }
        appendOtherTalkNode(IncertingNode, el, startFlag, endFlag);
      }
    }, // 노드 박스 생성
  );

  Node.appendChild(ChatMainWrapRelNode);
}
