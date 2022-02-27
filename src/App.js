import logo from './logo.svg';
import './App.css';
import WeatherInput from './components/WeatherInput/WeatherInput';
import Temperature from './components/Temperature/Temperature';

function App() {


   return (
      <div className="App">
         <div className="input">
            <WeatherInput />
         </div>
         <div className="temperature">
            <Temperature />
         </div>
      </div>
   );
}

export default App;
