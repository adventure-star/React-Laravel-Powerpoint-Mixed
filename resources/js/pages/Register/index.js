import React, { useEffect, useState } from 'react'
import { signupWithAPI } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import PasswordBar from '../../components/PasswordBar';

const Register = () => {

    let history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmation] = useState("");

    const [error, setError] = useState(null);

    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
        setConfirmation(event.target.value);
    }

    const handleSubmit = event => {

        event.preventDefault();

        if (condition()) {

            signupWithAPI({ name, email, password, password_confirmation })
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
        return (name !== "" && email !== "" && password.length >= 6);
    }

    useEffect(() => {

        setError(null);

    }, [name, email, password, password_confirmation]);

    return (
        <form className="w-full pt-12" onSubmit={handleSubmit} style={{ minWidth: "1050px" }}>
            <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
                <div className="w-full relative flex justify-end">
                    <img src="/images/register-hero.png" alt="login-heroine" className="w-3/4" />
                    <img src="/images/account-gradient.png" className="absolute" alt="gradient" style={{ bottom: "-200px" }} />
                </div>
                <div className="w-full h-full absolute left-0 top-0 flex items-center">
                    <div className="w-full px-4">
                        <div className="bg-white w-2/5 px-8 py-4 rounded-xl">
                            <p className="text-xl">
                                Crea tu cuenta
                            </p>
                            <div className="flex items-center pl-3 py-2">
                                <div className="w-4 h-1 bg-customLightYellow"></div>
                                <p className="pl-2 text-sm">
                                    Y crearás increibles clases de estudios
                                </p>
                            </div>
                            <div className="px-4">
                                <p className="text-md pb-2">
                                    Nombre y Apellido
                                </p>
                                <input type="text" value={name} onChange={handleName} className="w-full text-md border-bottom border-b-4 border-customLightYellow" required />
                                <p className="text-md pt-3 pb-2">
                                    Correo electronico
                                </p>
                                <input type="email" value={email} onChange={handleEmail} className="w-full text-md border-bottom border-b-4 border-customLightYellow" required />
                                <p className="text-md pt-3 pb-2">
                                    Contraseña
                                </p>
                                <input type="text" value={password} onChange={handlePassword} className="w-full text-md border-bottom border-b-4 border-customLightYellow" required />
                                <div className="w-1/2">
                                    <PasswordBar password={password} />
                                </div>
                                <p className="text-sm">
                                    Usa 8 o más caracteres y combina letras, numero y símbolos
                                </p>
                                {error !== null &&
                                    <div className="text-center text-red-600 pt-3">{error}</div>
                                }
                                <div className="w-full text-center pt-8 pb-2">
                                    <button type="submit" className="text-xl text-white bg-customYellow px-2 rounded-lg">Comenzar</button>
                                </div>
                                <p className="text-center py-4">Si tiene una cuenta, <a href="/login" className="text-green-900">inicie sesión</a></p>
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

export default Register;
