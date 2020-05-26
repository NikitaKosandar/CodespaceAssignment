import React from "react";
import * as actions from './loginAction';
import { connect } from 'react-redux';


class LoginComponent extends React.Component {
  constructor() {
    super()
    this.state = {
        userName: '',
        password: ''
    }
}

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }


  handleSubmit = (event) => {
    this.props.login(this.state);
    event.preventDefault();
  }


  render() {
          return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name='userName' value={this.state.userName} placeholder="Enter Username" onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name='password' value={this.state.password} placeholder="Enter Password" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          )
      }
  }
  
  const mapStateToProps = state => ({
    
  });

  const mapDispatchToProps = dispatch => ({
    login: (payload) => dispatch(actions.login(payload)),
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);