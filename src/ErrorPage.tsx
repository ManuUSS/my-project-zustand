import { useThemeStore } from "./plugins/ThemeProvider";
import svg_404 from "./assets/404.svg";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    const { theme } = useThemeStore();

    return (
        <div className={`h-screen w-screen flex items-center ${ theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
            <div className={`container flex flex-col md:flex-row items-center justify-center px-5 ${ theme === "light" ? "text-gray-700" : "text-gray-300" }`}>
            <div className="max-w-md">
                <div className="text-5xl font-dark font-bold">404</div>
                <p className="text-2xl md:text-3xl font-light leading-normal">
                    Lo siento, no pudimos encontrar la página que buscas...
                </p>
                <p className="mb-8 text-lg">Pero no te preoupes, puedes encontrar mucha diversión por acá.</p>
                    
                <Link
                    to="/"
                    className="px-4 inline py-2 text-md font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-sky-600 active:bg-sky-600 hover:bg-sky-700"
                >
                        Volver
                </Link>
            </div>
            <div className="max-w-lg">
                <img src={ svg_404 } alt="NotFound" width={ 240 } />
            </div>
            </div>
        </div>
    )
}
