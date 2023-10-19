import React, { useEffect, useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/dummyData.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="table-container">
      <h2>Medal Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Gold Medals</th>
            <th>Silver Medals</th>
            <th>Bronze Medals</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Year || 'N/A'}</td>
              <td>{item.Gold || 'N/A'}</td>
              <td>{item.Silver || 'N/A'}</td>
              <td>{item.Bronze || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
