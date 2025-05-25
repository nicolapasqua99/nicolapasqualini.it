'use client'

import { realtimeDatabase } from "@/src/lib/firebase"
import { onValue, ref } from "firebase/database";
import React from "react";
import Spell from "./spell";
import { ILevels, ISpell, ISpellList } from "./models";

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
