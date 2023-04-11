import React from 'react'
import './Blog.scss'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Icon from '../img/Logo.jpg'
import Img1 from '../img/Twitter_logo.jpg'
import Img2 from '../img/YouTube_logo.jpg'
import Img3 from '../img/Wordpress_logo.jpg'
import Img4 from '../img/Substack_logo.jpg'
import Img5 from '../img/Medium_logo.jpg'
import Img6 from '../img/Wordpress_logo2.jpg'
import Img7 from '../img/Spotify_logo.jpg'
import Img8 from '../img/Anchor_logo.jpg'
import Img9 from '../img/Podcast_logo.jpg'
import Img10 from '../img/Instagram_logo.jpg'
import Img11 from '../img/Linkedin_logo.jpg'
import Img12 from '../img/Facebook_logo.jpg'



export default function Blog({navbar}) {
  return (
    <div>
      <Navbar navbar={navbar}/>
      <div className="Blogpage">
        <h1>Content Sources</h1>
        <p>Connect these sources to your Marico homepage.</p>
        <div className="Blogpageitems">
          <div className="box1">
            <img src={Img1} alt="" />
            <h2>Twitter</h2>
            <h3>Connect your Twitter feed to your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img2} alt="" />
          <h2>YouTube</h2>
          <h3>Connect your YouTube feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img3} alt="" />
          <h2>WordPress</h2>
          <h3>Connect your WordPress feed
to your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img4} alt="" />
          <h2>Substack</h2>
          <h3>Connect your Substack feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img5} alt="" />
          <h2>Medium</h2>
          <h3>Connect your Medium feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img6} alt="" />
            <span><button>Coming Soon</button></span>
            <h2>RSS Feeds</h2>
            <h3>Connect your RSS feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img7} alt="" />
          <h2>Spotify</h2>
          <h3>Connect your Spotify feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img8} alt="" />
          <h2>Anchor</h2>
          <h3>Connect your Anchor feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img9} alt="" />
          <h2>Apple Podcasts</h2>
          <h3>Connect your Apple Podcast
to your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img10} alt="" />
          <span><button>Coming Soon</button></span>
          <h2>Instagram</h2>
          <h3>Connect your Instagram feed
to your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img11} alt="" />
          <span><button>Coming Soon</button></span>
          <h2>Linkedin</h2>
          <h3>Connect your Linkedin feed to
your Marico homepage.</h3>
          </div>
          <div className="box1">
            <img src={Img12} alt="" />
          <span><button>Coming Soon</button></span>
         <h2>Facebook</h2>
         <h3>Connect your Fecebook feed to
your Marico homepage.</h3>
         </div>
          
        </div>
      </div>
      <div className="homepage5">
  <h1>We've helped over 1,000 creatorsre
claim control of their audience.</h1>
</div>
      
<div className='homepage6'>
    <img src={Icon} alt="Icon"/>
    <h1>Get Started Now</h1>
    <p>Setup is easy and takes under 5 minutes.</p>
    <button>Get Started Now</button>
    <div className="icons">
<span className='span1'><i class="fa-sharp fa-light fa-circle-dot fa-spin"></i></span>
        <span className='span2'>1000+</span>
        <span className='span3'>creators have already started</span>
</div>

    </div>
  <div className='footer'>
    <div className="footericons">
    <img src={Icon} alt="Icon" />
    <span>Marico</span>
    <p>info@marico.co</p>
    </div>
  
    <div className="nav">
    <ul>
    {
      navbar.map((item,index)=><li ><Link className='Link' to={item.path} >{item.name}</Link></li>)
    }
  </ul>
    </div>
  </div>
      </div>
      
  )
}

