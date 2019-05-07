import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';

class Dairy extends Component {

  clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  render () {
    return (
  <div>
      <div className='dairy-col'>
        <h3 align='center'>DAIRY APP</h3>
        <p align='center'>Comment with no sence</p>
        <button type='reset' className="btn clear-btn" onClick={this.clearStorage} >Clear dairy</button>
      </div>
      <div>
        <Store />
      </div>
  </div>
    )
  }
}

export default Dairy;