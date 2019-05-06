import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class PostAddress extends Component {
  state = {
    // modal: false,
    name: '',
    address: '',
    url: '',
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state)
  }

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  onChange = (e) => {
    console.log(this.state)
    this.setState({ 
      [e.target.name]: e.target.value,   
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    await fetch(`http://localhost:5000/`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
          "Content-Type": "application/json",
        }
      },
    )
    console.log(this.state)
    // this.toggle();
    this.props.refresh();//this refreshes the page after we're done
    this.refresh();//this refreshes the page after we're done
  };
    
  newRecord = {
    name: this.state.name,
    address: this.state.address,
    url: this.state.url
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup onSubmit={this.handleSubmit}>
            <Label for="name">Name</Label>
              <Input type="string" name="name" id="name" placeholder="name" onChange={this.onChange} />
              <Label for="address">Address</Label>
              <Input type="string" name="address" id="address" placeholder="address" onChange={this.onChange} />
              <Label for="urla">URL</Label>
              <Input type="string" name="url" id="url" placeholder="url" onChange={this.onChange} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
      </div>
    );
  }
}

export default PostAddress;
