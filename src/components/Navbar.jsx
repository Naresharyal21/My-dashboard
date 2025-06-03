import MyThemeContext, { useTheme } from "./MyThemeContext";

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {



    const {theme , toggleModes} = useTheme();
    return (

        <div className="navbar w-space-available flex justify-content-right">
          <div className="mytogglebtns "><button onClick={toggleModes}>
        {theme === 'light' ? <MdDarkMode size={25} /> :<MdLightMode size={25} /> }
      </button></div> 
            <div className="user-avatar flex align-items-center justify-content-center">
                JD
            </div>
        </div>

    )
}

export default Navbar;