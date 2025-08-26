import React from 'react';

function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel Dashboard</h1>
      <p>Welcome to admin panel. Secure routes and content will be added here.</p>
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
      }}>Logout</button>
    </div>
  );
}

export default AdminPanel;
