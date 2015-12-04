import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  getDefaultProps: function(){
    return {
      className: 'checkbox-wrapper'
    , onChange: function( checked, value ){}
    }
  }

, render: function(){
    return (
      <div className={this.props.className}>
        <input id={this.props.id}
          type="checkbox"
          ref="inputEl"
          checked={this.props.checked}
          value={this.props.value}
          readOnly
        />
        <div
          contentEditable="true"
          className="checkbox-facade"
          onClick={this.onClick}
          onKeyPress={this.onKeyPress}
          onKeyUp={this.onWrapperText} />
        {this.props.children}
      </div>
    );
  }

, getInputEl: function(){
    return ReactDOM.findDOMNode( this.refs.inputEl );
  }

, toggle: function(){
    return !this.getInputEl().checked;
  }

, onClick: function( e ){
    this.props.onChange( this.toggle(), this.getInputEl().value );
  }

  // Prevent text from showing at all
, onKeyPress: function( e ){
    e.preventDefault();
    e.target.textContent = '';
  }

, onWrapperText: function( e ){
    if ( e.which === 32 ){
      this.props.onChange( this.toggle(), this.getInputEl().value );
    }
  }
});