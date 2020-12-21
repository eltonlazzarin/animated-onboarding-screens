import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="/logon" />
      <Route path="/logon" component={Logon} />
      <Route path="/navers" component={Main} />
    </BrowserRouter>
  );
}

export default Routes;
