import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


class AnimalNew extends Component {
    constructor(props) {
      super(props)
      this.state = {
        newAnimal: {
          name:"",
          age: "",
          enjoys: "",
          image:"",
          user_id:"" 
        },
        submitted: false
      }
    }

    handleChange = (e) => {
      const { newAnimal } = this.state
      newAnimal[e.target.name] = e.target.value
      this.setState({ newAnimal: newAnimal })
    }

    handleSubmit = () => {
      this.props.createNewAnimal(this.state.newAnimal)
      this.setState({ submitted: true})
    }
  render() {
    return (
        <>
        <Form>
            <FormGroup>
            <Label for="name">Name</Label>
            <Input 
                type="text" 
                name="name" 
                onChange={this.handleChange}
                value = {this.state.newAnimal.name}
                
            />
            </FormGroup>
            <FormGroup>
            <Label for="age">Age</Label>
            <Input 
                type="text" 
                name="age" 
                onChange={this.handleChange}
                value = {this.state.newAnimal.age}

            />
            </FormGroup>
            <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input 
                type="text" 
                name="enjoys"
                onChange={this.handleChange}
                value = {this.state.newAnimal.enjoys}
            />

            </FormGroup>
            <FormGroup>
            <Label for="image">Image</Label>
            <Input 
                type="text" 
                name="image" 
                onChange={this.handleChange}
                value = {this.state.newAnimal.image}

            />
            </FormGroup>
            <Button
            name="submit"
            onClick={this.handleSubmit}
            className='submit'
            >Submit
            </Button>
        </Form>
            { this.state.submitted && <Redirect to="/animalindex"/> }
      </>
    );
  }
}

export default AnimalNew;