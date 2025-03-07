import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './pages/Auth';
import Retry from './pages/Retry';
import Play from './pages/Play';

import './styles/index.scss';
import { checkHasAccessToken } from './utils/checkHelper';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [startInfo, setStartInfo] = useState(null);

  useEffect(() => {
    if (checkHasAccessToken()) {
      setIsLoading(true);
      setIsLoggedIn(true);
    }
  }, []);

  // if (isLoading) return null;

  // if (!isLoggedIn) {
  //   console.log(isLoggedIn);
  //   return (
  //     <Switch>
  //       <Route exact path='/' render={() => <Auth setIsLoggedIn={setIsLoggedIn} />}></Route>
  //       <Redirect from='*' to='/' />
  //     </Switch>
  //   );
  // }

  return (
    <Switch>
      <Route exact path='/' render={() => <Auth setIsLoggedIn={setIsLoggedIn} />}></Route>
      <Route exact path='/retry' render={() => <Retry setStartInfo={setStartInfo} />}></Route>
      <Route exact path='/play' render={() => <Play startInfo={startInfo} />}></Route>
      <Route exact path='/end'></Route>
    </Switch>
  );
};

export default App;
