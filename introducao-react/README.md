# Anotações

- Criar um index.html;
- Colar os scripts - VERSÃO DE DESENVOLVIMENTO - disponibilizado na [Documentação](https://pt-br.legacy.reactjs.org/docs/getting-started.html) antes do fechamento do HEAD.
</br>
</br>

## Pré-requesitos
* Ter o Node JS instalado na máquina (Versão LTS);
</br>
</br>


```html
<head>
    <!-- Scripts na versão de desenvolvimento -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>
```


<dl>
<dt>Com o terminal aberto:</dt>
<dd>**node -v**: Exibe versão do node</dd>
<dd>**npx serve**: disponibiliza um servidor apontando para a pasta do projeto</dd>
</dl>

</br>
</br>

## Sintaxe mais PURA do React  

```js
// Criação dos components - Com classe

        // Cria o componente em forma de Class
        class Hello extends React.Component() {
            // Sempre que um componente for criado por meio de classe, é obrigatório inserir o método render() {} 
            render() {
                return (
                    React.createElement('h1', {}, 'Olá, Mundo!')
                )
            }
        };
```


```js
// Criação dos components - Com Função
        function Hello() {
            return (
                React.createElement('h1', {}, 'Olá, Mundo!')

                /* Cria o elemento desejado. Aceita vários argumentos, mas os 3 primeiros são os principais | 1º = Qual elemento será criado | 2º = atributos da tag (caso não tenha, inserir null ou {}) | 3º = Conteúdo (Elementos filhos) | 4º em diante passa a ser irmãos dos demais filhos 

                Para criar elmementos filhos TAGS, utilizar -> React.createElement(). Para inserir apenas texto, inserir uma string.      */

            )
        };
```



```js
// Componenete com Parâmetros

        // parâmetros => desestruturação {} (propriedades / atributos) é um objeto que pode ter vários parâm..
        function Hello({label, texto}) {
            return (
                React.createElement('h1', { id: 'titulo', className: 'cabecalho' },
                    React.createElement('span', {}, texto),
                    React.createElement('strong', {}, label),
                    '!!!'

                ) /* Cria um h1 com um filho span com texto 'olá', cria um strong após o span (ainda dentro da h1) => Resultado <h1 id='titulo' class='cabecalho'> <span>Olá, tudo bem? </span> <strong>Descomplica!</strong>!!! <h1>
                    
                Para adicionar classes ao elemento deve-se utilizar a palavra className, pois a palavra class é reservada no JS. Porém, será renderizada como class.    
                    
                */
            )
        };
```


```js
// Renderizando

        ReactDOM.render(
              /* Aceita 2 argumentos. 1º = nome do componente | 2º = Onde será renderizado */
            React.createElement(Hello, { texto: 'Olá, tudo bem? ' , label: 'Descomplica!'}), // passando atributos
            document.querySelector('#app')
        ); 

```