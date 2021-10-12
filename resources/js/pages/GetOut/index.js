import React from 'react';
import { logoutWithAPI } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { removeLocalToken } from '../../services/common';

const GetOut = (props) => {

    let history = useHistory();

    logoutWithAPI()
        .then(res => {
            if (res) {
                removeLocalToken();
                history.push("/");
            }
        }).catch(function (error) {
            console.log(error);
        });

    return null;

}

export default GetOut;
