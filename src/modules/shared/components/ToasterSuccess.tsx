import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface Props {
    message: string;
    description?: string;
}

export const ToasterSuccess:FC<Props> = ({ message, description }) => {
  return (
    <div className="bg-green-50 rounded-lg w-[32rem] text-green-600 shadow-sm flex flex-row items-center gap-3 px-5 py-4">
        <HandThumbUpIcon 
            width={ 15 } 
        />
        <div className="flex flex-col gap-1">
            <p className="font-bold text-lg">{ message }</p>
            <p className="text-lg">{ description }</p>
        </div>
    </div>
  )
}
