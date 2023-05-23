import NavBar from './Components/NavBar'
import Header from './Components/Header';
import Icons from './Components/Icons';
import Brand from './Components/Brand';
import Stand from './Components/Stand';
import Collection from './Components/Collection';
import Images from './Components/Images';
import Photos from './Components/Photos';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container-fluid img-fluid">
      <NavBar />
      <Brand />
      <Stand />
      <Collection />
      <Images />
      <Photos />
      <Footer /> 
    </div>
  )
}

export default App;
