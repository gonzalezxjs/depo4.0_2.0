import React from 'react'
import NavBarApp from '../Components/Home/1_NavBarApp/NavBarApp'
import Hero from '../Components/Home/2_Hero/Hero'
import Bobyapp from '../Components/Home/3_Body/Bobyapp'
import FooterApp from '../Components/Home/4_Footer/FooterApp'


const HomeIndex = () => {
    return (
     <div >
         <NavBarApp/>
         <Hero/> 
         <Bobyapp/>
         <FooterApp/> 
     </div>
        
    )
}

export default HomeIndex
