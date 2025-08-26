import React, { useState, useEffect } from 'react';
import { createService, updateService, getServiceById } from '../services/serviceapi';

function ServiceForm({ serviceId, onSuccess }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [error, setError] = useState(null);

  // Load service data if editing
  useEffect(() => {
    if (serviceId) {
      getServiceById(serviceId)
        .then(res => {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setIconUrl(res.data.iconUrl || '');
        })
        .catch(() => setError('Failed to load service'));
    }
  }, [serviceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const serviceData = { title, description, iconUrl };

    try {
      if (serviceId) {
        await updateService(serviceId, serviceData);
      } else {
        await createService(serviceData);
      }
      onSuccess(); // e.g., refresh list or navigate
      setTitle('');
      setDescription('');
      setIconUrl('');
    } catch (err) {
      setError('Error saving service');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{serviceId ? 'Edit Service' : 'Add New Service'}</h3>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <div>
        <label>Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label><br />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Icon URL:</label><br />
        <input
          type="text"
          value={iconUrl}
          onChange={e => setIconUrl(e.target.value)}
        />
      </div>
      <button type="submit">{serviceId ? 'Update' : 'Add'} Service</button>
    </form>
  );
}

export default ServiceForm;
