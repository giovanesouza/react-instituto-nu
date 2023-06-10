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