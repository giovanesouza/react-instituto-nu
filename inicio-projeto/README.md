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

* Spinners: [Link bootstrap](https://react-bootstrap.github.io/docs/components/spinners)

```jsx
// Spinner de referência

      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>

```

> Na pasta **components**, criar pasta **Button** e arquivo **Button.js** dentro dela.


```jsx

// Component Button.js

// Importação dos Componentes Bootstrap
import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

/* Props
loading = boolean que vai carregar o spinner apenas se estiver true
variant = estilização do botão
disabled = boolean para habilitar/desabilitar o botão
label = Texto padrão do botão (normal)
loadingLabel = Texto quando o loading estiver true (carregando)
onClick = Função que será executada ao clique
*/
export const Button = ({ loading, variant, disabled, label, loadingLabel, onClick }) => {
    return (
        <ButtonBS variant={variant} disabled={disabled} onClick={onClick}>

            {/* Se verdadeiro, carrega o spinner - Operador ternário */}
            {loading && (
                // Fragment <> </> = utilizado para renderizar >1 component sem um pai
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true">

                        <span className="visually-hidden">Loading...</span>

                    </Spinner> {' '} {/* esse espaço em branco é justamente p/ ter um espaçamento entre o loading e o texto do botão */}
                </>
            )}

            {/* Texto do botão - Se estiver carregando, exibe o texto do loadingLabel, senão, o texto do label*/}
            {
                loading ? loadingLabel : label
            }

        </ButtonBS>
    );
}

```


```jsx

// Alterações arquivo Modal.js

// Importação do componente criado (Em vez do button do bootstrap)
import {Button} from "../Button/Button";

// Componente Modal com as Props do botão
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
                    <Button
                        key={controlIndex}
                        variant={controls.variant}
                        onClick={controls.onClick}
                        label={"Salvar"}
                        loadingLabel={"Salvando"}
                        loading={true}
                        disabled={true}
                    />

                ))}


            </ModalBS.Footer>
        </ModalBS>
    );
}



```


## containers/ModalSavePin

* List groups (**versão Flush**): [Link bootstrap](https://react-bootstrap.github.io/docs/components/list-group)

> Na pasta **src** -> Criar pasta **Containers**, pasta **ModalSavePin** e arquivo **ModalSavePin.js**

```jsx

// ModalSavePin.js

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


```

> Modal.js
```jsx

// Atualizações no Modal.js (Adição do controls para acessar as propriedades e passar valores sem quebrar a aplicação)

                {/* Acessa o objeto do modal (passado na HomePage) -> Passa o conteúdo de forma dinâmica */}
                {controls.map((control, controlIndex) => (
                  <Button
                        key={controlIndex}
                        variant={control.variant}
                        onClick={control.onClick}
                        label={control.label}
                        loadingLabel={control.loadingLabel}
                        loading={control.loading}
                        disabled={control.disabled}
                    />

                ))}


```

> HomePage.js
```jsx

// HomePage.js > Substituição modal anterior pelo ModalSavePin.js

// Importação do ModalSavePin
import { ModalSavePin } from "../../Containers/ModalSavePin/ModalSavePin";


      <ModalSavePin open={true}/>

```



## containers/ModalCreateFolder

* Form : [Link bootstrap](https://react-bootstrap.github.io/docs/forms/overview)

> Na pasta **Containers**, criar pasta **ModalCreateFolder** e arquivo **ModalCreateFolder.js**


> ModalCreateFolder.js
```jsx

// useState para Setar o nome das pastas
import { useState } from 'react';


// Components Bootstrap
import Form from 'react-bootstrap/Form';


// Component criado
import { Modal } from "../../components/Modal/Modal";

export const ModalCreateFolder = ({ open }) => {

    // Utilizado para setar o nome das pastas
    const [folderName, setFolderName] = useState('');


    // Função que será invocada ao submeter o Form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fez o submit', folderName);
    }


    // Função para pegar o nome da pasta que será criada
    const handleChange = (e) => {

        setFolderName(e.target.value)
    }

    return (
        <Modal
            open={open}
            title={"Criar pasta"}
            controls={[
                {
                    label: 'Criar e Salvar',
                    loadingLabel: 'Criando',
                    variant: 'secondary',
                    loading: false,
                    type: 'submit', // propriedade para realizar a submissão do form
                    form: 'form-criar-pasta', // propriedade que vai indicar qual formulário será submetido. Essa propriedade faz com que ocorra a submissão do form - (botão fora do form)
                    onClick: () => { }
                }
            ]}

        >


            {/* Form com invoca função handleSubmit ao Submeter (Tem que ter um ID)*/}
            <Form onSubmit={handleSubmit} id="form-criar-pasta">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Matemática" value={folderName} onChange={handleChange}/>

                </Form.Group>

            </Form>

        </Modal>
    );
}


```

> HomePage.js
```jsx

// Importação do ModalCreateFolder
import { ModalCreateFolder } from "../../Containers/ModalCreateFolder/ModalCreateFolder";

      {/* Para testar o modal em questão */}
      <ModalCreateFolder open={true} />


```

> Button: Alteração nas props -> Utilização do Operadores Rest e Spread
```jsx


// ...buttonProps = corresponde a todas as propriedades não passadas explicitamente
export const Button = ({ loading, label, loadingLabel, ...buttonProps }) => {
    return (

        // variant={variant} disabled={disabled} onClick={onClick} e outras propriedades a serem passadas serão disparadas em ...buttonProps
        <ButtonBS {...buttonProps}>

            {/* Se verdadeiro, carrega o spinner - Operador ternário */}
            {loading && (
                // Fragment <> </> = utilizado para renderizar >1 component sem um pai
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true">

                        <span className="visually-hidden">Loading...</span>

                    </Spinner> {' '} {/* esse espaço em branco é justamente p/ ter um espaçamento entre o loading e o texto do botão */}
                </>
            )}

            {/* Texto do botão - Se estiver carregando, exibe o texto do loadingLabel, senão, o texto do label*/}
            {
                loading ? loadingLabel : label
            }

        </ButtonBS>
    );
}

```


> Modal.js: {...control}
```jsx

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

// ÁREA MODIFICADA
                        // Todas as propriedades passadas em controls automaticamente serão passadas dinamicamente para o botão (não precisa ficar mapeando uma a uma)
                        {...control}
                    />

                ))}


            </ModalBS.Footer>
        </ModalBS>
    );
}

```



