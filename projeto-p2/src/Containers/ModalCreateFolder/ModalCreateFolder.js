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