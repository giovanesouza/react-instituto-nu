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