<script setup lang="ts">
import { PropType } from 'vue'

interface Section {
  title?: string | null
  text?: string | null
  bullets?: string[] | null
}

interface TalentSkill {
  name?: string | null
  sections?: Section[] | null
}

interface PassiveSkillDescriptions {
  intro_skill: TalentSkill
  outro_skill: TalentSkill
}

defineProps({
  ConcertoSkills: {
    type: Object as PropType<PassiveSkillDescriptions>,
  },
})

const keywords = {
  'Aero DMG': 'aero-damage',
  'Electro DMG': 'electro-damage',
  'Fusion DMG': 'fusion-damage',
  'Glacio DMG': 'glacio-damage',
  'Spectro DMG': 'spectro-damage',
  'Havoc DMG': 'havoc-damage',
  'Physical DMG': 'physical-damage',
}

function highlightText(text: string | null, phrases: Record<string, string>) {
  if (!text) return ''

  let result = text

  for (const [phrase, className] of Object.entries(phrases)) {
    const regex = new RegExp(phrase, 'gi')
    result = result.replace(regex, `<span class="${className}">${phrase}</span>`)
  }

  result = result.replace(/\d+(\.\d+)?%?/g, (match) => {
    return `<span class="colored-number">${match}</span>`
  })

  return result
}
</script>

<template>
  <div class="skill-container">
    <div class="inherent-skills-container">
      <div class="subskill-container">
        <h1>{{ ConcertoSkills.intro_skill.name }}</h1>
        <div v-for="(section, index) in ConcertoSkills.intro_skill.sections" :key="index">
          <h2>{{ section.title }}</h2>
          <p v-html="highlightText(section.text, keywords)"></p>
          <ul>
            <li v-for="bullet in section.bullets" :key="bullet">
              <p v-html="highlightText(bullet, keywords)"></p>
            </li>
          </ul>
        </div>
      </div>

      <div class="subskill-container">
        <h1>{{ ConcertoSkills.outro_skill.name }}</h1>
        <div v-for="(section, index) in ConcertoSkills.outro_skill.sections" :key="index">
          <h2>{{ section.title }}</h2>
          <p v-html="highlightText(section.text, keywords)"></p>
          <ul>
            <li v-for="bullet in section.bullets" :key="bullet">
              <p v-html="highlightText(bullet, keywords)"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: var(--color-gold-200);
  font-weight: 600;
}

.forte-circuit-container {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.inherent-skills-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.skill-container {
  background-color: var(--card);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
}

.subskill-container {
  background-color: var(--input);
  padding: 1rem;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--input);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px var(--input);
}
</style>
