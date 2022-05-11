import React, { useRef, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import '../../styles/CreatePost.css'
import {RiCloseCircleFill} from 'react-icons/ri'
import {ImEarth} from 'react-icons/im'
import {GoTriangleDown} from 'react-icons/go'
import {IoMdPhotos} from 'react-icons/io'
import {FaUserTag} from 'react-icons/fa'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'
import {TiLocation} from 'react-icons/ti'
import {GiMicrophone} from 'react-icons/gi'
import {BsThreeDots} from 'react-icons/bs'
import {MdAddPhotoAlternate} from 'react-icons/md'
import CircularProgress from '@mui/material/CircularProgress';
import profile from '../../images/profile.jpg'

export const Createpost = ({setCreatePost, postData, setPostData, setPostContent, postContent}) => {


  
  const uploadRef = useRef();
  const today = new Date().toLocaleString();
  const [photo, setPhoto] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null)
  const [loading, setLoading] = useState(false)

  console.log(postData)

  const onUploadClick = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  }
  const onFileChange = (e) => {
    const image = e.target.files[0];
    setUserPhoto(image)
  }
  
  const handlePost = () => {
    setLoading(true)
    setTimeout(() => {
      if(userPhoto) {
        setPostData([
          ...postData,
          {
            id: postData.length + 1,
            userProfile: profile,
            userName: 'Josh Jacinto',
            date: today,
            content: postContent,
            image: URL.createObjectURL(userPhoto)
          }
        ])
      } else {
        setPostData([
          ...postData,
          {
            id: postData.length + 1,
            userProfile: profile,
            userName: 'Josh Jacinto',
            date: today,
            content: postContent,
            image: ''
          }
        ])
      }
      setLoading(false)
      setCreatePost(false)
    },2000)
  }
  
  return (
    <div className='create-post-container'>
      <div className='create-post-wrapper'>
        <div className='header-post-section position-relative'>
            <p className='m-0 fs-4'>Create Post</p>
            <RiCloseCircleFill 
              onClick={() => setCreatePost(false)}
              className='close-button'size={40}/>
        </div>
        <div className='create-post-section'>
          <div className='d-flex'>
            <img className='create-post-user-icon me-2'src={profile} alt="" />
            <div className='d-flex flex-column'>
              <p className='fw-bold m-0'>Josh Jacinto</p>
              <div className='public-button-wrapper d-flex align-items-center'>
                <ImEarth size={12}/>
                <p className='m-0 ms-1 me-1'>Public</p>
                <GoTriangleDown size={12}/>
              </div>
            </div>
          </div>
          <div className='createpost-section-wrapper mt-1'>
            <textarea 
              name='post'
              onChange={(e) => setPostContent(e.target.value)}
              className='create-post-input' 
              type="text" 
              placeholder={`What's on your mind, Josh?`}/>
          </div>
          <input
            ref={uploadRef}
            className="d-none"
            onChange={onFileChange}
            name="image-upload" 
            type="file" />
          {photo && (
            <div className='position-relative'>
               {userPhoto && 
                <RiCloseCircleFill 
                onClick={() => setUserPhoto(null)}
                className='close-button'size={40}/>   
               }        
              <button
                onClick={onUploadClick} 
                className='upload-photo-container position-relative mt-2 mb-2'>
                { userPhoto ? (
                    <img 
                      className='selected-image'
                      src={URL.createObjectURL(userPhoto)}
                      alt="" />
                ) : (
                  <>
                    <MdAddPhotoAlternate size={30}/>
                    <p className='m-0 fw-bold'>Add Photos/Videos</p>
                    <p className='m-0' style={{fontSize: '13px'}}>or drag and drop</p>
                  </>
                ) }
              </button>
            </div>
          )}
          <div className='add-to-your-post-section'>
            <p className='m-0 fw-bold'>Add to your post</p>
            <div className='w-50 d-flex justify-content-between'>
              <IoMdPhotos 
                onClick={() => setPhoto(!photo)}
                color='#45BD62' 
                className='add-post-icon'
                size={25}/>
              <FaUserTag color='#1877F2' className='add-post-icon' size={25}/>
              <BsFillEmojiLaughingFill color='#F7B928' className='add-post-icon' size={25}/>
              <TiLocation color='#F5533D' className='add-post-icon' size={25}/>
              <GiMicrophone color='#EE2848' className='add-post-icon' size={25}/>
              <BsThreeDots color='#606770'className='add-post-icon' size={25}/>
            </div>
          </div>
          <button 
            onClick={handlePost}
            className={`createpost-button${postContent || userPhoto ? '': '-disable'} mt-3 fw-bold`}>{loading ? <CircularProgress color="inherit" size={20}/> : `Post`}</button>
        </div>
      </div>
    </div>
  )
}
