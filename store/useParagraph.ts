import { create } from 'zustand';

import { SenseResult } from '@/types';

export interface ResultType {
  text: string;
  type: SenseResult | 'TEXT';
}

interface ParagraphStore {
  result: ResultType[];
  setResult: Function;
}

const useParagraph = create<ParagraphStore>((set) => ({
  result: [],
  setResult: (result: ResultType[]) => set(() => ({ result })),
}));

export default useParagraph;
