<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { navItems } from '@/stores/navigationItems'
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="navbar-container">
        <img
          src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/wuthering-waves-new-1-4/sticker_8.png?8b9632e111585d5e0be99f8bb29aed43"
          alt="Logo"
          class="h-10 w-auto pr-2"
        />
        <RouterLink v-for="item in navItems" :key="item.link" :to="item.link">
          <div class="link relative">
            <component :is="item.icon" aria-hidden="true" />
            <p>{{ item.text }}</p>
          </div>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  width: 100vw;
  background: var(--card);
  box-shadow: 0 1px 15px var(--card);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.navbar-container {
  max-width: 1280px; /* limit width */
  margin: 0 auto; /* center horizontally */
  display: flex; /* flex for layout */
  justify-content: start;
  align-items: center;
  padding: 1.5rem;
  line-height: 1.5;
  gap: calc(var(--component-gap) * 5);
}

header {
  line-height: 1.5;
  display: flex;
  align-items: stretch;
  padding: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  gap: calc(var(--component-gap) * 3);
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--component-gap);
  font-size: medium;
  height: 100%;
  flex: 1;
  position: relative;
}

.router-link-active {
  color: var(--five-star);
  text-shadow: 1px 0px 15px var(--color-radical-red-300);
}
</style>
