import React, { useState , useEffect} from 'react'
import '../../styles/Notification.css'
import {BsThreeDots, BsFillCircleFill} from 'react-icons/bs'
import {IoPeopleCircleOutline} from 'react-icons/io5'



export const Notification = () => {

  const [button, setButton] = useState('all')
  const [id, setId] = useState(null)
  const [filteredNotif, setFilteredNotif] = useState([])
  const [open, setOpen] = useState(null)
  console.log(open)

  const handleClick = (e) => {
    setButton(e.target.name)
  }


  useEffect(() => {

    const arr = []
    if(button === 'unread'){
      notifications.forEach((data) => {
        if(data.type === 'unread'){
          arr.push(data)
          setFilteredNotif(arr)
        }
      })
      return;
    }
    setFilteredNotif(notifications)
  },[button])

  // useEffect(() => {
  //   setOpen(false)
  // },[id])

  return (
    <div className='notification-container'>
      <div className='notification-wrapper'>
        <div className='position-relative'>
          <h3>Notifications</h3>
          <div className='three-dots-wrapper'>
            <BsThreeDots className='three-dots'color='#A8ABAF' size={25}/>
          </div>
        </div>
        <div className='button-section-notification'>
          <button 
            name='all'
            onClick={(e) => handleClick(e)}
            className={`button-notif-style${button ==='all' ? `-active`: ''}`}>All
          </button>
          <button 
            name='unread'
            onClick={(e) => handleClick(e)}
            className={`button-notif-style${button ==='unread' ? `-active`: ''}`}>Unread
          </button>
        </div>
        <div className='notifications-data'>
          <p className='earlier-text p-1 m-0'>Earlier</p>
          {filteredNotif.length > 0 && filteredNotif.map((data) => {
            return (
              <div key={data.id}>
                <div className='notif-wrapper d-flex position-relative'>
                  {data.type === 'unread' && 
                  <BsFillCircleFill className='notif-blue-circle' size={13} color='#2E89FF'
                  />}
                  <div 
                    onClick={() => {
                      setId(data.id)
                      setOpen(!open)
                    }}
                    className={`three-dots-notif-circle${id === data.id ? `-active` : ''}`}>
                    <BsThreeDots 
                      className='three-dots-notif' 
                      color='#A8ABAF' 
                      size={20}
                    />
                  </div>
                  {id === data.id && open === true &&
                    <div className='three-dots-option-container'>

                    </div>
                  }
                  <div className='profile-description-wrapper d-flex'>
                    <div>
                      <IoPeopleCircleOutline color='#fff' size={70}/>
                    </div>
                    <div className='d-flex flex-column w-100'>
                      <p className='notif-text'>{data.description}</p>
                      <p className='notifc-date'>{data.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}



const notifications = [
  {
    id: 1,
    description: "Friend shared Friend's post.",
    time: '4 hours ago',
    type: 'read'
  },
  {
    id: 2,
    description: 'Friend was live: "Watch me stream".',
    time: '6 hours ago',
    type: 'read'
  },
  {
    id: 3,
    description: "Friend invited you to like Friends Group.",
    time: '8 hours ago',
    type: 'unread'
  },
  { 
    id: 4,
    description: "Friend shared Friend's post.",
    time: '12 hours ago',
    type: 'read'
  },
  {
    id: 5,
    description: 'Friend was live: "Watch me stream".',
    time: '16 hours ago',
    type: 'unread'
  },
  {
    id: 6,
    description: "Friend invited you to like Friends Group.",
    time: '20 hours ago',
    type: 'unread'
  },
  
]