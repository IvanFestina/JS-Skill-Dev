export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: false
    address: AddressType
}

export type governmentBuildings = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type cityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildings>
    citizensNumber: number
}
