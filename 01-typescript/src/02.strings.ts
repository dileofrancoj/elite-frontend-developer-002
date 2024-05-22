(() => {
    const name: string = 'Guille'
    const lastname: unknown = Math.PI
    console.log(typeof lastname === 'string' && lastname.toLowerCase())
    const profession: string = 'Ing. en sistemas de información'
    let languages: any = "Typescript"
    const guille: unknown = {}
    console.log((languages as string).toString())
    console.log(name.toUpperCase())
    console.log(name.toLowerCase())
    let age: unknown = 30
    console.log((age as string).toUpperCase())
    // El alias confia en el desarrollador
    if(typeof lastname === 'string') {
        console.log((lastname).toUpperCase())
    }
    
    try {
        // error al no poder verificar la propiedad
        console.log("guille.name", guille)
    } catch (e) {
        console.error((e as string).toLowerCase())
        console.log('error', e)
    }

})()