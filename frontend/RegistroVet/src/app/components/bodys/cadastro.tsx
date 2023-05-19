import styles from "@/styles/cadastro.module.css"
import "@/reset"

import Image from 'next/image'
import nomeCompletoIcon from "@/img/nomeCompleto-icon.png"
import MailIcon from "@/img/mail-icon.png"
import lockInIcon from "@/img/lock-icon.png"


export default function sendRegisterForm() {
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const user = 
    //     {
    //         name: event.target.inputName.value,
    //         email: event.target.inputEmail.value,
    //         password: event.target.inputPassword.value,
    //     };

    //     const JSONdata = JSON.stringify(user);

    //     const endpoint = 'http://localhost:8080/api/cadastro';

    //     const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSONdata,
    //     };

    //     const response = await fetch(endpoint, options);

    //     const result = await response.json();
    //     alert(`Is this your full name: ${result.user}`);
    // };
    return (
        <div>
            <div>
                <title>Cadastro</title>
            </div>
            <div>
                <main className={styles.main}>
                    <div className={styles.titleCadastro}>
                        <h1>CADASTRO</h1>
                    </div>

                    <div className={styles.wrapperCadastro}>

                        <form className={styles.wrapperUser} onSubmit={sendRegisterForm}>
                            <div className={styles.form}>
                                <div className={styles.name}>
                                    <label htmlFor="inputName" className={styles.textField}><Image src={nomeCompletoIcon} alt="Icone de pessoa"/></label>
                                    <input type="text" placeholder="Digite seu nome" className={styles.inputName} required name="inputName"/>
                                </div>

                                <div className={styles.email}>
                                    <label htmlFor="inputEmail" className={styles.textField}><Image src={MailIcon} alt="Icone de carta"/></label>
                                    <input type="email" placeholder="Email" className={styles.inputEmail} required name="inputEmail" />
                                </div>

                                <div className={styles.password}>
                                    <label htmlFor="inputPassword" className={styles.textField}><Image src={lockInIcon} alt="Icone de cadeado"/></label>
                                    <input type="password" placeholder="Senha" className={styles.inputPassword} required name="inputPassword"/>
                                </div>
                            </div>

                            <div className={styles.wrapperCadastrarButton}>
                                <button type="submit" name="botao" className={styles.cadastrarButton} value="enviar">Cadastrar</button>
                            </div>
                        </form>

                        <div className={styles.wrapperAlreadyUser}>
                            <div className={styles.text}>
                                <span>Já tem uma conta?</span>
                                <a href="/login">Faça login</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}