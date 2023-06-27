// Importação component React Bootstrap
import Container from "react-bootstrap/Container";

// Importação do componenet ListGroup
import { ListGroup } from "../../components/ListGroup/ListGroup";

export const MinhasPastasPage = () => {
    return (
        <Container>
            <h1>Página minhas pastas</h1>

            {/* Cada Item deve ser passado via objeto */}
            <ListGroup items={[
                {
                    title:  'Matemática',
                    total: 3

                },
                {
                    title: 'Javascript',
                    total: 10
                }
            ]} />
        </Container>
    );
}