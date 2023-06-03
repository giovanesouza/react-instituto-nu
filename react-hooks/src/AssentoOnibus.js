// Importação do Hook useState e useEffect
import React, { useState, useEffect } from "react";

// Responsável por 1 assento (Componente com a sintaxe de Arrow Function)
const Assento = (props) => {

    // Desestruturação de array -> disabled = valor inicial | setDisabled = função que vai alterar o state
    const [disabled, setDisabled] = useState(false); // valor inicial = false -> Botão habilitado


    // Função para modificar o State
    const handleClick = () => {
        setDisabled(true);
    }


    /* Utilizando o useEffect:
            Sua declaração precisa estar depois da definição do componente e antes do componente em si 
     
     É uma função que aceita dois argumentos:
     
     * 1º arg -> Função que será invocada/executada toda vez que determinada informação mudar/acontecer um ciclo de vida do componente

     2º arg -> Especifica um momento do ciclo de vida. Array vazio [] = Vai ser invocado APENAS UMA VEZ (Sempre que o componente NASCER)

    Ex.: Invocar a função sempre que o disabled mudar (seja p/ false ou true) -> passar o disabled dentro do array -> [disabled]

     */

    // É invocado APENAS quando o componente NASCER
    useEffect(() => {
        console.log('Nasceu');
    }, [])


    // Será invocado SEMPRE que a informação DISABLED for ALTERADA 
    useEffect(() => {
        if (disabled) {
            console.log('Disabled alterou para', disabled);
        }
    }, [disabled])


    return (
        // Renderiza 1 assento com seu respectivo número
        <button
            className="assento"
            type="button"
            disabled={disabled}
            onClick={() => handleClick()} >

            {/* Operador ternário: Se o state estiver habilitado => mostra o número, caso desabilitado, mostra um X */}
            {disabled ? 'X' : props.pos}

        </button>
    )

}


// Componente responsável por cada fileira de assentos (4 assentos por fileira)
const Fileira = (props) => {
    return (
        <div className="fileira">
            {/* Monta as fileiras. Faz uma iteração com o array presente em AssentoOnibus.
            Fileira 1: assento 1: 1 + 0 = 1 | assento 2: 1 + 1 = 2 | assento 3: 1 + 2 = 3 | assento 4: 1 + 3 = 4 e assim por diante.
            */}
            {[0, 1, 2, 3].map((pos, index) => (
                <Assento key={index} pos={props.de + pos} />
            ))}
        </div>
    )
}

export const AssentoOnibus = () => {
    return (
        <div className="container">
            {/* array para fileiras - 1ª Fileira inicia com 1, segunda com o assento 5 e assim por diante. */}
            {[1, 5, 9, 13, 17].map((pos, index) => (
                <Fileira key={index} de={pos} />
            ))}
        </div>
    )
}