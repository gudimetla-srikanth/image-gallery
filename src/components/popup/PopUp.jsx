import React from 'react'
import './popup.css'
import { useContext } from 'react'
import ReactDOM from 'react-dom'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { myUserContext } from '../../store/Context'
export default function PopUp() {
    const { state, dispatch } = useContext(myUserContext)
    const popupShow = () => {
        dispatch({ type: 'SHOW_POPUP', payload: false })
    }
    //popup dom 
    return ReactDOM.createPortal(
        <div className={`pop  stic ${state.toggle && "dark_mode_toggel"}`}>
            <div className="close"><CloseIcon className='close_popup' sx={{ fontSize: "40px" }} onClick={popupShow} /></div>
            <div className="popup">
                <div className='pop_image'>
                    <img src={state.data.urls.small} alt="srikanth" className='pop_image1' height="300px" />
                    <div className="sharing_block">
                        <div className="pop_share">
                            <div className="share"><ShareIcon className='share_icon' />Share</div>
                            <div className="info"><ErrorOutlineIcon className='info_icon' />Info</div>
                        </div>
                        <div className="download">Download</div>
                    </div>
                </div>
                <div className={`pop_owner ${state.toggle && "dark_mode_toggel"}`}>
                    <div className="owner_popup">
                        <div className="popup_owner_photo">
                            <img src={state.data.user.profile_image.large} alt="srikanth" className='popup_owner_photo_image' width="50px" />
                        </div>
                        <div className={`popup_user ${state.toggle && "dark_mode_toggel"}`}>
                            <div className="popup_owner_name">{state.data.user.name}</div>
                            <div className="popup_owner_username">@{state.data.user.username}</div>
                        </div>
                    </div>
                    <div className="social">
                        <div className="insta">insta/{state.data.user.instagram_username}</div>
                        <div className="twitter">tiwtter/{state.data.user.twitter_username}</div>
                    </div>
                    <div className={`popup_likes ${state.toggle && "dark_mode_toggel"}`}>
                        <div className="popup_likes_icon"><ThumbUpOffAltIcon /></div>
                        <div className="popup_like_count">{state.data.likes}</div>
                    </div>
                </div>
                <div className={`pop_tags ${state.toggle && "dark_mode_toggel"}`}>
                    <div className="tagename">Related Tags</div>
                    <div className="tags">
                        <div className="tagContent">Animals</div>
                        <div className="tagContent">Buildings</div>
                        <div className="tagContent">Desk top</div>
                        <div className="tagContent">Auto mobiles</div>
                        <div className="tagContent">Backgrounds</div>
                        <div className="tagContent">Wallpapers</div>
                        <div className="tagContent">Gray</div>
                        <div className="tagContent">Minimalastic Wallpapers</div>
                        <div className="tagContent">Connifer</div>
                        <div className="tagContent">Mountains</div>
                        <div className="tagContent">Landscape</div>
                        <div className="tagContent">Ice</div>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('popup'))
}

