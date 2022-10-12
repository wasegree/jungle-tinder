import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import AnimalIndex from './pages/AnimalIndex'
import ProtectedAnimalIndex from './pages/ProtectedAnimalIndex'
import AnimalShow from './pages/AnimalShow'
import AnimalNew from './pages/AnimalNew'
import AnimalEdit from './pages/AnimalEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      animals: [],
      
    }
  }

  componentDidMount(){
    this.readAnimal()
  }

  readAnimal = () => {
    fetch("/animals")
    .then(response => response.json())
    .then(animalsArray => this.setState({animals: animalsArray}))
    .catch(errors => console.log("Animals read errors", errors)) 
  }

  createAnimal = (animal) => {
    fetch("/animals", {
      body: JSON.stringify(animal),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
      
    })
    .then(response => response.json())
    .then(() => this.readAnimal())
    .catch(errors => console.log("New animal Error", errors))
  }

  updateAnimal = (animal, id) => {
    fetch(`/animals/${id}`,{
      body: JSON.stringify(animal),
      headers: {
        "Content-Type": "application/json"
      },
      method:"PATCH"
    })
    .then(response => response.json())
    .then(() => this.readAnimal())
    .catch(errors => console.log("Update animal errors", errors))
  }

  deleteAnimal = (id) => {
    fetch(`/animals/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
    .then(response => response.json())
    .then(() => this.readAnimal())
    .catch(errors => console.log("Delete animal errors", errors))
  }

  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props

    return (
      <Router>
        <div className="page-container">
         <Header {...this.props}/>
          <div className="content-wrap">
            
            <Switch className='content'>
                <Route exact path="/" render={() => {
                  return <Home logged_in = {logged_in} sign_in_route = {sign_in_route} new_user_route = {new_user_route} />
                }}  />
                <Route path="/animaledit/:id" render = {(props) => {
                  let id = +props.match.params.id
                  let animal = this.state.animals.find(animalObject => animalObject.id === id)
                  
                  return(
                    <AnimalEdit
                      animal = {animal}
                      {...this.props}
                      updateAnimal = {this.updateAnimal}
                      current_user={current_user}
                    />
                  
                  )
                }} />
                <Route path="/animalindex"  render={() => <AnimalIndex animals = {this.state.animals} logged_in = {logged_in} />} />

                <Route path="/myanimals" render={(props) =>{
                  let myAnimals = this.state.animals.filter(animal => animal.user_id === current_user.id)
                  return(
                <ProtectedAnimalIndex animals={myAnimals} />)}} />

              <Route path="/animalshow/:id" render={(props) => {
                let id = props.match.params.id
                let animal = this.state.animals.find(animal => animal.id === +id)
                return <AnimalShow animal={animal} current_user = {this.props.current_user} deleteAnimal = {this.deleteAnimal} />}} />

                <Route path="/animalnew" render={() => {
                  return  <AnimalNew createAnimal = {this.createAnimal} current_user = {this.props.current_user} />
                }} />  

                <Route path="/aniamlaboutme" component={AboutMe}/>

                <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App