'use client'

import { realtimeDatabase } from "@/app/(lib)/firebase"
import { onValue, ref } from "firebase/database";
import React from "react";
import Spell from "./spell";

type IDice = "0" | "1d4" | "1d6" | "1d8" | "1d10" | "1d12" | "1d20" | "1d100" | "2d4" | "2d6" | "2d8" | "2d10" | "2d12" | "2d20" | "2d100" | "3d4" | "3d6" | "3d8" | "3d10" | "3d12" | "3d20" | "3d100" | "4d4" | "4d6" | "4d8" | "4d10" | "4d12" | "4d20" | "4d100" | "5d4" | "5d6" | "5d8" | "5d10" | "5d12" | "5d20" | "5d100" | "6d4" | "6d6" | "6d8" | "6d10" | "6d12" | "6d20" | "6d100" | "7d4" | "7d6" | "7d8" | "7d10" | "7d12" | "7d20" | "7d100" | "8d4" | "8d6" | "8d8" | "8d10" | "8d12" | "8d20" | "8d100" | "9d4" | "9d6" | "9d8" | "9d10" | "9d12" | "9d20" | "9d100" | "10d4" | "10d6" | "10d8" | "10d10" | "10d12" | "10d20" | "10d100" | "11d4" | "11d6" | "11d8" | "11d10" | "11d12" | "11d20" | "11d100" | "12d4" | "12d6" | "12d8" | "12d10" | "12d12" | "12d20" | "12d100"

type ISpellLevel = "lv_0" | "lv_1" | "lv_2" | "lv_3" | "lv_4" | "lv_5" | "lv_6" | "lv_7" | "lv_8" | "lv_9"

type ISpellDiceLevel = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

interface ILevels {
    bard: number
    cleric: number
    druid: number
    fighter: number
    monk: number
    paladin: number
    ranger: number
    rogue: number
}

interface ISpell {
    spellName: string
    source: string
    description: string
    dice: Record<ISpellDiceLevel, IDice> | "none"
    duration: string
    components: {
        v: boolean,
        s: boolean
        c: boolean | string
    },
    range: number
    rangeType: string
    castingTime: string
    minLevel: number
}

type ISpellList = ISpell[][]

export default class SpellList extends React.Component {
    public state: {
        domLoaded: boolean,
        spellList: ISpellList
        maxLevel: number
    }

    constructor(props: any) {
        super(props)
        this.state = {
            domLoaded: false,
            spellList: [],
            maxLevel: 0
        }
    }

    componentDidMount() {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/spell_known')

        onValue(dbRef, (snapshot) => {
            let spellListWithLevel: ISpellList = []
            snapshot.forEach(spellListFromResponse => {
                let spellList: ISpell[] = []
                spellListFromResponse.forEach(spellFromResponse => {
                    spellList.push(spellFromResponse.val())
                })
                spellListWithLevel.push(spellList)
            })
            this.setState({
                spellList: spellListWithLevel,
            })
        })

        const dbRefLevels = ref(realtimeDatabase, 'dnd/kralumin/levels')

        onValue(dbRefLevels, (snapshot) => {
            let data = snapshot.val()
            this.setState({
                maxLevel: this.getTotalLevel(data)
            })

        })
    }

    getTotalLevel(levels: ILevels) {
        return parseInt(Object.keys(levels).reduce((total: string, key: string) => {
            return (parseInt(total) || 0 + levels[key as keyof ILevels]).toString()
        }, '0')) % 4 + 1
    }

    render() {
        return (
            <div className="spells">
                {this.state.spellList.map((spellList: ISpell[], index: number) => {
                    return <section style={{"display": "content"}} key={'spell_level_list_' + index}>
                        <h2 className='spell-level'>
                            {index === 0 && 'Cantrips'}
                            {index > 0 && 'Level ' + index}
                        </h2>
                        <div className='spell-details-container'>
                            {spellList.map((spell: ISpell) =>  <Spell spell={spell} maxLevel={this.state.maxLevel} key={spell.spellName}/>)}
                        </div>
                    </section>
                })}
            </div>
        )
    }
}
