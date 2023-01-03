export function MyChat(time: string) {
  const MyChatWrap = document.createElement('div');
  MyChatWrap.classList.add('chat__my-chat');

  const MyChatInfo = document.createElement('div');
  MyChatInfo.classList.add('chat__my-chat__info');

  const MyChatTime = document.createElement('div');
  MyChatTime.classList.add('chat__my-chat__time');

  const MyChatBubbleTail = document.createElement('div');
  MyChatBubbleTail.classList.add('chat__my-chat__bubble-tail');
}
