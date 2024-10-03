'use client'

import { realtimeDatabase } from "@/app/(lib)/firebase"
import { onValue, ref, set } from "firebase/database";
import React from "react";
import { ISpellSlot } from "./models";

export default class Slots extends React.Component {
    public state: {
        domLoaded: boolean,
        spellSlots: ISpellSlot[]
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
            let data: Record<string, ISpellSlot> = snapshot.val()
            let spellSlots: ISpellSlot[] = [...this.state.spellSlots]
            Object.keys(data).forEach((key, index) => {
                if (spellSlots[index] && spellSlots[index].max > 0) spellSlots[index] = data[key]
                else if (data[key].max == 0) spellSlots.splice(index, 1)
                else if (data[key].max > 0) spellSlots.push(data[key])
            })
            this.setState({
                spellSlots: spellSlots,
                domLoaded: true
            })
        })
    }

    changeSlotStatus(slotLevel: number, newStatus: 'used' | 'free') {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/spell_slots/lv_' + slotLevel)
        set(dbRef, {
            max: this.state.spellSlots[slotLevel - 1].max,
            used: (newStatus === 'free' ? -1 : 1) + this.state.spellSlots[slotLevel - 1].used
        })
    }

    render() {
        return (
            <div className='spell-slots'>
                <p>Spell slots</p>
                {
                    this.state.spellSlots.map((spell: ISpellSlot, index: number) => {
                        return <div className='spell-level' key={'spell_level_indicator_' + index}>
                            <span >{index + 1}</span>
                            {Array.from(Array(spell.max).keys()).map((slot: number, slotIndex: number) => {
                                if (slotIndex < spell.used) return <span onClick={() => this.changeSlotStatus(index + 1, 'free')} className='slot used' key={'spell_slot_indicator_' + index + '_slot_' + slotIndex}></span>
                                else return <span onClick={() => this.changeSlotStatus(index + 1, 'used')} className='slot' key={'spell_slot_indicator_' + index + '_slot_' + slotIndex}></span>
                            })}
                        </div>
                    })
                }
            </div>
        )
    }
}
