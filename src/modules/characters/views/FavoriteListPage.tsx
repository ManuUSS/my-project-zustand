import { useEffect } from 'react';
import { CharacterCard, ListHeader, NoCharacters, useFavoriteStore } from '..';

export const MainListPage = () => {

  const characters = useFavoriteStore(( state ) => state.favoriteList );

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Zest | Favoritos";
  }, []);
  

  return (
      <section className="list-container p-4">
        <ListHeader 
          title='Lista de favoritos' 
          listModifier="filterMainList"
          listState="mainFilterState"
        />
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
        {
            !characters.length && ( <NoCharacters /> )
        }
      </section>
  )
}
