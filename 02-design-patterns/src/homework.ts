// Complejidad algorítmica O(n)
export const factorial = (n: number): number => {
    // Recursivad: ¡Condición de corte! -> infinite loop
    if(n <= 1) return 1 // 0! = 1 . 1! = 1
    return n * factorial(n-1)
}

factorial(1000)

export const fib = (n: number): number => {
    // O(n) ¿Cuantas operaciones tengo que hacer para resolver n elementos?
    /*
        Cantidad de operaciones que tiene que hace tu algoritmo para resolver el problema: O(2^n)
        n = 5 -> 2^5 = 32
        n = 6 -> 2^6 = 2^5 * 2 = 64
    */
    // 1, 2, 3, 4
    // 1, 1, 2 ,3 ,5 ,8 , 13 , ...
    if(n <= 2) return 1 // CASO BASE
    return fib(n-1) + fib(n-2)
}

/*

    {
        3: 2,
        4: 3
    }

*/
// Utility types
type MemoObject = Record<number, number>
// new Map()
const memoizedFib = (n: number, memo: MemoObject = {}) => {
    if(n <= 2) return 1
    if(n in memo) return memo[n]
    memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo)
    return memo[n]
}