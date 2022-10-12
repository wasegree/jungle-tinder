import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


export class AnimalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          updatedAnimal: {
            name: "",
            age: "",
            enjoys: "",
            image:"",
            user_id:""
        },
        submitted: false
      }
    }

    componentDidUpdate(prevProps) {
        if (this.props.animal !== prevProps.animal) {
          this.setState({
            updatedAnimal: {
              name: this.props.animal.name,
              age: this.props.animal.age,
              enjoys: this.props.animal.enjoys,
              image: this.props.animal.image,
              user_id: this.props.animal.user_id,
            },
          });
        }
      }
    
      handleChange = (e) => {
        const { updatedAnimal } = this.state;
        updatedAnimal[e.target.name] = e.target.value;
        this.setState({ updatedAnimal: updatedAnimal });
      };
    
      handleSubmit = () => {
        this.props.updateAnimal(this.state.updatedAnimal, this.props.animal.id);
        this.setState({ submitted: true });
      };

  render() {
    return (
        <>
        <h1>Edit Animal</h1>
        <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input 
            type="text" 
            name="name" 
            onChange={this.handleChange}
            value = {this.state.updatedAnimal.name}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input 
            type="text" 
            name="age" 
            onChange={this.handleChange}
            value = {this.state.updatedAnimal.age}

        />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input 
            type="text" 
            name="enjoys"
            onChange={this.handleChange}
            value = {this.state.updatedAnimal.enjoys}
          />

        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input 
            type="text" 
            name="image" 
            onChange={this.handleChange}
            value = {this.state.updatedAnimal.image}

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

export default AnimalEdit