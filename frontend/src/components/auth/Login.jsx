import React, { useState } from 'react';

const Login = () => {
	//state para iniciar sesion
	const [usuario, setUsuario] = useState({
		username: '',
		contrasenia: ''
	});

	//Extrayendo los valores
	const { username, contrasenia } = usuario;

	const handleChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value
		});
	};

	const enviarLogin = (e) => {
		e.preventDefault();

		//validacion de campos

		// history.push("/home")
	};

	return (
		<>
			<div className='row mt-3'>
				<h1 className='col text-center mb-3 mt-3 text-secondary'>
					Inicia Sesión
				</h1>
			</div>

			<form onSubmit={enviarLogin}>
				<label htmlFor='username'>Usuario</label>
				<input
					id='username'
					name='username'
					value={username}
					onChange={handleChange}
					type='text'
					className='form-control'
				/>

				<label htmlFor='contrasenia'>Contraseña</label>
				<input
					id='contrasenia'
					name='contrasenia'
					value={contrasenia}
					onChange={handleChange}
					type='password'
					className='form-control'
				/>

				<input
					type='submit'
					value='Inicia Sesión'
					className='btn btn-primary mt-3'
				/>
			</form>
		</>
	);
};

export default Login;
