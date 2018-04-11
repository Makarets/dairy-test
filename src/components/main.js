import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';
import Comment from './Comment';

class Dairy extends React.Component {
  render () {
    return (
  <div>
      <div className='dairy-col'>
        <h3 align='center'>DAIRY APP</h3>
        <p align='center'>Comment with no sence</p> 
      </div>
      <div>
        <Store />
      </div>
  </div>
    )
  }
}

export default Dairy;