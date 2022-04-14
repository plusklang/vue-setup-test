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
            @valid="(validity) => valid(validity, 'name')"
        />
        <Input
            v-model:model-value="props.modelValue.age"
            id="age"
            name="age"
            pattern="\d{0,3}"
            error-text-pattern="The input must be a number"
            error-text-required="Please type your age"
        />
        <Input
            v-model:model-value="props.modelValue.positions"
            id="positions"
            name="positions"
            pattern=".*"
            error-text-pattern=""
            error-text-required="Please type your positions"
        />
        <Radio
            v-model="props.modelValue.availability"
            :options="availabilityOptions()"
        />
        <button class="profile-form__save" type="button" @click.prevent="submit">Save</button>
    </form>
</template>

<script lang="ts" setup>
import Input from "@/components/Input.vue";
import {defineExpose, ref, onMounted} from "vue";
import {ProfileFormValuesType} from "@/helpers/types";
import Radio from "@/components/Radio.vue";
import {availabilityMapping} from "@/helpers/mappings";
import {Availabilty} from "@/helpers/enums";

const $root = ref(null);

const $emit = defineEmits(['submit'])

const props = defineProps<{
    modelValue: ProfileFormValuesType
}>()

const nameValid = ref<boolean>(false)

function valid(validity: boolean, name: string) {
    nameValid.value = validity
}

function submit() {
    let isValdid = true
    $root.value?.querySelectorAll('input').forEach((input:HTMLInputElement) => {
        input.value = input.value.trim()
        input.dispatchEvent(new Event('input')) //Trigger validation error display
        if (!input.validity) isValdid = false
        if (input.required && input.value === '') isValdid = false
    })
    if (isValdid) $emit('submit')
}

function availabilityOptions(): Record<Availabilty, string> {
    return availabilityMapping
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.profile-form {
    &__save {
        margin-top: 20px;
    }
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

</style>
