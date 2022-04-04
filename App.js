import logo from './logo.svg';
import './App.css';
import './Header.js';
import Header from './Header.js';
import './Navigation.js';
import Navigation from './Navigation.js';
import './Main.js';
import Main from './Main.js';
import './Footer.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
    <Header />
    <Navigation />
    <Main />
    <Footer/>
    </div>
  );
}

export default App;
