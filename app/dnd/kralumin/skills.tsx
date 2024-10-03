'use client'

import { realtimeDatabase } from "@/app/(lib)/firebase"
import { onValue, ref } from "firebase/database";
import React from "react";
import { ISkill } from "./models";

export default class Slots extends React.Component {
    public state: {
        domLoaded: boolean,
        skills: ISkill[]
    }

    constructor(props: any) {
        super(props)
        this.state = {
            domLoaded: false,
            skills: []
        }
    }

    componentDidMount() {
        const dbRef = ref(realtimeDatabase, 'dnd/kralumin/')

        onValue(dbRef, (snapshot) => {
            let data: Record<string, any> = snapshot.val()

            this.setState({
                domLoaded: true
            })
        })
    }

    render() {
        return (
            <div className="skills">
                {this.state.skills.map((skill: ISkill) => {
                    return <div key={skill.name}>
                        <span className='description'>{skill.name}<i>{skill.base}</i></span>
                        <span><i>{skill.proficiencyShort}</i>{skill.expertise && <i>x2</i>}{'+' + skill.value}</span>
                    </div>
                })}
            </div>
        )
    }
}
