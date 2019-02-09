import React from 'react';
import PropTypes from 'prop-types';

const App = props => <div>{props.someInfo}</div>;

export default App;

App.propTypes = {
  someInfo: PropTypes.string
};
