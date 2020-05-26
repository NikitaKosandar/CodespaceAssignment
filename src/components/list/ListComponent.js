import React from "react";
import { connect } from 'react-redux';
import './listComponent.scss';
import data from './data';


class ListComponent extends React.Component {
  constructor() {
    super()
    this.state = {
        listData : [],
        listUse: [],
        pageSize : 4,
        pageNumber : 1,
    }
    this.InputSearchRef = React.createRef();
}

componentDidMount() {
    this.setState({ listUse : data});
    this.setPagination(this.state.pageNumber);
}

componentDidUpdate(prevProps, prevState){
}

setPagination = (no) => {
    let newArray = [];
    let copyArray = data;
    if(no){
        for(let i = 0; i < 4; i++){
            newArray.push(copyArray[i])
        }
    }
    this.setState({listData : newArray});
} 

setPagination2 = (no) => {
    let newArray = [];
    let copyArray = [...this.state.listUse];
    let firstNumber;
    let secondNumber;
    if(no === 1){
        firstNumber = 0;
        secondNumber = 4;
    } else {
        no = no - 1;
        firstNumber = (4 * no) + 1;
        secondNumber = 4 * no + 4;
    }
    if(no){
        copyArray.map(x => {
            if(x.id >= firstNumber && x.id <= secondNumber){
                newArray.push(x)
            }
        })
    }
    this.setState({listData : newArray});
} 

  handleChange = (event) => {
    let newArray = [];
    const value = this.InputSearchRef.current.value;
    let copyArray = [...this.state.listData];
    if(value !== ''){
        copyArray.map(x => {
            if(x.name == value) {
                newArray.push(x)
            }
        })
    } else {
        data.map(x => {
                newArray.push(x)
        })
    }
    this.setState({listData : newArray});
  }
  
  sortAge = () => {
    let newArray = [];
    newArray = [...this.state.listUse].sort((a, b) => {
    if(a.name > b.name) return 1;
    else if(a.name < b.name) return -1;
    return 0
    });
    this.setState({listUse : newArray})
    this.setPagination2(1);
    }
    
  render() {
      let pagination = [];
      let pageLength = this.state.listUse.length;
      let pageCount  = Math.ceil(pageLength / this.state.pageSize);
      if(pageCount){
        for (var i = 1; i <= pageCount; i++) {
            pagination.push(i);
        } 
      }
          return (
            <>
                <div className="card">
                <div className="title">List Items</div>
                <div><input type="text"  value={this.state.name} ref={this.InputSearchRef} placeholder="Enter Name" /></div>
                <button onClick={this.handleChange}>Submit</button>
                <button onClick={() => this.props.history.push(`/create-list`)}>Create User</button>
                <button onClick={this.sortAge}>sort</button>
                <table id="customers" style={{width: "100%"}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Image</th>
                        <th>Date</th>
                        {/* <th>action</th> */}
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.listData && this.state.listData.map((list, index) => (
                            <tr key={index}>
                                <td>{list.name} </td>
                                <td>{list.description}</td>
                                <td>{list.price} </td>
                                <td>{list.weight} </td>
                                <td>{list.image} </td>
                                <td>{list.date} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {pagination.map((no, index) =>
                        <div className="box" key={index} onClick={()=> this.setPagination2(no)}>{no}</div>
                    )}
                </div>
                </div>
            </>
          )
      }
  }
  
  const mapStateToProps = state => ({

  });
  
  export default connect(mapStateToProps)(ListComponent);