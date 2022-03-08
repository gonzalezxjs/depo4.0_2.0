import React from 'react'
import './create_account.css'

const create_account = () => {
  return (
    <div class="containerx">
      
      <div class="tile"><h3>Registro</h3></div>

      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Primer nombre</span>
            <input
              type="text"
              placeholder="Ingrese el primer nombre"
              required
            />
          </div>
          <div class="input-box">
            <span class="details">Segundo nombre</span>
            <input
              type="text"
              placeholder="Ingrese el segundo nombre"
              required
            />
          </div>
          <div class="input-box">
            <span class="details">Primer apellido</span>
            <input
              type="text"
              placeholder="Ingrese el primer apellido"
              required
            />
          </div>
          <div class="input-box">
            <span class="details">Segundo apellido</span>
            <input
              type="text"
              placeholder="Ingrese el primer apellido"
              required
            />
          </div>

          <div class="input-box">
            <span class="details" htmlFor="rol">Rol</span>
            <select class="rol" name="rol" id="rol" required="requiered" placeholder="Rol">
              <option value="AD">Administrador</option>
              <option value="PS">Psicólogo</option>
              <option value="EN">Entrenador</option>
              <option value="DP">Deportista</option>
              <option value="AP">Aprendiz</option>
            </select>
          </div>
          <div class="input-box">
            <span class="details" htmlFor="genero">Género</span>
            <select id="genero" required placeholder="Seleccionar genero">
              <option value="FM">Femenino</option>
              <option value="MS">Masculino</option>
              <option value="OT">Otro</option>
              <option value="DP">Prefiero no decirlo</option>
            </select>
          </div>

          <div class="input-box">
            <span class="details" htmlFor="fecha">Fecha de nacimiento</span>
            <input id="fecha" type="date" />
          </div>

          <div class="input-box">
            <span class="details" htmlFor="sangre">Tipo de sangre</span>
            <select
              name="sangre"
              id="sangre"
              required
              placeholder="Seleccionar sangre"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div class="input-box">
            <span class="details" htmlFor="documento">Documento de identificación</span>

            <select
              name="tipo"
              id="tipo"
              required="requiered"
              placeholder="Tipo"
            >
              <option value="CC">Cédula de ciudadanía</option>
              <option value="CE">Cédula de extranjería</option>
              <option value="Ti">Tarjeta de identidad</option>
              <option value="PA">Pasaporte</option>
              <option value="NR">No registrado</option>
            </select>
          </div>

          <div class="input-box">
            <span class="details" htmlFor="documento">Número</span>
            <input
              type="number"
              name="documento"
              id="documento"
              data-bv-field="title"
              placeholder="Número de documento"
              required="required"
            />
          </div>

          <div class="input-box-n">
            <span class="details" for="emailAddress">Correo electronico</span>
            <input
              id="emailAddress"
              type="email"
              required
              placeholder="Proporcionar correo"
            />
          </div>

          <div class="input-box">
            <span class="details" for="password">Contraseña</span>
            <input type="password" required placeholder="Password" />
          </div>

          <div class="input-box">
            <span class="details" for="password">Confirmar contraseña</span>
            <input type="password" required placeholder="Confirmar password" />
          </div>
            <div class="con-boton">
         
            <button>Registrar</button>
          
        </div>
        </div>
      </form>
    </div>
  );
}

export default create_account