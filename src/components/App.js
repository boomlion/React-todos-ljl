import React from 'react';
import Footer from './Footer';
import AddTodo from '../container/AddTodo';
import VisibleTodo from '../container/VisibleTodo';
import './app.css'
const App = () => (
  <div className="app">
    <AddTodo />
    <VisibleTodo />
    <Footer />
  </div>
)
export default App;