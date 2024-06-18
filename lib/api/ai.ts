import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

import { SenseResult } from '@/types';

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
