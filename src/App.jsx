import React, { useContext, useEffect, useState } from 'react'
import './app.css'
import Background from './components/Background.jsx/Background'
import Loading from './components/loads/Loading'
import Card from './components/cards/Card'
import Navbar from './components/navbar/Navbar'
import { myUserContext } from './store/Context'
import axios from 'axios'

//Setting up our base url
axios.defaults.baseURL = 'https://api.unsplash.com/'
export default function App() {

  //for content to be sarched on web
  const [search, setSearch] = useState('technology')

  //loading screen
  const [loading, setLoading] = useState(true)

  //response variable
  const [response, setResponse] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      //connection string
      await axios(`search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_URL}`).then(res => {
        setResponse([...res.data.results])
        setLoading(false)
      }).catch(err => console.log(err))
    }
    fetchData()
  }, [search])
  const { state } = useContext(myUserContext)

  //finding window width to check current width
  let width = window.innerWidth;
  console.log(width)
  return (
    <div>
      {/* width of windoow checking */}
      {width < 420 ? <>
        <div className="fixed_position">
          <Navbar setSearch={setSearch} />
          <Background setSearch={setSearch} />
        </div>
        {loading ? <Loading /> :
          <>
            <div className={`${state.toggle && "dark_mode_toggel"}`}>
              <div className="card_list">
                {response?.map((value, key) => {
                  return < Card value={value} key={key} />
                })}
              </div>
            </div>
          </>}</> : <>
        <Navbar setSearch={setSearch} />
        {loading ? <Loading /> :
          <>
            <Background />
            <div className={`${state.toggle && "dark_mode_toggel"}`}>
              <div className="card_list">
                {response?.map((value, key) => {
                  return < Card value={value} key={key} />
                })}
              </div>
            </div>
          </>}</>}
    </div>
  )
}

