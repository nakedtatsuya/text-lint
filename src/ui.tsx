import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
import './ui.css';
import { filterInvalidTextNode } from './utils/index';

const TEXT_NODES = 'TEXT_NODES';

const App: React.FC = () => {
  const [textNodes, setTextNodes] = useState([]);

  useEffect(() => {
    window.onmessage = event => {
      const msg = event.data.pluginMessage;
      if (!msg) return;
      switch (msg.type) {
        case TEXT_NODES:
          const invalidTextNode = filterInvalidTextNode(msg.value);
          setTextNodes(invalidTextNode);
          break;
        default:
          return;
      }
    };
  }, []);

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <MainPage textNodes={textNodes} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
