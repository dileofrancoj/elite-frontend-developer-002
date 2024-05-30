import type { CharacterProps, Gender,Status } from "../types/Character";
import { type Filter } from "../types/Filter";
import { MaybeId } from "../types/Id";

type Characters = CharacterProps[]
export class NoFilter implements Filter<CharacterProps[]> {
    constructor() {}
    filter(characters: CharacterProps[]): CharacterProps[] {
        return characters
    }
}

export class GenderFilter implements Filter<Characters> {
    constructor(public gender: Gender) {}
    filter(characters: Characters) {
        return characters.filter((character) => character.gender === this.gender)
    }
}

export class StatusFilter implements Filter<Characters> {
    constructor(public status: Status) {}
    filter(characters: Characters) {
        return characters.filter((character) => character.status === this.status)
    }
}

// ¿Filtro generico? -> Problema
// ¿Donde llevamos esto? --> Al boton / filtro
type FilterName = Gender | Status
export interface FilterProps {
    id: MaybeId
    name: FilterName
    strategy: Filter<CharacterProps[]>
}

export const filters: FilterProps[] = [
    { name: 'Alive', id: 1, strategy:  new StatusFilter('Alive') },
    { name: 'Dead', id: 2 , strategy:  new StatusFilter('Dead') },
    { name: 'Female', id: 3, strategy:  new GenderFilter('Female') },
    { name: 'Male', id: 4, strategy:  new GenderFilter('Male') }
]

// filters.map((filter) => <Button ... />)
