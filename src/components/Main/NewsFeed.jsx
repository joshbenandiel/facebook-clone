import React, { useEffect , useRef, useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import '../../styles/NewsFeed.css'
import { IoIosAdd, IoMdPhotos } from 'react-icons/io'
import { MdVideoCameraFront } from 'react-icons/md'
import { GoSmiley } from 'react-icons/go'
import { RiVideoAddFill , RiShareForwardLine} from 'react-icons/ri'
import {FaUserCircle, FaUserFriends} from 'react-icons/fa'
import {BsDot, BsThreeDots} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {VscComment} from 'react-icons/vsc'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import CircularProgress from '@mui/material/CircularProgress';
import { writeUserData, useData, useGetAllData } from '../../firebase-config';


export const NewsFeed = ({id, user, setCreatePost, postData}) => {

  const nickname = user.user.displayName.split(' ')
  const email = user.user.email;
  const [story, setStory] = useState(false)
  const [imageUpload, setImageUpload] = useState(null)
  const [loading, setLoading] = useState(false)
  const [stories, setStories] = useState([])
 


  
  const {allData} = useGetAllData()
  
  // console.log(allData)







  
  const inputRef = useRef()

  const uploadImage = () => {
    if(inputRef){
      inputRef.current.click()
    }
  }

  const fileUpload = (e) => {
    setImageUpload(e.target.files[0])
  }

  const shareToStory = () => {
    if (imageUpload) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${imageUpload.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageUpload);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoading(true)
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
          }
        }, 
        (error) => {
          console.log(error)
        }, 
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setLoading(false)
          writeUserData(
            allData.length + 1,
            user.user.displayName,
            user.user.photoURL,
            downloadURL
          )
          setImageUpload('')
          setStory(false)
        });
        
      }
      );
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
                <img className='me-3'src={user.user.photoURL} alt="" />
                <h5>{user.user.displayName}</h5>
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
        {allData.length > 4 && 
          <BsFillArrowRightCircleFill 
          className='see-all-stories-button' 
          size={40}
        />}
        <div className="row story-section position-relative p-0">
          <div 
          onClick={() => setStory(true)}
          className='create-story p-0'>
            <input  className='d-none' type='file'/>
            <img src={user.user.photoURL} alt='profile'/>
            <span className='add-story-circle'>
            <IoIosAdd className='add-story-button'size={30}/>
            </span>
            <p>Create story</p>
          </div>
          {allData.slice(0,4).map((user, index)=> {
            if(!user.display) return null;
            return (
            <div 
              key={index}
              className='friends-story p-0 ms-2'
            >
              <img className='friends-story-user-profile' src={user.display} alt=''/>
              <img className='story-image-uploaded'src={user.profile_picture} alt="user-story" />
              <p>{user.username}</p>
            </div>
            )
          })}
          
        </div>
        <div className="row mt-4 p-0">
          <div className='post-section'>
            <div className="post-input">
              <img className='input-icon' src={user.user.photoURL} alt="" />
              <button 
                onClick={() => setCreatePost(prev => !prev)}
                className='input-box' name='post' type="text" placeholder={`What's on your mind, User`}>
                What's on your mind, {nickname[0]}?
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
              <div className='post-button'>
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
            <div className='position-relative me-4'>
                <FaUserCircle className='me-2'color='#fff' size={40}/>
                <span className='green-circle'></span>
            </div>
            <div className='position-relative me-4'>
                <FaUserCircle className='me-2'color='#fff' size={40}/>
                <span className='green-circle'></span>
            </div>
            <div className='position-relative me-4'>
                <FaUserCircle className='me-2'color='#fff' size={40}/>
                <span className='green-circle'></span>
            </div>
          </div>
        </div>
        <div className='row'>
          {postData.map((user, index)=> {
            if (!user.profile) return null;
            return (
              <div key={index} className='newsfeed-posts mt-3 position-relative p-0'>
                <div className='newsfeed-text-wrapper'>
                  <span className='newsfeed-dot'><BsThreeDots color='#fff' size={22}/></span>
                  <div className='d-flex'>
                    <img src={user.icon} alt=''className='newsfeed-icon me-2'/>
                  <div>
                    <p className='user-name-newsfeed fw-bold'>{user.profile}</p>
                    <div className='d-flex align-items-center'>
                      <p style={{fontSize: '12px'}} className='user-name-newsfeed'>{user.date}</p><BsDot color='#fff'/><FaUserFriends color='#fff'/>
                    </div>
                  </div>
                  </div>
                  <div className='mt-3 mb-3'>
                    <p className='fs-5'>{user.content}</p>
                  </div>
                </div>
                {user.images && (
                  <div className='position-relative'>
                    <img className='newsfeed-content'src={user.images} alt="user-post" />
                    {/* <img className='content-background'src={user.images} alt="user-post" /> */}
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
                      <img src={user.icon} alt=''className='newsfeed-icon me-2'/>
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

