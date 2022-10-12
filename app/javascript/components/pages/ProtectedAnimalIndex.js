import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row } from 'reactstrap'




class ProtectedAnimalIndex extends Component {
    render() {
        const {
          logged_in,
          current_user,
        } = this.props
        return (
          <>
            <h1>My Animals</h1>
            <div>
              <Row sm="3">
                {this.props.animals && this.props.animals.map(animal => {
                  return(
                  <div key ={animal.id} className='indexcard-container'>
                    <Card  className='indexcard-spacing'>
                      <CardImg top width="100%" src={animal.image}  className='indexcardimg-sizing' alt="pet-friendly animal" ></CardImg>
                      <CardBody className='indexcard-text'>
                        <CardTitle className='pagecard-title'>{animal.name}</CardTitle>
                        <CardSubtitle> {animal.age} {animal.enjoys}
                        </CardSubtitle>                   
                        <Button><a href={`/animalshow/${animal.id}`} >More info here</a></Button>     
                      </CardBody>
                    </Card>
                  </div>
                  )
                  })}
              </Row>
            </div>
          </>
        )
      }
    }
    

export default ProtectedAnimalIndex