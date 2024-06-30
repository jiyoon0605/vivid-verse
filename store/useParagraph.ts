import { create } from 'zustand';

import { SenseResult } from '@/types';

interface ResultType {
  text: string;
  type: SenseResult;
}

interface ParagraphStore {
  result: ResultType[];
  setResult: Function;
}

const useParagraph = create<ParagraphStore>((set) => ({
  result: [],
  setResult: (result: ResultType[]) => set((state) => ({ result })),
}));

export default useParagraph;
