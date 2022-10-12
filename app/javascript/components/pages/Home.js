import React, { Component } from 'react'
import { UncontrolledCarousel, Button } from 'reactstrap'



class Home extends Component {
  render() {
    const {
        logged_in,
        sign_in_route,
        new_user_route
      } = this.props

      return (
        
            <div className='home-container'>
             <h1 className='home-heading'>Welcome to Jungle Tinder!</h1>
            </div>
        
      )
    }
  }
  
  export default Home