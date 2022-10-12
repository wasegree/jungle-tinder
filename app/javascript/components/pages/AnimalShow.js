import React, { Component } from 'react'
import {  Card, CardImg, CardBody, CardTitle, CardText, Button, } from "reactstrap";



export class AnimalShow extends Component {
  render() {

    let { animal } = this.props

    return (
        <>
            {animal &&
            <Card>
                <CardImg className="show-image" src={animal.image} />
                    <CardBody className='indexcard-text'>
                    <CardTitle className='pagecard-title'>{animal.name}</CardTitle>
                    <CardText>
                        <span>{animal.age} </span>
                        <br/>
                        <span>{animal.enjoys}</span>
                    </CardText>
                    <div className="show-buttons">
                        <Button><a href={`/animalindex`} >All Animals</a></Button>
                        { animal.user_id === this.props.current_user.id &&
                        <>
                        <Button className="edit"><a href={`/animaledit/${animal.id}`} >Edit </a></Button>
                        <Button className="delete"><a onClick={() => this.props.deleteAnimal(animal.id)} href={`/animalindex`} >Delete</a></Button>
                        </>
                        }
                    </div>
                </CardBody>
            </Card>
            }
        </>
    )
  }
}

export default AnimalShow