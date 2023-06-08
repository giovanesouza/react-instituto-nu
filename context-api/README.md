# Anotações

[Documentação - Context API](https://pt-br.legacy.reactjs.org/docs/context.html)


>> Componentes novos: RenderProps.js, Fonts.js

## Context API (Provider e Consumer)

```js

// Arquivo App.js

// Importação context com desestruturação
import React, { createContext } from "react";


/*
A principal forma de invocar o create-context é fora de component, porque é necessário exportá-lo. Ele retorna um objeto com dois components: 1 Provider e 1 Consumer. 

-> Em qualquer elemento filho que deseje obter a informação é necessário importá-lo.


Envolver/englobar componentes com <ThemeContext.Provider></ThemeContext.Provider> faz com que todos eles obtenham as informações definidas no provedor.

A informação a ser propagada deve ser passada como propriedade do provider chamada value={}

*/

// Context para trabalhar com tema -> É possível criar VÁRIOS contextos
export const ThemeContext = createContext({});


function App() {

  const labelBotao = 'Entre aqui';

  return (
    // Objetivo: Fazer com que alguns components pegem essa cor e renderize-a em seu conteúdo
    <ThemeContext.Provider value={{ color: 'orange' }}>

      <div className="App">
        {/* Utilizando o componente Titulo */}
        <Titulo />

        {/* Utilizando o componente ViaCep */}
        <ViaCep />

        {/* Utilizando o componente AssentoOnibus */}
        <AssentoOnibus />

        <MeuBotao label='Clique aqui' />

        {/* Utilizando componente Voos */}
        <Voos />

        {/* Utilizando o componente List */}
        <Lista />

        {/* Utilizando o compoenente Pessoa com propriedade */}
        <Pessoa idade={19} />
        <Pessoa idade={14} />
        <Pessoa idade={55} />
        <Pessoa idade={17} />
        <Pessoa idade={8} />

        <article>
          <h2>Subtitulo</h2>
          <p>Um parágrafo qualquer</p>
        </article>

        {/* Utilizando componente meuBotao */}
        <MeuBotao label='Clique aqui' /> {/*Valor fixo -> usar nomePropriedade='valor' */}
        <MeuBotao label={labelBotao} /> {/*Valor dinâmico -> usar nomePropriedade={nomeConstante} */}


      </div>

    </ThemeContext.Provider>
  );
}



/* Componente Voos.js -> Utilizará as informações do Context (Consumer)

Necessário envolver/englobar o componente com <ThemeContext.Consumer></ThemeContext.Consumer>
*/

// Importação do contexto
import { ThemeContext } from "./App";

// Lista os detalhes dos voos
function ItemVooDetails({ details }) {
    return (
        <ThemeContext.Consumer>

            {/* // A síntase do Consumer espera uma Arrow function com o nome atributo definido no contexto
            Parâmetro value contém a propriedade color */}
            {(value) => (
                <ul>
                    {details.map(detail =>
                        (<li key={detail.id} style={{ color: value.color }}>{detail.title}</li>)
                    )}
                </ul>
            )}

        </ThemeContext.Consumer>
    )
}



// Componente AssentoOnibus.js

const Assento = (props) => {

    return (
        // A síntase do Consumer espera uma Arrow function com o nome atributo definido no contexto
        <ThemeContext.Consumer>

            {(value) => (
                <button
                    className="assento"
                    type="button"
                    disabled={disabled}
                    onClick={() => handleClick()} >

                    {/* Operador ternário: Se o state estiver habilitado => mostra o número, caso desabilitado, mostra um X */}
                    {disabled ? 'X' : <span style={{ color: value.color }}>{props.pos}</span>}

                </button>
            )}

        </ThemeContext.Consumer>
    )

}





```

**RESUMO**


* **SEMPRE criar o contexto fora do componente** para exportá-lo e importá-lo onde desejar usar por meio do **Consumer** -> Necessário passar uma Arrow Function que receberá como parâmetro o value propagado no **Provider** tornando-o acessível ao JSX;
* **Provider** precisa estar no **nível mais alto** - englobando os componentes filhos (Não precisa necessariamente ser um componente pai de todo mundo)




## Visão rápida de entender Render Props

```js

// Criar componente RenderProps.js

export const RenderProps = () => {
    
}


// Arquivo App.js


// Importar o RenderProps
import { RenderProps } from "./RenderProps";

        {/* Utilizando o componente RenderProps */}
        <RenderProps />




// Componente RenderProps

// Não será exportado, porque será utilizado apenas aqui
const Consumer = ({ children }) => {

    const style = { color: 'blue' };

    return (
        <div className="consumer">
            {/* Renderização do Render */}
            {children(style)}
        </div>
    )
}

// Sintaxe de Retorno imediato
const Ola = (style) => {
    return (
        <span style={{ color: style.color }}>Olá, Galera.</span>
    )
}

// RenderProps = Passar um componente React/JSX como propriedade de um outro component. Em vez de passar como Children, passa como prop
export const RenderProps = () => {
    return (
        <Consumer>
            {Ola}
        </Consumer>
    )
}





// Semelhança com o Consumer = Sintaxe do Consumer do Context API (Com função direta)

// Não será exportado, porque será utilizado apenas aqui
const Consumer = ({ children }) => {

    const style = { color: 'green' };

    return (
        <div className="consumer">
            {/* Renderização do Render */}
            {children(style)}
        </div>
    )
}


// RenderProps = Passar um componente React/JSX como propriedade de um outro component. Em vez de passar como Children, passa como prop
export const RenderProps = () => {
    return (
        <Consumer>
            {(style) => (
                <span style={{ color: style.color }}>Olá, Galera.</span>
            )}
        </Consumer>
    )
}


```



## Passando função de estado no contexto

```js

// Component App.js

// Importação useState
import React, { createContext, useState } from "react";

// Importação do componente
import { Fonts } from "./Fonts";



function App() {

    // useState
  const [font, setFont] = useState('arial'); // Fonte Padrão Arial

    // Adição do value font e método setFont
   return (
    // Obj: Fazer com que alguns components pegem essa cor e renderize-a em seu conteúdo
        <ThemeContext.Provider value={{ color: 'orange', font, setFont }}>

      <div className="App">

        <Titulo />

        <RenderProps />
        
        // Botões para mudar a font
        <Fonts /> 
        
        <ViaCep />
        <AssentoOnibus />

        <MeuBotao label='Clique aqui' />
        <Voos />

      </div>

    </ThemeContext.Provider>
  );


}


// Componente Voos.js (ItemVooDetails) e AssentoOnibus (Assento) contém o context font

<li key={detail.id} style={{ color: value.color, fontFamily: value.font }}>{detail.title}</li>

<span style={{ color: value.color, fontFamily: value.font }}>{props.pos}</span>



// Criação de component Fonts para fazer a função de Consumer

// Importação do context
import { ThemeContext } from './App';

export const Fonts = () => {
    // Dá acesso ao state da font (setFont)

    return (
        // A síntase do Consumer espera uma Arrow function com o nome atributo definido no contexto
        <ThemeContext.Consumer>

            {(value) => (
                <div>
                {/* Troca a font ao clicar -> Sempre que houver click, invoca a função setFont */}
                    <button type="button" onClick={() => value.setFont('arial')}>Arial</button>
                    <button type="button" onClick={() => value.setFont('tahoma')}>Tahoma</button>
                    <button type="button" onClick={() => value.setFont('verdana')}>Verdana</button>
                </div>
            )}

        </ThemeContext.Consumer>
    )
}



```



## Hook useContext

```js

// Hook que deixa a sintaxe do Consumer um pouco mais enxuta

// Arquivo voos.js

// Esse hook faz com que não precise mais invocar o componente Consumer - Também é necessário importar o contexto
import { useContext } from "react";

// Importação do contexto
import { ThemeContext } from "./App";



// Dentro do componente onde se espera o value, criar constante value e atribuir useContext com valor(ThemeContext)

function ItemVooDetails({ details }) {

    // Sintaxe que dá acesso ao value
    const value = useContext(ThemeContext);

    return (
        <ThemeContext.Consumer>
            {/*  A síntase do Consumer espera uma Arrow function com o nome atributo definido no contexto */}
            {/* Parâmetro value contém a propriedade color e font */}
            {(value) => (
                <ul>
                    {details.map(detail =>
                        (<li key={detail.id} style={{ color: value.color, fontFamily: value.font }}>{detail.title}</li>)
                    )}
                </ul>
            )}

        </ThemeContext.Consumer>
    )
}


```


```js

/* 
BOA PRÁTICA

Em vez de chamar em todo lugar o useContext e passar o ThemeContext fazer >>>

No local onde devine o contexto fazer a exportação do useContext(ThemeContext);

*/  


// Arquivo App.js

// Importação context com desestruturação
import React, { createContext, useState, useContext } from "react";


// Context para trabalhar com tema
export const ThemeContext = createContext({});


// Em vez de exportar o ThemeContext...

// Função que retorna o contexto - Transforma o contexto em um Hook
export const useThemeContext = () => useContext(ThemeContext);


// Componente Voos.js

// Em vez de importar o ThemeContext, importar o useThemeContext e o useContext do react pode ser apagado

import { useThemeContext } from "./App";


function ItemVooDetails({ details }) {
    
    // Invocando o Contexto via useThemeContext
    // Sintaxe que dá acesso ao value
    const value = useThemeContext();

// Sintaxe de Consumer (arrow function) apagada
    return (
        <ul>
            {details.map(detail =>
                (<li key={detail.id} style={{ color: value.color, fontFamily: value.font }}>{detail.title}</li>)
            )}
        </ul>
    )
}




// Componente AssentosOnibus.js

// Importação do contexto
import { useThemeContext } from "./App";

    // Sintaxe que dá acesso ao value
    const value = useThemeContext();


const Assento = (props) => {
    return (
        <button
            className="assento"
            type="button"
            disabled={disabled}
            onClick={() => handleClick()} >

            {/* Operador ternário: Se o state estiver habilitado => mostra o número, caso desabilitado, mostra um X */}
            {disabled ? 'X' : <span style={{ color: value.color, fontFamily: value.font }}>{props.pos}</span>}

        </button>

    )

}



// Componente Fonts.js

// Importação do context
import { useThemeContext } from './App';

export const Fonts = () => {
    // Dá acesso ao state da font (setFont)

    const value = useThemeContext();

    return (
        <div>
            {/* Troca a font ao clicar -> Sempre que houver click, invoca a função setFont */}
            <button type="button" onClick={() => value.setFont('arial')}>Arial</button>
            <button type="button" onClick={() => value.setFont('tahoma')}>Tahoma</button>
            <button type="button" onClick={() => value.setFont('verdana')}>Verdana</button>
        </div>
    )
}

```


## Múltiplos context

```js

// Arquivo/Componente App.js

// Importação context com desestruturação
import React, { createContext, useState, useContext } from "react";

// Utilizando múltiplos contexts
const SettingContext = createContext({});
export const useSettingContext = () => useContext(SettingContext);


function App() {

  const [font, setFont] = useState('arial'); // Fonte Padrão Arial

  const labelBotao = 'Entre aqui';

  return (

    // Envolver o ThmeContext.Provider com o SettingContext.Provider com o value a ser propagado
    // A informação a ser passada será utilizada no hook useCEP
    <SettingContext.Provider value={{ cepUrlBase: 'https://viacep.com.br/' }}>

     <ThemeContext.Provider value={{ color: 'orange', font, setFont }}>

        <div className="App">
          <Titulo />

          <RenderProps />

          <Fonts />

          <ViaCep />

          <AssentoOnibus />

          <MeuBotao label='Clique aqui' />

          <Voos />

        </div>

      </ThemeContext.Provider>
    </SettingContext.Provider>
  );
}


// Arquivo hook useCEP.js

// Importação do context
import { useSettingContext } from "../App";



export const useCEP = (cep) => {


    const [endereco, setEndereco] = useState({}); 

    // Invoca o contexto
    const value = useSettingContext(); 

    // Função para buscar o CEP
    const fetchCEP = (cep) => {
        
        // Concatenação do value.cepUrlBase passado via context
        fetch(`${value.cepUrlBase}ws/${cep}/json/`) // Pega as informações
            .then(dados => dados.json()) /
            .then(endereco => {
                console.log(endereco);
                setEndereco(endereco);
            }); 
    }

   
    useEffect(() => {
        fetchCEP(cep);
    }, [cep]);

    return endereco;
}



```



