import Image from 'next/image'
import './page.css'
import Slots from './slots'
import HPCounter from './hp'
import BardicInspiration from './bardicInpiration'
import GenericStats from './genericStats'
import SpellList from './spell_list'
import { AbilityEntry, AbilityValue, Skill } from './models'

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
            expertise: true
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
            proficiency: 'Class',
            proficiencyShort: 'C',
            value: 0,
            expertise: true
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
        "Rogue": 1
    }

    

    calculateSkillValues(skills, abilities)

    return (
        <main>
            <div className="basic-info">
                <h1>Kralumin Askultam | Half Elf Noble</h1>
                <div className="levels">
                    {Object.keys(level).map((key: string) => {
                        console.log(level)
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
            <SpellList />
        </main>
    )
}

