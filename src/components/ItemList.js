import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';
import Item from './Item';


class Items extends Component {
  
  onClickToAddItem = (event) => {
    var regNa = /^[A-Za-zА-Яа-яЁё0-9 _.,!(){}\[\]+=]{3,30}$/;
    var arr = this.props.itemsList;
    var doublicateName = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === this.refs.userName.value) {
            doublicateName = false
        }
    }
    if(regNa.test(this.refs.userName.value) === true && doublicateName) {
      this.props.addItem(
        {
          id: this.props.validId, 
          name:this.refs.userName.value,
          comments:[
            
          ]
        }
      );
    }else !doublicateName ? alert('Name is already used') : alert('Enter your item name please');
  }
  
  preventSubmit = (event)  =>{
    event.preventDefault();
  }

  handleKeyPress = (event) => {
    if(event.charCode == 13){
        var regNa = /^[A-Za-zА-Яа-яЁё0-9 _.,!(){}\[\]+=]{3,30}$/;
        var arr = this.props.itemsList;
        var doublicateName = true;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].name === this.refs.userName.value) {
                doublicateName = false
            }
        }
        if(regNa.test(this.refs.userName.value) === true && doublicateName) {
          this.props.addItem(
            {
              id: this.props.validId, 
              name:this.refs.userName.value,
              comments:[
                
              ]
            }
          );
          this.refs.userName.value = '';
        }else !doublicateName ? alert('Name is already used') : alert('Enter your item name please');
    }
  }

  
  render() {
      return (
        <div className='main-items-block'>
            <div>
              <form className="form-inline" onSubmit={this.preventSubmit}>
              <legend><h2>Items</h2></legend>
              <div className="form-group mx-sm-3">
                <input type="text" className="form-control"  onKeyPress={this.handleKeyPress} ref="userName" placeholder="Type name here..."/>
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