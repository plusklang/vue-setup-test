import {Availabilty} from "@/helpers/enums";

export const availabilityMapping: Record<Availabilty, string> = {
    [Availabilty.AVAILABLE]: 'Available',
    [Availabilty.PARTLY_AVAILABLE]: 'Partly available',
    [Availabilty.UNAVAILABLE]: 'Unavailable'
}

export const positions: string[] = [
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Developer',
    'UI/UX Designer',
    'DevOps Developer',
    'Scrum Master',
    'Product Owner',
    'React Developer',
    'Vue Developer',
    'Angular Developer',
    'iOS Developer',
    'Android Developer',
    'Software Developer',
    'Embedded System Developer',
    'Data Scientist',
    'Video Game Developer',
    'Game Designer',
    'Mobile Apps Developer',
    'Fullstack Developer'
]