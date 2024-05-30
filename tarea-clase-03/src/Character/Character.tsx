import React from 'react'
import { CharacterProps } from '../types/Character'

export const Character: React.FC<CharacterProps> = ({name, id, image, status, gender}) => {
  return (
    <>
        <img style={{width: 100, borderRadius:"50%"}} src={image} />
        <h4>
            {id} - {name} - {status} - {gender} 
        </h4>
    </>
  )
}