// Importação do Modal Criado
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";

// Importação components Bootstrap
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


/* Props esperadas no Modal (component Modal.js)
title, children, open, controls = []
*/

// A propriedade open deste component será passada na chmamada -> HomePage.js
export const ModalSavePin = ({ open }) => {
    return (
        <Modal
            title={"Salvar Pin"}
            open={open}
            controls={[
                {
                    label: 'Criar pasta',
                    variant: 'secondary',
                    loading: false,
                    loadingLabel: 'Criando',
                    onClick: () => {
                        console.log('Clicou em Criar pasta');
                    }
                }
            ]}>

            {/* Component React Bootstrap */}
            <ListGroup variant="flush">
                
                <ListGroup.Item>
                    <Row>
                        {/* Primeira coluna ocupa espaço de 8 colunas e a segunda o espaço de 4 colunas */}
                        <Col xs={8}>Matemática</Col>
                        <Col xs={4} className="text-end"> <Button label={"Salvar"} loadingLabel={"Salvando"}/></Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        {/* Primeira coluna ocupa espaço de 8 colunas e a segunda o espaço de 4 colunas */}
                        <Col xs={8}>Matemática</Col>
                        <Col xs={4} className="text-end"> <Button label={"Salvar"} loadingLabel={"Salvando"}/></Col>
                    </Row>
                </ListGroup.Item>

            </ListGroup>

        </Modal>
    );
}