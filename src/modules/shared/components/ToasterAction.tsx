import { FC } from 'react';
import { toast } from 'sonner';

interface Props {
    message: string;
    t: string | number;
    description?: string;
}

export const ToasterAction:FC<Props> = ({ message, description, t }) => {
  return (
    <div className="bg-gray-50 rounded-lg w-[32rem] text-gray-600 shadow-sm flex flex-col gap-3 px-5 py-4">
        <div className="flex flex-col gap-1 text-lg">
            <p className="font-bold">{ message }</p>
            <p>{ description }</p>
        </div>
        <div className='flex gap-2'>
            <button 
                className='px-3 py-2 bg-green-50 text-green-600 border border-green-600 rounded-lg'
                onClick={ () => toast.dismiss( t ) }
            >
                Cancelar
            </button>
            <button 
                className='px-3 py-2 bg-red-50 text-red-600 border border-red-600 rounded-lg'>Eliminar</button>
        </div>
    </div>
  )
}
