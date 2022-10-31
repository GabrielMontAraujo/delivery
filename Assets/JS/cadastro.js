const url = "http://localhost:8080";

async function cadastro() {
    const name = document.getElementById("NomeSobrenome");
    const phone = document.getElementById("Telefone");
    const email = document.getElementById("Email");
    const password = document.getElementById("pass");
    const repeatPassword = document.getElementById("passC");

    if(name.value && phone.value && email.value && password.value && repeatPassword.value) {
        if(password.value === repeatPassword.value) {
            const response = await fetch(`${url}/user/register`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                mode: "cors",
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    password: password.value,
                }),
            });
            const message = await response.json();
            if(response.status === 201) {
                window.location.href = "login.html";
            } else {
                alert(message.mensage);
            }
        } else {
            alert("Senhas diferentes");
        }
    }
}