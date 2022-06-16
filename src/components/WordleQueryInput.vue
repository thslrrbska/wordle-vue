<template>
  <div class="worldle-table">
    <div class="wordle-row" v-for="(r, i) in maxRow" :key="i">
      <div
        class="wordle-char"
        v-for="(c, j) in wordSize"
        :class="matchStates[i] && matchStates[i][j]"
        :key="j"
      >
        {{ query[i] ? query[i][j] : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "WordleQueryinput",
  props: {
    maxRow: {
      type: Number,
      default: 1,
    },
    wordSize: {
      type: Number,
      default: 5,
    },
    query: {
      type: Array,
      default: () => [],
    },
    matchStates: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
