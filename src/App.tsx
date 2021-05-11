import Home from 'container/Home';
import { FC, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

const App: FC = (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/:slug" render={() => <Home />} />
    </Switch>
  );
};

export default App;
