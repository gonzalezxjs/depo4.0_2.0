import React from 'react';
import UserIndex from '../User';
import '../1.1_Home/Home_dashboard_user.css';
import imagen from '../../../assets/img/pexels-cátia-matos-1045534.jpg';

const Home_bashboard_user = () => {
  return (
    <div className='hi'>

      <div className='menu'>
        <UserIndex/>
      </div>
      

      <div className='back-back'>
        <div className='one-back'>

          <div class="efect">
            <div class="neon">Bienvenido a </div>
            <div class="flux">Deportes 4.0 </div>
          </div>

          <div class="imagge">
            <img class='image' src={imagen} alt=''/>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Home_bashboard_user
