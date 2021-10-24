# Instruções de utilização

## Instalação do Site

## Histórico de versões

### [0.1.0] - 22/10/2021
#### Adicionado

**TELA HOME**

HTML

<!-- <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css\style.css">
    <title>PROJETO FRONT</title>
</head>
<body>
    <header>
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li>LOGIN</li>
                <li>CADASTRO</li>
            </ul>

        </nav>

    </header>

    <div class="container1"> 
        <h1>GESTÃO FÁCIL PARA SUA EMPRESA</h1> 
        <p>DE FORMA SIMPLES E INTUITIVA</p>
    </div>


<div class="container3">
       <img src="img/image1.png">
       <label id="texto">AUTONOMO EMPRESA</label>
    </div>
</body>
</html>

CSS

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    background-color: rgb(0, 71, 171, 0.2);
    font-family: 'Lato', sans-serif;
    font-size: 20px;

}
ul {
    list-style: none;
    display: flex;
}
li {
    margin: 0 30px;

}
nav{
    display: flex;
    justify-content: space-between;
    margin: auto 20px;
}
header {
    line-height: 50px;
    font-size: 20px;
    color: black;
    background-color: white;
}

.container1 {
    font-size: 25px;
    width: 1400px; 
    margin-left: auto;
    margin-right: auto; 
}

.container2 {
    width: 700px;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
}
.container2 { text-align: right; }

.container3 { 
    width:900px;
    height:800px;
    margin:auto;
    padding:20px;
    position: relative;
}
.conteiner1, p {
    margin-left: 40%;
}
#image {
    position: absolute;
  }
  
  #texto {
    position: absolute;
    font-size: 32px;
    left: 94px;
    top: 135px;
    line-height: 26.6;
    word-spacing: 260px;
  } -->

**TELA LOGIN**

<!-- <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tela de Login</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
    <meta name="author" content="Arthur Borges" />
    <meta name="description" content="Meu primeiro programa :D" />
  </head>
  <body>
    <div class="loginbox">
      <div class="logo">
        <img
          src="/img/profile.png"
          alt=""
        />
      </div>
      <div class="form">
        <label for="Login">Login</label>
        <br>
        <input type="text" name="usuario" />
        <br>
        <label for="Senha">Senha</label>
        <br>
        <input type="password" name="senha" />
        <br>
        <button onclick="Login()">Entrar</button>
        <br>
        <span onclick="esqueceuSenha()">Esqueceu sua senha?</span>
      </div>
    </div>
    <style>
      div.loginbox{
        margin: auto;
        padding: 9%;
        border: none;
        width: 50%;
        background-color:rgb(0, 71, 171, 0.3);
        text-align: center;
      }
      img{
        width: 30%;
        margin-bottom: 1%;
      }
      body {
        background-color:rgb(0, 71, 171, 0.5);
        font-family: "Lato", sans-serif;
        color: whitesmoke;
      }
      input{
        border: none;
        height: 1.5rem;
        background-color:rgb(0, 71, 171, 0.3);
        margin-top: 2%;
        margin-bottom: 2%;
      }
      span{
        cursor: pointer;
      }
      button{
        cursor: pointer;
        border: none;
        width: 10%;
        margin-bottom: 2%;
      }
    </style>
    <script>
      function Login(){
        var acesso = 0;
        var usuario = document.getElementsByName("usuario")[0].value;
        usuario = usuario.toLowerCase();
        var senha = document.getElementsByName("senha")[0].value;
        senha =  senha.toLowerCase();

        if (usuario == 'admin' && senha == '12345') {
          window.location ='/Teste.html';
          // aqui em cima é onde o login vai direcionar
          acesso = 1          
        }
        if (acesso == 0) {
          alert ("erro")
        }
      }
      function esqueceuSenha(){
        alert ('Contacte o Administrador')
      }
    </script>
  </body>
</html>-->
