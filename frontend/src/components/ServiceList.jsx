import React, { useEffect, useState } from 'react';
import { getServices, deleteService } from '../services/serviceapi';
import ServiceForm from './ServiceForm';

function ServiceList() {
  const [services, setServices] = useState([]);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchServices = async () => {
    try {
      const response = await getServices();
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleFormSuccess = () => {
    fetchServices();
    setShowForm(false);
    setEditingServiceId(null);
  };

  const startEdit = (id) => {
    setEditingServiceId(id);
    setShowForm(true);
  };

  const startAdd = () => {
    setEditingServiceId(null);
    setShowForm(true);
  };

  return (
    <div>
      <h2>Our Services</h2>
      {!showForm && <button onClick={startAdd}>Add New Service</button>}

      {showForm ? (
        <ServiceForm serviceId={editingServiceId} onSuccess={handleFormSuccess} />
      ) : (
        <ul>
          {services.map(service => (
            <li key={service._id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.iconUrl && <img src={service.iconUrl} alt={service.title} style={{maxWidth:'100px'}} />}
              <button onClick={() => startEdit(service._id)}>Edit</button>
              <button onClick={() => handleDelete(service._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceList;
