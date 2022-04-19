import {defineStore} from 'pinia'
import {Availabilty} from "@/helpers/enums";
import {ProfileValuesType} from "@/helpers/types";
import {getRandomId} from "@/helpers/utilityFunctions"

export const useProfileStore = defineStore('profile', {
    state: () =>
        ({
            name: '',
            age: null,
            positions: [''],
            availability: Availabilty.AVAILABLE
        } as ProfileValuesType),

    actions: {
        updateProfile(profile: ProfileValuesType): void {
            this.name = profile.name
            this.age = profile.age
            this.positions = profile.positions
            this.availability = profile.availability
        }
    }
})