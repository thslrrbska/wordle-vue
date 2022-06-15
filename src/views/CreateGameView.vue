<template>
  <div class="wrapper">
    <WordleQueryInputVue :maxRow="1" />
    <WordleKeyBoardVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WordleQueryInputVue from "../components/WordleQueryInput.vue";
import WordleKeyBoardVue from "../components/WordleKeyBoard.vue";

export default defineComponent({
  name: "CreateGameView",
  components: { WordleQueryInputVue, WordleKeyBoardVue },
});
</script>
