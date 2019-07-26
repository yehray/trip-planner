import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class SearchBar extends Component {
  
render() {
 return(
   <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
   </div>
  )
 }
}