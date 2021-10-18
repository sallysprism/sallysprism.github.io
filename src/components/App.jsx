import React from 'react';
import AppTodo from './AppTodo';
import './App.scss';
import '../styles/Normalize.scss';
import '../styles/Reset.scss';

const App = () => (
  <>
  <div className="title-area">
    <h1 className="title">여기가 메인입니다</h1>
  </div>
  <div className="app-todo">

    <AppTodo />
  </div>
  </>
);

export default App;