import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './Layout'
import Feed from './components/Feed';
import Messages from './components/Messages';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/messages" component={Messages} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App
