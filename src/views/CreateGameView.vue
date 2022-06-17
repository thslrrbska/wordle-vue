<template>
  <div class="wrapper">
    <WordleQueryInputVue :maxRow="1" :query="query" />
    <WordleKeyBoardVue @processWord="processWord" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import WordleQueryInputVue from "../components/WordleQueryInput.vue";
import WordleKeyBoardVue from "../components/WordleKeyBoard.vue";
import WordAction from "../assets/ts/wordAction";

export default defineComponent({
  name: "CreateGameView",
  components: { WordleQueryInputVue, WordleKeyBoardVue },
  setup() {
    const store = useStore();
    const router = useRouter();
    const query = computed(() => store.state.create.query);
    const wordAction = new WordAction(5);
    const callback = async (event: KeyboardEvent) => processWord(event.key);
    const processWord = async (key: string) => {
      if (key === "Enter" && !wordAction.getIsFindingDictionary) {
        const isWord = await wordAction.confirmWord();
        if (isWord) {
          if (store.state.game.query.length) {
            confirm("진행중인 게임이 있습니다. 초기화 하시겠습니까?") &&
              initGame();
          } else {
            initGame();
          }
        }
      } else {
        if (key === "Backspace" || key === "DEL") {
          wordAction.removeWord();
        } else if (/^[a-z]/i.test(key) && key.length === 1) {
          wordAction.insertWord(key.toUpperCase());
        }
        store.commit("create/updateQueryWord", wordAction.getWord);
      }
    };
    const initGame = () => {
      store.commit("game/changeAnswer", wordAction.getWord);
      store.commit("game/initGameState");
      alert("초기화가 완료되었습니다.");
      router.push("/");
    };
    window.addEventListener("keydown", callback);
    onUnmounted(() => {
      window.removeEventListener("keydown", callback);
      store.commit("create/updateQueryWord", "");
    });
    return { query, processWord };
  },
});
</script>
