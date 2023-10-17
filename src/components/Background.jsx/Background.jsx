import React from 'react'
import './background.css'
import load from '../assets/mountain.jpg'
export default function Background() {
    return (
        <div className="background">
            <div className="back">
                <img src={load} alt="hg" className='background_image' />
                <div className="content">
                    <div className="contentvalue">
                        <h1>Download High Quality Images by creators</h1>
                        <div className="small_content">Over 2.5 million+ stock Images by our talented community</div>
                    </div>
                    <div className="search_background">
                        <input type="text" className='back_input' />
                    </div>
                </div>
            </div>
        </div>

    )
}
