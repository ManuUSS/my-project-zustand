import { FC } from "react";

interface Props {
    charName: string;
    charSerie: string;
}

export const CardHeaderInfo:FC<Props> = ({ charName, charSerie }) => {
    return (
        <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">{ charName }</h5>
            <p className="dark:text-slate-300">{ charSerie }</p>
        </div>
    )
}
