import { ListHeader, useCharacters } from "..";
import { useCharactersStore } from "..";
import { Loader } from "../../shared/components";
import { CharacterCard } from "../components";


export const DemonSlayerListPage = () => {
    const { isLoading } = useCharacters({ 
        filterKey: "Demon Slayer",
        ctxSetKey: "setDemonSlayerList" 
    });
    const characters = useCharactersStore(( state ) => state.demonSlayerList );

    return (
        <section className="list-container p-4">
            <ListHeader title="Demon Slayer" />
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
