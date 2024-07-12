import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

import { SenseResult, SentenceConvertResponse } from '@/types';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey as string);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

export async function getSenseType(sentence: string) {
  const parts = [
    { text: 'input: 바다 같이 푸른 눈동자' },
    { text: 'output: VISION' },
    { text: 'input: 부드러운 벨벳 같은 목소리' },
    { text: 'output: TOUCH' },
    { text: 'input: 신선한 풀 내음 같은 웃음' },
    { text: 'output: SMELL' },
    { text: 'input: 맑은 종소리 같은 웃음' },
    { text: 'output: HEARING' },
    { text: 'input: 씁쓸한 기분' },
    { text: 'output: TASTE' },
    { text: 'input: 다른것' },
    { text: 'output: NOT_SENSE' },
    { text: 'input: 감각이 아닌 표현' },
    { text: 'output: NOT_SENSE' },
    { text: 'input: 두 문장 이상' },
    { text: 'output: OVER_LIMIT' },
    { text: 'input: 그 애 목소리는 시원한 바닷 바람 같았다. 참 달콤한 기분이였다.' },
    { text: 'output: OVER_LIMIT' },
    { text: 'input: 바다 소리가 멀리서 들려와 마음을 편안하게 만드는 그런 날이었어.' },
    { text: 'output: HEARING' },
    { text: 'input: 토마토 같이 붉어진 얼굴로 말했다. 너는 바닷 바람 같아.' },
    { text: 'output: OVER_LIMIT' },
    { text: 'input: 바보같아' },
    { text: 'output: NOT_SENSE' },
    { text: `input: ${sentence}` },
    { text: 'output: ' },
  ];
  const result = await model.generateContent({
    contents: [{ role: 'user', parts }],
    generationConfig,
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
      },
    ],
  });

  return result.response.text() as SenseResult;
}

export async function changeSentence(sentence: string, sense: SenseResult) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          {
            text: '"문장, 감각" 형태로 입력이 들어오면 문장의 의미와 역할이 달라지지 않게 다른 오감을 사용한 표현으로 변경해줘. 다른 문장과 함께 사용해야하기 때문에 구조 자체에 변형이 있어선 안돼. 변경 불가능하면 두세번 더 시도해 보고 정 안될때만 문자열 "FAIL"을 반환해. JSON 형식으로 반환해\n\n출력 형식\n{\n  VISION,\n  SMELL,\n  HEARING,\n  TOUCH,\n  TASTE,\n}',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(`${sentence}, ${sense}`);

  return parseJson(result.response.text());
}

export async function rechangeSentence(
  sentence: string,
  sense: SenseResult,
  response: SentenceConvertResponse,
) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          {
            text: '"문장, 감각" 형태로 입력이 들어오면 문장의 의미와 역할이 달라지지 않게 다른 오감을 사용한 표현으로 변경해줘. 다른 문장과 함께 사용해야하기 때문에 구조 자체에 변형이 있어선 안돼. 변경 불가능하면  문자열 "FAIL"을 반환하고, JSON 형식으로 반환해\n\n출력 형식\n{\n  VISION,\n  SMELL,\n  HEARING,\n  TOUCH,\n  TASTE,\n}',
          },
          { text: `${sentence}, ${sense}` },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: JSON.stringify(response),
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage('다른 표현으로 다시 변환해줘');

  return parseJson(result.response.text());
}

export async function analysisParagraph(paragraph: string) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          {
            text: '주어진 글귀에 사용된 감각적 표현을 찾고 오감중 어떤 표현을 사용한 것인지 분석해줘. 만약 감각을 사용한 표현이 아니라면 "TEXT" 로 명시해줘. 문장의 유실이 있어선 안돼\n한 문장에 여러 감각적 표현이 있으면 나눠서 출력해줘\n개행이 있을경우 "\\n"로 치환해줘.\nJSON.parse 로 파싱 할 수 있게 코드 캡션을 사용하지 말고 문자열로 반환해줘.\n',
          },
          {
            text: '손끝으로 느껴지는 종이의 거친 질감은 오랜 세월의 흔적을 고스란히 담고 있었다. 나는 서가 한쪽에 놓인, 바람에 살랑거리는 커튼을 지나 작은 창문 앞으로 다가갔다. 창문을 통해 들어오는 부드러운 바람은 나뭇잎이 바스락거리는 소리와 함께 기분 좋은 시원함을 전해주었다',
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: '[\n  {\n    "text": "손끝으로 느껴지는 종이의 거친 질감은 오랜 세월의 흔적을 고스란히 담고 있었다.",\n    "type": "TOUCH"\n  },\n  {\n    "text": "나는 서가 한쪽에 놓인, 바람에 살랑거리는 커튼을 지나 작은 창문 앞으로 다가갔다.",\n    "type": "TEXT"\n  },\n  {\n    "text": "창문을 통해 들어오는 부드러운 바람은",\n    "type": "TOUCH"\n  },\n  {\n    "text": "나뭇잎이 바스락거리는 소리와 함께",\n    "type": "HEARING"\n  },\n  {\n    "text": "기분 좋은 시원함을 전해주었다.",\n    "type": "TOUCH"\n  }\n]',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(paragraph.trim());

  return parseJson(result.response.text());
}

const parseJson = (response: string) => {
  try {
    return JSON.parse(response.replaceAll('```json', '').replaceAll('```', ''));
  } catch (e) {
    return JSON.parse(`[${response.replaceAll('```json', '').replaceAll('```', '')}]`);
  }
};
