export function appendMyTalkNode(
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
