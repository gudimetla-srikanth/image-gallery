import React from 'react'
import './loading.css'
import loadingImage from '../assets/loadingImage.jpg'
export default function Loading() {
    return (
        <div className="load dark_mode_toggle">
            <div className="load_image_container">
                <img src={loadingImage} alt="srikanth" className='loading_image' />
                <div className="load_content">
                    <div className="load_content1">Loading some awesome</div>
                    <div className="load_content2">Images....</div>
                </div>
            </div>
        </div>
    )
}
