function sumaDigitos(n) {
  const digitosString = n.toString().split("");
  const digitos = digitosString.map(Number);
  const suma = digitos.reduce((suma, num) => suma + num, 0);

  return suma;
}

function raizDigital(n) {
  while (n > 9) {
    const sum = sumaDigitos(n);
    n = sum;
  }
  return n;
}

raizDigital(15);
