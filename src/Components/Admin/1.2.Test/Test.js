import React from 'react';
import Admin from '../1_home dashboard/Admin';
import './Test.css';
import  testImg from '../../assets/img/2916315.png';
import viewTest from '../../assets/img/3281188.png';

const Test = () => {
  return (
    <div>
        <Admin>
        </Admin>

        <div class="main">

            <div class="father_test">

                <div class="son_test">

                    <div class="test">

                        <div class="left">
                        
                            <div class="title">
                                <h2>Realizar test</h2>
                            </div>

                            <div class="cont">

                                <div class="imgen">
                                    <img src={testImg}></img>
                                </div>
                                <div class="btn">
                                    <a href="/admin/test/go"><button>Go</button></a>
                                </div>
                            </div>

                        </div>
    
                        <div class="right">

                            <div class="title">
                                <h2>Ver test realizados</h2>
                            </div>

                            <div class="cont">

                                <div class="imgen">
                                    <img src={viewTest}></img>
                                </div>
                                <div class="btn">
                                    <a href="/admin/test/view"><button>Go</button></a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Test