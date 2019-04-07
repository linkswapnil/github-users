import React from 'react';
import { Route, Switch } from "react-router-dom";
import {UserSearch} from 'components/UserSearch'
import UserProfile from 'components/UserProfile'

export const Routes = () => {
 return(
   <Switch>
     <Route exact path="/" component={UserSearch} />
     <Route exact path="/users/:username" component={UserProfile} />
   </Switch>
 )
}
