import {Availabilty} from "@/helpers/enums";

export type ProfileFormValuesType = {
    name: string,
    age: string,
    positions: string,
    availability: Availabilty
}

export type ProfileValuesType = {
    name: string,
    age: number | null,
    positions: string,
    availability: Availabilty
}