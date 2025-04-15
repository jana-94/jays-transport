import Link from 'next/link';
import './footer.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='footer-outline'>
      <div className='logo-container'>
        <Link href='/'>
          <Image
            className='header-logo'
            src='/img/logo_white.svg'
            alt='logo'
            width={200}
            height={40}
          />
        </Link>
        <div className='social'>
          <Link href='/'className='social-icon-outer'>
            <img className='social-icon' src='/img/fb.svg' alt='facebook' />
          </Link>
          <Link href='/'className='social-icon-outer'>
            <img className='social-icon' src='/img/tw.svg' alt='twitter' />
          </Link>
          <Link href='/'className='social-icon-outer'>
            <img className='social-icon' src='/img/instagram.svg' alt='instagram' />
          </Link>
          <Link href='/'className='social-icon-outer'>
            <img className='social-icon' src='/img/linkedin.svg' alt='linkedin' />
          </Link>
        </div>
      </div>
      {/* <div className='address-section'>
          <div className='address-content'>
            <h1>Call our office</h1>
          <p className='address flex'><img className='mr-2' src='/img/call_white.svg' /> +33 (0)6 84 40 61 26</p>
          </div>
          <div className='address-content'>
            <h1>Email</h1>
          <p className='address flex'><img className='mr-2' src='/img/time.svg' /> contact@jays-transport.fr</p>
          </div>
        </div> */}
        <div className='divider' />
        <div className='footer-bottom'>
          <div>
            <h1>
            &copy;{new Date().getFullYear()} Jay’s Transport
            </h1>
          </div>
          <div className='address-content'>
          <p className='address flex'><img className='mr-2' src='/img/call_white.svg' /> +33 (0)6 84 40 61 26</p>
          </div>
          <div className='address-content'>
          <p className='address flex'><img className='mr-2' src='/img/time.svg' /> contact@jays-transport.fr</p>
          </div>
        </div>

    </div>
  );
};

export default Footer;