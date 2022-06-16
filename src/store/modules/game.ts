import { Module } from "vuex";
import { RootState } from "..";

export interface GameState {
  answer: string;
  query: string[];
  matchStates: string[][];
}

export const game: Module<GameState, RootState> = {
  namespaced: true,
  state: () => ({
    answer: "WORLD", // 정답
    query: ["ROUND"], // 워들 집합
    matchStates: [
      ["wrong_spot", "correct_spot", "none_spot", "none_spot", "correct_spot"],
    ], // 워들 매치 상태
  }),
};
