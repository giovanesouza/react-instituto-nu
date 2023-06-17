# Anotações

[Documentação - React Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)


>> Componentes novos: 

## SETUP (create-react-app + install react-bootstrap + estrutura)

> Comandos instalações

```bash
# Gera a estrutura do projeto REACT (última versão) dentro da pasta atual

npx create-react-app@latest .


# 'flag P': -P => Ao adicionar ao comando de instalação do React bootstrap faz com que as dependências sejam salvas no package.json (Caso você baixe o meu projeto e dê um npm install/npm i, a dependência do React bootstrap será incluída.

npm i -P react-bootstrap bootstrap


# Importar o CSS do Bootstrap no arquivo index.js

# O bootstrap fica na pasta node_modules
import 'bootstrap/dist/css/bootstrap.min.css';

```

<dl>
<dt>Arquivos excluídos:</dt>
<dd>index.css (remover imports)</dd>
<dd>app.css (remover imports)</dd>
</dl>


> Estrutura

<dl>
<dt>Pastas</dt>
<dd>components</dd>
<dd>pages</dd>
</dl>

> Na pasta pages, criar a pasta **Home** e o arquivo HomePage.js;

## Criando component Card

Na pasta **components**, criar a **pasta Card** e o arquivo Card.js;

* Card (Foi utilizado o **Image overlays**): [Link bootstrap](https://react-bootstrap.github.io/docs/components/cards/)


> Inserir Layout Grid na **HomePage**
* Layout Grid (Foi utilizado o **Fluid Container**): [Link bootstrap](https://react-bootstrap.github.io/docs/layout/grid)


* Badges: [Link bootstrap](https://react-bootstrap.github.io/docs/components/badge)

```jsx
    <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
```


### Component Card
``` jsx

// Card

/* Importação do Card Bootstrap

O Card que está sendo importado fica armazenado em CardBSBS (Alterar o nome caso seja igual ao do componente. Se deixar o mesmo nome vai haver conflito)
*/

// Importação dos componentes Booststrap
import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


// Card com propriedades passadas dinamicamente
export const Card = ({ image, title, total }) => {
    return (
        <CardBS>
            <CardBS.Img src={image} alt="CardBS image" />
            <CardBS.ImgOverlay>

                <Button variant="primary">
                    Salvar <Badge bg="secondary">{total}</Badge>
                </Button>

            </CardBS.ImgOverlay>

            <CardBS.Body>
                <CardBS.Title>  {title}   </CardBS.Title>
            </CardBS.Body>

        </CardBS>
    );
}

```


```jsx
//  HomePage.js

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

export const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        {/* xs (versão menor) = cada card ocupará 12 colunas | md (média p/ cima)= 2 colunas*/}
        <Col xs={12} md={2}>  <Card title={"Matemática"} image={"https://picsum.photos/200/300?53"} total={0} />  </Col>
        <Col xs={12} md={2}>  <Card title={"Trigonometria"} image={"https://picsum.photos/200/300?13"} total={1} />  </Col>
      </Row>
    </Container>
  )
}

```


## Criando componente Header

* Navbar: [Link bootstrap](https://react-bootstrap.github.io/docs/components/navbar)

> Criar pasta com nome **partials**: utilizada para guardar fragmentos do projeto. É aqui onde o header será desenvolvido. Partials/HeaderPartials/HeaderPartial.js


 > O **Header** deve ser inserido no App.js, pois é o componente global que vai envelopar todos os componentes de página. Ao inserir no App.js, automaticamente TODAS as páginas exibirão o Header.


```jsx

// HeaderPartial.js

// Importação dos componentes bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export const HeaderPartial = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">DescomPin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Minhas pastas</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


```



## ModalBase (children, controls)

* Modal: [Link bootstrap](https://react-bootstrap.github.io/docs/components/modal)

> Criar pasta **Modal** e criar o component Modal.js

```jsx

// Código base - Bootstrap
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
```

```jsx

// Modal

/* Importação do Modal Bootstrap

O Modal que está sendo importado fica armazenado em ModalBS (Alterar o nome caso seja igual ao do componente. Se deixar o mesmo nome vai haver conflito)
*/

// Importação dos componentes Bootstrap
import ModalBS from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
                {controls.map((controls, controlIndex) => (
                    <Button key={controlIndex} variant={controls.variant} onClick={controls.onClick}>
                        {controls.label}
                    </Button>
                ))}


            </ModalBS.Footer>
        </ModalBS>
    );
}



```



```jsx
// Importar o Modal no arquivo HomePage.js


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

```




## Button/LoadingButton

```jsx


```


```jsx


```



```jsx


```


