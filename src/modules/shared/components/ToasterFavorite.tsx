import { FC } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
    message: string;
    description?: string;
}

export const ToasterFavorite:FC<Props> = ({ message, description }) => {
  return (
    <div className="bg-sky-50 rounded-lg w-[32rem] text-sky-600 shadow-sm flex flex-row items-center gap-3 px-5 py-4">
        <StarIcon 
            width={ 18 }
            color="#fabf0c"
            className="animate-bounce" 
        />
        <div className="flex flex-col gap-1 text-lg">
            <p className="font-bold">{ message }</p>
            <p>{ description }</p>
        </div>
    </div>
  )
}
