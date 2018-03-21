import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://client-react.herokuapp.com/graphql'}),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={App}/>
      </div>


    </ApolloProvider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
