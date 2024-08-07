import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import EmployeeList from './pages/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Header switchTheme={switchTheme} />
          <Routes>
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/employee/:id" element={<EmployeeProfile />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;