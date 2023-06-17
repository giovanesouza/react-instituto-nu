/* 
../ => Volta p/ pasta Home
../ => volta p/ src
/components/Card/Card => Entra na pasta components > Card e pega o Componente
*/

// Importação dos componentes Booststrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Importação do componente Card
import { Card } from "../../components/Card/Card";

import { Modal } from "../../components/Modal/Modal";

export const HomePage = () => {
  return (
    <div>
      <Modal
        open={true}
        title={"Salvar pin"}
        controls={[
          {
            label: 'Criar pasta',
            variant: 'primary',
            onClick: () => {
              console.log('clicou!');
            }
          },
          {
            label: 'Fechar',
            variant: 'secondary',
            onClick: () => {
              console.log('clicou em fechar!');
            }
          }
        ]}
      >
        <p>Children modal - Olá</p>
      </Modal>
      <Container fluid>
        <Row>
          {/* xs (versão menor) = cada card ocupará 12 colunas | md (média p/ cima)= 2 colunas*/}
          <Col xs={12} md={2}>  <Card title={"Matemática"} image={"https://picsum.photos/200/300?53"} total={0} />  </Col>
          <Col xs={12} md={2}>  <Card title={"Trigonometria"} image={"https://picsum.photos/200/300?13"} total={1} />  </Col>
        </Row>
      </Container>
    </div>
  )
}