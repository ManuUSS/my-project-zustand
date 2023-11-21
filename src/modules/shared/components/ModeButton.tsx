import { useThemeStore } from '../../../plugins/ThemeProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';


export const ModeButton = () => {

  const { changeTheme, theme } = useThemeStore();

  return (
    <div>
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
