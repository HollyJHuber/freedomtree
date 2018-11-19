import React from 'react';
import { connect } from 'react-redux';

const TestPage = (props) => (
  <main>
    <button onClick = {() => {
      console.log('test-->interview');
      props.history.push('/interview');
    }}>interview</button>
    <button onClick = {() => {
      console.log('test-->home');
      props.history.push('/');
    }}>there's no place like home</button>
  </main>

);

export default connect () (TestPage);