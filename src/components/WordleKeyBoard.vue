<template>
  <div class="key-table">
    <div class="key-row" v-for="(board, i) in keyBoard" :key="i">
      <button
        class="key"
        v-for="(key, j) in board"
        :key="j"
        @click="$emit('processWord', key)"
      >
        {{ key }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "WordleKeyBoard",
  setup() {
    const keyBoard = computed(() => [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Enter", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
    ]);

    return { keyBoard };
  },
});
</script>
