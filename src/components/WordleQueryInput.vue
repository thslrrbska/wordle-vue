<template>
  <div class="worldle-table">
    <div class="wordle-row" v-for="(r, i) in maxRow" :key="i">
      <div class="wordle-char" v-for="(c, j) in wordSize" :key="j">
        {{ j }}
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
  },
});
</script>
