import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '././bootstrap/bootstrap.css';
import FirstDiv from './App';
import BodyDiv from './App1';
//import TableDiv from './App2';
import PercDiv from './App3';
import NameForm from './Appinit';
//import RefItems from './App4.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NameForm />, document.getElementById('toor'));
ReactDOM.render(<FirstDiv />, document.getElementById('root'));
ReactDOM.render(<BodyDiv />, document.getElementById('nextdiv'));
//ReactDOM.render(<TableDiv />, document.getElementById('tableofitems'));
ReactDOM.render(<PercDiv />, document.getElementById('perdiv'));
//ReactDOM.render(<RefItems />, document.getElementById('referenceitems'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
