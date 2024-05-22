(() => {
  const numbers: number[] = [1,2,3]
  const moreNumbers : Array<number> = [4,5,6]
  moreNumbers.push(7)
  const products: string[] = ['Medias', 'Pantuflas', 'Camisetas', 'Cuellito']
  products.forEach((product) => {
    console.info('product to upper case', product.toUpperCase())
  })

  // Union types (union -> or logico)
  type StringOrNumber = string | number
  const otherProducts: StringOrNumber[] = ['Medias','Pantalones','Medialuncitas',Math.PI, NaN, '55']
  // convertir a numeros los valores que son convertibles ('55' -> 55, NaN -> 0, 'string' -> 0)
  const numberValues: number[] = otherProducts.map((value) => {
    if(typeof value === 'number') return value
    if(typeof value === 'string' && Number(value)) {
        return +value // convierte a number
    }
    return 0
  })
  console.log('numberValues', numberValues)
})()