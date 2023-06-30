# Anotações - Criando serviço de armazenamento no Storage

[Documentação - React Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)


>> Componentes novos: AppContext.js

## Criando Context principal

> No diretório src, criar pasta **store** que será utilizada para armazenar o context, provider, reduces...

Em store, criar AppContext.js


> AppContext.js
```jsx


import { createContext } from "react";

// Cria contexto
export const Context = createContext({});

// Todos os filhos do AppContext terão as informações propagadas no Provider
export const AppContext = ({ children }) => {
    return (
        // Tudo que será envelopado e propagado
        <Context.Provider value={{ name: 'Giovane' }}>
            {children}
        </Context.Provider>
    )
}

```

> App.js
```jsx


// Importação do Componente de Contexto
import { AppContext } from "./store/AppContext";


function App() {

  return (
    // Component que precisa estar antes de todos
    <BrowserRouter>
      <div className="App">

        <AppContext>

          {/* Fica fora  do Routes, pois ele será fixo em todas as páginas */}
          <HeaderPartial />

          {/* Rotas */}
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MinhasPastasPage />} />

          </Routes>
          
        </AppContext>

      </div>
    </BrowserRouter>
  );
}

export default App;


```


> HomePage.js
```jsx

// Importação do context
import { Context } from "../../store/AppContext";


// Importação do context
import { Context } from "../../store/AppContext";


export const HomePage = () => {
  return (
{/* UTILIZANDO O CONTEXT */}
          <Context.Consumer>
            {/* () são utilizados para renderizar algo */}
            {(value)=> (
              <span>{value.name}</span>
            )}
          </Context.Consumer>
  )
}

```



## Código menos VERBOSO - Com useContext

> AppContext.js
```jsx
import { createContext, useContext } from "react";

// Cria contexto
export const Context = createContext({});


// Função que retorna o useContext do contexto em si
export const useAppContext = () => useContext(Context);


// Todos os filhos do AppContext terão as informações propagadas no Provider
export const AppContext = ({ children }) => {
    return (
        // Tudo que será envelopado e propagado
        <Context.Provider value={{ name: 'Giovane Souza' }}>
            {children}
        </Context.Provider>
    )
}

```

<p>No arquivo App.js não houve alteração</p>



```jsx

// Importação do context por meio do useAppContext
import { useAppContext } from "../../store/AppContext";


export const HomePage = () => {

  // Guarda as informações do contexto
  const value = useAppContext();

  return (
    <div>
          {/* UTILIZANDO O CONTEXT */}
          <span>{value.name}</span>
  )
}

```








