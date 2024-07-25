import React from "react";

import "./styles.css";

interface ICard{
    titulo?: string,
    descricao?: string,
    funcaoBotao: VoidFunction
}

export function Card(propriedades: ICard){
    return(
        <div>
            <p>{propriedades.titulo}</p>
            <p>{propriedades.descricao}</p>
            <button onClick={() => propriedades.funcaoBotao()}>BOTÃO</button>
        </div>
    );
}