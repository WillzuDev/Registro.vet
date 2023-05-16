<template>
    <footer>
        <div id="logo-footer"> </div>

    <div class="about-us-socials">
        <div class="about-us">
            <div id="wrapper-empresa"> 
                <h6 id="Empresa">EMPRESA</h6> 
                <a href="">
                    Sobre
                </a>
                <a href="">
                    Ajuda
                </a>
            </div>

            <div id="wrapper-conectar"> 
                <h6 id="Conectar">CONECTAR</h6>
                <a href="">
                    Contate-nos
                </a>
            </div>
        </div>

        <div class="socials">
            <a href="">
                <img src="../assets/images/face-logo.png" alt="Facebook-logo" id="Facebook">
            </a>
            <a href="">
                <img src="../assets/images/insta-logo.png" alt="Instagram-logo" id="Instagram">
            </a>
            <a href="">
                <img src="../assets/images/twitter-logo.png" alt="Twitter-logo" id="Twitter">
            </a>
        </div>
    </div>
    </footer>
</template>

<style>
footer {
    width: 75%;
    height: 20vh;
    background-color: #A0A1B2;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 0 0 3.4rem;
    -webkit-box-shadow: 0px -5px 5px 0px rgba(203,203,203,1);
    -moz-box-shadow: 0px -5px 5px 0px rgba(203,203,203,1);
    box-shadow: 0px -5px 5px 0px rgba(203,203,203,1);
    margin: 0.7rem 12.5% 0 12.5%;
}

.about-us-socials {
    gap: 3rem;
}

.about-us{
    display: flex;
    gap: 3rem;
}

#wrapper-empresa, #wrapper-conectar {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

#wrapper-empresa a, #wrapper-conectar a {
    text-decoration: none;
    color: #000000;
}

#Empresa, #Conectar {
    font-size: 1.1rem;
    color: #ABD8D3;
}

#logo-footer {
    width: 10%;
    height: 80%;
    background: url(../assets/images/logo-vertical.png)  center center no-repeat;
    background-size: contain;
    display: flex;
}

.socials {

    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 0 0 0 ;
}

#Facebook, #Instagram, #Twitter {
    width: rem;
    height: 2rem;
}
</style>