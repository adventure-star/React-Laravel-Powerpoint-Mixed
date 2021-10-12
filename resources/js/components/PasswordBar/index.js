import React, { useEffect, useState } from 'react'

const PasswordBar = (props) => {

    const [state, setState] = useState(1);

    useEffect(() => {
        check();
    });

    const check = () => {

        let password = props.password;

        let strength = 0;

        if (password.length >= 8) {
            strength++;
        }
        if (password.length >= 12) {
            strength++;
        }
        if (password.match(/\d+/)) {
            strength++;
        }
        if (password.match(/[a-z]/)) {
            strength++;
        }
        if (password.match(/[A-Z]/)) {
            strength++;
        }
        if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,£,(,)]/)) {
            strength++;
        }

        console.log("strength", strength);

        setState(strength);

    }
    return (
        <div className="w-full flex items-center py-3">
            <div className={`${state < 1 ? `bg-blue-100` : `bg-customRed`} w-1/4 h-3`}></div>
            <div className={`${state >= 3 ? `bg-customLightYellow` : `bg-blue-100`} w-1/4 h-3`}></div>
            <div className={`${state >= 6 ? `bg-customGreen` : `bg-blue-100`} w-1/4 h-3`}></div>
            {state < 3 &&
                <p className="pl-2">Débiles</p>
            }
            {state >= 3 && state < 6 &&
                <p className="pl-2">Medio</p>
            }
            {state >= 6 &&
                <p className="pl-2">Excelente</p>
            }
        </div>
    )
}

export default PasswordBar;