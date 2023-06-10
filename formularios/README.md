# Anotações

[Documentação - Forms](https://pt-br.legacy.reactjs.org/docs/forms.html)


>> Componentes novos: Formulario.js

## Forms controlados (Permite pegar os valores em Real time)

> Pega os valores enquanto estiver digitando nos campos do formulário

```js

/*

===> Pegando o valor conforme for digitando utilizando o useState

O input tem duas propriedades que definem como fazê-lo ser controlado:

* 1ª propiedade = value -> Define valor padrão
* 2ª propriedade = evento onChange -> Sempre que digitar algo é capturado

e.target => Pega o próprio input 
e.target.value => Pega o valor digitado no input


*/



// Arquivo Formulario.js

// Importação do hook useState
import { useState } from "react";

export const Formulario = () => {

    // const [nomeField, setNomeField] = useState(''); // ('') Valor inicial = string vazia (Aplicação 1 input)
    

    // Serve para vários inputs (Criar um objeto com os names de cada input)
    const [fieldValue, setFieldValue] = useState({
        nome: "", // Valor inicial p/ nome VAZIO
        cidade: "", // Valor inicial p/ cidade VAZIO
        cpf: "", // Valor inicial p/ cpf VAZIO
        rg: "" // Valor inicial p/ rg VAZIO
    }); 


    // Função para capturar o texto digitado no input
    const handleChange = (e) => {
       // console.log(e.target.value);
       //setNomeField(e.target.value); // Atualiza o nomeField -> atualiza no value do input
       
       console.log(e.target.name, e.target.value); // Pega o nome e valor do input que está onChange e imprime no console

        setFieldValue({
            ...fieldValue, // valor do state é espalhado neste objeto
            [e.target.name]: e.target.value // atualiza as informações dinamicamente
        });
    }

    return (
        <div>
            <form>
                {/* Controle de State com apenas 1 state (Utilizando objeto) */}
                <input type="text" name="nome" value={fieldValue.nome} onChange={handleChange} />
                <input type="text" name="cidade" value={fieldValue.cidade} onChange={handleChange} />
                <input type="text" name="cpf" value={fieldValue.cpf} onChange={handleChange} />
                <input type="text" name="rg" value={fieldValue.rg} onChange={handleChange} />
            </form>
        </div>
    )
}



// Arquivo App.js

// Importação do componente
import { Formulario } from "./Formulario";

    // Utilizando o componente
    <Formulario />



```




## Forms não controlados (Não permite pegar os valores em Real time)

> Pega os valores apenas ao enviar o formulário (Geralmente não se utiliza)

```js

// Arquivo Formulario.js

/*

Hook useRef: Referência real do elemento no navegador. Serve para substituir o 'document.querySelector.../document.getElement...';

*/
import { useState, useRef } from "react";

export const Formulario = () => {

    // Serve para vários inputs (Criar um objeto com os names de cada input)
    const [fieldValue, setFieldValue] = useState({
        nome: "", // Valor inicial p/ nome VAZIO
        cidade: "" // Valor inicial p/ cidade VAZIO
    });


    // Usando o hooke useRef
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


    // Função que é chamada ao submeter o form
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


```
