'use client'

import { getClientRealtimeDatabase } from "@/src/lib/firebase-client"
import { onValue, ref, set } from "firebase/database";
import React from "react";
import { IBardicInspiration } from "./models";

export default class BardicInspiration extends React.Component {
    public state: {
        domLoaded: boolean,
        bardicInspiration: IBardicInspiration
    }

    constructor(props: any) {
        super(props)
        this.state = {
            domLoaded: false,
            bardicInspiration: {
                max: 0,
                used: 0
            }
        }
    }

    componentDidMount() {
        const dbRef = ref(getClientRealtimeDatabase(), 'dnd/kralumin/bardic_inspiration')

        onValue(dbRef, (snapshot) => {
            let data = snapshot.val()
            this.setState({
                domLoaded: true,
                bardicInspiration: data
            })
        })
    }

    changeSlotStatus(newStatus: 'used' | 'free') {
        const dbRef = ref(getClientRealtimeDatabase(), 'dnd/kralumin/bardic_inspiration/used')
        set(dbRef, (newStatus === 'free' ? -1 : 1) + this.state.bardicInspiration.used)
    }

    render() {
        return (
            <div className='spell-slots'>
                <p>Bardic Inspiration</p>
                {Array.from(Array(this.state.bardicInspiration.max).keys()).map((slot: number) => {
                    if (slot < this.state.bardicInspiration.used) return <span onClick={() => this.changeSlotStatus('free')} className='slot used' key={'inspiration_' + slot}></span>
                    else return <span onClick={() => this.changeSlotStatus('used')} className='slot' key={'inspiration_' + slot}></span>
                })}
            </div>
        )
    }
}
