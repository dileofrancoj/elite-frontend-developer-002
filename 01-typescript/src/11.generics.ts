(() => {
    /*
      
    */

    // type AnyType = string | number | boolean | unknown
    const print = <T>(arg: T): T => {
        return arg
    }

    const otherPrint = (arg: unknown): unknown => {
        return arg
    }
    // const someValue = otherPrint('papafrita')

    const returnedValue = print<string>('fran')
    console.log(returnedValue.toString())

    // EJEMPLO DE AGUS
    function getSecondArg<T, U>(a: T, b: U): U {
        return b;
    }
    
    const a = getSecondArg<number, string>(1, 'a') // lo que retorna es un string
    // a is a string
    
    const b= getSecondArg<string, number>('1', 2)// lo que retorna es un numero
    // b is a number
})()