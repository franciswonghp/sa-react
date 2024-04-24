import react from 'react';
import Allproduct from './pages/Allproduct';
import CreateProduct from './pages/CreateProduct';
import DeleteProduct from './pages/DeleteProduct';
import EditProduct from './pages/EditProduct';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {ProductContextData} from  './ProductContext'
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (<div className="container">
    <Router>
      
      <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">
        
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">All product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit">Update</Link>
            </li>
          </ul>
        </div>

      </nav>
      <ProductContextData>
      <Routes>

        <Route path="/" element={<Allproduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
      </ProductContextData>
    </Router>
  </div>)
}