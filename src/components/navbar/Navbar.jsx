import React, { useContext, useState } from 'react'
import './navbar.css'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { myUserContext } from '../../store/Context';
export default function Navbar({ setSearch }) {
    const [toggle, setToggle] = useState(false)
    const { state, dispatch } = useContext(myUserContext)
    const toggle_mode = () => {
        if (toggle) {
            dispatch({ type: 'TOGGEL_CHANGE', payload: false })
            setToggle(false)
        } else {
            dispatch({ type: 'TOGGEL_CHANGE', payload: true })
            setToggle(true)
        }
    }
    console.log("this id for on", state.toggle)
    return (
        <div className={`navbar ${state.toggle && "dark_mode_toggel"}`}>
            <div className={`navbar_wrapper ${state.toggle && "dark_mode_toggel"}`}>
                <div className="app_name">
                    Image Gallary
                </div>
                <div className="search_container">
                    <div className="search_bar">
                        <div className="nav_search_block">
                            <SearchIcon className='search_navbar_icon' />
                            <input type="text" className='navbar_input' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="explore">Explore</div>
                    <div className="collection">Collection</div>
                    <div className="community">Community</div>
                </div>
                <div className="dark_mode">
                    {toggle ? <><div className="dark_mode_name">Light Mode</div><ToggleOnIcon onClick={toggle_mode} className='toggle_navbar_icon' sx={{ fontSize: "60px" }} /></>
                        : <><div className="dark_mode_name">Dark Mode</div><ToggleOffIcon onClick={toggle_mode} className='toggle_navbar_icon' sx={{ fontSize: "60px" }} /></>}
                </div>
                <div className="search_barR">
                    <div className="search_iconR">
                        <SearchIcon className='search_navbar_iconR' sx={{ fontSize: "30px" }} />
                    </div>
                    <div className="bars">
                        <DensityMediumIcon className='density_medium' sx={{ fontSize: "30px" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}
