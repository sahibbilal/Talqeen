import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Videos from './Components/Pages/Videos/Videos';
import VideoSlider from './Components/Pages/VideosSlider/VideoSlider';
import FeedBack from './Components/Pages/FeedBack/FeedBack';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Pages/Contact/Contact';
import SingleVideo from './Components/Pages/Singlevideo/SingleVideo';
import Detailspage from './Components/Pages/Detailspage/Detailspage';
import Home from './Components/Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/video' element={<Videos />} />
        <Route path="/videoSingle/:id" element={<SingleVideo />} />
        <Route path="/videodetail/:id" element={<Detailspage />} />
        <Route path='/categories' element={<VideoSlider />} />
        <Route path='/feedBack' element={<FeedBack />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
