import React from 'react'
import '../../styles/NewsFeed.css'
import user from '../../images/main-images/user.jpg'
import { IoIosAdd, IoMdPhotos } from 'react-icons/io'
import { MdVideoCameraFront } from 'react-icons/md'
import { GoSmiley } from 'react-icons/go'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RiVideoAddFill , RiShareForwardLine} from 'react-icons/ri'
import {FaUserCircle, FaUserFriends} from 'react-icons/fa'
import {BsDot, BsThreeDots} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {VscComment} from 'react-icons/vsc'

export const NewsFeed = ({id}) => {


  
  return (
    <div className={`container ${id === 'search' && `newsfeed-container`} me-4 ms-4 pt-4`}>
      <section className="wrapper">
        <div className="row story-section p-0">
          <div className='create-story p-0'>
            <img src={user} alt='profile'/>
            <span className='add-story-circle'>
            <IoIosAdd className='add-story-button'size={30}/>
            </span>
            <p>Create story</p>
          </div>
          {stories.map((user, index)=> {
            return (
            <div 
              key={index}
              className='friends-story p-0'
            >
              <AccountCircleIcon className='friends-story-user-profile' sx={{fontSize: 41}}/>
              <img src={user.img} alt="user-story" />
              <p>{user.name}</p>
            </div>
            )
          })}
        </div>
        <div className="row mt-4 p-0">
          <div className='post-section'>
            <div className="post-input">
              <AccountCircleIcon className='user-icon' sx={{fontSize: 51}}/>
              <button className='input-box' name='post' type="text" placeholder={`What's on your mind, User`}>
                What's on your mind, User?
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
          <div className='newsfeed-posts mt-3 position-relative p-0'>
            <div className='newsfeed-text-wrapper'>
              <span className='newsfeed-dot'><BsThreeDots color='#fff' size={22}/></span>
              <div className='d-flex'>
              <FaUserCircle className='newsfeed-icon me-2'color='#fff' size={40}/>
              <div>
                <p className='user-name-newsfeed'>Facebook Friend</p>
                <div className='d-flex align-items-center'>
                  <p className='user-name-newsfeed'>1m</p><BsDot color='#fff'/><FaUserFriends color='#fff'/>
                </div>
              </div>
              </div>
              <div className='mt-1'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
            <img className='newsfeed-content'src="https://www.thesprucepets.com/thmb/DulTKWhx60iDnOqZDhCTDfpSLTc=/2122x1413/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-996939804-f0613b2cda7b43d1847eea2fbe304f64.jpg" alt="dogs" />
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
                  <AccountCircleIcon className='comment-user-profile me-2' sx={{fontSize: 40}}/>
                  <input className='comment-input' type='text' placeholder='Write a comment...'></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


const stories = [
  {
    name: 'User-1',
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-487880819-1565106514.jpg'
  },
  {
    name: 'User-2',
    img: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88'
  },
  {
    name: 'User-3',
    img: 'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-320-80.jpg'
  },
  {
    name: 'User-4',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&w=1000&q=80'
  },

]