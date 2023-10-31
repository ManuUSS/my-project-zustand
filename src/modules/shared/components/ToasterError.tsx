import { FC } from 'react';
import { HandThumbDownIcon } from '@heroicons/react/24/solid';

interface Props {
    message: string;
    description?: string;
}

export const ToasterError:FC<Props> = ({ message, description }) => {
  return (
    <div className="bg-red-50 rounded-lg w-[32rem] text-red-600 shadow-sm flex flex-row items-center gap-3 px-5 py-4">
        <HandThumbDownIcon 
            width={ 15 } 
        />
        <div className="flex flex-col gap-1 text-lg">
            <p className="font-bold">{ message }</p>
            <p>{ description }</p>
        </div>
    </div>
  )
}
