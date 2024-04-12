import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import FormPage from './FormPage';
import TablePage from './Tables';
import './App.css'

const App = () => {
  const [formDataList, setFormDataList] = useState([]);

  return (
    <Router>
      <div>
        <h1>Home Portal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className='link'>Form</Link>
            </li>
            <li>
              <Link to="/tables" className='link'>Tables</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<FormPage formDataList={formDataList} setFormDataList={setFormDataList} />}
          />
          <Route
            path="/tables"
            element={<TablePage formDataList={formDataList} setFormDataList={setFormDataList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
