import React from 'react';
import TextInput from '../components/forms/inputs/textInput/textInput';
import classes from './scss/homeContainer.module.scss';

const HomeContainer = () => {
    return(
        <div className={classes.HomeContainer}>
            <div className={classes.header}>
                <span>service de marketing pour les entreprise</span>
            </div>
            <div className={classes.top}>
                <span> Vous recherchez une solution qui vous incite à dépenser encore plus en publicité numérique?</span>
            </div>
            
        </div>
    )
}
export default HomeContainer;