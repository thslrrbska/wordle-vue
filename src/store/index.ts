import { createStore } from "vuex";
import { CreateState, create } from "./modules/create";
import { GameState, game } from "./modules/game";

export interface RootState {
  Game: GameState;
  Create: CreateState;
}

export default createStore({
  modules: { game, create },
});
