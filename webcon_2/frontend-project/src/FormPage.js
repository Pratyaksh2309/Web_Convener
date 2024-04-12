import React, { useState } from 'react';
import axios from 'axios';
import './FormPage.css';

const FormPage = ({ formDataList, setFormDataList }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:5000/submit-form', formData);
      alert('Form submitted successfully');
      setFormDataList([...formDataList, response.data]);
      setFormData({
        name: '',
        email: '',
        branch: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='group'>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='group'>
        <label>LDAP Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='group'>
        <label>Branch:</label>
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
        </div>
        <br/> <br/> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
