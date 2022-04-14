import {Availabilty} from "@/helpers/enums";

export const availabilityMapping: Record<Availabilty, string> = {
    [Availabilty.AVAILABLE]: 'Available',
    [Availabilty.PARTLY_AVAILABLE]: 'Partly available',
    [Availabilty.UNAVAILABLE]: 'Unavailable'
}