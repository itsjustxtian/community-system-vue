<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

const route = useRoute()
const characterName = route.params.name as string
import { resonator_data } from '@/stores/resonatordata'
import { attributes, weapontypes } from '@/stores/iconurl'
import TagTooltips from '@/components/TagTooltips.vue'
import { Icon } from '@iconify/vue'
import Button from '@/components/ui/button/Button.vue'
import ActiveSkills from '@/components/ActiveSkills.vue'
import { ref } from 'vue'
import PassiveSkills from '@/components/PassiveSkills.vue'
import ConcertoSkills from '@/components/ConcertoSkills.vue'
import PhotoView from '@/components/PhotoView.vue'

function rarityClass(rarity: number) {
  return rarity === 5 ? 'resonator-rarity-five' : 'resonator-rarity-four'
}

const resonator = resonator_data.find((r) => r.name.toLowerCase() === characterName.toLowerCase())
const activeTab = ref('Active Skills')
const imageShown = ref(false)
const openPhotoView = ref(false)
const photoRef = ref('')

const active_skills = {
  basic_attack: resonator.talent_description.basic_attack,
  resonance_skill: resonator.talent_description.resonance_skill,
  resonance_liberation: resonator.talent_description.resonance_lib,
}

const passive_skills = {
  forte_circuit: resonator.talent_description.forte_circuit,
  inherent_skill_1: resonator.talent_description.inherent_skill_1,
  inherent_skill_2: resonator.talent_description.inherent_skill_2,
}

const concerto_skills = {
  intro_skill: resonator.talent_description.intro_skill,
  outro_skill: resonator.talent_description.outro_skill,
}

function getWeaponTypeIcon(weapontype: string) {
  switch (weapontype) {
    case 'Sword':
      return weapontypes.sword_icon_url
    case 'Broadblade':
      return weapontypes.broadblade_icon_url
    case 'Pistols':
      return weapontypes.pistols_icon_url
    case 'Gauntlets':
      return weapontypes.gauntlets_icon_url
    case 'Rectifier':
      return weapontypes.rectifier_icon_url
  }
}

function getAttributeIcon(attribute: string) {
  switch (attribute) {
    case 'Fusion':
      return attributes.fusion_icon_url
    case 'Glacio':
      return attributes.glacio_icon_url
    case 'Aero':
      return attributes.aero_icon_url
    case 'Electro':
      return attributes.electro_icon_url
    case 'Spectro':
      return attributes.spectro_icon_url
    case 'Havoc':
      return attributes.havoc_icon_url
  }
}

function getActiveTabCSS(tab_name: string, active_tab: string, element: string) {
  if (active_tab === tab_name) return `active-skill-tab-${element}`
  else return 'skill-tab'
}

function setActiveTab(tab_name: string) {
  activeTab.value = tab_name
}

function showCard() {
  imageShown.value = !imageShown.value
}

function openPhoto(ref: string) {
  photoRef.value = ref
  openPhotoView.value = !openPhotoView.value
}
</script>

<template>
  <main>
    <div>
      <RouterLink to="/characters" class="navigation-button">
        <Icon icon="icon-park-solid:back" />
        <p>Go back</p>
      </RouterLink>
    </div>
    <div v-if="resonator" class="character-detail">
      <div class="character-icon max-h-[70vh] w-1/2">
        <div class="h-full w-full">
          <transition name="fade" mode="out-in">
            <img
              v-if="imageShown"
              :src="resonator.character_card_url"
              class="character-photo h-full w-full object-contain"
              @click="openPhoto(resonator.character_card_url)"
            />
            <img
              v-else
              :src="resonator.character_portrait_url"
              class="character-photo h-full w-full object-cover"
              @click="openPhoto(resonator.character_portrait_url)"
            />
          </transition>
        </div>
        <transition name="slide-left" mode="out-in">
          <div v-if="!imageShown" class="resonator-name">
            <h1>{{ resonator.name.toUpperCase() }}</h1>
          </div>
        </transition>
        <div class="resonator-tags">
          <div class="tag">
            <TagTooltips :content="resonator.weapon">
              <img :src="getWeaponTypeIcon(resonator.weapon)" alt="" width="30" height="auto" />
            </TagTooltips>
          </div>
          <div class="tag">
            <TagTooltips :content="resonator.attribute">
              <img :src="getAttributeIcon(resonator.attribute)" alt="" width="30" height="auto" />
            </TagTooltips>
          </div>
          <div class="switch-to-card" @click="showCard()">
            <TagTooltips content="Switch to Card">
              <span><Icon icon="material-symbols:compare-sharp" width="auto" height="auto" /></span>
            </TagTooltips>
          </div>
        </div>
        <transition name="slide-left" mode="out-in">
          <div v-if="!imageShown" :class="rarityClass(resonator.rarity)">
            <div v-for="n in resonator.rarity" :key="n">
              <Icon icon="mingcute:star-fill" width="24" height="24" />
            </div>
          </div>
        </transition>
      </div>
      <div class="resonator-information w-full">
        <div class="bg-card px-6 py-4 rounded border-input border-2">
          <div>
            <h1>Introduction</h1>
            <p>
              {{ resonator.name }} is a {{ resonator.rarity }}★ {{ resonator.attribute }} character
              who uses the {{ resonator.weapon }} type. {{ resonator.name }} has been playable since
              {{ resonator.version_released.toFixed(1) }}.
            </p>
          </div>
        </div>
        <div class="skill-tab-group">
          <div
            :class="getActiveTabCSS('Active Skills', activeTab, resonator.attribute.toLowerCase())"
            @click="setActiveTab('Active Skills')"
          >
            Active Skills
          </div>
          <div
            :class="getActiveTabCSS('Passive Skills', activeTab, resonator.attribute.toLowerCase())"
            @click="setActiveTab('Passive Skills')"
          >
            Passive Skills
          </div>
          <div
            :class="
              getActiveTabCSS('Concerto Skills', activeTab, resonator.attribute.toLowerCase())
            "
            @click="setActiveTab('Concerto Skills')"
          >
            Concerto Skills
          </div>
        </div>
        <transition name="slide-left" mode="out-in">
          <component
            :is="
              activeTab === 'Active Skills'
                ? ActiveSkills
                : activeTab === 'Passive Skills'
                  ? PassiveSkills
                  : ConcertoSkills
            "
            :ActiveSkill="active_skills"
            :PassiveSkill="passive_skills"
            :ConcertoSkills="concerto_skills"
          />
        </transition>
      </div>
    </div>

    <div v-else class="empty-content">
      <Empty class="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icon icon="carbon:unknown-filled" width="32" height="32" />
          </EmptyMedia>
          <EmptyTitle>Resonator Not Found</EmptyTitle>
          <EmptyDescription>
            This resonator does not exist or has not been added yet. Please stay tuned!
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <RouterLink to="/characters">
            <Button variant="outline" class="cursor-pointer">Back</Button>
          </RouterLink>
        </EmptyContent>
      </Empty>
    </div>

    <PhotoView v-if="photoRef && openPhotoView" v-model:open="openPhotoView" :image="photoRef" />
  </main>
</template>

<style scoped>
.empty-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-detail {
  display: flex;
  gap: 4rem;
  padding-top: 1rem;
}

.character-icon {
  position: relative;
}

.resonator-name {
  position: absolute;
  bottom: 2%;
  border-left: 0.25rem solid var(--five-star);
  padding-left: calc(var(--component-gap) * 2);
}

.resonator-tags {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  gap: calc(var(--component-gap) * 2);
}

.tag {
  background-color: var(--card);
  padding: 0.3rem;
  border-radius: 50%;
  box-shadow: 0px 0px 2px var(--ring);
}

.switch-to-card {
  cursor: pointer;
  background-color: var(--card);
  padding: 0.3rem;
  border-radius: 50%;
  box-shadow: 0px 0px 2px var(--ring);
  aspect-ratio: 1 / 1; /* enforce square */
  display: inline-flex; /* center icon nicely */
  align-items: center;
  justify-content: center;
}

.switch-to-card:hover {
  background-color: var(--input);
  box-shadow: 0px 0px 2px var(--ring);
}

.resonator-rarity-four {
  position: absolute;
  bottom: 10%;
  left: 0;
  color: var(--four-star);
}

.resonator-rarity-five {
  position: absolute;
  bottom: 10%;
  left: 0;
  color: var(--five-star);
}

.resonator-information {
  font-family: 'Fredoka';
  display: flex;
  flex-direction: column;
  gap: calc(var(--component-gap) * 5);
  height: 80vh;
}

.skill-tab-group {
  display: flex;
  gap: calc(var(--component-gap) * 2);
}

.skill-tab {
  user-select: none;
  padding: 1rem 1rem;
  background-color: var(--card);
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
  transition: all 250ms ease-in-out;
}

.skill-tab:hover {
  padding: 1rem 1rem;
  background-color: var(--input);
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
  transition: all 250ms ease-in-out;
}

.active-skill-tab-aero {
  padding: 1rem 1rem;
  background-color: var(--aero-darker);
  color: white;
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
}

.active-skill-tab-electro {
  padding: 1rem 1rem;
  background-color: var(--electro-darker);
  color: white;
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
}

.active-skill-tab-fusion {
  padding: 1rem 1rem;
  background-color: var(--fusion-darker);
  color: white;
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
}

.active-skill-tab-glacio {
  padding: 1rem 1rem;
  background-color: var(--glacio-darker);
  color: white;
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
}

.active-skill-tab-havoc {
  padding: 1rem 1rem;
  background-color: var(--havoc-darker);
  color: white;
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
}

.active-skill-tab-spectro {
  padding: 1rem 1rem;
  background-color: var(--spectro-darker);
  color: white;
  cursor: pointer;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.navigation-button {
  width: fit-content;
  cursor: pointer;
  background-color: var(--card);
  border-radius: 0.25rem;
  border: 1px solid var(--input);
  padding: 0.25rem 0.5rem;
  gap: var(--component-gap);
  display: flex;
  justify-items: center;
  align-items: center;
  transition: all 250ms ease-in-out;
  user-select: none;
}

.navigation-button:hover {
  width: fit-content;
  cursor: pointer;
  background-color: var(--input);
  border-radius: 0.25rem;
  border: 1px solid var(--input);
  padding: 0.25rem 0.5rem;
  gap: var(--component-gap);
  display: flex;
  justify-items: center;
  align-items: center;
  transition: all 250ms ease-in-out;
}

.character-photo {
  transition: all 250ms ease-in-out;
  overflow: hidden;
}
.character-photo:hover {
  scale: 102%;
  transition: all 250ms ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
