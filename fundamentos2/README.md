# Anotações

Instação com create-react-app - disponibilizado na [Documentação](https://pt-br.legacy.reactjs.org/docs/create-a-new-react-app.html).


## Componentes - Sintaxe JSX

```js
/* Componente Título - Sempre INICIAR com letra Maiúscula
Sintaxe Arrow Function (sem o return -> não utilizar as {}) */
const Titulo = () => (
  <h1>
    <span>Olá, </span>
    <strong>Mundo</strong>
    !!!
  </h1>
)

```


```js

// Componente com botão - Função sintaxe padrão
function MeuBotao() {
  return (
    <button type='button' > Clique aqui </button>
  )
}

```

```js

// Trabalhando com valores dinâmicos e expressões JS dentro do JSX
function MeuBotao() {
  const label = 'Aperte aqui';
  return (
    // Toda expressão JS que se deseja colocar no meio de um componente, utilizar chaves {}
    <button type='button' > {label}</button>
  )
}


```

## Utilizando os componentes
```js

      {/* Utilizando o componente Titulo */}
      <Titulo />

      {/* Utilizando componente meuBotao */}
      <MeuBotao />
```



## Componentes com atributos

```js

// Componente com parâmetros que pode receber diversos atributos/valores => props = {label: '', idade: ....}
function MeuBotao(props) {
  return (
    // Toda expressão JS que se deseja colocar no meio de um componente, utilizar chaves {}
    <button type='button' >{props.label}</button>
  )
}


function App() {

  const labelBotao = 'Entre aqui';

  return (
    <div className="App">
      {/* Utilizando o componente Titulo */}
      <Titulo />

      <article>
        <h2>Subtitulo</h2>
        <p>Um parágrafo qualquer</p>
      </article>

      {/* Utilizando componente meuBotao */}
      <MeuBotao label='Clique aqui' /> {/*Valor fixo -> usar nomePropriedade='valor' */}
      <MeuBotao label={labelBotao} /> {/*Valor dinâmico -> usar nomePropriedade={nomeConstante} */}


    </div>
  );
}

```


## Condicionais
```js

// Componente
function PessoaMaior() {
  // Também pode ser utilizado props e passar o valor no operador ternário. Dessa forma, ambos valores sairão em negrito
  return (
    <strong>de Maior</strong>
  )
}


// Componente para verificar se uma pessoa é Maior ou menor de Idade com If/else e Operador ternário
function Pessoa(props) {

  // Utilizando if else
  if (props.idade < 10) {
    return (
      <h4>Área restrita</h4>
    )
  }

  return (
    <section>
      {/* Operador ternário */}
      Você é {props.idade >= 18 ? <PessoaMaior /> : 'Menor de idade'}; {/*props.idade => Acessa a idade*/}


      {/* Exibindo algo apenas se for True */}
     {/* Você é {props.idade >= 18 && <PessoaMaior /> }; props.idade => Acessa a idade*/}
    </section>
  )
}



/* Utilizando o compoenente Pessoa com propriedade */
      <Pessoa idade={19} />
      <Pessoa idade={14} />
      <Pessoa idade={55} />
      <Pessoa idade={17} />
      <Pessoa idade={8} />

```


## Listas
```js

// Componentes para Lista

// Componente para criar os itens de forma dinâmica - com desestruturação
const ListItem = ({ label }) => {
  return (
    <li>{label}</li>
  )
}

// Componente que renderiza de forma dinâmica conforme tamanho da lista
const Lista = () => {

  const passos = [
    'Configurar React',
    'Embedar React',
    'Criar componentes',
    'Escrever testes',
    'Fazer deploy'
  ];

  return (
    <ul>
      {/* Componente com atributo - renderização dinâmica (Iteração com map() 
      
      Todo elemento de lista precisa ter uma key -> utilizar o 2º parâmetro do map().

      Map() caso utilize function() -> Inserir {} e o return. 
      Com Arrow Function não precisa do return nem das chaves.
      */}

      {passos.map((valor, index) =>
        <ListItem key={`item-${index}`} label={valor} />
      )}

    </ul>
  )
}


      /* Utilizando o componente List */
      <Lista />


```


## One-way data flow
>> Os valores são compartilhados de cima para baixo. Essa é a forma natural de passar os valores entre os componentes.

>> Arquivo Voos.js

```js

// ARQUIVO App.js
// Importação do componente Voos.js no componente App.js
import Voos from "./Voos";

      /* Utilizando componente Voos */
      <Voos />


// ARQUIVO Voos.js
// Armazena uma coleção de voos
const voosDisponiveis = [
    {
        id: '123',
        title: 'Volta ter. 19 de julho',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas dentro da média (76 cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Estimativa das emissões de carbono: 83 kg'
            }
        ]
    },

    {
        id: '151',
        title: '13:00 - 15:00',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas dentro da média (76 cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Estimativa das emissões de carbono: 83 kg'
            }
        ]
    }

];


// Lista os detalhes dos voos
function ItemVooDetails({ details }) {
    return (
        <ul>
            {details.map(detail =>
                (<li key={detail.id}>{detail.title}</li>)
            )}
        </ul>
    )
}


function ItemVoo(props) {
    return (
        <div className="voo">
            <header>
                <h3>{props.title}</h3>
            </header>

            <div className="voo-details">
                {/* Componente para listar os detalhes dos voos */}
                <ItemVooDetails details={props.details} />
            </div>
        </div>
    )
}



function Voos() {

    return (
        <div className="voos">
            {/* Renderiza todos os voos */}
            {/* Neste caso a key é o id do voo e não o índece do array */}
            {voosDisponiveis.map(voo =>
                <ItemVoo key={voo.id} title={voo.title} details={voo.details} />
            )}
        </div>
    )
}

export default Voos;

```


## Children component
>> Componentes que aceitam filhos
```js

// ARQUIVO voos.js

// Armazena uma coleção de voos
const voosDisponiveis = [
    {
        id: '123',
        title: 'Volta ter. 19 de julho',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas dentro da média (76 cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Estimativa das emissões de carbono: 83 kg'
            }
        ]
    },

    {
        id: '151',
        title: '13:00 - 15:00',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas dentro da média (76 cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Estimativa das emissões de carbono: 83 kg'
            }
        ]
    }

];


// Lista os detalhes dos voos
function ItemVooDetails({ details }) {
    return (
        <ul>
            {details.map(detail =>
                (<li key={detail.id}>{detail.title}</li>)
            )}
        </ul>
    )
}


// Pegando as informações com desestruturação
function ItemVoo({ title, children }) {
    return (
        <div className="voo">
            <header>
                <h3>{title}</h3>
            </header>

            <div className="voo-details">
                {/* Componente para listar os detalhes dos voos */}

                {/* Exibe a lista com os detalhes dos voos */}
                {children}
            </div>
        </div>
    )
}



function Voos() {

    return (
        <div className="voos">
            {/* Renderiza todos os voos */}
            {/* Neste caso a key é o id do voo e não o índece do array */}

            {/* Nesta iteração já há acesso a todos os detalhes */}
            {voosDisponiveis.map(voo =>

                // Componente com tag abrindo e fechando (fazer dessa forma para utilizar filhos)
                <ItemVoo key={voo.id} title={voo.title}>

                    {/* Componenete filho */}
                    <ItemVooDetails details={voo.details} />

                </ItemVoo>
            )}
        </div>
    )
}

export default Voos;

```


## Introdução a eventos

<dl>
<dt>Adicionando eventos:</dt>
<dd>JS Puro: Utiliza-se o addEventListener();</dd>
<dd>React: O Evento é criado direto no botão.</dd>
</dl>


<dl>
<dt>Diferença na escrita dos eventos:</dt>
<dd>No JS: Escreve-se apenas o evento s/ prefixo -> click, mouseover...</dd>
<dd>No React: utiliza-se o prefixo 'on' antes do evento. -> onClick, onMouseover...</dd>
</dl>

>> Uma função deve ser passada como valor de evento: onClick={} | A função pode ser criada fora e chamada ou ser criada direto na chamada



```js

// ARQUIVO App.js

// Função criada diretamente no evento
function MeuBotao(props) {
  return (
    <button onClick={() => {
      console.log('clicou');
    }} type='button' >{props.label}</button>
  )
}


/* Funçaõ criada fora e apenas chamada no evento

No desenvolvimento React é muito comum o nome das funções virem com a palavra 'handle' -> handleClick, handleSubmit, handleMouseOver
*/

function MeuBotao(props) {

// Função que é executada ao clicar
  const handleClick = () => { console.log('clicou') };

  return (
    // onClick={handleClick} => Evento que é disparado ao clique
    <button onClick={handleClick} type='button' >{props.label}</button>
  )
}


// Utilizando o e.preventDefault();

function MeuBotao(props) {

  const handleClick = (e) => { 
  // Evita o comportamento padrão de um clique em link
    e.preventDefault();
    console.log('clicou', e) 
  };

  return (
    // Toda expressão JS que se deseja colocar no meio de um componente, utilizar chaves {}
    <a href="https://github.com/giovanesouza" onClick={handleClick} type='button' >{props.label}</a>
  )
}

```


## Eventos em componentes de classe
>> Para chamar um evento é necessário definir a função como método da classe. Ao chamar o método, utilizar a palavra reservada 'this'.

```js
// Importação do React
import React from "react";


// sintaxe padrão (Classe)
class MeuBotao extends React.Component {

  handleClick(e) {
    // Evita o comportamento padrão de um clique em link
    e.preventDefault();
    console.log('clicou', e);
  }

  render() {
    return (
      // Quando se utiliza props, inserir o this antes que é disponibilizado pelo React.Component.
      <a href="https://github.com/giovanesouza" onClick={this.handleClick} type='button' >{this.props.label}</a>
    )
  }
}


```

