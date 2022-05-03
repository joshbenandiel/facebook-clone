import React, { useEffect, useRef } from 'react'
import '../../styles/Search.css'
import {HiOutlineSearch} from 'react-icons/hi'
import {BsXCircleFill} from 'react-icons/bs'
import {IoMdTime, IoIosClose} from 'react-icons/io'
import { useOutsideAlerter } from '../../hooks/OutsideAlerter'

export const Search = ({setId}) => {

  const wrapper = useRef()
  const outsideIsClick  = useOutsideAlerter(wrapper)

  
  useEffect(() => {
    if(outsideIsClick){
      setId('home')
    }
  },[outsideIsClick])
  
  return (
    <section className='search-container'>
        <div ref={wrapper} className='search-section'>
          <div className='position-relative d-flex'>
            <span className='search-icon'><HiOutlineSearch/></span>
            <input className='search-input' type="text" placeholder='Search Facebook'/>
            <BsXCircleFill 
            onClick={() => {
              setId('home')
            }} 
            className='search-exit'/>
          </div>
          <div className='w-100 position-relative'>
            <p className='recent-search-text'>Recent searches</p>
          </div>
          <div className='user-search-container d-flex align-items-center'>
            <div className='user-search-icon-wrapper'>
              <IoMdTime className='user-search'/>
            </div>
            <p style={{color: '#fff'}} className='m-0'>Search Text One</p>
            <IoIosClose color='#4E4F50' className='user-search-close'/>
          </div>
          <div className='user-search-container d-flex align-items-center'>
            <div className='user-search-icon-wrapper'>
              <IoMdTime className='user-search'/>
            </div>
            <p style={{color: '#fff'}} className='m-0'>Search Text Two</p>
            <IoIosClose color='#4E4F50' className='user-search-close'/>
          </div>
          <div className='user-search-container d-flex align-items-center'>
            <div className='user-search-icon-wrapper'>
              <IoMdTime className='user-search'/>
            </div>
            <p style={{color: '#fff'}} className='m-0'>Search Text Three</p>
            <IoIosClose color='#4E4F50' className='user-search-close'/>
          </div>
        </div>
        
        
    </section>
  )
}

