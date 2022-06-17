import { Module } from "vuex";
import { RootState } from "..";

export interface GameState {
  answer: string;
  gameState: boolean;
  count: number;
  query: string[];
  matchStates: string[][];
}

export const game: Module<GameState, RootState> = {
  namespaced: true,
  state: () => ({
    answer: "WORLD", // 정답
    gameState: true, // 게임 진행 상태
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
    initGameState: (state) => {
      state.count = 0;
      state.query = [];
      state.matchStates = [];
    },
    changeAnswer: (state, answer) => {
      state.answer = answer;
    },
    increaseQueryInputCount: (state, count: number) => {
      state.count = count;
    },
    updateGameState: (state, gameState) => {
      state.gameState = gameState;
    },
    updateQueryWord: (state, word: string) => {
      state.query[state.count] = word;
    },
    updateMatchStates: (state, matchStates: string[]) => {
      state.matchStates[state.count] = matchStates;
    },
  },
};
