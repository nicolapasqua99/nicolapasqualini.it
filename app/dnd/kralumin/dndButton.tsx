'use client'

import { realtimeDatabase } from "@/app/(lib)/firebase";
import { get, onValue, ref, set } from "firebase/database";
import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import { IDNDButtonProps } from "./models";

export default class DNDButton extends React.Component<IDNDButtonProps> {
    public state: {
        showButtons: boolean
        maxLevel: number
        spellSlotEnabled: boolean[]
        spellLevel: number
    }

    constructor(props: IDNDButtonProps) {
        super(props)
        this.state = {
            showButtons: false,
            maxLevel: props.maxLevel,
            spellSlotEnabled: [],
            spellLevel: props.spellLevel
        }
    }

    componentDidMount(): void {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/spell_slots/')

        onValue(dbRef, (snapshot) => {
            let spellSlotEnabled: boolean[] = []
            snapshot.forEach((childSnapshot) => {
                spellSlotEnabled.push(childSnapshot.val().used < childSnapshot.val().max)
            })
            this.setState({ spellSlotEnabled: spellSlotEnabled })
        })
    }

    castSpell(castLevel: number) {
        const dbRefSlots = ref(realtimeDatabase, 'dnd/kralumin/spell_slots/lv_' + castLevel)

        get(dbRefSlots).then((snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().used < snapshot.val().max) {
                    set(dbRefSlots, {
                        used: snapshot.val().used + 1,
                        max: snapshot.val().max
                    })
                    this.setState({ showButtons: false })
                }
            }
        })


    }

    showCastLevel() {
        if (this.state.spellSlotEnabled.slice(this.state.spellLevel - 1).some((value) => value)) {
            this.setState({ showButtons: true })
        }
    }

    render() {
        return (<>
            <button className={this.state.spellSlotEnabled.slice(this.state.spellLevel - 1).some((value) => value) ? 'dnd-button' : 'dnd-button disabled'} onClick={() => this.showCastLevel()}>
                CAST
            </button>
            {this.state.showButtons && <dialog className="select-level">
                <CloseIcon onClick={() => this.setState({ showButtons: false })} />
                <h2 className="title">Select Level</h2>
                {Array.from(Array(this.state.maxLevel).keys()).slice(this.state.spellLevel - 1).map((level, index) => {
                    return <button key={level} onClick={() => { this.castSpell(level + 1) }} className={this.state.spellSlotEnabled[index] ? '' : 'disabled'}>{level + 1}</button>
                })}
            </dialog>}
        </>
        )
    }
}
