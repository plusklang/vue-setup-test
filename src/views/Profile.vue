<template>
    <div class="content profile">
        <h1>Your profile</h1>
        <div class="profile__image"></div>
        <div>Name: {{ profileStore.name }}</div>
        <div>Age: {{ profileStore.age }}</div>
        <div>Positions: {{ profileStore.positions }}</div>
        <div>Availability: {{ availabilty }}</div>
        <button class="profile__btn-edit" @click.prevent="$router.push('Edit')">Edit profile</button>
    </div>
</template>

<script lang="ts" setup>
import {computed, defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import MyForm from "@/components/ProfileForm.vue";
import {useProfileStore} from "@/store/profile";
import {Availabilty} from "@/helpers/enums";
import {availabilityMapping} from "@/helpers/mappings"; // @ is an alias to /src

const profileStore = useProfileStore()

const availabilty = computed((): string => {
    return availabilityMapping[profileStore.availability]
})

</script>

<style scoped lang="scss">

.profile {

    &__btn-edit {
        margin-top: 20px;
    }

    &__image {
        width: 200px;
        height: 300px;
        background: #bbbbbb;
        margin-bottom: 20px;
    }
}
</style>
