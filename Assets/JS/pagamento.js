// Lista de sabores.
const sabores = localStorage.getItem("product");
document.getElementById("sabores").innerText = sabores + ".";

// Total da pizza
const total = localStorage.getItem("total");
const totalNumber = parseFloat(total).toFixed(2).replace(".", ",");
document.getElementById("totalPagar").innerText= "R$ " + totalNumber;

