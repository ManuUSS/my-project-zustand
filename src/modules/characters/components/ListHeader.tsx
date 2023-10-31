import { FC } from 'react';
import { ModeButton } from '../../shared/components';
import { Searcher } from './Searcher';

interface Props {
    title: string;
    hideSearcher?: boolean;
}

/**
 * This component displays a header for a list or table, which typically includes a title,
 * an optional search input field, and a mode switch button.
 *
 * @component
 *
 * @param {Object} Props - The component's props.
 * @param {string} title - The title to be displayed in the header.
 * @param {boolean} [hideSearcher=false] - A flag to hide or show the search input field.
 *
 * @return {JSX.Element} The rendered ListHeader component.
 */
export const ListHeader:FC<Props> = ({ title, hideSearcher = false }) => {
    return (
        <div className="flex items-center justify-between px-4 mb-2">
            {  !hideSearcher && <Searcher /> }
            <h1 className="text-center text-4xl dark:text-slate-100 grow-[2]">{ title }</h1>
            <ModeButton />
        </div>
    )
}
