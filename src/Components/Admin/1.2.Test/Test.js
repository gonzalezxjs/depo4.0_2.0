import React from 'react';
import Admin from '../1_home dashboard/Admin';
import './Test.css';

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

                                <div class="imgen"></div>
                                <div class="btn">
                                    <button>Go</button>
                                </div>
                            </div>

                        </div>
    
                        <div class="right">

                            <div class="title">
                                <h2>Ver test realizados</h2>
                            </div>

                            <div class="cont">

                                <div class="imgen"></div>
                                <div class="btn">
                                    <button>Go</button>
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