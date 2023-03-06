import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/User Input/UserInput.js';
import AllDetail from './Components/AllDetails/AllDetail';

function App() {
  let [dataObj, setDataObj] = useState({})
  const liftUpOrderData = (obj) => {
    setDataObj(obj)
  }

  return (
    <React.Fragment>
      <UserInput liftUpInApp={liftUpOrderData} />
      <AllDetail newData={dataObj} />
    </React.Fragment>
  );
}

export default App;
