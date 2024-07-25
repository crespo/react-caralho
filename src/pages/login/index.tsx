import { useEffect, useState } from "react";
import "./styles.css";

import { IUsuario } from "../../models/Usuario";
import { Card } from "../../components/card/Card";

export default function TelaLogin(){

    const [usuario, setUsuario] = useState<IUsuario>({nome: "", email: "", senha: ""});

    useEffect(() => {
        console.log("Executado quando abre a página");
    }, []);

    const logar = () => {
        console.log(usuario);
    }

    return(
        <div>
            <input onChange={(event) => setUsuario({...usuario, nome: event.target.value})}></input>
            <input onChange={(event) => setUsuario({...usuario, email: event.target.value})}></input>
            <input onChange={(event) => setUsuario({...usuario, senha: event.target.value})}></input>
            <button className="identificacao" onClick={() => logar()}>Logar</button>

            <Card titulo="TESTE" descricao="Descrição teste" funcaoBotao={() => console.log("OI")}/>

            <button onClick={() => logar()}>TESTE</button>
        </div>
    );
}