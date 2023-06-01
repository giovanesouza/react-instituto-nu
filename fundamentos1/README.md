# Anotações

## Pré-requesitos
* Ter o Node JS instalado na máquina (Versão LTS);

Instação com create-react-app - disponibilizado na [Documentação](https://pt-br.legacy.reactjs.org/docs/create-a-new-react-app.html).

```bash
# Criar uma pasta para o projeto
npx create-react-app@latest .
# Linha de comando acima instala a última versão dentro da pasta selecionada
# Também pode ser criado assim (Cria uma nova pasta) =>  npx create-react-app@latest nomeApp
```


<dl>
<dt>Termos importantes:</dt>
<dd>**built time**: preparação para o código rodar - compilação;</dd>
<dd>**run time**: código gerado rodando no navegador nomomento</dd>
</dl>


* Pasta de desenvolvimento: src (source).
* npm start: Inicializa aplicação

>> Arquivo excluído: App.css

```js
//  Código do arquivo App.js após remoção de alguns códigos
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

```

## Sintaxe das tags


```js
function App() {
  return (
    <div className="App">
      <h1>
        <span>Olá, </span>
        <strong>Mundo</strong>
        !!!
        </h1>

        <article>
          <h2>Subtitulo</h2>
          <p>Um parágrafo qualquer</p>
        </article>
    </div>
  );
}

```

