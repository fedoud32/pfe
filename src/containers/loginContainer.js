import React from 'react';
import Card from '../components/ui/card/card'
import classes from './.scss/loginContainer.module.scss';

const LoginContainer = () => {
    return (
        <div className={classes.cardWrapper}>
            <Card>hello world</Card>
        </div>
    )
}

export default LoginContainer;