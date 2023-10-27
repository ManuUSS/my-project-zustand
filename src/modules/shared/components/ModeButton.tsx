import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useThemeStore } from "../../../plugins/ThemeProvider";


export const ModeButton = () => {

  const { changeTheme, theme } = useThemeStore();

  return (
    <div className="absolute right-0 px-8 py-2">
      <button 
        id="dropdown-button" 
        data-dropdown-toggle="dropdown-menu" 
        data-dropdown-placement="right" 
        className="p-3 z-10" 
        type="button"
      > 
        {
          (theme === "light")
          ? (
            <SunIcon 
              width={ 22 }
              color="#fabf0c"
              onClick={ () => changeTheme("dark") }
            />
          )
          : (
            <MoonIcon 
              width={ 18 }
              color="#ffffff"
              onClick={ () => changeTheme("light") }
            />
          )
        }
      </button>
    </div>
  )
}
