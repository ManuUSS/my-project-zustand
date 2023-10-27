import { useCharacters } from '..';
import { Loader } from '../../shared/components';
import { CharacterCard } from '../components';


export const JJKListPage = () => {

    const { isLoading, characters } = useCharacters({ filterKey: "Jujutsu Kaisen" });

    return (
        <section className="list-container p-4">
            <h1 className="text-center text-4xl mt-4 mb-8 dark:text-slate-100">Jujutsu Kaisen</h1>
            {
                isLoading 
                ? ( <Loader /> )
                :
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3 justify-items-center">
                    {
                    characters && characters.map(( char ) => (
                        <CharacterCard 
                            key={ char.id } 
                            character={ char }
                        />
                    ))
                    }
                </div>
            }
        </section>
    )
}
