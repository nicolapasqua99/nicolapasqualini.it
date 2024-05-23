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
            value: 0
        },
        {

            name: "Animal Handling",
            base: 'WIS',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Arcana",
            base: 'INT',
            proficiency: 'Background',
            proficiencyShort: 'B',
            value: 0
        },
        {

            name: "Athletics",
            base: 'STR',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Deception",
            base: 'CHA',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0
        },
        {

            name: "History",
            base: 'INT',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0
        },
        {

            name: "Insight",
            base: 'WIS',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Intimidation",
            base: 'CHA',
            proficiency: 'DoubledClass',
            proficiencyShort: 'DC',
            value: 0
        },
        {

            name: "Investigation",
            base: 'INT',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Medicine",
            base: 'WIS',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0
        },
        {

            name: "Nature",
            base: 'INT',
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0
        },
        {

            name: "Perception",
            base: 'WIS',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Performance",
            base: 'CHA',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Persuasion",
            base: 'CHA',
            proficiency: 'DoubledClass',
            proficiencyShort: 'DC',
            value: 0
        },
        {

            name: "Religion",
            base: 'INT',
            proficiency: 'Race',
            proficiencyShort: 'R',
            value: 0
        },
        {

            name: "Sleight of Hand",
            base: 'DEX',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Stealth",
            base: 'DEX',
            proficiency: 'none',
            proficiencyShort: 'N',
            value: 0
        },
        {

            name: "Survival",
            base: 'WIS',
            proficiency: 'Background',
            proficiencyShort: 'B',
            value: 0
        },
    ]

    calculateSkillValues(skills, abilities)

    return (
        <main>
            <div className="basic-info">
                <h1>Kralumin Askultam | Half Elf Noble</h1>
                <div className="levels">
                    <div className="class-levels">
                        <p>Bard</p>
                        <p className="arrow">{'->'}</p>
                        <span className="level gained"></span>
                        <span className="level gained"></span>
                        <span className="level gained"></span>
                        <span className="level gained"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                    </div>
                    <p className='divider'>|</p>
                    <div className="class-levels">
                        <p>Rogue</p>
                        <p className="arrow">{'->'}</p>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                        <span className="level"></span>
                    </div>
                </div>
            </div>
            <div className='basic-stats-and-image'>
                <img src="../img/dnd/kralumin.jpg" alt="Kralumin il bardo" />
                <div className="stats">
                    <div className="stat">
                        <span className="value">
                            +4
                        </span>
                        <span className="description">
                            Initiative
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            14
                        </span>
                        <span className="description">
                            CA
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            25
                        </span>
                        <span className="description">
                            Max HP
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            25
                        </span>
                        <span className="description">
                            Current HP
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            0
                        </span>
                        <span className="description">
                            Temp HP
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            9m
                        </span>
                        <span className="description">
                            Speed
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            30m
                        </span>
                        <span className="description">
                            Darkvision
                        </span>
                    </div>
                    <div className="stat">
                        <span className="value">
                            4
                        </span>
                        <span className="description">
                            Bardic Inspiration
                        </span>
                    </div>
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