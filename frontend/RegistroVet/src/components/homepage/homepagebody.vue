<template>
    <div>
        <main>
            <div id="first-banner">
        
                <div class= "vet-image"> </div>
        
                <div class="slogan">
                    <div id="logo-first-banner"></div>
                    <span> Uma melhor opção para registrar seus pacientes! </span>
                </div>
            </div>
        
            <div class="card-benefic">
                <div class="wrapper-benefic">
                    <h2>BENEFÍCIOS</h2>
                </div>
        
                <div class="wrapper-icons">
                    <div class="icons">
                        <div class="wrapper-image"> 
                            <img src="../../assets/images/oraganizacao-icon.png" alt="oraganizacao icon">
                        </div>
                        <p>Organização</p>
                    </div>
        
                    <div class="icons">
                        <div class="wrapper-image">
                            <img src="../../assets/images/praticidade-icon.png" alt="praticidade icon">
                        </div>
                        <p>Praticidade</p>
                    </div>
        
                    <div class="icons">
                        <div class="wrapper-image">
                            <img src="../../assets/images/integridade-icon.png" alt="integridade icon">
                        </div>
                        <p>Integridade</p>
                    </div>
                </div>
            </div>
        
            <div id="card-start-use" class="card-benefic">
                <div class="wrapper-benefic">
                    <h2>Comece a usar!</h2>
                </div>
        
                <div class="wrapper-icons">
                    <div class="icons">
                        <div id="icon-login" class="wrapper-image">
                            <img src="../../assets/images/login-logo.png" alt="Login logo">
                        </div>  
                        <a href="/login">Login</a>
                    </div>
        
                    <div class="icons">
                        <div id="icon-cad" class="wrapper-image">
                            <img src="../../assets/images/cadastro-icon.png" alt="Cadastro logo">
                        </div>
                        <a href="/cadastro">Cadastro</a>
                    </div>
                </div>
            </div>
        
            <div class="start-use">
                <div class="wrapper-text"></div>
            </div>
        </main>
    </div>
</template>

<style>
#first-banner {
    width: 100%;
    height: 30vh;
    background-color: #BDBECA;
    display: flex;
    align-items: center;
}

.vet-image {
    width: 55%;
    height: 100%;
    background: url(../../assets/images/vet-image.png) no-repeat center center ;
    background-size: cover;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slogan {
    width: 45%;
    height: 100%;
    background-color: #BDBECA;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.1rem 2rem 1.5rem 2rem;
}

#logo-first-banner {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/logo-vertical.png)  center center no-repeat;
    background-size: contain;
    display: flex;
}

.slogan span {
    color: #E6F3F3;
    font-size: 2rem;
    text-shadow: 1px 1px 2px #808080;
}

main{
    width:75%;
    margin: 0 12.5%;
    background-color: rgb(176, 170, 163);
}

main .card-benefic{
    display: flex;
    width: 100%;
    height: 17.6vh;
    background: #E6F3F3;
}

main .card-benefic h2 {
    font-family: "Blueberry";
    font-size: 50px;
}

main .card-benefic .wrapper-benefic{
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #5E6075;
}

main .card-benefic .wrapper-icons{
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
}

main .wrapper-icons{
    display: flex;
    align-items: center;
    justify-content: center;
}

main .wrapper-icons .icons{
    width: 30%;
    height: 100%;
    display: flex;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

main .wrapper-icons .icons .wrapper-image{
    width: 36%;
    height: 55%;
    border-radius: 5rem;
    background-color: #E6F3F3;
    display:flex;
    align-items: center;
    justify-content: center;
}

main .wrapper-icons .icons .wrapper-image img{
    width: 60%;
}

main .wrapper-icons .icons p{
    font-size: 1.7rem;
    color: #E6F3F3;
}

main .card-benefic:nth-child(2){
    display: flex;
    width: 100%;
    height: 20vh;
    background: #5F5F77;
}

main .card-benefic a{
    background: #5F5F77;
    font-size: 1.3rem;
    padding: 0 .3rem;
    text-decoration: none;
    color: #fff;
}

main .card-benefic:nth-child(2) h2{
    color: #E6F3F3;
}

#icon-login > img,
#icon-cad > img{
    width: 100%;
}
</style>