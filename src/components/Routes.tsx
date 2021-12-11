import { Redirect, Route, Switch } from 'react-router-dom';
import Feed from './Feed';
import Messages from './Messages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/messages" component={Messages} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes
