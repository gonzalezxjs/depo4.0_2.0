import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIndex from './routes/HomeIndex'
import AdminIndex from './routes/AdminIndex';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeIndex/>}/>
          <Route path="/admin" element={<AdminIndex/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
