function ParImpar(numero) {
    if (numero % 2 == 0) {
        return 'É Par!'
    } else {
        return 'É Impar'
    }
}

let res = ParImpar(8)

console.log(res)