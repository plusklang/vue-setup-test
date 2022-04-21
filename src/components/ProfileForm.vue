<template>
    <form class="profile-form" ref="$root">
        <h1>Edit your profile data</h1>
        <Input
            v-model:model-value="props.modelValue.name"
            pattern=".*"
            id="name"
            name="name"
            error-text-pattern=""
            error-text-required="Please type your name"
            :required="true"

        />
        <Input
            v-model:model-value="props.modelValue.age"
            id="age"
            name="age"
            pattern="\d{0,3}"
            error-text-pattern="The input must be a number"
            error-text-required="Please type your age"
            :required="true"
        />
        <div class="positions">
            <label> Positions</label>
            <Input
                v-for="(position, i) in props.modelValue.positions"
                :key="'position-' + position.id"
                v-model="props.modelValue.positions[i].text"
                :id="'position-' + position.id"
                class="no-margin"
                v-autocomplete="positionsList"
                pattern=".*"
                error-text-pattern=""
                error-text-required="Please type your positions"
                :required="true"
            />
            <button @click="addPosition" type="button" class="btn btn--secondary">Add position</button>

        </div>

        <Radio
            v-model="props.modelValue.availability"
            :options="availabilityOptions"
        />
        <button class="profile-form__save" type="button" @click.prevent="submit">Save</button>
    </form>
</template>


<script lang="ts" setup>
import Input from "@/components/Input.vue";
import {ref} from "vue";
import {ProfileFormValuesType} from "@/helpers/types";
import {availabilityMapping, positions} from "@/helpers/mappings";
import {getRandomId} from "@/helpers/utilityFunctions";
import Radio from "@/components/Radio.vue";

const $root = ref<HTMLFormElement | null>(null);
const $emit = defineEmits(['submit'])
const props = defineProps<{
    modelValue: ProfileFormValuesType
}>()
const nameValid = ref<boolean>(false)
const randomId = getRandomId
const positionsList = positions
const availabilityOptions = availabilityMapping

function submit() {
    let isValid
    isValid = $root.value?.checkValidity()

    if (isValid) $emit('submit')
}

function addPosition(): void {
    props.modelValue.positions.push({id: getRandomId(), text: ''})
}


</script>


<style scoped lang="scss">

.positions {
    margin-bottom: 15px;
}

.profile-form {
    &__save {
        margin-top: 20px;
    }
}

</style>
