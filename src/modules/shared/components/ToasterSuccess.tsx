import { CheckIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

interface Props {
    message: string;
    description?: string;
}

export const ToasterSuccess:FC<Props> = ({ message, description }) => {
  return (
    <div className="bg-green-50 rounded-lg w-[32rem] text-green-600 shadow-sm flex flex-row items-center gap-3 px-5 py-4">
        <CheckIcon 
            width={ 18 } 
        />
        <div className="flex flex-col gap-1 text-lg">
            <p className="font-bold">{ message }</p>
            <p>{ description }</p>
        </div>
    </div>
  )
}
