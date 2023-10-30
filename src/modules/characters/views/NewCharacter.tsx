import { CharacterForm, ListHeader } from '..';
import { useNewCharacter } from '../hooks/useNewCharacter';


export const NewCharacter = () => {
  
  const { register, handleSubmit, onNewCharacter, mutation } = useNewCharacter();


  return (
    <section className="list-container p-4">
        <ListHeader title="Nuevo personaje" hideSearcher/>
        <div className="grid grid-cols-2 gap-4">
            <CharacterForm 
                register={ register }
                handleSubmit={ handleSubmit }
                onNewCharacter={ onNewCharacter }
                isPending={ mutation.isPending }
            />
            <div className="p-3 border rounded-md dark:border-gray-700">

            </div>
        </div>
    </section>
  )
}
