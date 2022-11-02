// =======** Setar nome de usuário **==========================
// const element = document.querySelector("#lblName");
const nome = localStorage.getItem("clientName")

document.getElementById("lblName").innerHTML = `<h2>${nome}</h2>`

var otherCheckbox = document.querySelector('entrada [valor = "outro"]')
var otherText = document.querySelector('input [id = "otherValue"]')
// otherText.style.visibility = 'oculto'

// otherCheckbox.onchange = function () {
//   if (otherCheckbox.checked) {
//     otherText.style.visibility = 'visible'
//     otherText.value = ''
//   } else {
//     otherText.style.visibility = 'hidden'
//   }
// }


// =======** Tamanho da Pizza **===============================

function tamPizza(id) {
  if(id === "pequena"){
    document.getElementById("media").checked = false
    document.getElementById("grande").checked = false
    mudarPreco("15,00", "9,00", "15,00", "10,00", "18,00");
  } else if( id === "media"){
    document.getElementById("pequena").checked = false
    document.getElementById("grande").checked = false
    mudarPreco("23,00", "18,00", "28,00", "20,00", "30,00");
  } else {
    document.getElementById("pequena").checked = false
    document.getElementById("media").checked = false
    mudarPreco("33,00", "35,00", "40,00", "35,00", "42,00");
  }
}

// =======** Mudar preço da Pizza **============================
function mudarPreco(valAtum, valCalabresa, valMarguerita, valPortuguesa, valMussarela) {
  document.getElementById("valorAtum").innerText = `R$${valAtum}`;
  document.getElementById("valorCalabresa").innerText = `R$${valCalabresa}`;
  document.getElementById("valorMarguerita").innerText = `R$${valMarguerita}`;
  document.getElementById("valorPortuguesa").innerText = `R$${valPortuguesa}`;
  document.getElementById("valorMussarela").innerText = `R$${valMussarela}`;
}

// *** Fim Da Janela Modal do Carrinho *** =============

/// *** Pedido ======================

function checked(id, flavor, price) {
  let array = document.getElementById(`${price}`).innerText.split("$")
  array = array[1].replace(",", ".")
  array = parseFloat(array)
  const arrayChecked = {
    flavor: document.getElementById(`${flavor}`).innerText,
    price: array
  }
  return arrayChecked
}

////=================================Button

function mostraResultado() {
  const response = []
  const checkedIds = [
    'checkedAtum',
    'checkedCalabresa',
    'checkedMarguerita',
    'checkedPortuguesa',
    'checkedMussarela'
  ]

  for (const i of checkedIds) {
    if (document.getElementById(`${i}`).checked) {
      console.log(i)
      if (i === 'checkedAtum')
        response.push(checked('checkedAtum', 'atum', 'valorAtum'))
      if (i === 'checkedCalabresa')
        response.push(
          checked('checkedCalabresa', 'calabresa', 'valorCalabresa')
        )
      if (i === 'checkedMarguerita')
        response.push(
          checked('checkedMarguerita', 'marguerita', 'valorMarguerita')
        )
      if (i === 'checkedPortuguesa')
        response.push(
          checked('checkedPortuguesa', 'portuguesa', 'valorPortuguesa')
        )
      if (i === 'checkedMussarela')
        response.push(
          checked('checkedMussarela', 'mussarela', 'valorMussarela')
        )
    }
  }
  cadastroPedido(response);
}


async function cadastroPedido(pedidos) {
  // const url = "http://localhost:8080";
  const url = "https://api-menupizzaria.herokuapp.com";

  const clientId = localStorage.getItem("clientId");
  
  const response = await fetch(`${url}/order/register/${clientId}`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        "orderStatus": "WAITING_PAYMENT",
        "products": pedidos
      }),
  });
  const message = await response.json();
  if(response.status === 201) {
    localStorage.setItem("orderId", message["id"]);
    const sabores = pedidos.map((sabor) => sabor["flavor"]);
    localStorage.setItem("product", sabores);
    localStorage.setItem("total", message["total"]);
    window.location.href = "pagamento.html";
  } else {
      alert(message.mensage);
  }
     
}

function logout() {
  localStorage.removeItem("clientId");
  localStorage.removeItem("clientName");
}
