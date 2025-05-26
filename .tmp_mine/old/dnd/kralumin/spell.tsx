'use client'

import React from "react";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import DNDButton from "./dndButton";
import { ISpell, ISpellDiceLevel, ISpellProps } from "./models";

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
