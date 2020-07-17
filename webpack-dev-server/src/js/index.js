import '../css/index.css';
import text from './script';

text()

if(module.hot) {
  module.hot.accept('./script.js', function() {
    console.log('He recargado')
    text()
  })
}
