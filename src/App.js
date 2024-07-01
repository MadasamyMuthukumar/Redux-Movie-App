
import './App.scss';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="app">
    <Router>
     <Header />
      <Routes>
        
       <Route path='/' element={<Home />}/>
       <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
       <Route path='*' element={<PageNotFound />}/>
      </Routes>
     
      <Footer/>

    </Router>
    </div>
  );
}

export default App;
