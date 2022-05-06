import { useState } from 'react';
import '../styles/App.css'
import { NewsFeed } from './Main/NewsFeed';
import { RightSection } from './RightContent/RightSection';
import { Navbar } from './SideContent/Navbar';
import { Search } from './SideContent/Search';
import { SideBar } from './SideContent/Sidebar';
import { useFacebook } from '../facebook';
import logo from '../images/Facebook-Logo.png'
import { Createpost } from './Main/Createpost';
import { AllStories } from './Main/AllStories';
import Privacy from '../Privacy';
import { Chat } from './RightContent/Chat';
import { ChatHeadeMinimize } from './RightContent/ChatHeadeMinimize';




function App() {

  const [id, setId] = useState('home')
  const {signIn, user} = useFacebook()
  const [createPost, setCreatePost] = useState(null)
  const [seeAllStories, setSeeAllStories] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [activeChat, setActiveChat] = useState([])
  const [minimizeArr, setMinimizeArr] = useState([])

  const [postData, setPostData] = useState([
    {
      profile: '',
      icon: '',
      content: '',
      image: '',
      date:''
    }
  ]);

  console.log(activeChat)
  



  return (
    <>
    {user.accessToken ? (
      <div className='App'>
        <div
          className='chatbox-minimize-wrapper'>
          {minimizeArr && minimizeArr.map(user => {
            return (
              <ChatHeadeMinimize 
                setMinimizeArr={setMinimizeArr}
                minimizeArr={minimizeArr}
                setActiveChat={setActiveChat}
                allUser={activeChat}
                user={user}/>
            )
          })}
        </div>
        <div className='chatbox-wrapper'>
          {activeChat.map(data => {
            return (
              <>
              <Chat
                key={data.id}
                allUsers={activeChat}
                setActiveChat={setActiveChat}
                setMinimizeArr={setMinimizeArr}
                users={data}
              />
              </>
            )
          })}
        </div>
        {id === 'search' && <Search setId={setId}/>}
        {seeAllStories && <AllStories setSeeAllStories={setSeeAllStories}/>}
        <div className='left-sidebar'>
          <Navbar  
            user={user} 
            setId={setId} 
            id={id}/>
          <SideBar 
            user={user} 
            id={id} 
            setId={setId}/>
        </div>
        <NewsFeed 
          setSeeAllStories={setSeeAllStories}
          postData={postData}
          setCreatePost={setCreatePost}
          user={user}
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
            user={user}
        />}
      </div>
    ) : (
      <>
        <div className='facebook-login-container'>
          <img className='facebook-logo-login'src={logo} alt="" />
          <button onClick={signIn}>Sign In</button>
          <Privacy/>
        </div>
        
      </>
    )}
    </>
  );
}

export default App;
