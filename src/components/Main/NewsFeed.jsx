import React, { useRef, useState} from 'react'
import '../../styles/NewsFeed.css'
import { IoIosAdd, IoMdPhotos } from 'react-icons/io'
import { MdVideoCameraFront } from 'react-icons/md'
import { GoSmiley } from 'react-icons/go'
import { RiVideoAddFill , RiShareForwardLine, RiDeleteBin2Fill} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {BsDot, BsThreeDots} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {VscComment} from 'react-icons/vsc'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import CircularProgress from '@mui/material/CircularProgress';
import profile from '../../images/profile.jpg'
import juls from '../../images/story-images/juls.jpg'
import aics from '../../images/story-images/aicss.jpg'
import trinidad from '../../images/story-images/Trinidad.jpg'
import cali from '../../images/story-images/Cali.jpg'



export const NewsFeed = ({id, storyData, setCreatePost, setSeeAllStories, postData, setPostData, setStoryData}) => {

  // const nickname = user.user.displayName.split(' ')
  const [story, setStory] = useState(false)
  const [imageUpload, setImageUpload] = useState(null)
  const [loading, setLoading] = useState(false)
  const [deleteIsTrue, setDeleteIsTrue] = useState(null)

  
  
  const inputRef = useRef()
  const today = new Date().toLocaleString();
  const uploadImage = () => {
    if(inputRef){
      inputRef.current.click()
    }
  }

  const fileUpload = (e) => {
    setImageUpload(e.target.files[0])
  }

  const shareToStory = () => {
    setLoading(true)
    setTimeout(() => {
      setStoryData([
        ...storyData,
        {
          id: storyData.length + 1,
          url: URL.createObjectURL(imageUpload),
          display: profile,
          name: 'Josh Jacinto',
          date: today
        }
      ])
      setLoading(false)
      setStory(false)
      setImageUpload('')
    },2000)
    
  }

  const getPosts = (user) => {
    if(deleteIsTrue === user) 
    return setDeleteIsTrue('')
    setDeleteIsTrue(user)
  }
 
  const handleDelete = (userId) => {
    const filtered = postData.filter(x => x.id !== userId)
    if(filtered){
      setPostData(filtered)
    }
  }
  
  return (
    <>
    <div className={`container ${id === 'search' && `newsfeed-container`} me-4 ms-4 pt-4`}>
      {story && (
        <div className='create-story-section'>
          <input 
            ref={inputRef}
            onChange={fileUpload}
            type="file" 
            className='d-none'/>
          <div className='create-story-left'>
            <AiFillCloseCircle 
             onClick={() => {
               setStory(false)
               setImageUpload('')
             }}
             className='close-story'size={50}/>
            <div className='create-story-wrapper h-25 d-flex justify-content-center flex-column'>
              <h3 className='mt-5 mb-3'>Your Story</h3>
              <div className='d-flex align-items-center'>
                <img className='me-3'src={profile} alt="" />
                <h5>Josh Jacinto</h5>
              </div>
            </div>
            <button 
             onClick={shareToStory}
             className='share-story-button'>{loading ? <CircularProgress color='inherit' size={20}/> : `Share to story`}</button>
          </div>
          {imageUpload ? (
            <div className='preview-container'>
              <img className='preview-image'src={URL.createObjectURL(imageUpload)} alt="" />
            </div>
          ) : (
            <button 
            onClick={uploadImage}
            className='add-story-button-main'>
                <IoMdPhotos className='create-story-add' size={40}/>
                <p className='fw-bold'>Create a photo story</p>
            </button>
          )}

        </div>
      )}
      <section className="wrapper position-relative">
        {imagesStory.length > 3 && 
          <BsFillArrowRightCircleFill 
          onClick={() => setSeeAllStories(true)}
          className='see-all-stories-button' 
          size={40}
        />}
        <div className="row story-section position-relative p-0">
          <div 
          onClick={() => setStory(true)}
          className='create-story p-0'>
            <input  className='d-none' type='file'/>
            <img src={profile} alt='profile'/>
            <span className='add-story-circle'>
            <IoIosAdd className='add-story-button'size={30}/>
            </span>
            <p>Create story</p>
          </div>
          {storyData.slice(0).reverse().slice(0,4).map((user, index)=> {
            // if(!user.date) return null;
            return (
            <div 
              key={index}
              className='friends-story p-0 ms-2'
            >
              <img className='friends-story-user-profile' src={user.display} alt=''/>
              <img className='story-image-uploaded'src={user.url} alt="user-story" />
              <p>{user.name}</p>
            </div>
            )
          })}
        </div>
        <div className="row mt-4 p-0">
          <div className='post-section'>
            <div className="post-input">
              <img className='input-icon' src={profile} alt="profile" />
              <button 
                onClick={() => setCreatePost(true)}
                className='input-box' name='post' type="text" placeholder={`What's on your mind, User`}>
                What's on your mind, Josh?
              </button>
            </div>
            <div className='post-buttons-section'>
              <div className='post-button'>
                  <MdVideoCameraFront 
                    className='button' 
                    size={25} 
                    color='#F4556F'
                  />
                  <p className='m-0'>Live video</p>
              </div>
              <div 
                onClick={() => setCreatePost(true)}
                className='post-button'>
                  <IoMdPhotos 
                    className='button' 
                    size={25} 
                    color='#45BD62'
                  />
                  <p className='m-0'>Photo/Video</p>
              </div>
              <div className='post-button'>
                  <GoSmiley 
                    className='button' 
                    size={25} 
                    color='#C29428'
                  />
                  <p className='m-0'>Feeling/activity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 p-0">
          <div className='create-room-section'>
            <button className='create-room-button me-4'>
              <RiVideoAddFill className='me-2'size={25} color='#A43EC9'/>
            Create room</button>
            {imagesStory.map((user, index) => {
              return (
                <div type="button" key={index} className='position-relative me-3'>
                  <img  className='contacts-images-user' src={user.url} alt="chathead" />
                  <span className='green-circle'></span>
                </div>
              )
            })}
          </div>
        </div>
        <div className='row'>
          {postData.slice(0).reverse().map((user, index)=> {
            if (!user) return null;
            return (
              <div key={index} className='newsfeed-posts mt-3 position-relative p-0'>
                <div className='newsfeed-text-wrapper'>
                  <span
                     onClick={() => getPosts(user.date)}
                     className='newsfeed-dot'>
                      <BsThreeDots color='#fff' size={22}/>
                  </span>
                  {deleteIsTrue === user.date &&
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className='delete-button-wrapper'>
                        <p className='p-0 fw-bold me-1'>Delete</p>
                        <RiDeleteBin2Fill 
                          className='newsfeed-delete'
                          color='#fff' 
                          size={20}
                        />
                    </button>}
                  <div className='d-flex'>
                    <img src={user.userProfile} alt=''className='newsfeed-icon me-2'/>
                  <div>
                    <p className='user-name-newsfeed fw-bold'>{user.userName}</p>
                    <div className='d-flex align-items-center'>
                      <p style={{fontSize: '12px'}} className='user-name-newsfeed'>{user.date}</p>
                      <BsDot color='#fff'/><FaUserFriends color='#fff'/>
                    </div>
                  </div>
                  </div>
                  <div className='mt-3 mb-3'>
                    <p className='fs-5'>{user.content}</p>
                  </div>
                </div>
                {user.image && (
                  <div className='position-relative'>
                    <img className='newsfeed-content'src={user.image} alt="user-post" />
                  </div>
                )}
                <div className='pe-3 ps-3'>
                  <div className='newsfeed-button-section'>
                    <button className='d-flex align-items-center justify-content-center'>
                      <AiOutlineLike className='me-1' size={25}/>Like
                    </button>
                    <button className='d-flex align-items-center justify-content-center'>
                      <VscComment className='me-1' size={25}/>Comment
                    </button>
                    <button className='d-flex align-items-center justify-content-center'>
                      <RiShareForwardLine className='me-1' size={25}/>Share
                    </button>
                  </div>
                </div>
              <div className='pe-3 ps-3'>
                  <div className='comment-section'>
                    <div className='d-flex p-2'>
                      <img src={user.userProfile} alt=''className='newsfeed-icon me-2'/>
                      <input className='comment-input' type='text' placeholder='Write a comment...'></input>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
    </>
  )
}

const today = new Date().toLocaleString();

const imagesStory = [
  {
    id: 1,
    url: juls,
    display: juls,
    name: 'Junell Jacinto',
    date: today
  },
  {
    id: 2,
    url: aics,
    display: aics,
    name: 'Aerica Pepito',
    date: today
  },
  {
    id: 3,
    url: trinidad,
    display: trinidad,
    name: 'Triniad Jacinto',
    date: today
  },
  {
    id: 4,
    url: cali,
    display: cali,
    name: 'Cali The Dog',
    date: today
  },
]