import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import './App.css';
import qs from 'stringquery';

class App extends Component {
  render() {
    const { data } = this.props;
    let hello, fortune;
    
    if (!data.loading) {
      hello = data.Hello.message;
      fortune = data.GetFortuneCookie.message
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{hello}</h1>
        </header>
        <p className="App-intro">
          {fortune}
        </p>
      </div>
    );
  }
}


const QUERY = gql`
  query QueryName ($name: String) { 
    GetFortuneCookie { 
      message
    }
    Hello (name: $name) {
      message
    }
  }
`;

export default graphql(QUERY, {
  options: (props) => {
    var params = qs(props.location.search);
    return { variables: { name: params.name }}
  }
})(App);