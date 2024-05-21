
// IIFE (Función autoinvocada)
// pnpm > yarn > npm
(() => {
  const first_name: string = "franco"
  let lastname: string = 'di leo'
  lastname = 'otro apellido'
  const age: number = 30
  const dev: boolean = true
  let projects: any = 'Sistema de control de turnos'
  projects = false
  projects = ['Sistema de gestión', "papafrita", false, []]
  console.log('first_name, lastname', first_name, lastname)
  console.log('age', age)
})()