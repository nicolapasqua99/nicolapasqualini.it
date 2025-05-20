'use client'

import { realtimeDatabase } from "@/src/lib/firebase"
import { onValue, ref, set } from "firebase/database";
import React from "react";
import { IGenericStats, ILevels } from "./models";

export default class GenericStats extends React.Component {
    public state: IGenericStats

    constructor(props: any) {
        super(props)
        this.state = {
            domLoaded: false,
            initiative: 0,
            proficiency: 0,
            armorClass: 0,
            speed: 0,
            levels: {
                bard: 0,
                cleric: 0,
                druid: 0,
                fighter: 0,
                monk: 0,
                paladin: 0,
                ranger: 0,
                rogue: 0
            }
        }
    }

    componentDidMount() {
        const dbRefLevels = ref(realtimeDatabase, 'dnd/kralumin/levels')

        onValue(dbRefLevels, (snapshot) => {
            let data = snapshot.val()
            this.setState({
                levels: data,
                proficiency: this.getProficiency(data)
            })

        })

        const dbRefStats = ref(realtimeDatabase, 'dnd/kralumin/basic_stats')

        onValue(dbRefStats, (snapshot) => {
            let data = snapshot.val()
            this.setState({
                basicStats: data
            })
        }, error => {
            console.error(error)
        })

        const dbRefDexterity = ref(realtimeDatabase, 'dnd/kralumin/abilities/dex/value')

        onValue(dbRefDexterity, (snapshot) => {
            let data = snapshot.val()
            this.setState({
                initiative: this.getInitiative(data),
                armorClass: this.getArmorClass(data)
            })
        })

        const dbRefSpeed = ref(realtimeDatabase, 'dnd/kralumin/speed')

        onValue(dbRefSpeed, (snapshot) => {
            let data = snapshot.val()
            this.setState({
                speed: data
            })
        })
    }

    getSpeed(speed: number) {
        // TODO: add speed modifiers based on race
        return speed + 'm'
    }

    getArmorClass(dexterityScore: number) {
        return this.getAbilityScoreModifier(dexterityScore) + 11
    }

    getInitiative(dexterityScore: number) {
        return this.getAbilityScoreModifier(dexterityScore) + 1
    }

    getProficiency(levels: ILevels) {
        return parseInt(Object.keys(levels).reduce((total: string, key: string) => {
            return (parseInt(total) || 0 + levels[key as keyof ILevels]).toString()
        }, '0')) % 4 + 1
    }

    getAbilityScoreModifier(dexterityScore: number) {
        if (dexterityScore === 1) return -5
        if (dexterityScore === 2) return -4
        if (dexterityScore === 3) return -4
        if (dexterityScore === 4) return -3
        if (dexterityScore === 5) return -3
        if (dexterityScore === 6) return -2
        if (dexterityScore === 7) return -2
        if (dexterityScore === 8) return -1
        if (dexterityScore === 9) return -1
        if (dexterityScore === 10) return 0
        if (dexterityScore === 11) return 0
        if (dexterityScore === 12) return 1
        if (dexterityScore === 13) return 1
        if (dexterityScore === 14) return 2
        if (dexterityScore === 15) return 2
        if (dexterityScore === 16) return 3
        if (dexterityScore === 17) return 3
        if (dexterityScore === 18) return 4
        if (dexterityScore === 19) return 4
        if (dexterityScore === 20) return 5
        if (dexterityScore === 21) return 5
        if (dexterityScore === 22) return 6
        if (dexterityScore === 23) return 6
        if (dexterityScore === 24) return 7
        if (dexterityScore === 25) return 7
        if (dexterityScore === 26) return 8
        if (dexterityScore === 27) return 8
        if (dexterityScore === 28) return 9
        if (dexterityScore === 29) return 9
        if (dexterityScore === 30) return 10
        return 0
    }

    render() {

        return (
            <>
                <div className="stat">
                    <span className='description'>Proficiency</span>
                    <span>{this.state.proficiency}</span>
                </div>
                <div className="stat">
                    <span className='description'>CA</span>
                    <span>{this.state.armorClass}</span>
                </div>
                <div className="stat">
                    <span className='description'>Initiative</span>
                    <span>{this.state.initiative}</span>
                </div>
                <div className="stat">
                    <span className='description'>Speed</span>
                    <span>{this.state.speed}</span>
                </div>
                {/* <div className="stat">
                    <span className='description'>Darkvision</span>
                    <span>{basicStats["Darkvision"]}</span>
                </div> */}
                {/* {basicStats["Inspiration"] === '1' && <div className="stat inspired">
                    <span className='description'>Inspiration</span>
                    <span className='inspired'>Yessa</span>
                </div>}
                {basicStats["Inspiration"] === '0' && <div className="stat">
                    <span className='description'>Inspiration</span>
                    <span className='inspired'>Nothing Bro</span>
                </div>} */}
            </>
        )
    }
}
