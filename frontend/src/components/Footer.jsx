import '../styles/Footer.css';
import newsletter from '../assets/images/newsletter.png';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-3">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sing up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby=""
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Avenida Conceljeiro João Alfredo, 03, Santa Luzia <br />
                  Arcoverde, Pernambuco <br />
                  CEP: 56517-100
                </address>
                <a
                  href="tel:+5587999999999"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +55 87999999999
                </a>
                <a
                  href="mailto:example@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  example@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-4 mt-4">
                  <Link className="text-white" to="#">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link className="text-white" to="#">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link className="text-white" to="#">
                    <BsYoutube className="fs-4" />
                  </Link>
                  <Link className="text-white" to="#">
                    <BsInstagram className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Evandro Calado
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
