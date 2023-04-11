import React from 'react'
import './Pricing.scss'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Icon from '../img/Logo.jpg'
export default function Pricing({navbar}) {
  return (
    <div>
      <Navbar navbar={navbar}/>
      <div className="page1">
        <h1>Choose the plan that's right for you.</h1>
        <div className="pageitems">
            <div className="items1">
                <span>Starer</span>
                <h2>Perfect for tying out Wavium</h2>
                <h3>Free</h3>
                 <h4>Collect Unlimited subscribers</h4>
                 <h5>500 monthly emails</h5>
                 <h6>Upgrade to send more emails</h6>
                 <h4>Key features</h4>
                 <p><i class="fa-solid fa-square-check" ></i>Automatic updating home page</p>
                 <p><i class="fa-solid fa-square-check"></i>Unlimited sources + posts</p>
                 <button>Start For Free</button>
            </div>
            <div className="items2">
                <span>Basic</span>
                <h2>Build your online home</h2>
                <h3>$14 <h2 className='h2'>Per month or $19/mo, billed monthly</h2></h3>
                 <h4>Collect Unlimited subscribers</h4>
                 <h5>2,000 free monthl emails</h5>
                 <h6>Purchase more for $0.002 per email</h6>
                 <h4>Everything in starter, plus</h4>
                 <p><i class="fa-solid fa-square-check" ></i>Remove Wavium branding</p>
                 <p><i class="fa-solid fa-square-check"></i>Embed Wavium on your own domain</p>
                 <button>Start Free 14-day Trial</button>
            </div>
            <div className="items3">
                <span>Complete</span>
                <h2>Enhanced engagement</h2>
                <h3>$29 <h2>Per month or $34/mo, billed monthly</h2></h3>
                 <h4>Collect Unlimited subscribers</h4>
                 <h5>10,000 free monthly emails</h5>
                 <h6>Purchase more for $0.002 per email</h6>
                 <h4>Everything in basic, plus </h4>
                 <p><i class="fa-solid fa-square-check" ></i>Collect text massage subscribers</p>
                 <p><i class="fa-solid fa-square-check"></i>Share posts over text massage</p>
                 <button>Start Free 14-day Trial</button>
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

