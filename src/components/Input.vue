<template>
    <div class="input" :class="{'has--error': !isValid}">
        <label v-if="name !== undefined" :for="props.id"> {{ name }}</label>
        <input type="text"
               autocomplete="off"
               :id="props.id"
               @input="validate"
               @blur="validate"
               @invalid="validate"
               :value="props.modelValue"
               :pattern="props.pattern"
               :required="props.required"
        >
        <span class="input__error" v-if="errorText">{{ errorText }}</span>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"


let errorText = ref<string>('')

let isValid = ref<boolean>(true)

const props = defineProps<{
    id: string
    name?: string
    modelValue: string | number | undefined | null
    valid?: boolean
    pattern: string
    errorTextRequired: string
    errorTextPattern: string
    required: boolean
}>()

const $emit = defineEmits(['enter', 'update:modelValue', 'valid'])

function validate(e: KeyboardEvent) {
    const $input = e.currentTarget as HTMLInputElement
    isValid.value = $input.validity.valid
    $emit('update:modelValue', $input.value)
    $emit('valid', isValid)
    errorText.value = ''

    if (!isValid.value) {
        errorText.value = props.errorTextPattern
    }

    if (!$input.value) {
        errorText.value = props.errorTextRequired
    }
}

</script>

<style scoped lang="scss"></style>
