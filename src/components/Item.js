import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';
import Items from './ItemList';

class Item extends React.Component{
  onClickToDeleteSelf = (event) => {
    this.props.deleteSelf(this.props.itemInfo.id);
  }

  onClickToPickSelfComments = (event) => {
    this.props.pickSelfComments(this.props.itemInfo.id);
  }

  render(){
    return(
      <div className='second-list-box' tabIndex="-1">
            <div className="list-box" >
               <div className='name-count' onClick={this.onClickToPickSelfComments}>
                <div  className="list-name" >{this.props.itemInfo.name}</div>
                <div className='comment-counter' align='center'>{this.props.itemInfo.comments.length}</div>
               </div>
                <div className='list-btn'><button className='btn btn-danger' onClick={this.onClickToDeleteSelf}>DELETE</button></div>
            </div>
        </div>
    )
  }
}

export default Item;