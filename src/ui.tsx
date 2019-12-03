import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './ui.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
