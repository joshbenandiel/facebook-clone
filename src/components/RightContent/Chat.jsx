import React, { useEffect, useRef, useState } from 'react'
import '../../styles/chatbox.css'
import {BsTelephoneFill, BsCameraVideoFill, BsEmojiSmileFill} from 'react-icons/bs'
import {VscChromeMinimize, VscClose} from 'react-icons/vsc'
import {IoAddCircle} from 'react-icons/io5'
import {IoMdPhotos} from 'react-icons/io'
import {BiSticker, BiSend} from 'react-icons/bi'
import {AiOutlineFileGif, AiFillLike} from 'react-icons/ai'
import { useOutsideAlerter } from '../../hooks/OutsideAlerter'
import '../../styles/ChatHeadMInimize.css'

export const Chat = ({users, setMinimizeArr, setActiveChat, activeChat, uniq}) => {
  

  const [value, setValue] = useState('')
  const chatboxWrapper = useRef()
  const inputRef = useRef()
  const val = useOutsideAlerter(chatboxWrapper)

  const [messages, setMessages] = useState([])

  

  useEffect(() => {
    if(!val){
      inputRef.current.focus()
    }
  },[val])


  const handleClose = (user) => {
   const userArr = activeChat.filter(x => x.id !== user.id)
   setActiveChat(userArr)
  }


  const handleMinimize = (user) => {
    const userArr = activeChat.find(x => x.id === user.id)
    const remainingUser = activeChat.filter(x => x.id !== user.id)
    if(userArr) {
      setMinimizeArr(prev => [
        ...prev,
        userArr
      ])
      setActiveChat(remainingUser)
    }
  }

  const handleMessages = () => {
    setMessages([
      ...messages,
      value
    ])
    setValue('')
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      setMessages([
        ...messages,
        value
      ])
      setValue('')
    }
  } 
  
  return (
      <div key={uniq} ref={chatboxWrapper} className='chatbox-container'>
        <div className='h-100 w-100 d-flex flex-column justify-content-between'>
          <div className='chatbox-header'>
            <div className='d-flex'>
              <div className='position-relative'>
                <img src={users.image} alt="user-profile" />
                <span className='green-circle'></span>
              </div>
              <div className='d-flex flex-column'>
                <p className='p-0 fw-bold m-0'>{users.name}</p>
                <p className='p-0 m-0' style={{fontSize: '13px'}}>Active Now</p>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <BsTelephoneFill className={`chatbox-header-button${val ? `` : `-active`}`} size={15}/>
              <BsCameraVideoFill className={`chatbox-header-button${val ? `` : `-active`}`} size={15}/>
              <VscChromeMinimize 
                onClick={() => handleMinimize(users)}
                className={`chatbox-header-button${val ? `` : `-active`}`} size={18}/>
              <VscClose 
                onClick={() => handleClose(users)}
                className={`chatbox-header-button${val ? `` : `-active`}`} 
                size={18}/>
            </div>
          </div>
          <div className='chatbox-messages-area'>
            <div className='chat-messages-wrapper d-flex flex-column'>
              {messages.map((text, index) => {
                return (
                  <p key={index} className='chat-messages'>{text}</p>
                )
              })}
            </div>
          </div>
          <div className='chatbox-footer mt-2'>
            <IoAddCircle className={`chatbox-footer-button${val ? `` : `-active`}`} size={25}/>
            {!value &&
            <>
              <IoMdPhotos className={`chatbox-footer-button${val ? `` : `-active`}`} size={25}/>
              <BiSticker className={`chatbox-footer-button${val ? `` : `-active`}`} size={25}/>
              <AiOutlineFileGif className={`chatbox-footer-button${val ? `` : `-active`}`} size={25}/>
            </> 
            }
            <div className={`position-relative input-wrapper-chatbox${value ? `-active` : ''}`}>
              <input
                value={value}
                ref={inputRef}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className='chatbox-input' 
                type="text" 
                placeholder='Aa'/>
              <span className='smiley-wrapper'>
                <BsEmojiSmileFill className={`chatbox-footer-button${val ? `` : `-active`}`} size={25}/>
              </span>
            </div>
            {value ? 
            <BiSend 
              onClick={handleMessages}
              className={`chatbox-footer-button${val ? `` : `-active`}`} 
              size={25}/>
            : <AiFillLike className={`chatbox-footer-button${val ? `` : `-active`}`} size={25}/>}
          </div>
        </div>
      </div>
    )}