import { HOME, LOGIN, RADIO } from 'constants/webRoute';
import Home from 'container/Home';
import { FC, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

const App: FC = (): ReactElement => {
  return (
    <Switch>
      <Route exact path={HOME} render={() => <Home />} />
      <Route path={LOGIN} render={() => <Home />} />
      <Route path={RADIO} render={() => <Home />} />
    </Switch>
  );
};

export default App;
