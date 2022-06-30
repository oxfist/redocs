const nombre = "Violeta";
console.log(nombre);

// Error: reasignación de una constante
nombre = "Isabel";

// Error: condición constante de un if
if (false) {
  console.log("Esto nunca ocurrirá nunca");
}

// Error: uso de una variable no definida
console.log("Esta variable no está definida: ", total);
