import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Wind from './components/Wind';
import ProductForm from './components/ProductForm';
import ForgetPassword from './components/ForgetPassword';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegistreForm';
import FinancierForm from './components/FinancierForm';
import ProductList from './components/ProductList';
import EmployeeList from './components/EmployeeList';
import TousEmp from './components/TousEmp';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
     
        <Route exact path="/ListE" element={<EmployeeList />}></Route>
        <Route exact path="/List" element={<ProductList />}></Route>
        <Route exact path="/wind" element={<Wind />}></Route>
          <Route exact path="/prod" element={<ProductForm />}></Route>
          <Route exact path="/Reset" element={<ForgetPassword />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/" element={<RegisterForm />}></Route>
          <Route exact path="/F" element={<FinancierForm />}></Route>
          <Route exact path="/Tous" element={<TousEmp />}></Route>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
