import React, {useContext, useState } from 'react';
import { Switch } from 'react-router-dom';
import Route from '../components/route/route';
import UserContext from '../components/contexts/userContext'

// containers
import HomeContainer from '../containers/homeContainer'
import LoginContainer from './loginContainer';

const RootContainer = () => {

    const [user, setUser] = useState(null); 


    return(
        <UserContext.Provider value={{user, setUser}} >
            
            <Switch>
                <Route exact  path='/' header footer component={HomeContainer} />
                <Route  path='/login' footer component={LoginContainer} />
            </Switch>
        </UserContext.Provider>
        

    )
}
export default RootContainer;