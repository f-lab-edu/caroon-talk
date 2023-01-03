import { TalkObj } from 'data/TalkObjData';
import { appendTitleAndSearchLine } from './AppendTitleAndeSearchLine/AppendTitleAndeSearchLine';
import profileImageSrc from 'asset/profile.svg';

export const Chat = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('chat-wrap');

  appendTitleAndSearchLine(MainNode);

  appendTalkWrapNode(MainNode);

  appendSubmitArea(MainNode);

  return MainNode;
};

function appendTalkWrapNode(Node: Element) {
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

function makeChatMainContentWrap(
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

function appendMyTalkNode(
  Node: Element,
  el: [string, Date, string],
  FirstFlag: boolean,
  EndFlag: boolean,
) {
  const MyTalkWrap = document.createElement('div');
  MyTalkWrap.classList.add('my-talk__wrap');
  const TalkNode = document.createElement('div');
  TalkNode.classList.add('my-talk__talk');
  TalkNode.innerText = el[2];

  if (FirstFlag) {
    const TalkTailNode = document.createElement('div');
    TalkTailNode.classList.add('my-talk__talk__tail');
    TalkNode.appendChild(TalkTailNode);
  }

  MyTalkWrap.appendChild(TalkNode);
  Node.appendChild(MyTalkWrap);
}

function appendOtherTalkNode(
  Node: Element,
  el: [string, Date, string],
  FirstFlag: boolean,
  EndFlag: boolean,
) {
  const OtherTalkWrap = document.createElement('div');
  OtherTalkWrap.classList.add('other-talk__wrap');
  const TalkNode = document.createElement('div');
  TalkNode.classList.add('other-talk__talk');
  TalkNode.innerText = el[2];

  if (FirstFlag) {
    const TalkTailNode = document.createElement('div');
    TalkTailNode.classList.add('other-talk__talk__tail');
    TalkNode.appendChild(TalkTailNode);
  }

  OtherTalkWrap.appendChild(TalkNode);
  Node.appendChild(OtherTalkWrap);
}

function appendMyTimeNode(Node: Element, el: [string, Date, string]) {}

function appendSubmitArea(Node: Element) {
  const FormNode = document.createElement('form');
  FormNode.classList.add('chat__form');

  const TextNode = document.createElement('textarea');
  TextNode.classList.add('chat__form__textarea');
  TextNode.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        TextNode.value = '';
      }
    }
  });

  const SubmitNode = document.createElement('input');
  SubmitNode.type = 'submit';
  SubmitNode.value = 'Submit';
  SubmitNode.classList.add('chat__form__submit');

  SubmitNode.innerText = '전송';

  FormNode.addEventListener('submit', e => {
    e.preventDefault();

    TextNode.value = '';
  });

  FormNode.appendChild(TextNode);
  FormNode.appendChild(SubmitNode);

  Node.appendChild(FormNode);
}
