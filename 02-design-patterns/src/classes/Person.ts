/*
    Factory -> Crear botones en DS
    Builder -> Crear objetos complejos (vendor)
    Strategy -> Filtros
    Observer -> 
*/

export interface PersonProps {
    name: string
    lastname: string
    work: string
    age: number
}

export class Person {
    constructor(protected props: PersonProps) {}

    public getName(): string {
        return `${this.props.name} ${this.props.lastname}`
    }

    public isOlder(): boolean {
        return this.props.age >= 18   
    }

}

const franco = new Person({name: 'fran', lastname: 'di leo', work:'dev', age: 30})
console.log(franco.getName())
console.log(franco.isOlder())
// Public props
