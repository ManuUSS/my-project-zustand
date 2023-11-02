import { FC } from "react";

interface Props {
    powerName: string;
}

export const CharacterPowerChip:FC<Props> = ({ powerName }) => {
  return (
    <div className='bg-sky-100 text-sky-600 px-2 py-1 rounded-xl dark:bg-sky-800 dark:text-slate-300'>
        <p className='text-md font-semibold'>{ powerName }</p>
    </div>
  )
}
