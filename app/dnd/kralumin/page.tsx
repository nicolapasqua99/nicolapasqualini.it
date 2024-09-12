import Image from 'next/image'
import './page.css'

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
    dice: Record<SpellLevels, Dice>
    duration: "istantaneous"
    components: {
        v: boolean,
        s: boolean
        c: boolean | string
    },
    range: number
    castingTime: "1 Action"
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
    let tmpSubstring: string = ''
    text.split('{').forEach((part: string, index: number) => {
        if (index !== 0) {
            tmpSubstring = (parseInt(part.split('}')[0]) * 0.30).toFixed(1)
            tmpSubstring = parseInt(tmpSubstring.split('.')[1]) > 0 ? tmpSubstring += 'mt ' : tmpSubstring.split('.')[0] += 'mt'
            tmpString += tmpSubstring + part.split('}')[1]
        }
        else tmpString += part
    })
    return { __html: tmpString }
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

    const spellSlots: number[] = [
        4,
        3,
        2,
        0,
        0,
    ]

    const level: any = {
        "Bard": 6,
        "Rogue": 0
    }

    const spells: Spell[][] = [
        [
            {
                "spellName": "Thunder Step",
                "source": "Xanathar's Guide to Everything",
                "description": "You <b>teleport</b> yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within <b>{10}</b> of the space you left must make a <b>constitution</b> saving throw, taking <b>3d10 thunder damage</b> on a failed save, or half as much damage on a successful one. The thunder can be heard from up to<b> {300} </b>away. <br>You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within {5} of you when you cast this spell, and there must be an unoccupied space within {5} of your destination space for the creature to appear in; otherwise, the creature is left behind.",
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
                "castingTime": "1 Action",
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
                            <div className="class-levels" key={key}>
                                <p>{key}</p>
                                <p className="arrow">{'>'}</p>
                                {Array.from(Array(20).keys()).map((value) => {
                                    if (value < level[key]) return <span className="level gained" key={value}></span>
                                    else if (value - level[key] < 2) return <span className="level" key={value}></span>
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
                    <div className='hp-counter'>
                        <span className="max">
                            {basicStats['Max HP']}
                        </span>
                        <span className="current">
                            {basicStats['Current HP']}
                        </span>
                        <span className="temp">
                            {basicStats['Temp HP']}
                        </span>
                        <span>
                            Max HP
                        </span>
                        <span>
                            Current HP
                        </span>
                        <span>
                            Temp HP
                        </span>
                    </div>
                    <div className='spell-slots'>
                        {spellSlots.map((spell: number, index: number) => {
                            return <div className='spell-level' key={spell + index}>
                                <span>{index + 1}</span>
                                {Array.from(Array(spell).keys()).map((slot: any) => {
                                    return <>
                                        <span className='slot'></span>
                                    </>
                                })}
                            </div>
                        })}
                    </div>
                    {/* {Object.keys(basicStats).map((key: string) => {
                        return <div className="stat" key={key}>
                            <span className='description'>{key}</span>
                            <span className='value'>{basicStats[key]}</span>
                        </div>
                    })} */}
                </div>
                {/* <div className='generic-stats'>
                    stats
                </div> */}
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
                        <span><i>{skill.proficiencyShort}</i>{skill.expertise && <i>x2</i>}{skill.value}</span>
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
                                            <span className='value'>{spell.components.v ? 'V' : ''}{spell.components.s ? 'S' : ''}{spell.components.c ? spell.components.c : ''}</span>
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
                                            <span className='value'>{spell.range}</span>
                                            <span className="description">RANGE</span>
                                        </p>

                                    </div>
                                    <div className="spell-details">
                                        <p>
                                            <span className='value'>{
                                                Object.keys(spell.dice).map((key: string) => {
                                                    if (spell.dice[key as SpellLevels] === '0') return
                                                    else if (parseInt(basicStats['Max Spell Slot Level']) < parseInt(key)) return
                                                    else return 'lv' + key + ': ' + spell.dice[key as SpellLevels]
                                                }).filter((value: string | undefined) => value !== undefined).join(' | ')}</span>
                                            <span className="description">DICE</span>
                                        </p>
                                    </div>
                                    <p className='spell-description' dangerouslySetInnerHTML={handleSpellDescriptionText(spell.description)}></p>
                                </div>
                            })}
                        </div>
                    </>
                })}
            </div>
        </main>
    )
}

