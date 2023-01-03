export function appendSubmitArea(Node: Element) {
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
