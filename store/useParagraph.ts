import { create } from 'zustand';
import { SenseResult } from '@/types';

interface ResultType {
  text: string;
  type: SenseResult;
}

const useParagraph = create<{ result: ResultType[], setResult: Function }>((set) => ({
  result: [],
  setResult: (result: ResultType[]) => () => ({ result }),
}));

export default useParagraph;
