import styles from "../../assets/styles/defaultheader.module.css"

import Image from 'next/image'
import logoHorizontal from "../../assets/images/logo-horizontal.png"

export default function Header() {
    return (
        <div className={styles.header}>
            <header>
                <div className={styles.barra}>
                    <div className={styles.wrapperLogo}>
                        <a href="/" className={styles.logoHorizontal}> 
                            <Image src={logoHorizontal} alt="Logotipo-horizontal" priority/> 
                        </a>
                    </div>
                    <div className={styles.wrapperLinks}>
                        <a href="/login">Login</a>
                        <a href="/cadastro">Cadastro</a>
                    </div>
                </div>
            </header>
        </div>
    )
}