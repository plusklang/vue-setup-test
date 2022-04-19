<template>
    <div class="content edit">
        <ProfileForm v-model="formValues" @submit="save"/>
    </div>
</template>

<script lang="ts" setup>

import {reactive} from 'vue';
import ProfileForm from "@/components/ProfileForm.vue";
import {getRandomId} from "@/helpers/utilityFunctions"
import {ProfileFormValuesType} from "@/helpers/types";
import {useProfileStore} from "@/store/profile";
import router from "@/router"; // @ is an alias to /src

const profileStore = useProfileStore()

const formValues = reactive<ProfileFormValuesType>({
    name: profileStore.name,
    age: (profileStore.age || '').toString(),
    positions: profileStore.positions.map(text => ({id: getRandomId, text: text})),
    availability: profileStore.availability
})

function save() {

    const profile = {
        name: formValues.name,
        age: formValues.age.length ? parseInt(formValues.age) : null,
        positions: formValues.positions.map(position => position.text),
        availability: formValues.availability
    }

    profileStore.updateProfile(profile)

    router.push({name: 'Profile'})

}

</script>
