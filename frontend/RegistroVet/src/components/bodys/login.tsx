import styles from "../../assets/styles/login.module.css"
import "../../../node_modules/normalize.css/normalize.css"

import Header from "../hf/defaultheader";
import Footer from "../hf/defaultfooter";

import MailIcon from "../../assets/images/mail-icon.png"
import lockInIcon from "../../assets/images/lock-icon.png"


export default function Login() {
    return (
        <div>
            <body>
                <Header/>
                <main>
                    <div className={styles.titleLogin}> 
                        <h1>LOGIN</h1>
                    </div>

                    <div className={styles.wrapperLoginBlock}>

                        <div className={styles.wrapperForm}>

                            <form className={styles.form} action="/login/user" method="post">

                                <div className={styles.emailPassword}>
                    
                                    <div className={styles.email}>
                                        <label htmlFor="inputEmail" id="textField"><img src={MailIcon} alt="Icone de carta"/></label>
                                        <input type="email" placeholder="Email" className={styles.inputEmail} name="email" required/>
                                    </div>
                    
                                    <div className={styles.password}>
                                        <label htmlFor="inputPassword" id="textField"><img src={lockInIcon} alt="Icone de cadeado"/></label>
                                        <input type="password" placeholder="Senha" className={styles.inputPassword} name="password" required/>
                                    </div>
                    
                                </div>
                    
                                <div className={styles.rememberPassword}>
                                    <input type="checkbox" className={styles.check} name="lembrarSenha" value="true"/>
                                    <label htmlFor="check" id="remember">Lembrar senha</label>
                                </div>
                    
                                <div className={styles.wrapperButtom}>
                                    <button type="submit" name="botao" className={styles.button} value="enviar">Login</button>
                                </div>

                            </form>

                        </div>

                        <div className={styles.wrapperForgotNewUser}>
                            <div className={styles.forgotMyPassword}>
                                <a href="">Esqueceu a senha?</a>
                            </div>

                            <div className={styles.wrapperRegister}>
                                <div className={styles.text}>
                                    <span>Ainda não tem uma conta?</span>
                                    <a href="/cadastro">Cadastre-se</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </body>
        </div>
    )
}