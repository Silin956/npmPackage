import React  from 'react';
import ReactDOM from 'react-dom';
import { TBModel, TBAlert } from '../index';

const App = () => {
  return (
    <>
      <TBAlert message="shihis" description="是耍好苏啊好的时代" type="error" showIcon closeText={(<span>关闭</span>)}/>
      <TBModel/>
    </>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));