import mainBanner from '../assets/images/main-banner-1.jpg';
import catBanner from '../assets/images/catbanner-01.jpg';
import catBanner2 from '../assets/images/catbanner-02.jpg';

import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={mainBanner}
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-between align-items-center">
                <div className="small-banner p-3 position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catBanner}
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Supercharged for pros.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-between align-items-center">
                <div className="small-banner p-3 position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catBanner2}
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>But iPad air</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
