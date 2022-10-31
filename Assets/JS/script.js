var otherCheckbox = document.querySelector('entrada [valor = "outro"]')
var otherText = document.querySelector('input [id = "otherValue"]')
otherText.style.visibility = 'oculto'

otherCheckbox.onchange = function () {
  if (otherCheckbox.checked) {
    otherText.style.visibility = 'visible'
    otherText.value = ''
  } else {
    otherText.style.visibility = 'hidden'
  }
}

// =======** nro de pedidos no carrinho **===============================

var data = 0

function productSale() {
  data = data + 1
  const NroLabel = ''
  sendToCart()
  if (data > 0) {
    NroLabel = data
    document.getElementById('nroItem').innerText = NroLabel
    document.getElementById('lblCart__sale').innerText = data + response
  }
  empty()
}

function sendToCart(e) {
  const itemNro = document.querySelector('#nroItem')
  if (data > 0) {
    itemNro.classList.add('visible')
    full()
  } else {
    empty()
  }
}

function cart() {
  if (data == 0) {
    empty
  }
}

function empty(e) {
  const emptyCart = document.querySelector('.modalImage')
  emptyCart.classList.add('visible')

  const emptyCart2 = document.querySelector('#modalTitle')
  emptyCart2.classList.add('visible')
}

function full(e) {
  const fullCart = document.querySelector('.modalImage')
  fullCart.classList.remove('visible')

  const fullCart2 = document.querySelector('#modalTitle')
  fullCart2.classList.remove('visible')
}

// ======== *** * *** Janela Modal do Carrinho *** * *** ========

const btnModal = document.querySelector('.btn-primary')
btnModal.addEventListener('click', openModal)

function openModal(e) {
  const modalEl = document.querySelector('#modalExemplo')
  modalEl.classList.add('visible')
  cart()
}
const btnClose = document.querySelectorAll('#closeModal')
btnClose.forEach(fechaE1 => fechaE1.addEventListener('click', closeModal))

function closeModal(e) {
  const modalEl = document.querySelector('#modalExemplo')
  modalEl.classList.remove('visible')
}

// *** Fim Da Janela Modal do Carrinho *** =============

/// *** Pedido ======================

function checked(id, flavor, price) {
  const arrayChecked = {
    flavor: document.getElementById(`${flavor}`).innerText,
    price: document.getElementById(`${price}`).innerText
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
  productSale()
  console.log(NroLabel)
  console.log(response)
}
