import { Module } from "vuex";
import { RootState } from "..";

export interface GameState {
  answer: string;
  count: number;
  query: string[];
  matchStates: string[][];
}

export const game: Module<GameState, RootState> = {
  namespaced: true,
  state: () => ({
    answer: "WORLD", // 정답
    count: 0, // 정답 횟수
    query: [], // 워들 집합
    matchStates: [], // 워들 매치 상태
  }),
  getters: {
    getAnswerMap: (state) => {
      const map = new Map();
      state.answer.split("").forEach((value, index) => {
        const arr = map.has(value) ? map.get(value) : [];
        arr.push(index);
        map.set(value, arr);
      });
      return map;
    },
  },
  mutations: {
    increaseQueryInputCount: (state, count: number) => {
      state.count = count;
    },
    updateQueryWord: (state, word: string) => {
      state.query[state.count] = word;
    },
    updateMatchStates: (state, matchStates: string[]) => {
      state.matchStates[state.count] = matchStates;
    },
  },
};
