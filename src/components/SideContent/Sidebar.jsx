import React , { useState } from 'react'
import '../../styles/SideBar.css'
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import { Notification } from '../SideContent/Notification'
import { Messages } from '../SideContent/Messages';

export const SideBar = ({id, setId, user}) => {


  const [isOpened, setIsOpened] = useState(false)

  function defineImages() {
    if (isOpened) {
      return images
    } else {
      return images.slice(0, 5);
    }
  }

  return (
    <div className='position-relative'>
      {id === 'notification' && <Notification setId={setId}/>}
      {id === 'messenger' && <Messages setId={setId}/>}
      <div className='sidebar-container'>
        <ul className='sidebar-menu'>
          <li>
            <div className='display-image-icon-sidebar p-2 pe-2 ps-1'>
              <img src={user.user.photoURL} alt='test'></img>
            </div> 
            {user.user.displayName}
          </li>
          {defineImages().map((image,index) => {
            return (
              <li className='p-2' key={index}>
                <img className='pe-2'src={image.url} alt='images'/> {image.name}
              </li>
            )
          })}
          {isOpened ? (
            <>
              <li 
                className='p-2'
                onClick={() => setIsOpened(false)}> 
                <span className='icon-circle ms-1 p-3 me-2'><FaAngleUp className='icon-arrow' color='#fff' size={18}/></span> See Less       
              </li>
            </>
          ) : (
            <>
              <li 
                className='p-2'
                onClick={() => setIsOpened(true)}> 
                <span className='icon-circle ms-1 p-3 me-2'><FaAngleDown className='icon-arrow' color='#fff' size={18}/></span> See More      
              </li>
            </>
          )
          }
        </ul>
        <div className='sidebar-shortcut-section'>
          <p className='m-0'>Your shortcuts</p>
          <ul className='sidebar-menu-shortcuts'>
            
          </ul>
        </div>
      </div>
    </div>
  )
}









const images = [
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEw3ogkg00_ISr5gcgHGuOBqfpKmA4GtxSp-kqYDga3FBq6NYfH7TGP34PEGJuzY8pdrCkEMHweaI0z0K7Jqn9s',
    name: 'Friends'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeGPQiT9eKZ9K0fCm0TIohOa-vsl1K9A-9v6-yXUr0D725unEbpjzFQYEbLS-hlvALWFzeXRjQtGbzuRBA4J08lc',
    name: 'Marketplace'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeH6KvC-M5L3OeXnY-Gb-v_6Z3xAUM5_bWpnfEBQzn9tandu25kgKbpZyvVfCUE2Z1nCosMKkGBoyM3UHXTh0He_',
    name: 'Groups'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeEK7OeP8bOXm0RpsqC18ENfa4YXxTz5jX9rhhfFPPmNf3MoFAPdbjwBB6iR6fSuNXxiAWSTUT8bdv9NX8RASAA0',
    name: 'Memories'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeH7P2FuvxYpyUO5jY1cTAYx-5kYScafj0T7mRhJxp-PRHmfADNhk6Y-96ctJdFQiSXHoKm-sf7ekYCstPdW65KH',
    name: 'Saved'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeH0VaB2H87aE6e_6yz-CLZtdJ1I9kdbuqh0nUj2R1u6qGRL1WaAz-s38K-rb5fnaGRlUb7GUBicJ3XA5gcQP5rw',
    name: 'Ad Center'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png?_nc_eui2=AeFKLFOo1RCfeaL1njO9szxt1AOmmFeO9TXUA6aYV471NRlvie4l5CgvS1baEIkIOxtVfNiMS1ZjJ5A2kOpCBaWW',
    name: 'Ads Manager'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/bRC_jZ58syg.png?_nc_eui2=AeG2nVijoTiOx13KsnbE5LM_GU7nN6PolSUZTuc3o-iVJUUv0XXt-_3QUCws5QX5WGRanUCRIhBlXvB8ERQtqnBu',
    name: 'Blood Donation'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/Wmkho44tBFC.png?_nc_eui2=AeGWPY6qeY01bQFMKqW8sHI8SiP4NsCJcqVKI_g2wIlypQcmaHMo-TEF73rfrpNRYh29jt0HCAKQVond4QcHmene',
    name: 'Business Manager'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png?_nc_eui2=AeFiN2sVmyV_2ct1uTvnZCcua1oEbyWYUilrWgRvJZhSKQwp-x3XC7qgwqilLvITO1ve4SBDf8AlGX3w858pjKOB',
    name: 'Climate Science Center'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png?_nc_eui2=AeGwRtxcVdUWBgCaNcnQT2HUeGGnOd3v9yJ4Yac53e_3Ihih3cagd2DEY17KXtLWgG5xrhG_GR6fnRe0F2W5OLxW',
    name: 'Community Help'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeEUEEw4myXo607CiicQwyNOFjhaWUpP68wWOFpZSk_rzAMrGAAdYXG2K0c63JC2WANZuuBblc60ygWu7JBV4ubM',
    name: 'COVID-19 Information Center'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png?_nc_eui2=AeH0_HxINaoyHl8DMWwLToBL7LYJCYgAtlvstgkJiAC2W7XZmghQD1f-NitoSxs0kTcv7ayjM3ffJMkMPaKSmPpa',
    name: 'Emotional health'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png?_nc_eui2=AeFGWdYpWjlck2JZVy_ENeLjG6-rVcdLeA4br6tVx0t4DmOzjaDdUot1yMSoTJFPtw4IVQBd8b1JbbIpRJIb8j6K',
    name: 'Events'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png?_nc_eui2=AeF72ixhL-SkgHmdufOHU-1NBcsI70keWaQFywjvSR5ZpIbv3uOwoEc4aRjlNlmpvXNRSELiavEDblcmcNbDq6G2',
    name: 'Facebook Pay'
  },
  {
    url:'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png?_nc_eui2=AeFaj5vr_ZD-Ey7UNp6h1Gl8VivWqxwsAktWK9arHCwCS5LH1B_Gx1fDvo1uJph5QlT0XYBWMta5ycJXC9Dg6PXV',
    name: 'Favorites'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png?_nc_eui2=AeFz8rLYGP6JE-q-HESHWThUGHN9ptS2mJ0Yc32m1LaYnRzSzxpdT5eSlbz49_oXOgOQzxbJJ-tO7lb8jewUn3MC',
    name: 'Fundraiser'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/JN4tUY_MDMK.png?_nc_eui2=AeHVj3dnB3yDYLQwWIcbgMIafujC-OPb9Hx-6ML449v0fO_THTNAulbRu6pXdP8E5aVX1banr-TZ68_D5ifYd-Ue',
    name: 'Gaming Video'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/AisrwUSvQf8.png?_nc_eui2=AeEUhOdL9cHd8R56mbByEaE5lrkQcHHjUKKWuRBwceNQolDECmlC2jfVSM8OlrlxEn_NoxpxhRRYoeM4_OT5shHP',
    name: 'Live videos'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png?_nc_eui2=AeE2t-NCvIsHHeeEK0EVhjFyhcFGLuoBbQiFwUYu6gFtCPoL-zAR-87LIXXBvzJfWt0q6f7aU0RX9AWpz-_knGDE',
    name: 'Messenger'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png?_nc_eui2=AeFxf6bsQd_mcyMzYaxPmr4oq16uKNk6s_WrXq4o2Tqz9dxfboJbHhOPJgJwgRKzOKfqSF66WHCd29Pyf41zFPFy',
    name: 'Most Recent'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeENDFvI7n1ixL-rtPUqHbtstEPFOzh_t-u0Q8U7OH-367Jt8MDQ7B78O7_LNhcDQ8lU7qsUkXpPp8UmNzOEQ_Mj',
    name: 'Pages'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png?_nc_eui2=AeGYYah7CUvKXCu_LFMnZMFznh-wUgbTF8ueH7BSBtMXyzxYH6E5Afg2ocAxgVqwkQdt132GCKoUbernzrkoCcfu',
    name: 'Play Games'
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png?_nc_eui2=AeFM08niU_kJPk3RXI_-o6X185aAcSfQVKbzloBxJ9BUpm39XO0qfH7RaEGOGYL1SRP1wu-ofXkgjFssLeLWunar',
    name: 'Recent ad activity'
  },

]



