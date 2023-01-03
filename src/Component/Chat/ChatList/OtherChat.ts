export function appendOtherTalkNode(
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
