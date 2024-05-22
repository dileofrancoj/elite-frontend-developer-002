(() => {
  // ¿Por qué no usar any?  -> Anula la funcionalidad del transpilador :( 
    let obj: any = {x : 0}
    obj.x = obj.x.toFixed(2)
    obj.foo()
    obj()
})()