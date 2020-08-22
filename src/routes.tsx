import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import User from './Pages/User'
import Initial from './Pages/Initial'
import ForgotPassword from './Pages/ForgotPassword'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Initial} />
                <Route path='/login' component={Login} />
                <Route path='/user/new' component={User} />
                <Route path='/user/settings' component={User} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
