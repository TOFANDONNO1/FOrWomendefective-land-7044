// import logo from './logo.png';
import './App.css';
import { Box, Heading, Image } from '@chakra-ui/react';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Box className="App">
    <Box>
      <Heading as='h6' size='xs' background='pink' color={'white'}>Min - 40% off -FreeShipping - Shop Now</Heading>
    </Box>
    <Navbar/>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
       <AllRoutes/>
    </Box>
  );
}

export default App;
