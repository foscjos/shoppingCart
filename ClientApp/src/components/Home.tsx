import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Hello there!</h1>
    <p>Welcome to the best little sandwich shop around. Hope you find something you enjoy!</p>
  </div>
);

export default connect()(Home);
