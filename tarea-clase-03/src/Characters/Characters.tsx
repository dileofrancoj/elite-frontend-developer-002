import * as React from 'react' // {}
import { CharacterProps, FetchedCharacterProps } from "../types/Character"
import { getCharacters } from '../services/character'
import { Character } from '../Character/Character'
import { FilterCharacters } from '../FilterCharacters/FilterCharacters'
import { useFilterCharacters } from '../hooks/useFilterStrategy'

// JSX.Element
// React.FC<T> --> agrega un children a las props
// React.ReactNode
export const Characters= () => {
    const [characters, setCharacters] = React.useState<CharacterProps[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const {filteredCharacters, changeFilterStrategy}  = useFilterCharacters(characters) // sirve para filtro en memoria
    React.useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getCharacters()
                const response = data as FetchedCharacterProps
                setCharacters(response.results)
            } catch (e) {
                console.error(e)
                // manejar un estado de error
                // console.error()
                // loguear el problema -> Sentry / DD // Ki... 
                // sentryHub.captureException()
            } finally {
                setLoading(false)
            }
        }
        
        fetch()
    }, [])
    if(loading) return <span>Cargando...</span>
  return (
    <>
        <FilterCharacters changeFilterStrategy={changeFilterStrategy} />
        <div style={{marginTop:"42px"}}>
            {filteredCharacters().map((character) => (
                <Character key={character.id} {...character} />
            ))}
        </div>
    </>
  )
}
