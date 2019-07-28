import React from 'react';
import { Button, Form} from "react-bootstrap";

const tileStyle =  {
  // border-radius: '15px 50px 30px 5px',
  background: '#73AD21',
  padding: '20px', 
  width: '200px',
  height: '150px' 
}

class TestComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      locationId: '',
      locationName: '',
      description: '',
      lat: '',
      lng: ''
    };
  }
  
  componentWillReceiveProps(props) {
    this.setState({ locationId: props.locationId })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  test = () => {
    this.props.addLocation()
  }

  render() {
    return ( 
      <div className="Tile" style={tileStyle}>
      <p>TEST</p>
      <p>{this.props.locationId}</p>
      <p>{this.props.lat}</p>
      <p>{this.props.lng}</p>
      <button onClick={this.test}>
        test
      </button>
      {/* <Form onSubmit={this.test}>
          <Form.Group>
            <Form.Label>Location Name</Form.Label>
            <Form.Control type="text" id="locationName" placeholder="Enter location name" value={this.state.locationName} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>description</Form.Label>
            <Form.Control type="text" id="description" placeholder="Enter description" value={this.state.description} onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </div>
  )
  }
}

export default TestComponent;