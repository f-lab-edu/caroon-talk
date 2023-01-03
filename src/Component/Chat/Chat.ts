import { appendTitleAndSearchLine } from './AppendTitleAndeSearchLine/AppendTitleAndeSearchLine';
import { appendTalkWrapNode } from './AppendTalkWrapNode/AppendTalkWrapNode';
import { appendSubmitArea } from './AppendSubmitArea/AppendSubmitArea';

export const Chat = () => {
  const MainNode = document.createElement('div');
  MainNode.classList.add('chat-wrap');

  appendTitleAndSearchLine(MainNode);

  appendTalkWrapNode(MainNode);

  appendSubmitArea(MainNode);

  return MainNode;
};
