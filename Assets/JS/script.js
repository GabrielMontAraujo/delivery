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

function checked(id, flavor, price) {
  const arrayChecked = {
    "flavor": document.getElementById(`${flavor}`).innerText,
    "price": document.getElementById(`${price}`).innerText,
  };
  return arrayChecked;
}

////=================================Button

function mostraResultado() {
  const response = [];
  const checkedIds = ["checkedAtum", "checkedCalabresa", "checkedMarguerita", "checkedPortuguesa", "checkedMussarela"];

  for (const i of checkedIds) {
    if(document.getElementById(`${i}`).checked){
      console.log(i)
      if(i === "checkedAtum")
        response.push(checked("checkedAtum", "atum", "valorAtum"));
      if(i === "checkedCalabresa")
        response.push(checked("checkedCalabresa", "calabresa", "valorCalabresa"));
      if(i === "checkedMarguerita")
        response.push(checked("checkedMarguerita", "marguerita", "valorMarguerita"));
      if(i === "checkedPortuguesa")
        response.push(checked("checkedPortuguesa", "portuguesa", "valorPortuguesa"));
      if(i === "checkedMussarela")
        response.push(checked("checkedMussarela", "mussarela", "valorMussarela"));
    }
  }
  console.log(response);
}
