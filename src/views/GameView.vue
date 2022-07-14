<template>
  <div class="wrapper">
    <WordleQueryInputVue
      :maxRow="5"
      :query="query"
      :matchStates="matchStates"
    />
    <WordleKeyBoardVue @processWord="processWord" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from "vue";
import { useStore } from "@/store";
import WordAction from "../assets/ts/wordAction";
import { getWordMatchStates } from "../assets/ts/utils/dictionary";
import WordleQueryInputVue from "../components/WordleQueryInput.vue";
import WordleKeyBoardVue from "../components/WordleKeyBoard.vue";

export default defineComponent({
  name: "GameView",
  components: { WordleQueryInputVue, WordleKeyBoardVue },
  setup() {
    const store = useStore();
    const query = computed(() => store.state.game.query);
    const matchStates = computed(() => store.state.game.matchStates);
    const wordAction = new WordAction(5);
    const callback = async (event: KeyboardEvent) => processWord(event.key);
    const processWord = async (key: string) => {
      if (store.state.game.gameState) {
        if (key === "Enter" && !wordAction.getIsFindingDictionary) {
          const isWord = await wordAction.confirmWord();
          if (isWord) {
            const wordMatchStates = getWordMatchStates(
              wordAction.getWord,
              store.getters[`game/getAnswerMap`]
            );
            store.commit("game/updateMatchStates", wordMatchStates);
            store.commit(
              "game/increaseQueryInputCount",
              store.state.game.count + 1
            );
            wordAction.removeWord(0);
            if (wordMatchStates.every((states) => states === "correct_spot")) {
              alert("클리어 하셨습니다!!!!");
              store.commit("game/updateGameState", false);
              removeEvent();
            }
          }
        } else {
          if (key === "Backspace" || key === "DEL") {
            wordAction.removeWord();
          } else if (/^[a-z]/i.test(key) && key.length === 1) {
            wordAction.insertWord(key.toUpperCase());
          }
          store.commit("game/updateQueryWord", wordAction.getWord);
        }
      }
    };
    window.addEventListener("keydown", callback);
    onUnmounted(() => removeEvent());
    const removeEvent = () => {
      window.removeEventListener("keydown", callback);
      store.commit("game/updateQueryWord", "");
    };
    return { query, matchStates, processWord };
  },
});
</script>
