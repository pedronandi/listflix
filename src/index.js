import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import RegisterVideo from './pages/Register/Video';
import RegisterCategory from './pages/Register/Category';

ReactDOM.render(
  /*SPA (Single Page Application) caracteristc, the pages doesn't reload on routing, they're just rendered*/
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Register/Video" component={RegisterVideo} />
      <Route path="/Register/Category" component={RegisterCategory} />
      <Route component={() => (<div>HTTP error 404! Page doesn't exists!</div>)} />
    </Switch>
  </BrowserRouter>,

  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  
  document.getElementById('root')
);