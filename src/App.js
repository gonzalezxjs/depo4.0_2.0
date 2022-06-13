import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIndex from './routes/HomeIndex'
import AdminIndex from './routes/AdminIndex';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForApp from './routes/LoginForApp';
import UserIndex from './routes/UserIndex';
import RecoverPassword from './routes/RecoverPassword';
import CreateAccount from './routes/Create_account_form';
import ContactUs from './routes/ContactUs';
import Test from './Components/Admin/1.2.Test/Test';

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
          <Route path="/create" element={<CreateAccount/>}/>
          <Route path="contact_us" element={<ContactUs/>}/>
          <Route path="/admin/test" element={<Test/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
