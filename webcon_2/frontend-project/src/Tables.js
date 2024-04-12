import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tables.css'; 

const TablesPage = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-form-data');
      setFormDataList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Tables</h2>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablesPage;