import React , { useState } from 'react'
import '../../styles/SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import { Notification } from '../SideContent/Notification'
import { Messages } from '../SideContent/Messages';

export const SideBar = ({id, setId}) => {


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
            <AccountCircleIcon className='p-1' sx={{fontSize: 50}}/> Josh Jacinto
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
            {shortcuts.map((data,index) => {
              return (
                <li className='p-2' key={index}>
                  <img className='pe-2'src={data.url} alt='shortcuts'/> {data.name}
                </li>
              )
            })}
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


const shortcuts = [
  {
    url: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_eui2=AeE3cuvWpgN3EhjKKy9s4CCIkGwkPrvJAp6QbCQ-u8kCnl3D8Zut4JfD4pKc1DEFj3eygl8EmymM8n0Vi9nvrMjr&_nc_ohc=9xMWiBG_BosAX-f6aXc&_nc_oc=AQnbwm_MUXL0xAs3dCmN8znDi1541T6JY1hlwvxQ8m515Nm-ZCtaVv6vnkvGvdTsIHo&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT-n1J_mI7xV7gc4pB94SKp8veAvZ35B8mEjyjc4JzVv-w&oe=627332AF',
    name: '8 Ball Pool'
  },
  {
    url: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_eui2=AeHQ-tGOWktRQPbU00Du5vYn2pOLRy8vZ07ak4tHLy9nTvKVI5dhBEZXU1E_Y7rNCj_bZg1RnCqr5BeA6cFjbDQR&_nc_ohc=FPYLrbqXkY0AX9NTrFm&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT-Oq7xM4PF2UVzPc9GAHj9LRRAKH6WuE9GZaoG6Dl5Rrg&oe=6272DCC2',
    name: 'Candy Crush Saga'
  },
  {
    url: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.2081-6/12512181_774488585988936_247651205_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_eui2=AeH8zD8bJRKOqCyUQbrFHbLP8Z4YJw2NRjXxnhgnDY1GNYcAFYCwVJyVS6lEkVIxqbYYf_kJR4jMGmA0xL8wKEVe&_nc_ohc=HgfRFIhgSEoAX-R5s92&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT8jBEaG5lcb4xyJ1uUa7Jva1RS7YS99ylpo0ZxfIOThWQ&oe=62738C9A',
    name: 'Coin Master'
  },
  {
    url: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.2081-6/28129135_1686685264729832_3956709029115330560_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_eui2=AeFofv2yvxMBfgRjeAwyQYwXoEjsVUqi63agSOxVSqLrdm8u8paepkAOY-eUJhDrEXmeJIquBFfdV-I1JjdoWYQ4&_nc_ohc=JXObhIqG94MAX9lTMEl&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT87UriHi78-hZEP3_aSJPnCd8fDDvOH9-RsIDentOZ6Yg&oe=62728FA9',
    name: 'Dragon City'
  },
  {
    url: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.2081-6/26477732_5082148895180525_4133107059698696192_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_eui2=AeFsWWWoYAUDvl0Xd3RYQ1qN0rprziV-zurSumvOJX7O6qXX3mbYCCk49XxYTk6_RGwHxGO07oOTeaplusWycsSk&_nc_ohc=aWScs_oCRrgAX8ySV6J&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT8uUt8HOdNP7xVvXylzW5__mUMASHiFuRWhoBqsuYm1dA&oe=62735BE4',
    name: 'FarmVille 2'
  }
]
