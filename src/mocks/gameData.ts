interface IGameQuestion {
  id: number;
  question: string;
}

const gameQuestion: IGameQuestion[] = [
  {
    id: 1,
    question: '가장 좋아하는 계절을 골라주세요.',
  },
  {
    id: 2,
    question: '가장 방문하고 싶은 장소를 골라주세요.',
  },
  {
    id: 3,
    question: '가장 좋아하는 시간대를 골라주세요.',
  },
  {
    id: 4,
    question: '선호하는 색상 조합을 골라주세요.',
  },
  {
    id: 5,
    question: '나와 잘 어울리는 음료를 골라주세요.',
  },
  {
    id: 6,
    question: '가장 떠나고 싶은 여행지를 골라주세요.',
  },
  {
    id: 7,
    question: '좋아하는 일상 속 냄새를 골라주세요.',
  },
  {
    id: 8,
    question: '향수를 사용해 연출하고 싶은 이미지를 골라주세요.',
  },
];

export interface IAnswer {
  id: number;
  answer: string;
}

export interface IGameAnswer {
  questionId: number;
  id: number;
  answer: IAnswer[];
}

const gameAnswer: IGameAnswer[] = [
  {
    questionId: 1,
    id: 1,
    answer: [
      {
        id: 1,
        answer: '봄',
      },
      {
        id: 2,
        answer: '여름',
      },
      {
        id: 3,
        answer: '가을',
      },
      {
        id: 4,
        answer: '겨울',
      },
    ],
  },
  {
    questionId: 2,
    id: 2,
    answer: [
      {
        id: 1,
        answer: '청량함 가득한 숲 속',
      },
      {
        id: 2,
        answer: '따스한 햇살의 피크닉',
      },
      {
        id: 3,
        answer: '음악이 흐르는 재즈바',
      },
      {
        id: 4,
        answer: '눈 내린 오두막 벽난로',
      },
    ],
  },
  {
    questionId: 3,
    id: 3,
    answer: [
      {
        id: 1,
        answer: '아침',
      },
      {
        id: 2,
        answer: '점심',
      },
      {
        id: 3,
        answer: '저녁',
      },
      {
        id: 4,
        answer: '새벽',
      },
    ],
  },
  {
    questionId: 4,
    id: 4,
    answer: [
      {
        id: 1,
        answer: '연두 & 하늘',
      },
      {
        id: 2,
        answer: '노랑 & 핑크',
      },
      {
        id: 3,
        answer: '베이지 & 초코',
      },
      {
        id: 4,
        answer: '블랙 & 그레이',
      },
    ],
  },
  {
    questionId: 5,
    id: 5,
    answer: [
      {
        id: 1,
        answer: '블루레몬에이드',
      },
      {
        id: 2,
        answer: '요거트스무디',
      },
      {
        id: 3,
        answer: '초코프라푸치노',
      },
      {
        id: 4,
        answer: '아메리카노',
      },
    ],
  },
  {
    questionId: 6,
    id: 6,
    answer: [
      {
        id: 1,
        answer: '스위스의 알프스 호수',
      },
      {
        id: 2,
        answer: '프랑스 파리의 에펠탑 광장',
      },
      {
        id: 3,
        answer: '체코 프라하의 크리스마스 마켓',
      },
      {
        id: 4,
        answer: '미국 뉴욕의 타임스퀘어',
      },
    ],
  },
  {
    questionId: 7,
    id: 7,
    answer: [
      {
        id: 1,
        answer: '비 온 다음 날 잔디 냄새',
      },
      {
        id: 2,
        answer: '꽃이 핀 정원의 바람 냄새',
      },
      {
        id: 3,
        answer: '방금 마른 포근한 이불 냄새',
      },
      {
        id: 4,
        answer: '숲속의 절에서 피운 향 냄새',
      },
    ],
  },
  {
    questionId: 8,
    id: 8,
    answer: [
      {
        id: 1,
        answer: '깨끗한',
      },
      {
        id: 2,
        answer: '부드러운',
      },
      {
        id: 3,
        answer: '분위기 있는',
      },
      {
        id: 4,
        answer: '따뜻한',
      },
    ],
  },
];

export { gameQuestion, gameAnswer };
