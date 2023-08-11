import React, { useState, useEffect } from 'react';
import './FinancierForm.css';
import AuthService from '../service/AuthService';
import productService from '../service/productService';
import { Link } from 'react-router-dom';

const AAA = () => {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('credit');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {}; // You can fill in this variable with query parameters if needed
        const data = await productService.allProducts(payload); // Correct method name
        setProducts(data); // Store the retrieved data in the 'products' state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData(); // Call the function to fetch products when the component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      type: type,
      description: description,
      montant: amount,
    };

    try {
      const response = await productService.createproduct(product);
      console.log(response);
      if (response) {
        setSuccessMessage('Transaction ajoutée avec succès.');
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
      setErrorMessage('Erreur lors de l\'ajout de la transaction.');
    }
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
        Wind Transport
          <div >
          <Link to="/wind" className="logout-link">Déconnexion</Link>
        </div>
      </header>
      <div className="form-content">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title-medium blue-title">Financier List</h2>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          {/* Display the table with all product attributes */}
          <table className="product-table">
            <thead>
              <tr>
                <th>Id Employee</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Montant</th>
                <th>Current Balance</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.User.id}</td>
                  <td>{product.User.username}</td>
                  <td>{product.type}</td>
                  <td>{product.description}</td>
                  <td>{product.montant}</td>
                  <td>{product.soldeActuel}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            <Link to="/tous" className="register-button">return </Link>
          </div>


        
        </form>

      </div>
    </div>
  );
};

export default AAA;
