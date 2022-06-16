<template>
  <div class="wrapper">
    <WordleQueryInputVue
      :maxRow="5"
      :query="query"
      :matchStates="matchStates"
    />
    <WordleKeyBoardVue />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import WordleQueryInputVue from "../components/WordleQueryInput.vue";
import WordleKeyBoardVue from "../components/WordleKeyBoard.vue";

export default defineComponent({
  name: "GameView",
  components: { WordleQueryInputVue, WordleKeyBoardVue },
  setup() {
    const store = useStore();
    const query = computed(() => store.state.game.query);
    const matchStates = computed(() => store.state.game.matchStates);

    return { query, matchStates };
  },
});
</script>
