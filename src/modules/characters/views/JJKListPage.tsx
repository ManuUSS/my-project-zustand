import { useEffect } from 'react';
import { ListHeader, useCharacters } from '..';
import { Loader } from '../../shared/components';
import { CharacterCard } from '../components';
import { useCharactersStore } from '..';


export const JJKListPage = () => {

    const { isFetching } = useCharacters({ 
        filterKey: "Jujutsu Kaisen",
        ctxSetKey: "setJJKList"
    });
    const characters = useCharactersStore(( state ) => state.jjkList );

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
        <section className="list-container p-4">
            <ListHeader title='Jujutsu Kaisen' />
            {
                isFetching 
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
