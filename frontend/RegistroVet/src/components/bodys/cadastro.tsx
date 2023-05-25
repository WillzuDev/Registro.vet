// import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

import styles from "../../assets/styles/cadastro.module.css"
import "../../../node_modules/normalize.css/normalize.css"

import Header from "../hf/defaultheader";
import Footer from "../hf/defaultfooter";

import nomeCompletoIcon from "../../assets/images/nomeCompleto-icon.png"
import MailIcon from "../../assets/images/mail-icon.png"
import lockInIcon from "../../assets/images/lock-icon.png"

export default function Cadastro() {

    const { register, handleSubmit} = useForm();

    const onSubmit = async (dataFromForm: any) => {
        try {
            const response = await axios.post("http://localhost:8080/api/cadastro", dataFromForm, {
                headers: {
                'Content-Type': 'application/json',
                }
            });
        
            if (response.status === 200) {
                window.location.href = '/login';
            } else {
                const errorMessage = response.data;
                alert('Ocorreu um erro: ' + errorMessage);
            }
        } catch (error: any) {
            alert(error.response.data);
        }
    };

    return (

        <div>
            <body>
                <Header/>

                <main>
                    <div className={styles.titleCadastro}>
                        <h1>CADASTRO</h1>
                    </div>

                    <div className={styles.wrapperCadastro}>
                        <form className={styles.wrapperUser} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.form}>
                                <div className={styles.name}>
                                    <label htmlFor="inputName" className={styles.textField}><img src={nomeCompletoIcon} alt="Icone de pessoa"/></label>
                                    <input type="text" placeholder="Digite seu nome" className={styles.inputName} {...register("name", {required: true})} />
                                </div>

                                <div className={styles.email}>
                                    <label htmlFor="inputEmail" className={styles.textField}><img src={MailIcon} alt="Icone de carta"/></label>
                                    <input type="email" placeholder="Email"  className={styles.inputEmail} {...register("email", {required: true})} />
                                </div>

                                <div className={styles.password}>
                                    <label htmlFor="inputPassword" className={styles.textField}><img src={lockInIcon} alt="Icone de cadeado"/></label>
                                    <input type="password" placeholder="Senha" className={styles.inputPassword} {...register("password", {required: true})}/>
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

                <Footer/>
            </body>
        </div>
    )
}