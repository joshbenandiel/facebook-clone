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




function App() {

  const [id, setId] = useState('home')
  const {signIn, user} = useFacebook()
  const [createPost, setCreatePost] = useState(null)
  const [seeAllStories, setSeeAllStories] = useState(false)
  const [postContent, setPostContent] = useState('')

  const [postData, setPostData] = useState([
    {
      profile: '',
      icon: '',
      content: '',
      image: '',
      date:''
    }
  ]);
  

  

  return (
    <>
    {user.accessToken ? (
      <div className='App'>
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
          <RightSection/>
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
      <div className='facebook-login-container'>
        <img className='facebook-logo-login'src={logo} alt="" />
        <button onClick={signIn}>Sign In</button>
      </div>

    )}
    </>
  );
}

export default App;
