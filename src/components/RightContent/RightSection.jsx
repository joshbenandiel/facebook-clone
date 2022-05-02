import React from 'react'
import '../../styles/RightSection.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {BiBell} from 'react-icons/bi'
import {FaBullhorn, FaBirthdayCake, FaUserCircle} from 'react-icons/fa'
import {HiPencilAlt} from 'react-icons/hi'


export const RightSection = () => {
  return (
    <div className='right-section-container pt-4'>
        <div className='sponsor-section'>
          <p>Sponsored</p>
        </div>
        <div className='yourpage-section mt-1'>
          <p>Your Pages</p>
          <div className='pages-wrapper d-flex align-items-center'>
            <AccountCircleIcon className='me-2' sx={{fontSize: 40}}/><p className='mb-0'>User Page</p>
          </div>
          <div className='pages-wrapper d-flex align-items-center ps-4'>
            <BiBell className='me-2' size={22}/><p className='mb-0' style={{fontSize: '15px'}}>0 Notifications</p>
          </div>
          <div className='pages-wrapper d-flex align-items-center ps-4'>
            <FaBullhorn className='me-2' size={22}/><p className='mb-0' style={{fontSize: '15px'}}>Create promotion</p>
          </div>
        </div>
        <div className='birthday-section mt-1'> 
            <p>Birthdays</p>
            <div className='birthday-wrapper d-flex align-items-center mb-3 p-2'>
              <FaBirthdayCake className='me-2'size={25}color='pink'/><p className='mb-0' style={{fontSize: '15px'}}><span style={{fontWeight: 'bold'}}>Friend </span>and <span style={{fontWeight: 'bold'}}>7 others </span>have birthdays today.</p>
            </div>
        </div>
        <div className='contact-section mt-1'>
          <p>Contacts</p>
          <div className='contact-wrapper'>
            <div className='position-relative'>
              <FaUserCircle className='me-2'color='#fff' size={40}/>
              <span className='green-circle'></span>
            </div>
            <p>Your Friend 1</p>
          </div>
          <div className='contact-wrapper'>
            <div className='position-relative'>
              <FaUserCircle className='me-2'color='#fff' size={40}/>
              <span className='green-circle'></span>
            </div>
            <p>Your Friend 2</p>
          </div>
          <div className='contact-wrapper'>
            <div className='position-relative'>
                <FaUserCircle className='me-2'color='#fff' size={40}/>
                <span className='green-circle'></span>
            </div>
            <p>Your Friend 3</p>
          </div>


          <div className='new-message-button'>
            <div className='new-message-circle'>
              <HiPencilAlt size={30}/>
            </div>
          </div>
        </div>
    </div>
  )
}



