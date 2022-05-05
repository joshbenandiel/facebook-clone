import React, { useEffect, useRef } from 'react'
import '../../styles/Messages.css'
import {BsThreeDots, BsArrowsFullscreen, BsPencilSquare} from 'react-icons/bs'
import {RiVideoAddFill} from 'react-icons/ri'
import {HiOutlineSearch} from 'react-icons/hi'
import { useOutsideAlerter } from '../../hooks/OutsideAlerter'

export const Messages = ({setId}) => {

  const wrapper = useRef()
  const outsideIsClick  = useOutsideAlerter(wrapper)


  useEffect(() => {
    if(outsideIsClick){
      setId('home')
    }
  },[outsideIsClick, setId])
  return (
    <div ref={wrapper} className='messages-container'>
      <div className='messages-wrapper'>
        <div className='position-relative'>
          <div className='messages-header'>
            <h3>Chats</h3>
            <div>
              <BsThreeDots className='messages-icons'size={20}/>
              <BsArrowsFullscreen className='messages-icons' size={18}/>
              <RiVideoAddFill className='messages-icons' size={20}/>
              <BsPencilSquare className='messages-icons' size={18}/>
            </div>
          </div>
          <div className="messages-input position-relative mt-2 mb-2">
            <span className='search-icon'><HiOutlineSearch/></span>
            <input className='search-input' type="text" placeholder='Search Facebook'/>
          </div>
          </div>
          <div className='messages-footer'>
            <p>See all in messenger</p>
          </div>
        </div>
      </div>
  )
}
