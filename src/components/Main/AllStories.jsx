import React, { useState } from 'react'
import '../../styles/AllStories.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {GrFormAdd} from 'react-icons/gr'
import photo from '../../images/photo.png'
import { useGetAllData } from '../../firebase-config'


export const AllStories = ({setSeeAllStories}) => {

  const {allData} = useGetAllData()

  const [active, setActive] = useState('')
  const [image, setImage] = useState('')

  const handleImage = (user) => {
    setActive(user.date)
    setImage(user.stories)
  }

  return (
    <div className='allstories-container'>
      {!image && <img className='' src={photo} alt="" />}
        {image && (
          <div className='image-container'>
            <img className='all-stories-image' src={image} alt="" />
          </div>
        )} 
      <div className='allstories-left-container'>
        <AiFillCloseCircle 
          onClick={() => setSeeAllStories(false)}
          className='close-button-stories' size={40}/>
        <div className='mt-5'>
          <h3>Stories</h3>
        </div>
        <div className='your-story-section mt-5'>
          <h5>Your Story</h5>
          <div className='d-flex align-items-center mt-3'>
            <GrFormAdd className='your-story-add me-3' size={60}/>
            <div>
              <p className='m-0 fw-bold'>Create a Story</p>
              <p className='m-0'>Share a photo</p>
            </div>
          </div>
        </div>
        <div className='all-story-section mt-5'>
          <h5>All Stories</h5>
          {allData.slice(0).reverse().map(user => {
            return (
              <button 
                onClick={() => handleImage(user)}
                className={`all-story-wrapper${active === user.date ? '-active'   : ' '} mb-2`}>
                <img className='all-story-display-icon m-3 ms-0'src={user.display} alt="" />
                <div>
                  <p className='p-0 fw-bold m-0'>{user.username}</p>
                  <p className='m-0' style={{fontSize: '12px'}}>{user.date}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
