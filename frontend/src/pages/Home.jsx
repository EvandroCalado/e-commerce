import mainBanner from '../assets/images/main-banner-1.jpg';
import catBanner from '../assets/images/catbanner-01.jpg';
import catBanner2 from '../assets/images/catbanner-02.jpg';
import catBanner3 from '../assets/images/catbanner-03.jpg';
import catBanner4 from '../assets/images/catbanner-04.jpg';

import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={mainBanner}
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-between align-items-center gap-2">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catBanner}
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catBanner2}
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599.00 <br /> or $49.91/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catBanner3}
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br /> styles and colors.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catBanner4}
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback & <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>SUport 24/7</h6>
                    <p className="mb-0">Shop with expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch2.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch2.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
