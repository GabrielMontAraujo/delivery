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

function mostraResultado() {
  let contador = 0

  const totaItem = document.querySelectorAll('.pizzasabor').length

  console.log(totaItem)
}
