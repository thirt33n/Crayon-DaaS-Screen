import './App.css';
import Sidebar from './Components/SideBarNav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Map from './Components/Map';
import Onboard from './Components/Onboard';
import Analyze from './Components/Analyze';
import Monitor from './Components/Monitor';
import Act from './Components/Act';
import Enrich from './Components/Enrich';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route exact path='/onboarding' element={<Onboard />}></Route>
        <Route exact path='/map' element={<Map />}></Route>
        <Route exact path='/enrich' element={<Enrich />}></Route>
        <Route exact path='/act' element={<Act />}></Route>
        <Route exact path='/analyze' element={<Analyze />}></Route>
        <Route exact path='/monitor' element={<Monitor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
