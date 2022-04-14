<template>
    <div class="radio__group" :class="{'has--error': !isValid}">
        <label class="radio__label">Select your availabilty</label>
        <div class="radio" v-for="(option, key) in props.options" :key="'radio-' + key">
            <input type="radio"
                   :value="key"
                   name="availability"
                   :id="key"
                   :checked="optionIsChecked(key)"
                   @change="inputChanged"

            >
            <label :for="key">{{ option }}</label>
        </div>

        <span class="input__error" v-if="errorText">{{ errorText }}</span>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"


let errorText = ref<string>('')

let isValid = ref<boolean>(true)

const props = defineProps<{
    modelValue: string
    options: Record<string, string>
}>()

const $emit = defineEmits(['update:modelValue'])

// const optionIsChecked: ((option: string) => boolean) = (option: string) => option === props.modelValue

function optionIsChecked(option: string): boolean {
    return option === props.modelValue
}

function inputChanged(e: Event) {
    $emit("update:modelValue", (e.currentTarget as HTMLInputElement).value)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.radio__label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}

.radio {
    cursor: pointer;
    margin-bottom: 3px;
    &:hover {
        cursor: pointer;
        label {
            color: #4262ff;
        }
    }

    label {
        cursor: pointer;
    }

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
        width: 100%;
        height: 40px;
    }

    &__error {
        position: absolute;
        bottom: 0;
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
