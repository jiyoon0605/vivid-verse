import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

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
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: 'user',
        parts: [
          {
            text: '내가 한 문장을 주면 넌 그게 어떤 감각 표현을 사용한 문장인지 알려줘\n\n시각을 이용한 표현: VISION\n청각을 이용한 표현: HEARING\n촉각을 이용한 표현: TOUCH\n후각을 이용한 표현: SMELL\n미각을 이용한 표현: TASTE\n감각을 이용한 표현이 아닐 경우: NOT_SENSE\n두 문장 이상 입력된 경우: OVER_LIMIT',
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: sentence }],
      },
    ],
  });

  const result = await chatSession.sendMessage('INSERT_INPUT_HERE');

  return result.response.text() as SenseResult;
}
