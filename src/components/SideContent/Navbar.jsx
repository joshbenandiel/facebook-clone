import React from 'react'
import '../../styles/Navbar.css'
import logo from '../../images/navbar-images/facebook.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';


export const Navbar = ({id, setId, user}) => {

  const activeIcon = (e) => {
    setId(e.target.id)
  }
  
  return (
      <div className='navbar-container position-relative'>
        <div className='navbar-logo'>
          <div className='facebook-logo mb-2'>
            <img src={logo} alt='logo' />
          </div>
        </div>
        <div className='navbar-menu'>
          <div className={id === 'home' ? 'active' : 'navbar-icon-wrapper'} > 
            <div className='navbar-icon'
            id='home'
            onClick={(e) => activeIcon(e)}
            >
              <HomeIcon id='home' className='icons' sx={{fontSize: 51}}/>     
            </div>
          </div>
          <div className={id === 'search' ? 'active' : 'navbar-icon-wrapper'}  id='search'>
            <div className='navbar-icon'
              id='search'
              onClick={(e) => activeIcon(e)}
            >
              <SearchIcon id='search' className='icons' sx={{fontSize: 51}}/>
            </div>
          </div>
          <div className={id === 'notification' ? 'active' : 'navbar-icon-wrapper'}  id='notification'>
            <div className='navbar-icon'
              id='notification'
              onClick={(e) => activeIcon(e)}
            >
              <NotificationsIcon className='icons' id='notification' sx={{fontSize: 51}}/>
            </div>
          </div>
          <div className={id === 'messenger' ? 'active' : 'navbar-icon-wrapper'}  id='messenger'>
            <div className='navbar-icon'
              id='messenger'
              onClick={(e) => activeIcon(e)}
            >
              <i id='messenger' className='icons-messenger-grid bx bxl-messenger'></i>
            </div>
          </div>
          <div className={id === 'grid' ? 'active' : 'navbar-icon-wrapper'}  id='grid'>
            <div className='navbar-icon'
              id='grid'
              onClick={(e) => activeIcon(e)}
            >
              <i id='grid' className='icons-messenger-grid bx bxs-grid'></i>
            </div>
          </div>
        </div>
        <div className='navbar-menu-bottom mt-2'>
          <div className='navbar-icon-bottom'>
          <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeHIW4oes6YetsDAfNJOQIBD2NRDTXGHJ53Y1ENNcYcnnb-g2DIUQlnI7JZpmdVbi6UYgNDoC8KSICl9mCzdbehm' alt="watch" />
          </div>
        </div>
        <div className='display-image-icon'>
          <img src={user.user.photoURL} alt='test'></img>
        </div>
     
      </div>
  )
}

