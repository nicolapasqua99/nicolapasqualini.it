'use client'

import { realtimeDatabase } from "@/app/(lib)/firebase"
import { onValue, ref } from "firebase/database";
import React from "react";

export default class Slots extends React.Component {
    public state: {
        domLoaded: boolean,
        spellSlots: number[]
    }

    constructor(props: any) {
        super(props)
        this.state = {
            domLoaded: false,
            spellSlots: []
        }
    }

    componentDidMount() {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/spell_slots')

        onValue(dbRef, (snapshot) => {
            let data = snapshot.val()
            let spellSlots: number[] = this.state.spellSlots
            Object.keys(data).forEach((key, index) => {
                if (spellSlots[index] > 0) spellSlots[index] = data[key]
                else if (data[key] == 0) spellSlots.splice(index, 1)
                else if (data[key] > 0) spellSlots.push(data[key])
            })
            this.setState({
                spellSlots: spellSlots,
                domLoaded: true
            })
        })
    }

    render() {
        if (!this.state.domLoaded) {
            <div className='spell-slots'>
                <p>Spell slots</p>
            </div>
        } else {
            return (
                <div className='spell-slots'>
                    <p>Spell slots</p>
                    {
                        this.state.spellSlots.map((spell: number, index: number) => {
                            return <div className='spell-level' key={'spell_level_indicator_' + index}>
                                <span >{index + 1}</span>
                                {Array.from(Array(spell).keys()).map((slot: number, slotIndex: number) => {
                                    return <span className='slot' key={'spell_slot_indicator_' + index + '_slot_' + slotIndex}></span>
                                })}
                            </div>
                        })
                    }
                </div>
            )
        }
    }
}
