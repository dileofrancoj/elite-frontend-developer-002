import React from 'react'
import { CharacterProps } from "../types/Character"
import type { Filter } from "../types/Filter"
import { filters } from "../utils/filterCharacters"
import { ButtonFactory } from '../Buttons/Button'

interface FilterCharacterProps {
  changeFilterStrategy: (strategy: Filter<CharacterProps[]>) => void
}

const Component: React.FC<FilterCharacterProps> = ({ changeFilterStrategy }) => {
  return (
    <>
   {filters.map((filter) => (
    <span key={filter.id} style={{marginRight:'8px'}}>
      <ButtonFactory onClick={() => changeFilterStrategy(filter.strategy)} buttonType='basic'>
      {filter.name}
      </ButtonFactory>
      {/* <button onClick={() => changeFilterStrategy(filter.strategy)}>{filter.name}</button> */}
    </span>
   ))}
    </>
  )
}

export const FilterCharacters = React.memo(Component)