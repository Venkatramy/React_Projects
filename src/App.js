import React from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import {thunk_action_creator} from './actions/fetchAction';
class App extends React.Component{
  handleSubmit=e=>{
    e.preventDefault();
    const username=this.getUserName.value;
    this.props.dispatch(thunk_action_creator(username));
    this.getUserName.value=""
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
<h2 className="title">Enter the Github username</h2>
<input
type="text"
placeholder="Enter Github username"
required
ref={input=>(this.getUserName=input)}/>
<button type="submit" className="button">Submit</button>
        </form>
        {this.props.data.isFetching?<h3>Loading...</h3>:null}
        {this.props.data.isError?(
          <h3 className="error">No such user exists.</h3>
        ):null}
        {Object.keys(this.props.data.userData).length>0?(
          <UserInfo user={this.props.data.userData}/>
        ):null}
      </div>
    )
  }
}
const mapStateToProps=state=>{
  return{
    data:state
  };
};
export default connect(mapStateToProps)(App);
