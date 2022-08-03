import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIndex from './routes/HomeIndex'
import AdminIndex from './Components/Admin/1_home dashboard/AdminIndex';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForApp from './routes/LoginForApp';
import UserIndex from './routes/UserIndex';
import RecoverPassword from './routes/RecoverPassword';
import CreateAccount from './routes/Create_account_form';
import ContactUs from './routes/ContactUs';
import Test from './Components/Admin/1.2.Test/Test';
import Perform  from './Components/Admin/1.Perform/Perform_test';
import Help from './Components/Admin/3.Help/Help';
import PrivateRoutes from './Components/PrivateRoutes';
import View_test from './Components/Admin/2_view_test/View_test'
import ContactU from './Components/Usuarios/2_Contact/ContactU';
import View_testU from './Components/Usuarios/3_test/View_testU';
import Error404 from './Components/Home/Error_404/Error404';

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
          {/* <Route exact path='/admin/test/go' element={<PrivateRoutes/>}>
            <Route exact path='/admin/test/go' element={<Perform/>}/>
          </Route> */}
          <Route  path="/admin/test/view" element={<View_test/>}/>
          <Route  path="/admin/test/go" element={<Perform/>}/> 
          <Route  path="/admin/help" element={<Help/>}/>
          <Route  path="/user/contact" element={<ContactU/>}/>
          <Route  path="/user/test_view" element={<View_testU/>}/>
          <Route  path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
