type StringorUndefined = string | undefined
(() => {
    type Profiles = 'senior' | 'mid' | 'junior'
    enum PROFILES {
        'SENIOR' = 'Senior',
        'MID' = 'Mid',
        'JUNIOR' = 'Junior'
    }
    const checkProfiles = {
        [PROFILES.JUNIOR]: 'es jr!!! 😊',
        [PROFILES.MID] : 'es ssr',
        [PROFILES.SENIOR]: 'Es senior!!'
    }

    
    const formatText = (str: StringorUndefined): string => {
        if(str === undefined) return ''
        return str
        // si es undefined retornar '' y sino retornar el texto
    }
    window.addEventListener('DOMContentLoaded', () => {
        const btn: HTMLButtonElement | null = document.querySelector("#btn")
        const input: HTMLInputElement | null = document.querySelector("#profile")

            function onButtonClick(): void {
                const inputValue: StringorUndefined = input!.value
                const val = formatText(inputValue) // '' o lo que ponga el user
                alert(checkProfiles[val as PROFILES])
            }
            if(btn !== null) {
                btn.addEventListener('click', onButtonClick)
            }
            
    })

})()