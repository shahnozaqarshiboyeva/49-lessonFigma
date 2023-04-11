import React from 'react'
import Navbar from '../navbar/navbar'
import './HomePage.scss'
import { Link } from 'react-router-dom'
import Smilebutton1 from '../img/Smile_emoji.jpg'
import Happybutton2 from '../img/Happy_emoji.jpg'
import Partybutton3 from '../img/Party_emoji.jpg'
import step1img from '../img/Image-4.jpg'
import Mobile from '../img/Mobile.jpg'
import Image from '../img/Image.jpg'
import Image2 from '../img/homepage4.jpg'
import Icon from '../img/Logo.jpg'
export default function Home({navbar}) {
  return (
    <div>
      <Navbar navbar={navbar}/>
      <div className="homepage">
     <div className="homepage1">
     <h1>Own your audience.</h1>
      <h2>Sou you don't lose them</h2>
      <p>Turn your audience into email and
        text message subscribers.</p>
        <div className="homebuttons">
          <button className='button1'>Get Started Now</button>
          <button className='button2'>View A Demo</button>
        </div>
<div className="icons">
<span className='span1'><i class="fa-sharp fa-light fa-circle-dot fa-spin"></i></span>
        <span className='span2'>1000+</span>
        <span className='span3'>creators have already started</span>
</div>
      </div>
      </div>
      <div className="homepage2">
        <h1>Why Creators Love Marico</h1>
        <div className="smiles">
          <div className="smilebutton">
          <span><img src={Smilebutton1} alt="smilebutton1" /></span>
          <h3>Reduced Anxiety</h3>
          <p>Never worry about losing your audience.</p>
          </div>
          <div className="happybutton2">
          <span><img src={Happybutton2} alt="happybutton2" /></span>
          <h3>Lower Workload</h3>
          <p>Just share one link. We'll handle the rest.</p>
          </div>
          <div className="partybutton3">
          <span><img src={Partybutton3} alt="partybutton3" /></span>
          <h3>More Time</h3>
          <p>Just share one link. We'll handle the rest.</p>
          </div>
        </div>
      </div>

     <div className="homepage3">
      <h6>STEP 1</h6>
      <h1>Connect Your Content</h1>
      <p>Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.</p>
      <div className="homepage3button1">View Avaliable Sources</div>
     </div>
     <div className="step1">
      <div className="step1items">
        <p>Your Homepage</p>
        <h2>Your Content.</h2>
        <h2>All in  <span>One Spot</span></h2>
        <h5><span>1</span>Bring all of your content together into one homepage.</h5>
         <h5><span>2</span>Your page automatically updates whenever you create.</h5>
         <button className='step1button1'>Get Started Now</button>
         <button className='step1button2'>View A Demo</button>
      </div>
      <div className="step1items2">
      <img src={step1img} alt="step1img" />
      </div>
     </div>
    <div className="step2">
      <h6>Step 2</h6>
      <h1>Share Your Homepage</h1>
      <p>Share your Wavium homepage link with your followers, and we'll handle the rest.</p>
    <div className="step2items">
      <div className="step2item1">
        <span>One Link</span>
        <h2>ALL You Create.</h2>
        <h3>One Link</h3>
        <img src={Mobile} alt="mobile" />
      </div>
      <div className="step2item2">
        <span>Collect Subscribers</span>
        <h2>Emails.Phone #s.</h2>
        <h3>All Yours.</h3>
      </div>
    </div>
    <button className="step2button">Get Started </button>
    </div>
    <div className="step3">
    <h6>Step 3</h6>
      <h1>Send Emails & Text Messages</h1>
      <p>No more going through a social platform. Reach and engage
       your audience directly over email and text massage.</p>

     <div className="step3items">
      <div className="step3items1">
        <p>Create & Share</p>
        <h2>Reach Your Audience  <span>Directly.</span></h2>
        <h5><span>1</span>Embed content or create something new to share.</h5>
         <h5><span>2</span>Share content over email, text message or your homepage.</h5>
         <button className='step3button1'>Get Started Now</button>
         <button className='step3button2'>View A Demo</button>
      </div>
      <div className="step3items2">
      <img src={Image} alt="Image" />
      </div>
     </div>
</div>
<div className="homepage4">
  <h1>Experts Agree</h1>
<img src={Image2} alt="Image2" />
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
