import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const openPopup = (url) => {
    const isTwitter = url.includes('twitter');
    const isYoutube = url.includes('youtube');
    
    if (isTwitter) {
      const confirmationTwitter = window.confirm(`As I have no Twitter, do you want to see a dancing dragon?`);
      if (confirmationTwitter) {
        window.open('https://www.youtube.com/watch?v=4xnsmyI5KMQ&t=263s&ab_channel=TheMeekGuy', '_blank');
      }
    } else if (isYoutube) {
      const confirmationYoutube = window.confirm(`As I have no interesting YouTube, do you want to see a person never giving up?`);
      if (confirmationYoutube) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
      }
    }
  }
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
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href='/' className='social-logo'>
            DragonFlight Express
              <i class='fas fa-dragon dragon-icon' />
            </a>
          </div>
          <small class='website-rights'>
 2024</small>
          <div class='social-icons'>
            <a
              href='https://www.facebook.com/patrick.hansen.1690/'
              target='_blank'
              rel='noopener noreferrer'
              class='social-icon-link facebook'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              href='https://www.instagram.com/your-instagram-profile'
              target='_blank'
              rel='noopener noreferrer'
              class='social-icon-link instagram'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              rel='noopener noreferrer'
              class='social-icon-link youtube'
              aria-label='Youtube'
              onClick={() => openPopup('https://www.youtube.com/your-youtube-channel')}
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              rel='noopener noreferrer'
              class='social-icon-link twitter'
              aria-label='Twitter'
              onClick={() => openPopup('https://twitter.com/your-twitter-profile')}
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              href='https://www.linkedin.com/in/patrick-hansen-01460617a/'
              target='_blank'
              rel='noopener noreferrer'
              class='social-icon-link linkedin'
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