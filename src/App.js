import React, { Fragment, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

import AdminLayout from './layouts/admin';
import CustomerLayout from './layouts/customer';
import AnonymousLayout from './layouts/anonymous';
import { LoadingSpinner } from './components/common/spinner';
import { connectAuthCheck } from './common/redux/connects';
import { UserRole } from './common/enums/auth';

function App({ history, tokenVerified, authenticated, userRole, verifyAccessTokenAction }) {
  useEffect(() => {
    verifyAccessTokenAction(history, false);
  }, []);

  const renderApp = () => (
    <Switch>
      <Route path='/admin'>
        {authenticated && (userRole === UserRole.Admin) ? <AdminLayout /> : <Redirect to='/' />}
      </Route>
      <Route path='/customer'>
        {authenticated && (userRole === UserRole.Customer) ? <CustomerLayout /> : <Redirect to='/' />}
      </Route>
      <Route path='/'>
        <AnonymousLayout />
      </Route>
    </Switch>
  );

  return (
    <Fragment>
      { !tokenVerified ? <LoadingSpinner /> : renderApp() }
    </Fragment>

  );
}

export default withRouter(connectAuthCheck(App));
