export const resonator_data = [
  {
    id: 2,
    release_date: '2024-05-23',
    name: 'Baizhi',
    attribute: 'Glacio',
    weapon: 'Rectifier',
    character_icon_url: '/character-icons/baizhi/baizhi-icon.webp',
    character_portrait_url: '/character-icons/baizhi/Baizhi_Full_Sprite.png',
    character_card_url: '/character-icons/baizhi/Baizhi_Card.png',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Overflowing Frost',
        sections: [
          {
            text: "Baizhi calls You'tan to perform 1 plunging attack, dealing Glacio damage while restoring HP to all team members nearby.",
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Rejuvinating Flow',
        sections: [
          {
            text: 'Baizhi restores HP equal to 1.54% of her max HP to The next character (or other characters on a nearby team that activates an Outro Skill) every 3s for 30s. Resonators gaining this healing also gain 15% all-Type DMG Deepen for 6s.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Destined Promise',
        sections: [
          {
            text: "Baizhi instructs You'tan to perform up to 4 consecutive attacks, dealing Glacio damage.",
            title: 'Basic Attack',
          },
          {
            text: "Baizhi continuously consumes Stamina to command You'tan to attack enemies, dealing Glacio damage. During Heavy Attack, Baizhi can command You'tan to move.",
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Glacio damage.',
            title: 'Dodge Counter',
          },
          {
            text: 'Baizhi consumes Stamina and summons You’tan in mid-air to perform a Plunging Attack, dealing Glacio damage.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Cycle of Life',
        sections: [
          {
            text: "A Remnant Creature that answers to Baizhi's mind and desires while sharing all her attributes. You'tan goes back to Baizhi when Baizhi dodges.",
            title: "You'tan",
          },
          {
            text: 'Baizhi consumes all "Concentrations" when casting Heavy Attack or Resonance Skill Emergency Plan to continuously restore HP for Characters nearby. Each 1 "Concentration" consumed restores HP for 1 time every 2s.\n When Baizhi consumes "Concentration" to cast Heavy Attack, Baizhi additionally restores Concerto Energy and Resonance Energy; When Baizhi consumes "Concentration" to cast Resonance Skill Emergency Plan, Baizhi additionally restores Concerto Energy.\nBaizhi can hold up to 4 "Concentrations". Baizhi obtains 1 "Concentration" for every Basic Attack on hit.',
            title: 'Concentration',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Momentary Union',
        sections: [
          {
            text: "Baizhi summons You'tan to restore HP for the entire team, generating 4 stacks of Remnant Entities.",
            title: null,
          },
          {
            text: 'Remnant Entities follow the active team members and automatically consume 1 stacks of Remnant Entities to attack the targets every 2.5s, dealing Glacio damage on hit while restoring HP to all team members nearby.',
            title: 'Remnant Entities',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Emergency Plan',
        sections: [
          {
            text: "Baizhi calls You'tan to attack the target, dealing Glacio damage while restoring HP for the entire team.",
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Harmonic Range',
        sections: [
          {
            text: "When Baizhi casts Resonance Skill Emergency Plan, You'tan generates a field of Euphonia that lasts for 15s.",
            title: null,
          },
          {
            text: 'ATK of the Resonators who picks up Euphonia is increased by 15% for 20s.',
            title: 'Euphonia',
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Stimulus Feedback',
        sections: [
          {
            text: "For every Heavy Attack on hit, Baizhi restores HP to the nearby team member with the least HP equal to 0.25% of Baizhi's max HP.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Waveworn Residue',
      },
      ascension_materials: {
        boss_material: 'Thundering Tacet Core',
        regional_specialty: 'Iris',
        ascension_material_set: 'Ring',
      },
    },
  },
  {
    id: 3,
    release_date: '2024-05-23',
    name: 'Calcharo',
    attribute: 'Electro',
    weapon: 'Broadblade',
    character_icon_url: '/character-icons/calcharo/calcharo-icon.webp',
    character_portrait_url: '/character-icons/calcharo/Calcharo_Full_Sprite.png',
    character_card_url: '/character-icons/calcharo/Calcharo_Card.png',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Wanted Outlaw',
        sections: [
          {
            text: 'Attack the target, dealing Electro DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Shadowy Raid',
        sections: [
          {
            text: "Calcharo summons Phantom to support the Resonator, clearing the targets in front with a slash. The Phantom's attack deals Electro DMG equal to 195.98%+391.96% of Calcharo's ATK.",
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Gnawing Fangs',
        sections: [
          {
            text: 'Perform up to 4 attacks, dealing Electro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Consume Stamina to attack the target, dealing Electro DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Using Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consume Stamina to perform a Mid-Air Plunging Attack, dealing Electro DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Hunting Mission',
        sections: [
          {
            text: 'Calcharo can hold up to 3 "Cruelty". Under Resonance Liberation Deathblade Gear state, "Cruelty" cannot be acquired. When Resonance Skill Extermination Order hits the target, gain 1 "Cruelty".',
            title: '"Cruelty"',
          },
          {
            text: 'Under Resonance Liberation Deathblade Gear state, Calcharo\'s Forte Gauge is replaced with "Killing Intent", stacking up to 5. When Basic Attack Hounds Roar hits the target, Calcharo gains 1 "Killing Intent".',
            title: '"Killing Intent"',
          },
          {
            text: 'When Calcharo has 3 "Cruelty", his Heavy Attack is replaced with Heavy Attack "Mercy". When casting Heavy Attack "Mercy", Calcharo consumes 3 "Cruelty" to deal Electro DMG, considered as Heavy Attack damage, and recovers Resonance Energy and Concerto Energy.',
            title: 'Heavy Attack: "Mercy"',
          },
          {
            text: 'When Calcharo has 5 "Killing Intent", his Basic Attack is replaced with Heavy Attack "Death Messenger". When casting Heavy Attack "Death Messenger", Calcharo consumes 5 "Killing Intent" to deal Electro DMG, considered as Resonance Liberation damage, and recovers Resonance Energy and Concerto Energy.',
            title: 'Heavy Attack: "Death Messenger"',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Phantom Etching',
        sections: [
          {
            text: 'Calcharo attacks the target, dealing Electro DMG and enters Deathblade Gear state. After Resonance Liberation Deathblade Gear state ends, Calcharo\'s next Intro Skill is replaced with Intro Skill "Necessary Means", which deals Electro DMG, considered as Intro Skill damage.',
            title: null,
          },
          {
            text: 'Perform up to 5 consecutive attacks, dealing Electro DMG, considered as Basic Attack Damage.',
            title: 'Hounds Roar',
          },
          {
            text: 'Basic Attack is replaced with Basic Attack Hounds Roar. Dodge Counter deals increased damage, considered as Resonance Liberation damage.',
            title: 'Deathblade Gear',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Extermination Order',
        sections: [
          {
            text: 'Cast up to 3 attacks. Deal Electro DMG.\nIf this Character is switched or Resonance Skill Extermination Order is not repeated in a while, it will be put on a Cooldown. Resonance Skill Extermination Order does not reset your Basic Attack stage.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Bloodshed Awaken',
        sections: [
          {
            text: 'When casting Heavy Attack "Mercy", Calcharo\'s Resonance Liberation DMG Bonus is increased by 10% for 15s.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Revenant Rush',
        sections: [
          {
            text: 'When Heavy Attack "Death Messenger" hits the target, the damage taken by Calcharo is reduced by 15% for 5s.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Waveworn Residue',
      },
      ascension_materials: {
        boss_material: 'Thundering Tacet Core',
        regional_specialty: 'Iris',
        ascension_material_set: 'Ring',
      },
    },
  },
  {
    id: 4,
    release_date: '2024-07-24',
    name: 'Changli',
    attribute: 'Fusion',
    weapon: 'Sword',
    character_icon_url: '/character-icons/changli/changli-icon.webp',
    character_portrait_url: '/character-icons/changli/Changli_Full_Sprite.png',
    character_card_url: '/character-icons/changli/Changli_Card.png',
    rarity: 5,
    version_released: 1.1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Obedience of Rules',
        sections: [
          {
            text: 'Changli appears in mid-air, attacks the target, and enters True Sight, lasting for 12s.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Strategy of Duality',
        sections: [
          {
            text: 'The incoming Resonator has their Fusion DMG Amplified by 20% and Resonance Liberation DMG Amplified by 25% for 10s or until the Resonator is switched out.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Blazing Enlightment',
        sections: [
          {
            text: 'Perform up to 4 consecutive attacks, dealing Fusion DMG. After releasing Basic Attack 4, enter True Sight, lasting for 12s.',
            title: 'Basic Attack',
          },
          {
            text: 'Hold Basic Attack on the ground to perform an upward strike at the cost of Stamina, dealing Fusion DMG. Use Basic Attack within a certain time to release Mid-Air Attack 3.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing Fusion DMG. After releasing Mid-air Attack 4, enter True Sight, lasting for 12s.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Shortly after holding Basic Attack in mid-air or using Basic Attack True Sight: Charge, use Basic Attack to perform a plunging attack at the cost of Stamina, dealing Fusion DMG. Use Basic Attack within a certain time to release Basic Attack 3.',
            title: 'Mid-air Heavy Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Flaming Sacrifice',
        sections: [
          {
            text: 'Changli can hold up to 4 stacks of Enflamement.\nChangli obtains 1 stack of Enflamement for every Basic Attack: True Sight - Conquest on hit.\nChangli obtains 1 stack of Enflamement for every Basic Attack: True Sight - Charge on hit.\nChangli obtains 4 stacks of Enflamement for every Resonance Liberation Radiance of Fealty.',
            title: 'Enflamement',
          },
          {
            text: 'When releasing Heavy Attack, if Changli carries 4 stacks of Enflamement, she consumes all stacks of Enflamement to cast Flaming Sacrifice, dealing Fusion DMG, considered as Resonance Skill DMG. While casting Flaming Sacrifice, Changli takes 40% less DMG.',
            title: 'Heavy Attack: Flaming Sacrifice',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Radiance of Fealty',
        sections: [
          {
            text: 'Deal Fusion DMG to nearby targets, obtaining 4 stacks of Enflamement, and entering Fiery Feather. Can be cast in mid-air.',
            title: null,
          },
          {
            text: 'When Changli releases Heavy Attack Flaming Sacrifice within 10s, her ATK is increased by 25%, after which Fiery Feather ends.',
            title: 'Fiery Feather',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Tripartite Flames',
        sections: [
          {
            text: 'After releasing Resonance Skill, Changli dashes towards the enemy and enters True Sight, lasting for 12s. In the end, she releases a plunging attack, dealing Fusion DMG. True Sight: Capture has 2 initial attempts and can be used up to 2 times. The number of attempts is increased by 1 every 12s. Can be cast in mid-air.',
            title: 'True Sight: Capture',
          },
          {
            text: 'When in True Sight, if Changli jumps or uses Basic Attack in mid-air, she releases True Sight: Charge, dashing towards the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Charge, True Sight ends.',
            title: 'Basic Attack: True Sight - Charge',
          },
          {
            text: 'When in True Sight, if Changli uses Ground Basic Attack, she releases True Sight: Conquest, dashing towards the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Conquest, True Sight ends.',
            title: 'Basic Attack: True Sight - Conquest',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Secret Strategist',
        sections: [
          {
            text: "When Changli releases Basic Attack: True Sight - Conquest or Basic Attack: True Sight - Charge, for each stack of Enflamement, Changli's Fusion DMG Bonus is increased by 5%.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Sweeping Force',
        sections: [
          {
            text: "When Changli releases Heavy Attack Flaming Sacrifice or Resonance Liberation Radiance of Fealty, Changli's Fusion DMG Bonus is increased by 20%, and Changli ignores 15% of the target's DEF when dealing damage.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: "Sentinel's Dagger",
        talent_material_set: 'Metallic',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Pavo Plum',
        ascension_material_set: 'Ring',
      },
    },
  },
  {
    id: 0,
    release_date: '2024-05-23',
    name: 'Aalto',
    attribute: 'Aero',
    weapon: 'Pistols',
    character_icon_url: '/character-icons/aalto/aalto-icon.webp',
    character_portrait_url: '/character-icons/aalto/Aalto_Full_body_illustration.png',
    character_card_url: '/character-icons/aalto/Aalto_Card.jpg',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Feint Shot',
        sections: [
          {
            text: 'Aalto suddenly appears and performs rapid continuous shooting, dealing Aero DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Dissolving Mist',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 23% Aero DMG Deepen for 14 seconds or until the Character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Half Truths',
        sections: [
          {
            text: 'Aalto fires up to 5 consecutive shots, dealing Aero DMG. Basic Attack 4 will spread the "Mist" forward, which lasts for 1.5s.',
            title: 'Basic Attack',
          },
          {
            text: 'Aalto enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Aero DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Aalto consumes Stamina to perform consecutive shots at the target in mid-air, dealing Aero DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Misty Cover',
        sections: [
          {
            text: 'When Aalto passes through "Mist" or "Gate of Quandary", he enters "Mistcloak Dash".',
            title: null,
          },
          {
            text: 'Aalto can hold up to 6 Mist Drops. When Basic Attack or Mid-air Attack passes through "Mist" and hits the target, 1 "Mist Drop" is recovered.',
            title: 'Mist Drops',
          },
          {
            text: 'Movement speed increased; During this period, "Mist Drops" are continuously consumed, and for each 1 "Mist Drop" consumed, 1 Resonance Skill Mist Missile is generated.',
            title: 'Mistcloak Dash',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Shift Trick',
        sections: [
          {
            text: 'Casts "Mist" and 1 "Mist Avatar(s)" to taunt the surrounding targets. The avatars inherit a portion of Aalto\'s HP and generate 6 Mist Bullets around them, dealing Aero DMG.',
            title: 'Mist Avatar',
          },
          {
            text: 'Deals Aero DMG, considered as Resonance Skill damage.',
            title: 'Mist Missiles',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Perfect Performance',
        sections: [
          {
            text: "Aalto's Heavy Attack will always critically hit, triggered once every 30 seconds.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Mid-game Break',
        sections: [
          {
            text: 'Aalto will continuously recover Stamina when he is in the Forte Circuit Miscloak Dash state.',
            title: null,
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Flower in the Mist',
        sections: [
          {
            text: 'Generate a "Gate of Quandary" in front of you dealing Aero DMG. When bullets pass through the "Gate of Quandary", ATK is increased. "Gate of Quandary" lasts for 10s.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Roaring Rock Fist',
        regional_specialty: 'Wintry Bell',
        ascension_material_set: 'Howler',
      },
    },
  },
  {
    id: 6,
    release_date: '2024-05-23',
    name: 'Danjin',
    attribute: 'Havoc',
    weapon: 'Sword',
    character_icon_url: '/character-icons/danjin/danjin-icon.webp',
    character_portrait_url: '/character-icons/danjin/Danjin_Full_Sprite.png',
    character_card_url: '/character-icons/danjin/Danjin_Card.png',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Vindiction',
        sections: [
          {
            text: 'With unwavering determination, Danjin unleashes a strike, dealing Havoc DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Duality',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 23% Havoc DMG Deepen for 14 seconds or until the Character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Execution',
        sections: [
          {
            text: 'Danjin performs up to 3 consecutive attacks, dealing Havoc DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Danjin combines her Forte with the blade in her hand and consumes Stamina to launch consecutive attacks, dealing Havoc DMG.',
            title: 'Heavy Attack',
          },
          {
            text: ' Basic Attack after a successful Dodge to launch an attack, dealing Havoc DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consumes Stamina to perform a mid-air Plunging Attack, dealing Havoc DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'After a successful Dodge Counter, Danjin can use the Resonance Skill Crimson Fragment to cast the Resonance Skill Crimson Erosion',
            title: 'Dodge Counter: Ruby Shades',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Serene Vigil',
        sections: [
          {
            text: 'Danjin obtains "Ruby Blossom" when using Resonance Skill Crimson Fragment.',
            title: 'Ruby Blossom',
          },
          {
            text: 'After accumulating 60 "Ruby Blossom", long press Basic Attack to consume all "Ruby Blossom" to cast Chaoscleave, dealing Havoc DMG, considered as Heavy Attack damage, and restoring HP to Danjin.\nIf current "Ruby Blossom" exceeds 120, this consumes 120 "Ruby Blossom" to increase the damage multiplier of Chaoscleave and Scatterbloom performed this time.',
            title: 'Heavy Attack: Chaoscleave',
          },
          {
            text: 'Use Basic Attack after Heavy Attack Chaoscleave to launch Shatter to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.',
            title: 'Heavy Attack: Scatterbloom',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Crimson Bloom',
        sections: [
          {
            text: "Danjin's anger intensifies as she frantically swings her dual blades, performing multiple rapid consecutive attacks, and 1 Scarlet Burst attack(s), dealing Havoc DMG.",
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Crimson Fragment',
        sections: [
          {
            text: "When casting Incinerating Will, each attack consumes 3% of Danjin's max HP. When Danjin's HP is less than 1%, this no longer consumes HP.",
            title: null,
          },
          {
            text: 'Danjin attacks the target, dealing Havoc DMG.',
            title: 'Carmine Gleam',
          },
          {
            text: 'Use Resonance Skill after Basic Attack III to perform up to 3 consecutive attacks, dealing Havoc DMG.',
            title: 'Sanguine Pulse',
          },
          {
            text: 'After Basic Attack II, Dodge Counter or Intro Skill Vindication, use Resonance Skill to perform up to 2 consecutive strikes, dealing Havoc DMG. When Crimson Erosion II hits a target, apply Incinerating Will to it.',
            title: 'Crimson Erosion',
          },
          {
            text: "Danjin's damage dealt to targets marked with Incinerating Will is increased by 20%.",
            title: 'Incinerating Will',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Crimson Light',
        sections: [
          {
            text: 'The damage of the Resonance Skill Crimson Erosion triggered by Dodge Counter: Ruby Shades is increased by 20%. The HP cost and stacks of "Ruby Blossom" recovered are doubled.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Overflow',
        sections: [
          {
            text: "After casting the Resonance Skill Sanguine Pulse, Danjin's Heavy Attack damage is increased by 30% for 5s.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unwarranted Feather',
        talent_material_set: 'Metallic',
      },
      ascension_materials: {
        boss_material: 'Strife Tacet Core',
        regional_specialty: 'Belle Poppy',
        ascension_material_set: 'Ring',
      },
    },
  },
  {
    id: 7,
    release_date: '2024-05-23',
    name: 'Encore',
    attribute: 'Fusion',
    weapon: 'Rectifier',
    character_icon_url: '/character-icons/encore/encore-icon.webp',
    character_portrait_url: '/character-icons/encore/Encore_Full_Sprite.png',
    character_card_url: '/character-icons/encore/Encore_Card.png',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Woolies Can Help!',
        sections: [
          {
            text: 'Encore pounces at the enemies with Cosmos, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Thermal Field',
        sections: [
          {
            text: "Encore generates a Flame Zone centered around skill target, with a radius of 3m. Targets inside the Flame Zone are continuously burned, suffering Fusion DMG equal to 176.76% of Encore's ATK every 1.5s for 6s.",
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Wooly Attack',
        sections: [
          {
            text: 'Perform up to 4 consecutive attacks, dealing Fusion DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Encore consumes Stamina to attack the target, dealing Fusion DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Encore consumes Stamina to perform a Plunging Attack, dealing Fusion DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'After the Basic Attack IV, press Basic Attack to attack the target, dealing Fusion DMG',
            title: 'Basic Attack: Wooly Strike',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Black & White Woolies',
        sections: [
          {
            text: 'Encore can hold up to 100 "Dissonance".\nWhen Normal Attack Wooly Attack hits the target, Encore restores "Dissonance". When Resonance Skill Flaming Woolies hits the target, Encore restores "Dissonance". When Resonance Skill Energetic Welcome hits the target, Encore restores "Dissonance". When Intro Skill Woolies Helpers hits the target, Encore restores "Dissonance".\nDuring the duration of Resonance Liberation Cosmos Rampage, hitting targets will restore "Dissonance" to Encore.',
            title: 'Dissonance',
          },
          {
            text: 'When Encore\'s "Dissonance" is full, after casting a Heavy Attack, Encore will consume all "Dissonance" to enter the Dissonance state, reducing damage taken by 70%. Switching Characters does not interrupt "Dissonance".\nAfter the Dissonance state ends, Encore will cast Cloudy Frenzy, dealing Fusion DMG, considered as Resonance Liberation damage.',
            title: 'Resonance Liberation: Cloudy Frenzy',
          },
          {
            text: 'During Cosmos Rampage, when casting Heavy Attack, if "Dissonance" is full, Encore will consume all "Dissonance" to enter Cosmos\' Dissonance state, reducing damage taken by 70%. Switching Characters does not interrupt "Dissonance".\nAfter Cosmos\' Dissonance state ends, Encore will cast Cosmos Rupture, dealing Fusion DMG, considered as Resonance Liberation damage.',
            title: 'Resonance Liberation: Cosmos Rupture',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Cosmos Rave',
        sections: [
          {
            text: 'As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.',
            title: null,
          },
          {
            text: 'During Cosmos Rampage, the Heavy Attack is replaced with Cosmos: Heavy Attack, consuming Stamina to attack the target, dealing Fusion DMG, considered as Heavy Attack damage.',
            title: 'Cosmos: Heavy Attack',
          },
          {
            text: 'During Cosmos Rampage, use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG, considered as Basic Attack damage.',
            title: 'Cosmos: Dodge Counter',
          },
          {
            text: 'During Cosmos Rampage, the Basic Attack is replaced with Cosmos: Frolicking, which performs up to 4 consecutive attacks, dealing Fusion DMG, considered as Basic Attack damage.',
            title: 'Basic Attack: Cosmos: Frolicking',
          },
          {
            text: 'During Cosmos Rampage, Flaming Woolies is replaced with Cosmos:Rampage, attacking the target with uncontrollable flames, dealing Fusion DMG, considered as Resonance Skill damage.',
            title: 'Resonance Skill: Cosmos: Rampage',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Flaming Woolies',
        sections: [
          {
            text: 'Summon Cloudy and Cosmos to attack the target with high-temperature rays, dealing Fusion DMG.',
            title: 'Flaming Woolies',
          },
          {
            text: 'After casting Flaming Woolies, use Resonance Skill to launch Energetic Welcome to attack the target, dealing Fusion DMG.',
            title: 'Energetic Welcome',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Angry Cosmos',
        sections: [
          {
            text: "During the Resonance Liberation Cosmos Rave, when Encore's HP is above 70%, DMG dealt is increased by 10%.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Woolies Cheer Dance',
        sections: [
          {
            text: "When Resonance Skill Flaming Woolies or Resonance Skill Cosmos: Rave is cast, Encore's Fusion DMG Bonus is increased by 10% for 10 seconds.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unending Destruction',
        talent_material_set: 'Helix',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Pecok Flower',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 8,
    release_date: '2024-05-23',
    name: 'Jianxin',
    attribute: 'Aero',
    weapon: 'Gauntlets',
    character_icon_url: '/character-icons/jianxin/jianxin-icon.webp',
    character_portrait_url: '/character-icons/jianxin/Jianxin_Full_Sprite.png',
    character_card_url: '/character-icons/jianxin/Jianxin_Card.png',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Essence of Tao',
        sections: [
          {
            text: 'Pull targets within the range, dealing Aero DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Transcendence',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Resonance Liberation DMG Deepen for 14s or until the Character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Fengyiquan',
        sections: [
          {
            text: 'Perform up to 4 attacks, dealing Aero DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Consume Stamina to attack the target, dealing Aero DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Jianxin consumes Stamina to plunge and unleash a powerful kick, dealing Aero DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Primordial Chi Spiral',
        sections: [
          {
            text: 'Jianxin can hold up to 120 Chi. Chi is obtained when a Normal Attack Fengyiquan hits the target. Chi is obtained when the Resonance Skill Calming Air is cast. Chi is obtained when the Resonance Skill Chi Counter or Resonance Skill Chi Parry hits the target. Chi is obtained when the Intro Skill Essence of Tao hits the target.',
            title: 'Chi',
          },
          {
            text: 'Jianxin\'s anti-interruption is increased, and her the damage taken is reduced by 50%.\nJianxin continuously consumes "Chi" and casts Chi Strike to attack targets nearby, dealing Aero DMG. As Zhoutian Progress accumulates, Jianxin reaches different Zhoutian and gain effects accordingly.\n- Before Minor Zhoutian: Gain Zhoutian Progress 1 shield. When Zhoutian Progress is interrupted, cast Pushing Punch to attack the target, dealing Aero DMG.\n- Minor Zhoutian: Gain Zhoutian Progress 2 shield and cast Shock to attack the target, dealing Aero DMG. When Zhoutian Progress is interrupted, cast Yielding Pull to attack the target, dealing Aero DMG.\n -Major Zhoutian: Inner: Gain Zhoutian Progress 3 shield and cast Shock to attack the target, dealing Aero DMG. When Zhoutian Progress is interrupted, cast Yielding Pull to attack the target, dealing Aero DMG.\n- Major Zhoutian: Outer: Gain Zhoutian Progress 3 shield and cast Shock to attack the target, dealing Aero DMG.\n- When you release Basic Attack button, interrupt Zhoutian Progress and lose all "Chi". When all "Chi" is consumed, end Zhoutian Progress.\nWhen Zhoutian Progress ends, regain a shield according to the Zhoutian Progress you reached; As the shield provided by Heavy Attack: Primordial Chi Spiral persists, restore HP for the on-field character once every 6s.',
            title: 'Zhoutian Progress',
          },
          {
            text: 'When "Chi" is stacked to its max, hold Heavy Attack to cast Primordial Chi Spiral and start Zhoutian Progress.',
            title: 'Heavy Attack: Primordial Chi Spiral',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Purification Force Field',
        sections: [
          {
            text: 'Creates a strong wind field, continuously pulling targets within the wind field to the center and causing Aero DMG. When the wind field disappears, it will cause Aero DMG to all targets within the range again.',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Calming Air',
        sections: [
          {
            text: 'Hold Resonance Skill to enter Parry Stance.',
            title: null,
          },
          {
            text: 'Release the Resonance Skill during Parry Stance to interrupt Parry Stance and cast Chi Parry, dealing Aero DMG.',
            title: 'Chi Parry',
          },
          {
            text: 'When Jianxin is attacked in the Parry Stance, she does not take damage and immediately performs Chi Counter, dealing Aero DMG.',
            title: 'Chi Counter',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Formless Release',
        sections: [
          {
            text: 'Damage of Resonance Liberation Purification Force Field is increased by 20%.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Reflection',
        sections: [
          {
            text: 'The shield obtained with Heavy Attack Primordial Chi Spiral is increased by 20%.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unending Destruction',
        talent_material_set: 'Cadence',
      },
      ascension_materials: {
        boss_material: 'Roaring Rock Fist',
        regional_specialty: 'Lanternberry',
        ascension_material_set: 'Howler',
      },
    },
  },
  {
    id: 9,
    release_date: '2024-06-28',
    name: 'Jinhsi',
    attribute: 'Spectro',
    weapon: 'Broadblade',
    character_icon_url: '/character-icons/jinhsi/jinhsi-icon.webp',
    character_portrait_url: '/character-icons/jinhsi/Jinhsi_Full_Sprite.png',
    character_card_url: '/character-icons/jinhsi/Jinhsi_Card.png',
    rarity: 5,
    version_released: 1.1,
    talent_description: {
      intro_skill: {
        name: "Intro Skill: Loong's Halo",
        sections: [
          {
            text: 'Attack the target, dealing Spectro DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Temporal Bender',
        sections: [
          {
            text: 'Summoning the power homologous with the Sentinel, Jinhsi may now gain Incandescence via Eras in Unity from damage of the same Attribute more effectively, at 1 time(s) every 1s for 20s.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Slash of Breaking Dawn',
        sections: [
          {
            text: 'Perform up to 4 consecutive strikes, dealing Spectro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Perform a charged attack at the cost of Stamina, dealing Spectro DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to counterattack, dealing Spectro DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Perform a plunging attack while in mid-air at the cost of Stamina, dealing Spectro DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Luminal Synthesis',
        sections: [
          {
            text: "While Jinhsi has Unison, switching to other Resonators will remove Jinhsi's Unison to trigger Jinhsi's Outro Skill and the incoming Resonator's Intro Skill. Unison will be consumed in priority in place of Concerto Energy when Concerto Energy is full.",
            title: 'Unison',
          },
          {
            text: 'While in Incarnation:\n- Alternative Basic Attack "Incarnation - Basic Attack" becomes available. Perform up to 4 consecutive strikes, dealing Spectro DMG considered as Resonance Skill DMG. The basic attack cycle of this will not be reset. Can be cast in mid-air.\n- Alternative Resonance Skill "Crescent Divinity" becomes available. Deal Spectro DMG. Can be cast in mid-air.\n- Alternative Heavy Attack "Incarnation - Heavy Attack" becomes available. Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG.\n- Alternative Dodge "Incarnation - Dodge" is available while in mid-air. Can be cast multiple times at the cost of Stamina.\n- Alternative Dodge Counter "Incarnation - Dodge Counter" becomes available. Deal Spectro DMG. Can be cast in mid-air',
            title: 'Incarnation',
          },
          {
            text: 'Jinhsi can hold up to 50 Incandescence.\nWhen Jinhsi is in the party, all nearby Resonators in the party gain Eras in Unity. Eras in Unity provides 2 independent effects:\nJinhsi gains 1 Incandescence anytime Resonators in the party inflict Attribute DMG. This effect may be triggered by damage of the same Attribute for up to 1 time(s) every 3s. Additionally, Jinhsi gains 2 Incandescence when Resonators in the party damage the enemy with Coordinated Attacks. This effect may be triggered by Coordinated Attacks of the same Attribute for up to 1 time(s) every 3s.',
            title: 'Incandescence',
          },
          {
            text: 'After Stage 4 of Incarnation - Basic Attack, Incarnation terminates and Jinhsi gains Ordination Glow. Can be cast in mid-air.\n While Ordination Glow lasts:\n- Basic Attack is replaced with Heavy Attack "Incarnation - Heavy Attack". Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG.\n- Resonance Skill is replaced with Resonance Skill "Illuminous Epiphany". Send out Solar Flare that detonates as Stella Glamor, dealing Spectro DMG after a short delay. Consume up to 50 Incandescence, with each point of Incandescence granting bonus DMG Multiplier percentage to Stella Glamor. Can be cast in mid-air.\n- After casting Resonance Skill Illuminous Epiphany, Jinhsi gains Unison. This can be triggered once every 25s.',
            title: 'Resonance Skill - Illuminous Epiphany',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Purge of Light',
        sections: [
          {
            text: 'Unleash the power of invocation to deal Spectro DMG. Can be cast in mid-air.',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Trailing Lights of Eons',
        sections: [
          {
            text: 'Dash forward and perform consecutive strikes that inflict Spectro DMG.',
            title: null,
          },
          {
            text: "After Jinhsi uses Basic Attack 4 or, while not in Incarnation, Intro Skill Loong's Halo, an alternative Resonance Skill Overflowing Radiance is available within 5s.\nResonance Skill Overflowing Radiance inflicts Spectro DMG and sends Jinhsi into Incarnation. Can be cast in mid-air.",
            title: 'Overflowing Radiance',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Radiant Surge',
        sections: [
          {
            text: "Jinhsi's Spectro DMG Bonus is increased by 20%.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Converged Flash',
        sections: [
          {
            text: "DMG Multiplier of Intro Skill Loong's Halo is increased by 50%.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: "Sentinel's Dagger",
        talent_material_set: 'Waveworn Residue',
      },
      ascension_materials: {
        boss_material: 'Elegy Tacet Core',
        regional_specialty: "Loong's Pearl",
        ascension_material_set: 'Howler',
      },
    },
  },
  {
    id: 10,
    release_date: '2024-05-23',
    name: 'Jiyan',
    attribute: 'Aero',
    weapon: 'Broadblade',
    character_icon_url: '/character-icons/jiyan/jiyan-icon.webp',
    character_portrait_url: '/character-icons/jiyan/Jiyan_Full_Sprite.png',
    character_card_url: '/character-icons/jiyan/Jiyan_Card.png',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Tactical Strike',
        sections: [
          {
            text: 'Jiyan stabs the target from the air, dealing Aero DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Discipline',
        sections: [
          {
            text: "When the next Character's (or other Characters on a nearby team that activates an Outro Skill) Heavy Attack hits the target, Jiyan will summon Qingloong to launch a Coordinated Attack, dealing Aero DMG equal to 313.40% of Jiyan's ATK. This attack lasts for 8s, and can be triggered once every 1s, up to 2 times.",
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Lone Lance',
        sections: [
          {
            text: 'Perform up to 5 consecutive attacks, dealing Aero DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Consume Stamina to perform a thrust attack, dealing Aero DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use a Basic Attack after a successful Dodge to attack the target with, dealing Aero DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consume Stamina to perform a Mid-Air Plunging Attack, dealing Aero DMG. After the Plunging Attack, use Basic Attack to perform a following attack, dealing Aero DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Release the Basic Attack during the Heavy Attack to cast Abyssal Slash after the Heavy Attack ends, dealing Aero DMG.',
            title: 'Heavy Attack: Abyssal Slash',
          },
          {
            text: 'Hold the Basic Attack during Heavy Attack to cast Windborne Strike after the Heavy Attack ends, dealing Aero DMG.',
            title: 'Heavy Attack: Windborne Strike',
          },
          {
            text: 'After casting the Heavy Attack Windborne Strike or the Resonance Skill Windqueller in the air, Jiyan can perform an aerial attack, dealing Aero DMG.',
            title: 'Mid-air Attack: Banner of Triumph',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Qingloong at War',
        sections: [
          {
            text: 'When casting Resonance Skill Windqueller, if Jiyan has 30 or more "Resolve", he consumes 30 "Resolve" to increase the damage of this Resonance Skill Windqueller by 20%. When Jiyan is in Qingloong Mode, DMG of Resonance Skill Windqueller is increased by 20% and no longer consumes "Resolve".',
            title: null,
          },
          {
            text: 'Jiyan can hold up to 60 Resolve. Jiyan gains "Resolve" when his Normal Attack Lone Lance hits the target. Jiyan gains "Resolve" when the Intro Skill Tactical Strike hits the target. If Jiyan does not hit a target within 15 seconds, his "Resolve" will gradually decrease',
            title: 'Resolve',
          },
          {
            text: 'When casting Resonance Liberation Emerald Storm: Prelude, if Jiyan has 30 "Resolve" or more, he will consume 30 "Resolve" to cast Emerald Storm: Finale, dealing Aero DMG, considered as Heavy Attack damage. Emerald Storm: Finale can be cast in mid-air at low altitude.',
            title: 'Resonance Liberation: Emerald Storm: Finale',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Emerald Storm: Prelude',
        sections: [
          {
            text: 'After releasing Emerald Storm: Prelude, Jiyan enters Qingloong Mode.',
            title: null,
          },
          {
            text: 'Jiyan has increased Anti-interruption; Basic Attack, Heavy Attack and Dodge Counter are replaced with Heavy Attack Lance of Qingloong.',
            title: 'Qingloong Mode',
          },
          {
            text: 'Perform up to 3 continuous attacks, dealing Aero DMG, considered as Heavy Attack damage.',
            title: 'Heavy Attack: Lance of Qingloong',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Windqueller',
        sections: [
          {
            text: 'Dash forward a certain distance, dealing Aero DMG. Can be cast in the air.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Heavenly Balance',
        sections: [
          {
            text: "After casting the Intro Skill Tactical Strike, Jiyan's ATK is increased by 10% for 15s.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Tempest Taming',
        sections: [
          {
            text: "When attacks hit a target, Jiyan's Crit. DMG is increased by 12% for 8s.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Waveworn Residue',
      },
      ascension_materials: {
        boss_material: 'Roaring Rock Fist',
        regional_specialty: 'Pecok Flower',
        ascension_material_set: 'Howler',
      },
    },
  },
  {
    id: 11,
    release_date: '2024-05-23',
    name: 'Lingyang',
    attribute: 'Glacio',
    weapon: 'Gauntlets',
    character_icon_url: '/character-icons/lingyang/lingyang-icon.webp',
    character_portrait_url: '/character-icons/lingyang/Lingyang_Full_Sprite.png',
    character_card_url: '/character-icons/lingyang/Lingyang_Card.png',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Lion Awakens',
        sections: [
          {
            text: 'Lingyang appears and deals Glacio damage.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Frosty Marks',
        sections: [
          {
            text: "Lingyang releases a shock wave centered on the skill target, dealing Glacio DMG equal to 587.94% of Lingyang's ATK to targets within the range.",
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Majestic Fists',
        sections: [
          {
            text: 'Perform up to 5 attacks, dealing Glacio damage.',
            title: 'Basic Attack',
          },
          {
            text: 'Consume Stamina to attack the target, dealing Glacio damage.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use a Basic Attack after a successful Dodge to attack the target, dealing Glacio damage.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consume Stamina to perform a Mid-air Plunging Attack, dealing Glacio damage.',
            title: 'Mid-air Attack',
          },
          {
            text: 'After Resonance Skill Furious Punches is cast, Basic Attack V is replaced with Feral Roars, dealing Glacio damage.',
            title: 'Basic Attack: Feral Roars',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Unification of Spirits',
        sections: [
          {
            text: "Lingyang can hold up to 100 Lion's Spirit. When casting Resonance Skill Furious Punches, Lion's Spirit is restored. When casting Intro Skill Lion Awakens, Lion's Spirit is restored. When casting Resonance Liberation Strive: Lion's Vigor, Lion's Spirit is restored.",
            title: "Lion's Spirit",
          },
          {
            text: "After casting Heavy Attack Glorious Plunge, enter Striding Lion state; After casting Intro Skill Lion Awakens or Resonance Liberation Strive: Lion's Vigor, if Lion's Spirit is full, use Basic Attack to enter Striding Lion state. In the Striding Lion state: Attacks can be launched in mid-air. If you are back on the ground, use Heavy Attack Glorious Plunge to get back in the air.\nLion's Spirit is continuously consumed, and the Striding Lion state ends in 5s after Lion's Spirit runs out; If Lingyang is in the Resonance Liberation Lion's Vigor state, the consumption speed of Lion's Spirit is reduced by 50%, extending Striding Lion state by up to 10s.\nLingyang's Basic Attack is replaced with Basic Attack Feral Gyrate, which performs up to 2 consecutive attacks, dealing Glacio damage. Lingyang's Resonance Skill is replaced with Mountain Roamer, dealing Glacio damage. When Lion's Spirit is less than 10, use Basic Attack to perform Stormy Kicks, dealing Glacio damage; after performing Basic Attack Stormy Kicks, the Mid-air Attack Radiant Plunge becomes available. Concerto Energy is restored when Lion's Spirit is consumed.",
            title: 'Striding Lion',
          },
          {
            text: "When Lion's Spirit is not full, use Basic Attack after Heavy Attack to perform Tail Strike, dealing Glacio damage.",
            title: 'Mid-air Attack: Tail Strike',
          },
          {
            text: "When Lion's Spirit is full, use Heavy Attack to perform Glorious Plunge, dealing Glacio damage.",
            title: 'Heavy Attack: Glorious Plunge',
          },
        ],
      },
      resonance_lib: {
        name: "Resonance Liberation: Strive: Lion's Vigor",
        sections: [
          {
            text: "Attack the target, dealing Glacio damage, and receive the blessing of Lion's Vigor, which lasts for 14 seconds.",
            title: null,
          },
          {
            text: "Lingyang's Glacio DMG Bonus is increased by 50%.",
            title: "Lion's Vigor",
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Ancient Arts',
        sections: [
          {
            text: 'Attack the target, dealing Glacio damage.',
            title: 'Ancient Arts',
          },
          {
            text: "When Basic Attacks III, IV, or V or Basic Attack Feral Roars hits the target, Resonance Skill Ancient Arts is replaced with Resonance Skill Swift Punches. If Lingyang uses Basic Attack after casting Basic Attack Feral Roars and Resonance Skill Swift Punches, he will start from Basic Attack III.\nLingyang's Resonance Skill will not reset his Basic Attack stage.",
            title: 'Furious Punches',
          },
        ],
      },
      inherent_skill_1: {
        name: "Inherent Skill: Lion's Pride",
        sections: [
          {
            text: 'The damage of the Intro Skill Lion Awakens is increased by 50%.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Diligent Practice',
        sections: [
          {
            text: 'Under the Striding Lion state, within 3s after each Basic Attack, the next Mountain Roamer will deal an additional Glacio damage, equal to 150% of Mountain Roamer damage, considered as Resonance Skill damage.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unending Destruction',
        talent_material_set: 'Cadence',
      },
      ascension_materials: {
        boss_material: 'Sound-Keeping Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 12,
    release_date: '2024-05-23',
    name: 'Mortefi',
    attribute: 'Fusion',
    weapon: 'Pistols',
    character_icon_url: '/character-icons/mortefi/mortefi-icon.webp',
    character_portrait_url: '/character-icons/mortefi/Mortefi_Illutration.png',
    character_card_url: '/character-icons/mortefi/Mortefi_Card.jpg',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Dissonance',
        sections: [
          {
            text: 'Attack the target, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Rage Transposition',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Impromptu Show',
        sections: [
          {
            text: 'Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Fury Fugue',
        sections: [
          {
            text: 'Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores "Annoyance".',
            title: 'Annoyance',
          },
          {
            text: 'When Mortefi\'s "Annoyance" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all "Annoyance" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.',
            title: 'Resonance Skill: Fury Fugue',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Violent Finale',
        sections: [
          {
            text: 'Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.',
            title: null,
          },
          {
            text: 'Deals Fusion DMG.',
            title: 'Marcato',
          },
          {
            text: "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
            title: 'Burning Rhapsody',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Passionate Variation',
        sections: [
          {
            text: 'Launch high-speed flame lightning forward, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Harmonic Control',
        sections: [
          {
            text: 'After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Rhythmic Vibrato',
        sections: [
          {
            text: 'During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 15,
    release_date: '2024-05-23',
    name: 'Sanhua',
    attribute: 'Glacio',
    weapon: 'Sword',
    character_icon_url: '/character-icons/sanhua/sanhua-icon.webp',
    character_portrait_url: '/character-icons/sanhua/Sanhua_Model.png',
    character_card_url: '/character-icons/sanhua/Sanhua_Card.jpg',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Dissonance',
        sections: [
          {
            text: 'Attack the target, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Rage Transposition',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14 seconds or until the Character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Impromptu Show',
        sections: [
          {
            text: 'Mortefi uses his dual guns and fire to perform up to 4 continuous attacks dealing Fusion DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after successful Dodge to attack the target, dealing Fusion DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Fury Fugue',
        sections: [
          {
            text: 'Mortefi can hold up to 100 Annoyance. When Normal Attack Impromptu Show hits the target, “Annoyance” is restored. When Intro Skill Dissonance hits the target, “Annoyance” is restored. When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored. Within 5 seconds after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores "Annoyance".',
            title: 'Annoyance',
          },
          {
            text: 'When Mortefi\'s "Annoyance" reaches 100, his Resonance Skill is replaced with Fury Fudge. When casting Fury Fudge, Mortefi consumes all "Annoyance" to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.',
            title: 'Resonance Skill: Fury Fugue',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Violent Finale',
        sections: [
          {
            text: 'Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.',
            title: null,
          },
          {
            text: 'Deals Fusion DMG.',
            title: 'Marcato',
          },
          {
            text: "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
            title: 'Burning Rhapsody',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Passionate Variation',
        sections: [
          {
            text: 'Launch high-speed flame lightning forward, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Harmonic Control',
        sections: [
          {
            text: 'After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Draconic Hellfire is increased by 25% for 8s.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Rhythmic Vibrato',
        sections: [
          {
            text: 'During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times. The effect will be reset after Resonance Liberation Burning Rhapsody ends.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 16,
    release_date: '2023-05-24',
    name: 'Taoqi',
    attribute: 'Havoc',
    weapon: 'Broadblade',
    character_icon_url: '/character-icons/taoqi/taoqi-icon.webp',
    character_portrait_url: '/character-icons/taoqi/Taoqi_Model.png',
    character_card_url: '/character-icons/taoqi/Taoqi_Card.jpg',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Defense Formation',
        sections: [
          {
            text: 'Attack the target, dealing Havoc DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Iron Will',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Resonance Skill DMG Deepen for 14 seconds or until the character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Concealed Edge',
        sections: [
          {
            text: 'Taoqi performs up to 4 continuous attacks, dealing Havoc DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Taoqi consumes Stamina and enters Rocksteady Defense state.',
            title: 'Heavy Attack',
          },
          {
            text: "Taoqi's damage taken is reduced by 35%.",
            title: 'Rocksteady Defense',
            bullets: [
              'When Taoqi is attacked during Rocksteady Defense, she will cast Strategic Parry',
              'Strategic Parry is automatically cast after Rocksteady Defense lasts for 3s',
              'If Taoqi is attacked when casting Resonance Skill Rocksteady Shield, Strategic Parry is automatically cast',
            ],
          },
          {
            text: 'Attack the target, dealing Havoc DMG.',
            title: 'Strategic Parry',
          },
          {
            text: 'Consumes Stamina to perform a Mid-Air Plunging Attack, dealing Havoc DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG.',
            title: 'Dodge Counter',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Power Shift',
        sections: [
          {
            text: 'When carrying "Resolving Caliber", use Basic Attack after Heavy Attack: Strategic Parry or Intro Skill: Defense Formation to cast Timed Counters, performing up to 3 consecutive attacks, dealing Havoc DMG, considered as Basic Attack damage.\nTimed Counters consume 1 "Resolving Caliber" upon hitting an enemy to grant a shield. After casting the Intro Skill Defense Formation, using Basic Attack can directly cast Timed Counters.',
            title: 'Timed Counters',
          },
          {
            text: 'Taoqi can hold up to 3 Resolving Caliber. Basic Attack IV will consume all of Taoqi\'s Rocksteady Shields to obtain that many "Resolving Caliber". While Rocksteady Shield exists, when the on-field character is attacked, 1 Rocksteady Shield will be consumed, and "Resolving Caliber" is recovered. After Rocksteady Shield ends, all remaining Rocksteady Shield will be consumed to grant that many "Resolving Caliber".',
            title: 'Resolving Caliber',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Violent Finale',
        sections: [
          {
            text: 'Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.',
            title: null,
          },
          {
            text: 'Deals Fusion DMG.',
            title: 'Marcato',
          },
          {
            text: "When the on-field character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. When the on-field character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
            title: 'Burning Rhapsody',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Fortified Defense',
        sections: [
          {
            text: 'Taoqi deals Havoc DMG to surrounding targets, generating 3 Rocksteady Shield and restoring HP to Taoqi. If attacked when casting Fortified Defense, Strategic Parry will be automatically cast.',
            title: null,
          },
          {
            text: 'When the on-field character is attacked, 1 Rocksteady Shield is consumed to reduce the damage taken.',
            title: 'Rocksteady Shield',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Steadfast Protection',
        sections: [
          {
            text: "During the duration of the Resonance Skill Rocksteady Shield, the Character's DEF is increased by 15%.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Unyielding',
        sections: [
          {
            text: 'After Heavy Attack: Strategic Parry is successfully triggered, 25 Stamina is recovered.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 19,
    release_date: '2024-06-06',
    name: 'Yinlin',
    attribute: 'Electro',
    weapon: 'Rectifier',
    character_icon_url: '/character-icons/yinlin/yinlin-icon.webp',
    character_portrait_url: '/character-icons/yinlin/Yinlin_Full_Sprite.png',
    character_card_url: '/character-icons/yinlin/Yinlin_Card.jpg',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Raging Storm',
        sections: [
          {
            text: 'Command puppet "Zapstring" to attack, dealing Electro DMG in a large range.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Strategist',
        sections: [
          {
            text: 'The next character (or other characters on a nearby team that activates an Outro Skill) gains 20% Electro DMG Deepen, and 25% Resonance Liberation DMG Deepen for 14 seconds or until the Character is switched.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Basic Attack: Feather as Blade',
        sections: [
          {
            text: 'Yinlin controls the puppet "Zapstring" to perform up to 4 attacks, dealing Electro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Consumes Stamina to control puppet "Zapstring" to attack, dealing Electro DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Consumes Stamina to control the puppet "Zapstring" to perform a Plunging Attack, dealing Electro DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.',
            title: 'Dodge Counter',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Chameleon Cipher',
        sections: [
          {
            text: 'When Yinlin\'s "Judgment Points" is full, her Heavy Attack is replaced with Chameleon Cipher, which consumes all "Judgment Points" to attack the target, dealing Electro DMG. When it hits a target marked with Sinner\'s Mark, the Sinner\'s Mark is replaced with Punishment Mark, lasting for 18 seconds.',
            title: 'Chameleon Cipher',
          },
          {
            text: "Normal Attack Zapstring's Dance, Resonance Liberation Thundering Wrath, and Intro Skill Roaring Strorm will apply Sinner's Mark on hit. Sinner's Mark is removed when Yinlin exits.",
            title: "Sinner's Mark",
          },
          {
            text: 'When a target marked with Punishment Mark is damaged, Judgement Strike will fall, dealing Electro DMG to all targets marked with Punishment Mark. This can be triggered up to once per second.',
            title: '"Punishment Mark"',
          },
          {
            text: null,
            title: 'Judgment Points',
            bullets: [
              'Yinlin can hold up to 100 Judgement Points.',
              'When Normal Attack Zapstring\'s Dance hits a target, restores "Judgment Points".',
              'Upon casting Resonance Skill Magnetic Roar, restores "Judgment Points".',
              'When Resonance Skill Electromagnetic Blast hits a target, restores "Judgment Points".',
            ],
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Thundering Wrath',
        sections: [
          {
            text: 'Command "Zapstring" to call for thunder to fall upon a large range, dealing Electro DMG.',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Magnetic Roar',
        sections: [
          {
            text: 'The puppet "Zapstring" deals Electro DMG to the target, and puts Yinlin into the Execution Mode.',
            title: 'Magnetic Roar',
          },
          {
            text: 'Basic Attack and Dodge Counter will trigger 1 Electromagnetic Blast when hitting a target. Each stage of Basic Attack or Dodge Counter can only trigger 1 Electromagnetic Blast, up to 4 times.',
            title: 'Execution Mode',
          },
          {
            text: "Attack all targets marked with Resonance Circuit Sinner's Mark, dealing Electro DMG.",
            title: 'Electromagnetic Blast',
          },
          {
            text: 'Use Resonance Skill after casting Resonance Skill Magnetic Roar to cast Lightning Execution to attack the target, dealing Electro DMG. If Resonance Skill Lightning Execution is not activated in a while or this Character is switched, this Skill will be put on Cooldown.',
            title: 'Lightning Execution',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Pain Immersion',
        sections: [
          {
            text: "After using Resonance Skill Magnetic Roar, Yinlin's Crit. Rate is increased by 15% for 5s.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Deadly Focus',
        sections: [
          {
            text: 'The damage of Resonance Skill Lightning Execution is increased by 10% when hitting targets marked with "Sinner\'s Mark", and Yinlin\'s ATK is increased by 10% for 4s when this is triggered.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 23,
    release_date: '2024-09-07',
    name: 'Xiangli Yao',
    attribute: 'Electro',
    weapon: 'Gauntlets',
    character_icon_url: '/character-icons/xiangli_yao/Resonator_Xiangli_Yao.webp',
    character_portrait_url: '/character-icons/xiangli_yao/Xiangli_Yao_Full_Sprite.webp',
    character_card_url: '/character-icons/xiangli_yao/Xiangli_Yao_Card.webp',
    rarity: 5,
    version_released: 1.2,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Principle',
        sections: [
          {
            text: 'Attack the target, dealing Electro DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Chain Rule',
        sections: [
          {
            text: "Xiangli Yao will call down a laser beam upon the first target the incoming Resonator's Basic Attack hits, dealing Electro DMG equal to 237.63% of Xiangli Yao's ATK to an area. This effect lasts for 8s and can be triggered once every 2s, up to 3 times.",
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Probe',
        sections: [
          {
            text: 'Perform up to 5 consecutive attacks, dealing Electro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Perform a charged attack at the cost of STA, dealing Electro DMG.',
            title: 'Heavy Attack',
            bullets: [],
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consume STA to perform a Plunging Attack. Each hit generates 1 Collapsed Core. Quickly Press the Normal Attack Button after the Plunging Attack to perform Basic Attack Stage 2.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Forever Seeking',
        sections: [
          {
            text: 'When Capacity reaches 100, Resonance Skill Deduction is replaced with Resonance Skill Decipher. Consume 100 Capacity to cast Resonance Skill Decipher, dealing Electro DMG, considered as Resonance Liberation DMG.',
            title: 'Resonance Skill - Decipher',
            bullets: [],
          },
          {
            text: 'When in Intuition triggered by Resonance Liberation and Performance Capacity reaches 5, Resonance Skill Divergence is replaced with Resonance Skill Law of Reigns. \nConsume 5 Performance Capacity to cast Resonance Skill Law of Reigns, dealing Electro DMG, considered as Resonance Liberation DMG.',
            title: 'Resonance Skill - Law of Reigns',
            bullets: [],
          },
          {
            text: 'Shortly after casting Resonance Skill Decipher or Resonance Skill Divergence, use Basic Attack to perform Mid-air Attack Revamp at the cost of STA, dealing Electro DMG, considered as Resonance Liberation DMG.',
            title: 'Mid-air Attack - Revamp',
            bullets: [],
          },
          {
            text: 'Xiangli Yao can hold up to 100 Capacity.\nEvery Normal Attack Probe on hit grants Capacity.\nEvery Resonance Skill Deduction on hit grants Capacity.',
            title: 'Capacity',
            bullets: [],
          },
          {
            text: 'Xiangli Yao can hold up to 5 Performance Capacity.\nWhen in Intuition triggered by Resonance Liberation:',
            title: 'Performance Capacity',
            bullets: [
              'Obtain 1 Performance Capacity when Stage 1 of Basic Attack Pivot - Impale hits a target.',
              'Obtain 2 Performance Capacity when Stage 2 or 3 of Basic Attack Pivot - Impale hits a target.',
              'Obtain 2 Performance Capacity for every Resonance Skill Divergence on hit.',
              'Obtain 3 Performance Capacity for every Mid-air Attack Revamp on hit.',
              'Obtain 2 Performance Capacity for every Dodge Counter Unfathomed on hit.',
            ],
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Cogitation Model',
        sections: [
          {
            text: 'Attack the target, dealing Electro DMG. Enter Intuition.',
            title: null,
            bullets: [],
          },
          {
            text: 'When in Intuition:',
            title: null,
            bullets: [
              'Obtain 3 Hypercube(s). Each time Resonance Skill Law of Reigns is cast, consume 1 Hypercube(s). Intuition ends once all Hypercubes are consumed.',
              'Basic Attack and Heavy Attack are replaced with Basic Attack Pivot - Impale, which performs up to 3 consecutive attacks, dealing Electro DMG.',
              'Resonance Skill Deduction is replaced with Resonance Skill Divergence, which deals Electro DMG.',
              'Dodge Counter is replaced with Dodge Counter Unfathomed, considered as Resonance Liberation DMG.',
            ],
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Deduction',
        sections: [
          {
            text: 'Attack the target, dealing Electro DMG.',
            title: null,
            bullets: [],
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Knowing',
        sections: [
          {
            text: 'Gain 5% Electro DMG Bonus after casting Resonance Skill for 8s, stackable for up to 4 times.',
            title: null,
            bullets: [],
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Focus',
        sections: [
          {
            text: "When in Intuition triggered by Resonance Liberation, Xiangli Yao's resistance to interruption is enhanced.",
            title: null,
            bullets: [],
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unending Destruction',
        talent_material_set: 'Cadence',
      },
      ascension_materials: {
        boss_material: 'Hidden Thunder Tacet Core',
        regional_specialty: 'Violet Coral',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 22,
    release_date: '2024-09-29',
    name: 'Shorekeeper',
    attribute: 'Spectro',
    weapon: 'Rectifier',
    character_icon_url: '/character-icons/shorekeeper/Resonator_Shorekeeper.webp',
    character_portrait_url: '/character-icons/shorekeeper/Shorekeeper_Full_Sprite.webp',
    character_card_url: '/character-icons/shorekeeper/Shorekeeper_Card.webp',
    rarity: 5,
    version_released: 1.3,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Proof of Existence',
        sections: [
          {
            text: 'Shorekeeper appears to restore HP for all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. This is considered Resonance Skill DMG.',
            title: 'Enlightenment',
          },
          {
            text: "Shorekeeper appears to restore HP for all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. This is considered Resonance Skill DMGWhen a Supernal Stellarealm is generated, Shorekeeper's first Intro Skill triggered in its duration will be replaced with Intro Skill Discernment. Casting Discernment ends the current Stellarealm, restores HP for all nearby party members, and deals Spectro DMG to the targets. This attack is guaranteed to be a Critical Hit dealing Resonance Liberation DMG. The Intro Skill Discernment can only be cast one time for each Supernal Stellarealm generated.",
            title: 'Discernment',
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Binary Butterfly',
        sections: [
          {
            text: 'Shorekeeper summons 1 Flare Star Butterfly and 1 Dim Star Butterfly to circle the Resonator on the field for up to 30s, granting the following effects:',
            title: null,
            bullets: [
              'If the Resonator on the field is hit or launched, tapping the Dodge Button allows the Resonator to immediately recover from the interruption, triggering a successful Dodge. The Resonator launched in the air can land on the ground standing if they are close to the ground. This effect can be triggered up to 5 time(s).',
              "All nearby party members' DMG is Amplified by 15%.",
            ],
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Origin Calculus',
        sections: [
          {
            text: 'Perform up to 4 consecutive attacks, dealing Spectro DMG. Each hit generates 1 Collapsed Core.',
            title: 'Basic Attack',
          },
          {
            text: 'Hold the Normal Attack Button to enter Unbound Form, which consumes STA continuously. While in this form, Shorekeeper will:',
            title: 'Heavy Attack',
            bullets: [
              'Generate a segment of Deductive Data every second.',
              'Automatically collect nearby plant collectibles.',
              'Using up all STA or actions such as casting Basic Attack will end the Unbound Form and deal Spectro DMG to the target. Each accumulated segment of Deductive Data will convert into a segment of Empirical Data and generate a Collapsed Core.',
            ],
          },
          {
            text: 'Press the Normal Attack Button after a successful Dodge to attack a target, dealing Spectro DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Consume STA to perform a Plunging Attack. Each hit generates 1 Collapsed Core. Quickly Press the Normal Attack Button after the Plunging Attack to perform Basic Attack Stage 2.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Astral Chord HEREEEE',
        sections: [
          {
            text: 'Obtain 1 segment of Empirical Data when Dodge Counter hits a target.',
            title: null,
            bullets: [],
          },
          {
            text: 'When Shorekeeper has 5 segments of Empirical Data, casting Heavy Attack will consume all segments to pull in nearby targets, dealing Spectro DMG. Meanwhile, all generated Collapsed Cores will instantly transform into Flare Star Butterflies.',
            title: 'Illation',
            bullets: [],
          },
          {
            text: 'When Shorekeeper has 5 segments of Empirical Data, casting Mid-air Attack will consume all segments to deal Spectro DMG. Meanwhile, all generated Collapsed Cores will instantly transform into Flare Star Butterflies. Quickly press the Normal Attack Button afterward to perform Basic Attack Stage 2.',
            title: 'Transmutation',
            bullets: [],
          },
          {
            text: 'Shorekeeper can hold up to 5 segments of Empirical Data.',
            title: 'Empirical Data',
            bullets: [],
          },
          {
            text: "Hitting a target with a Normal Attack generates a Collapsed Core, which transforms into a Flare Star Butterfly after 6s. Flare Star Butterflies automatically track and attack a target, dealing Spectro DMG. If there are already 5 Collapsed Cores, Shorekeeper's next Normal Attack hit will instantly convert a Collapsed Core into a Flare Star Butterfly.",
            title: 'Flare Star Butterfly',
            bullets: [],
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: End Loop',
        sections: [
          {
            text: "When a party member uses Intro Skill within the Outer Stellarealm, it evolves into the Inner Stellarealm. Within the effective range of the Inner Stellarealm, for every 0.2% of Shorekeeper's Energy Regen, all party members gain 0.01% bonus Crit. Rate, up to 12.5%. Inner Stellarealm has all the effects of the Outer Stellarealm.",
            title: 'Inner Stellarealm',
            bullets: [],
          },
          {
            text: "When a party member uses Intro Skill within the Inner Stellarealm, it evolves into the Supernal Stellarealm. Within the effective range of the Supernal Stellarealm, for every 0.1% of Shorekeeper's Energy Regen, all party members gain a 0.01% increase of Crit. DMG, up to 25%.",
            title: 'Supernal Stellarealm',
            bullets: [],
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Chaos Theory',
        sections: [
          {
            text: 'Restore HP for all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. Follow up with Basic Attack in time to start the Basic Attack cycle from Stage 2.',
            title: null,
            bullets: [],
          },
          {
            text: 'Can be performed in mid-air.',
            title: null,
            bullets: [],
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Life Entwined',
        sections: [
          {
            text: "When a Resonator other than Shorekeeper takes a fatal blow, they will not be knocked out and will instead be healed for 50% of Shorekeeper's HP while Shorekeeper loses the same amount of HP. Shorekeeper's HP will not go below 1 from this effect. This effect can be triggered once every 10 minutes.",
            title: null,
            bullets: [],
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Self Gravitation',
        sections: [
          {
            text: "When the Resonator on the field is within the effective range of a Stellarealm, Shorekeeper's Energy Regen increases by 10%. If Rover is on the same team, Rover's Energy Regen also increases by 10%.",
            title: null,
            bullets: [],
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: "Sentinel's Dagger",
        talent_material_set: 'Helix',
      },
      ascension_materials: {
        boss_material: 'Topological Confinement',
        regional_specialty: 'Nova',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 17,
    release_date: '2024-05-23',
    name: 'Verina',
    attribute: 'Spectro',
    weapon: 'Rectifier',
    character_icon_url: '/character-icons/verina/verina-icon.webp',
    character_portrait_url: '/character-icons/verina/Verina_Full_Sprite.png',
    character_card_url: '/character-icons/verina/Verina_Card.jpg',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Verdant Growth',
        sections: [
          {
            text: 'Verina attacks the target, dealing Spectro DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Blossom',
        sections: [
          {
            text: 'Verina recovers HP to The next character (or other characters on a nearby team that activates an Outro Skill) equal to 19% of her ATK per second for 6s. All Characters on nearby teams gain 15% all-Type DMG Deepen for 30s.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Basic Attack: Cultivation',
        sections: [
          {
            text: 'Verina performs up to 5 consecutive attacks with vines, dealing Spectro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Verina consumes Stamina to charge forward, dealing Spectro DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Verina consumes Stamina to perform up to 3 consecutive attacks in mid-air, dealing Spectro DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Hold Basic Attack to consume Stamina and perform mid-air Plunging Attack, dealing Spectro DMG.',
            title: 'Mid-air Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge, to attack the target, dealing Spectro DMG.',
            title: 'Dodge Counter',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Starflower Blooms',
        sections: [
          {
            text: 'When casting Heavy Attack, if Verina carries "Photosynthesis Energy", Verina consumes 1 stack of "Photosynthesis Energy" to recover Concerto Energy and restore HP for all party members nearby; Heavy Attack: Starflower Blooms deals Spectro DMG, considered as Heavy Attack damage.',
            title: 'Heavy Attack: Starflower Blooms',
          },
          {
            text: 'When casting Mid-air Attack, if Verina carries "Photosynthesis Energy", Verina consumes 1 stack of "Photosynthesis Energy" to recover Concerto Energy and restore HP for all party members nearby; Mid-air Attack: Starflower Blooms deals Spectro DMG, considered as Basic Attack damage. Verina can cast Mid-air Attack: Starflower Blooms by using Basic Attack after casting Heavy Attack: Starflower Blooms.',
            title: 'Mid-air Attack: Starflower Blooms',
          },
          {
            text: 'Verina can hold up to 4 "Photosynthesis Energy". Verina obtains 1 stack of "Photosynthesis Energy" for every Basic Attack V on hit; Verina obtains 1 stack of "Photosynthesis Energy" for every Resonance Skill Botany Experiment on hit; Verina obtains 1 stack of "Photosynthesis Energy" for every Intro Skill Verdant Growth on hit.',
            title: 'Photosynthesis Energy',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Arboreal Flourish',
        sections: [
          {
            text: 'Verina nourishes nearby foliage at rapid speed, dealing Spectro DMG while restoring HP to all team members nearby. A Photosynthesis Mark is applied to the target on hit',
            title: null,
          },
          {
            text: 'Whenever a team member nearby performs an attack on targets with a Photosynthesis Mark, Verina performs a Coordinated Attack, dealing Spectro DMG while restoring HP to the party members dealing damage, triggered once per second.',
            title: 'Photosynthesis Mark',
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Botany Experiment',
        sections: [
          {
            text: 'Verina converges an energy field in front to grow foliage, dealing Spectro DMG within the range.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Grace of Life',
        sections: [
          {
            text: "Verina protects a party member from fatal damage and grants a shield with strength equal to 120% of Verina's ATK, lasting for 10s. This can be triggered once every 10 minutes.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Gift of Nature',
        sections: [
          {
            text: 'When Verina casts Heavy Attack Starflower Blooms, Mid-air Attack Starflower Blooms, Resonance Liberation Arboreal Flourish or Outro Skill Blossom, ATK for all party members is increased by 20% for 20s.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 18,
    release_date: '2024-05-23',
    name: 'Yangyang',
    attribute: 'Aero',
    weapon: 'Sword',
    character_icon_url: '/character-icons/yangyang/yangyang-icon.webp',
    character_portrait_url: '/character-icons/yangyang/Yangyang_Full_Body_Sprite.png',
    character_card_url: '/character-icons/yangyang/Yangyang_Card.jpg',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Cerulean Song',
        sections: [
          {
            text: 'Yangyang sends the target into the air, dealing Aero DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Whispering Breeze',
        sections: [
          {
            text: 'Recovers 4 Resonance Energy per second in 5s for the next character (or other characters on a nearby team that activates an Outro Skill).',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Basic Attack: Feather as Blade',
        sections: [
          {
            text: 'Yangayang performs up to 4 consecutive attacks, dealing Aero DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Yangyang consumes Stamina to lunge forward, dealing Aero DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use a Basic Attack after Heavy Attack or Dodge Counter to cast Heave Attack Monsoon to attack the target, dealing Aero DMG.',
            title: 'Heavy Attack: Zephyr Song',
          },
          {
            text: 'Yangyang consumes Stamina to perform a Plunging Attack from mid-air, dealing Aero DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to thrust forward, dealing Aero DMG.',
            title: 'Dodge Counter',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Echoing Feathers',
        sections: [
          {
            text: 'When Yangyang has 3 Melodies, she can cast Stormy Strike after Heavy Attack, dealing Aero DMG.',
            title: 'Heavy Attack: Stormy Strike',
          },
          {
            text: 'When Yangyang has 3 Melodies, casting Basic Attacks in mid-air will cause her to consume all Melodies, perform consecutive strikes, and dive from mid-air, dealing Aero DMG. As Yangyang lands, she sheathes her sword with an attack, dealing Aero DMG. This attack is considered as Basic Attack.',
            title: 'Mid-air Attack: Feather Release',
          },
          {
            text: 'Yangyang can hold up to 3 Melodies Yangyang obtains 1 Melody with every Basic Attack IV on hit. Yangyang obtains 1 Melody for every Zephyr Song on hit. Yangyang obtains 1 Melody for every Resonance Skill Zephyr Domain on hit. Yangyang obtains 1 Melody upon casting Intro Skill Cerulean Song.',
            title: 'Melody',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Wind Spirals',
        sections: [
          {
            text: 'Yangyang conjures a mighty Cyclone that gathers nearby enemies, dealing Aero DMG.',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Zephyr Domain',
        sections: [
          {
            text: 'Yangyang wields her sword to create a whirling vortex of winds that gathers nearby enemies to the center, dealing Aero DMG.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Compassion',
        sections: [
          {
            text: 'Yangyang recovers 30 Stamina after she casts a Mid-air Attack Feather Release.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Lazuline Mercy',
        sections: [
          {
            text: "Yangyang's Aero DMG Bonus is increased by 8% for 8s after casting Intro Skill Cerulean Song.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 20,
    release_date: '2024-05-23',
    name: 'Yuanwu',
    attribute: 'Electro',
    weapon: 'Gauntlets',
    character_icon_url: '/character-icons/yuanwu/yuanwu-icon.webp',
    character_portrait_url: '/character-icons/yuanwu/Yuanwu_Illustration.png',
    character_card_url: '/character-icons/yuanwu/Yuanwu_Card.jpg',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Thunder Bombardment',
        sections: [
          {
            text: 'Attack the target, dealing Electro DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Lightning Manipulation',
        sections: [
          {
            text: 'Yuanwu summons thunderbolts on a field centered on the skill target, dealing significant Vibration Strength depletion to the enemies hit.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Basic Attack: Leihuangquan',
        sections: [
          {
            text: 'Perform up to 5 continuous attacks, dealing Electro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Consume Stamina to attack the target, dealing Electro DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Consume Stamina to launch a Plunging Attack, dealing Electro DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.',
            title: 'Dodge Counter',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Unassuming Blade',
        sections: [
          {
            text: 'When "Readiness" is full, long press Resonance Skill to consume all "Readiness" and cast Rumbling Spark, dealing Electro DMG and entering the Lightning Infused state.',
            title: 'Rumbling Spark',
          },
          {
            text: 'When you have full "Readiness", Resonance Skill Thunder Wedge will cast Thunder Uprising, dealing Electro DMG.',
            title: 'Thunder Uprising',
          },
          {
            text: 'The character in Lightning Infused state has a greatly increased anti-interruption. When Yuanwu is in this state:',
            title: 'Lightning Infused',
            bullets: [
              'Basic Attacks: Hits targets in a larger range, depletes enemy Vibration Strength faster.',
              'Heavy Attacks: Attack speed is increased, deplete enemy Vibration Strength faster.',
              'Dodge Counters: Attack speed is increased, deplete enemy Vibration Strength faster.',
              'Use Basic Attack within 3s after casting a Heavy Attack or a successful Counterattack to cast Thunderweaver, dealing Electro DMG, considered as Basic Attack damage',
            ],
          },
          {
            text: 'Yuanwu can hold up to 100 "Readiness".\nWhen Resonance Skill Thunder Wedge is on the field, Yuanwu gains 6 "Readiness" every second, even when he is not the on-field character; When Resonance Skill Thunder Wedge hits a target with a Coordinated Attack, Yuanwu gains 5 "Readiness".',
            title: 'Edge',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Blazing Might',
        sections: [
          {
            text: 'Awaken the power of thunder and provide Forte Circuit Lightning Infused status for all nearby characters for 10s, granting them increased Anti-interruption, then perform a powerful blow that deals Electro DMG',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Leihuang Master',
        sections: [
          {
            text: 'Yuanwu summons Thunder Wedge, dealing Electro DMG, and forms a Thunder Field centered on the Thunder Wedge. Thunder Wedge lasts for 12s.\nForte Circuit Rumbling Spark and Resonance Liberation Blazing Might will immediately detonate Resonance Skill Thunder Wedge on the field, dealing Electro DMG, considered as Resonance Skill Damage.',
            title: 'Thunder Wedge',
          },
          {
            text: 'The on-field character gains the effects below when in the Thunder Field: a Coordinated Attack from Resonance Skill Thunder Wedge is triggered when attacks hit a target, dealing Electro DMG. This can be triggered once every 1.2s. The effect lasts for 1.5s.',
            title: 'Thunder Field',
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Thunderweaver',
        sections: [
          {
            text: 'The damage multiplier of Resonance Skill Thunder Uprising is increased by 40%, and its depletion of enemy Vibration Strength is enhanced.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Reserved Confidence',
        sections: [
          {
            text: 'The ranges of the Resonance Skill Thunder Field and Thunder Uprising are greatly expanded. When exiting during combat, if Readiness is not full, Yuanwu will automatically leave 1 Resonance Skill Thunder Wedge in place.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 21,
    release_date: '2024-08-15',
    name: 'Zhezhi',
    attribute: 'Glacio',
    weapon: 'Rectifier',
    character_icon_url: '/character-icons/zhezhi/Resonator_Zhezhi.webp',
    character_portrait_url: '/character-icons/zhezhi/Zhezhi_Full_Sprite.webp',
    character_card_url: '/character-icons/zhezhi/Zhezhi_Card.webp',
    rarity: 5,
    version_released: 1.2,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Radiant Ruin',
        sections: [
          {
            text: 'Attack the target, dealing Glacio DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Carve and Draw',
        sections: [
          {
            text: 'The incoming Resonator has their Glacio DMG Amplified by 20% and Resonance Skill DMG Amplified by 25% for 14s or until they are switched out.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Basic Attack: Dimming Brush',
        sections: [
          {
            text: 'Perform up to 3 consecutive attacks, dealing Glacio DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Consume STA to perform an attack, dealing Glacio DMG.\nHeavy Attack does not reset the Basic Attack cycle.',
            title: 'Heavy Attack',
          },
          {
            text: 'Consume STA to perform up to 2 consecutive attacks while in mid-air, dealing Glacio DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG.',
            title: 'Dodge Counter',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Ink and Wash',
        sections: [
          {
            text: 'Zhezhi may summon Phantasmic Imprints at the cost of Afflatus when casting Resonance Skill Manifestation or Heavy Attack Conjuration.\nUp to 1 of each of Phantasmic Imprint - Left, Phantasmic Imprint - Middle, and Phantasmic Imprint - Right can exist at the same time, each lasting for 15s.',
            title: 'Phantasmic Imprint',
          },
          {
            text: 'The 5 moves below consume STA to perform Conjuration to attack the target, dealing Glacio DMG.',
            title: 'Heavy Attack: Conjuration',
            bullets: [
              'Hold the Normal Attack button shortly after Basic Attack Stage 3.',
              'Press the Normal Attack button shortly after casting Resonance Skill Manifestation.',
              "Hold the Normal Attack button shortly after casting Resonance Skill Stroke of Genius or Resonance Skill Creation's Zenith.",
              'Hold the Normal Attack button while in mid-air.',
              'Hold the Normal Attack button after a successful Dodge.',
            ],
          },
          {
            text: 'If Zhezhi has at least 30 Afflatus when performing any of these, consume 30 Afflatus to summon a Phantasmic Imprint - Middle.',
            title: null,
          },
          {
            text: 'When a Phatasmic Imprint is nearby, the Resonance Skill is replaced with Stroke of Genius, which can be cast while in mid-air. When it is cast, Zhezhi will:',
            title: 'Resonance Skill: Stroke of Genius',
            bullets: [
              'Move to the location of the Phatasmic Imprint, remove it, and then summon an Ivory Herald to attack the target, dealing Glacio DMG, considered as Basic Attack DMG. Refresh the mid-air Dodge attempts if the target Phatasmic Imprint is in mid-air.',
              "Gain 1 stack of Painter's Delight, lasting for 8s and stacking up to 2 times.",
            ],
          },
          {
            text: "When a Phantasmic Imprint is nearby and there are 2 stacks of Painter's Delight, Stroke of Genius is replaced with Creation's Zenith, which can be cast while in mid-air. When it is cast, Zhezhi will:",
            title: "Resonance Skill: Creation's Zenith",
            bullets: [
              "Lose all stacks of Painter's Delight",
              'Move to the location of the Phantasmic Imprint, remove it, and then summon an Ivory Herald to attack the target, dealing greater Glacio DMG, considered as Basic Attack DMG, additionally increasing the Basic Attack DMG Bonus by 18% for 27s. Refresh the mid-air Dodge attempts if the target Phatasmic Imprint is in mid-air.',
            ],
          },
          {
            text: null,
            title: null,
            bullets: [
              'Zhezhi can hold up to 90 Afflatus.',
              'Normal Attacks grant Afflatus on hit.',
              'Casting Intro Skill grants Afflatus.',
            ],
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Living Canvas',
        sections: [
          {
            text: 'Summon Inklit Spirits for assistance.\nCan be cast in mid-air.',
            title: null,
          },
          {
            text: 'When the active Resonator deals DMG, an Inklit Spirit will be summoned to perform a Coordinated Attack, dealing Glacio DMG, considered as Basic Attack DMG.',
            title: 'Inklit Spirit',
            bullets: [
              'For 3s after dealing DMG, 1 Inklit Spirit is summoned per second. This effect can trigger once per second. Damage dealt by an Inklit Spirit does not trigger this effect.',
              'Up to 1 Inklit Spirit can be summoned every second, and up to 21 in total.',
              'This effect lasts for 30s, or until max Inklit Spirits are summoned.',
            ],
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Manifestation',
        sections: [
          {
            text: 'Deal Glacio DMG. If Afflatus is no less than 60, consume 60 Afflatus to summon Phantasmic Imprint - Left and Phantasmic Imprint - Right.',
            title: null,
            bullets: [
              'Press the button on the ground to summon the Phantasmic Imprints on the ground.',
              'Hold the button on the ground or press the button in mid-air to summon the Phantasmic Imprints in mid-air.',
            ],
          },
        ],
      },
      inherent_skill_1: {
        name: "Inherent Skill: Calligrapher's Touch",
        sections: [
          {
            text: "When casting Resonance Skill Stroke of Genius or Resonance Skill Creation's Zenith, ATK is increased by 6% for 27s. This can be stacked up to 3 time(s).",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Flourish',
        sections: [
          {
            text: 'After Outro Skill is cast, restore 15 Resonance Energy for the incoming Resonator.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Coriolus',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 5,
    release_date: '2024-05-23',
    name: 'Chixia',
    attribute: 'Fusion',
    weapon: 'Pistols',
    character_icon_url: '/character-icons/chixia/chixia-icon.webp',
    character_portrait_url: '/character-icons/chixia/Chixia_Full_Sprite.png',
    character_card_url: '/character-icons/chixia/Chixia_Card.png',
    rarity: 4,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Grand Entrance',
        sections: [
          {
            text: 'Chixia makes a heroic entrance and fires rapidly with her dual pistols at the target, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Leaping Flames',
        sections: [
          {
            text: "Chixia releases a shock wave surrounding the target, dealing Fusion DMG equal to 530.00% of Chixia's ATK to enemies within the range.",
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: POW POW',
        sections: [
          {
            text: 'Chixia fires up to 4 consecutive shots at a single target, dealing Fusion DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Chixia enters the aiming state for a more powerful shot. The shot fired deals Fusion DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use a Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Chixia consumes Stamina to continuously shoot the target in the air, dealing Fusion DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Heroic Bullets',
        sections: [
          {
            text: 'Chixia can hold up to 60 "Thermobaric Bullets". Innate Skill Scorching Magazine increases Max "Thermobaric Bullets" by 10. Chixia obtains "Thermobaric Bullets" for every Normal Attack POW POW on hit. Chixia obtains "Thermobaric Bullets" upon casting Intro Skill Grand Entrance and Resonance Skill Whizzing Fight Spirit.',
            title: 'Thermobaric Bullets',
          },
          {
            text: 'Chixia deals Fusion DMG, considered as Resonance Skill damage.',
            title: 'Resonance Skill: Boom Boom',
          },
          {
            text: 'Hold Resonance Skill Whizzing Fight Spirit to enter DAKA DAKA!. In this state:\n- Chixia continuously consumes "Thermobaric Bullets" to attack the target, dealing Fusion DMG, considered as Resonance Skill damage.\n- Tap Basic Attack to cast Basic Attack IV, dealing Fusion DMG, considered as Basic Attack damage. Then she terminates "DAKA DAKA!".\n- If 30 "Thermobaric Bullets" have been fired when Basic Attackis activated, Chixia will cast Resonance Skill Boom Boom and terminate "DAKA DAKA!" Chixia terminates "DAKA DAKA!" when all "Thermobaric Bullets" are consumed.',
            title: 'Resonance Skill: DAKA DAKA!',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Blazing Flames',
        sections: [
          {
            text: 'Chixia fires up fast shots at nearby enemies, dealing Fusion DMG.',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Whizzing Fight Spirit',
        sections: [
          {
            text: 'Chixia unleashes a flurry of shots, dealing Fusion DMG. Whizzing Fight Spirit has 2 initial charges.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Scorching Magazine',
        sections: [
          {
            text: 'Max "Thermobaric Bullets" is increased by 10 rounds. The damage for Resonance Skill Boom Boom is increased by 50%.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Numbingly Spicy!',
        sections: [
          {
            text: 'Each "Thermobaric Bullets" that hits a target during Resonance Skill DAKA DAKA! increases ATK by 1% for 10s, stacking up to 30 times.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Monument Bell',
        talent_material_set: 'Phlogiston',
      },
      ascension_materials: {
        boss_material: 'Rage Tacet Core',
        regional_specialty: 'Belle Poppy',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 13,
    release_date: '2024-05-23',
    name: 'Rover (Havoc)',
    attribute: 'Havoc',
    weapon: 'Sword',
    character_icon_url: '/character-icons/rover/Resonator_Rover.webp',
    character_portrait_url: '/character-icons/rover/Female_Rover_Model.webp',
    character_card_url: '',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Instant of Annihilation',
        sections: [
          {
            text: 'Attack the target, dealing Havoc DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Soundweaver',
        sections: [
          {
            text: 'Summons a Havoc Field to attack a target, dealing 143.3% Havoc DMG to targets within range every 2s for 6s.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Tuneslayer',
        sections: [
          {
            text: 'Rover-Havoc performs up to 5 consecutive attacks, dealing Havoc DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Rover-Havoc consumes Stamina to attack, dealing Havoc DMG. Use Basic Attack after casting Heavy Attack to cast Basic Attack IV.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Rover-Havoc consumes Stamina to cast a Mid-Air Plunging Attack, dealing Havoc DMG.',
            title: 'Mid-air Attack',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: Umbra Eclipse',
        sections: [
          {
            text: 'Rover can hold up to 100 points of Umbra.\nNormal Attack Tuneslayer recovers Umbra on hit. Resonance Skill Wingblade recovers Umbra when cast. Resonance Skill Lifetaker recovers Umbra when cast. Intro Skill Instant of Annihilation recovers Umbra when cast.',
            title: 'Umbra',
          },
          {
            text: 'After casting Devastation, Rover enters the Dark Surge state. In this state: Basic Attack is replaced with Enhanced Basic Attack, which performs up to 5 consecutive attacks, dealing Havoc DMG.\n- Heavy Attack is replaced with Enhanced Heavy Attack.\n- Use Basic Attack after casting Enhanced Heavy Attack to cast Heavy Attack Thwackblade to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.\n- Use Basic Attack after casting Heavy Attack Thwackblade to cast Enhanced Basic Attack 3 to attack the target, dealing Havoc DMG.\n- Resonance Skill Wingblade is replaced with Resonance Skill Lifetaker, transforming sounds into blades to attack the target, dealing Havoc DMG.',
            title: 'Dark Surge',
          },
          {
            text: 'When "Umbra" is full, hold Basic Attack to cast Devastation to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.',
            title: 'Devastation',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Deadening Abyss',
        sections: [
          {
            text: "Gather the echoes between Rover's palms to attack a target, dealing Havoc DMG.",
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Wingblade',
        sections: [
          {
            text: 'Transforms sound into feathers, dealing Havoc DMG.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Metamorph',
        sections: [
          {
            text: 'In the Dark Surge state, Havoc DMG Bonus is increased by 20%.',
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Bleak Crescendo',
        sections: [
          {
            text: 'While in the Dark Surge state, Basic Attack recovers 1 Resonance Energy when it hits a target, and this effect can be triggered once per second.',
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unwarranted Feather',
        talent_material_set: 'Metallic',
      },
      ascension_materials: {
        boss_material: 'Mysterious Code',
        regional_specialty: 'Pecok Flower',
        ascension_material_set: 'Whisperin',
      },
    },
  },
  {
    id: 14,
    release_date: '2024-05-23',
    name: 'Rover (Spectro)',
    attribute: 'Spectro',
    weapon: 'Sword',
    character_icon_url: '/character-icons/rover/Resonator_Rover.webp',
    character_portrait_url: '/character-icons/rover/Male_Rover_Model.webp',
    character_card_url: '',
    rarity: 5,
    version_released: 1,
    talent_description: {
      intro_skill: {
        name: 'Intro Skill: Waveshock',
        sections: [
          {
            text: 'Rover attacks the target, dealing Spectro DMG.',
            title: null,
          },
        ],
      },
      outro_skill: {
        name: 'Outro Skill: Instant',
        sections: [
          {
            text: 'Rover generates an area of stasis surrounding the next character (or other characters on a nearby team that activates an Outro Skill) over 3s.',
            title: null,
          },
        ],
      },
      basic_attack: {
        name: 'Normal Attack: Vibration Manifestation',
        sections: [
          {
            text: 'Rover casts up to 4 consecutive attacks, dealing Spectro DMG.',
            title: 'Basic Attack',
          },
          {
            text: 'Rover consumes Stamina, dealing Spectro DMG.',
            title: 'Heavy Attack',
          },
          {
            text: 'Use Basic Attack after a successful Dodge to attack the target, dealing Spectro DMG.',
            title: 'Dodge Counter',
          },
          {
            text: 'Rover consumes Stamina to perform a Mid-Air Plunging Attack, dealing Spectro DMG.',
            title: 'Mid-air Attack',
          },
          {
            text: 'After Heavy Attack Resonance or Dodge Counter hits a target, press the Basic Attack button to perform Heavy Attack Aftertune, dealing Spectro DMG.',
            title: 'Heavy Attack: Aftertune',
          },
          {
            text: 'After Basic Attack III or Heavy Attack, press the Basic Attack button at the right time to perform Heavy Attack Resonance, dealing Spectro DMG.',
            title: 'Heavy Attack: Resonance',
          },
        ],
      },
      forte_circuit: {
        name: 'Forte Circuit: World in a Grain of Sand',
        sections: [
          {
            text: 'Shimmer prevents Spectro Frazzle stacks from reducing over time.',
            title: 'Shimmer',
          },
          {
            text: 'Rover can hold up to 100 "Diminutive Sounds". Rover obtains "Diminutive Sound" for every Normal Attack Vibration Manifestation on hit. Rover obtains "Diminutive Sound" for every Heavy Attack aftertune on hit. Rover obtains "Diminutive Sound" upon casting Intro Skill Waveshock.',
            title: 'Diminutive Sound',
          },
          {
            text: 'If "Diminutive Sound" exceeds 50 when Resonance Skill is used, Rover consumes 50 "Diminutive Sound" to cast Resonating Spin, dealing Spectro DMG. This damage is considered as Resonance Skill DMG and applies 2 stack(s) of Spectro Frazzle along with Shimmer.',
            title: 'Resonance Skill: Resonating Spin',
          },
          {
            text: 'After Resonance Skill Resonating Spin ends, Rover performs Resonance Skill Resonating Echoes upon pressing the Basic Attack button. Rover performs attacks forward, dealing Spectro DMG considered as Resonance Skill DMG.',
            title: 'Resonance Skill: Resonating Echoes',
          },
        ],
      },
      resonance_lib: {
        name: 'Resonance Liberation: Echoing Orchestra',
        sections: [
          {
            text: 'Channel Spectro energy to attack the target area, causing a blast after a short delay, dealing Spectro DMG and applying 6 stack(s) of Spectro Frazzle.',
            title: null,
          },
        ],
      },
      resonance_skill: {
        name: 'Resonance Skill: Resonating Slashes',
        sections: [
          {
            text: 'Rover launches an attack forward, dealing Spectro DMG.',
            title: null,
          },
        ],
      },
      inherent_skill_1: {
        name: 'Inherent Skill: Reticence',
        sections: [
          {
            text: "Damage dealt by Rover's Resonance Skill Resonating Echoes is increased by 60%.",
            title: null,
          },
        ],
      },
      inherent_skill_2: {
        name: 'Inherent Skill: Silent Listener',
        sections: [
          {
            text: "Rover's ATK is increased by 15% for 5s upon casting Heavy Attack Resonance.",
            title: null,
          },
        ],
      },
    },
    ascension_materials: {
      talent_materials: {
        weekly_boss: 'Unending Destruction',
        talent_material_set: 'Metallic',
      },
      ascension_materials: {
        boss_material: 'Mysterious Code',
        regional_specialty: 'Pecok Flower',
        ascension_material_set: 'Whisperin',
      },
    },
  },
]
