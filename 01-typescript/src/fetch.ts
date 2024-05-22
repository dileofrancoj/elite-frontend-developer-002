(async () => {
  interface Pokemon {
    abilities: unknown[]
    base_experience: number
    name: string
    id: number
    height: number
  }
  const getById = async <T>(ep: string, id: number): Promise<T> => {
    const response = await fetch(`${ep}/${id}`)
    const data = await response.json()
    return data
  }

  const pokemon = await getById<Pokemon>('https://pokeapi.co/api/v2/pokemon/', 1)
  console.log('pokemon', pokemon.name)
  // use(ep, fetcher) -> axios
  // useAxios<T>(ep)
})()
