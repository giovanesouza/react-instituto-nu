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