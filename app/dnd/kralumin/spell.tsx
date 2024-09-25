'use client'

import { realtimeDatabase } from "@/app/(lib)/firebase"
import { ref, set, get } from "firebase/database";
import React from "react";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import DNDButton from "./dndButton";

type IDice = "0" | "1d4" | "1d6" | "1d8" | "1d10" | "1d12" | "1d20" | "1d100" | "2d4" | "2d6" | "2d8" | "2d10" | "2d12" | "2d20" | "2d100" | "3d4" | "3d6" | "3d8" | "3d10" | "3d12" | "3d20" | "3d100" | "4d4" | "4d6" | "4d8" | "4d10" | "4d12" | "4d20" | "4d100" | "5d4" | "5d6" | "5d8" | "5d10" | "5d12" | "5d20" | "5d100" | "6d4" | "6d6" | "6d8" | "6d10" | "6d12" | "6d20" | "6d100" | "7d4" | "7d6" | "7d8" | "7d10" | "7d12" | "7d20" | "7d100" | "8d4" | "8d6" | "8d8" | "8d10" | "8d12" | "8d20" | "8d100" | "9d4" | "9d6" | "9d8" | "9d10" | "9d12" | "9d20" | "9d100" | "10d4" | "10d6" | "10d8" | "10d10" | "10d12" | "10d20" | "10d100" | "11d4" | "11d6" | "11d8" | "11d10" | "11d12" | "11d20" | "11d100" | "12d4" | "12d6" | "12d8" | "12d10" | "12d12" | "12d20" | "12d100"

type ISpellDiceLevel = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

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

interface ISpellProps {
    spell: ISpell
    maxLevel: number
}

export default class Spell extends React.Component<ISpellProps> {
    public state: {
        domLoaded: boolean,
        spell: ISpell,
        maxLevel: number
    }

    constructor(props: ISpellProps) {
        super(props)
        this.state = {
            domLoaded: false,
            spell: props.spell,
            maxLevel: props.maxLevel
        }
    }

    handleSpellDescriptionText(text: string): { __html: string } {
        let tmpString: string = ''
        text.split('{').forEach((part: string, index: number) => {
            if (index !== 0) {
                tmpString += this.getMeasureInMeters(part.split('}')[0]) + part.split('}')[1]
            }
            else tmpString += part
        })
        return { __html: tmpString }
    }

    getMeasureInMeters(measure: string): string {
        let tmpSubstring: string = (parseInt(measure) * 0.30).toFixed(1)
        if (tmpSubstring === "0.0") return ""
        return parseInt(tmpSubstring.split('.')[1]) > 0 ? tmpSubstring += 'mt' : tmpSubstring.split('.')[0] += 'mt'
    }

    render() {
        return (
            <>
                <div key={this.state.spell.spellName} className='spell-element'>
                    <h2>{this.state.spell.spellName}<i>{this.state.spell.source}</i></h2>
                    <div className="spell-details">
                        <p>
                            <span className='value'>{this.state.spell.components.v ? <RecordVoiceOverIcon /> : ''}{this.state.spell.components.s ? <SwipeVerticalIcon /> : ''}{this.state.spell.components.c === true ? <ShoppingBagIcon /> : this.state.spell.components.c ? this.state.spell.components.c : ''}</span>
                            <span className="description">COMPONENTS</span>
                        </p>
                        <p>
                            <span className='value'>{this.state.spell.castingTime}</span>
                            <span className="description">CASTING TIME</span>
                        </p>
                        <p>
                            <span className='value'>{this.state.spell.duration}</span>
                            <span className="description">DURATION</span>
                        </p>
                        <p>
                            <span className='value'>{this.getMeasureInMeters(this.state.spell.range.toString())}{this.state.spell.rangeType}</span>
                            <span className="description">RANGE</span>
                        </p>
                    </div>
                    <div className="spell-details">
                        {this.state.spell.dice != "none" && <p>
                            <span className='value'>{
                                Object.keys(this.state.spell.dice).map((key: string) => {
                                    if (this.state.spell.dice[key as ISpellDiceLevel] === '0') return
                                    else if (this.state.maxLevel < parseInt(key)) return
                                    else return 'lv' + key + ': ' + this.state.spell.dice[key as ISpellDiceLevel]
                                }).filter((value: string | undefined) => value !== undefined).join(' | ')}</span>
                            <span className="description">DICE{this.state.maxLevel}</span>
                        </p>}
                    </div>
                    <p className='spell-description' dangerouslySetInnerHTML={this.handleSpellDescriptionText(this.state.spell.description)}></p>
                    {this.state.spell.minLevel != 0 && <DNDButton maxLevel={this.state.maxLevel} spellLevel={this.state.spell.minLevel}/>}
                </div>
                
            </>
        )
    }
}
