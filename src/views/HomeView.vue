<script setup lang="ts">
import { homedata } from '@/stores/homedata'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <img class="wuthering-logo" src="../assets/Wuthering_Waves_logo.svg" alt="" />
    <div class="home-content">
      <RouterLink class="card-container" v-for="item in homedata" :key="item.link" :to="item.link">
        <h1>{{ item.header }}</h1>
        <p>{{ item.description }}</p>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--component-gap) * 10);
  min-height: 80vh;
}

.home-content {
  display: flex;
  gap: 2rem;
}

.wuthering-logo {
  filter: brightness(0) invert(1);
  max-width: 500px;
}

.card-container {
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Fredoka';
  background-color: var(--card);
  padding: 1.5rem;
  border: 0.125rem solid;
  border-color: var(--border);
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0px 0px 10px var(--border);
  transition: all;
  transition-duration: 250ms;
  cursor: pointer;
}

.card-container:hover {
  box-shadow: 0px 0px 10px var(--input);
  border-color: var(--five-star);
  scale: 102%;
  transition: all;
  transition-duration: 250ms;
}

.card-container h1 {
  font-weight: 600;
  font-size: 1.5rem;
}

.card-container p {
  font-weight: 300;
  font-size: 1rem;
}
</style>
