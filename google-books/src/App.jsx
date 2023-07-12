import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import BookLoader from './components/BookLoader/BookLoader';
import LandingPage from './pages/LandingPage/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const App = () => { 
  
  return (
  <>         
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/search/:searchTerm" element={<BookLoader/>}/>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
