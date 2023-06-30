
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


// Importação do context por meio do useAppContext
import { useAppContext } from "../../store/AppContext";


export const HomePage = () => {

  // Guarda as informações do contexto
  const value = useAppContext();

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

          {/* UTILIZANDO O CONTEXT */}
          <span>{value.name}</span>

          <Col xs={12} md={2}>  <Card title={"Trigonometria"} image={"https://picsum.photos/200/300?13"} total={1} />  </Col>
        </Row>
      </Container>
    </div>
  )
}