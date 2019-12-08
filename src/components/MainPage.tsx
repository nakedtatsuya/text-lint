import * as React from 'react';
import {checkLint, filterInvalidTextNode} from '../utils/index';
import {useEffect} from "react";

interface IProps {
  textNodes: any;
}
const FOCUS_TEXT = 'FOCUS_TEXT';

const MainPage: React.FC<IProps> = props => {

  useEffect(() => {
    if(props.textNodes.length !== 0) {
      parent.postMessage({
        pluginMessage: {
          type: FOCUS_TEXT,
          value: props.textNodes[0],
        }
      }, "*");
    }
  }, [props]);



  const badTextList = props.textNodes.map((item) => {
    return (
      <li key={item.id}>
        <p>{item.characters}</p>
      </li>
    )
  });

  return (
    <div>
      {badTextList.length !== 0 ?
        <ul>
          {badTextList}
        </ul>
        :
        <p>問題のあるテキストはありません</p>
      }
      <button
        onClick={() => {
          console.log(checkLint('わかりました. web でjavascriptを使いましょう.'));
        }}
      >
        Lintを実行する
      </button>
    </div>
  );
};

export default MainPage;
