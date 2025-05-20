export interface RoomPerson {
    name: string
    priority: 'lower' | 'normal'
    field: string
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
