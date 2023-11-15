import { StopIcon } from '@heroicons/react/24/solid';
import { CharacterForm, CharacterPowerChip, ListHeader, validateStatus } from '..';
import { useEffect } from 'react';
import { useEditCharacter } from '../hooks/useEditCharacter';


export const EditCharacter = () => {
  
    const { 
        register, handleSubmit, handleChangePower, onAddPower, onEditCharacter, 
        mutation, watch, errors, power 
    } = useEditCharacter();

    useEffect(() => {
        window.scrollTo(0,0);
        document.title = "Zest | Nuevo personaje";
    }, []);

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
                onNewCharacter={ onEditCharacter }
                onAddPower={ onAddPower }
                power={ power }
                errors={ errors }
                isPending={ mutation.isPending }
            />
            <div className="border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-700 max-h-[550px]">
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
