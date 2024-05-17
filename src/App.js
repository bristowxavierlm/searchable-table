import React, { useState } from 'react';
import './App.css';

const data = [
  { name: 'Ajay Raj', age: 24, email: 'ajay.raj@roadelabs.com' },
  { name: 'Asif Ihsan', age: 23, email: 'asifihsan0369@gmail.com' },
  { name: 'Bristow Xavier', age: 24, email: 'bristow.xavier@roadelabs.com' },
  { name: 'Christo Joy', age: 24, email: 'joychristo271@gmail.com' },
  { name: 'Joel Jacob', age: 24, email: 'joel.jacob@roadelabs.com' },
  { name: 'Sanju Lal', age: 24, email: 'sanju.cs@roadelabs.com' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="table-container">
        <h2 className="center-heading">Table with Search</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-box"
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
