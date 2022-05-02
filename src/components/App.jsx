import { useState } from 'react';
import '../styles/App.css'
import { NewsFeed } from './Main/NewsFeed';
import { RightSection } from './RightContent/RightSection';
import { Navbar } from './SideContent/Navbar';
import { Search } from './SideContent/Search';
import { SideBar } from './SideContent/Sidebar';

function App() {

  const [id, setId] = useState('home')

  return (
    <div className='App'>
      <div className='left-sidebar'>
        <Navbar setId={setId} id={id}/>
        <SideBar id={id}/>
      </div>
      <NewsFeed id={id}/>
      <div className='left-sidebar'>
       <RightSection/>
      </div>
      {id === 'search' && <Search setId={setId}/>}
    </div>
  );
}

export default App;
