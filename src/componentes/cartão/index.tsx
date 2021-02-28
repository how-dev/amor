import React from "react";
import "./index.css"

interface Props {
    Titulo: string,
    Conteudo: string,
    Links: any,
}

const Cartao: React.FC<Props> = ({ Titulo, Conteudo, Links }) => {
    return (
        <div className="Cartao">
            <h1>{ Titulo }</h1>
            <p>{Conteudo}</p>
            {Links && <Links />}
        </div>
    )
}

export default Cartao
