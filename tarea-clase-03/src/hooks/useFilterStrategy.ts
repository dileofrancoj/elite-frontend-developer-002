import * as React from 'react'

import type { Filter } from '../types/Filter'
import type { CharacterProps} from '../types/Character'
import { NoFilter } from '../utils/filterCharacters'

interface UseFilterCharacters {
    filteredCharacters: () => CharacterProps[]
    changeFilterStrategy: (strategy: Filter<CharacterProps[]>) => void // no devuelve porque setea el estado
}

type StrategyType = Filter<CharacterProps[]>

export const useFilterCharacters = (characters: CharacterProps[]): UseFilterCharacters => {
    const [filterStrategy, setFilterStrategy] = React.useState<Filter<CharacterProps[]>>(new NoFilter())
    // Devuelve: (personajes filtrados en base a un criterio, setter de filtro)
    
    const changeFilterStrategy = React.useCallback((strategy: StrategyType) => {
        setFilterStrategy(strategy)
    }, [setFilterStrategy])

    const filteredCharacters = () => {
        return filterStrategy.filter(characters)
    }

    return {
        changeFilterStrategy,
        filteredCharacters
    }
}