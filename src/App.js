import React, { useState } from 'react';
import './App.css';
import dummyData from './dummyData';
import PersonalInfo from './personalInfo';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
  const [showTable, setShowTable] = useState(true);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="App">
      <header className="App-header">
      <PersonalInfo />
        <h1>Olympic Medals Tracker</h1>
        <button onClick={toggleView}>
          {showTable ? 'Show Chart' : 'Show Table'}
        </button>
        {showTable ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Year</th>
                <th>Medals</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.Id}>
                  <td>{item.Id}</td>
                  <td>{item.Year}</td>
                  <td>{item.Medals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <LineChart width={600} height={300} data={dummyData}>
            <XAxis dataKey="Year" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Medals" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        )}
      </header>
    </div>
  );
}

export default App;
