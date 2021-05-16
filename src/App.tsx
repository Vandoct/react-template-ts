import { HOME, LOGIN, RADIO } from 'constants/webRoute';
import Home from 'container/Home';
import { FC, ReactElement, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { checkAuthState } from 'redux/common/fetcher';

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path={HOME} render={() => <Home />} />
      <Route path={LOGIN} render={() => <Home />} />
      <Route path={RADIO} render={() => <Home />} />
    </Switch>
  );
};

export default App;
