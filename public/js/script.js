let dolares = document.getElementById("dolares");
let ingresText = document.getElementById("textIngresar");
let btn = document.getElementById("btn");
let pesos = document.getElementById("pesos");
let mesesCupo = document.getElementById("mesesCupo");
let contenedor = document.getElementById("contenedor");
let btnMenu = document.getElementById("button-menu");
let mainNav = document.getElementById("nav-links");
const peso = 79.711;
const impuestoPais = (peso * 30) / 100;
const impuestoGanancia = (peso * 35) / 100;
const cambioDolar = peso + impuestoPais + impuestoGanancia;
const nuevaConsulta = () => {
  padre = dolares.parentNode;
  padre.removeChild(dolares);
  ingresText.innerHTML = dolares.value + " USD";
  btn.innerHTML = "Nueva Consulta";
  btn.addEventListener("click", function () {
    location.reload();
  });
};

const cupoMensual = () => {
  let restante;
  let extraccion;
  let mesesLlenos;
  let extraccionNula;
  if (dolares.value <= 200) {
    restante = 200 - dolares.value;
    extraccion = "Cupo disponible: " + restante + " dolares";
  } else if (dolares.value > 200) {
    mesesLlenos = Math.floor(dolares.value / 200);
    extraccion = "Cupo mensual excedido";
    if (mesesLlenos < 2) {
      extraccionNula = "Cupo completo por " + mesesLlenos.toFixed(0) + " mes";
    } else {
      extraccionNula = "Cupo completo por " + mesesLlenos.toFixed(0) + " meses";
    }
    let meses = document.createElement("p");
    let txtDos = document.createTextNode(extraccionNula);
    meses.appendChild(txtDos);
    mesesCupo.appendChild(meses);
  }
  let elemento = document.createElement("p");
  let txt = document.createTextNode(extraccion);
  elemento.appendChild(txt);
  contenedor.appendChild(elemento);
};
btnMenu.addEventListener("click", function () {
  if (mainNav.style.display === "block") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "block";
  }
});
btn.addEventListener("click", function () {
  let dolar = dolares.value;
  let precioFinal = dolar * cambioDolar;
  if (dolares.value >= 0 && dolares.value != "") {
    pesos.innerHTML = "Son $ " + precioFinal.toFixed(0);
    cupoMensual();
    nuevaConsulta();
  } else {
    alert("Ingrese valor valido");
  }
});
