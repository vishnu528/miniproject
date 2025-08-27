import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Productlist() {
  const arr = [
    { id: 1, name: "dosa", inStock: true },
    { id: 2, name: "idaly", inStock: true },
    { id: 3, name: "masaladosa", inStock: false }
  ];

  return (
    <div>
      <ul >
        {arr.map((item) => (
          <li key={item.id}>  {item.name} -
            <span className={item.inStock ? 'text-success' : 'text-danger'}>
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productlist;
