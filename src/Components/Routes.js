import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Contacts from './Contacts'
import UserDetails from './UserDetails'
import Review from './ReviewComponent/Review'

const Routes = () => (
  <routes>
    <Switch>
      <Route exact path='/' component={UserDetails}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/review' component={Review}/>
    </Switch>
  </routes>
)

export default Routes