<template>
    <div class="input" :class="{'has--error': !isValid}">
        <label :for="props.id"> {{ name }}</label>
        <input type="text"
               :id="props.id"
               @input="validate"
               @blur="validate"
               :value="props.modelValue"
               :pattern="props.pattern"
               required
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
    name: string
    modelValue: string | number | undefined | null
    valid?: boolean
    pattern: string
    errorTextRequired: string
    errorTextPattern: string
}>()

const $emit = defineEmits(['enter', 'update:modelValue', 'valid'])

function validate(e: KeyboardEvent) {
    const $input = e.currentTarget as HTMLInputElement
    isValid.value = $input.validity.valid
    $emit('update:modelValue', $input.value)
    $emit('valid', isValid)

    errorText.value = ''

    if (!isValid) {
        errorText.value = props.errorTextPattern
    }

    if (!$input.value) {
        errorText.value = props.errorTextRequired
    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
