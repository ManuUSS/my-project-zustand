import { SunIcon } from "@heroicons/react/24/outline"


export const ModeButton = () => {
  return (
    <div className="fixed right-0 px-8 py-2">
        <button 
            id="dropdown-button" 
            data-dropdown-toggle="dropdown-menu" 
            data-dropdown-placement="right" 
            className="p-3 z-10" 
            type="button"
        > 
            <SunIcon 
                width={ 18 }
                color="#fabf0c"
            />
        </button>
    </div>
  )
}
