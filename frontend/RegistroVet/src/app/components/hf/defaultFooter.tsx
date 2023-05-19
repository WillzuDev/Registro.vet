
import styles from "../../assets/styles/defaultfooter.module.css"

import Image from 'next/image'

import FaceLogo from "../../assets/images/face-logo.png"
import InstaLogo from "../../assets/images/insta-logo.png"
import TwitterLogo from "../../assets/images/twitter-logo.png"
import LogoVertical from "../../assets/images/logo-vertical.png"


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoFooter}> <Image src={LogoVertical} alt="logo registrovet" /> </div>

            <div className={styles.aboutUsSocials}>
                <div className={styles.aboutUs}>
                    <div className={styles.wrapperEmpresa}>
                        <h6 className={styles.Empresa}>EMPRESA</h6>
                        <a href="">
                            Sobre
                        </a>
                        <a href="">
                            Ajuda
                        </a>
                    </div>

                    <div className={styles.wrapperConectar}> 
                        <h6 className={styles.Conectar}>CONECTAR</h6>
                        <a href="">
                            Contate-nos
                        </a>
                    </div>
                </div>

                <div className={styles.socials}>
                    <a href="">
                        <Image src={FaceLogo} alt="Facebook-logo" className={styles.Facebook}/>
                    </a>
                    <a href="">
                        <Image src={InstaLogo} alt="Instagram-logo" className={styles.Instagram}/>
                    </a>
                    <a href="">
                        <Image src={TwitterLogo} alt="Twitter-logo" className={styles.Twitter}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}