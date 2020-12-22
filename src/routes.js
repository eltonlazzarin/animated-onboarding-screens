import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Main from './pages/Main';
import NewNaver from './pages/NewNaver';
import EditNaver from './pages/EditNaver';

function Routes() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="/logon" />
      <Route path="/logon" component={Logon} />
      <Route path="/navers" component={Main} />
      <Route path="/createnaver" component={NewNaver} />
      <Route path="/editnaver/:id" component={EditNaver} />
    </BrowserRouter>
  );
}

export default Routes;
