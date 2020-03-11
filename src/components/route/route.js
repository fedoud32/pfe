import React, {useContext, useState, useCallback} from 'react';
import NavigationContext from './navigationContext';
import { Redirect, Route as BaseRoute } from 'react-router-dom';
import {encodeUri} from '../../utils/url';
import userContext from '../contexts/userContext'
import Header from '../header/header';
import Footer from '../footer/footer';
import classNames from '../../utils/classNames';


const Route = (props) => {
    const { user } = useContext(userContext);

    const [lastContextPath, setLastContextPath] = useState(props.path);
    const [contextHeaderProps, setContextHeaderProps] = useState(null);
  

    const contextChange = useCallback(
        (newContext) => {
          setContextHeaderProps(newContext);
          setLastContextPath(props.path);
        },
        [props.path],
      );

      if (!user && props.protected) {
        return <Redirect to={`/login${encodeUri({ from: window.location.pathname + window.location.search })}`} />;
      }
    

      const RouteComponent = (
          <div className={classNames('rootPage', (props.header || props.footer ) && 'withLayout')}>
              <BaseRoute path={props.path} {...props} />
          </div>
      )
    


    return(
        <NavigationContext.Provider value={{setHeaderProps: contextChange}} >
            {props.header && (
        <Header
          context={lastContextPath === props.path ? contextHeaderProps : null}
          {...props.header}
          protected={props.protected}
        />
      )}
      {RouteComponent}
      {props.footer && <Footer />}

        </NavigationContext.Provider>
    )
}

export default Route;