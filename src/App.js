import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIndex from './routes/HomeIndex'
import AdminIndex from './routes/AdminIndex';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import LoginForApp from './routes/LoginForApp';
import UserIndex from './routes/UserIndex';
import RecoverPassword from './routes/RecoverPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomeIndex/>}/>
          <Route path="/admin" element={<AdminIndex/>}/>
          <Route path="/signin" element={<LoginForApp/>}/>
          <Route path="/user" element={<UserIndex/>}/>
          <Route path="/recoverpass" element={<RecoverPassword/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
