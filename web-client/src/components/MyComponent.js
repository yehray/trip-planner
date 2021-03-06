import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActionTemplate} from '../actions';
//component
export default class MyComponent extends Component {


 handleOnClick = () => {
    this.props.handleOnClick('your-item-id');
  };

render() {
 return(
   <div>
    <h1>My Component</h1>
    <button onClick={this.handleOnClick}>Submit</button>
    {/* <p><a onClick={this.handleOnClick}>Dispatch Action</a></p> */}
    <p>Current item ID: { this.props.itemId }</p>
   </div>
  )
 }
}

//redux configuration:
const mapStateToProps = (state, ownProps) => {
return({
   itemId: state.itemId
 });
};
const mapDispatchToProps = (dispatch, ownProps) => {
return({
   handleOnClick: itemState => dispatch(setActionTemplate(ownProps.prop))
 });
};

export const MyComponentContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(MyComponent);

