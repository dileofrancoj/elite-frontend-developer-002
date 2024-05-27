import { Person, type PersonProps } from "./Person";

interface DevActions {
    code: () => string
}

interface I1 {
    props: string
}

interface DevProps extends DevActions {}

const cayoProps: PersonProps = {name: 'Cayo', lastname: 'Amin Legal', work: 'Mobile Dev', age: 24}

export class Dev extends Person implements DevProps {
    constructor(protected props: PersonProps) {
        // instanciar el constructor de la clase padre
        super(props)
    }

    public code() {
        return 'a codear se ha dicho :D'
    }
}

const cayoDev = new Dev(cayoProps)
console.log(cayoDev.code())