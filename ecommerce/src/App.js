import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


//Pages
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListingPage from './pages/ProductListingPage'

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
         <Route path="/" element={<ProductListingPage/>}></Route>
         <Route path="/productdetails/:id" element={<ProductDetailPage/>}></Route>
         <Route path="/login" element={<LoginPage/>}></Route>
         <Route path="/register" element={<RegisterPage/>}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
