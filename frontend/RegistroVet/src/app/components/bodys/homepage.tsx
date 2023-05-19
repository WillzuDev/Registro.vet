import styles from '@/styles/homepage.module.css'
import "@/reset"

import Image from 'next/image'
import organizacaoicon from "@/img/oraganizacao-icon.png"
import praticidadeicon from "@/img/praticidade-icon.png"
import integridadeicon from "@/img/integridade-icon.png"
import loginLogo from "@/img/login-logo.png"
import cadastroLogo from "@/img/cadastro-icon.png"
import vetimg from "@/img/vet-image.png"
import logoFirstBanner from "@/img/logo-vertical.png"

export default function Home() {
    return (
            <div>
                <main className={styles.main}>
                    <div className={styles.firstbanner}>
                        <div className={styles.vetimage}>
                            <Image src={vetimg} alt='veterinario' priority/>
                        </div>
                        <div className={styles.slogan}>
                            <div className={styles.logofirstbanner}> <Image src={logoFirstBanner} alt='logoPata'/> </div>
                            <span className={styles.sloganHome}> Uma melhor opção para registrar seus pacientes! </span>
                        </div>
                    </div>
                    <div className={styles.secondCard}>
                        <div className={styles.wrapperBenefic}>
                            <h2>BENEFÍCIOS</h2>
                        </div>
                        <div className={styles.wrappericons}>
                            <div className={styles.icons}>
                                <div className={styles.wrapperimage}> 
                                    <Image src={organizacaoicon} alt="organizacao icon"/>
                                </div>
                                    <p>Organização</p>
                            </div>
                            <div className={styles.icons}>
                                <div className={styles.wrapperimage}>
                                    <Image src={praticidadeicon} alt="praticidade icon"/>
                                </div>
                                    <p>Praticidade</p>
                            </div>
                            <div className={styles.icons}>
                                <div className={styles.wrapperimage}>
                                    <Image src={integridadeicon} alt="integridade icon"></Image>
                                </div>
                                    <p>Integridade</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thirdCard}>
                        <div className={styles.wrapperStart}>
                            <h2 >Comece a usar!</h2>
                        </div>
                        <div className={styles.wrappericons}>
                            <div className={styles.icons}>
                                <div id="icon-login" className={styles.wrapperimage}>
                                    <Image src={loginLogo} alt="Login logo"/>
                                </div>  
                                <a href="/login">Login</a>
                            </div>
                            <div className={styles.icons}>
                                <div id="icon-cad" className={styles.wrapperimage}>
                                    <Image src={cadastroLogo} alt="Cadastro logo"/>
                                </div>
                                <a href="/cadastro">Cadastro</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.startuse}>
                        <div className={styles.wrappertext}></div>
                    </div>
                </main>
            </div>
)
}