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
import { writePostData, useGetPostsData } from '../../firebase-config'
import uuid from 'react-uuid'

export const Createpost = ({user,setCreatePost, postData, setPostData, setPostContent, postContent}) => {


  	
  const today = new Date().toLocaleString();


  const nickname = user.user.displayName.split(' ')
  const uploadRef = useRef();

  const [photo, setPhoto] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null)
  const [loading, setLoading] = useState(false)

  const onUploadClick = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  }
  const onFileChange = (e) => {
    const image = e.target.files[0];
    setUserPhoto(image)
  }

  const { allPostsData } = useGetPostsData()
  
  const handlePost = () => {
    
    if (userPhoto) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${userPhoto.name}`);
      const uploadTask = uploadBytesResumable(storageRef, userPhoto);
  
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
          writePostData(
            allPostsData.length + 1,
            user.user.displayName,
            user.user.photoURL,
            postContent,
            downloadURL,
            today,
            allPostsData.length + 1,
          )
          setCreatePost(false)
        });
        
      }
      );
    } else {
      writePostData(
        allPostsData.length + 1,
        user.user.displayName,
        user.user.photoURL,
        postContent,
        '',
        today,
        allPostsData.length + 1,
      )
      setCreatePost(false)
    }
    
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
            <img className='create-post-user-icon me-2'src={user.user.photoURL} alt="" />
            <div className='d-flex flex-column'>
              <p className='fw-bold m-0'>{user.user.displayName}</p>
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
              placeholder={`What's on your mind, ${nickname[0]}?`}/>
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
            className={`createpost-button${postData || userPhoto ? '': '-disable'} mt-3 fw-bold`}>{loading ? <CircularProgress color="inherit" size={20}/> : `Post`}</button>
        </div>
      </div>
    </div>
  )
}
