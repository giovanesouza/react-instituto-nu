// Importação do context
import { useThemeContext } from './App';

export const Fonts = () => {
    // Dá acesso ao state da font (setFont)

    const value = useThemeContext();

    return (
        <div>
            {/* Troca a font ao clicar -> Sempre que houver click, invoca a função setFont */}
            <button type="button" onClick={() => value.setFont('arial')}>Arial</button>
            <button type="button" onClick={() => value.setFont('tahoma')}>Tahoma</button>
            <button type="button" onClick={() => value.setFont('verdana')}>Verdana</button>
        </div>
    )
}