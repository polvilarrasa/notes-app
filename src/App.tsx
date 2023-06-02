import './App.css';
import { Home } from './components/Home';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css"; 
//icons
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
