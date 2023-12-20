function ParImpar(numero) {
    if (numero % 2 == 0) {
      return "O número é par";
    } else {
      return "O número é ímpar";
    }
  }

  let res = ParImpar(8)

  console.log(res)
  
  // Exemplo de uso
  //console.log(verificarParOuImpar(4)); // Saída: O número é par
  //console.log(verificarParOuImpar(7)); // Saída: O número é ímpar