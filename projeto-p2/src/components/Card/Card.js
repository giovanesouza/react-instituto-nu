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

