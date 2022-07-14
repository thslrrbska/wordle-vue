import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { CreateState, create } from "./modules/create";
import { GameState, game } from "./modules/game";

export interface RootState {
  game: GameState;
  create: CreateState;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: { game, create },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
