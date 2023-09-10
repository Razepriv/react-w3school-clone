import './App.css';
import Header from './Header.js';
import Swiper from './Slider.js'
import Home from './page1/Home';

function App() {
  return (
    <div className="App">
      <div id='headbar'>
      <Header />
      </div>
      <div id='herosection'>
      <Home/>
      </div>
      

      
    </div>
  );
}

export default App;
