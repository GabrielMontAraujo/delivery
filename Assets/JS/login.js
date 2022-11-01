const url = "https://api-menupizzaria.herokuapp.com";
// const url = "http://localhost:8080";

async function login() {
    const email = document.getElementById("Mail");
    const password = document.getElementById("pass");
    if(email.value && password.value) {
        const response = await fetch(`${url}/user/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({email: email.value, password: password.value}),
        });

        if(response.status === 200) {
            const message = await response.json();
            localStorage.setItem("clientId", message["id"]);
            localStorage.setItem("clientName", message["name"]);
            window.location.href = "home.html";
        } else {
            const resp = await response.text();
            alert(resp);
        }
    }
}