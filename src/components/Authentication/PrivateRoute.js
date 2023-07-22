import React from 'react'
import { useAuth}  from '../../Context/AuthContext';
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({component:Component, ...rest}){

    const { CurrentUser } = useAuth();


    return (
        <Route
          {...rest}

          render={(props) =>{

              return CurrentUser ? (

                  <Component {...props} />
              ):(
                  <Redirect to="/login"/>
              );
          }

          }
          >
            
        </Route>
    )
}

