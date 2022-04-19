import {Availabilty} from "@/helpers/enums";

export type ProfileFormValuesType = {
    name: string,
    age: string,
    positions: Position[],
    availability: Availabilty
}

type Position = {
    id: string,
    text: string
}

export type ProfileValuesType = {
    name: string,
    age: number | null,
    positions: string[],
    availability: Availabilty
}