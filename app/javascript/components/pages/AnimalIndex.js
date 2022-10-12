import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap'

class AnimalIndex extends Component {
  render() {

    const {
        logged_in,
        new_user_route, 
        animals} = this.props
        
        {animals && this.conditionalRendering().map(animal => {
                
    return (
        <>
            {logged_in &&
                <Col sm={4} key={animal.id}>
                    <div className='indexcard-container'>
                        <Card className='indexcard-spacing'>
                            <CardImg src={animal.image} alt="image of an animal" className='indexcardimg-sizing'/>
                            <CardBody className='indexcard-text'>
                                <CardTitle className='pagecard-title'>{animal.name}</CardTitle>
                                <CardSubtitle>{animal.age} {animal.enjoys}</CardSubtitle>
                                <Button><a href={`/animalshow/${animal.id}`}>More info here</a></Button>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            }
        </>
        )
    })}
  }
}

export default AnimalIndex