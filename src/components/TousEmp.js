import React, { useState, useEffect } from 'react';
import './FinancierForm.css'; // Assurez-vous d'inclure le bon fichier CSS
import productService from '../service/productService';
import { Link } from 'react-router-dom';

const TousEmp = () => {
  const [users, setUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await productService.alluser();
        setUsers(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await productService.delete(id);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      setSuccessMessage('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error);
      setErrorMessage('Error deleting user.');
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
        <form className="form">
          <h2 className="title-medium blue-title">
            List of Employees
          </h2>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <table className="product-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.Role}</td>
                  <td>
                    <button className="register-button" onClick={() => handleDelete(user.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="button-container">
            <Link to="/listE" className="register-button">Consulter liste de produits</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TousEmp;
