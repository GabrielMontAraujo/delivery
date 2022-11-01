// =======** Setar nome de usuário **==========================
const nome = localStorage.getItem("clientName")

document.getElementById("lblName").innerHTML = `<h2>${nome}</h2>`

// =======** Lista de sabores **===============================
const sabores = localStorage.getItem("product");
document.getElementById("sabores").innerText = sabores + ".";

// =======** Total da pizza **=================================
const total = localStorage.getItem("total");
const totalNumber = parseFloat(total).toFixed(2).replace(".", ",");
document.getElementById("totalPagar").innerText= "R$ " + totalNumber;

// =======** Função Pagamento **===============================
async function pagamento() {
    // const url = "http://localhost:8080";
    const url = "https://api-menupizzaria.herokuapp.com";
  
    const orderId = localStorage.getItem("orderId");
    
    const response = await fetch(`${url}/payment/register/${orderId}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        mode: "cors",
    });
    const message = await response.json();
    if(response.status === 201) {
        localStorage.removeItem("product")
        localStorage.removeItem("total")
        localStorage.removeItem("orderId")
        alert("Pagamento feito com sucesso!");
        window.location.href = "home.html";
    } else {
        alert(message.mensage);
    }
       
}

function logout() {
    localStorage.removeItem("clientId");
    localStorage.removeItem("clientName");
    localStorage.removeItem("product")
    localStorage.removeItem("total")
    localStorage.removeItem("orderId")
}