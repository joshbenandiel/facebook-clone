import { useEffect, useState } from 'react';
import '../styles/App.css'
import { NewsFeed } from './Main/NewsFeed';
import { RightSection } from './RightContent/RightSection';
import { Navbar } from './SideContent/Navbar';
import { Search } from './SideContent/Search';
import { SideBar } from './SideContent/Sidebar';
import { Createpost } from './Main/Createpost';
import { AllStories } from './Main/AllStories';
import { Chat } from './RightContent/Chat';
import { ChatHeadeMinimize } from './RightContent/ChatHeadeMinimize';
import juls from '../images/story-images/juls.jpg'
import aics from '../images/story-images/aicss.jpg'
import trinidad from '../images/story-images/Trinidad.jpg'
import cali from '../images/story-images/Cali.jpg'
import profile from '../images/profile.jpg'
import beach from '../images/newsfeed-images/beach.jpg'




function App() {

  const [id, setId] = useState('home')
  const [createPost, setCreatePost] = useState(null)
  const [seeAllStories, setSeeAllStories] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [activeChat, setActiveChat] = useState([])
  const [minimizeArr, setMinimizeArr] = useState([])

  const [postData, setPostData] = useState([]);
  const [storyData, setStoryData] = useState([])
  
  useEffect(() => {
    setPostData(post)
    setStoryData(imagesStory)
  }, [])



  return (
    <>
      <div className='App'>
        <div className='chatbox-minimize-wrapper'>
          <div>
            {minimizeArr && minimizeArr.map((user, index) => {
              return (
                <ChatHeadeMinimize 
                  uniq={index}
                  setMinimizeArr={setMinimizeArr}
                  minimizeArr={minimizeArr}
                  setActiveChat={setActiveChat}
                  allUser={activeChat}
                  user={user}
                  />
              )
            })}
          </div>
        </div>
        <div className='chatbox-wrapper'>
            {activeChat.map((data, index) => {
              return (
                <>
                <Chat
                  uniq={index}
                  activeChat={activeChat}
                  setActiveChat={setActiveChat}
                  setMinimizeArr={setMinimizeArr}
                  users={data}
                />
                </>
              )
            })}
        </div>
        {id === 'search' && <Search setId={setId}/>}
        {seeAllStories && <AllStories 
          imagesStory={storyData}
          setSeeAllStories={setSeeAllStories}/>}
        <div className='left-sidebar'>
          <Navbar  
            // user={user} 
            setId={setId} 
            id={id}/>
          <SideBar 
            // user={user} 
            id={id} 
            setId={setId}/>
        </div>
        <NewsFeed 
          setStoryData={setStoryData}
          setPostData={setPostData}
          setSeeAllStories={setSeeAllStories}
          postData={postData}
          setCreatePost={setCreatePost}
          storyData={storyData}
          id={id}/>
        <div className='left-sidebar'>
          <RightSection 
            minimizeArr={minimizeArr}
            setMinimizeArr={setMinimizeArr}
            activeChat={activeChat} 
            setActiveChat={setActiveChat}/>
        </div>
        {createPost && 
          <Createpost 
            postContent={postContent}
            setPostContent={setPostContent}
            setPostData={setPostData}
            postData={postData}
            setCreatePost={setCreatePost}
            // user={user}
        />}
      </div>
    {/* ) : (
      <>
        <div className='facebook-login-container'>
          <img className='facebook-logo-login'src={logo} alt="" />
          <button onClick={signIn}>Sign In</button>
        </div>
        
      </>
    )} */}
    </>
  );
}

export default App;


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

const post = [
  {
    id: 1,
    userProfile: profile,
    userName: 'Josh Jacinto',
    date: today,
    content: 'Enjoy your day!',
    image: beach
  },
]