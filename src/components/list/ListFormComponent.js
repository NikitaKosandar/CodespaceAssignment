import React from "react";
import { connect } from 'react-redux';


class ListFormComponent extends React.Component {
  constructor() {
    super()
    this.state = {
        name: '',
        description: '',
        price : '',
        weight: '',
        img: '',
        date : '',
        subItemName : '',
        subItemPrice : ''
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
    event.preventDefault();
  }


  render() {
          return (
            <div className="card">
            <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/><br/>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br/><br/>
            Price:
            <input type="text" name="price" value={this.state.price} onChange={this.handleChange} /><br/><br/>
            Weight:
            <input type="text" name="weight" value={this.state.weight} onChange={this.handleChange} /><br/><br/>
            Image:
            <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" value={this.state.img} onChange={this.handleChange} /><br/><br/>
            date:
            <input type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange} />
            <br/><br/>
            SubItems :
            Name:
            <input type="text" name="subItemName" value={this.state.subItemName} onChange={this.handleChange} /><br/><br/>
            Price:
            <input type="text" name="subItemPrice" value={this.state.subItemPrice} onChange={this.handleChange} /><br/><br/>

          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
          )
      }
  }
  
  const mapStateToProps = state => ({
    
  });

  const mapDispatchToProps = dispatch => ({
    // login: (payload) => dispatch(actions.login(payload)),
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListFormComponent);