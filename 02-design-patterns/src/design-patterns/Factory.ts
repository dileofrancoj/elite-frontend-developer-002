interface Product {
    name: string
    price: number
    description: string
}

class BaseProduct implements Product {
 constructor(public name: string, public price: number, public description: string) {}
 
 get getName(): string {
    return this.name
 }
}

interface ProductFactory {
    createProduct(props: Product): Product
}

type ElectronicProductProps = Omit<Product, 'description'>

export class ElectronicProduct implements ProductFactory {
  createProduct(props: ElectronicProductProps): Product {
      const description = 'Magic electronic product'
      return new BaseProduct(props.name, props.price, description)
  }  
}

type WorkshopProps = Pick<Product, 'name' | 'description'>
export class Workshop implements ProductFactory {
    createProduct(props: WorkshopProps): Product {
        const price = 0
        return new BaseProduct(props.name, price, props.description)
    }
}

const macbook = new ElectronicProduct().createProduct({name : 'Macbook', price: 1000})
const regresionLineal = new Workshop().createProduct({name: 'Regresión lineal', description: 'Un workshop atr'})
console.log(regresionLineal.name)