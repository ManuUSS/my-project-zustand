import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    url: string;
    text: string;
    iconComponent: JSX.Element;
}

/**
 * Renders a side item for a navigation menu, allowing users to navigate to a specified URL.
 *
 * @component
 * @param {Props} props - The component properties.
 * @param {string} [props.url=""] - The URL to navigate to when the side item is clicked.
 * @param {string} props.text - The text to display for the side item.
 * @param {JSX.Element} props.iconComponent - The icon component to display alongside the text.
 * @returns {JSX.Element} The rendered side item.
 */
export const SideItem:FC<Props> = ({ url = "", text, iconComponent }):JSX.Element => {

    /**
     * Validates and returns the appropriate styling for the active or inactive state of the side item.
     *
     * @function
     * @param {boolean} value - Indicates whether the side item is currently active.
     * @returns {string} The CSS class string for styling the side item.
     */
    const validateActiveLink = ( value: boolean ): string => {
        return value 
        ? "flex items-center p-2 text-sky-600 rounded-lg w-full bg-gray-200 dark:bg-gray-900"
        : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
    }

    return (
        <li>
            <NavLink
                to={ url }
                className={ ({ isActive }) => validateActiveLink( isActive )}
            >
                { iconComponent }
                <span className="ml-3 dark:text-slate-200">{ text }</span>
            </NavLink>
        </li>
    )
}
