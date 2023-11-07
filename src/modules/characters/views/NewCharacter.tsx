import { StopIcon } from '@heroicons/react/24/solid';
import { CharacterForm, CharacterPowerChip, ListHeader, Status } from '..';
import { useNewCharacter } from '../hooks/useNewCharacter';
import { useEffect } from 'react';


export const NewCharacter = () => {
  
  const { 
    register, handleSubmit, handleChangePower, onAddPower, onNewCharacter, 
    mutation, watch, errors, power 
  } = useNewCharacter();

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Zest | Nuevo personaje";
  }, []);

  const validateStatus = ( status: Status ) => {
    if( status === "alive" )
        return "text-green-500"

    else if ( status === "dead" )
        return "text-red-500"

    return "text-slate-400"
  }

  return (
    <section className="list-container p-4">
        <ListHeader 
            title="Nuevo personaje" 
            hideSearcher
            showBackButton
        />
        <div className="grid grid-cols-3 gap-4">
            <CharacterForm 
                register={ register }
                handleSubmit={ handleSubmit }
                handleChangePower={ handleChangePower }
                onNewCharacter={ onNewCharacter }
                onAddPower={ onAddPower }
                power={ power }
                errors={ errors }
                isPending={ mutation.isPending }
            />
            <div className="border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-700">
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
                    <div className='flex flex-wrap gap-1'>
                        {
                            watch("powers")?.map(
                                ({ name }) => (
                                    <CharacterPowerChip key={ name } powerName={ name }/>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
