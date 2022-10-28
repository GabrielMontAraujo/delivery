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

////=================================Button

const totaItem = document.querySelectorAll('#lblSabor')

function mostraResultado() {
  let contador = 0

  while (contador < totaItem) {
    contador = contador++
    console.log(totaItem)
  }
}
