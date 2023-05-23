import styles from "@/styles/cadastro.module.css"
import "@/reset"

import React from 'react';
// import { useForm } from 'react-hook-form';

import Image from 'next/image'
import nomeCompletoIcon from "@/img/nomeCompleto-icon.png"
import MailIcon from "@/img/mail-icon.png"
import lockInIcon from "@/img/lock-icon.png"

export default function sendRegisterForm() {

    return (
        <div>
            <div>
                <main className={styles.main}>
                    <div className={styles.titleCadastro}>
                        <h1>CADASTRO</h1>
                    </div>

                    <div className={styles.wrapperCadastro}>
                        <form className={styles.wrapperUser} method="POST" action="/api/cadastro">
                            <div className={styles.form}>
                                <div className={styles.name}>
                                    <label htmlFor="name" className={styles.textField}><Image src={nomeCompletoIcon} alt="Icone de pessoa"/></label>
                                    <input type="text" placeholder="Digite seu nome" className={styles.inputName} name="name" required/>
                                </div>

                                <div className={styles.email}>
                                    <label htmlFor="email" className={styles.textField}><Image src={MailIcon} alt="Icone de carta"/></label>
                                    <input type="email" placeholder="Email" className={styles.inputEmail} name="email" required/>
                                </div>

                                <div className={styles.password}>
                                    <label htmlFor="password" className={styles.textField}><Image src={lockInIcon} alt="Icone de cadeado"/></label>
                                    <input type="password" placeholder="Senha" className={styles.inputPassword} name="password" required/>
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