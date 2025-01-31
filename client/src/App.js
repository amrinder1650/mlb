import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import axios from 'axios';
import Home from "./Components/Home";

  function App() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
      axios.get('http://localhost:8080')
      .then(res => setMessage(res.data)).catch(err => console.error(err));
    }, []);

    return (
      <div>
        {/* <div>{message}</div> */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path='home' element={<Home />}/>
        </Routes>
      </div>
    );
  }

  export default App;