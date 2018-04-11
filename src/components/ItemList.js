import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';
import Item from './Item';


class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      items: []
    }
    

  }

  onClickToAddItem = (event) => {
    var regNa = /^[A-Za-zА-Яа-яЁё0-9]{3,30}$/;
    if( regNa.test(this.refs.userName.value) == true ) {
    this.props.addItem(
      {
        id: this.props.validId, 
        name:this.refs.userName.value,
        comments:[
          
        ]
      }
    );
  } else {
  	alert('Enter your item')
  }
}
  

  render() {
      return (
        <div className='main-items-block'>
            <div>
              <form className="form-inline">
              <legend><h2>Items</h2></legend>
              <div className="form-group mx-sm-3">
                <input type="text" className="form-control"  ref="userName" placeholder="Type name here..."/>
              </div>
              <button type='reset' className="btn add-btn" onClick={this.onClickToAddItem} >Add new</button>
      
              </form>
            </div>
            <div className='main-list-box'>
              {
                this.props.itemsList.map(
                  (el, i) => (
                    <Item 
                      pickSelfComments={this.props.pickTheItemComments} deleteSelf={this.props.deleteItem} 
                      itemInfo={el} index={i} key={i}
                    />
                  )
                )
              }
            </div>
        </div>
    )
    }
}

export default Items;