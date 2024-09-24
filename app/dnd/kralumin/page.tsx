import Image from 'next/image'
import './page.css'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import Slots from './slots'
import HPCounter from './hp'
import BardicInspiration from './bardicInpiration'
import GenericStats from './genericStats'

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'

type AbilityValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30

interface AbilityEntry {
    name: Ability
    proficiency: boolean
    baseValue: AbilityValue
    fullName: string
}

interface Skill {
    name: string
    base: Ability
    proficiency: 'Class' | 'Race' | 'Background' | 'none'
    proficiencyShort: 'C' | 'R' | 'B' | 'N'
    value: number
    expertise: boolean
}

type Dice = "0" | "1d4" | "1d6" | "1d8" | "1d10" | "1d12" | "1d20" | "1d100" | "2d4" | "2d6" | "2d8" | "2d10" | "2d12" | "2d20" | "2d100" | "3d4" | "3d6" | "3d8" | "3d10" | "3d12" | "3d20" | "3d100" | "4d4" | "4d6" | "4d8" | "4d10" | "4d12" | "4d20" | "4d100" | "5d4" | "5d6" | "5d8" | "5d10" | "5d12" | "5d20" | "5d100" | "6d4" | "6d6" | "6d8" | "6d10" | "6d12" | "6d20" | "6d100" | "7d4" | "7d6" | "7d8" | "7d10" | "7d12" | "7d20" | "7d100" | "8d4" | "8d6" | "8d8" | "8d10" | "8d12" | "8d20" | "8d100" | "9d4" | "9d6" | "9d8" | "9d10" | "9d12" | "9d20" | "9d100" | "10d4" | "10d6" | "10d8" | "10d10" | "10d12" | "10d20" | "10d100" | "11d4" | "11d6" | "11d8" | "11d10" | "11d12" | "11d20" | "11d100" | "12d4" | "12d6" | "12d8" | "12d10" | "12d12" | "12d20" | "12d100"

type SpellLevels = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

interface Spell {
    spellName: string
    source: string
    description: string
    dice: Record<SpellLevels, Dice> | "none"
    duration: string
    components: {
        v: boolean,
        s: boolean
        c: boolean | string
    },
    range: number
    rangeType: string
    castingTime: "1 action" | "1 bonus action"
    minLevel: number
}

function getAbilityModifier(score: AbilityValue): string {
    if (score === 1) return '−5'
    if (score === 2) return '−4'
    if (score === 3) return '−4'
    if (score === 4) return '−3'
    if (score === 5) return '−3'
    if (score === 6) return '−2'
    if (score === 7) return '−2'
    if (score === 8) return '−1'
    if (score === 9) return '−1'
    if (score === 10) return '+0'
    if (score === 11) return '+0'
    if (score === 12) return '+1'
    if (score === 13) return '+1'
    if (score === 14) return '+2'
    if (score === 15) return '+2'
    if (score === 16) return '+3'
    if (score === 17) return '+3'
    if (score === 18) return '+4'
    if (score === 19) return '+4'
    if (score === 20) return '+5'
    if (score === 21) return '+5'
    if (score === 22) return '+6'
    if (score === 23) return '+6'
    if (score === 24) return '+7'
    if (score === 25) return '+7'
    if (score === 26) return '+8'
    if (score === 27) return '+8'
    if (score === 28) return '+9'
    if (score === 29) return '+9'
    if (score === 30) return '+10'
    return 'error in score value'
}

function calculateSkillValues(skills: Skill[], abilities: AbilityEntry[]): void {
    skills.forEach((skill: Skill) => {
        let ability: AbilityEntry | undefined = abilities.find((ability: AbilityEntry) => {
            return ability.name === skill.base
        })
        let abilityScore: AbilityValue = ability?.baseValue || 10
        let modifier: string = getAbilityModifier(abilityScore)
        let modifierNum: number = +modifier
        if (skill.proficiencyShort !== 'N') modifierNum += 3
        if (skill.expertise) modifierNum += 3
        skill.value = modifierNum
    })
}

function handleSpellDescriptionText(text: string): { __html: string } {
    let tmpString: string = ''
    text.split('{').forEach((part: string, index: number) => {
        if (index !== 0) {
            tmpString += getMeasureInMeters(part.split('}')[0]) + part.split('}')[1]
        }
        else tmpString += part
    })
    return { __html: tmpString }
}

function getMeasureInMeters(measure: string): string {
    let tmpSubstring: string = (parseInt(measure) * 0.30).toFixed(1)
    if (tmpSubstring === "0.0") return ""
    return parseInt(tmpSubstring.split('.')[1]) > 0 ? tmpSubstring += 'mt' : tmpSubstring.split('.')[0] += 'mt'
}

export default function Home() {
    let abilities: AbilityEntry[] = [
        {
            name: 'STR',
            fullName: 'Strenght',
            proficiency: false,
            baseValue: 11
        },
        {
            name: 'DEX',
            fullName: 'Dexterity',
            proficiency: true,
            baseValue: 17
        },
        {
            name: 'CON',
            fullName: 'Constitution',
            proficiency: false,
            baseValue: 15
        },
        {
            name: 'INT',
            fullName: 'Intelligence',
            proficiency: false,
            baseValue: 13
        },
        {
            name: 'WIS',
            fullName: 'Wisdom',
            proficiency: false,
            baseValue: 14
        },
        {
            name: 'CHA',
            fullName: 'Charisma',
            proficiency: true,
            baseValue: 19
        },

    ]
    let skills: Skill[] = [
        {

            name: "Acrobatics",
            base: 'DEX',
            proficiency: 'Race',
            proficiencyShort: 'R',
            value: 0,
            expertise: false
        },
        {

            name: "Animal Handling",
            base: 'WIS',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Arcana",
            base: 'INT',
            proficiency: 'Background',
            proficiencyShort: 'B',
            value: 0,
            expertise: false
        },
        {

            name: "Athletics",
            base: 'STR',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Deception",
            base: 'CHA',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: false
        },
        {

            name: "History",
            base: 'INT',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: false
        },
        {

            name: "Insight",
            base: 'WIS',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Intimidation",
            base: 'CHA',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: true
        },
        {

            name: "Investigation",
            base: 'INT',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Medicine",
            base: 'WIS',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: false
        },
        {

            name: "Nature",
            base: 'INT',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: false
        },
        {

            name: "Perception",
            base: 'WIS',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Performance",
            base: 'CHA',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Persuasion",
            base: 'CHA',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: true
        },
        {

            name: "Religion",
            base: 'INT',
            proficiency: 'Race',
            proficiencyShort: 'R',
            value: 0,
            expertise: false
        },
        {

            name: "Sleight of Hand",
            base: 'DEX',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Stealth",
            base: 'DEX',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0,
            expertise: false
        },
        {

            name: "Survival",
            base: 'WIS',
            proficiency: 'Background',
            proficiencyShort: 'B',
            value: 0,
            expertise: false
        },
    ]

    const basicStats: any = {
        "Proficiency": "+3",
        "CA": "14",
        "Initiative": "+4",
        "Speed": "9m",
        "Darkvision": "18m",
        "Inspiration": "0",
        "Temp HP": "0",
        "Current HP": "29",
        "Max HP": "39",
        "Max Spell Slot Level": "3"
    }

    const level: any = {
        "Bard": 6,
        "Rogue": 0
    }

    const spells: Spell[][] = [
        [
            {
                "spellName": "Mage Hand",
                "source": "Player's Handbook",
                "description": "<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than {30} away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to <b>manipulate</b> an object, <b>open</b> an unlocked door or container, <b>stow</b> or <b>retrieve</b> an item from an open container, or <b>pour</b> the contents out of a vial. You can move the hand up to {30} each time you use it.The hand can’t attack, activate magical items, or carry more than 10 pounds.</p>",
                "dice": "none",
                "duration": "1 minute",
                "components": {
                    "v": true,
                    "s": true,
                    "c": false
                },
                "range": 30,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 0
            },
            {
                "spellName": "True Strike",
                "source": "Player's Handbook",
                "description": "<p>You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target’s defenses. On your next turn, you gain <b>advantage</b> on your first attack roll against the target, provided that this spell hasn’t ended.</p>",
                "dice": "none",
                "duration": "Concentration, 1 round",
                "components": {
                    "v": false,
                    "s": true,
                    "c": false
                },
                "range": 30,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 0
            },
            {
                "spellName": "Vicious Mockery",
                "source": "Player's Handbook",
                "description": "<p>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a <b>Wisdom</b> saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.</p>",
                "dice": {
                    "1": "1d4",
                    "2": "1d4",
                    "3": "2d4",
                    "4": "2d4",
                    "5": "3d4",
                    "6": "3d4",
                    "7": "4d4",
                    "8": "4d4",
                    "9": "4d4",
                },
                "duration": "instantaneous",
                "components": {
                    "v": true,
                    "s": false,
                    "c": false
                },
                "range": 60,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 0
            }
        ],
        [
            {
                "spellName": "Charm Person",
                "source": "Player's Handbook",
                "description": "<p>You attempt to charm a humanoid you can see within range. It must make a <b>Wisdom</b> saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is <b>charmed</b> by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a <b>friendly</b> acquaintance. When the spell ends, the creature knows it was charmed by you. <b>At Higher Levels</b> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within {30} of each other when you target them.</p>",
                "dice": "none",
                "duration": "1 hour",
                "components": {
                    "v": true,
                    "s": true,
                    "c": false
                },
                "range": 30,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 1
            },
            {
                "spellName": "Tasha's Hideous Laughter",
                "source": "Player's Handbook",
                "description": "<p>A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a <b>Wisdom</b> saving throw or <b>fall prone, becoming incapacitated and unable to stand up for the duration</b>. A creature with an <b>Intelligence score of 4 or less</b> isn’t affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by damage. On a success, the spell ends.</p>",
                "dice": "none",
                "duration": "concentration, 1 minute",
                "components": {
                    "v": true,
                    "s": true,
                    "c": true
                },
                "range": 30,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 1
            },
            {
                "spellName": "Thunderwave",
                "source": "Player's Handbook",
                "description": "<p>A wave of thunderous force sweeps out from you. Each creature in a {15} cube originating from you must make a <b>Constitution</b> saving throw. On a failed save, a creature takes 2d8 <b>thunder</b> damage and is <b>pushed</b> {10} away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed {10} away from you by the spell’s effect, and the spell emits a thunderous boom <b>audible out to {300}</b></p>",
                "dice": {
                    "1": "1d8",
                    "2": "2d8",
                    "3": "3d8",
                    "4": "4d8",
                    "5": "5d8",
                    "6": "6d8",
                    "7": "7d8",
                    "8": "8d8",
                    "9": "9d8",
                },
                "duration": "instantaneous",
                "components": {
                    "v": true,
                    "s": true,
                    "c": false
                },
                "range": 15,
                "rangeType": ", cube, self",
                "castingTime": "1 action",
                "minLevel": 1
            }
        ],
        [
            {
                "spellName": "Invisibility",
                "source": "Player's Handbook",
                "description": "<p></p>A creature you touch becomes <b>invisible</b> until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell. </p><p><b>At Higher Levels</b> When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>",
                "dice": "none",
                "duration": "concentration, 1 hour",
                "components": {
                    "v": true,
                    "s": true,
                    "c": true
                },
                "range": 0,
                "rangeType": "touch",
                "castingTime": "1 action",
                "minLevel": 2
            },
            {
                "spellName": "Pyrotechnics",
                "source": "Xanathar's Guide to Everything",
                "description": "<p>Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke.</p><p><b>Fireworks:</b> The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.</p><p><b>Smoke:</b> Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.</p>",
                "dice": "none",
                "duration": "instantaneous",
                "components": {
                    "v": true,
                    "s": true,
                    "c": false
                },
                "range": 60,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 2
            },
            {
                "spellName": "Shatter",
                "source": "Player's Handbook",
                "description": "<p>A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a {10} sphere centered on that point must make a <b>Constitution</b> saving throw. A creature takes 3d8 <b>thunder</b> damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area.</p>",
                "dice": {
                    "1": "0",
                    "2": "2d8",
                    "3": "3d8",
                    "4": "4d8",
                    "5": "5d8",
                    "6": "6d8",
                    "7": "7d8",
                    "8": "8d8",
                    "9": "9d8",
                },
                "duration": "instantaneous",
                "components": {
                    "v": true,
                    "s": true,
                    "c": true
                },
                "range": 60,
                "rangeType": ", sphere",
                "castingTime": "1 action",
                "minLevel": 2
            },
            {
                "spellName": "Shadow Blade",
                "source": "Xanathar's Guide to Everything",
                "description": "<p>You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are <b>proficient</b>. It deals 2d8 <b>psychic</b> damage on a hit and has the <b>finesse</b>,<b>light</b>, and <b>thrown(range 20/60)</b> properties. In addition, when you use the sword to attack a target that is in <b>dim light</b> or <b>darkness</b>, you make the attack roll with <b>advantage</b>.</p><p>If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a <b>bonus action to cause the sword to reappear</b> in your hand.</p>",
                "dice": {
                    "1": "0",
                    "2": "2d8",
                    "3": "3d8",
                    "4": "3d8",
                    "5": "4d8",
                    "6": "4d8",
                    "7": "5d8",
                    "8": "5d8",
                    "9": "5d8",
                },
                "duration": "concentration, 1 minute",
                "components": {
                    "v": true,
                    "s": true,
                    "c": false
                },
                "range": 0,
                "rangeType": "self",
                "castingTime": "1 bonus action",
                "minLevel": 2
            }
        ],
        [
            {
                "spellName": "Bestow Curse",
                "source": "Player's Handbook",
                "description": "<p>You touch a creature, and that creature must succeed on a <b>Wisdom</b> saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: </p><p>Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.</p><p>While cursed, the target has disadvantage on attack rolls against you.</p><p>While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.</p><p>While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.</p><p>A <b>remove curse</b> spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.At Higher Levels. If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.</p>",
                "dice": "none",
                "duration": "concentration, 1 minute",
                "components": {
                    "v": true,
                    "s": true,
                    "c": false,
                },
                "range": 0,
                "rangeType": "touch",
                "castingTime": "1 action",
                "minLevel": 3
            },
            {
                "spellName": "Fear",
                "source": "Player's Handbook",
                "description": "<p>You project a phantasmal image of a creature’s worst fears. Each creature in a {30} cone must succeed on a <b>Wisdom</b> saving throw or <b>drop</b> whatever it is holding and become <b>frightened</b> for the duration.</p><p>While frightened by this spell, a creature must take the <b>Dash</b> action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn’t have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.</p>",
                "dice": "none",
                "duration": "concentration, 1 minute",
                "components": {
                    "v": true,
                    "s": true,
                    "c": true,
                },
                "range": 30,
                "rangeType": ", cone, self",
                "castingTime": "1 action",
                "minLevel": 3
            },
            {
                "spellName": "Major Image",
                "source": "Player's Handbook",
                "description": "<p>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a {20} cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can’t create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte’s stench).</p><p>As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.</p><p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.</p><p><b>At Higher Levels:</b> When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration. In this form it is sometimes considered a different spell, known as Permanent Image</p>",
                "dice": "none",
                "duration": "concentration, 10 minute",
                "components": {
                    "v": true,
                    "s": true,
                    "c": true,
                },
                "range": 120,
                "rangeType": "",
                "castingTime": "1 action",
                "minLevel": 3
            },
            {
                "spellName": "Thunder Step",
                "source": "Xanathar's Guide to Everything",
                "description": "<p>You <b>teleport</b> yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within <b>{10}</b> of the space you left must make a <b>constitution</b> saving throw, taking <b>3d10 thunder damage</b> on a failed save, or half as much damage on a successful one. The thunder can be heard from up to<b> {300} </b>away. </p><p>You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within {5} of you when you cast this spell, and there must be an unoccupied space within {5} of your destination space for the creature to appear in; otherwise, the creature is left behind.</p>",
                "dice": {
                    "1": "0",
                    "2": "0",
                    "3": "3d10",
                    "4": "4d10",
                    "5": "5d10",
                    "6": "6d10",
                    "7": "7d10",
                    "8": "8d10",
                    "9": "9d10",
                },
                "duration": "istantaneous",
                "components": {
                    "v": true,
                    "s": false,
                    "c": false,
                },
                "range": 90,
                "rangeType": ", self",
                "castingTime": "1 action",
                "minLevel": 3
            }
        ]
    ]

    calculateSkillValues(skills, abilities)

    return (
        <main>
            <div className="basic-info">
                <h1>Kralumin Askultam | Half Elf Noble</h1>
                <div className="levels">
                    {Object.keys(level).map((key: string) => {
                        return <>
                            <div className="class-levels" key={'level' + key}>
                                <p>{key}</p>
                                <p className="arrow">{'>'}</p>
                                {Array.from(Array(20).keys()).map((value) => {
                                    if (value < level[key]) return <span className="level gained" key={'level_slot_' + value}></span>
                                    else if (value - level[key] < 2) return <span className="level" key={'level_slot_' + value}></span>
                                })}
                            </div>
                        </>
                    })}
                </div>
            </div>
            <div className='basic-stats-and-image'>
                <div className="image-container">
                    <Image src="/img/dnd/kralumin.jpg" alt="Kralumin il bardo" width={500} height={500} />
                </div>
                <div className="stats">
                    <HPCounter />
                    <Slots />
                    <BardicInspiration />
                </div>
                <div className='generic-stats'>
                    <GenericStats />
                </div>
            </div>
            <div className="abilities">
                {abilities.map((ability: AbilityEntry) => {
                    return <div key={ability.name}>
                        <span className={ability.proficiency ? 'description proficient' : 'description'}>{ability.fullName}</span>
                        <span><i>{ability.baseValue}</i>{getAbilityModifier(ability.baseValue)}</span>
                    </div>
                })}
            </div>
            <div className="skills">
                {skills.map((skill: Skill) => {
                    return <div key={skill.name}>
                        <span className='description'>{skill.name}<i>{skill.base}</i></span>
                        <span><i>{skill.proficiencyShort}</i>{skill.expertise && <i>x2</i>}{'+' + skill.value}</span>
                    </div>
                })}
            </div>
            <div className="spells">
                {spells.map((spellList: Spell[], index: number) => {
                    return <>
                        <h2 className='spell-level'>
                            {index === 0 && 'Cantrips'}
                            {index > 0 && 'Level ' + index}
                        </h2>
                        <div className='spell-details-container'>
                            {spellList.map((spell: Spell) => {
                                return <div key={spell.spellName} className='spell-element'>
                                    <h2>{spell.spellName}<i>{spell.source}</i></h2>
                                    <div className="spell-details">
                                        <p>
                                            <span className='value'>{spell.components.v ? <RecordVoiceOverIcon /> : ''}{spell.components.s ? <SwipeVerticalIcon /> : ''}{spell.components.c === true ? <ShoppingBagIcon /> : spell.components.c ? spell.components.c : ''}</span>
                                            <span className="description">COMPONENTS</span>
                                        </p>
                                        <p>
                                            <span className='value'>{spell.castingTime}</span>
                                            <span className="description">CASTING TIME</span>
                                        </p>
                                        <p>
                                            <span className='value'>{spell.duration}</span>
                                            <span className="description">DURATION</span>
                                        </p>
                                        <p>
                                            <span className='value'>{getMeasureInMeters(spell.range.toString())}{spell.rangeType}</span>
                                            <span className="description">RANGE</span>
                                        </p>

                                    </div>
                                    <div className="spell-details">
                                        {spell.dice != "none" && <p>
                                            <span className='value'>{
                                                Object.keys(spell.dice).map((key: string) => {
                                                    if (spell.dice[key as SpellLevels] === '0') return
                                                    else if (parseInt(basicStats['Max Spell Slot Level']) < parseInt(key)) return
                                                    else return 'lv' + key + ': ' + spell.dice[key as SpellLevels]
                                                }).filter((value: string | undefined) => value !== undefined).join(' | ')}</span>
                                            <span className="description">DICE</span>
                                        </p>}
                                    </div>
                                    {/* <p className='spell-description' dangerouslySetInnerHTML={handleSpellDescriptionText(spell.description)}></p> */}
                                </div>
                            })}
                        </div>
                    </>
                })}
            </div>
        </main>
    )
}

