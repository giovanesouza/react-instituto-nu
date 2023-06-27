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

// Importação do ModalCreateFolder
import { ModalCreateFolder } from "../../Containers/ModalCreateFolder/ModalCreateFolder";

// Importação do ModalSavePin
import { ModalSavePin } from "../../Containers/ModalSavePin/ModalSavePin";

// Importaç~çao do component de Notificação
import { Notification } from "../../components/Notification/Notification";


export const HomePage = () => {
  return (
    <div>

      <Notification message={'Criado com sucesso!'}
        onClose={() => {
          console.log('Clicou em fechar')
        }}
      />

      {/* Para testar o modal em questão */}
      <ModalSavePin open={false} />
      <ModalCreateFolder open={false} />

      <Container fluid>
        <Row>
          {/* xs (versão menor) = cada card ocupará 12 colunas | md (média p/ cima)= 2 colunas*/}
          <Col xs={12} md={2}>  <Card title={"Matemática"} image={"https://picsum.photos/200/300?53"} total={0} />  </Col>
          <Col xs={12} md={2}>  <Card title={"Trigonometria"} image={"https://picsum.photos/200/300?13"} total={1} />  </Col>
          <Col xs={12} md={2}>  <Card title={"Matemática"} image={"https://picsum.photos/200/300?53"} total={0} />  </Col>
          <Col xs={12} md={2}>  <Card title={"Trigonometria"} image={"https://picsum.photos/200/300?13"} total={1} />  </Col>
        </Row>
      </Container>
    </div>
  )
}