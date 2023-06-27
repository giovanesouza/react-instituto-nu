// Importação do component Bootstrap
import Alert from "react-bootstrap/Alert";


// Importação para criar portal
import ReactDOM from "react-dom";

// Importação do css para centralizar o component
import './index.css';


// valor da variante add como default
export const Notification = ({ message, variant = 'success', onClose }) => {
    // 1º Parâmetro = Component | 2º Local onde será renderizado
    return ReactDOM.createPortal(
        
        // Div para centralizar o componenet
        <div className="notification">

            <Alert variant={variant} onClose={onClose} dismissible>
                {message}
            </Alert>
        </div>,
        document.body

    )
}