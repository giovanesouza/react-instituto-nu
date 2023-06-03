// Importação do componente Voos.js
import Voos from "./Voos";

import React from "react";

import { AssentoOnibus } from "./AssentoOnibus";

import { ViaCep } from "./ViaCep";


/* Componente Título - Sempre INICIAR com letra Maiúscula
Sintaxe Arrow Function (sem o return -> não utilizar as {}) */
const Titulo = () => (
  <h1>
    <span>Olá, </span>
    <strong>Mundo</strong>
    !!!
  </h1>
)

// Componente com botão - Função sintaxe padrão (Classe)
class MeuBotao extends React.Component {

  // const handleClick = (e) => { 
  // // Evita o comportamento padrão de um clique em link
  //   e.preventDefault();
  //   console.log('clicou', e) 
  // };

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



function App() {

  const labelBotao = 'Entre aqui';

  return (
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
  );
}

export default App;
