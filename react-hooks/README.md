# Anotações

[Documentação - API de referência dos Hooks](https://pt-br.legacy.reactjs.org/docs/hooks-reference.html)

>> Outras bibliotecas
<br/>
[React Hook Form](https://react-hook-form.com/)
<br/>
[React DnD Biblioteca de arrastar e soltar](https://react-dnd.github.io/react-dnd/about)


Componentes de forma dinâmica.

>> Componentes novos: AssentoOnibus.js, ViaCep.js

## State com componente em Classe e em Função

```js
import React from "react"

// Responsável por 1 assento (Componente com a sintaxe de Classe)
class Assento extends React.Component {

// Utilizar a palavra reservada this. para pegar propriedades.

    constructor(props) {
        super(props);
        // Estado inicial do componente
        this.state = {
            disabled: false // Botão vai estar habilitado
        }
    }

    handleClick() {
        this.setState({
            disabled: true // Botão fica desabilitado
        })
    }

    render() {
        return (
            // Renderiza 1 assento com seu respectivo número
            <button
                className="assento"
                type="button"
                disabled={this.state.disabled}
                onClick={() => this.handleClick()}>

                {/* Operador ternário: Se o state estiver habilitado => mostra o número, caso desabilitado, mostra um X */}
                {this.state.disabled ? 'X' : this.props.pos}

            </button>
        )
    }
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


// Arquivo App.js
import { AssentoOnibus } from "./AssentoOnibus";

      /* Utilizando o componente AssentoOnibus */
      <AssentoOnibus />

```


```css
/* CSS para as fileiras -> arquivo index.css */

/* Estilização componente AssentoOnibus */
.fileira {
display: flex;
}

.assento {
  list-style: none;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: green;
  color: #fff;
  margin: 2px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
}

/* Responsável em afastar os assentos centrais e formar o corredor */
.assento:nth-child(2) {
  margin-right: 20px;
}

/* Formatação quando o botão estiver desabilitado (assento selecionado ou já ocupado) */
.assento:disabled {
  background-color: #999;
  color: #ccc;
  cursor: not-allowed;
}

```



## Usando hook useState
```js

// Importação do Hook useState
import React, { useState } from "react";

// Responsável por 1 assento (Componente com a sintaxe de Arrow Function)
const Assento = (props) => {

    // Desestruturação de array -> disabled = valor inicial | setDisabled = função que vai alterar o state
    const [disabled, setDisabled] = useState(false); // valor inicial = false -> Botão habilitado

    
    // Função para modificar o State
    const handleClick = () => {
            setDisabled(true);
    }

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


```


## Ciclo de vida
>> Hook: useEffect

```js

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


```

## Operações assíncronas

[API Via CEP](https://viacep.com.br/)

```js

// App.js
import { ViaCep } from "./ViaCep";

      {/* Utilizando o componente ViaCep */}
      <ViaCep />


      // ViaCep.js
      
      // Importação dos Hooks useState e useEffect
import { useState, useEffect } from "react";

export const ViaCep = () => {

    // Disponibilizando informações de forma dinâmica => state
    const [endereco, setEndereco] = useState({}); // O objeto só é preenchido ao finalizar requisição

    // Função para buscar o CEP
    const fetchCEP = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`) // Pega as informações
            .then(dados => dados.json()) // Converte os dados para JSON (Só é possível ver na aba NETWORK - FETCH/XHR)
            .then(endereco => {
                console.log(endereco);
                setEndereco(endereco);
            }); // Pega o endereço e imprime (console e na pág com mudança de state)

    }


    // Toda vez que o componente for carregado pela primeira vez, faz uma requisição no via CEP com o CEP passado
    useEffect(() => {
        // Invoca a função com um CEP passado via Parâmetro
        fetchCEP('01001000');
    }, []); // Array vazio => Invoca apenas quando o componente nasce

    return (
        <table>
            <tbody>
                <tr>
                    <td>Bairro:</td>
                    <td>{endereco.bairro}</td>
                </tr>
                <tr>
                    <td>Complemento:</td>
                    <td>{endereco.complemento}</td>
                </tr>
                <tr>
                    <td>UF:</td>
                    <td>{endereco.uf}</td>
                </tr>
                <tr>
                    <td>Localidade:</td>
                    <td>{endereco.localidade}</td>
                </tr>
            </tbody>
        </table>
    )
}

```


## Criando seu próprio hook

>> Criação de pasta hooks para guardar todos os hooks criados
<br/>
>> Hook criado: useCEP.js

```js

// Criação do HOOK -> Pasta hooks >> Arquivo useCEP.js

/*
Um hook não retorna um componente, mas sim apenas DADOS.

Toda vez que atualizar e alguém invocar o hook useCEP -> passar um novo CEP, o useEffect é chamado -> faz a requisição que por sua vez atualizará o state do endereço.

O return retorna o endereço completo

*/ 

// Importação dos Hooks useState e useEffect
import { useState, useEffect } from "react";

// Sempre que este HOOK for invocado deve-se passar o parâmetro
export const useCEP = (cep) => {

    // Disponibilizando informações de forma dinâmica => state
    const [endereco, setEndereco] = useState({}); // O objeto só é preenchido ao finalizar requisição

    // Função para buscar o CEP
    const fetchCEP = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`) // Pega as informações
            .then(dados => dados.json()) // Converte os dados para JSON (Só é possível ver na aba NETWORK - FETCH/XHR)
            .then(endereco => {
                console.log(endereco);
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




// Utilizando o HOOK -> Arquivo ViaCep.js

// Importação do Hook useCEP
import { useCEP } from "./hooks/useCEP";

export const ViaCep = () => {

    // Utilizando o hook useCEP
    const endereco = useCEP('01001000');

    return (
        <table>
            <tbody>
                <tr>
                    <td>Bairro:</td>
                    <td>{endereco.bairro}</td>
                </tr>
                <tr>
                    <td>Complemento:</td>
                    <td>{endereco.complemento}</td>
                </tr>
                <tr>
                    <td>UF:</td>
                    <td>{endereco.uf}</td>
                </tr>
                <tr>
                    <td>Localidade:</td>
                    <td>{endereco.localidade}</td>
                </tr>
            </tbody>
        </table>
    )
}

```


