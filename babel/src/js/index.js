import '../css/index.css'
import render from './render'
import search from './search'

const id = prompt('Quien es ese pokemon')

search(id)
  .then((data) => {
    render(data)
  })
  .catch((err) => {
    console.error('[No hay pokemon: ]', err)
  })
if(module.hot) {
  module.hot.accept('./script.js', function() {
    console.log('He recargado')
    text()
  })
}
