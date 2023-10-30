import { useEffect } from 'react';
import { useCharacters, CharacterCard, ListHeader } from '..';
import { Loader } from '../../shared/components';
import { useCharactersStore } from '../../../plugins/CharactersContext';

export const MainListPage = () => {

  const { isLoading } = useCharacters({});
  const characters = useCharactersStore(( state ) => state.mainList );
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  

  return (
      <section className="list-container p-4">
        <ListHeader title='Lista de personajes' />
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
