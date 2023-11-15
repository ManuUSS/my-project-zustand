import { useThemeStore } from '../../../plugins/ThemeProvider';
import svg from '../../../assets/not-results.svg';
import svg_black from '../../../assets/not-results-black.svg';

export const NoCharacters = () => {

    const mode = useThemeStore(( state ) => state.theme );

    return (
        <div className="flex flex-col items-center gap-4 mt-12">
            <img src={ `${ mode === "light" ? svg : svg_black }` } alt="Not Found Svg" width={ 200 } />
            <p className="text-xl font-bold text-center text-4xl dark:text-slate-100">Parece que no hay personajes aún...</p>
        </div>
    )
}
