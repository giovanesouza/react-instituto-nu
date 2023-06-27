// Importação component ReactBoostrap
import ListGroupBS from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

// items = []; Determina o total de items a serem renderizados (É definido na pág onde será renderizado - na invocação)
export const ListGroup = ({ items = [] }) => {
    return (
        <ListGroupBS as="ul">

            {/* Renderiza os itens de forma dinâmica */}
            {items.map(item => (
                <ListGroupBS.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.title}</div>
                    </div>

                    {/* () é utilizado para renderizar algo - O componenet só será renderizado se houver um total */}
                    {item.total ? (
                        <Badge bg="primary" pill>
                            {item.total}
                        </Badge>
                    ) : null}
                </ListGroupBS.Item>


            ))}

        </ListGroupBS>
    )
}