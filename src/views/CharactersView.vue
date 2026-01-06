<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import EmptyLoading from '@/components/EmptyLoading.vue'
import { resonator_data } from '@/stores/resonatordata'
import { onMounted, ref } from 'vue'
import { SearchIcon } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'
import Button from '@/components/ui/button/Button.vue'
import { attributes, weapontypes } from '@/stores/iconurl'
import TagTooltips from '@/components/TagTooltips.vue'
import { RouterLink } from 'vue-router'
import { rarityClass } from '@/stores/functions'

const resonators = ref([])
const loading = ref(true)
const showFilters = ref(false)
const searchTerm = ref('')
const attributeFilters = ref<string[]>([])
const weaponFilters = ref<string[]>([])
const rarityFilters = ref<string[]>([])

function onAttributeFiltersUpdate(newVal: string[]) {
  if (newVal.includes('All')) {
    attributeFilters.value = ['All']
  } else {
    attributeFilters.value = newVal.filter((v) => v !== 'All')
  }
  applySearchAndFilters(searchTerm.value)
}

function onWeaponFiltersUpdate(newVal: string[]) {
  if (newVal.includes('All')) {
    weaponFilters.value = ['All']
  } else {
    weaponFilters.value = newVal.filter((v) => v !== 'All')
  }
  applySearchAndFilters(searchTerm.value)
}

function onRarityFiltersUpdate(newVal: string[]) {
  if (newVal.includes('All')) {
    rarityFilters.value = ['All']
  } else {
    rarityFilters.value = newVal.filter((v) => v !== 'All')
  }
  applySearchAndFilters(searchTerm.value)
}

async function getResonators() {
  loading.value = true
  const data = resonator_data
  if (data) {
    const sorteddata = data.sort((a, b) => a.name.localeCompare(b.name))
    resonators.value = sorteddata
  }
  loading.value = false
}

function applySearchAndFilters(searchTerm: string) {
  const term = searchTerm.trim().toLowerCase()

  resonators.value = resonator_data
    .filter((resonator) => {
      // --- Search check ---
      const matchesSearch = term === '' || resonator.name.toLowerCase().includes(term)

      // --- Attribute check ---
      const attrOk =
        attributeFilters.value.length === 0 ||
        attributeFilters.value.includes('All') ||
        attributeFilters.value.some((f) => resonator.attribute.toLowerCase() === f.toLowerCase())

      // --- Weapon check ---
      const weaponOk =
        weaponFilters.value.length === 0 ||
        weaponFilters.value.includes('All') ||
        weaponFilters.value.some((f) => resonator.weapon.toLowerCase() === f.toLowerCase())

      // --- Rarity check ---
      const rarityOk =
        rarityFilters.value.length === 0 ||
        rarityFilters.value.includes('All') ||
        rarityFilters.value.some((f) => String(resonator.rarity).includes(f))

      return matchesSearch && attrOk && weaponOk && rarityOk
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function onSearching(e: Event) {
  searchTerm.value = (e.target as HTMLInputElement).value
  applySearchAndFilters(searchTerm.value)
}

function showFilterToggles() {
  showFilters.value = !showFilters.value
}

onMounted(() => {
  getResonators()
})
</script>

<template>
  <main>
    <div class="section-information">
      <h1>Characters</h1>
      <p>These are the playable resonators as of version 3.0.</p>
    </div>

    <div class="search-and-filter">
      <InputGroup @input="onSearching">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Button
        :class="`cursor-pointer aspect-square border-input text-ring ${showFilters ? 'bg-input text-white' : ''}`"
        variant="outline"
        title="Filter"
        @click="showFilterToggles()"
      >
        <TagTooltips v-if="showFilters === true" content="Hide Filters">
          <span>
            <Icon icon="tabler:filter" width="24" height="24" />
          </span>
        </TagTooltips>
        <TagTooltips v-else content="Show Filters">
          <span><Icon icon="tabler:filter-cancel" width="24" height="24" /></span>
        </TagTooltips>
      </Button>
    </div>
    <transition name="expand">
      <div v-if="showFilters" class="filterGroup">
        <ToggleGroup
          v-model="attributeFilters"
          @update:model-value="onAttributeFiltersUpdate"
          type="multiple"
          class="filters"
          variant="outline"
        >
          <ToggleGroupItem value="All" class="item">
            <TagTooltips content="All">
              <span>
                <Icon icon="lucide:asterisk" width="30" />
              </span>
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Aero" class="item">
            <TagTooltips content="Aero">
              <img loading="lazy" :src="attributes.aero_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Electro" class="item">
            <TagTooltips content="Electro">
              <img loading="lazy" :src="attributes.electro_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Fusion" class="item">
            <TagTooltips content="Fusion">
              <img loading="lazy" :src="attributes.fusion_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Glacio" class="item">
            <TagTooltips content="Glacio">
              <img loading="lazy" :src="attributes.glacio_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Havoc" class="item">
            <TagTooltips content="Havoc">
              <img loading="lazy" :src="attributes.havoc_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Spectro" class="item">
            <TagTooltips content="Spectro">
              <img loading="lazy" :src="attributes.spectro_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          v-model="weaponFilters"
          @update:model-value="onWeaponFiltersUpdate"
          type="multiple"
          class="filters"
          variant="outline"
        >
          <ToggleGroupItem value="All" class="item">
            <TagTooltips content="All">
              <span>
                <Icon icon="lucide:asterisk" width="30" />
              </span>
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Sword" class="item">
            <TagTooltips content="Sword">
              <img loading="lazy" :src="weapontypes.sword_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Broadblade" class="item">
            <TagTooltips content="Broadblade">
              <img loading="lazy" :src="weapontypes.broadblade_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Pistols" class="item">
            <TagTooltips content="Pistols">
              <img loading="lazy" :src="weapontypes.pistols_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Gauntlets" class="item">
            <TagTooltips content="Gauntlets">
              <img loading="lazy" :src="weapontypes.gauntlets_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="Rectifier" class="item">
            <TagTooltips content="Rectifier">
              <img loading="lazy" :src="weapontypes.rectifier_icon_url" alt="" width="30" />
            </TagTooltips>
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          v-model="rarityFilters"
          @update:model-value="onRarityFiltersUpdate"
          type="multiple"
          class="filters"
          variant="outline"
        >
          <ToggleGroupItem value="All" class="item">
            <TagTooltips content="All">
              <span>
                <Icon icon="lucide:asterisk" width="30" />
              </span>
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="4" class="item">
            <TagTooltips content="4">
              <span class="text-[#dcb0f3]"> 4★ </span>
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem value="5" class="item">
            <TagTooltips content="5">
              <span class="text-[#ffe570]"> 5★ </span>
            </TagTooltips>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </transition>

    <div v-if="loading" class="loading">
      <EmptyLoading
        loading-title="Loading Resonators..."
        loading-description="Please wait while we are loading your resonators. If it doesn't load in 5 minutes, try refreshing the page."
      />
    </div>

    <transition-group v-else name="fade" tag="div" class="resonator-list">
      <RouterLink
        class="character"
        v-for="resonator in resonators"
        :key="resonator.id"
        :to="'/characters/' + resonator.name"
      >
        <div class="character-icon" :class="rarityClass(resonator.rarity)">
          <img :src="resonator.character_icon_url" alt="" />
        </div>
        <div class="character-name">
          <p>{{ resonator.name }}</p>
        </div>
      </RouterLink>
    </transition-group>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 1000px; /* large enough to fit content */
  opacity: 1;
}

main {
  display: flex;
  flex-direction: column;
  font-family: 'Fredoka';
  gap: calc(var(--component-gap) * 10);
}

.section-information {
  gap: var(--component-gap);
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.search-and-filter {
  display: flex;
  gap: calc(var(--component-gap) * 5);
}

.filterGroup {
  display: flex;
  gap: 1rem;
}

.filters .item {
  border: 1px solid var(--input);
  width: 36px;
  height: 36px;
  padding-inline: 0px;
  margin: auto;
}

.item img {
  padding-inline: 0;
}

.resonator-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  gap: 2rem;
}

.character {
  display: flex;
  flex-direction: column;
  max-width: 138px;
  background-color: var(--card);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 250ms ease-in-out;
}

.character:hover {
  box-shadow: 0px 0px 5px var(--ring);
  transition: all 250ms ease-in-out;
}

.character-icon {
  overflow: clip;
}

.five-star {
  background-image: linear-gradient(to top, var(--five-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--five-star);
  transition: all 250ms ease-in-out;
}

.character:hover .five-star {
  background-image: linear-gradient(to top, var(--five-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.four-star {
  background-image: linear-gradient(to top, var(--four-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--four-star);
  transition: all 250ms ease-in-out;
}

.character:hover .four-star {
  background-image: linear-gradient(to top, var(--four-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.character-icon img {
  mask-image: linear-gradient(black 80%, transparent);
  transition: all 250ms ease-in-out;
}

.character:hover .character-icon img {
  scale: 105%;
  transition: all 250ms ease-in-out;
}

.character-name {
  text-align: center;
  padding: 0.2rem;
}

.character-name p {
  font-weight: 500;
}
</style>
