import React, {useContext, useState } from 'react';
import { Switch } from 'react-router-dom';
import Route from '../components/route/route';
import UserContext from '../components/contexts/userContext'

// container
import HomeContainer from '../containers/homeContainer'

const RootContainer = () => {

    const [user, setUser] = useState(null); 


    return(
        <UserContext.Provider value={{user, setUser}} >
            <Switch>
                <Route  path='/' header footer component={HomeContainer} />
            </Switch>
        </UserContext.Provider>
        

    )
}
export default RootContainer;