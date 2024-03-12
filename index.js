localStorage.clear()

document.querySelectorAll('button')[0].addEventListener('click', () => {
    document.querySelectorAll('.popup')[0].style.display = "none"
})

const form = document.querySelectorAll('form')[0]
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let username = document.querySelectorAll('[name="username"]')[0].value
    let password = document.querySelectorAll('[name="password"]')[0].value

    const response = await fetch("https://fer-guias-back.vercel.app/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
    })
    if (response.status === 204) {
        errorLogin()
    } else {
        const data = await response.json()
        console.log(data);
        localStorage.setItem("Token", data.token)
        window.location.href = "form.html"
    }
})

function errorLogin() {
    document.querySelectorAll("span")[0].textContent = "Usuário ou senha invalidos. Tente novamente!"
    document.querySelectorAll("span")[0].style.color = "red"
    document.querySelectorAll('.popup')[0].style.display = "block"
}
