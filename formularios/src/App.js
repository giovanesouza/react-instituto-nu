// Importação context com desestruturação
import React, { createContext, useState, useContext } from "react";

import Voos from "./Voos";
import { AssentoOnibus } from "./AssentoOnibus";
import { ViaCep } from "./ViaCep";
import { RenderProps } from "./RenderProps";
import { Fonts } from "./Fonts";

import { Formulario } from "./Formulario";

// Componente de fonts
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


// Context para trabalhar com tema
export const ThemeContext = createContext({});

// Função que retorna o contexto - Transforma o contexto em um Hook
export const useThemeContext = () => useContext(ThemeContext);


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

      {/*  Obj: Fazer com que alguns components pegem essa cor e renderize-a em seu conteúdo */}
      <ThemeContext.Provider value={{ color: 'orange', font, setFont }}>

        <div className="App">
          <Titulo />

          <Formulario />

          <RenderProps />

          <Fonts />

          <ViaCep />

          <AssentoOnibus />

          <MeuBotao label='Clique aqui' />

          <Voos />

          {/*

        <Lista />

        <Pessoa idade={19} />
        <Pessoa idade={14} />
        <Pessoa idade={55} />
        <Pessoa idade={17} />
        <Pessoa idade={8} />

        <article>
          <h2>Subtitulo</h2>
          <p>Um parágrafo qualquer</p>
        </article>

         */}


        </div>

      </ThemeContext.Provider>
    </SettingContext.Provider>
  );
}

export default App;
