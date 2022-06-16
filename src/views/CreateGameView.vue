<template>
  <div class="wrapper">
    <WordleQueryInputVue :maxRow="1" />
    <WordleKeyBoardVue />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import WordleQueryInputVue from "../components/WordleQueryInput.vue";
import WordleKeyBoardVue from "../components/WordleKeyBoard.vue";

export default defineComponent({
  name: "CreateGameView",
  components: { WordleQueryInputVue, WordleKeyBoardVue },
  setup() {
    onMounted(() => console.log("component mounted2"));
    onUnmounted(() => console.log("component onUnmounted2"));
  },
});
</script>
