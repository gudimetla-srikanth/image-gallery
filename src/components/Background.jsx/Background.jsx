import React from 'react'
import './background.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SearchIcon from '@mui/icons-material/Search';
import load from '../assets/mountain.jpg'
export default function Background({ setSearch }) {
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
                        <div className="searchIcon_container">
                            <div className="searchIconR">
                                <SearchIcon sx={{ fontSize: "30px" }} className='searchIcon_back' />
                            </div>
                            <input type="text" className='back_input' />
                        </div>
                    </div>
                </div>
                <div className="contentR">
                    <div className="contentvalueR">
                        <div><h1>Download High Quality</h1></div>
                        <div><h1>Images by creators</h1></div>
                        <div className="small_contentR">
                            <div className="small_contentRS">Over 2.5 million+ stock Images by our</div>
                            <div className="small_contentRS">Talented Community</div>
                        </div>
                        <div className="search_backgroundR">
                            <div className="searchIconR">
                                <SearchIcon sx={{ fontSize: "30px" }} className='searchIcon_back' />
                            </div>
                            <input type="text" className='back_inputR' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
