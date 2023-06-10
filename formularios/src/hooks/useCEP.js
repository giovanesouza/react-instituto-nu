/*
Um hook não retorna um componente, mas sim apenas DADOS.

Toda vez que atualizar e alguém invocar o hook useCEP -> passar um novo CEP, o useEffect é chamado -> faz a requisição que por sua vez atualizará o state do endereço.

O return retorna o endereço completo

*/ 

// Importação dos Hooks useState e useEffect
import { useState, useEffect } from "react";

// Importação do context
import { useSettingContext } from "../App";

// Sempre que este HOOK for invocado deve-se passar o parâmetro
export const useCEP = (cep) => {

    // Disponibilizando informações de forma dinâmica => state
    const [endereco, setEndereco] = useState({}); // O objeto só é preenchido ao finalizar requisição

    // Invoca o contexto
    const value = useSettingContext(); 

    // Função para buscar o CEP
    const fetchCEP = (cep) => {

        // Concatenação do value.cepUrlBase passado via context
        fetch(`${value.cepUrlBase}ws/${cep}/json/`) // Pega as informações
            .then(dados => dados.json()) // Converte os dados para JSON (Só é possível ver na aba NETWORK - FETCH/XHR)
            .then(endereco => {
                // console.log(endereco);
                setEndereco(endereco);
            }); // Pega o endereço e imprime (console e na pág com mudança de state)

    }


    // Toda vez que o componente for carregado pela primeira vez, faz uma requisição no via CEP com o CEP passado
    useEffect(() => {
        // Invoca a função com um CEP passado via Parâmetro
        fetchCEP(cep);
    }, [cep]); // Sempre que chegar um CEP NOVO -> CHAMA o useEffect


    // Retorna o endereço completo
    return endereco;
}