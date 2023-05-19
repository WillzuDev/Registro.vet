import dynamic from 'next/dynamic';


import Main from "@/comp/bodys/cadastro"
import Header from "@/comp/hf/defaultHeader"
import Footer from "@/comp/hf/defaultFooter"

export default function Home() {
return (
    <div>
        <div>
            <title>Registro.Vet</title>
        </div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
    )
}