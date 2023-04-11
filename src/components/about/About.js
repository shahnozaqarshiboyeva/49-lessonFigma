import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Icon from '../img/Logo.jpg'
import Img1 from '../img/ImageC1.jpg'
import Img2 from '../img/ImageC2.jpg'
import Img3 from '../img/ImageC3.jpg'
export default function About({navbar}) {
  return (
    <div>
      <Navbar navbar={navbar}/>
      <div className="aboutpage">
      <div className="aboutpageicons">
        <img src={Icon} alt="Logo" />
        <span>Marico</span>
      </div>
      <h6>OUR MISSION</h6>
      <h1>We exist to help creators
      own their audience.</h1>
      <h2>We believe that social platforms are taking advantage of creators.
We want to change that and help creators fight back. </h2>
      <div className="information">
        <h4>Building a career on social platforms is like building a home on someone else's
land. While social platforms are great for discovering and reaching your audience,
your goal as a creator should be to convert your followers into email or text
message subscribers. Why? Look no further than TikTok. Almost overnight,
millions of creative people almost lost their careers. </h4>
         <h4>If a platform removes your account, or their algorithm for distribution no longer
favours you, are you prepared? </h4>
          <h4>If you want to build a career as a creator, your focus should be on building durable
distribution channels. Without distribution, you have no business. So how can you
build an audience that you actually own? With emails and phone numbers. These
distribution channels are direct. Instead of going through some algorithm, when
you share over email and text message, you know that your audience will see your
content. Even better is the fact that you own these lists. Instagram removes your
acount, you're ok. YouTube changes their algorithm, you're ok. You own your
audience. </h4>
        <h4>
        We built Marico to make this process easy, fast, and effective. The traditional
solution to this problem involves spending days building a website or hiring
someone expensive to do it for you. But those days are gone. With Marico, you
get a portfolio that is always up-to-date and converts visitors into email or text
message subscribers. The best thing? It takes under 5 minutes to setup, and it
automatically updates whenever you post new content anywhere online. We
believe the best tools are the ones you don't even notice. Marico helps you build
your own audience, without any hassle or time commitment. All you have to do is
share your portfolio link with your audience, and we'll handle the rest. 
        </h4>
        <h4>You can also create posts from within Marico and share them in just a few clicks
to your portfolio, and to your email and text message subscribers. Since all of your
content is already in Marico, creating content takes minutes, not hours. </h4>
        <h4>For too long, social platforms have taken advantage of creators. Fight back and
build an audience that you own. </h4>
      <h5>- The Team Marico (Olivia, William, and Noah) </h5>
      </div>
      
      
      </div>
      <div className="aboutpage2">
      <h6>OUR TEAM</h6>
      <h1>We love creators</h1>
      <div className="creators">
        <div className="creatoritems1">
        <img src={Img1} alt="Img" />
        <h2>Jacob Mark</h2>
        <p>CEO & Design</p>
        <h3>Twitter <span><i class="fa-solid fa-light fa-arrow-up"></i></span></h3>
        </div>
        <div className="creatoritems1">
        <img src={Img2} alt="Img" />
        <h2>Daniel</h2>
        <p>CTO & Development</p>
        <h3>Twitter <span><i class="fa-solid fa-arrow-up"></i></span></h3>
        </div>
        <div className="creatoritems1">
        <img src={Img3} alt="Img" />
        <h2>Ryan Trump</h2>
        <p>COO & Sales</p>
        <h3>Twitter <span><i class="fa-solid fa-arrow-up"></i></span></h3>
        </div>
      </div>

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
</div></div>
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
