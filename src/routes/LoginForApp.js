import React from 'react'
import LoginApp from '../Components/Home/5_Login/5.1_Login_form/LoginApp';
import '../Components/Home/5_Login/5.2_Login_page/LoginForApp.css';
import NabBarApp from '../Components/Home/1_NavBarApp/NavBarApp';
import FooterApp from '../Components/Home/4_Footer/FooterApp';

const LoginForApp = () => {
  return (
    <div class='log'>
      <NabBarApp/>
        <div class='big_square'>
          <div class='medium_square'>
            <LoginApp/>
          </div>
        </div>
      <FooterApp/>
    </div>
  )
}

export default LoginForApp