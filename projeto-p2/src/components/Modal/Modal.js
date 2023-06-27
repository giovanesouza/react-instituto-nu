/* Importação do Modal Bootstrap

O Modal que está sendo importado fica armazenado em ModalBS (Alterar o nome caso seja igual ao do componente. Se deixar o mesmo nome vai haver conflito)
*/

// Importação dos componentes Bootstrap
import ModalBS from "react-bootstrap/Modal";

// Importação do componente criado
import { Button } from "../Button/Button";

// Prop open => Responsável pela exibição/fechamendo do modal
// controls => Utilizada para customizar os botões do modal (Guarda a label, variant e uma função)
export const Modal = ({ title, children, open, controls = [] }) => {
    return (
        <ModalBS show={open} onHide={() => { }}>
            <ModalBS.Header closeButton>
                <ModalBS.Title>{title}</ModalBS.Title>
            </ModalBS.Header>

            {/* Children vai permitir a customização do modal conforme chamada */}
            <ModalBS.Body> {children} </ModalBS.Body>

            <ModalBS.Footer>

                {/* Acessa o objeto do modal (passado na HomePage) -> Passa o conteúdo de forma dinâmica */}
                {controls.map((control, controlIndex) => (
                    <Button
                        key={controlIndex}

                        // Todas as propriedades passadas em controls automaticamente serão passadas dinamicamente para o botão (não precisa ficar mapeando uma a uma)
                        {...control}
                    />

                ))}


            </ModalBS.Footer>
        </ModalBS>
    );
}