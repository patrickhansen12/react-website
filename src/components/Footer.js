import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
            <Link to='/'>FAQ</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
            <Link to='/'>Tour guide</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a  target="_blank" href="https://www.facebook.com/patrick.hansen.1690/">Facebook</a>
            <a  target="_blank" href="https://www.youtube.com/channel/UCgdvmjqvrNI_7x6WXYEZH1A">Youtube</a>
            <a  target="_blank" href="https://www.instagram.com/patrick.hansen.1690/">Instagram</a>
            <a  target="_blank" href="https://twitter.com/patrickbroehans">Twitter</a>
            <a  target="_blank" href="https://www.linkedin.com/in/patrick-hansen-01460617a/">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FastTRVL
              <i class='fas fa-dragon' />
            </Link>
          </div>
          <small class='website-rights'>FastTRVL 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              target='_blank'
              href="https://www.facebook.com/patrick.hansen.1690/"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/patrick.hansen.1690'
              target="_blank"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://www.youtube.com/channel/UCgdvmjqvrNI_7x6WXYEZH1A"
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/patrickbroehans'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a class='social-icon-link twitter'
              href="https://www.linkedin.com/in/patrick-hansen-01460617a/"
              target='_blank'
              aria-label='LinkedIn'
            >       
            <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;