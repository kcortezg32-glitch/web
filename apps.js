// ==========================================
// Laboratorio 3: Fundamentos de JavaScript
// ==========================================

// --- Variables (let/const) ---
const nombrePagina = "Agencia de Viajes";
let numeroPaquetes = 0;

// --- Arreglo de objetos ---
const paquetes = [
  { nombre: "Isla Colón", precio: 250.00 },
  { nombre: "Panamá viejo", precio: 90.00 },
  { nombre: "Tour Cinta Costera", precio: 35.00 },
];

numeroPaquetes = paquetes.length;

console.log(`Página: ${nombrePagina}`);
console.log(`Número de paquetes turísticos: ${numeroPaquetes}`);

// función
function calcularTotal(precio, personas) {
  return precio * personas;
}
console.log("----- Detalle de cotización (2 personas por paquete) -----");

for (let i = 0; i < paquetes.length; i++) {
  const paquete = paquetes[i];
  const personas = 2;
  const total = calcularTotal(paquete.precio, personas);

  if (total > 400) {
    console.log(`${paquete.nombre}: $${total.toFixed(2)} (paquete premium)`);
  } else {
    console.log(`${paquete.nombre}: $${total.toFixed(2)}`);
  }
}
console.log("----- Recorriendo el catálogo con while -----");

let indice = 0;
while (indice < paquetes.length) {
  console.log(`${indice + 1}. ${paquetes[indice].nombre} - $${paquetes[indice].precio.toFixed(2)}`);
  indice++;
}

// --- Ejemplo suelto usando la función calcularTotal ---
const totalEjemplo = calcularTotal(180.00, 3);
console.log(`Ejemplo: 3 personas a $180.00 c/u = $${totalEjemplo.toFixed(2)}`);