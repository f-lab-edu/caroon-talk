export const TalkObj = {
  chatName: 'chat-name',
  peopleInfo: {
    이장훈: { profile: 'img' },
    김진현: { profile: 'img' },
    김상훈: { profile: 'img' },
    이도형: { profile: 'img' },
  },
  chatLog: [
    [
      ['이장훈', returnDate('2022-12-28'), '안녕하세요'],
      ['김진현', returnDate('2022-12-28'), '만나서 반갑습니다.'],
      ['김상훈', returnDate('2022-12-28'), '아 저분이 그 분이신가요?'],
      ['이장훈', returnDate('2022-12-28'), '맞아요 저번에 말씀드렸죠?'],
      ['이도형', returnDate('2022-12-28'), '기다리고 있었어요!'],
    ],
  ],
};

function returnDate(parameter: string) {
  const date = new Date(parameter);
  return date;
}
