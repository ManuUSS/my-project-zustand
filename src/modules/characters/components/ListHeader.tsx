import { FC } from 'react';
import { ModeButton } from '../../shared/components';
import { Searcher } from './Searcher';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
    hideSearcher?: boolean;
    showBackButton?: boolean;
    listModifier?: "filterMainList" | "filterJJKList" | "filterDemonSlayerList" | "filterHxHList";
    listState?: "mainFilterState" | "jjkFilterState" | "demonSlayerFilterState" | "hxhFilterState";
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
 * @param {boolean} [showBackButton=false] - A flag to hide or show the back button.
 *
 * @return {JSX.Element} The rendered ListHeader component.
 */
export const ListHeader:FC<Props> = ({ title, hideSearcher = false, showBackButton = false, listModifier, listState }) => {
    
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between px-4 mb-2">
            {  
                !hideSearcher && <Searcher listModifier={ listModifier } listState={ listState }/> 
            }
            {
                showBackButton 
                && ( 
                    <button 
                        className="dark:text-slate-100"
                        onClick={ () => navigate(-1)  }
                    >
                        <ArrowLeftIcon height={ 15 }/>
                    </button> 
                )
            }
            <h1 className="ml-[19.5rem] text-4xl dark:text-slate-100 grow-[2]">{ title }</h1>
            <ModeButton />
        </div>
    )
}
