import React, { useContext, useEffect, useState } from 'react'
import './app.css'
import Background from './components/Background.jsx/Background'
import Loading from './components/loads/Loading'
import Card from './components/cards/Card'
import Navbar from './components/navbar/Navbar'
import { myUserContext } from './store/Context'

import axios from 'axios'
axios.defaults.baseURL = 'https://api.unsplash.com/'
export default function App() {
  const [search, setSearch] = useState('photos')
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await axios(`search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_URL}`).then(res => {
        setResponse([...res.data.results])
        setLoading(false)
      }).catch(err => console.log(err))
    }
    fetchData()
  }, [search])
  const { state } = useContext(myUserContext)
  return (
    <div>
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
        </>}

    </div>
  )
}

