const users = {};

document.addEventListener("DOMContentLoaded", function() {
    // Lógica de login
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");
        
        // Verifica se o usuário e a senha são válidos
        if (users[username] && users[username] === password) {
            alert("Login bem-sucedido!");
            // Redireciona para a página após o login bem-sucedido
            window.location.href = "https://paulovitorazzariti.github.io/Area-de-Mombros-New-Max/";
        } else {
            errorMessage.textContent = "Usuário ou senha inválidos!";
            errorMessage.style.color = "red";
        }
    });

    // Lógica de cadastro
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        const registerMessage = document.getElementById("register-message");

        // Verifica se o e-mail fornecido é um e-mail válido do Gmail
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(newUsername)) {
            registerMessage.textContent = "Por favor, insira um e-mail válido do Gmail!";
            registerMessage.style.color = "red";
        } else if (users[newUsername]) {
            registerMessage.textContent = "Usuário já existe!";
            registerMessage.style.color = "red";
        } else {
            // Adiciona o novo usuário ao objeto users
            users[newUsername] = newPassword;
            alert("Cadastro realizado com sucesso!");
            // Após cadastro, volta para a tela de login
            showLogin();
        }
    });
});

// Função para mostrar o formulário de cadastro
function showRegister() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".register-container").style.display = "block";

      
    // Modificar os placeholders na tela de cadastro
    document.getElementById("newUsername").setAttribute("placeholder", "Digite seu Email");
    document.getElementById("newPassword").setAttribute("placeholder", "Digite sua senha");
}

// Função para mostrar o formulário de login
function showLogin() {
    document.querySelector(".register-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";

     // Modificar os placeholders na tela de login
     document.getElementById("username").setAttribute("placeholder", "Usuário");
     document.getElementById("password").setAttribute("placeholder", "Senha");
}

// Expõe as funções para que possam ser usadas no HTML
window.showRegister = showRegister;
window.showLogin = showLogin;



document.body.style.background = "#1E1E2E";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

document.body.innerHTML = `
    <div class="container">
        <div class="logo"><img src="img/Logo Nex Max.png" alt="Logo do Cliente" onerror="this.style.display='none'"></div>
        <div class="panel login-container">
            <h2>LOGIN</h2>
            <form id="loginForm">
                <input type="text" id="username" placeholder="Usuário">
                <input type="password" id="password" placeholder="Senha">
                <button type="submit">ENTRAR</button>
                <p id="error-message"></p>
            </form>
            <p>Não tem conta? <a href="#" onclick="showRegister(); return false;">Cadastre-se</a></p>
        </div>
        <div class="panel register-container" style="display: none;">
            <h2>CADASTRO</h2>
            <form id="registerForm">
                <input type="text" id="newUsername" placeholder="Usuário">
                <input type="password" id="newPassword" placeholder="Senha">
                <button type="submit">CADASTRAR</button>
                <p id="register-message"></p>
            </form>
            <p>Já tem conta? <a href="#" onclick="showLogin(); return false;">Faça login</a></p>
        </div>
    </div>
`;

document.head.innerHTML += `
    <style>
        .container {
            background:#000d1e;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(20, 183, 242, 0.5);
            text-align: center;
            color: white;
        }
        .panel {
            margin-top: 20px;
        }
        input {
            display: block;
            margin: 10px auto;
            padding: 10px;
            width: 80%;
            border-radius: 5px;
            border: none;
            background: #44475A;
            color: white;
        }
        button {
            background:rgb(25, 242, 246);
            color: black;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 85%;
        }
        a {
            color: #8BE9FD;
            text-decoration: none;
        }
        img {
            max-width: 100px;
            display: block;
            margin: 0 auto 20px;
        }

        body {
        background-color: #000d1e;
    }
    </style>
`;