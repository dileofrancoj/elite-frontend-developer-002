// Filter<CharacterProps[]> --> filter(characters) => characters
// Filter<ProductProps[]> --> filter(products) => products

export interface Filter<T> {
    filter: (props: T) => T
}

// filtro personajes Filter<CharacterProps>
// clase.filter(characters): CharacterProps[]