import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

const client = new ApolloClient({
  // link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  link: new HttpLink({uri: 'https://client-react.herokuapp.com/graphql'}),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
        <Route path="/" component={App}/>
    </ApolloProvider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
