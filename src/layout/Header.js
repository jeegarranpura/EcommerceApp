import React from 'react';
// import { logout } from '../utils/login-util';
import {history} from '../utils/navigation-utils';
import {tokenSecrectKey} from '../config/server-config';
import bn from '../utils/bemnames';
import jwt from 'jsonwebtoken';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import pathConst from '../constants/pathConts';
import { logout } from '../utils/auth-utils';


const bem = bn.create('header');

class Header extends React.Component {
  constructor(props) {
    super(props);
    try {
      const decode = jwt.decode(window.localStorage.getItem('token'));
      console.log("decode",decode)
      jwt.verify( window.localStorage.getItem('token'),tokenSecrectKey,(err, user) => {
        if (err) {
          window.localStorage.clear();
          history.push('/');
        }
      });

    //   this.state.Membership = decode.MemberShip;

      this.state.UserEmailName = decode.UserEmail.substring(0, decode.UserEmail.lastIndexOf('@'));
      this.state.UserEmailDomain = decode.UserEmail.substring(decode.UserEmail.lastIndexOf('@'));

    } catch (e) {
      // window.localStorage.clear();
      history.push('/');
    }
  }

  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
    Membership: [],
    UserEmailName: '',
    UserEmailDomain: '',
    sessionid: '',
    userid: '',
  };

  handleSidebarControlButton = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    // document.querySelector(QUERY_SELECTOR_SIDEBAR).classList.toggle(QUERY_SELECTOR_SIDEBAR_OPEN);
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  render() {
    return (
      <nav className={bem.b('bg-white navbar navbar-expand navbar-light')}>
        <ul className="mr-2">
          <button type="button" className="btn btn-outline-secondary" onClick={this.handleSidebarControlButton}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              size="25"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"></path>
            </svg>
          </button>
        </ul>
        {/* <ul className="navbar-nav">
          <SearchInput />
        </ul> */}
        <ul className={bem.e('nav-right navbar-nav')}>
          <li className="d-inline-flex nav-item">
            <a id="Popover1" className="position-relative nav-link" href="/#">
              <div className="d-inline-block position-relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  size="25"
                  className="bi can-click animated swing infinite"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>
                </svg>
                <span className={bem.e('badge position-absolute badge-primary')}>
                  <small> 5 </small>
                </span>
              </div>
            </a>
          </li>
          <li className="d-inline-flex nav-item">
            {' '}
            <span
              id="navbarDropdown"
              className="nav-link"
              role="button"
              onClick={this.toggleUserCardPopover}
              style={{ position: 'relative' }}
            >
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-gear"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                />
              </svg>
              <div
                className={this.state.isOpenUserCardPopover ? bem.b('dropdown-menu show') : bem.b('dropdown-menu')}
                aria-labelledby="navbarDropdown"
              >
                <SlideDown className={'my-dropdown-slidedown'}>
                  <div className={bem.b('card')}>
                    <div className={bem.b('card-header')}>
                      {this.state.UserEmailName} <br></br> {this.state.UserEmailDomain}
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              history.push(pathConst.LOGIN);
                            }}
                          >
                            User Profile
                          </span>
                        </li>
                        {/* <li className="list-group-item">
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              history.push(pathConst.PREFERENCES);
                            }}
                          >
                            Preferences
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span onClick={() => history.push('/alert')}>My Alerts</span>
                        </li>
                        <li className="list-group-item">
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              history.push(pathConst.FAQHELP_GENERAL);
                            }}
                          >
                            FAQ / Help
                          </span>
                        </li>
                        <li style={{ listStyleType: 'none' }}> 
                          <div className="list-group-innertitle">
                            <span>Modules Available:</span>
                          </div>
                        </li>*/} 
                      </ul>
                    </div>
                    <div className="card-footer text-muted">
                      <a
                        className="btn btn-link"
                        href="/"
                        onClick={() => logout(this.state.userid, this.state.sessionid)}
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </SlideDown>
              </div>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
