import React, { useState } from 'react'
import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'
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
        <h3 className='sass'>Estilos con Sass</h3>
        <h3 className='less'>Estilos con Less</h3>
        <h3 className='stylus'>Estilos con Stylus</h3>
        <h3 className='post-css'>Estilos con Post-css</h3>
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