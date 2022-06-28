import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoginApp from './Home/5_Login/5.1_Login_form/LoginApp';
const PrivateRoutes = () => {
     // determine if authorized, from context or however you're doing it
     console.log("El valor de la authe es", global.authen);
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return global.authen ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoutes