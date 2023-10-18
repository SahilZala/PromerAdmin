
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './View/Dashbord/dashbord-view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/dashbord" index element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
