import React from 'react';
import WithHeaderLayout from '../../layouts/WithHeaderLayout';
import CustomQuestions1 from '../../components/CustomQuestions1';

const SetUp = (props) => {

    return (
        <WithHeaderLayout>
            <img src="/images/setup-main.png" className="w-full" style={{ minWidth: "620px" }} alt="setup-main" />
        </WithHeaderLayout>
    )
}

export default SetUp;
