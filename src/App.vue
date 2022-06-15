<template>
  <header>
    <router-link to="/"><h2>Wordle</h2></router-link>
    <nav>
      <router-link to="/game">Play Game</router-link> |
      <router-link to="/create">Create New Wordle</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
