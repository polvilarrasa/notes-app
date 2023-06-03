import './App.css';
import { Home } from './components/Home';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css"; 
//icons
import 'primeicons/primeicons.css';
//flex
import 'primeflex/primeflex.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
