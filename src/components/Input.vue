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

label {
    display: block;
    text-transform: capitalize;
    margin-bottom: 3px;
}

.input {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 20px;

    &.has--error {
        input {
            border-color: #B40000;
            color: #B40000;
        }
    }

    input {
        border-width: 1px;
        border-color: #333;
        width: calc(100% - 16px);
        height: 40px;
        max-width: 640px;
        border-radius: 8px;
        box-shadow: none;
        appearance: none;
        outline: none;
        padding: 0 8px;
    }

    &__error {
        position: absolute;
        bottom: 0;
        line-height: 1;
        left: 0;
        color: #B40000;
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
