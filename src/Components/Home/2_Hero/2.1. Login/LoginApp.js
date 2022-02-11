import React,{useState} from 'react';
import './LoginApp.css';
import { Formik } from 'formik';


const Login = () => {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

 const Resultado = () =>{

    let resultados = 0;

    setResultado(resultados)

 }

    return (
        

        <div className = 'contenedor' >

            <div className= 'login-box'>
                <div className = 'title'>
                    <h1 className = 'Ini'>Inicio de sesión</h1>
                </div>
                
                <Formik
                    initialValues={{
                        correo: '', 
                        password:''

                    }}
                    validate={(valores) => {
                        let errores = {};
                        
                        //Correo
                        if(!valores.correo){
                            errores.correo = 'Por favor, ingrese el correo';
                        }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                            errores.correo = "Ingrese un correo válido";
                        }

                        //Contraseña 
                        if(!valores.password){
                            errores.password = 'Por favor, ingrese la contraseña';
                        }

                        return errores;
                    }}
                    onSubmit={(valores)=> {
                        console.log('Formulario Enviado');
                    }}
                >
                    {( {values, errors, handleSubmit, handleChange, handleBlur} ) => (
                        <form  onSubmit={handleSubmit}>

                            <div className="user-box">

                             <div className="indicadores">
                                <p>Correo</p>
                            </div> 

                            <input 
                                type="text"  
                                id="correo"  
                                name="correo" 
                                placeholder="" 
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.correo && <div className="Error">{errors.correo}</div>}
                            </div>

                        

                            <div className="user-box">
                                
                            <div className="indicadores">
                                <p>Contraseña</p>
                            </div>

                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="" 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && <div className="Error">{errors.password}</div>}
                            </div>
                    
                            
                
                
                            <a href="#" className="resetpasswd">
                                ¿Olvidaste la contraseña?
                            </a>
                
                
                            <button type="submit" className="ingreso">
                                login
                            </button>

                    </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
