export interface RoomPerson {
    name: string
    show: boolean
    priority: 'low' | 'normal'
}

export interface RoomPersonsObject {
    mobile: RoomPerson[]
    frontend: RoomPerson[]
    scada: RoomPerson[]
    dh: RoomPerson[]
    applicationServer: RoomPerson[]
    kpi: RoomPerson[]
    test: RoomPerson[]
    scrumMaster: RoomPerson[]
    projectOwner: RoomPerson[]
}
