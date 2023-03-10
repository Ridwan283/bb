// import logo from './logo.svg';
import './App.css';
import Intro from './component/Intro';
import BestGame from './component/BestGame';
import NavigationBar from './component/navigationBar';
import TrendingGame from './component/trendingGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/landingPage.css";
import Footer from './component/Footer';
import Contact from './component/Contact';


function App() {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar/>
      <Intro/>
      </div>
      <div className='trending'>
      <TrendingGame/>
      </div>
      <div className='best'>
      <BestGame/>
      </div>
      <div className='contact'>
      <Contact/>
      </div>
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
