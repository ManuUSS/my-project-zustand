import { FC } from 'react';

interface Props {
    charName: string;
    charSerie: string;
}

/**
 * Renders the header information for a character card, including the character's name and series.
 *
 * @component
 * @param {Props} props - The component properties.
 * @param {string} props.charName - The name of the character to be displayed in the card header.
 * @param {string} props.charSerie - The series to which the character belongs, displayed in the card header.
 * @returns {JSX.Element} The rendered header information for the character card.
 */
export const CardHeaderInfo:FC<Props> = ({ charName, charSerie }):JSX.Element => {
    return (
        <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">{ charName }</h5>
            <p className="dark:text-slate-300">{ charSerie }</p>
        </div>
    )
}
