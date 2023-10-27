import { useCharacters } from "..";
import { MainLayout } from "../../../layouts"
import { Loader } from "../../shared/components";
import { CharacterCard } from "../components";
import './MainListPage.css';

export const MainListPage = () => {

  const { isLoading, characters } = useCharacters({});

  return (
    <MainLayout>
        <section className="list-container p-4">
          <h1 className="text-center text-4xl mb-4">Lista de personajes</h1>
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
    </MainLayout>
  )
}
