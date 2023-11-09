import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
    message: string;
    description?: string;
}

export const ToasterError:FC<Props> = ({ message, description }) => {
  return (
    <div className="bg-red-50 rounded-lg w-[32rem] text-red-600 shadow-sm flex flex-row items-center gap-3 px-5 py-4">
        <XMarkIcon 
          width={ 18 } 
        />
        <div className="flex flex-col gap-1 text-lg">
            <p className="font-bold">{ message }</p>
            <p>{ description }</p>
        </div>
    </div>
  )
}
