import React, { useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

// CSS
import './components/styles/about.css';
import './components/styles/contact.css';
import './components/styles/header.css';
import './components/styles/navbar.css';
import './components/styles/project.css';
import './components/styles/work.css';

// NPM
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light"
      }
    })
  );

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
 
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <button onClick={handleDarkModeToggle}>
        Toggle
      </button>


    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      

      


      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>

    </ThemeProvider>
  );
}

export default App;
