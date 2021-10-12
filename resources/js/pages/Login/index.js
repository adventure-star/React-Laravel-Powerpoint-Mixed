import React, { useState, useEffect } from 'react'
import { loginWithAPI } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {

        event.preventDefault();

        if (condition()) {
            loginWithAPI({ email, password })
                .then(res => {
                    if (res) {
                        history.push("/");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setError(error.toString().substring(7));
                });
        }

    }

    const condition = () => {
        return (email !== "" && password.length >= 6);
    }

    useEffect(() => {

        setError(null);

    }, [email, password]);

    return (
        <form className="w-full pt-12" onSubmit={handleSubmit} style={{minWidth: "900px"}}>
            <div className="relative mx-auto" style={{maxWidth: "1200px"}}>
                <div className="w-full flex justify-end relative">
                    <img src="/images/login-heroine.png" alt="login-heroine" className="w-3/4" />
                    <img src="/images/account-gradient.png" className="absolute" alt="gradient" style={{ bottom: "-150px" }}/>
                </div>
                <div className="w-full h-full absolute left-0 top-0 flex items-center">
                    <div className="w-full px-4">
                        <div className="bg-white w-2/5 px-8 py-4 rounded-xl">
                            <p className="text-xl">
                                Bienvenido
                        </p>
                            <div className="px-4">
                                <p className="text-md pt-3 pb-2">
                                    Correo electronico
                            </p>
                                <input type="email" value={email} onChange={handleEmail} className="w-full text-md border-bottom border-b-4 border-customLightYellow" required />
                                <p className="text-md pt-3 pb-2">
                                    Contraseña
                            </p>
                                <input type="password" value={password} onChange={handlePassword} className="w-full text-md border-bottom border-b-4 border-customLightYellow" required />
                                <div className="flex items-center pl-3 pt-4">
                                    <div className="w-4 h-1 bg-customLightYellow"></div>
                                    <p className="pl-2 text-sm">
                                        Crear cuenta
                            </p>
                                </div>
                                <div className="flex items-center pl-3">
                                    <div className="w-4 h-1 bg-customLightYellow"></div>
                                    <p className="pl-2 text-sm">
                                        Olvide mi contraseña
                            </p>
                                </div>
                                {error !== null &&
                                    <div className="text-center text-red-600 pt-3">{error}</div>
                                }
                                <div className="w-full text-center pt-8 pb-2">
                                    <button type="submit" className="text-xl text-white bg-customYellow px-2 rounded-lg">Ingresar</button>
                                </div>
                                <p className="text-center py-4">Si no tiene una cuenta, <a href="/register" className="text-green-900">regístrese</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-24">
                <img src="/images/account-chair.png" alt="register-chair" className="mx-auto" />
                <p className="text-center text-md pt-4 pb-2">
                    Todos los derechos reservados
                </p>
            </div>
        </form>
    )
}

export default Login;
