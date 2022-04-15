import {Directive, DirectiveBinding, Ref, ref} from "vue";


const autocompleteDirective: Directive = {
    mounted: (el: HTMLElement, binding: DirectiveBinding) => {
        const visibleClassName = 'is--active'
        const list = binding.value as string[]
        const $input:HTMLInputElement | null = el.querySelector('input') as HTMLInputElement
        if ($input === null) return
        const $dropdown = document.createElement('ul')

        el.style.position = 'relative'

        $dropdown.classList.add('autocomplete__dropdown')

        el.appendChild($dropdown)

        $input.addEventListener('keydown', (e: Event) => {
            setTimeout(() => {
                while($dropdown.firstChild) {
                    $dropdown.lastChild ? $dropdown.removeChild($dropdown.lastChild) : 0
                }


                const typedText = $input.value.trim()
                if (typedText === ''){
                    $dropdown.classList.remove(visibleClassName)
                    return
                }

                list.filter(item =>
                    item.slice(0, typedText.length).toLowerCase() === typedText.toLowerCase()
                ).forEach(item => {
                        const $dropdownItem = document.createElement('li')
                        $dropdownItem.classList.add('autocomplete__item')
                        $dropdownItem.innerText = item
                        $dropdown.appendChild($dropdownItem)
                    })

                $dropdown.classList.add(visibleClassName)
            },20)
        })

        $dropdown.addEventListener('click', (e: Event) => {
            const clickedItem = e.target as HTMLUListElement
            $input.value = clickedItem.innerText
            $dropdown.classList.remove(visibleClassName)

        })

    }
}

export default autocompleteDirective