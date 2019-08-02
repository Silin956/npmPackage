import React  from 'react';
import ReactDOM from 'react-dom';
import { TBModel, TBAlert } from '../src';

const App = () => {
  return (
    <>
      <TBAlert message="shihis" description="是耍好苏啊好的时代" type="error" showIcon/>
      <TBModel/>
    </>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));