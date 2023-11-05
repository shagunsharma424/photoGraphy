import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
     
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
