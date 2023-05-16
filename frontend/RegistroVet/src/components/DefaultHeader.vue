<template>

    <header>
        <div id="wrapper-logo">
            <a href="/" id="logo-horizontal">
                <img src="../assets/images/logo-horizontal.png" alt="Logotipo-horizontal">
            </a>
        </div>
        <div id="wrapper-links">
            <a href="/login"> Login </a>
            <a href="/cadastro"> Cadastro </a>
        </div>
    </header>
    
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    text-decoration: none;
    font-family: "Geraldton";
}

@font-face {
    font-family: "Geraldton";
    src: url(../assets/fonts/GeraldtonRegular.otf);
}

@font-face {
    font-family: "Blueberry";
    src: url(../assets/fonts/Blueberry.ttf);
}

header {
    width: 100%;
    height: 10vh;
    background-color: #E6F3F3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.7rem;
}

header #wrapper-logo {
    width: 15%;
    height: 100%;
}

header #wrapper-logo #logo-horizontal img{
    width: 100%;
    height: 100%;
    background-size: cover;
    text-align: center;
    display: flex;
}

#wrapper-links {
    display: flex;
    gap: 1rem;
}

#wrapper-links a {
    font-size: 1.5rem;
    color: #5E6075;
}
</style>