<template>
  <div class="wrapper">
    <WordleQueryInputVue :maxRow="1" :query="query" />
    <WordleKeyBoardVue @processWord="processWord" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import WordleQueryInputVue from "../components/WordleQueryInput.vue";
import WordleKeyBoardVue from "../components/WordleKeyBoard.vue";
import WordAction from "../assets/ts/wordAction";

export default defineComponent({
  name: "CreateGameView",
  components: { WordleQueryInputVue, WordleKeyBoardVue },
  setup() {
    const store = useStore();
    const query = computed(() => store.state.create.query);
    const wordAction = new WordAction(5);
    const callback = async (event: KeyboardEvent) => processWord(event.key);
    const processWord = async (key: string) => {
      if (key === "Enter" && !wordAction.getIsFindingDictionary) {
        const isWord = await wordAction.confirmWord();
        if (isWord) {
          console.log("success");
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
    window.addEventListener("keydown", callback);
    onUnmounted(() => {
      window.removeEventListener("keydown", callback);
      store.commit("create/updateQueryWord", "");
    });
    return { query, processWord };
  },
});
</script>
