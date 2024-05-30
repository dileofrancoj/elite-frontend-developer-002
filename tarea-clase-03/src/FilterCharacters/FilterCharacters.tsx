import React from 'react'
import { CharacterProps } from "../types/Character"
import type { Filter } from "../types/Filter"
import { filters } from "../utils/filterCharacters"

interface FilterCharacterProps {
  changeFilterStrategy: (strategy: Filter<CharacterProps[]>) => void
}

const Component: React.FC<FilterCharacterProps> = ({ changeFilterStrategy }) => {
  return (
    <>
   {filters.map((filter) => (
    <span key={filter.id} style={{marginRight:'8px'}}>
      <button onClick={() => changeFilterStrategy(filter.strategy)}>{filter.name}</button>
    </span>
   ))}
    </>
  )
}

export const FilterCharacters = React.memo(Component)