import React from 'react';
import { history } from '../routers/AppRouter';
import Loading from "./Loading";

const TestPage = (props) => {
  console.log(props);
  return(
    <main>
      <button onClick = {() => history.push('/interview')}>Testing</button>
      <Loading />
    </main>
  );
};

export default TestPage;