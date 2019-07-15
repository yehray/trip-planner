import React from 'react';

const tileStyle =  {
  // border-radius: '15px 50px 30px 5px',
  background: '#73AD21',
  padding: '20px', 
  width: '200px',
  height: '150px' 
}

class TestComponent extends React.Component{
  constructor() {
    super();
    this.state = {
      locationId: '',
    };
  }
  
  componentWillReceiveProps(props) {
    this.setState({ locationId: props.locationId })
  }

  render() {
    return ( 
      <div className="Tile" style={tileStyle}>
      <p>TEST</p>
      <p>{this.props.locationId}</p>
      </div>
  )
  }
}

export default TestComponent;