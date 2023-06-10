/*
Hook useRef: Referência real do elemento no navegador. Serve para substituir o 'document.querySelector.../document.getElement...';
*/
import { useState, useRef } from "react";

export const Formulario = () => {

    // const [nomeField, setNomeField] = useState(''); // ('') Valor inicial = string vazia (Aplicação 1 input)


    // Serve para vários inputs (Criar um objeto com os names de cada input)
    const [fieldValue, setFieldValue] = useState({
        nome: "", // Valor inicial p/ nome VAZIO
        cidade: "" // Valor inicial p/ cidade VAZIO
    });


    const fieldCidade = useRef(null); // Ao startar não reconhece o input
    // Popula a constante com o elemento DOM em si


    // Função para capturar o texto digitado no input
    const handleChange = (e) => {

        console.log(e.target.name, e.target.value); // Pega o nome e valor do input que está onChange e imprime no console

        setFieldValue({
            ...fieldValue, // valor do state é espalhado neste objeto
            [e.target.name]: e.target.value // atualiza as informações dinamicamente
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do form

        console.log(fieldCidade); // Exibe um objeto com as propriedades do input
        console.log(fieldCidade.current.value); // Pega o valor
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Controle de State com apenas 1 state (Utilizando objeto) */}
                <input type="text" name="nome" value={fieldValue.nome} onChange={handleChange} />
                
                {/* Ao renderizar os inputs, a referência (ref) do input cidade é guardada na constante indicada */}
                <input type="text" ref={fieldCidade} name="cidade"  />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}