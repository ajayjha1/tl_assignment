import logo from './logo.svg';
import './App.css';
import CreateProfile from './components/CreateProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateProfileNext from './components/CreateProfileNext';
import ProfilePage from './components/ProfilePage';
import ProfileHome from './components/ProfileHome';
import BottomNavbar from './components/BottomNavbar';
import WorkPage from './components/WorkPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateProfile/>} />
      <Route path='CreateProfileNext' element={<CreateProfileNext/>} />
      <Route path='ProfilePage' element={<ProfilePage/>} />
      <Route path='ProfileHome' element={<ProfileHome/>} />
      <Route path='BottomNavbar' element={<BottomNavbar/>} />
      <Route path='WorkPage' element= {<WorkPage/>} />
    </Routes>
    
    </BrowserRouter>
    // <CreateProfile/>
  );
}

export default App;
