import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import compare from '../assets/images/compare.svg';
import wishlist from '../assets/images/wishlist.svg';
import user from '../assets/images/user.svg';
import cart from '../assets/images/cart.svg';
import menu from '../assets/images/menu.svg';

import '../styles/Header.css';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel: +55 87999999999">
                  +55 87999999999
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev Store</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby=""
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center text-white gap-2">
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Comprare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-2">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-2">
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-2">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-2">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-item-center gap-4">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-3 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu" />
                      <span>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links d-flex align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
