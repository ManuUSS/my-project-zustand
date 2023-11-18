import { XMarkIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

interface Props {
    powerName: string;
    isEditable?: boolean;
    handleDelete?: ( powerName: string ) => void;
}

export const CharacterPowerChip:FC<Props> = ({ powerName, isEditable = false, handleDelete }) => {
  return (
    <div className='bg-sky-100 text-sky-600 px-2 py-1 rounded-xl dark:bg-sky-800 dark:text-slate-300'>
        <p className='text-md font-semibold inline'>{ powerName }</p>
        {
          isEditable && 
          (
            <XMarkIcon 
              width={ 10 } 
              className="text-sky-800 dark:text-slate-200 ml-1 inline cursor-pointer"
              onClick={ () => { handleDelete && handleDelete( powerName ) } }
            />
          )
        }
    </div>
  )
}
