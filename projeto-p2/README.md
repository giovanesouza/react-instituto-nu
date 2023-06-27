# Anotações

[Documentação - React Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)


>> Componentes novos: Teste.js (dentro do componente HomePage)

## React portals

> Comandos instalações
[Portals](https://legacy.reactjs.org/docs/portals.html)


```jsx
// Arquivo HomePage.js

// Importação do REactDOM
import ReactDOM from "react-dom";

const Teste = () => {

  // Cria portal para o component
  return ReactDOM.createPortal(
    <h4>Olá, portal.</h4>,
    document.body
    // Para renderizar dentro de uma div específica poderia utilizar document.querySelector('#app');

    // O portal é utilizado, por exemplo, na criação de modais => Passa o componenet e indica onde será renderizado (neste caso o component é um h4 e é renderizado no body)
  )

}


```


## Criando componente Notification
* Alerts: [Link bootstrap](https://react-bootstrap.github.io/docs/components/alerts)

> Criar pasta **Notification** >> component Notification.js

```jsx

// Base para o alert
 <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>

```


```jsx

// Component Notification.js


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

```

> Arquivo criado dentro da pasta do component Notification 

```css
/* index.css */

.notification {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
}
```


```jsx

// Arquivo HomePage.js

// Exclusão do component teste e importação do Notification

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



```



##  react-router-dom

**History API**: Permite trabalhar com rotas em JS puro - [Documentação](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

**Biblioteca de rotas do React**: [Documentação](https://reactrouter.com/en/main)


```shell
# Comando para instalar (-P = versão para produção)

npm i -P react-router-dom

```





## Configurando rotas e Definindo link entre rotas

```jsx

// Configuração de rotas - App.js

// Importação dos components para Rota
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./partials/HeaderPartials/HeaderPartial";

function App() {
  return (
    // Component que precisa estar antes de todos
    <BrowserRouter>
      <div className="App">
        {/* Fica fora  do Routes, pois ele será fixo em todas as páginas */}
        <HeaderPartial />

        {/* Rotas */}
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<h1>Minhas pastas </h1>} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;


```


```jsx
// Definindo link entre rotas - Arquivo HeaderPartial.js

// Importação dos componentes bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// Importação do Link para navegar entre as rotas
import { Link } from "react-router-dom";

export const HeaderPartial = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">DescomPin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Links com as rotas */}
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/minhas-pastas">Minhas pastas</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

```



## Criando página Minhas Pastas e Componente ListGroup

> Na pasta **Pages** criar MinhasPastas/MinhasPastasPage.js

**List Group**: [Documentação](https://react-bootstrap.github.io/docs/components/list-group)


```jsx
// Modelo List Group

 <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>

```


> Pasta **Components** ListGroup/ListGroup.js

```jsx

// Componennt ListGroup.js


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

```


> Component MinhasPastasPage.js
```jsx

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

```









