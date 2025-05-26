'use client'

import { realtimeDatabase } from "@/src/lib/firebase"
import { onValue, ref, set } from "firebase/database";
import React from "react";
import { IHPCounter } from "./models";

export default class HPCounter extends React.Component {
    public state: {
        domLoaded: boolean,
        hpCounter: IHPCounter
    }

    constructor(props: any) {
        super(props)
        this.state = {
            domLoaded: false,
            hpCounter: {
                max: 0,
                temp: 0,
                current: 0
            }
        }
    }

    componentDidMount() {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/hp')

        onValue(dbRef, (snapshot) => {
            let data: IHPCounter = snapshot.val()
            this.setState({
                hpCounter: data,
                domLoaded: true
            })
        })
    }

    changeHP(newHPQuantity: number, hpType: 'max' | 'temp' | 'current', direction: 'add' | 'remove') {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/hp/' + hpType)
        if (direction === 'add') {
            newHPQuantity += this.state.hpCounter[hpType]
        } else if (direction === 'remove') {
            newHPQuantity -= this.state.hpCounter[hpType]
        }
        set(dbRef, newHPQuantity)
    }


    render() {
        return (
            <div className='hp-counter'>
                <span className="max">
                    {this.state.hpCounter.max}
                </span>
                <span className="current">
                    {this.state.hpCounter.current}
                </span>
                <span className="temp">
                    {this.state.hpCounter.temp}
                </span>
                <span onClick={() => this.changeHP(1, 'max', 'add')}>
                    Max HP
                </span>
                <span onClick={() => this.changeHP(2, 'current', 'remove')}>
                    Current HP
                </span>
                <span onClick={() => this.changeHP(4, 'temp', 'add')}>
                    Temp HP
                </span>
            </div>
        )
    }
}
