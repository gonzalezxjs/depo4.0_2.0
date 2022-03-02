import React from 'react';
import NabBarApp from '../Components/Home/1_NavBarApp/NavBarApp';
import FooterApp from '../Components/Home/4_Footer/FooterApp';
import '../Components/Home/5_Login/5.3_Login_recover_password/RecoverPassword.css'
import RecoverPass_form from '../Components/Home/5_Login/5.4_Login_recover_password_form/RecoverPass_form';

const RecoverPassword = () => {
  return (
    <div class='log'>
      <NabBarApp/>
        <div class='big_square'>
          <div class='medium_square'>
            <RecoverPass_form/>
          </div>
        </div>
      <FooterApp/>
    </div>
  )
}

export default RecoverPassword