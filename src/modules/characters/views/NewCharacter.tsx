import { StopIcon } from '@heroicons/react/24/solid';
import { CharacterForm, ListHeader, Status } from '..';
import { useNewCharacter } from '../hooks/useNewCharacter';


export const NewCharacter = () => {
  
  const { register, handleSubmit, onNewCharacter, mutation, watch } = useNewCharacter();

  const validateStatus = ( status: Status ) => {
    if( status === "alive" )
        return "text-green-500"

    else if ( status === "dead" )
        return "text-red-500"

    return "text-slate-400"
}

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
            <div className="border rounded-md dark:border-gray-700">
                <div className="flex items-center rounded-t-md overflow-hidden">
                    {
                        watch("image") &&
                        (
                            <img 
                                className="object-cover h-80 w-full"
                                src={ watch("image") } 
                                alt={ watch("name")} 
                            />
                        )
                    }
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">{ watch("name") }</h5>
                            <p className="dark:text-slate-300">{ watch("serie") }</p>
                        </div>
                        {
                            watch("status") && (
                                <StopIcon className={`w-5 ${ validateStatus( watch("status") )}`} />
                            )
                        }
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                        { watch("about") }
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
