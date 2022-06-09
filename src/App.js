import React from 'react';
import './App.css';
import Child from './Child';
const MyContext = React.createContext();
function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"Hello from App"}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default App;
export { MyContext };
