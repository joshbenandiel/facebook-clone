import { useState } from 'react';
import '../styles/App.css'
import { NewsFeed } from './Main/NewsFeed';
import { RightSection } from './RightContent/RightSection';
import { Navbar } from './SideContent/Navbar';
import { Search } from './SideContent/Search';
import { SideBar } from './SideContent/Sidebar';
import { facebookSignIn, useFacebook } from '../facebook';
import logo from '../images/Facebook-Logo.png'
import { Createpost } from './Main/Createpost';



function App() {

  const [id, setId] = useState('home')
  const {signIn, user, error} = useFacebook()
  const [createPost, setCreatePost] = useState(null)

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
          postData={postData}
          setCreatePost={setCreatePost}
          user={user}
          id={id}/>
        <div className='left-sidebar'>
        <RightSection/>
        </div>
        {id === 'search' && <Search setId={setId}/>}
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
