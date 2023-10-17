import React, { useState } from 'react'
import PopUp from '../popup/PopUp'
import './card.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useContext } from 'react'
import { myUserContext } from '../../store/Context'
export default function Card({ value }) {
    const { state, dispatch } = useContext(myUserContext)
    const { showpopup, data } = state;
    const setData = () => {
        if (state.showpopup === true) {
            dispatch({ type: 'SHOW_POPUP', payload: false })
        } else {
            dispatch({ type: 'ADD', payload: value })
            dispatch({ type: 'SHOW_POPUP', payload: true })
        }
    }
    return (
        <div className={`card_container ${state.toggle && "dark_mode_toggel"}`}>
            <div className={`card_image ${state.toggle && "dark_mode_toggel"}`} onClick={setData}>
                <img src={value.urls.small} alt="srikanth" className='card_image' height="300px" />
            </div>
            <div className={`card_owner ${state.toggle && "dark_mode_toggel"}`}>
                <div className="owner dark">
                    <div className="owner_photo">
                        <img src={value.user.profile_image.large} alt="srikanth" className='owner_photo_image' />
                    </div>
                    <div className={`user ${state.toggle && "dark_mode_toggel"}`}>
                        <div className="owner_name">{value.user.name}</div>
                        <div className="owner_username">@{value.user.username}</div>
                    </div>
                </div>
                <div className={`likes ${state.toggle && "dark_mode_toggel"}`}>
                    <div className="likes_icon"><ThumbUpOffAltIcon /></div>
                    <div className="like_count">{value.likes}</div>
                </div>
            </div>
            <div>{state.showpopup ? <PopUp /> : <div></div>}</div>
        </div>
    )
}
