import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase/app';
import {
  faList,
  faPlusSquare,
  faSignOutAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'


const Sidebar = (props) => {
  const clickHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.dispatch({
          type:'REMOVE_USER'
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sidebar'>
      <ul>
        
          <div>
            <li>
              <FontAwesomeIcon icon={faList} />
              <Link to='/booking/list' className='sidebarLink'>
                Booking List
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faPlusSquare} />
              <Link to='/add/rent/house' className='sidebarLink'>
                Add Rent House
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faHome} />
              <Link to='/my/rent' className='sidebarLink'>
                My Rent
              </Link>
            </li>
          </div>
        
        <li className='logOut'>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <Link onClick={clickHandler} to='/' className='sidebarLink'>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default connect() (Sidebar);
