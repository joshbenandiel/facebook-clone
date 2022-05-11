import React from 'react'
import '../../styles/RightSection.css'
import {BiBell} from 'react-icons/bi'
import {FaBullhorn, FaBirthdayCake} from 'react-icons/fa'
import {HiPencilAlt} from 'react-icons/hi'
import userAerica from '../../images/contacts/Aerica.jpg'
import userTrinidad from '../../images/contacts/Trinidad.jpg'
import userCali from '../../images/contacts/Cali.jpg'
import page from '../../images/userpage.jpg'


export const RightSection = ({activeChat,setActiveChat, setMinimizeArr, minimizeArr}) => {



  const handleChat = (profile) => {
    const user = activeChat.find(x => x.id === profile.id);
    const filteredMinimize = minimizeArr.filter(x => x.id !== profile.id)
    if (user) return;
    setActiveChat([
      ...activeChat,
      profile
    ])
    setMinimizeArr(filteredMinimize)
  }


  
  return (
    <div className='right-section-container pt-4'>
        <div className='sponsor-section'>
          <p>Sponsored</p>
        </div>
        <div className='yourpage-section mt-1'>
          <p>Your Pages</p>
          <div className='pages-wrapper d-flex align-items-center'>
            <img src={page} alt="" /><span className='ms-2'>Sojj Gaming</span>
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
          {users.map((profile) => {
            return (
              <div
                key={profile.id}
                onClick={() => handleChat(profile)} 
                className='contact-wrapper'>
                <div className='position-relative'>
                  <img className='contacts-images-user'src={profile.image} alt="aerica" />
                  <span className='green-circle'></span>
                </div>
                <p className='ms-3' style={{fontSize: '17px'}}>{profile.name}</p>
              </div>
            )
          })}
          <div className='new-message-button'>
            <div className='new-message-circle'>
              <HiPencilAlt size={30}/>
            </div>
          </div>
        </div>
    </div>
  )
}

const users = [
  {
    id: 1,
    name: 'Aerica Pepito',
    image: userAerica
  },
  {
    id: 2,
    name: 'Trinidad Jacinto',
    image: userTrinidad
  },
  {
    id: 3,
    name: 'Cali Dog',
    image: userCali
  }
]



