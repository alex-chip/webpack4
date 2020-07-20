import React, { useState } from 'react'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import data from './data.json'
import Loader from './loader'


console.log(data)
function App() {
  const [ loaderList, setLoaderList ] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <h1>Soporte a images, video y fuentes</h1>
      <div>
      <video src={video} width={360} controls poster={logo}></video>
        <img src={logo} alt='Logo Platzi' width={400} />
      </div>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id}/>)
        }
      </ul>
      <button onClick={handleClick}>Mostrar</button>
    </div>
  )
}

export default App