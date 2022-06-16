import { createStore } from "vuex";
import { GameState, game } from "./modules/game";

export interface RootState {
  Game: GameState;
}

export default createStore({
  modules: { game },
});
