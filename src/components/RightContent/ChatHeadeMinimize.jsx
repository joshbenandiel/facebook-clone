import React from 'react'
import '../../styles/ChatHeadMInimize.css'

export const ChatHeadeMinimize = ({user, allUser, setActiveChat, minimizeArr, setMinimizeArr, uniq}) => {



  const handleOpenChatBox = (user) => {
    const userArr = allUser.filter(x => x.id !== user.id)
    const minimizeFilter = minimizeArr.filter(x => x.id !== user.id)
    if(userArr){
      setActiveChat(prev => [
          ...prev,
          user
      ])
    }
    if(minimizeFilter){
      setMinimizeArr(minimizeFilter)
    }
  }
  
  return (
    <div 
      key={uniq}
      onClick={() => handleOpenChatBox(user)} 
      className='position-relative'>
      <img  className='chathead-minimize-image' src={user.image} alt="chathead" />
      <span className='green-circle-new'></span>
    </div>
  )
}
