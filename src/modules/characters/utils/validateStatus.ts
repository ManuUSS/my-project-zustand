import { Status } from ".."

/**
 * Determines the CSS text color class based on the character's status.
 *
 * @param {string} status - The status of the character ("alive," "dead," or other).
 * @returns {string} A CSS class for text color based on the character's status.
 */
export const validateStatus = ( status: Status ) => {
    if( status === "alive" )
        return "text-[#06d6a0]"

    else if ( status === "dead" )
        return "text-[#ef233c]"

    return "text-slate-400"
}

/**
 * Determines the CSS text color class based on the character's status.
 * Its used on the searcher's icons
 * @param {string} status - The status of the character ("alive," "dead," or other).
 * @returns {string} A CSS class for text color based on the character's status.
 */
export const validateStautsFilter = ( status: string ):string => {

    if( status === "alive" ) return "text-[#06d6a0]";
    else if( status === "dead" ) return "text-[#ef233c]";
    else if( status === "unknown" ) return "text-slate-400";
    
    return "text-sky-500";
}

/**
 * Get the text representation of a character's status.
 *
 * @param {string} status - The status of the character ("alive," "dead," or other).
 * @returns {string} The text representation of the character's status ("Vivo," "Muerto," or "Desconocido").
 */
export const getStatusText = ( status:Status ) => {
    if( status === "alive" ) return "Vivo"
    else if ( status === "dead" ) return "Muerto"
    return "Desconocido"
}