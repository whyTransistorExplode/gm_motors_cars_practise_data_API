import React, {Component} from 'react';

class MyComponent extends Component {
  state = {
    firstName: '',
    lastName: '',
    middleName: ''
  };


  render() {
    const getInputValue = (e) => {
      this.setState({[e.target.name]: e.target.value})
    };
    const showState = () => {
    };


    return (
      <div>
        <input type="text" name="firstName" onChange={getInputValue}/>
        <input type="text" name="lastName" onChange={getInputValue}/>
        <input type="text" name="middleName" onChange={getInputValue}/>
        <button onClick={showState}>Show state</button>
      </div>
    );
  }
}

MyComponent.propTypes = {};

export default MyComponent;
