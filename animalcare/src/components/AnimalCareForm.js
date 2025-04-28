import React, { useState } from 'react';
import './AnimalCareForm.css';

const AnimalCareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: '',
    healthStatus: '',
    notes: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (res.ok) {
        setMessage('Animal data submitted!');
        setFormData({ name: '', species: '', age: '', healthStatus: '', notes: '' });
      } else {
        setMessage(result.error);
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <div className="animal-form-container">
      <h2>Animal Care Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Animal Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="species" 
          placeholder="Species" 
          value={formData.species} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="healthStatus" 
          placeholder="Health Status" 
          value={formData.healthStatus} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="notes" 
          placeholder="Additional Notes" 
          value={formData.notes} 
          onChange={handleChange} 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default AnimalCareForm;
