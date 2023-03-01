// npm modules
import { NavLink } from 'react-router-dom'

import '../../App.css'
// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <ul>
          <li className='list-item'>Welcome, {user.name}</li>
          <li className='list-item'><NavLink to="/">Home</NavLink></li>
          <li className='list-item'><NavLink to="/change-password">Change Password</NavLink></li>
          <li className='list-item'><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
