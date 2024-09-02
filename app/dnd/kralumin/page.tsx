import Image from 'next/image'
import './page.css'

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'

type AbilityValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30

interface AbilityEntry {
    name: Ability
    proficiency: boolean
    baseValue: AbilityValue
}

interface Skill {
    name: string
    base: Ability
    proficiency: 'Class' | 'Race' | 'Background' | 'none' | 'DoubledClass'
    proficiencyShort: 'C' | 'R' | 'B' | 'N' | 'DC'
    value: number
    expertise: boolean
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
        if (skill.proficiencyShort === 'DC') modifierNum += 4
        else if (skill.proficiencyShort !== 'N') modifierNum += 2
        skill.value = modifierNum
    })
}
export default function Home() {
    let abilities: AbilityEntry[] = [
        {
            name: 'STR',
            proficiency: false,
            baseValue: 11
        },
        {
            name: 'DEX',
            proficiency: true,
            baseValue: 17
        },
        {
            name: 'CON',
            proficiency: false,
            baseValue: 15
        },
        {
            name: 'INT',
            proficiency: false,
            baseValue: 13
        },
        {
            name: 'WIS',
            proficiency: false,
            baseValue: 14
        },
        {
            name: 'CHA',
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
            proficiency: 'DoubledClass',
            proficiencyShort: 'DC',
            value: 0,
            expertise: false
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
            proficiency: 'DoubledClass',
            proficiencyShort: 'DC',
            value: 0,
            expertise: false
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
                                <p className="arrow">{'->'}</p>
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
            </div>
            <div className="abilities">
                {abilities.map((ability: AbilityEntry) => {
                    return <div key={ability.name}>
                        <span className='description'>{ability.name}</span>
                        <span>{ability.baseValue}/{getAbilityModifier(ability.baseValue)}</span>
                    </div>
                })}
            </div>
            <div className="skills">
                {skills.map((skill: Skill) => {
                    return <div key={skill.name}>
                        <span className='description'>{skill.name}({skill.base})</span>
                        <span>{skill.value}({skill.proficiencyShort})</span>
                    </div>
                })}
            </div>
        </main>
    )
}