import React, { useState , useEffect, useRef } from 'react'
import '../../styles/Notification.css'
import {BsThreeDots, BsFillCircleFill} from 'react-icons/bs'
import {IoPeopleCircleOutline} from 'react-icons/io5'
import {AiOutlineCheck, AiOutlineSetting, AiOutlineBug} from 'react-icons/ai'
import {FaRegWindowClose} from 'react-icons/fa'
import { useOutsideAlerter } from '../../hooks/OutsideAlerter'



export const Notification = ({setId}) => {

  const [notifId, setNotifId] = useState(null)
  const [notifs, setNotifs] = useState(notifications);
  const [label, setLabel] = useState('all')

  const wrapper = useRef()
  const outsideIsClick  = useOutsideAlerter(wrapper)
  
  useEffect(() => {
    if(label === 'unread'){
      const unreadArr = [];
      notifs.forEach((notif) => {
        if (notif.type === "unread")
        unreadArr.push(notif); 
      });
      return setNotifs(unreadArr)
    }
    if (label === "all") {
      setNotifs(notifications)
    }
  },[label, notifs])

  useEffect(() => {
    setNotifs(notifications)
  },[])


  useEffect(() => {
    if(outsideIsClick){
      setId('home')
    }
  },[outsideIsClick, setId])
  
  const handleLabelClick = (e) => {
    setLabel(e.target.name)
  }
  const handleToggle = (data) => {
    if (notifId === data.id)
      return setNotifId('')
    setNotifId(data.id)
  }

  const readNotif = (data) => {
    setNotifId('')
    const findData = notifs.find((notif) => notif.id === data.id)
    if(findData){
      if(findData.type ==='read') return findData.type = 'unread';
      if(findData.type === 'unread') return findData.type = 'read';
    }
  }

  const removeNotif = (data) => {
    const filterArr = notifs.filter(notif => data.id !== notif.id)
    setNotifs(filterArr)
    setNotifId('')
  }

  return (
    <div ref={wrapper} className='notification-container'>
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
            onClick={(e) => handleLabelClick(e)}
            className={`button-notif-style${label ==='all' ? `-active`: ''}`}>All
          </button>
          <button 
            name='unread'
            onClick={(e) => handleLabelClick(e)}
            className={`button-notif-style${label ==='unread' ? `-active`: ''}`}>Unread
          </button>
        </div>
        <div className='notifications-data'>
          <p className='earlier-text p-1 m-0'>Earlier</p>
          {notifs.length > 0 && notifs.map((data) => {
            return (
              <div key={data.id}>
                <div className={`notif-wrapper${notifId === data.id ? `-active` : ''} d-flex position-relative`}>
                  {data.type === 'unread' && 
                  <BsFillCircleFill className='notif-blue-circle' size={13} color='#2E89FF'/>}
                  <div 
                    id={data.id}
                    onClick={() => handleToggle(data)}
                    className={`three-dots-notif-circle${notifId === data.id ? `-active` : ''}`}>
                    <BsThreeDots 
                      className='three-dots-notif' 
                      color='#A8ABAF' 
                      size={20}
                    />
                  </div>
                  {notifId === data.id &&
                    <div className='three-dots-option-container'>
                      <div 
                        onClick={() => readNotif(data)}
                        className='notification-three-dots-wrapper'>
                        <AiOutlineCheck className='me-3 ms-1'size={20}/><p>Mark as {data.type ==='read' ? 'Unread' : 'Read'}</p>
                      </div>
                      <div 
                        onClick={() => removeNotif(data)}
                        className='notification-three-dots-wrapper'
                      >
                        <FaRegWindowClose className='me-3 ms-1'size={20}
                        /><p>Remove this notification</p>
                      </div>
                      <div className='notification-three-dots-wrapper'>
                        <AiOutlineSetting className='me-3 ms-1'size={20}/><p>Turn off notifications from Friend</p>
                      </div>
                      <div className='notification-three-dots-wrapper'>
                        <AiOutlineBug className='me-3 ms-1'size={20}/><p>Report issue to Notifications Team</p>
                      </div>
                    </div>}
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
    type: 'unread'
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
    type: 'read'
  },
  {
    id: 6,
    description: "Friend invited you to like Friends Group.",
    time: '20 hours ago',
    type: 'unread'
  },
  
]