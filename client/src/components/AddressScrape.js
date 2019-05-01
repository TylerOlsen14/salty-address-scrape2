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
  render() {
    return (
      <div>
      <CardDeck>
        <Card>
          <CardImg top width="2%" src={logo} alt="Card image cap" />
          <CardBody>
            <CardTitle>

            </CardTitle>
            <CardText>

            </CardText>
            <Button>

            </Button>
          </CardBody>

        </Card>
        </CardDeck>
      </div>
    )
  }
}

export default AddressScrape

