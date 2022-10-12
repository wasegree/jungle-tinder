import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'reactstrap'


class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
      <div>
        <Navbar className={"header"}>
            <Nav>
              {/* Home page link for all users */}
              {
                <NavItem>
                  <a href='/' id='home' className="nav-link">Home</a>
                </NavItem>
              }
              
              {/* About link for all users */}
              {
                <NavItem>
                  <a href='/animalaboutme' className="nav-link">About Me</a>
                </NavItem>
              }

              {/* Animal index(unprotected) link for all users */}
              {!logged_in &&
                <NavItem>
                  <a href='/animalindex' className="nav-link">Recent added animals</a>
                </NavItem>
              }

              {/* Animal index(protected) link for logged in users */}
              {logged_in &&
              <NavItem>
                <a href='/animalindex' className="nav-link">View All Animals</a>
              </NavItem>
              }

              {/* Sign in link for users not logged in */}
              {!logged_in &&
                <NavItem>
                  <a href={sign_in_route} className="nav-link">Sign In</a>
                </NavItem>
              }

              {/* Sign up link for not logged in users */}
              {!logged_in &&
                <NavItem className="last-item">
                  <a href={new_user_route} className="nav-link">Sign Up</a>
                </NavItem>
              }

              {/* My Animals link for logged in user */}
              {logged_in &&
                <NavItem>
                  <a href='/myanimals' className="nav-link">My Animals</a>
                </NavItem>
              }

              {/* New Animal link for logged in user */}
              {logged_in &&
                <NavItem>
                  <a href='/animalnew' className="nav-link">Add Animal</a>
                </NavItem>
              }

              {/* Sign out link for logged in users */}
              {logged_in &&
                <NavItem className="last-item">
                  <a href={sign_out_route} className="nav-link">Sign Out</a>
                </NavItem>
              }
          </Nav>
        </Navbar>
      </div>
      </>
    )
  }
}

  


export default Header