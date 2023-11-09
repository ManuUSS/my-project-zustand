import { Status } from ".."

export const validateStatus = ( status: Status ) => {
    if( status === "alive" )
        return "text-[#06d6a0]"

    else if ( status === "dead" )
        return "text-[#ef233c]"

    return "text-slate-400"
}

export const validateStautsFilter = ( status: string ):string => {

    if( status === "alive" ) return "text-[#06d6a0]";
    else if( status === "dead" ) return "text-[#ef233c]";
    else if( status === "unknown" ) return "text-slate-400";
    
    return "text-sky-500";
}