import { Module } from "vuex";
import { RootState } from "..";

export interface CreateState {
  query: string[];
}

export const create: Module<CreateState, RootState> = {
  namespaced: true,
  state: () => ({
    query: [],
  }),
  getters: {},
  mutations: {
    updateQueryWord: (state, word: string) => {
      state.query = [word];
    },
  },
};
