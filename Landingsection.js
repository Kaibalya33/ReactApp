import React, { useState } from 'react';

const LandingPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, fullName: 'kaibalya bal', description: 'Test order', quantity: 2 },
    // Add more initial orders as needed
  ]);

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <div>
              <strong>{order.fullName}</strong> - {order.description} ({order.quantity})
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
