'use client'

import { useState } from 'react'

export default function Person(props: any) {
    const [talked, setTalked] = useState(false)

    let className: string = ''

    if (talked) className += props.person.priority + ' person-container ' + 'talked'
    else className += props.person.priority + ' person-container ' + 'not-talked'

    
    return (
        <div className={className} onClick={() => setTalked(!talked)}>
            <span className="tick" />
            <p>{props.person.name}</p>
            <span className="dot" />
            {/* <p>{props.person.field}</p> */}
        </div>
    )
}
