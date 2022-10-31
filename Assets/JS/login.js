const url = "http://localhost:8080";

async function login() {
    const email = document.getElementById("Mail");
    const password = document.getElementById("pass");
    console.log(email.value)
    console.log(password.value)
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
        const message = await response.text();
        if(response.status === 200) {
            window.location.href = "home.html";
        } else {
            // const msg = message.split(":")[1].replace("}", "");
            alert(message);
        }
    }
}