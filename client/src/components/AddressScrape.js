import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardDeck,
  CardImg,
  CardTitle,
  CardText,
  Button
} from 'reactstrap'
import logo from './logo.jpg'


export class AddressScrape extends Component {
  state = {
    addresses: [],
  }

  getAddresses = async () => {
    await fetch('http://localhost:5000/')
      .then(response => {
        return response.json();
      })
      .then(data => 
        this.setState({ addresses: data }))
      .catch(error => console.log('Error:', error))
      }

  onDeleteClick = async (_id) => {
    await fetch('http://localhost:5000/' + _id, {
      method: "DELETE"
    })
    .then(resp => {
      this.getRecords();
    });
  }

  componentWillMount() {
    this.getAddresses()
  }

  render() {
    return (
      <div>
      <CardDeck width="90%" className="Address-List">
        {this.state.addresses.map((address, _id) => (
          <Card width="150px" key={_id} classNames="fade">
            <CardBody>
              <CardTitle>
                {address.name}
              </CardTitle>
              <CardText>
                {address.address}
                {address.urla}
              </CardText>
              <Button>

              </Button>
            </CardBody>
          </Card>
          ))}
        </CardDeck>
      </div>
    )
  }
}

export default AddressScrape

