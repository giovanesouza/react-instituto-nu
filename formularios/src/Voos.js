// Importação do contexto
import { useThemeContext } from "./App";


// Armazena uma coleção de voos
const voosDisponiveis = [
    {
        id: '123',
        title: 'Volta ter. 19 de julho',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas dentro da média (76 cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Estimativa das emissões de carbono: 83 kg'
            }
        ]
    },

    {
        id: '151',
        title: '13:00 - 15:00',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas dentro da média (76 cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Estimativa das emissões de carbono: 83 kg'
            }
        ]
    }

];


// Lista os detalhes dos voos
function ItemVooDetails({ details }) {

    // Sintaxe que dá acesso ao value
    const value = useThemeContext();

    return (
        <ul>
            {details.map(detail =>
                (<li key={detail.id} style={{ color: value.color, fontFamily: value.font }}>{detail.title}</li>)
            )}
        </ul>
    )
}


// Pegando as informações com desestruturação
function ItemVoo({ title, children }) {
    return (
        <div className="voo">
            <header>
                <h3>{title}</h3>
            </header>

            <div className="voo-details">
                {/* Componente para listar os detalhes dos voos */}

                {/* Exibe a lista com os detalhes dos voos */}
                {children}
            </div>
        </div>
    )
}



function Voos() {

    return (
        <div className="voos">
            {/* Renderiza todos os voos */}
            {/* Neste caso a key é o id do voo e não o índece do array */}

            {/* Nesta iteração já há acesso a todos os detalhes */}
            {voosDisponiveis.map(voo =>

                // Componente com tag abrindo e fechando (fazer dessa forma para utilizar filhos)
                <ItemVoo key={voo.id} title={voo.title}>

                    {/* Componenete filho */}
                    <ItemVooDetails details={voo.details} />

                </ItemVoo>
            )}
        </div>
    )
}

export default Voos;