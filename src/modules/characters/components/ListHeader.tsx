import { FC } from 'react';
import { ModeButton } from '../../shared/components';
import { Searcher } from './Searcher';

interface Props {
    title: string;
    hideSearcher?: boolean;
}

export const ListHeader:FC<Props> = ({ title, hideSearcher = false }) => {
    return (
        <div className="flex items-center justify-between px-4 mb-2">
            {  !hideSearcher && <Searcher /> }
            <h1 className="text-center text-4xl dark:text-slate-100 grow-[2]">{ title }</h1>
            <ModeButton />
        </div>
    )
}
