/*

*/

type MaybeId = string | number | undefined

type Person = {
    name: string
    lastname: string
}

type Programmer = Person & {
    portfolio: string
}

interface Task {
    id: MaybeId
    name: string
    completed: boolean
    endDate?: Date | string
}

type Estimation = 'easy' | 'medium' | 'hard'

interface Author {
    name: string
    lastname: string
    githubURL?: string
}

interface ProgrammingTask extends Task {
    description: string
    estimation: number | Estimation
    author: Author
}

(() => {
  const tasks: Task[] = [
    { id: 1, name: 'aprender typescript', completed: false, endDate: '22/05/2024' },
    { id: 2, name: 'repasar vanilla', completed: false},
    { id: 3, name: 'pasarme a claro', completed: false},
    { id: 4, name: 'IR AL GYM Y COMER DESPUES UNA TORTA ...', completed: false},
  ]
  const [firstTask] = tasks
  console.log(firstTask?.endDate)

  const programmingTask: ProgrammingTask = {
    id: 1,
    name: 'ESLINT',
    completed: false,
    description: 'configurar eslint para el proyecto en NEXT 14 (SSR)',
    estimation: 'medium',
    author: {
        name: 'Isaias',
        lastname: 'Mella'
    }
  }

})()